const mongoose = require("mongoose");
require("dotenv").config();
const mongodbURI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectDB;
