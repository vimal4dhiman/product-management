import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductForm from "./components/Header/ProductForm";
import ProductGrid from "./components/ProductGrid/ProductGrid";

const App = () => {
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const openProductForm = () => {
    setIsProductFormOpen(true);
  };

  const closeProductForm = () => {
    setIsProductFormOpen(false);
  };

  return (
    <div className="App">
      <Header onCreateProduct={openProductForm} />
      {isProductFormOpen && (
        <ProductForm onClose={closeProductForm} products={products} />
      )}
      <ProductGrid products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;
