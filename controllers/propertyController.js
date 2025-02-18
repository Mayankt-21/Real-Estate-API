const Property = require("../models/Property");

const createProperty = async (req, res) => {
  try {
    const { name, location, price, availableUnits } = req.body;

    const newProperty = new Property({
      name,
      location,
      price,
      availableUnits,
    });

    await newProperty.save();
    res.status(201).json({
      message: "New Property Created Successfully",
      Property: newProperty,
    });
  } catch (err) {
    console.error("Error adding Property", err);
    res.status(500).json({
      error: "Failed to create Property",
    });
  }
};

const getProperty = async (req, res) => {
  try {
    const properties = await Property.find({ availableUnits: { $gt: 0 } });
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};

module.exports = { createProperty, getProperty };
