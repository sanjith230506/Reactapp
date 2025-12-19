const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./db");

const app = express();

app.use(cors(
    {
        origin:"http://13.60.37.52:7000"
    }
));
app.use(express.json());

connectDB();

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
