const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const port = 5000
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const app = express()
const cors = require('cors')

connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))