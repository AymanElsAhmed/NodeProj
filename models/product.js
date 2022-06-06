let mongoose = require('mongoose');
let productSchema = require('../database/product');
let Product = mongoose.model('products', productSchema);

module.exports = Product;