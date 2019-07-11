const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer();

router.post('/', upload.single('upfile'), (req, res) => {
  
  let name = req.file.originalname;
  let type = req.file.mimetype;
  let size = req.file.size;

  res.json({ name, type, size });
});

module.exports = router;