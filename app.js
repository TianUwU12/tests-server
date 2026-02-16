const express = require("express");
const testRoutes = require("./routes/test-routes");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    optionsSuccessStatus: 200,
  })
);
app.use("/api/tests", testRoutes);

app.listen(port, () => {
  console.log("blablabla3");
});
