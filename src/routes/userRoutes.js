const express = require("express");
const { getCurrentUsers, getAdmin } = require("../controllers/userController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/me", protect, getCurrentUsers);

router.get("/admin", protect, adminOnly, getAdmin);

module.exports = router;
