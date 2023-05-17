// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const mongoURI =
//   "mongodb+srv://zamannawed28:ySaKCT0i0kgQynU8@cluster0.22lpqzb.mongodb.net/?retryWrites=true&w=majority";
// const connectToMongo = async () => {
//   mongoose.connect(
//     mongoURI,
//     await console.log("Connected to mongo `Successful")
//   );
// };

// connectToMongo();
// app.listen(5000, () => {
//   console.log("successfully connected");
// });

// // Define a Vendor schema
// const VendorSchema = new mongoose.Schema({
//   vendorName: { type: String, required: true },
//   bankAccountNo: { type: String, required: true },
//   bankName: { type: String, required: true },
//   addressLine1: { type: String, required: true },
//   addressLine2: String,
//   city: { type: String, required: true },
//   country: { type: String, required: true },
//   zipCode: { type: String, required: true },
// });

// // Create a Vendor model
// const Vendor = mongoose.model("Vendor", VendorSchema);

// // Create a new vendor
// app.post("/vendors", (req, res) => {
//   const {
//     vendorName,
//     bankAccountNo,
//     bankName,
//     addressLine1,
//     addressLine2,
//     city,
//     country,
//     zipCode,
//   } = req.body;

//   const newVendor = new Vendor({
//     vendorName,
//     bankAccountNo,
//     bankName,
//     addressLine1,
//     addressLine2,
//     city,
//     country,
//     zipCode,
//   });

//   newVendor
//     .save()
//     .then(() => {
//       res.json({ message: "Vendor created successfully" });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to create vendor" });
//     });
// });
// // Get all vendors
// app.get("/vendors", (req, res) => {
//   Vendor.find({})
//     .then((docs) => {
//       console.log(docs);
//       res.json(docs);
//     })
//     .catch((err) => console.log(err));
// });

// // Get a vendor by ID
// app.get("/vendors/:id", (req, res) => {
//   const vendorId = req.params.id;

//   Vendor.findById(vendorId)
//     .then((vendor) => {
//       if (vendor) {
//         res.json(vendor);
//       } else {
//         res.status(404).json({ error: "Vendor not found" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to retrieve vendor" });
//     });
// });

// // Update a vendor by ID
// app.put("/vendors/:id", (req, res) => {
//   const vendorId = req.params.id;

//   Vendor.findByIdAndUpdate(vendorId, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((updatedVendor) => {
//       if (updatedVendor) {
//         res.json({
//           message: "Vendor updated successfully",
//           vendor: updatedVendor,
//         });
//       } else {
//         res.status(404).json({ error: "Vendor not found" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to update vendor" });
//     });
// });
// // Delete a vendor by ID
// app.delete("/vendors/:id", (req, res) => {
//   const vendorId = req.params.id;

//   Vendor.findByIdAndRemove(vendorId)
//     .then((deletedVendor) => {
//       if (deletedVendor) {
//         res.json({ message: "Vendor deleted successfully" });
//       } else {
//         res.status(404).json({ error: "Vendor not found" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to delete vendor" });
//     });
// });
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const vendorRoutes = require("./routes/vendorRoutes");
const connectDB = require("./config/database");

const customMiddleware = require("./middlewares/customMiddleware");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Custom middleware
app.use(customMiddleware);

// Routes
app.use("/vendors", vendorRoutes);
// Connect to the database
connectDB();
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
