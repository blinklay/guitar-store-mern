const express = require("express")
const ProcutController = require("../controllers/Prodcut.controller")
const ProductRouter = express.Router()

ProductRouter.get("/", ProcutController.getAllProdcuts)

module.exports = ProductRouter