const express = require("express");
const productController = require ("./controller.products");
const { route } = require("./route.products");
const router = express.Router();

//route for create product.
//router.post("/createProduct", productController.create)
// Get all products
//router.get('/', productController.getAllProducts);

// Get a product by ID
//router.get('/:id', productController.getProductById);

// Update a product
//router.put('/:id', productController.updateProduct);

// Delete a product


module.exports = router
