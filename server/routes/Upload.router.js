const express = require("express")
const upload = require("../utils/multer")
const router = express.Router()

router.post("/upload", upload.single("image"), (req, res) => {
  const fileUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({ url: fileUrl });
});