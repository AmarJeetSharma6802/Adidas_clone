export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const newCart = [...state.cart];
        newCart[existingItemIndex].count += 1;
        return {
          ...state,
          cart: newCart,
          cartCount: state.cartCount + 1, // Increment the count
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
        cartCount: state.cartCount + 1, // Increment the count
      };
    case "REMOVE_FROM_CART":
      const newCart = state.cart.filter(item => item.id !== action.payload);
      const removedItem = state.cart.find(item => item.id === action.payload);
      return {
        ...state,
        cart: newCart,
        cartCount: removedItem ? state.cartCount - removedItem.count : state.cartCount,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        cartCount: 0,
      };
    default:
      return state;
  }
};
