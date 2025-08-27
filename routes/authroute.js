// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const {userRegister, userLogin} = require("../controllers/authController");

// Define routes
router.post("/user-register", userRegister);

router.post("/userlogin", userLogin);


module.exports = router;
