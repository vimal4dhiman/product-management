// ProductForm.js
import React, { useState } from "react";
import "./ProductForm.css"; // Import the CSS file for styling
import URL from "../../constants";

function ProductForm({ onClose }) {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL + "/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const product = await response.json();
        alert("Product created");
        console.log("Product created:", product);
      } else {
        alert("Failed To create the product ");
        throw new Error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
    onClose();
  };

  return (
    <div className="product-form-overlay">
      <div className="product-form">
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Product Title/Name:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description:</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating (out of 5):</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={productData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
