const express = require('express');
const router = express.Router();
const {getAllPosts,getPostById,createPost, updatePostById} = require('../controllers/post');

router.get('/all-post',getAllPosts);
router.get('/post/:id',getPostById);
router.post('/create-post',createPost);
router.put('/update-post/:id',updatePostById);
module.exports = router;
