const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { addExercise, getExercises, getExceriseDataByID, getExercisesNotInWorkout, addToWorkout, deleteExercise, deleteFromWorkout } = require('../controllers/exercisesController')
const router = express.Router()

router
    .route('/')
    .post(authenticateToken, addExercise)
    .get(authenticateToken, getExercises)

router
    .route('/add-to-workout')
    .post(authenticateToken, addToWorkout)

router
    .route('/delete-from-workout/:list')
    .delete(authenticateToken, deleteFromWorkout)

router
    .route('/id/:id')
    .get(authenticateToken, getExceriseDataByID)
    .delete(authenticateToken, deleteExercise)

router
    .route('/no-workout/:id')
    .get(authenticateToken, getExercisesNotInWorkout)

module.exports = router