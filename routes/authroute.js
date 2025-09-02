// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const {userRegister, userLogin, driverLogin, driverRegister} = require("../controllers/authController");

// Define routes
router.post("/user-register", userRegister);

router.post("/userlogin", userLogin);

router.post("/driverlogin", driverLogin);

router.post("/driver-register", driverRegister);


module.exports = router;
