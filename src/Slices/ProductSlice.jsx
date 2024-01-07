import { createSlice } from "@reduxjs/toolkit";
export const ProductSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart(state, action) {
      state.cart.push({ ...action.payload, quantity: 1 });
      console.log(action.payload);
    },
    removeFromCart(state, action) {
      const removeItem = state.cart.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.cart = removeItem;
      console.log(state.cart);
    },
    incrementCart(state, action) {
      const presentItem = state.cart.find((item) => {
        return item.id === action.payload.id;
      });
      presentItem.quantity++;
    },
    decrementCart(state, action) {
      const presentItem = state.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (presentItem.quantity <= 1) {
        const removeItem = state.cart.filter((item) => {
          return item.id !== action.payload.id;
        });
        state.cart = removeItem;
      } else {
        presentItem.quantity--;
      }
    },
    cleanCart(state) {
      state.cart = [];
    },
  },
});
export default ProductSlice.reducer;
// eslint-disable-next-line react-refresh/only-export-components
export const {
  addToCart,
  removeFromCart,
  incrementCart,
  decrementCart,
  cleanCart,
} = ProductSlice.actions;
