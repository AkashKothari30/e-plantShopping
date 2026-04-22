import React, { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
      quantity: 1
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 15,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=400&q=80",
      quantity: 2
    }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      <p><strong>Total Items:</strong> {totalItems}</p>
      <p><strong>Total Cost:</strong> ${totalAmount}</p>

      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }}
            />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)} style={{ marginLeft: "10px" }}>-</button>
              <button onClick={() => removeItem(item.id)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      <button style={{ marginTop: "20px" }}>Checkout</button>
    </div>
  );
}

export default CartItem;