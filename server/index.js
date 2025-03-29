const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.router");
const cookieParser = require("cookie-parser");
const adminRouter = require("./routes/admin.routes");
const productRouter = require("./routes/product.router");
const userRouter = require("./routes/user.router");
const searchRouter = require("./routes/search.router");

dotenv.config();

const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONOGO_URI

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(cookieParser());
app.use(express.json())

mongoose.connect(MONGO_URI)
  .then(() => console.log("db work!"))
  .catch(e => console.log("db not work: " + e))

// routes
app.use("/auth", authRouter)
app.use("/admin", adminRouter)
app.use("/product", productRouter)
app.use('/user', userRouter)
app.use('/search', searchRouter)

app.listen(PORT, () => console.log("server start on PORT: " + PORT))