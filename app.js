const express = require("express");
const testRoutes = require("./routes/test-routes");
const app = express();
const port = 3000;

app.use("/api/tests", testRoutes);
app.listen(port, () => {
  console.log("blablabla3");
});
