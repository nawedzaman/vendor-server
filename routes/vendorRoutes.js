const express = require("express");
const vendorController = require("../controllers/vendorController");

const router = express.Router();

// Create a new vendor
router.post("/", vendorController.createVendor);

// Retrieve all vendors
router.get("/", vendorController.getAllVendors);

// Retrieve a vendor by ID
router.get("/:id", vendorController.getVendorById);

// Update a vendor by ID
router.put("/:id", vendorController.updateVendorById);

// Delete a vendor by ID
router.delete("/:id", vendorController.deleteVendorById);

module.exports = router;
