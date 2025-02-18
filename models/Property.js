const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availableUnits: {
    type: Number,
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
