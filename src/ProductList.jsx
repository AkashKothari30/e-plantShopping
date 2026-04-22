import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    description: "A healing indoor plant."
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80",
    description: "A low-maintenance air purifier."
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 20,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
    description: "Beautiful flowering indoor plant."
  }
];

function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Listing</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "220px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;