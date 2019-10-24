const express = require('express');
const router = express.Router();
const userController = require('../03-controller/user.js');

router.get('/login.html', userController.getLoginPage);
//ajax登录请求数据
router.post('/userLogin', userController.userLogin);

router.get('/users.html', userController.getusersPage);//用户页

module.exports = router;