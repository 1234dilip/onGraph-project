const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    Author_id:{
        required:true,
        type:String
    },
    tittle:[{
        required:true,
        type:String
    }

],
discription:{
    required:true,
        type:String
},
DateCreated:{
    type: Date, default: Date.now 
},
DateModified:{
    required:true,
    type: Date, 
},



status:[
    {
   published: {
    required:true,
    type: String 
    },
    draft: {
        required:true,
        type: String 
        },
}
],
limitedUser:[
    {
        userid:{
            required:true,
            type: String 
        },
        permissionId:{
            required:true,
            type: String 
        },
        readId:{
            required:true,
            type: String 
        },
    }
],
Access:[
    {
privateLimited:{
    required:true,
    type: String 
},
publicLimited:{
    required:true,
    type: String 
}
    }
]
    

})


module.exports = mongoose.model("blog", blogSchema);