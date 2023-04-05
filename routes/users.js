const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { getUser } = require('../controllers/usersController')
const router = express.Router()

router
    .route('/')
    .get(authenticateToken, getUser)

module.exports = router