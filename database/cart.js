let mongoose = require('mongoose');

// let cartSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String,
//     quantity: Number,
//     is_available: Boolean,
//     expired_date: Date,
//     user_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'user'
//     }
// })

// module.exports = cartSchema;






//ektra7  1

// let cartSchema = new mongoose.Schema({
//     products: [{
//         name: String,
//         price: Number,
//         description: String,
//         quantity: Number,
//         is_available: Boolean,
//         expired_date: Date
//     }],
//     user_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'user'
//     }
// })


// ----------------------------------------------------------------------------------------------------------------

//ektra7  2

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    }]
}, );

module.exports = cartSchema;