const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');

exports.postExerciseData = (req, res) => {
    const { user_id } = req.user
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const currentDate = `${year}-${month}-${day}`;



    const newItem = req.body.map(item => {

        return {
            user_id: user_id,
            id: uuidv4(),
            date: currentDate,
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
            res.status(400).send(newItem)
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
        .andWhere('date', date)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(`could not retreive data ${err}`)
            console.log(err)
        })
}

exports.getAllDataByWorkout = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params

    knex('exercises')
        .select(
            'exercise-data.date',
            'exercises.exercise_name',
            'exercise-data.weight_lbs'
        )
        .join('exercise-data', 'exercise-data.exercise_id', 'exercises.id')
        .join('exercise-workout-relationships', 'exercise-workout-relationships.exercise_id', 'exercises.id')
        .where('exercise-workout-relationships.workout_id', id)
        .andWhere('exercises.user_id', user_id)
        .andWhere('exercise-data.user_id', user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getDataByDate = (req, res) => {
    const { user_id } = req.user
    const { date } = req.params

    console.log(date)

    knex('exercise-data')
        .select(
            'exercise-data.date',
            'exercise-data.weight_lbs',
            'exercise-data.set_1',
            'exercise-data.set_2',
            'exercise-data.set_3',
            'exercise-data.workout_id',
            'exercises.exercise_name',
            'preset-workouts.workout_name'
        )
        .join('exercises', 'exercises.id', 'exercise-data.exercise_id')
        .join('preset-workouts', 'preset-workouts.id', 'exercise-data.workout_id')
        .where('exercise-data.date', date)
        .andWhere('exercise-data.user_id', user_id)
        .then(data => {
            res.status(200).send(data)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getWorkoutByDate = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params //workout id
    const { date } = req.params

    knex('exercises')
        .select(
            'exercise-data.date',
            'exercises.exercise_name',
            'exercise-data.weight_lbs',
            'exercise-data.set_1',
            'exercise-data.set_2',
            'exercise-data.set_3',

        )
        .join('exercise-data', 'exercise-data.exercise_id', 'exercises.id')
        .where('exercises.user_id', user_id)
        .andWhere('exercise-data.workout_id', id)
        .andWhere('exercise-data.user_id', user_id)
        .andWhere('exercise-data.date', date)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
            console.log(err)
        })
}

