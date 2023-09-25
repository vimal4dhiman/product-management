import { useState } from "react";
import "./App.css";
import Card from "./components/ProductGrid/Card";
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

  const submitProductForm = (productDescription) => {
    console.log();
    // sending data to mongo db
    console.log("Creating product with description:", productDescription);
  };

  return (
    <div className="App">
      <Header onCreateProduct={openProductForm} />
      {isProductFormOpen && (
        <ProductForm onClose={closeProductForm} onSubmit={submitProductForm} />
      )}
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
