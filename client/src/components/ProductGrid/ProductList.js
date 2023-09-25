import React from "react";
import "./ProductList.css";
import Card from "./Card";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
