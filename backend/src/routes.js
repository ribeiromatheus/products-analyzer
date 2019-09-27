const express = require('express');
const VisualRecognitionController = require('./controllers/VisualRecognitionController');

const routes = express.Router();

routes.post('/recognize', VisualRecognitionController.recognize);

module.exports = routes;