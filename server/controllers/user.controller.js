const handleError = require("../helpers/handlerError");
const { updateUserList, getUserList, deleteUserList } = require("../helpers/userHelper");

const userController = {
  async getFavorites(req, res) {
    try {
      const favorites = await getUserList(req.user.username, "favorites")
      res.status(200).json({ favorites })
    } catch (e) {
      handleError(res, e, "Не удалось получить корзину!")
    }
  },

  async getCart(req, res) {
    try {
      const cart = await getUserList(req.user.username, "cart")
      res.status(200).json({ cart })
    } catch (e) {
      handleError(res, e, "Не удалось получить корзину!")
    }
  },

  async addToFavorites(req, res) {
    try {
      const message = await updateUserList(req.user.username, req.params.productId, "favorites")
      res.status(200).json({ message })
    } catch (e) {
      handleError(res, e, "Не удалось добавить в избранное!")
    }
  },

  async addToCart(req, res) {
    try {
      const message = await updateUserList(req.user.username, req.params.productId, "cart")
      res.status(200).json({ message })
    } catch (e) {
      handleError(res, e, "Не удалось добавить товар!")
    }
  },

  async removeFromFavorites(req, res) {
    try {
      const message = await deleteUserList(req.user.username, req.params.productId, "favorites")
      res.status(200).json({ message })
    } catch (e) {
      handleError(res, e, "Не удалось удалить товар!")
    }
  },

  async removeFromCart(req, res) {
    try {
      const message = await deleteUserList(req.user.username, req.params.productId, "cart")
      res.status(200).json({ message })
    } catch (e) {
      handleError(res, e, "Не удалось удалить товар!")
    }
  }
}

module.exports = userController