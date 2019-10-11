const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const VisualRecognitionController = require('./controllers/VisualRecognitionController');

const routes = express.Router();

routes.get('/recognize', VisualRecognitionController.index);
routes.post('/recognize', multer(multerConfig).single('file'), VisualRecognitionController.recognize);
routes.delete('/recognize/:id', VisualRecognitionController.remove);

module.exports = routes;