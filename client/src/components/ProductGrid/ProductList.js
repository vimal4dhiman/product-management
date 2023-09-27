import React from "react";
import "./ProductList.css";
import Card from "./Card";

const ProductList = ({ products, setProducts }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} product={product} setProducts={setProducts} />
      ))}
    </div>
  );
};

export default ProductList;
