const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testbase"); // замени на свой URI
    console.log("MongoDB подключена");
  } catch (err) {
    console.error("Ошибка подключения:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
