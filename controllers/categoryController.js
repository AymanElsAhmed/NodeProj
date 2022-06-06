let Category = require('../models/category');
let Joi = require('joi');

let schema = Joi.object({
    name: Joi.string().min(5).max(15).required()
})

let getAllCategory = async(req, res) => {
    const {  }=req.query;
    res.send(await Category.find());
}

const getCategory = (req,res)=>{
    const { id } =req.params; 
    try {
        res.send(await Category.findById(id));
    } catch (error) {
        res.send(error, 400);
    }
}
let createCategory = async(req, res) => {
   
    try {
        
        await schema.validateAsync(req.body);
        res.send(await Category.create({...req.body, pic: req.file.filename }));
    } catch (error) {
        res.send(error, 400);
    }
}

let deleteCategory = async(req, res) => {
    res.send(await Category.findByIdAndDelete(req.params.id));
}

let editCategory = async(req, res) => {
    res.send(await Category.findByIdAndUpdate(req.params.id, req.body));
}

module.exports = {
    getAllCategory,
    getCategory,
    createCategory,
    deleteCategory,
    editCategory
}