const { default: mongoose } = require("mongoose");
const ProductModel = require("../models/Product.model");
const AppError = require("../errors");

async function validateProduct(productId) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new AppError("Некорректный ID товара!", 400)
  }

  const product = await ProductModel.findById(productId)
  if (!product) {
    throw new AppError("Товар не найден!", 404)
  }

  return product
}

module.exports = validateProduct