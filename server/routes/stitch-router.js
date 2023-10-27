const express = require('express')

const StitchCtrl = require('../controllers/stitch-ctrl')

const router = express.Router()

//router.post('/', StitchCtrl.createStitch)
router.get('/:id', StitchCtrl.getStitchById)
router.get('/', StitchCtrl.getStitches)

module.exports = router