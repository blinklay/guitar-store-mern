const { body } = require("express-validator")

const registerValidator = [
  body("email", 'Почта введена некорректно!').isEmail(),
  body("password", "Минимальная длинна пароля - 6 символов!").isLength({ min: 6 })
]

module.exports = registerValidator