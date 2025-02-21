const mongoose = require('mongoose');
const folderSchema = new mongoose.Schema({
  name: String,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder' },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Folder', folderSchema);