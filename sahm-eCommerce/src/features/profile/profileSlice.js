import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProfileThunk,
  updateProfileThunk,
  deleteProfileThunk,
  updatePasswordThunk,
} from "./profileThunks";

const initialState = {
  profiles: [],
  profile: null,
  status: "idle",
  error: null,
};

const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.profile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all profiles
      .addCase(fetchProfileThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfileThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profiles = action.payload;
      })
      .addCase(fetchProfileThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Update a profile
      .addCase(updateProfileThunk.fulfilled, (state, action) => {
        const index = state.profiles.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.profiles[index] = action.payload;
        }
      })
      // Update a profile
      .addCase(updatePasswordThunk.fulfilled, (state, action) => {
        const index = state.profiles.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.profiles[index] = action.payload;
        }
      })
      // Delete a profile
      .addCase(deleteProfileThunk.fulfilled, (state, action) => {
        state.profiles = state.profiles.filter(
          (p) => p.id !== action.payload.id
        );
      });
  },
});

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
