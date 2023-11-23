const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.post('/login', mainController.ingresar);
router.get('/register', mainController.register);
router.post('/register', mainController.create);

module.exports = router;