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
const exercisesRoute = require('./routes/exercises')
const presetWorkoutsRoute = require('./routes/presetWorkouts')
const workoutDataRoute = require('./routes/exerciseData')
const usersRoute = require('./routes/users')


app.use('/login', loginRoute)
app.use('/signup', signupRoute)
app.use('/exercises', exercisesRoute)
app.use('/preset-workouts', presetWorkoutsRoute)
app.use('/exercise-data', workoutDataRoute)
app.use('/users', usersRoute)





app.get('/', (req, res) => {
    res.send("It's working :)")
})

app.listen(PORT, () => {
    console.log(`We Live on ${PORT}`)
})

