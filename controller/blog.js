const blog = require('../model/blog')
const ObjectId = require("mongoose").Types.ObjectId;

exports.blogInsertData = async(req,res) => {
    try{
        const data = new blog({
            
            Author_id: req.params.id,
            description:req.body.description,
            access:req.body.access,
            accessedUsers:req.body.accessedUsers,
           DateCreated :Date.now(),
           tittle:req.body.tittle,
           status:req.body.status,

        })
        console.log(req.body)
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({ message: error.message }) 
    }
}

exports.blogetData = async(req,res) => {
    try{
        const data = await blog.find({   Author_id: req.params.id} )
        console.log('data of blogdata',data)
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.feedBlogetData = async(req,res) => {
    try{
        const data = await blog.find({   access: 'Public' })
        console.log('data of blogdata',data)
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}