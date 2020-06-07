<h1 align="center"><a><img src="https://github.com/rafaelrodrigopa/EcoletaNLW01/blob/master/Img/title.svg"></a></h1>
<h3 align="center">
Sistema Ecoleta - 1ª Edição Next Level Week (RocketSeat)
</h3>

<p align="center">

<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rafaelrodrigopa/EcoletaNLW01?color=rgb%2850%2C%2033%2C%2083%29&logo=black&logoColor=white">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rafaelrodrigopa/EcoletaNLW01?color=rgb%2850%2C%2033%2C%2083%29">

</p>

<hr>
<p align="center">
  <a  href="#home" target="-blank">Web</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mobile" traget="_blank">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#exec">Execução e Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#contribuicoes">Contribuições</a>&nbsp;&nbsp;&nbsp;
</p>
<hr>

<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sistema de cadastro de pontos de coleta de resíduos. Contém página Web, aplicativo Mobile e Server Side. Pela página Web é possível cadastrar os pontos de coleta e itens. Através do aplicativo pode-se consultar os pontos de coleta disponíveis de acordo com os itens, além da consulta das informações de cada ponto.</p>

## <a name="home"><p align="center">Aplicação Web</p></a>
![home_ecoleta](https://user-images.githubusercontent.com/27809524/83960750-c2ff6400-a862-11ea-9dd0-e73b2242a4cd.JPG)

## <a name="mobile"><p align="center">Aplicação Mobile</p></a>
![app](https://user-images.githubusercontent.com/27809524/83961323-3eafdf80-a868-11ea-8986-e5c16052e307.JPG)

## <a name="exec"><p align="center">Execução e Dependências</p></a>
#### Server
!Para rodar a aplicação é necessário ter o node.js instalado e o gerenciador de pacotes npm.

Instale as seguintes dependências:
`npm install @types/express -D`
`npm install ts-node -D//Executa typescript`
`npm install typescript -D`
`npx tsc --init`
`npm install ts-node-dev -D`
`npm install knex`

Após ter instalado todas as dependências é necessário alterar o endereço IP (Insira o seu IP).

Enfim, digite o comando
`npm run dev`
para rodar o servidor.

#### Web
Com o servidor rodando, instale as dependências abaixo para rodar a aplicação web.

`npm install sqlite3`
`npm install cors`
`npm install @types/cors -D`
`npm install react-icons`
`npm install react-router-dom`
`npm install @types/react-router-dom -D`
`npm install leaflet react-leaflet`
`npm install @types/react-leaflet -D`
`npm install axios`

Após ter instalado execute o seguinte comando
`npm run start`

#### Mobile
Para rodar a aplicação mobile execute os passos as seguir.

Dentro da pasta Web instalar as seguintes dependências.
`npm install -g expo-cli`

Instalar o gerenciador de pacotes yarn caso não tenha.
`npm install yarn`

Fontes, Navegação, Maps e Location, Envio de email e Imagens.

Fontes: 
`expo install expo-font  @expo-google-fonts/ubuntu @expo-google-fonts/roboto`
Navegação: 
`npm install @react-navigation/native`
`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
`npm install @react-navigation/stack`

Maps: 
`expo install react-native-maps`

Contants:
`expo install expo-constants`

Images:
`expo install react-native-svg`

Location: 
`expo install expo-location`

Mail:
`expo install expo-mail-composer`

Após ter instalado todas as dependências acima, instalar o expo no celular para executar. Com o expo no celular executar o seguinte comando.
`yarn start`

Após carregar a aplicação abrir o expo no celular e escanear o QR Code na página web que estará rodando a aplicação.

## <a name="contribuicoes"><p align="center">Contribuições</p></a>
[Diego Fernandes (RocketSeat)](https://github.com/diego3g)

![1920x1080](https://user-images.githubusercontent.com/27809524/83961941-a537fc00-a86e-11ea-9b05-4cf625b6efc6.jpg)

🚀 Construído por Rafael Rodrigo
