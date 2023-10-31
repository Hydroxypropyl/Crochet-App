const express = require('express')

const StitchCtrl = require('../controllers/stitch-ctrl')

const router = express.Router()

router.get('/stitch/:id', StitchCtrl.getStitchById)
router.get('/stitches', StitchCtrl.getStitches)

module.exports = router