const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');

exports.postExerciseData = (req, res) => {
    const { user_id } = req.user
    const newItem = req.body.map(item => {
        return {
            user_id: user_id,
            ...item
        }
    })

    knex('exercise-data')
        .insert(newItem)
        .then(() => {
            res.status(201).send('exercise data successfully added')
        })
        .catch((err) => {
            res.status(400).send(`unable to add exercise data ${err}`)
        })
}

exports.getExerciseByDate = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params
    const { date } = req.params

    knex('exercise-data')
        .select('*')
        .where('user_id', user_id)
        .andWhere('exercise_id', id)
        .andWhere('created_at', 'like', `${date}%`)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(`could not retreive data ${err}`)
        })
}

exports.getAllDataByWorkout = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params

    knex('exercises')
        .select(
            'exercise-data.created_at',
            'exercises.exercise_name',
            'exercise-data.weight_lbs'
        )
        .join('exercise-data', 'exercise-data.exercise_id', 'exercises.id')
        .where('exercises.workout_id', id)
        .andWhere('exercises.user_id', user_id)
        .andWhere('exercise-data.user_id', user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getWorkoutByDate = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params
    const { date } = req.params

    knex('exercises')
        .select(
            'exercise-data.created_at',
            'exercises.exercise_name',
            'exercise-data.weight_lbs',
            'exercise-data.set_1',
            'exercise-data.set_2',
            'exercise-data.set_3',

        )
        .join('exercise-data', 'exercise-data.exercise_id', 'exercises.id')
        .where('exercises.workout_id', id)
        .andWhere('exercises.user_id', user_id)
        .andWhere('exercise-data.user_id', user_id)
        .andWhere('exercise-data.created_at', date)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

