
const express = require('express');
const config = require('./config/config')
const router = require('./routes/routes')
var cors = require('cors')


const app = express()
app.use(cors())







app.use(express.json())
app.use('/api',router)


app.listen(3000,() => {
    console.log(`listen port is ${3000}`)
})