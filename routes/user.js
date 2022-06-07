let express = require('express');
let router = express.Router();

let UserController = require('../controllers/UserController');

router.get('/', UserController.getAllUser)
router.post('/', UserController.createUser)
router.delete('/:id', UserController.deleteUser)
router.put('/:id', UserController.editUser)
router.post('/login', UserController.loginUser)
router.post('/logout/:id', UserController.logoutUser)
router.get('/:id', UserController.getUserById)
module.exports = router;