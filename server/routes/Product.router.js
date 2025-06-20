const express = require("express")
const ProcutController = require("../controllers/Prodcut.controller")
const ProductRouter = express.Router()

ProductRouter.get("/", ProcutController.getAllProdcuts)
ProductRouter.get("/current/:productId", ProcutController.getCurrentProduct)
ProductRouter.post("/byIds", ProcutController.getProdcutsByIds)

module.exports = ProductRouter