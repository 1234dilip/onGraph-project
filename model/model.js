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
     
       
        type: String
    },

    // confirmpassword: {
     
    //     required: true,
    //     type: String
    // }

    token: { type: String 

    },
   
})

// const register = new mongoose.Schema({
//     name:{
//         required: true,
//         type: String
//     },
//     password:{
//         required: true,
//         type: String
//     },
//     confirmpassword: {
     
//         required: true,
//         type: String
//     }
// })





// module.exports = mongoose.model("registerData", register);

module.exports = mongoose.model("user", Details);