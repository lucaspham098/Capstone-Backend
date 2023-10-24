const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');


exports.addExercise = (req, res) => {
    const { exercise } = req.body
    const { user_id } = req.user
    const newItem = {
        id: uuidv4(),
        exercise_name: exercise,
        user_id: user_id,
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
    const { user_id } = req.user
    const promises = req.body.map(item => {
        console.log(item)
        return knex('exercise-workout-relationships')
            .insert(item)
    })

    Promise.all(promises)
        .then(() => {
            res.status(201).send('exercise now part of a workout')
        })
        .catch((err) => {
            res.status(400).send(`could not add exercise to a workout ${err}`)
            console.log(err)
        })
}

exports.deleteFromWorkout = (req, res) => {
    const { user_id } = req.user
    const { list } = req.params

    const listOfExercises = JSON.parse(list)

    const promises = listOfExercises.map(item => {
        return knex('exercise-workout-relationships')
            .delete()
            .where('exercise-workout-relationships.exercise_id', item.exercise_id)
            .andWhere('exercise-workout-relationships.workout_id', item.workout_id)
    })

    Promise.all(promises)
        .then(() => {
            res.status(200).send('exercise deleted')
        })
        .catch(err => {
            res.status(400).send(`unable to delete item ${err}`)
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

exports.getExercisesNotInWorkout = (req, res) => {
    const { user_id } = req.user;
    const { id } = req.params; // Workout ID

    knex('exercises')
        .select('exercises.id as exercise_id', 'exercise_name')
        .leftJoin('exercise-workout-relationships', 'exercise-workout-relationships.exercise_id', 'exercises.id')
        .where('exercise-workout-relationships.workout_id', '<>', id)
        .orWhereNull('exercise-workout-relationships.workout_id')
        .andWhere('exercises.user_id', user_id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).send(err);
            console.log(err);
        });
}

exports.deleteExercise = (req, res) => {
    const { user_id } = req.user
    const { id } = req.params

    knex('exercises')
        .delete()
        .where('user_id', user_id)
        .andWhere('id', id)
        .then(() => {
            res.status(200).send('exercise deleted')
        })
        .catch(err => {
            res.status(400).send(`unable to delete item ${err}`)
        })
}
