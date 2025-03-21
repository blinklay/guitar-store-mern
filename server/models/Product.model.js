const { Schema, model } = require("mongoose")

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  imgUrl: {
    type: String
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  salePecent: {
    type: Number
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand"
  }
}, {
  timestamps: true
})

module.exports = model("Product", ProductSchema)