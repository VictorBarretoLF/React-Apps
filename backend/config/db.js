const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/goalMERN');

        console.log("Connected to mongoDB database".cyan.underline)
    } catch (error) {
        console.log("Error")
        process.exit(1)
    }
}

module.exports = connectDB