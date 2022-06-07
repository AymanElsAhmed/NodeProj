let Product = require('../models/product');


let getAllProduct = async(req, res) => {
    res.send(await Product.find());
}

let filterProduct = async(req, res) => {
    let price = req.query.price;
    let products = await Product.find({
        price: {
            $gte: price
        }
    });
    res.send(products);
}

let searchProductByName = async(req, res) => {
    let name = req.query.name;
    let products = await Product.find({
        name: {
            $regex: name,
            $options: 'i'
        }
    });
    res.send(products);
}


const getProduct = async(req, res) => {
    const { id } = req.params;
    try {
        res.send(await Product.findById(id));
    } catch (error) {
        res.send(error, 400);
    }
}
let createProduct = async(req, res) => {
    try {
        res.send(await Product.create(req.body));
    } catch (error) {
        res.send(error, 400);
    }
}
let deleteProduct = async(req, res) => {
    res.send(await Product.findByIdAndDelete(req.params.id));
}

let editProduct = async(req, res) => {
    res.send(await Product.findByIdAndUpdate(req.params.id, req.body));
}

module.exports = {
    getAllProduct,
    getProduct,
    createProduct,
    deleteProduct,
    editProduct,
    filterProduct,
    searchProductByName
}