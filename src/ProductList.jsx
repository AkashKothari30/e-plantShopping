import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        id: 1,
        name: "Lavender",
        price: 12,
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 2,
        name: "Mint",
        price: 8,
        image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 3,
        name: "Aloe Vera",
        price: 10,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 4,
        name: "Tulsi",
        price: 9,
        image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 5,
        name: "Snake Plant",
        price: 15,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5e18?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 6,
        name: "Peace Lily",
        price: 18,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
];

function ProductList({ onGoToCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          background: "#e8f5e9",
          padding: "15px 20px",
          borderRadius: "10px",
        }}
      >
        <h2>Paradise Nursery - Product Listing</h2>
        <button onClick={onGoToCart}>Go to Cart</button>
      </nav>

      {plantsArray.map((categoryObj) => (
        <div key={categoryObj.category} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "green" }}>{categoryObj.category}</h2>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            {categoryObj.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  width: "220px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{
                    width: "100%",
                    height: "160px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                  style={{
                    backgroundColor: isInCart(plant.id) ? "gray" : "green",
                    color: "white",
                    border: "none",
                    padding: "10px 14px",
                    borderRadius: "6px",
                    cursor: isInCart(plant.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;