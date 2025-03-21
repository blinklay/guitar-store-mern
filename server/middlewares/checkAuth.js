const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../constants")

const checkAuth = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({
        message: "Нет доступа!"
      })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    return next()
  } catch (e) {
    return res.status(403).json({
      message: "Нет доступа!"
    })
  }
}

module.exports = checkAuth