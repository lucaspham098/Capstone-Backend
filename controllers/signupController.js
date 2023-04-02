const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');


exports.createNewUser = (req, res) => {

    const newUser = {
        id: uuidv4(),
        ...req.body
    }

    knex('users')
        .insert(newUser)
        .then(() => {
            res.status(201).send('New user created')
        })
        .catch((err) => {
            res.status(400).send(`could not sign up${err}`)
        })

}
