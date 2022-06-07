let mongoose = require('mongoose');
let cartSchema = require('../database/cart');
let Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;