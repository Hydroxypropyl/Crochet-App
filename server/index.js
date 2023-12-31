require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const stitchRouter = require('./routes/stitch-router')
const projectRouter = require('./routes/project-router')
const loginRouter = require('./routes/login-router')
const counterRouter = require('./routes/counter-router')

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/stitches', stitchRouter)
app.use('/api/projects', projectRouter)
app.use('/api/login', loginRouter)
app.use('/api/counters', counterRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
