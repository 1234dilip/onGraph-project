const model = require('../model/model')
const blog = require('../model/blog')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const ObjectId = require("mongoose").Types.ObjectId;


exports.loginUser = async (req, res) => {
     try{
const { name, password} = req.body;
encryptedPassword = await bcrypt.hash(password, 10);
  const user = await model.create({
    name:name,
     password:encryptedPassword,  
   });
   console.log('userrrr',user)
   const token = jwt.sign(
    { userid: user._id, name:name,password:password },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
      
    }
  );
  user.token = token;
res.status(200).json(user)
    }catch(error){
        res.status(400).json({message:error.message}) 
    }
  };

  exports.registerUser = async(req,res) => { 
    try{
        
const { name, password ,profileImage} = req.body;
        console.log('data of body',req.body)
 const user = await model.create({
           name,
            password,
            profileImage
           
          });
          console.log('data of users',user)
        res.status(201).json(user);

    }catch(error){
        res.status(400).json({message:error.message}) 
    }
  }
  exports.loginData = async(req,res) => {
    try{
      const data = await model.find()
     
     res.status(200).json(data)
    }catch(error){
      res.status(400).json({message: error.message})
    }
  }
  exports.loginDatawithId = async(req,res) => {
    console.log('req of body',req.body)
    console.log('req of params',req.params)
    try{
      // const id =   req.user
      // console.log('id of data ',id)
      const data = await model.findById(req.user)
      console.log('id of dammmmmta ',data)
      res.status(200).json(data)
    }catch(error){
      res.status(400).json({message: error.message})
    }
  }


 


  
  