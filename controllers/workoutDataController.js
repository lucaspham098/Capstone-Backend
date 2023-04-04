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