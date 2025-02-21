const Folder = require('../models/Folder.js');

exports.createFolder = async (req, res) => {
  const folder = new Folder({ name: req.body.name, parent: req.body.parentId });
  await folder.save();
  res.json(folder);
};

exports.getFolders = async (req, res) => {
  const folders = await Folder.find({ parent: req.params.parentId });
  res.json(folders);
};