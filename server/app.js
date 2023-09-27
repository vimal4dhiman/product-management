const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product"); // Import your existing Product schema
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/productsdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

// Create a new product
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
