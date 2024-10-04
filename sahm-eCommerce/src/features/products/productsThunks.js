// productsThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProduct,
  fetchProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productApi";

// Fetch all products
export const fetchProductThunk = createAsyncThunk(
  "products/fetchProduct",
  async (_, { getState }) => {
    const response = await fetchProduct();
    return response;
  }
);

// Fetch a single product by ID
export const fetchProductByIdThunk = createAsyncThunk(
  "products/fetchProductById",
  async (id, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await fetchProductById(id, token);
    return response;
  }
);

// Create a new product
export const createProductThunk = createAsyncThunk(
  "products/createProduct",
  async (productData, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await createProduct(productData, token);
    return response;
  }
);

// Update a product
export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updatedData }, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await updateProduct(id, updatedData, token);
    return response;
  }
);

// Delete a product
export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await deleteProduct(id, token);
    return response;
  }
);
