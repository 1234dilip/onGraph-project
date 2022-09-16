const express = require('express');
const path = require("path");  
const controller = require('../controller/users')

const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const multer = require('multer')

const router = express.Router()

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).any()

router.post('/v1/loginUser', controller.loginUser)
router.post('/v1/registerUser', upload, controller.registerUser)
router.get('/v1/getloginData', controller.loginData)
router.get('/v1/getuserofDataByid/:id', controller.loginDatawithId)
router.get('/v1/get/users',controller.getusersname)

module.exports = router