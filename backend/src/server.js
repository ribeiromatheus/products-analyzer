const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');

const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'mhkjHTkegyn4gc_ZoU50ALtftBuISLhAc9mNGfHTHbNy'
});

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
    .catch(err => console.log('error: ', err));