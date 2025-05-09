const express = require("express")
const registerValidator = require("../validators/register.validator")
const AuthController = require("../controllers/Auth.controller")
const AuthRouter = express.Router()

AuthRouter.post("/register", registerValidator, AuthController.register)
AuthRouter.post("/login", AuthController.login)
AuthRouter.post("/logout", AuthController.logout)

module.exports = AuthRouter