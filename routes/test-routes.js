const express = require("express");
const categoryQuestions = require("../data/tests");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(categoryQuestions);

  res.status(200).json(categoryQuestions);
});
router.get("/category/:category", () => {
  console.log("blablabla2");
});
module.exports = router;
