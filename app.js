const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    PORT = 8080;

require('dotenv').config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({ "message": "Hello ChampDecay" })
})

app.use('/api', require('./routes/user'))

app.listen(PORT, async () => {
    console.log(`App is running on http://localhost:${PORT}`);
})