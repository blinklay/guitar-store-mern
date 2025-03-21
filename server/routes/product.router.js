const express = require("express");
const checkAuth = require("../middlewares/checkAuth");
const prodcutController = require("../controllers/product.controller");
const productRouter = express.Router()

productRouter.get("/", prodcutController.getProducts)
productRouter.post("/add", checkAuth, prodcutController.addProdcut)

module.exports = productRouter