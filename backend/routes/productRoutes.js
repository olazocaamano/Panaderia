const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

const {
    getProducts,
    createProduct
} = require("../controllers/productController");

router.get("/", protect, getProducts);
router.post("/", protect, createProduct);

module.exports = router;