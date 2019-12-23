const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    size: String,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {
        virtuals: true
    }
});

ProductSchema.virtual('image_url').get(function () {
    return `${process.env.URL}${this.url}`;
});

module.exports = model('Product', ProductSchema);