const UserModel = require("../models/User.model")

const adminController = {
  async getUsers(req, res) {
    try {
      const users = await UserModel.find()
      res.status(200).json({
        users
      })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось получить список пользователей!"
      })
    }
  }
}

module.exports = adminController