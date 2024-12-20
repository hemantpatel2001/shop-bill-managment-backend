const express = require("express");
const vendorController = require("./controller.vendorschemas");
const validate = require("../middleware/validationMiddleware")
const vendorValidationSchema = require("../vendorschemas/validation.vendorschemas");
const router = express.Router();

// Create a new vendor
router.post("/createVendor", validate(vendorValidationSchema), vendorController.createVendor);

// Get all vendors
router.get("/getAllVendors",  vendorController.getVendors);

// Get a single vendor by ID
router.get("/getSingleVendor/:id",  vendorController.getSingleVendor);

// Edit vendor details
router.patch("/editVendor/:id",validate(vendorValidationSchema),  vendorController.editVendor);

// Soft delete a vendor by ID
router.delete("/deleteVendor/:id",  vendorController.deleteVendor);

// Get total vendor count
router.get("/countVendors",  vendorController.getVendorCount);

module.exports = router;
