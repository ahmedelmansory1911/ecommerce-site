// ProfileThunks.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProfile,
  updateProfile,
  deleteProfile,
  updatePassword,
} from "../../api/profileApi";

// Fetch all Profile
export const fetchProfileThunk = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await fetchProfile();
    return response;
  }
);

// Update a Profile
export const updateProfileThunk = createAsyncThunk(
  "profile/updateProfile",
  async ({ updatedData }) => {
    // Get token from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    if (!token) {
      throw new Error("User is not authenticated");
    }

    const response = await updateProfile(updatedData, token);
    return response;
  }
);
// Delete a Profile
export const deleteProfileThunk = createAsyncThunk(
  "profile/deleteProfile",
  async (id) => {
    // Get token from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    if (!token) {
      throw new Error("User is not authenticated");
    }

    const response = await deleteProfile(id, token);
    return response;
  }
);
// Update a Profile
export const updatePasswordThunk = createAsyncThunk(
  "profile/updatePassword",
  async ({ updatedData }) => {
    // Get token from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    if (!token) {
      throw new Error("User is not authenticated");
    }

    const response = await updatePassword(updatedData, token);
    return response;
  }
);
