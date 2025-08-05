const mongoose = require("mongoose");

const connectDB = async () => {
 await mongoose.connect("mongodb://127.0.0.1:27017/tododb")
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection failed:", error.message);
    });
};

module.exports = connectDB;
