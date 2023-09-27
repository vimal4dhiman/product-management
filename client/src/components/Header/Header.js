import React from "react";
import "./Header.css";

const Header = ({ onCreateProduct }) => {
  return (
    <header className="app-header">
      <h1>Product Management</h1>
      <button className="create-product-button" onClick={onCreateProduct}>
        Create/Edit Product
      </button>
    </header>
  );
};

export default Header;
