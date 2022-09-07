const express = require('express');
const controller = require('../controller/controller')

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





router.post('/v1/createData',upload, controller.CreateData)










module.exports = router