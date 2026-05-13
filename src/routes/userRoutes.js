const express = require("express");
const protect = require("../middlewares/authMiddleware");
const { getCurrentUsers } = require("../controllers/userController");
const router = express.Router();

router.get("/me", protect, getCurrentUsers);

module.exports = router;
