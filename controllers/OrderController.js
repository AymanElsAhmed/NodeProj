let Orders = require("../models/Order");

//o	Get all orders
let getAllOrders = async(req, res) => {
    try {
        let orders = await Orders.find({});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Get order details by id 
let getOrderById = async(req, res) => {
    try {
        let order = await Orders.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
}

// o	Get order details by user id
let getOrderByUserId = async(req, res) => {
    try {
        let order = await Orders.find({ userId: req.params.userId });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Create order
let createOrder = async(req, res) => {
    try {
        let order = new Orders(req.body);
        let savedOrder = await order.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Update order
let updateOrder = async(req, res) => {
    try {
        let updatedOrder = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

// Delete order
let deleteOrder = async(req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
}

// Export all functions
// module.exports = {
//     getAllOrders,
//     getOrderById,
//     getOrderByUserId,
//     createOrder,
//     updateOrder,
//     deleteOrder
// }

//

let orderDetail = async(req, res) => {
    try {
        const orders = await Orders.find(req.params.userId);
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};


let getAllorder = async(req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    orderDetail,
    getAllorder
}