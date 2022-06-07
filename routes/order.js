let express = require('express');
let router = express.Router();
let OrderController = require('../controllers/OrderController');
router.get('/find/:userId', OrderController.getOrderByUserId)
router.get('/find/:id', OrderController.getOrderById)
router.get('/', OrderController.getAllOrders)
module.exports = router;