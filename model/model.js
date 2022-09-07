const mongoose = require('mongoose')

const Details = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    lastLogin: {
        type: Date,
        default: Date.now
        // required: true,
        // type: String
    },
    profileImage: {
     
        required: true,
        type: String
    }
})







module.exports = mongoose.model("user", Details);