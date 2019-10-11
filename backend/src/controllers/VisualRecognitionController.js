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
        const classifyParams = {
            images_file: fs.createReadStream('./tmp/uploads/' + req.file.filename),
            owners: ['me'],
            threshold: 0.03
        };

        visualRecognition.classify(classifyParams)
            .then(classifiedImages => {
                if (classifiedImages.images[0].classifiers[0].classes == '')
                    console.log('organizado');
                else
                    console.log(classifiedImages.images[0].classifiers[0].classes[0].class);
            })
            .catch(err => res.status(500).json(err));

        const { originalName: name, size, key } = req.file;

        Product.create({
            name,
            size,
            key
        });
    },

    async remove(req, res) {
        const products = await Product.findById(req.params.id);
        await products.remove();
        return res.send();
    }
}