// src/features/compare/compareSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare(state, action) {
      const product = action.payload;
      if (!state.items.find((item) => item.id === product.id)) {
        state.items.push(product);
      }
    },
    removeFromCompare(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCompare(state) {
      state.items = [];
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } =
  compareSlice.actions;
export default compareSlice.reducer;
