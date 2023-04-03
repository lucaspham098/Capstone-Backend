const express = require('express')
const { authenticateToken } = require('../controllers/authenticateToken')
const { createWorkout, getWorkouts, loadWorkout } = require('../controllers/presetWorkoutsController')
const router = express.Router()


router
    .route('/')
    .post(authenticateToken, createWorkout)
    .get(authenticateToken, loadWorkout)

router
    .route('/list')
    .get(authenticateToken, getWorkouts)



module.exports = router