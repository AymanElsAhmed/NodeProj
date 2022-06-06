let express = require('express');
let router = express.Router();
let multer = require('multer');
let path = require('path');
let category_path = path.join(__filename, '../../assets/images/category');

let storage = multer.diskStorage({
    destination: category_path,
    filename: function(req, file, cb) {
        const extension = '.' + file.mimetype.slice(file.mimetype.indexOf('/') + 1, (file.mimetype.length));
        cb(null, Date.now() + extension);
    }
})
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/png|jpg|jpeg$/)) {
            cb(new Error('file must be png , jpg or jpeg'))
        } else {
            cb(undefined, true);
        }
    }
});

let CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.getAllCategory)
router.post('/', upload.single('pic'), CategoryController.createCategory)
router.get('/:id', CategoryController.getCategory)
router.delete('/:id', CategoryController.deleteCategory)
router.put('/:id', CategoryController.editCategory)
module.exports = router;