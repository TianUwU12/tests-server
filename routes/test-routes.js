const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("blablabla1");
  res.status(200).json({ status: "okay" });
});
router.get("/category/:category", () => {
  console.log("blablabla2");
});
module.exports = router;
