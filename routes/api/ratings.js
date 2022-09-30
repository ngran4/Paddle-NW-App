const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../../controllers/ratings')

router.post('/locations/:id/ratings', ratingsCtrl.create)
router.delete('/ratings/:id', ratingsCtrl.deleteRating)

module.exports = router;