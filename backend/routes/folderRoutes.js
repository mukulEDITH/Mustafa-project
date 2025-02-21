const express = require('express');
const { createFolder, getFolders } = require('../controllers/folderController');
const router = express.Router();
router.post('/create', createFolder);
router.get('/:parentId', getFolders);
module.exports = router;