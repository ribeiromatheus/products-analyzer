const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');
const VisualRecognitionController = require('./controllers/VisualRecognitionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/recognize', VisualRecognitionController.index);
routes.post('/session', UserController.store);
routes.post('/recognize', multer(multerConfig).single('file'), VisualRecognitionController.storeAndRecognize);
routes.delete('/recognize/:id', VisualRecognitionController.remove);

module.exports = routes;