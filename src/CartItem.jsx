import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem, updateQuantity } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    alert("Checkout coming soon!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          background: "#e3f2fd",
          padding: "15px 20px",
          borderRadius: "10px",
        }}
      >
        <h2>Shopping Cart</h2>
        <button onClick={onContinueShopping}>Continue Shopping</button>
      </nav>

      <h3>Total Cart Amount: ${cart.totalAmount}</h3>
      <h4>Total Items: {cart.totalQuantity}</h4>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: ${item.totalPrice}</p>

                <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
                  +
                </button>

                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                  style={{ marginLeft: "10px" }}
                >
                  -
                </button>

                <button
                  onClick={() => dispatch(deleteItem(item.id))}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <button onClick={checkoutHandler} style={{ marginRight: "10px" }}>
            Checkout
          </button>

          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default CartItem;