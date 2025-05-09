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
  }
}

module.exports = ProcutController