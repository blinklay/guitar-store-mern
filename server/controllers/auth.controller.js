const bcrypt = require("bcrypt")
const UserModel = require("../models/User.model");

const authController = {
  async register(req, res) {
    try {
      const { phoneNumber, password } = req.body
      const candidate = await UserModel.findOne({ phoneNumber })

      if (candidate) {
        return res.status(400).json({
          message: "Пользователь уже существует!"
        })
      }

      const hashPassword = bcrypt.hashSync(password, 7)
      const user = new UserModel({
        phoneNumber,
        password: hashPassword
      })

      await user.save()
      res.status(200).json({
        message: "Успешная регистрация!"
      })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось зарегестрироваться!"
      })
    }
  },
  login(req, res) {

  }
}

module.exports = authController