const model = require('../model/model')
const blog = require('../model/blog')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const ObjectId = require("mongoose").Types.ObjectId;


exports.loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    encryptedPassword = await bcrypt.hash(password, 10);
    const user = await model.create({
      name: name,
      password: encryptedPassword,
    });
    // console.log('userrrr', user)
    const token = jwt.sign(
      { userid: user._id, name: name, password: password },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",

      }
    );
    user.token = token;
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

exports.registerUser = async (req, res) => {
  const data = new model({
    name: req.body.name,
    password: req.body.password,
    profileImage: req.files[0].path,

  })

  try {
    console.log(req.files);
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






