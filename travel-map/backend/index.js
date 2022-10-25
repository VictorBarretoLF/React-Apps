const express = require("express");
const connectDB = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pin", require("./routes/pinsRoutes"));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
