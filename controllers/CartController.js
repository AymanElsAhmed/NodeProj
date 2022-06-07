let Cart = require('../models/Cart');


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


let updateProductQuantity = async(req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: {
                "products.$[elem].quantity": req.body.quantity
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