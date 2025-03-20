const bcrypt = require("bcrypt")
const UserModel = require("../models/User.model");
const jwt = require("jsonwebtoken");
const { generateUsername } = require("unique-username-generator");
const { JWT_SECRET } = require("../constants");

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

      const username = generateUsername()
      const hashPassword = bcrypt.hashSync(password, 7)

      const user = new UserModel({
        phoneNumber,
        username,
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
  async login(req, res) {
    try {
      const { phoneNumber, password } = req.body
      const user = await UserModel.findOne({ phoneNumber })

      if (!user) {
        return res.status(404).json({
          message: "Пользователь не найден!"
        })
      }

      const isMatch = bcrypt.compareSync(password, user.password)
      if (!isMatch) {
        return res.status(400).json({
          message: "Введен неверный пароль!"
        })
      }
      const token = jwt.sign({
        username: user.username,
        role: user.role
      }, JWT_SECRET)

      res.cookie("token", token, { httpOnly: true })

      res.status(200).json({
        message: "Успешная аворизация!"
      })
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Не удалось авторизироваться!"
      })
    }
  },
  checkAuth(req, res) {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Не авторизован" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      res.json({ user: decoded });
    } catch (err) {
      res.status(401).json({ message: "Неверный токен" });
    }
  }
}

module.exports = authController