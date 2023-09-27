import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductForm from "./components/Header/ProductForm";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import sampleProducts from "./sample.json";

function App() {
  // reading products from mongodb
  const [products] = useState(sampleProducts);

  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  const openProductForm = () => {
    setIsProductFormOpen(true);
  };

  const closeProductForm = () => {
    setIsProductFormOpen(false);
  };

  return (
    <div className="App">
      <Header onCreateProduct={openProductForm} />
      {isProductFormOpen && <ProductForm onClose={closeProductForm} />}
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
