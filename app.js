require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const testRoutes = require("./routes/test-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();
const port = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB успешно подключена");
  } catch (err) {
    console.error("❌ Ошибка подключения к БД:", err.message);
    process.exit(1);
  }
};

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());

app.use("/api/tests", testRoutes);
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${port}`);
});
