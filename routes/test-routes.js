const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");
const authMiddleware = require("../middleware/auth");

router.get("/", testController.getAllCategories);

router.get("/category/:id", testController.getCategoryById);
router.post("/submit", authMiddleware, testController.submitResult);
router.get("/history", authMiddleware, testController.getHistory);
module.exports = router;
