const knex = require("knex")(require('../knexfile'))

exports.getUser = (req, res) => {
    const { user_id } = req.user
    knex('users')
        .select('name')
        .where('id', user_id)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })

}