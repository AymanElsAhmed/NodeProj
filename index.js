let mongoose = require('mongoose');
let express = require('express');
let app = express();
let product = require('./routes/product')
let category = require('./routes/category')
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
mongoose.connect('mongodb://localhost/ecommerce')
    .then(console.log('connected'))
    .catch(err => console.log('err: ' + err));

app.use(express.json());



app.use('/product', product);
app.use('/category', category);


app.listen(5000)