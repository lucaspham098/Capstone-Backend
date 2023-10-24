const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');


exports.createWorkout = (req, res) => {
    const { user_id } = req.user
    const newItem = {
        id: uuidv4(),
        user_id: user_id,
        ...req.body
    }

    knex('preset-workouts')
        .insert(newItem)
        .then(() => {
            res.status(201).send('new workout added')
        })
        .catch((err) => {
            res.status(400).send(`unable to add new workout ${err}`)
        })
}

exports.getWorkouts = (req, res) => {
    const { user_id } = req.user

    knex('preset-workouts')
        .select('workout_name', 'id')
        .where('user_id', user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(400).send(`unable to get workout names ${err}`)
        })

}

exports.loadWorkout = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params //workout ID

    knex('exercises')
        .select(
            'exercises.id as exercise_id',
            'exercises.exercise_name',
            'preset-workouts.id as workout_id',
            'preset-workouts.workout_name'
        )
        .join('exercise-workout-relationships', 'exercise-workout-relationships.exercise_id', 'exercises.id')
        .join('preset-workouts', 'preset-workouts.id', 'exercise-workout-relationships.workout_id')
        .where('exercises.user_id', user_id)
        .andWhere('exercise-workout-relationships.workout_id', id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((err) => {
            res.status(400).send(`could not retreive workout ${err}`)
        })
}

exports.deleteWorkout = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params

    knex('exercises')
        .update('workout_id', null)
        .where('user_id', user_id)
        .andWhere('workout_id', id)
        .then(() => {
            knex('preset-workouts')
                .delete()
                .where('user_id', user_id)
                .andWhere('id', id)
                .then(() => {
                    res.status(200).send('item deleted')
                })
                .catch(err => {
                    res.status(400).send(`item not deleted ${err}`)
                    console.log(err)
                })
        })
        .catch((err) => {
            res.status(400).send(`unable to change workout_id of exercise ${err}`)
            console.log(err)
        })
}
