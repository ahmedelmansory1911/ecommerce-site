// src/features/wishlist/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      if (!state.items.find((item) => item.id === product.id)) {
        state.items.push(product);
      }
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
