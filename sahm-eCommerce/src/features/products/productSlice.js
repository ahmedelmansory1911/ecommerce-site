import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductThunk,
  fetchProductByIdThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "./productsThunks";

const initialState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchProductThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch a single product by ID
      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductByIdThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create a product
      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // Update a product
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      // Delete a product
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (p) => p.id !== action.payload.id
        );
      });
  },
});

export const { resetProduct } = productsSlice.actions;
export default productsSlice.reducer;
