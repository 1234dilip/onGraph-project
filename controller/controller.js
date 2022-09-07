const model = require('../model/model')
const blog = require('../model/blog')

const ObjectId = require("mongoose").Types.ObjectId;

// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination:function(req,blogeDatabase,cb){
//         cb(null,'users/')
//     },
//     filename:function(req,file,cb){
//         cb(null,Date.now() + file.originalname)
//     }
  
// })
// const users = multer({storage:storage})




exports.CreateData = async (req, res) => {
    console.log('requested of body', JSON.stringify(req.body));
    console.log('request', req.file)
    // console.log('data of filenmae',req.body.file)
    const data = new model({
        name: req.body.name,
        password: req.body.password,
        lastLogin: req.body.lastLogin,
        profileImage: req.file.filename,
     
    });
    // try{
    //     const dataTosave = await data.save()
    //     console.log('data of save',dataTosave)
    //     res.status(200).json(dataTosave)
    // }catch(error){
    //     res.status(400).json({message:error.message})
    // }


    // const dataToSave = await data.save();
    // console.log("djdfj", dataToSave);
    // const data2 = new blog({
    //     Author_id: dataToSave._id,
    //     tittle: req.body.tittle,
    //     discription: req.body.discription,
    //     DateCreated: req.body.DateCreated,
    //     DateModified: req.body.DateModified,
    //     status: req.body.status,
    //     limitedUser: req.body.limitedUser,
    //     Access: req.body.Access,
       
    // });
    try{
    // const dataOfTodo = await data2.save();
    const dataToSave = await data.save()
    // console.log("daaaaaaaaa",dataOfTodo)
    console.log("daaaaaaaaa",dataToSave)


    res.status(200).json(dataToSave);
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
  };


  
  