require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const UserRouter = require('./routes/User.router')
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const app = express()

app.use(express.json())
app.use(cookieParser());

mongoose.connect(MONGO_URI)
  .then(() => console.log("DB start!"))
  .catch(err => console.error("DB Error", err))

app.listen(PORT, () => console.log("Server start!"))

app.use("/auth", UserRouter)

app.on("error", (err) => {
  console.error("Server Error: ", err);
  process.exit(1)
})