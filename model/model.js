const mongoose = require('mongoose')

const Details = new mongoose.Schema({
    name: {
       
        type: String
    },
    password: {
        
        type: String
    },
    lastLogin: {
        type: Date,
        default: Date.now

    },
    profileImage: {


        type: String
    },



    token: {
        type: String

    },

})


module.exports = mongoose.model("user", Details);