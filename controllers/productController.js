const Product = require('../models/product');

var mongoose = require('mongoose');
const Catgeory = require('../models/catgeory');

// get all products
module.exports.get = async (req,res)=>{
    // get filters
    const { title,description } = req.query;
    // get form database and serach with catgeory
    const products = await Product.find({title:new RegExp(title,'i'),description:new RegExp(description,'i')}).populate('category').exec();
    return  res.json({data:products});
}

// show product
module.exports.show = async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findOne({_id:id});
    if(!product){
        return res.status(404).json({error:'not found'});
    }
    // get form database
    return  res.json({data:product});
}

module.exports.create = async(req,res) =>{
    const { title,price,description,category_id } = req.body;
    // store to database
    const catgeory = await Catgeory.findById(category_id);
    if (!catgeory) {
        throw new Error('not found');
    }
    const product = new Product({title,price,description,catgeory:catgeory._id});
    catgeory.products.push(product);
    await catgeory.save();
    await product.save();
    return  res.json({data:product});   
}

// destroy product
module.exports.destroy = async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findOne({_id:id});

    if(!product){
        return res.status(404).json({error:'not found'});
    }
    await Product.findByIdAndDelete(product._id)
    // delete form database
    return  res.json({data:{message:'deleted successfully'}});
}

// update product
module.exports.update = async(req,res)=>{
    const {id} = req.params;
    
    const product = await Product.findOne({_id:id});
    if(!product){
        return res.status(404).json({error:'not found'});
    }
    const { title,price,description } = req.body;
    await Product.findByIdAndUpdate(product._id,{title,price,description,catgeory:category_id});

    // update to database
    return  res.json({data:{message:'updated successfully'}});
}