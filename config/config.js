require('dotenv').config()
const express = require('express')
const mongooes = require('mongoose')
const mongooesString = process.env.database_url
mongooes.connect(mongooesString)
const database = mongooes.connection;
database.on('erroe',(error) => {
    console.log(error)
})
database.once('connected',()=> {
    console.log('databases has been connected')
})