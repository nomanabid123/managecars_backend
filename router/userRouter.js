const express = require("express");
const router = express.Router();

const {signup, login} = require("../controller/authController");

// Route to signup
router.post("/signup", signup);

// Route to login
router.post("/login", login);

module.exports = router;
