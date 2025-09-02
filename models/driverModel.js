const mongoose = require("mongoose");

// Define the schema
const DriverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Export the model
module.exports = mongoose.model("drivers", DriverSchema);
