import React, { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

function ProductGrid({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (productToDelete) => {
    // Implement your logic to delete the product here
    // For example, you can filter the products array to remove the product
    // Update the state or make an API request to delete the product from the server
    // For this example, we'll just log the product being deleted
    console.log("Product deleted:", productToDelete);
  };

  return (
    <div className="product-grid">
      <ProductList products={currentProducts} onDelete={handleDelete} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductGrid;
