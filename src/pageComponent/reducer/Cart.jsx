// components/CartPage.js
import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./cart.css";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate(); // Move useNavigate inside the component

  // Function to remove item from cart
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Function to navigate to the home page when "GET STARTED" button is clicked
  const getPuchaseItem = () => {
    navigate("/"); // Navigate to home page or other page
  };

  // Calculate the total price
  const totalPrice = state.cart.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')), 0);

  // Calculate the total number of items
  const itemCount = state.cart.reduce((count, item) => count + item.count, 0);

  const packed=()=>{
    navigate("/itemPacked")
  }

  return (
    <div className="cart">
      <h1 className="Shopping-h1">Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <>
        <div className="center-empty-btn">
          <p className="empty">Your cart is empty!</p>
          <button onClick={getPuchaseItem} className="getStart">GET STARTED</button>
          </div>
        </>
      ) : (
        <div>
          <ul>
            {state.cart.map((item) => (
              <li key={item.id}>
                <div className="cartflex">
                  <div className="total-width">
                    <div className="cartleft">
                      <img src={item.img1} alt="" id="low-width" />
                    </div>
                    <div className="cartRight">
                      <h2 className="cart-h2">{item.title}</h2>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.count}</p>
                      <button onClick={() => removeFromCart(item.id)} id="remove">
                        Remove
                      </button>
                      <button id="buy" onClick={packed}> Buy Now </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <p className="TotalPrice">
              <strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}
            </p>
            <p className="total-item">
              <strong>Total Items:</strong> {itemCount}
            </p>
            <button id="clearCart" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
