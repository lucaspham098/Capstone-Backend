const knex = require("knex")(require('../knexfile'))
const jwt = require('jsonwebtoken')
require('dotenv').config()
const jsonSECRETKEY = process.env.jsonSECRETKEY
const bcrypt = require('bcrypt')



exports.login = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await knex('users').first().where('username', username);
        console.log(user);
        console.log(password)
        console.log(user.password)
        if (user) {
            const validPass = await bcrypt.compare(password, user.password);
            if (validPass) {
                res.status(201).send({ token: jwt.sign({ name: user.name, user_id: user.id }, jsonSECRETKEY) });
            } else {
                res.status(400).send('Password does not match');
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('User not found');
    }

}