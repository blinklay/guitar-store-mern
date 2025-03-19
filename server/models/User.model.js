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
  role: {
    type: String,
    enum: ["user", "moderator", "admin"],
    default: "user"
  }
})

module.exports = model("User", UserSchema)