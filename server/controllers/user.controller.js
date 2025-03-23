const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");

const userController = {
  async addToCart(req, res) {
    try {
      const { username } = req.user;
      const { productId } = req.body

      const prodcut = await ProductModel.findById(productId)
      if (!prodcut) {
        return res.status(404).json({
          message: "Товар не найден!"
        })

      }
      await UserModel.findOneAndUpdate({ username }, {
        $push: { cart: productId }
      })

      res.status(200).json({
        messae: "Товар добавлен в корзину!"
      })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось добавить товар!"
      })
    }
  },

  async getCart(req, res) {
    try {
      const { username } = req.user
      const user = await UserModel.findOne({ username }).select('cart').populate("cart")

      if (!user) {
        return res.status(404).json({
          message: "Пользователь не найден!"
        })
      }

      res.status(200).json({ cart: user.cart })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось получить корзину!"
      })
    }
  },

  async removeFromCart(req, res) {
    try {
      const { username } = req.user;
      const { productId } = req.params;

      const product = await ProductModel.findById(productId)

      if (!product) {
        return res.status(404).json({ message: "Товар не найден!" })
      }

      await UserModel.findOneAndUpdate({ username },
        { $pull: { cart: productId } },
        { new: true }
      ).populate('cart')

      res.status(200).json({
        message: "Товар удален из корзины!"
      })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось удалить товар!"
      })
    }
  }
}

module.exports = userController