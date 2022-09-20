const blog = require('../model/blog')
const ObjectId = require("mongoose").Types.ObjectId;

exports.blogInsertData = async(req,res) => {
    try{
        console.log('data of accesed users',req.body.accessedUsers)
        const data = new blog({
            
            Author_id: req.params.id,
            description:req.body.description,
            
            access:req.body.access,
           
          
           DateCreated :Date.now(),
           title:req.body.title,
           status:req.body.status,

        })
        if(req.body.accessedUsers.length){
            data.accessedUsers=req.body.accessedUsers;
        }
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({ message: error.message }) 
    }
}

exports.blogetData = async(req,res) => {
    try{
        const data = await blog.find({   Author_id: req.params.id} )
       
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.feedBlogetData = async(req,res) => {
    try{
        const data = await blog.find({   access: 'Public' })
        
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.deleteBlog = async(req,res) => {
    try{
        const id = req.params.id
        const data = await blog.findByIdAndDelete(id)
        
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})  
    }
}

exports.updatablog = async(req,res) => {
    try{
        const id = req.params.id
        const blogUpdata = req.body
        const options = { new: true };
        const result = await blog.findByIdAndUpdate(id,blogUpdata,options)
        res.json(result)
    }catch(error){
        res.status(500).json({message: error.message})  
    }
}

exports.getblogdatabyId = async(req,res) => {
    try{
        const data = await blog.findById(req.params.id)
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})  
    }
}