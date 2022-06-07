let mongoose = require('mongoose');
let express = require('express');
let app = express();
let product = require('./routes/product')
let category = require('./routes/category')

let user = require('./routes/user')
let cart = require('./routes/cart')
let order = require('./routes/order')
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
const User = require('./models/user');

mongoose.connect('mongodb://localhost/ecommerce')
    .then(console.log('connected'))
    .catch(err => console.log('err: ' + err));

app.use(express.json());




app.use('/product', product);
app.use('/category', category);
app.use('/user', user);
app.use('/cart', cart);
app.use('/order', order);

app.post('/login', async(req, res) => {
    try {
        let user = await User.findByCradentails(req.body.email, req.body.password);
        let token = user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
})





app.listen(7000)