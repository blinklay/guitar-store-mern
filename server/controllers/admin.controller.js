const handleError = require("../helpers/handlerError")
const UserModel = require("../models/User.model")

const adminController = {
  async getUsers(req, res) {
    try {
      let { page = 1, limit = 10 } = req.query
      page = parseInt(page, 10)
      limit = parseInt(limit, 10)
      const skip = (page - 1) * limit

      const users = await UserModel.find().skip(skip).limit(limit)
      const totalUser = await UserModel.countDocuments()
      const totalPages = Math.ceil(totalUser / limit)

      res.status(200).json({
        users,
        totalPages,
        currentPage: page
      })
    } catch (e) {
      handleError(res, e, "Не удалось получить список пользователей!")
    }
  }
}

module.exports = adminController