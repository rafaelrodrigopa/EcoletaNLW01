import express, { request, response } from 'express';
import knex from './database/connection';
import multer from 'multer';
import multerConfig from './config/multer';

import { celebrate, Joi } from 'celebrate';

import PointsController from './controllers/PointsControlers';
import ItemsController from './controllers/ItemsControlers';

// index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const pointsControlers = new PointsController();
const itemsControlers = new ItemsController();

routes.get('/items', itemsControlers.index)

routes.post('/points', 
    upload.single('Image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false,
    }),
    pointsControlers.create);

routes.get('/points', pointsControlers.index);
routes.get('/points/:id', pointsControlers.show);


export default routes;