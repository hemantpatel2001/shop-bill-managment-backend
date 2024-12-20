const express = require("express");
const productController = require ("./controller.products");
const { route } = require("./route.products");
const router=require("express").Router()


//route for create product.
router.post("/createProduct",productController.createProduct)
// Get all products
router.get('/getAllProducts', productController.getAllProducts);

// Get a product by ID
router.get('/singleproduct/:id', productController.getProductById);

// Update a product
router.put('/update/:id', productController.updateProduct);

// Delete a product


module.exports = router
