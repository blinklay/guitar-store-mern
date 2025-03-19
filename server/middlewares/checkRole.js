const checkRole = (role) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Не авторизован!"
        })
      }

      if (role !== req.user.role) {
        return res.status(403).json({
          message: "Не достаточно прав!"
        })
      }
      next()
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Ошибка проверки роли пользователя!"
      })
    }
  }
}

module.exports = checkRole