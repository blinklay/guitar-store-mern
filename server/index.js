const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.router");
const cookieParser = require("cookie-parser");
const adminRouter = require("./routes/admin.routes");

dotenv.config();

const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONOGO_URI

const app = express()

app.use(cors())
app.use(cookieParser());
app.use(express.json())

mongoose.connect(MONGO_URI)
  .then(() => console.log("db work!"))
  .catch(e => console.log("db not work: " + e))

// routes
app.use("/auth", authRouter)
app.use("/admin", adminRouter)

app.listen(PORT, () => console.log("server start on PORT: " + PORT))