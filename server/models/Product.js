const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  rating: Number,
  brand: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
