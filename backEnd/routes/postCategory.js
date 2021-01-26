const express = require('express');
const router = express.Router();
const {getAllCategory,createCategory,getCategoryById, updateCategory,deleteCategory} = require('../controllers/postCategory');
console.log('getAllCategory',typeof getAllCategory);
router.get('/getAll-post-category',getAllCategory);
router.get('/get-post-category/:id',getCategoryById);
router.post('/create-post-category',createCategory);
router.put('/update-post-category/:id',updateCategory);
router.delete('/delete-post-category/:id',deleteCategory);

module.exports = router;