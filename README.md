# Products Analyzer
**Organized and disorganized products identifier**

It is a web app that identifies organized and disorganized products in **"supermakert freezers and shelfs with a fixed camera aimed to it"** by using **IBM Watson Visual Recognition**.

## Technologies
- Node.js
- React
- IBM Watson Visual Recognition

## Useful libs / modules
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [React Icons](https://github.com/react-icons/react-icons)
- [axios](https://github.com/axios/axios)
- [ibm-watson](https://github.com/watson-developer-cloud/node-sdk)
- [MongoDB (mongoose)](https://github.com/Automattic/mongoose)

## Requirements
- [Node.js](https://nodejs.org)
- [IBM Cloud Account](https://cloud.ibm.com/login)
- [MongoDB Account](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_brazil_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&_bt=335229503988&_bn=g&gclid=EAIaIQobChMIhtmIud_E5gIVEISRCh0sygfvEAAYASABEgLGCvD_BwE)

## Web app screenshots
### Login
![image](https://user-images.githubusercontent.com/41703972/71019211-ba5e7a00-20d8-11ea-9b42-73bc37c43c92.png)

### Home
![image](https://user-images.githubusercontent.com/41703972/70930322-ab61c400-2013-11ea-97ef-b602d480009c.png)

### Home and images uploades following its status
![image](https://user-images.githubusercontent.com/41703972/70930372-cc2a1980-2013-11ea-9795-69529ebfb092.png)

## Get started
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/products-analyzer.git` on your favorite terminal.
2. After cloning run `npm install` or `yarn` on **backend** and **frontend** folder.
3. Go to **backend** folder and create a folder named **tmp** then **uploads** inside the previous one (**tmp**).

### Create a Watson Studio instance on IBM CLOUD
- Create a [Watson Studio](https://cloud.ibm.com/catalog/services/watson-studio) instance, then click on "Get Started" button.
- Upload the `dataset.zip` file.
- Train it on [Visual Recognition.](https://cloud.ibm.com/catalog/services/visual-recognition)

Now, go to **backend** folder and rename `sample.env` file to `.env`, then enter your own credentials.