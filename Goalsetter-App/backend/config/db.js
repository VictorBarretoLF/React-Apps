const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("trying to connect to mongo server".cyan.underline);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || process.env.MONGO_URI_COMPOSE);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
