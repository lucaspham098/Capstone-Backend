const knex = require("knex")(require('../knexfile'))
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')


exports.createNewUser = async (req, res) => {

    try {
        const { username, password, name } = req.body
        const hash = await bcrypt.hash(password, 10)

        await knex('users')
            .insert({
                id: uuidv4(),
                username: username,
                password: hash,
                name: name
            })
            .then(() => {
                res.status(201).send('new user created')
            })
    } catch (err) {
        console.log(err)
        res.status(400).send(`could not create new user ${err}`)
    }
}

exports.getUsers = (req, res) => {
    knex('users')
        .select('username')
        .then((data) => {
            res.status(200).send(data)
        })
}
