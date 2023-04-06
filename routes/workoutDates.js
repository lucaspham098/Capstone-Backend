const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../controllers/authenticateToken')
const { getAllDataByWorkout } = require('../controllers/workoutDataController')

router
    .route('/:id')
    .get(authenticateToken, getAllDataByWorkout)

module.exports = router