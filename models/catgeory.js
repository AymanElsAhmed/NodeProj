const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
      },
      products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const Catgeory = mongoose.model('Catgeory', categorySchema);

module.exports = Catgeory;