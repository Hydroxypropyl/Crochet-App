const express = require('express')

const StitchCtrl = require('../controllers/stitch-ctrl')

const router = express.Router()

router.post('/', StitchCtrl.createStitch)
router.put('/:id', StitchCtrl.updateStitch)
router.delete('/:id', StitchCtrl.deleteStitch)
router.get('/:id', StitchCtrl.getStitchById)
router.get('/', StitchCtrl.getStitches)

module.exports = router