const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    Author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    },
    tittle: {

        type: String
    },


    description: {

        type: String
    },
    access: {
        type: String
    },
    accessedUsers: [
        String
    ],
    status: {
        type: String
    },
    DateCreated: {
        type: Date,
    },
    lastUpdate: {
        required: true,

        type: Date, default: Date.now
    },

   






})


module.exports = mongoose.model("blog", blogSchema);