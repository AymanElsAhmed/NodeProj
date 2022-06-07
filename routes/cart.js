let express = require('express');
let router = express.Router();
let CartController = require('../controllers/CartController');
router.post('/', CartController.createCart)
router.delete('/:userid', CartController.deleteCart)
router.delete('/:id/:productId', CartController.deleteProduct)
router.put('/:id', CartController.editCart)
router.put('/:id/:productId', CartController.updateProductQuantity)
module.exports = router;