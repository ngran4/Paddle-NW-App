const express = require('express');
const router = express.Router();
const photosCtrl = require('../../controllers/photos');
const multer = require('multer');
const upload = multer();

router.post('/locations/:id/photos', upload.single('photo'), photosCtrl.create);

module.exports = router;