const express = require("express");
const testRoutes = require("./routes/test-routes");
const authRoutes = require("./routes/auth-routes");
const cors = require("cors");
const app = express();
const port = 3000;

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

// + endpoint
// register
// auth
// checkTest + mark

// + DB

// + Model (user,test,category)

//+middleware auth

app.listen(port, () => {
  console.log("blablabla3");
});
