const express = require("express");
const searchController = require("../controllers/search.controller");
const searchRouter = express.Router()

searchRouter.get("/", searchController.getProductsByText)

module.exports = searchRouter