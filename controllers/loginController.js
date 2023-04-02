const knex = require("knex")(require('../knexfile'))
const jwt = require('jsonwebtoken')
require('dotenv').config()
const jsonSECRETKEY = process.env.jsonSECRETKEY



exports.login = (req, res) => {
    const { username, password } = req.body;

    knex('users')
        .select('id', 'name')
        .where({ username: username, password: password })
        .then((data) => {
            if (data.length === 0) {
                return res.status(403).send({
                    token: "",
                    error: {
                        message: "Error logging in. Invalid username/password combination.",
                    },
                })
            } else {
                res.send({ token: jwt.sign({ name: data[0].name, user_id: data[0].id }, jsonSECRETKEY) })
                // console.log(req.user)
            }
        })
        .catch((err) => {
            res.status(400).send(err)
        })

}

exports.test = (req, res) => {
    console.log(req.user)
    res.send('hkjhgkjsdhfghsdkjfghs')
}