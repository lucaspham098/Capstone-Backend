const express = require('express')
const { createNewUser, getUsers } = require('../controllers/signupController')
const router = express.Router()

router.use(express.json())

router.route('/')
    .post(createNewUser)
    .get(getUsers)

module.exports = router