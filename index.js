
const express = require('express');
const config = require('./config/config')
const router = require('./routes/users')
const blogRouter = require('./routes/blog')

var path = require('path');

var cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, '/uploads')));

app.use(cors())
app.use(express.json())
app.use('/api', router)
app.use('/api', blogRouter)

app.listen(3000, () => {
    console.log(`listen port is ${3000}`)
})