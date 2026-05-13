const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const {
    register,
    login
} = require("../controllers/authController");


router.post("/register", protect, register);

router.post("/login", protect, login);

module.exports = router;