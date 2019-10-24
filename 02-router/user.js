const express = require('express');
const router = express.Router();
const userController = require('../03-controller/user.js');

router.get('/login.html', userController.getLoginPage);
module.exports = router;