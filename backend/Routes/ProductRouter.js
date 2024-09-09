const express = require("express");
const router = express.Router();
const ProductController = require("../Controllers/ProductController");
const { authenticate } = require("../Middlewares/ProductValidation");

// Add a product
router.post("/", authenticate, ProductController.addProduct);

// Get all products
router.get("/", authenticate, ProductController.getAllProducts);

// Get a product by ID
router.get("/:id", authenticate, ProductController.getProductById);

// Update a product by ID
router.put("/:id", authenticate, ProductController.updateProduct);

// Delete a product by ID
router.delete("/:id", authenticate, ProductController.deleteProduct);

module.exports = router;
