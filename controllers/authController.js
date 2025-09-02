const userModel = require('../models/userModel');
const driverModel = require('../models/driverModel');

// START:: Register a new user
const userRegister = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const user = await userModel.create({ name, email, password, phone });

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// END:: Register a new user

// START:: USER LOGIN FUNCTION
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 2. Match plain-text password
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // 3. Exclude password before returning
    const { password: _, ...userData } = user.toObject();

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: userData,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// END:: USER LOGIN FUNCTION

// START:: DRIVER LOGIN FUNCTION
const driverLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists
    const user = await driverModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 2. Match plain-text password
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // 3. Exclude password before returning
    const { password: _, ...userData } = user.toObject();

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: userData,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// END:: DRIVER LOGIN FUNCTION

  
  // Export functions
  module.exports = { userRegister, userLogin };
  