const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    size: String,
    key: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Product', ProductSchema);