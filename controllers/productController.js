let Product = require('../models/product');
let getAllProduct = async(req, res) => {
    const { name , description, gte_price,lte_price} = req.query;
    res.send(await Product
        .find({
            description:new RegExp(description,'i'),
            name:new RegExp(name,'id'),
            price:{
                $gte: gte_price,
                $lte: lte_price
            }
    })
        .populate('category_id'));
}
const getProduct = (req,res)=>{
    const { id } =req.params; 
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
    editProduct
}