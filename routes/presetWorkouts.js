const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { createWorkout, getWorkouts, loadWorkout, deleteWorkout } = require('../controllers/presetWorkoutsController')
const router = express.Router()


router
    .route('/')
    .post(authenticateToken, createWorkout)
    .get(authenticateToken, getWorkouts)

router
    .route('/:id')
    .get(authenticateToken, loadWorkout)
    .delete(authenticateToken, deleteWorkout)

module.exports = router