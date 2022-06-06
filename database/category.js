let mongoose = require('mongoose');

let categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, 'too short'],
        maxlength: 15,
    },
    pic: String,

})

module.exports = categorySchema;