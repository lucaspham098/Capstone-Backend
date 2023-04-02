const express = require('express')
const router = express.Router()
const { login, test } = require('../controllers/loginController')
const { authenticateToken } = require('../controllers/authenticateToken')


router.route('/')
    .post(login)
    .get(authenticateToken, test)

module.exports = router
