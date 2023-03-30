require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT ?? 5050
const CLIENT_URL = process.env.CLIENT_URL


app.use(express.json())
app.use(cors({
    origin: CLIENT_URL
}))

app.get('/', (req, res) => {
    res.send("It's working :)")
})

app.listen(PORT, () => {
    console.log(`We Live on ${PORT}`)
})