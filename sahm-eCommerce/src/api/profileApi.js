import axiosInstance from "./index";

// Fetch all profile with token
export const fetchProfile = async () => {
  const response = await axiosInstance.get("/users/getMe");
  return response.data;
};

// Update a profile by ID with token
export const updateProfile = async (updatedData, token) => {
  const response = await axiosInstance.put(`/users/updateMe`, updatedData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
// Delete a profile by ID with token
export const deleteProfile = async (id, token) => {
  const response = await axiosInstance.delete(`/profile/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
// Update a Password  with token
export const updatePassword = async (updatedData, token) => {
  const response = await axiosInstance.put(
    `/users/changeMyPassword`,
    updatedData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const forgotPassword = async (Data) => {
  const response = await axiosInstance.post(`/auth/forgotPassword`, Data);
  return response.data;
};
export const verifyResetCode = async (Data) => {
  const response = await axiosInstance.post(`/auth/verifyResetCode`, Data);
  return response.data;
};
export const resetPassword = async (Data) => {
  const response = await axiosInstance.put(`/auth/resetPassword`, Data);
  return response.data;
};
