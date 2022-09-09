const jwt = require('jsonwebtoken')
const config = process.env
const verifyToken = (req,res,next) => {
    console.log('web token in the form of')
    console.log('verify token',req.query.token)
    const token = req.body.token || req.query.token ||req.headers["x-access-token"];
    console.log('token   ',token)
    if (!token) {
        return res.status(403).send("A token is required for authentication");
      }
      try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        console.log('req og ndfbjf',decoded)
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
      return next();
}
module.exports = verifyToken;