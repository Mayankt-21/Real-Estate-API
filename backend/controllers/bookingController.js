const Booking = require("../models/booking");
const Property = require("../models/Property");

const bookProperty = async (req, res) => {
  try {
    const { userId, propertyId, status, bookingDate } = req.body;
    const newBooking = new Booking({
      userId,
      propertyId,
      status,
      bookingDate,
    });

    const property = await Property.findById(propertyId);
    if (!property)
      return res.status(500).json({ message: "No such property found" });
    if (property.availableUnits < 1)
      return res
        .status(500)
        .json({ message: "No available units of this Property" });

    res.json({
      message: "Payment Processing",
      booking: newBooking,
    });

    setTimeout(async () => {
      try {
        newBooking.status = "Confirmed";
        property.availableUnits -= 1;

        await property.save();
        await newBooking.save();

        console.log("Payment Completed, Booking Done");
      } catch (err) {
        console.error("Error completing Payment: ", err);
        res.status(500).json({
          message: "Booking Failed, Payment Incomplete",
        });
      }
    }, 10000);
  } catch (err) {
    console.error("Error booking property: ", err);
    res.status(500).json({ message: "Failed to book property" });
  }
};

module.exports = bookProperty;
