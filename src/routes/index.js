const express = require('express');
const userRouter = require('./router.user');
const routerPost = require('./router.post');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/posts', routerPost)


module.exports = router;