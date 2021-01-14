const express = require('express');
const router = express.Router();
const {getAllPosts,getPostById,newPost,updatePostById,deletePostById} = require('../controllers/post');

router.get('/all-post',getAllPosts);
router.get('/post/:id',getPostById);
router.post('/new-post',newPost);
router.put('/update-post/:id',updatePostById);
router.delete('/delete-post',deletePostById);

module.exports = router;
