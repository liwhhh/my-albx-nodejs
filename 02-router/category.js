const express = require('express');
const router = express.Router();
const categoryController=require('../03-controller/category.js')

//1.分类目录页面
router.get('/categories.html', categoryController.getCategoryPage);

router.get('/post-add.html', categoryController.getPostAddPage);

module.exports = router;//nodejs语法暴露