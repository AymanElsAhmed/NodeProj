let mongoose = require('mongoose');
let categorySchema = require('../database/category');
let Category = mongoose.model('categorys', categorySchema);

module.exports = Category;