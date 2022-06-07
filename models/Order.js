let mongoose = require('mongoose');
let orderSchema = require('../database/order');
let order = mongoose.model('orders', orderSchema);

module.exports = order;