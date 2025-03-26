const AppError = require("../errors")
const UserModel = require("../models/User.model")
const validateProduct = require("../validations/productValidator")

async function updateUserList(username, productId, field) {
  await validateProduct(productId)
  await UserModel.findOneAndUpdate({ username }, {
    $addToSet: {
      [field]: productId
    }
  })

  return `Товар добавлен в ${field === "cart" ? "корзину" : "избранное"}!`
}

async function deleteUserList(username, productId, field) {
  await validateProduct(productId)
  await UserModel.findOneAndUpdate({ username },
    { $pull: { [field]: productId } },
    { new: true }
  ).populate(field)

  return `Товар удален из ${field === "cart" ? "корзины" : "избранного"}!`
}

async function getUserList(username, field) {
  const user = await UserModel.findOne({ username }).select(field).populate(field).lean()
  if (!user) {
    throw new AppError("Пользователь не найден!", 404)
  }
  return user[field]
}

module.exports = { updateUserList, deleteUserList, getUserList }