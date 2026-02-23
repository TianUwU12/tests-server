const express = require("express");
const router = express.Router();
const authContoller = require("../controllers/authController");

router.post("/auth", authContoller.authorise);
router.post("/reg", authContoller.register);

module.exports = router;
