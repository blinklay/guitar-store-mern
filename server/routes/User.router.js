const express = require("express")
const UserController = require("../controllers/User.controller")
const checkAuth = require("../middlewares/checkAuth")
const UserRouter = express.Router()

UserRouter.get("/", checkAuth, UserController.getSelf)
UserRouter.post("/cart/:productId", checkAuth, UserController.addToCart)
UserRouter.delete("/cart/:productId", checkAuth, UserController.removeFromCart)

module.exports = UserRouter
