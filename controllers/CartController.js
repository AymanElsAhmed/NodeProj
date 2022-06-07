let Cart = require('../models/Cart');

// delete specific product from cart
let deleteProduct = async(req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, {
            $pull: {
                products: {
                    _id: req.params.productId
                }
            }
        });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
};

//update product quantity in cart
let updateProductQuantity = async(req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: {
                "products.$[elem].quantity": req.body.quantity //elem is the array of products
            }
        }, {
            arrayFilters: [{
                "elem._id": req.params.productId
            }]
        });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Checkout  User Card 




let createCart = async(req, res) => {
    try {
        res.send(await Cart.create(req.body));
    } catch (error) {
        res.send(error, 400);
    }
}
let deleteCart = async(req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.userid);
        res.status(200).json("Cart has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}
let editCart = async(req, res) => {
    res.send(await Cart.findByIdAndUpdate(req.params.id, req.body));
}



module.exports = {
    createCart,
    deleteCart,
    editCart,
    deleteProduct,
    updateProductQuantity
}