require("dotenv").config();
const express = require("express");
const connectDB = require("./config/config");
const propertyRoutes = require("./routes/propertyRoute");
const bookProperty = require("./routes/bookingRoute");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/properties", propertyRoutes);
app.use("/bookProperty", bookProperty);
connectDB();

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
