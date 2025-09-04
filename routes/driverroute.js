const express = require("express");
const router = express.Router();
const { getDriverOrder, home } = require("../controllers/driverController");

// GET driver’s active order
router.get("/getorder/:driverID", getDriverOrder);
router.get("/", home);

module.exports = router;
