let Orders = require("../models/Order");

let getAllOrders = async(req, res) => {
    try {
        let orders = await Orders.find({});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

let getOrderById = async(req, res) => {
    try {
        let order = await Orders.findById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
}

let getOrderByUserId = async(req, res) => {
    try {
        let order = await Orders.find({ user_id: req.params.userId });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    getAllOrders,
    getOrderById,
    getOrderByUserId
}