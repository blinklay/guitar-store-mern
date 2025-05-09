const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");

const UserController = {
  async getSelf(req, res) {
    try {
      const user = await UserModel.findById(req.user.id).populate("cart")

      res.status(200).json({
        message: "Информация получена!",
        user
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось получить информацию!" })
    }
  },
  async addToCart(req, res) {
    try {
      const productId = req.params.productId
      const product = await ProductModel.findById(productId)

      if (!product) {
        return res.status(404).json({
          message: "Товар не найден!"
        })
      }

      const user = await UserModel.findById(req.user.id)
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден!" })
      }

      const updateUser = await UserModel.findByIdAndUpdate(user._id, {
        $addToSet: { cart: productId }
      }, { new: true }).populate("cart")

      res.status(200).json({
        message: "Товар добавлен в корзину!",
        cart: updateUser.cart
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Не удалось добавить товар в корзину!"
      })
    }
  },
  async removeFromCart(req, res) {
    try {
      const productId = req.params.productId
      const user = await UserModel.findById(req.user.id).populate("cart")
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден!" })
      }

      const inCart = user.cart.find(item => item._id.equals(productId));
      if (!inCart) {
        return res.status(404).json({ message: "Товара нет в корзине!" })
      }

      const updateUser = await UserModel.findOneAndUpdate(user._id, {
        $pull: { cart: productId }
      }, { new: true }).populate("cart")

      res.status(200).json({
        message: "Товар удален из корзины!",
        cart: updateUser.cart
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось удалить товар из корзины!" })
    }
  }
}

module.exports = UserController