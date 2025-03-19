const express = require("express")
const authController = require("../controllers/auth.controller")
const authRouter = express.Router()

authRouter("/register", authController.register)
authRouter("/login", authController.register)