const express = require('express')
const router = express.Router()
const LoginUser = require('../controller/LoginUser')
const RegisterUser = require('../controller/RegisterUser')

router.post('/register', RegisterUser)
router.post('/login',LoginUser)

module.exports = router
