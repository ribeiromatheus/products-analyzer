const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
require('dotenv').config();

const visualRecognition = new VisualRecognitionV3({
    version: process.env.VERSION,
    iam_apikey: process.env.IAM_APIKEY
});

module.exports = {
    async recognize(req, res) {
        const { image } = req.body;
        //fs.createReadStream('./src/img/imagem0060.jpg')
        const classifyParams = {
            images_file: fs.createReadStream('./src/img/imagem0060.jpg'),
            owners: ['me'],
            threshold: 0.3
        };

        visualRecognition.classify(classifyParams)
            .then(classifiedImages => {
                if (classifiedImages.images[0].classifiers[0].classes == '')
                    console.log('organizado');
                else
                    console.log(classifiedImages.images[0].classifiers[0].classes[0].class);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json(err);
            });
    }
}