const express = require("express")
const adminController = require("../controllers/admin.controller")
const checkAuth = require("../middlewares/checkAuth")
const checkRole = require("../middlewares/checkRole")
const adminRouter = express.Router()

adminRouter.get("/users", checkAuth, checkRole("admin"), adminController.getUsers)

module.exports = adminRouter