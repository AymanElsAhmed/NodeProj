let express = require('express');
let router = express.Router();
let ProductController = require('../controllers/ProductController');
router.get('/', ProductController.getAllProduct)
router.post('/', ProductController.createProduct)
router.get('/:id', ProductController.getProduct)
router.delete('/:id', ProductController.deleteProduct)
router.put('/:id', ProductController.editProduct)
module.exports = router;