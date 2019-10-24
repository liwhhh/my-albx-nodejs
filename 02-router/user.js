const express = require('express');
const router = express.Router();
const userController = require('../03-controller/user.js');

router.get('/login.html', userController.getLoginPage);
//ajax登录请求数据
router.post('/userLogin', userController.userLogin);


module.exports = router;