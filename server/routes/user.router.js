const express = require("express")
const userController = require("../controllers/user.controller")
const checkAuth = require("../middlewares/checkAuth")
const userRouter = express.Router()

userRouter.post('/cart/add/:productId', checkAuth, userController.addToCart)
userRouter.get('/cart', checkAuth, userController.getCart)
userRouter.delete('/cart/remove/:productId', checkAuth, userController.removeFromCart)

userRouter.post('/favorites/add/:productId', checkAuth, userController.addToFavorites)
userRouter.get('/favorites', checkAuth, userController.getFavorites)
userRouter.delete('/favorites/remove/:productId', checkAuth, userController.removeFromFavorites)


module.exports = userRouter