const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.router");

dotenv.config();

const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONOGO_URI

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRouter)

mongoose.connect(MONGO_URI)
  .then(() => console.log("db work!"))
  .catch(e => console.log("db not work: " + e))

app.listen(PORT, () => console.log("server start on PORT: " + PORT))