const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect("mongodb://127.0.0.1:27017/productsdata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

// For creating a new product
app.post("/api/products", async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//For fetching all the products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// For deleting the products
app.delete("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// For updating the existing products
app.put("/api/products/:title", async (req, res) => {
  try {
    const titleToUpdate = req.params.title;
    const updatedProductData = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { title: titleToUpdate },
      updatedProductData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
