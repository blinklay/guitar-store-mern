const handleError = require("../helpers/handlerError")
const UserModel = require("../models/User.model")

const adminController = {
  async getUsers(req, res) {
    try {
      const users = await UserModel.find()
      res.status(200).json({
        users
      })
    } catch (e) {
      handleError(res, e, "Не удалось получить список пользователей!")
    }
  }
}

module.exports = adminController