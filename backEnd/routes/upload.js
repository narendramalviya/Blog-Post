const express = require('express');
const router = express.Router();
const {uploadFile} = require('../controllers/uploadFile');
router.post('/file-upload',uploadFile)

module.exports = router;