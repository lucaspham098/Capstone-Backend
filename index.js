require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT ?? 5050
const CLIENT_URL = process.env.CLIENT_URL


app.use(cors({
    origin: CLIENT_URL
}))

app.use(express.json())


const loginRoute = require('./routes/login')
const signupRoute = require('./routes/signup')

app.use('/login', loginRoute)
app.use('/signup', signupRoute)




app.get('/', (req, res) => {
    res.send("It's working :)")
})

app.listen(PORT, () => {
    console.log(`We Live on ${PORT}`)
})

