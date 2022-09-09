const express = require('express');
const controller = require('../controller/controller')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const multer = require('multer')

const router = express.Router()

const upload = multer({
    storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")

    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "-" + Date.now() + ".jpg")
    }
})
    
    
}).single("profile")

router.post('/v1/loginUser', controller.loginUser)
router.post('/v1/registerUser',upload,auth,controller.registerUser)
router.get('/v1/getloginData',controller.loginData)
router.get('/v1/getuserofDataByid/:id',controller.loginDatawithId)



module.exports = router