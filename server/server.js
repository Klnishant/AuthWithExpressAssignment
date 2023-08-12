const express = require("express");
require("dotenv").config()
const connectDatabase = require("./config/database");
const { userRoute } = require("./routes/userRoutes.js");
const app = express();

app.listen(process.env.PORT,async()=>{
    connectDatabase()
      console.log("Server Starting on PORT :",process.env.PORT)
  })