let express = require('express');
let router = express.Router();
let CartController = require('../controllers/CartController');
router.post('/', CartController.createCart)
router.delete('/:userid', CartController.deleteCart)
router.put('/:id', CartController.editCart)
module.exports = router;