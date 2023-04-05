const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../controllers/authenticateToken')
const { postExerciseData, getExerciseByDate } = require('../controllers/workoutDataController')


router
    .route('/')
    .post(authenticateToken, postExerciseData)

router
    .route('/:id/:date')
    .get(authenticateToken, getExerciseByDate)


module.exports = router
