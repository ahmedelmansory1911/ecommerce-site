// categoriesThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchCategory,
  fetchCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categoryApi";

// Fetch all categories
export const fetchCategoryThunk = createAsyncThunk(
  "categories/fetchCategory",
  async (_, { getState }) => {
    const response = await fetchCategory();
    return response;
  }
);

// Fetch a single category by ID
export const fetchCategoryByIdThunk = createAsyncThunk(
  "categories/fetchCategoryById",
  async (id, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await fetchCategoryById(id, token);
    return response;
  }
);

// Create a new category
export const createCategoryThunk = createAsyncThunk(
  "categories/createCategory",
  async (categoryData, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    console.log("token", token);
    const response = await createCategory(categoryData, token);
    return response;
  }
);

// Update a category
export const updateCategoryThunk = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, updatedData }, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await updateCategory(id, updatedData, token);
    return response;
  }
);

// Delete a category
export const deleteCategoryThunk = createAsyncThunk(
  "categories/deleteCategory",
  async (id, { getState }) => {
    const state = getState();
    const token = state.auth.user.token; // Adjust the path according to your state structure
    const response = await deleteCategory(id, token);
    return response;
  }
);
