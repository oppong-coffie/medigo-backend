const orderModel = require("../models/orderModel"); // import Order model

// START:: POST a new order
const postOrder = async (req, res) => {
  try {
    const {
      passengerID,
      driverID,
      pickup,
      destination,
      destinationName,
      fare,
      status,
    } = req.body;

    // validate required fields
    if (!passengerID || !driverID || !pickup || !destination || !fare) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new orderModel({
      passengerID,
      driverID,
      pickup,
      destination,
      destinationName,
      fare,
      status: status || "pending",
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "✅ Order saved successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("❌ Error saving order:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// END:: POST a new order


module.exports = { postOrder };
