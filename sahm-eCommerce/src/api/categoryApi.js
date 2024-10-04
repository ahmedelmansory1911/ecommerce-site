import axiosInstance from "./index";

// Create a new category with token
export const createCategory = async (categoryData, token) => {
  const response = await axiosInstance.post("/categories", categoryData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Fetch all categories with token
export const fetchCategory = async () => {
  const response = await axiosInstance.get("/categories");
  return response.data;
};

// Fetch a single category by ID with token
export const fetchCategoryById = async (id, token) => {
  const response = await axiosInstance.get(`/category/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update a category by ID with token
export const updateCategory = async (id, updatedData, token) => {
  const response = await axiosInstance.put(`/category/${id}`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete a category by ID with token
export const deleteCategory = async (id, token) => {
  const response = await axiosInstance.delete(`/category/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
