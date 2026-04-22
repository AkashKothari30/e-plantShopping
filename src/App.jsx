import { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {currentPage === "home" && (
        <div className="container">
          <div className="overlay">
            <h1>Paradise Nursery</h1>
            <p>Welcome to our plant store 🌱</p>
            <button onClick={() => setCurrentPage("products")}>Get Started</button>
          </div>
        </div>
      )}

      {currentPage === "about" && <AboutUs />}

      {currentPage === "products" && (
        <ProductList onGoToCart={() => setCurrentPage("cart")} />
      )}

      {currentPage === "cart" && (
        <CartItem onContinueShopping={() => setCurrentPage("products")} />
      )}
    </>
  );
}

export default App;