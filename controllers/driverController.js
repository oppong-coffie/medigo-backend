const orderModel = require("../models/orderModel");

const home = (req, res) => {
    res.send("Hello from Express + MongoDB!");
  };
  

// Get active order for a specific driver
const getDriverOrder = async (req, res) => {
  try {
    const { driverID } = req.params;

    if (!driverID) {
      return res.status(400).json({ success: false, message: "driverID is required" });
    }

    // Find the latest active order for this driver
    const order = await orderModel.findOne({
      driverID: driverID,
      status: { $in: ["pending", "accepted"] }, // Only active orders
    }).sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({ success: false, message: "No active order found" });
    }

    res.status(200).json({
      success: true,
      order: {
        id: order._id,
        passengerID: order.passengerID,
        driverID: order.driverID,
        pickup: order.pickup,
        destination: order.destination,
        destinationName: order.destinationName,
        fare: order.fare,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("❌ Error fetching driver order:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  home,
  getDriverOrder,
};
