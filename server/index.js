require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const ProductRouter = require('./routes/Product.router');
const AuthRouter = require('./routes/Auth.router');
const UserRouter = require('./routes/User.router');
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const CLIENT_URL = process.env.CLIENT_URL
const cors = require("cors")

const app = express()

app.use(express.json())
app.use("/uploads", express.static("uploads"));
app.use(cookieParser());
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

mongoose.connect(MONGO_URI)
  .then(() => console.log("DB start!"))
  .catch(err => console.error("DB Error", err))

app.listen(PORT, () => console.log("Server start!"))

app.use("/auth", AuthRouter)
app.use("/products", ProductRouter)
app.use("/user", UserRouter)

app.on("error", (err) => {
  console.error("Server Error: ", err);
  process.exit(1)
})