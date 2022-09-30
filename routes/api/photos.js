const express = require('express');
const router = express.Router();
const photosCtrl = require('../../controllers/photos');

router.post('/photos', photosCtrl.create);

module.exports = router;