const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { addExercise, getExercises, addToWorkout, getExceriseDataByID, getExercisesNotInWorkout } = require('../controllers/exercisesController')
const router = express.Router()

router
    .route('/')
    .post(authenticateToken, addExercise)
    .get(authenticateToken, getExercises)
    .patch(authenticateToken, addToWorkout)

router
    .route('/id/:id')
    .get(authenticateToken, getExceriseDataByID)

router
    .route('/no-workout')
    .get(authenticateToken, getExercisesNotInWorkout)

module.exports = router