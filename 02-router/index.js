const express = require('express');
const router = express.Router();
const indexController = require('../03-controller/index.js');

router.get('/index.html', indexController.getIndexPage);

module.exports = router;