const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const VisualRecognitionController = require('./controllers/VisualRecognitionController');

const routes = express.Router();

routes.post('/recognize', multer(multerConfig).single('file'), VisualRecognitionController.recognize);

module.exports = routes;