import React, { useState } from "react";
import "./ProductForm.css";
import URL from "../../constants";

const ProductForm = ({ onClose, products }) => {
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

  const updateExistingProduct = async () => {
    try {
      const response = await fetch(URL + `/api/products/${productData.title}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      console.log(response);
      if (response.ok) {
        const updatedProduct = await response.json();
        console.log("Product updated:", updatedProduct);
      } else {
        throw new Error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const createNewProduct = async () => {
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
      } else {
        alert("Failed To create the product ");
        throw new Error("Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (products.find((ele) => ele.title === productData.title)) {
      await updateExistingProduct();
    } else {
      await createNewProduct();
    }
    onClose();
  };

  return (
    <div className="product-form-overlay">
      <div className="product-form">
        <h2>Create Product</h2>
        <h4>To edit an existing product, enter it's title</h4>
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
};

export default ProductForm;
