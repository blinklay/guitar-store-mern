const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user"
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
})

module.exports = model("User", UserSchema)