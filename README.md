<div align="center">
    <img src="https://user-images.githubusercontent.com/41703972/73202586-17a70b80-411a-11ea-83f7-28ccc66a9f2a.png">
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ribeiromatheus/products-analyzer">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ribeiromatheus/products-analyzer">
  
  <a href="https://github.com/ribeiromatheus/products-analyzer/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ribeiromatheus/products-analyzer">
  </a>
</p>

**<p align="center">Identificador de produtos organizados e desorganizados</p>**

## Tópicos
<ul>
    <li><a href="#techs">Tecnologias</a></li>
    <li><a href="#libs">Algumas biblíotecas/módulos utilizados</a>
        <ul>
            <li><a href="#Backend">Backend</a></li>
            <li><a href="#Web">Web</a></li>
            <li><a href="#Mobile">Mobile</a></li>
        </ul>
    </li>
    <li><a href="#about">Sobre a aplicação</a>
        <ul>
            <li><a href="#about-Backend">Backend</a></li>
            <li><a href="#about-Web">Web</a></li>
            <li><a href="#about-Mobile">Mobile</a></li>
        </ul>
    </li>
    <li><a href="#get-started">Rodando a aplicação</a>
        <ul>
            <li><a href="#Requirements">Requisitos</a></li>
            <li><a href="#running">Clonando, instalando e algumas configurações</a></li>
            <li><a href="#get-started-watson">Criando uma instância do Watson Studio na IBM CLOUD</a></li>
            <li><a href="#last">Últimas configurações</a></li>
        </ul>
    </li>
    <li><a href="#intro">Apresentação da aplicação</a>
        <ul>
            <li><a href="#video">Vídeo</a></li>
            <li><a href="#doc">Documentação</a></li>
        </ul>
    </li>
</ul>

## <p id="techs">🛠️ Tecnologias</p>
- [Node.js](https://nodejs.org) - para a criação do servidor (API Restul).
- [ReactJS](https://reactjs.org) - para a criação da aplicação web.
- [React Native](https://reactnative.dev) - para a criação da aplicação mobile.
- [Expo](https://expo.io/learn) - plataforma para ajudar na criação da aplicação mobile.
- [IBM Watson Visual Recognition](https://www.ibm.com/cloud/watson-visual-recognition) - inteligência artificial de reconhecimento visual da IBM, para ajudar a detecção de produtos organizados e desorganizados.

## <p id="libs">📂 Algumas biblíotecas/módulos utilizados</p>
### <p id="Backend">🚪 Backend</p>
- [express](https://github.com/expressjs/express) - para criação do servidor (middleware).
- [ibm-watson](https://github.com/watson-developer-cloud/node-sdk) - para usarmos o watson na aplicação.
- [MongoDB (mongoose)](https://github.com/Automattic/mongoose) - banco de dados na Núvem.
- [cors](https://github.com/expressjs/cors) - para permitir que a API seja acessada pela aplicação web e mobile.
- [multer](https://github.com/expressjs/multer) - para salvar as imagens que foram enviadas pela câmera.
- [socket.io](https://github.com/socketio/socket.io) - permite comunicação baseada em eventos bidirecionais em tempo real.

### <p id="Web">🌐 Web</p>
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - para criação rotas.
- [React Icons](https://github.com/react-icons/react-icons) - para adicionar ícones relacionado com o status de cada imagem do produto (organizado, desorganizado).
- [axios](https://github.com/axios/axios) - para fazer requisições HTTP para a API.
- [socket.io-client](https://github.com/socketio/socket.io-client) - framework para comunicação em tempo real do lado cliente.
- [filesize](https://github.com/hustcc/filesize.js/) - para medir o tamanho de cada imagem que for enviada pela câmera.

### <p id="Mobile">📱 Mobile</p>
- [axios](https://github.com/axios/axios) - para fazer requisições HTTP para a API.
- [react-navigation](https://github.com/react-navigation/react-navigation) - para criação rotas.

## <p id="about">💻 Sobre a aplicação</p>
O **Products Analyzer** é uma aplicação web e mobile que identifica produtos organizados e desorganizados em **"prateleiras e freezers de supermercado com uma câmera apontada para eles"**, usando **IBM Watson Visual Recognition**, para reconhecimento visual dos produtos.

### <p id="about-Backend">🚪 Backend</p>
O servidor é uma API Restful; ele é coração das aplicações web e mobile (câmera).

### <p id="about-Web">🌐 Web</p>
A aplicação web é para monitorar os produtos que são detectados pela câmera com a ajuda da inteligência artificial de reconhecimento visual.

<img src="https://user-images.githubusercontent.com/41703972/71019211-ba5e7a00-20d8-11ea-9b42-73bc37c43c92.png">
<img src="https://user-images.githubusercontent.com/41703972/73768627-1b5d1280-4758-11ea-96a9-6cd0e8f43b2e.png">

### <p id="about-Mobile">📱 Mobile</p>
A aplicação mobile é a simulação da câmera que ficaria fixada na frente dos produtos nos supermercados, é a partir dessa aplicação que é tirada uma foto do produto e enviada para aplicação web em tempo real.

<img src="https://user-images.githubusercontent.com/41703972/78709102-7ee6f600-78e9-11ea-8498-fc302397eefb.jpg" width=200>

<img src="https://user-images.githubusercontent.com/41703972/78709104-80182300-78e9-11ea-8446-f24ffcba4472.jpg" width=200>



## <p id="get-started">🚀 Rodando a aplicação</p>
### <p id="Requirements">⚠️ Requisitos</p>
- [Node.js](https://nodejs.org)
- [Expo](https://expo.io/learn)
- [Conta na IBM Cloud](https://cloud.ibm.com/login)
- [Conta no MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=335229503988&_bn=g&gclid=EAIaIQobChMIhtmIud_E5gIVEISRCh0sygfvEAAYASABEgLGCvD_BwE)


### <p id="running">🧭 Clonando, instalando e algumas configurações</p>
1. Primeiro, clone o repositório rodando `git clone https://github.com/ribeiromatheus/products-analyzer.git` no seu terminal favorito.
2. Depois de clonar, rode `npm install` ou `yarn` na pasta **backend**, **frontend** e **products-analyzer**.
3. Vá para a pasta **backend** e crie uma pasta chamada **tmp** e dentro dela uma chamda **uploads**.
4. Vá para a pasta **products-analyzer**, crie uma pasta dentro de **src** chamada **credentials** depois crie um arquivo **json** chamado **baseUrl** para que você possa adicionar seu ip seguido da porta do servidor (3333).

```json
{
    "ip": "http://<ip goes here>:3333"
}
```

### <p id="get-started-watson">🧭 Criando uma instância do Watson Studio na IBM CLOUD</p>
- Crie uma instância [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio), depois clique no botão **Get Started**.
- Faça o upload do arquivo e separe o [dataset.zip](https://github.com/ribeiromatheus/products-analyzer/raw/master/dataset.zip) em duas classes: `organizado` e `desorganizado`.
- Agora é só treinar o [dataset.zip](https://github.com/ribeiromatheus/products-analyzer/raw/master/dataset.zip) no [Visual Recognition.](https://cloud.ibm.com/catalog/services/visual-recognition)
- Caso você tenha alguma dúvida, veja esse [vídeo](https://www.youtube.com/watch?v=gM7aUQnE7n4&feature=youtu.be.).

### <p id="last">🧭 Últimas configurações</p>
1. Agora vá para a pasta **backend** e renomeie o arquivo `sample.env` para `.env` e insira sua credenciais.
2. Execute o comando `npm run dev` ou `yarn dev` para rodar o servidor (certifique-se de que você está na pasta **backend**).
3. Execute o comando `npm start` ou `yarn start` para roda a aplicação web (certifique-se de que você está na pasta **frontend**).
4. Run `npm start` or `yarn start` para roda a aplicação mobile app (certifique-se de que você está na pasta **products-analyzer**).

## <p id="intro">🔆 Apresentação da aplicação</p>
### <p id="video">💾 Vídeo</p>
Você pode conferir o vídeo da aplicação [aqui](https://drive.google.com/open?id=1Om3V4fckRA4p-Sf6jplMuQvS9uMVwrwU).

### <p id="doc">📄 Documentação</p>
Você pode ler a documentção do projeto [aqui](https://drive.google.com/open?id=1JrMtnanYrsjV5qiCFRsPvWVwa5NDfvGGjWgpzF4hs7U).
