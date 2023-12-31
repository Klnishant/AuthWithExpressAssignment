const express = require("express");
require("dotenv").config()
const { userRoute } = require("./routes/userRoutes.js");
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")

app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))
app.use(cookieParser())

app.use(express.json())
app.use("/",userRoute)

module.exports=app;