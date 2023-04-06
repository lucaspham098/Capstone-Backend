const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { loadAllWorkouts } = require('../controllers/presetWorkoutsController')
const router = express.Router()


router
    .route('/')
    .get(authenticateToken, loadAllWorkouts)

module.exports = router