const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

function checkAuth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Не авторизован!" })
    }

    const decoded = jwt.verify(token, JWT_SECRET)

    req.user = decoded

    next()
  } catch (e) {
    console.error("Ошибка авторизации:", e.message);

    if (e.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Невалидный токен!" });
    }

    if (e.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Срок действия токена истёк!" });
    }

    res.status(500).json({ message: "Внутренняя ошибка авторизации." });
  }
}

module.exports = checkAuth