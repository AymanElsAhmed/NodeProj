const { Router } = require('express')
const { show,get,create,destroy,update } = require('../controllers/productController');
const router = Router();

router.get('/product',get);
router.post('/product',create);
router.get('/product/:id',show);
router.put('/product/:id',update);
router.delete('/product/:id',destroy);

module.exports = router;