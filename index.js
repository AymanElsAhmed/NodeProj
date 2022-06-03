const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/shop',function(err){
    console.log('mongodb connected');
});

// require routes
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
// set port from envierment
const PORT = process.env.PORT || 1234;
// use json
app.use(express.json());

// use routes
app.use('/api',categoryRouter);
app.use('/api',productRouter);
// app start

// home page
app.get('/', (req, res) => {
    return res.json(req.query);
});

app.listen(PORT,function(){
    console.log(`app started on http://localhost:${PORT}`);
});