const express = require('express')

const loginCtrl = require('../controllers/login-ctrl')

const router = express.Router()

router.post('/signin', loginCtrl.login)

module.exports = router