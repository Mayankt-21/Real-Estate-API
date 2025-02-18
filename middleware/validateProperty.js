const validateProperty = (req, res, next) => {
  const { name, location, price, availableUnits } = req.body;

  if (!price || !availableUnits || !name || !location)
    return res.status(400).json("Missing Required Fields");
  if (price <= 0 || availableUnits <= 0)
    return res.status(400).json("Quantity value cannot be negative");

  next();
};

module.exports = validateProperty;
