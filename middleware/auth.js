const jwt = require('jsonwebtoken')
const model = require('../model/model')
const config = process.env
const verifyToken = async (req, res, next) => {
  console.log('web token in the form of')
  console.log('verify token', req.query.token)
  const token = req.body.token || req.query.token || req.headers["x-access-token"];
  console.log('token   ', token)
  if (!token) {
    console.log('data of users')
    return res.status(403).send("A token is required for authentication");
  }
  try {
    console.log('console of ')
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    const register = await model.findById({ _id: decoded.userid })
    console.log("data of verify token in our application", register)

    console.log('req og decode', decoded)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
}
module.exports = verifyToken;