const express = require('express')
const { createNewUser, test1 } = require('../controllers/signupController')
const { authenticateToken } = require('../controllers/authenticateToken')
const router = express.Router()

router.use(express.json())

router.route('/')
    .post(createNewUser)

module.exports = router