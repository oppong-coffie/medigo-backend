// routes/userroute.js
const express = require("express");
const router = express.Router();
const {postOrder} = require("../controllers/userController");

// Define routes
router.post("/postorder", postOrder);

module.exports = router;
