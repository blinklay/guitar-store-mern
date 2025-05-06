const { validationResult } = require("express-validator");
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_LIFETIME } = require("../constants");
const JWT_SECRET = process.env.JWT_SECRET

const UserController = {
  async register(req, res) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors })
      }

      const { email, password } = req.body
      const candidate = await UserModel.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: "Пользователь уже существует!" })
      }

      const hashPassword = bcrypt.hashSync(password, 7)
      const user = new UserModel({
        email,
        password: hashPassword
      })

      await user.save()
      res.status(200).json({
        message: "Пользователь зарегестрирован!",
        user
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось зарегистрироваться!" })
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: "Почта или пароль введены не верно!" })
      }

      const isValidPassword = bcrypt.compareSync(password, user.password)
      if (!isValidPassword) {
        return res.status(400).json({ message: "Почта или пароль введены не верно!" })
      }

      const token = jwt.sign({
        id: user._id
      }, JWT_SECRET, { expiresIn: "7d" })


      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: COOKIE_LIFETIME
      });

      res.status(200).json({
        message: "Успешная авторизация!",
        user: {
          id: user._id,
          email: user.email
        }
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось авторизироваться!" })
    }
  }
}

module.exports = UserController