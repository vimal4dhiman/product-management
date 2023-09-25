import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import ProductForm from "./components/Header/ProductForm";

function App() {
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  const openProductForm = () => {
    setIsProductFormOpen(true);
  };

  const closeProductForm = () => {
    setIsProductFormOpen(false);
  };

  const submitProductForm = (productDescription) => {
    console.log();
    // Send the productDescription to your backend API here
    console.log("Creating product with description:", productDescription);
  };

  return (
    <div className="App">
      <Header onCreateProduct={openProductForm} />
      {isProductFormOpen && (
        <ProductForm onClose={closeProductForm} onSubmit={submitProductForm} />
      )}
      <Card />
    </div>
  );
}

export default App;
