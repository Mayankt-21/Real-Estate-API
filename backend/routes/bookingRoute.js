const express = require("express");
const router = express.Router();
const bookProperty = require("../controllers/bookingController");
const validateBooking = require("../middleware/validateBooking");

router.post("/", validateBooking, bookProperty);

module.exports = router;
