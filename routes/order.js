let express = require('express');
let router = express.Router();
let OrderController = require('../controllers/OrderController');
router.get('/find/:userId', OrderController.orderDetail)
router.get('/', OrderController.getAllorder)
module.exports = router;