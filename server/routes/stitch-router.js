const express = require('express')

const StitchCtrl = require('../controllers/stitch-ctrl')

const router = express.Router()

router.post('/stitch', StitchCtrl.createStitch)
router.put('/stitch/:id', StitchCtrl.updateStitch)
router.delete('/stitch/:id', StitchCtrl.deleteStitch)
router.get('/stitch/:id', StitchCtrl.getStitchById)
router.get('/stitches', StitchCtrl.getStitches)

module.exports = router