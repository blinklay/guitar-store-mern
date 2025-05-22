const ProductModel = require("../models/Product.model");

const ProcutController = {
  async getAllProdcuts(req, res) {
    try {
      const currentPage = parseInt(req.query.page || 1)
      const limit = parseInt(req.query.limit || 10)
      const skip = (currentPage - 1) * limit

      const total = await ProductModel.countDocuments()
      const totalPages = Math.ceil(total / limit)

      const products = await ProductModel.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 })

      res.status(200).json({
        products,
        totalPages,
        currentPage
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Не удалось получить список товаров!"
      })
    }
  },
  async getCurrentProduct(req, res) {
    try {
      const { productId } = req.params
      const product = await ProductModel.findById(productId)

      if (!product) {
        return res.status(404).json({ message: "Товар не найден!" })
      }

      res.status(200).json({ product })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось получить товар!" })
    }
  },
  async getProdcutsByIds(req, res) {
    try {
      const { ids } = req.body

      if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({ message: "Неправильный формат массива товаров или массив пуст!" })
      }

      const products = await ProductModel.find({
        _id: { $in: ids }
      })

      res.status(200).json({ products })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Не удалось получить товары!" })
    }
  }
}

module.exports = ProcutController