const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController.js');

const router = express.Router();

router.post('/upload', uploadFile);
router.get('/:folderId', getFiles);
module.exports = router;