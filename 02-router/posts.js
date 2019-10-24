const express = require('express');
const router = express.Router();
const postsController = require('../03-controller/posts.js');

router.get('/posts.html', postsController.getPostsPage);

module.exports = router;

