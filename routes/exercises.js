const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { addExercise, getExercises, getExceriseDataByID, getExercisesNotInWorkout, editWorkoutID } = require('../controllers/exercisesController')
const router = express.Router()

router
    .route('/')
    .post(authenticateToken, addExercise)
    .get(authenticateToken, getExercises)
    .patch(authenticateToken, editWorkoutID)



router
    .route('/id/:id')
    .get(authenticateToken, getExceriseDataByID)

router
    .route('/no-workout')
    .get(authenticateToken, getExercisesNotInWorkout)

module.exports = router