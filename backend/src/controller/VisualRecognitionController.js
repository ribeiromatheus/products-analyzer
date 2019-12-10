require('dotenv').config();

const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const Product = require('../model/Product');

const visualRecognition = new VisualRecognitionV3({
    version: process.env.VERSION,
    iam_apikey: process.env.IAM_APIKEY
});

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    },

    async recognize(req, res) {
        const { filename } = req.file;

        const classifyParams = {
            images_file: fs.createReadStream(`./tmp/uploads/${filename}`),
            owners: ['me'],
            threshold: 0.03
        };

        visualRecognition.classify(classifyParams)
            .then(classifiedImages => {
                let status = '';

                if (classifiedImages.images[0].classifiers[0].classes == '')
                    status = 'Organizado';
                else
                    status = 'Desorganizado';

                return res.json(status)
            })
            .catch(err => res.status(500).json(err));
    },

    async remove(req, res) {
        const products = await Product.findById(req.params.id);
        await products.remove();
        return res.send();
    }
}