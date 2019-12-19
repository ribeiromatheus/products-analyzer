const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const VisualRecognitionController = require('./controller/VisualRecognitionController');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.post('/login', UserController.login);
routes.get('/recognize', VisualRecognitionController.index);
routes.post('/recognize', multer(multerConfig).single('file'), VisualRecognitionController.recognize);
routes.delete('/recognize/:id', VisualRecognitionController.remove);

module.exports = routes;