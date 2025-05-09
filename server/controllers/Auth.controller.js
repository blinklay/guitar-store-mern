const { validationResult } = require("express-validator");
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_LIFETIME } = require("../constants");
const JWT_SECRET = process.env.JWT_SECRET

const AuthController = {
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
      const Auth = new UserModel({
        email,
        password: hashPassword
      })

      await Auth.save()
      res.status(200).json({
        message: "Пользователь зарегестрирован!",
        Auth
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось зарегистрироваться!" })
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const Auth = await UserModel.findOne({ email })

      if (!Auth) {
        return res.status(400).json({ message: "Почта или пароль введены не верно!" })
      }

      const isValidPassword = bcrypt.compareSync(password, Auth.password)
      if (!isValidPassword) {
        return res.status(400).json({ message: "Почта или пароль введены не верно!" })
      }

      const token = jwt.sign({
        id: Auth._id
      }, JWT_SECRET, { expiresIn: "7d" })


      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: COOKIE_LIFETIME
      });

      res.status(200).json({
        message: "Успешная авторизация!",
        Auth: {
          id: Auth._id,
          email: Auth.email
        }
      })
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Не удалось авторизироваться!" })
    }
  }
}

module.exports = AuthController