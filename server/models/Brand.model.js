const { Schema, model } = require("mongoose")

const BrandSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  logoUrl: {
    type: String,
    require: true
  }
})

module.exports = model("Brand", BrandSchema)