const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
}, {
  timestamps: true
})

module.exports = model("User", UserSchema)