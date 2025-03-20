const express = require("express")
const authController = require("../controllers/auth.controller")
const authRouter = express.Router()

authRouter.post("/register", authController.register)
authRouter.post("/login", authController.login)
authRouter.get("/check", authController.checkAuth)
authRouter.get("/logout", authController.logout)

module.exports = authRouter