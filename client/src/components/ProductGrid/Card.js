import React from "react";
import "./Card.css";
import URL from "../../constants";

const Card = ({ product, setProducts }) => {
  const { title, description, price, rating, brand } = product;

  const handleDeleteClick = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      try {
        const response = await fetch(URL + `/api/products/${productId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== productId)
          );
          alert("Item Deleted");
        } else {
          throw new Error("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };
  return (
    <div className="product-card">
      <div className="product-header">
        <h2 className="product-title">{title}</h2>
        <div className="product-rating">
          <p className="product-rating-text">{rating}/5</p>
        </div>
      </div>
      <div className="product-details">
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <div className="product-info">
            <p className="product-price">${price.toFixed(2)}</p>
            <p className="product-brand">Brand: {brand}</p>
          </div>
          <button
            onClick={() => handleDeleteClick(product._id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
