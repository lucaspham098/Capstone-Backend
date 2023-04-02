require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT ?? 5050
const CLIENT_URL = process.env.CLIENT_URL
const jsonSECRETKEY = process.env.jsonSECRETKEY
const jwt = require('jsonwebtoken')

app.use(cors({
    origin: CLIENT_URL
}))

app.use(express.json())


const loginRoute = require('./routes/login')
const signupRoute = require('./routes/signup')

app.use('/login', loginRoute)
app.use('/signup', signupRoute)

const authenticateToken = (req, res) => {
    const token = req.headers.authorization.split(" ")[1]
    if (token == null) {
        return res.status(401).send('Not authenticated. Please login')
    }
    jwt.verify(token, jsonSECRETKEY, (err, user) => {
        if (err) return res.status(403).send('Not authorized')
        req.user = user
    })
}


app.get('/', (req, res) => {
    res.send("It's working :)")
})

app.listen(PORT, () => {
    console.log(`We Live on ${PORT}`)
})

module.exports = { authenticateToken }