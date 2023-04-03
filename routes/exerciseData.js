const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../controllers/authenticateToken')
const { postExerciseData } = require('../controllers/workoutDataController')


router
    .route('/')
    .post(authenticateToken, postExerciseData)


module.exports = router
