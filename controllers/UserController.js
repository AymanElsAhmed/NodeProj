let User = require('../models/user');
let Joi = require('joi');
let bcrypt = require('bcryptjs');
let schema = Joi.object({
    name: Joi.string().min(5).max(15).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required()
})

let getAllUser = async(req, res) => {
    res.send(await User.find());
}
let createUser = async(req, res) => {
    //validate
    try {
        await schema.validateAsync(req.body);
        res.send(await User.create({...req.body, password: await bcrypt.hash(req.body.password, 8) }));
    } catch (error) {
        res.send(error, 400);
    }
}

let deleteUser = async(req, res) => {
    res.send(await User.findByIdAndDelete(req.params.id));
}

let editUser = async(req, res) => {
    res.send(await User.findByIdAndUpdate(req.params.id, req.body));
}

//logout user
let logoutUser = async(req, res) => {
    res.send(await User.findByIdAndUpdate(req.params.id, {
        $set: {
            token: null
        }
    }));
}

// login user
let loginUser = async(req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.send("User not found", 400);
        }
        let isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            res.send("Password is incorrect", 400);
        }
        res.send(await User.findByIdAndUpdate(user._id, {
            $set: {
                token: req.body.token
            }
        }));
    } catch (error) {
        res.send(error, 400);
    }
}

//get user by id
let getUserById = async(req, res) => {
    res.send(await User.findById(req.params.id));
}

//get user by token
let getUserByToken = async(req, res) => {
    res.send(await User.findOne({ token: req.params.token }));
}

//get user by email
let getUserByEmail = async(req, res) => {
        res.send(await User.findOne({ email: req.params.email }));
    }
    //get user by name
let getUserByName = async(req, res) => {
    res.send(await User.findOne({ name: req.params.name }));
}

module.exports = {
    getAllUser,
    createUser,
    deleteUser,
    editUser
}