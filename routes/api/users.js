const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const multer = require('multer');
const upload = multer();
/*---------- Public Routes ----------*/
// 'photo' matches key for whatever uploading on formData
router.post('/signup', upload.single('photo'), usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/




module.exports = router;