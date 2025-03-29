const handleError = require("../helpers/handlerError")
const ProductModel = require("../models/Product.model")

const searchController = {
  async getProductsByText(req, res) {
    try {
      const searchQuery = req.query.q
      let { page = 1, limit = 10 } = req.query

      if (!searchQuery) {
        return res.status(400).json({
          message: "Пустой поисковый запрос!"
        })
      }

      page = parseInt(page, 10)
      limit = parseInt(limit, 10)
      const skip = (page - 1) * limit

      const products = await ProductModel.find({
        title: { $regex: searchQuery, $options: 'i' }
      }).skip(skip).limit(limit)

      const totalCount = await ProductModel.countDocuments({
        title: { $regex: searchQuery, $options: "i" },
      });

      const totalPages = Math.ceil(totalCount / limit);
      res.status(200).json({
        products,
        currentPage: page,
        totalPages,
      });
    } catch (error) {
      handleError(res, error, 'Не удалось получить список товаров!')
    }
  }
}

module.exports = searchController