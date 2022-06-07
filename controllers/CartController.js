let Cart = require('../models/Cart');
// createCart, deleteCart, editCart
// module.exports = {
//     createCart: async (req, res) => {
//         try {
//             const cart = await Cart.create(req.body);
//             res.status(200).json(cart);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     },
//     deleteCart: async (req, res) => {
//         try {
//             const cart = await Cart.findByIdAndDelete(req.params.id);
//             res.status(200).json(cart);
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     },
//     editCart
// }

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






//CREATE

// router.post("/", verifyToken, async(req, res) => {
//     const newCart = new Cart(req.body);

//     try {
//         const savedCart = await newCart.save();
//         res.status(200).json(savedCart);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
//     try {
//         const updatedCart = await Cart.findByIdAndUpdate(
//             req.params.id, {
//                 $set: req.body,
//             }, { new: true }
//         );
//         res.status(200).json(updatedCart);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
//     try {
//         await Cart.findByIdAndDelete(req.params.id);
//         res.status(200).json("Cart has been deleted...");
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//GET USER CART
// router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
//     try {
//         const cart = await Cart.findOne({ userId: req.params.userId });
//         res.status(200).json(cart);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = {
    createCart,
    deleteCart,
    editCart
}