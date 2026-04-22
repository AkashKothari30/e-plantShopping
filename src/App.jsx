import { useState } from "react";
import AboutUs from "./AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      {!showProducts ? (
        <div className="hero">
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <AboutUs />
      )}
    </>
  );
}

export default App;