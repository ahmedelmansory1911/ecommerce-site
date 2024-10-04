import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoryThunk,
  fetchCategoryByIdThunk,
  createCategoryThunk,
  updateCategoryThunk,
  deleteCategoryThunk,
} from "./categoriesThunks";

const initialState = {
  categories: [],
  category: null,
  status: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    resetCategory: (state) => {
      state.category = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all categories
      .addCase(fetchCategoryThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategoryThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch a single category by ID
      .addCase(fetchCategoryByIdThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryByIdThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload;
      })
      .addCase(fetchCategoryByIdThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Create a category
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })

      // Update a category
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (c) => c.id === action.payload.id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })

      // Delete a category
      .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (c) => c.id !== action.payload.id
        );
      });
  },
});

export const { resetCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
