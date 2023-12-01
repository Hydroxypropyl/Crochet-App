const express = require('express')

const counterCtrl = require('../controllers/counter-ctrl')

const router = express.Router()

router.get('/:id', counterCtrl.getCounter)
router.post('/:id/update', counterCtrl.updateCounter)

module.exports = router
