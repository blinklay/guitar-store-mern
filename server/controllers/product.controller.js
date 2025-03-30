const handleError = require("../helpers/handlerError")
const BrandModel = require("../models/Brand.model")
const ProductModel = require("../models/Product.model")
const validateProduct = require("../validations/productValidator")

const prodcutController = {
  async addProdcut(req, res) {
    try {
      const { title, brand, ...data } = req.body

      const product = await ProductModel.findOne({ title })
      if (product) {
        return res.status(400).json({
          message: "Такой товар уже существует!"
        })
      }

      let brandDoc = await BrandModel.findOne({ name: brand.name })
      if (!brandDoc) {
        brandDoc = new BrandModel({ name: brand.name, logoUrl: brand.logoUrl })
        await brandDoc.save()
      }

      const newProduct = new ProductModel({
        title,
        brand: brandDoc._id,
        ...data
      })

      await newProduct.save()
      res.status(200).json({
        message: "Новый новар добавлен!"
      })
    } catch (e) {
      handleError(res, e, "Не удалось добавить товар!")
    }
  },

  async getCurrentProduct(req, res) {
    try {
      const { productId } = req.params;
      const product = await validateProduct(productId)
      const brand = await BrandModel.findById(product.brand)
      res.status(200).json({
        product: {
          ...product._doc,
          brand
        }
      })
    } catch (error) {
      handleError(res, error, "Не удалось получить товар!")
    }
  },

  async getProducts(req, res) {
    try {
      const products = await ProductModel.find().populate("brand")

      res.status(200).json({
        products
      })
    } catch (e) {
      handleError(res, e, "Не удалось получить товары!")
    }
  }
}

module.exports = prodcutController