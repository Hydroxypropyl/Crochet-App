const express = require('express')

const loginCtrl = require('../controllers/login-ctrl')

const router = express.Router()

router.post('/signin', loginCtrl.login)
router.post('/signup', loginCtrl.register)

module.exports = router