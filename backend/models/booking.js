const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  propertyId: {
    type: mongoose.Schema.ObjectId,
    ref: "properties",
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ["Confirmed", "Pending", "Cancelled"],
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
