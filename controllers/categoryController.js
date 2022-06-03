const Catgeory = require('../models/catgeory');
// get all categories
module.exports.get = async (req,res)=>{
    // get filters
    const { name } = req.query;
    // get form database
    const categories = await Catgeory.find({name:new RegExp(name,'i')});
    return  res.json({data:categories});
}

// show category
module.exports.show = async (req,res)=>{
    const {id} = req.params;
    const category = await Catgeory.findOne({_id:id});
    if(!category){
        return res.status(404).json({error:'not found'});
    }
    // get form database
    return  res.json({data:category});
}

module.exports.create = async(req,res) =>{
    const { name } = req.body;
    // store to database

    const catgeory = await Catgeory.create({name});
    return  res.json({data:catgeory});
}

// destroy category
module.exports.destroy = async(req,res)=>{
    const {id} = req.params;
    const category = await Catgeory.findOne({_id:id});

    if(!category){
        return res.status(404).json({error:'not found'});
    }
    await Catgeory.findByIdAndDelete(category._id)
    // delete form database
    return  res.json({data:{message:'deleted successfully'}});
}

// update category
module.exports.update = async(req,res)=>{
    const {id} = req.params;
    
    const category = await Catgeory.findOne({_id:id});
    if(!category){
        return res.status(404).json({error:'not found'});
    }
    const { name } = req.body;
    await Catgeory.findByIdAndUpdate(category._id,{name});

    // update to database
    return  res.json({data:{message:'updated successfully'}});
}