const { Schema, model } = require("mongoose")

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  oldPrice: Number,
  count: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model("Product", ProductSchema)