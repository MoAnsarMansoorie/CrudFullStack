
const express = require("express")
const connectToDB = require("./config/db")
const userRoutes = require("./routes/userRoute")
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDB()

app.use("/", userRoutes)
// app.post("/createUser", userRoutes)

module.exports = app