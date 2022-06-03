const { Router } = require('express')
const { show,get,create,destroy,update } = require('../controllers/categoryController');
const router = Router();

router.get('/category',get);
router.post('/category',create);
router.get('/category/:id',show);
router.put('/category/:id',update);
router.delete('/category/:id',destroy);

module.exports = router;