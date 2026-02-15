const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/", testController.getAllCategories);

router.get("/category/:id", testController.getCategoryById);

module.exports = router;
