<div align="center">
    <img src="https://user-images.githubusercontent.com/41703972/73202586-17a70b80-411a-11ea-83f7-28ccc66a9f2a.png">
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ribeiromatheus/products-analyzer">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ribeiromatheus/products-analyzer">
  
  <a href="https://github.com/ribeiromatheus/products-analyzer/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ribeiromatheus/products-analyzer">
  </a>

  <a href="https://github.com/ribeiromatheus/products-analyzer/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/ribeiromatheus/products-analyzer">
  </a>
</p>

**Organized and disorganized products identifier**

It is a web app that identifies organized and disorganized products in **"supermakert freezers and shelfs with a fixed camera aimed to it"** by using **IBM Watson Visual Recognition**.

## Table of contents
<ul>
    <li><a href="#techs">Technologies</a></li>
    <li><a href="#libs">Useful libs / modules</a></li>
    <ul>
        <li><a href="#Backend">Backend</a></li>
        <li><a href="#Web">Web</a></li>
    </ul>
    <li><a href="#Requirements">Requirements</a></li>
    <li><a href="#screenshots">Web app screenshots</a></li>
    <ul>
        <li><a href="#Login">Login</a></li>
        <li><a href="#Home">Home</a></li>
        <li><a href="#status">Home and images uploades following its status</a></li>
    </ul>
        <li><a href="#get-started">Get started</a></li>
        <li><a href="#get-started-watson">Create a Watson Studio instance on IBM CLOUD</a></li>
</ul>

## <p id="techs">Technologies</p>
- Node.js
- React
- IBM Watson Visual Recognition

## <p id="libs">Useful libs / modules</p>
### <p id="Backend">Backend</p>
- [express](https://github.com/expressjs/express)
- [ibm-watson](https://github.com/watson-developer-cloud/node-sdk)
- [MongoDB (mongoose)](https://github.com/Automattic/mongoose)
- [cors](https://github.com/expressjs/cors)
- [multer](https://github.com/expressjs/multer)
- [socket.io](https://github.com/socketio/socket.io)

### <p id="Web">Web</p>
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [React Icons](https://github.com/react-icons/react-icons)
- [axios](https://github.com/axios/axios)
- [socket.io-client](https://github.com/socketio/socket.io-client)

## <p id="Requirements">Requirements</p>
- [Node.js](https://nodejs.org)
- [IBM Cloud Account](https://cloud.ibm.com/login)
- [MongoDB Account](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=335229503988&_bn=g&gclid=EAIaIQobChMIhtmIud_E5gIVEISRCh0sygfvEAAYASABEgLGCvD_BwE)

## <p id="screenshots">Web app screenshots</p>
### <p id="Login">Login</p>
![image](https://user-images.githubusercontent.com/41703972/71019211-ba5e7a00-20d8-11ea-9b42-73bc37c43c92.png)

### <p id="Home">Home</p>
![image](https://user-images.githubusercontent.com/41703972/70930322-ab61c400-2013-11ea-97ef-b602d480009c.png)

### <p id="status">Home and images uploades following its status</p>
![image](https://user-images.githubusercontent.com/41703972/70930372-cc2a1980-2013-11ea-9795-69529ebfb092.png)

## <p id="get-started">Get started</p>
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/products-analyzer.git` on your favorite terminal.
2. After cloning run `npm install` or `yarn` on **backend** and **frontend** folder.
3. Go to **backend** folder and create a folder named **tmp** then **uploads** inside the previous one (**tmp**).

### <p id="get-started-watson">Create a Watson Studio instance on IBM CLOUD</p>
- Create a [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) instance, then click on "Get Started" button.
- Upload the `dataset.zip` file.
- Train it on [Visual Recognition.](https://cloud.ibm.com/catalog/services/visual-recognition)

Now, go to **backend** folder and rename `sample.env` file to `.env`, then enter your own credentials.