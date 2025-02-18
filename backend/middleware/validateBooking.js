const Property = require("../models/Property");

const validateBooking = async (req, res, next) => {
  try {
    const { userId, propertyId } = req.body;
    if (!userId)
      return res.status(400).json({ message: "Missing required userId" });
    if (!propertyId)
      return res
        .status(400)
        .json({ message: "Property ID not found in request body" });

    const property = await Property.findById(propertyId);

    if (!property)
      return res.status(400).json({ message: "No such Property exists" });

    if (property.availableUnits < 1)
      return res.status.json({
        message: "No available Units for this property",
      });

    next();
  } catch (err) {
    console.error("Error Validating Booking", err);
    res.status(400).json({ error: "Failed to validate Booking" });
  }
};

module.exports = validateBooking;
