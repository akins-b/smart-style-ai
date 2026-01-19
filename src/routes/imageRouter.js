const express = require('express');
const router = express.Router();
const upload = require("../config/multer");
const { uploadImage } = require("../controllers/imageController");

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;