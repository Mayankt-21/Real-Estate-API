const express = require("express");
const router = express.Router();
const validateProperty = require("../middleware/validateProperty");
const {
  createProperty,
  getProperty,
} = require("../controllers/propertyController");

router.post("/", validateProperty, createProperty);
router.get("/", getProperty);

module.exports = router;
