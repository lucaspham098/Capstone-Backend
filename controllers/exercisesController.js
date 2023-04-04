const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');


exports.addExercise = (req, res) => {
    const { exercise } = req.body
    const { user_id } = req.user
    const newItem = {
        id: uuidv4(),
        exercise_name: exercise,
        user_id: user_id
    }

    knex('exercises')
        .insert(newItem)
        .then(() => {
            res.status(201).send("exercise successfully added")
        })
        .catch((err) => {
            res.status(400).send(`unable to add exercise${err}`)
        })
}

exports.getExercises = (req, res) => {

    const { user_id } = req.user
    knex('exercises')
        .select('exercise_name', 'id')
        .where('user_id', user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(400).send(err)
        })

}

exports.addToWorkout = (req, res) => {
    const { workoutID, exerciseID } = req.body
    const workout = {
        workout_id: workoutID,
        id: exerciseID
    }

    knex('exercises')
        .update(workout)
        .where('id', exerciseID)
        .then(() => {
            res.status(201).send('exercise now part of a workout')
        })
        .catch((err) => {
            res.status(400).send(`could not add exercise to a workout ${err}`)
        })
}

exports.getExceriseDataByID = (req, res) => {
    const { id } = req.params
    const { user_id } = req.user

    knex('exercise-data')
        .select('*')
        .where('user_id', user_id)
        .andWhere('exercise_id', id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(`unable to get exercise data ${err}`)
        })
}
