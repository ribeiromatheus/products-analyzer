const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');
const VisualRecognitionController = require('./controllers/VisualRecognitionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/session', UserController.store);

routes.get('/products', VisualRecognitionController.index);
routes.post('/recognize', multer(multerConfig).single('file'), VisualRecognitionController.storeAndRecognize);
routes.delete('/products/:id', VisualRecognitionController.remove);

module.exports = routes;