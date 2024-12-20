const express = require("express");
const invoiceController = require("./controller.invoice");
const router = express.Router(); // Correctly initialize a new router instance

// Routes for CRUD operations
router.post("/createInvoice", invoiceController.createInvoice);
router.get("/getAllInvoice", invoiceController.getAllInvoices);

module.exports = router;
