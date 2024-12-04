// context/CartContext.js
import React, { createContext, useReducer, useEffect } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("cartState")) || { cart: [], cartCount: 0 };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Persist the cart state to localStorage
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
