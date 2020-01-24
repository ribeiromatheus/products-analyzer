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

    async storeAndRecognize(req, res) {
        const { filename, originalname: name, size } = req.file;

        const getKey = filename.split('-');

        const classifyParams = {
            images_file: fs.createReadStream(`./tmp/uploads/${filename}`),
            owners: ['me'],
            threshold: 0.03
        };

        const classifiedImages = await visualRecognition.classify(classifyParams);

        let status = '';

        if (classifiedImages.images[0].classifiers[0].classes == '')
            status = 'Organizado';
        else
            status = 'Desorganizado';

        const product = await Product.create({
            name,
            size,
            key: getKey[0],
            url: filename,
            status
        });

        await product.populate('user').execPopulate();

        const ownerSocket = req.connectedUsers[product.user];

        if (ownerSocket)
            req.io.to(ownerSocket).emit('product', product);

        return res.json(product);
    },

    async remove(req, res) {
        const products = await Product.findById(req.params.id);
        await products.remove();
        return res.send();
    }
}