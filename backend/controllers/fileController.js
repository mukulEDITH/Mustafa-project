const File = require('../models/File.js');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '/uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

exports.uploadFile = (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded.' });
  res.status(200).json({ message: 'File uploaded successfully', filePath: `/uploads/${req.file.filename}` });
};
exports.getFiles = async (req, res) => {
  const files = await File.find({ folder: req.params.folderId });
  res.json(files);
};