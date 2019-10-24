const express = require('express');
const router = express.Router();
const commentController = require('../03-controller/comment.js')

router.get('/comments.html', commentController.getCommentPage);

module.exports = router;