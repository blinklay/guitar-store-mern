const express = require("express")
const registerValidator = require("../validators/register.validator")
const UserController = require("../controllers/User.controller")
const UserRouter = express.Router()

UserRouter.post("/register", registerValidator, UserController.register)
UserRouter.post("/login", UserController.login)

module.exports = UserRouter