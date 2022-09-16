const express = require('express');
const blogController = require('../controller/blog')

const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/v1/blog/addblog/:id',blogController.blogInsertData)
router.get('/v1/blog/getData/:id',blogController.blogetData)
router.get('/v1/feet/data',blogController.feedBlogetData)

module.exports = router