const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    passengerID: { type: String },
    driverID: { type: String },
    pickup: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    destination: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    destinationName: { type: String },
    fare: { type: Number, required: true },
    status: { type: String, enum: ["pending", "accepted", "completed"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", OrderSchema);
