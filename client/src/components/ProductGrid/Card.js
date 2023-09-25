import React from "react";
import "./Card.css";

const Card = ({ product, onDelete }) => {
  const { title, description, price, rating, brand } = product;
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmDelete) {
      onDelete(product);
      alert("Item Deleted");
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
          <button onClick={handleDeleteClick} className="delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
