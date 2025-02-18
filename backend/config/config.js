require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose Connection Successful");
  } catch (err) {
    console.error("Error connecting with mongoose:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
