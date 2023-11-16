const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { createWorkout, getWorkouts, loadWorkout, deleteWorkout, changeIDtoNull, deleteWorkoutAndChangeID } = require('../controllers/presetWorkoutsController')
const router = express.Router()


router
    .route('/')
    .post(authenticateToken, createWorkout)
    .get(authenticateToken, getWorkouts)

router
    .route('/:id')
    .get(authenticateToken, loadWorkout)
    .delete(authenticateToken, changeIDtoNull, deleteWorkout)

module.exports = router