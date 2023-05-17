const Vendor = require("../models/vendorModel");

// Create a new vendor
exports.createVendor = (req, res) => {
  const {
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  } = req.body;

  const newVendor = new Vendor({
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    addressLine2,
    city,
    country,
    zipCode,
  });

  newVendor
    .save()
    .then((createdVendor) => {
      res.json(createdVendor);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to create vendor" });
    });
};

// Retrieve all vendors
exports.getAllVendors = (req, res) => {
  Vendor.find()
    .then((vendors) => {
      res.json(vendors);
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve vendors" });
    });
};

// Retrieve a vendor by ID
exports.getVendorById = (req, res) => {
  const vendorId = req.params.id;

  Vendor.findById(vendorId)
    .then((vendor) => {
      if (vendor) {
        res.json(vendor);
      } else {
        res.status(404).json({ error: "Vendor not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to retrieve vendor" });
    });
};

// Update a vendor by ID
exports.updateVendorById = (req, res) => {
  const vendorId = req.params.id;
  const updateData = req.body;

  Vendor.findByIdAndUpdate(vendorId, updateData, { new: true })
    .then((updatedVendor) => {
      if (updatedVendor) {
        res.json(updatedVendor);
      } else {
        res.status(404).json({ error: "Vendor not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to update vendor" });
    });
};

// Delete a vendor by ID
exports.deleteVendorById = (req, res) => {
  const vendorId = req.params.id;

  Vendor.findByIdAndRemove(vendorId)
    .then((deletedVendor) => {
      if (deletedVendor) {
        res.json({ message: "Vendor deleted successfully" });
      } else {
        res.status(404).json({ error: "Vendor not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to delete vendor" });
    });
};
