const express = require('express');
const router = express.Router();
const categoryController=require('../03-controller/category.js')

//1.分类目录页面
router.get('/category.html', categoryController.getCategoryPage);

router.get('/post-add.html', categoryController.getPostAddPage);

//1.获取分类目录数据
router.get('/getAllCategory', categoryController.getAllCategory);

module.exports = router;//nodejs语法暴露