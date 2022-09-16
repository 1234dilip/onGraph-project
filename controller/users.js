const model = require('../model/users')
const blog = require('../model/blog')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const ObjectId = require("mongoose").Types.ObjectId;


exports.loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await model.findOne({ name });



    if (user) {

      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {

        const token = jwt.sign(
          { userid: user._id, name: name, password: password },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",

          }
        );
        user.token = token;
        res.status(200).json(user)

      } else {
        res.status(400).send("Please enter a valid password.");
      }
    } else {
      res.status(400).send("User not found");
    }


  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};


exports.registerUser = async (req, res) => {

  try {


    let encryptedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.files);

    const data = new model({
      name: req.body.name,
      password: encryptedPassword,
      profileImage: req.files[0].path,

    })
   

    const dataToSave = await data.save()
    console.log('data in register in the section', dataToSave)
    res.status(200).json(dataToSave)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.loginData = async (req, res) => {
  try {
    const data = await model.find()

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
exports.loginDatawithId = async (req, res) => {
  console.log('req of body', req.body)
  console.log('req of params', req.params)
  try {

    const data = await model.findById(req.params.id)
    console.log('id of dammmmmta ', data)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
exports.getusersname = async(req,res) => {
  try{
    const data = await model.find({}).select('name ,-_id')
    console.log('data in side of response',data)
res.json(data)
  }catch(error){
    res.status(400).json({ message: error.message })
  }
}






