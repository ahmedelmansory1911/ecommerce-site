import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordThunk } from "../../../features/profile/profileThunks"; // Adjust the import path
import notify from "../../../hooks/useNotifaction";

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.profiles); // Adjust the state path if needed
  console.log(status);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await dispatch(
        updatePasswordThunk({
          updatedData: {
            password: formData.password, // If you need the old password field, adjust accordingly
          },
        })
      ).unwrap();
      notify("Password updated successfully!", "success");

      navigate("/account/my-account"); // Navigate back to the account page after success
    } catch (err) {
      console.error("Failed to update password:", err);
      notify("Failed to update password", "error");
    }
  };

  return (
    <div className="bg-white rounded-md fade-in">
      <h2 className="text-lg font-medium mb-4 border-b-2 border-gray-200 pb-2">
        Change Password
      </h2>

      <form onSubmit={handleSubmit}>
        <h3 className="text-lg mb-4 border-b-2 border-gray-200 pb-2">
          Your Password
        </h3>

        <div className="ml-10">
          <div className="mb-4 flex items-center">
            <label
              htmlFor="password"
              className="flex text-gray-500 text-sm mb-2 w-40"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="confirmPassword"
              className="flex text-gray-500 text-sm mb-2 w-40"
            >
              Password Confirm <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
              placeholder="Password Confirm"
              required
            />
          </div>
        </div>

        <div className="ml-10">
          <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
            <Link to={"/account/my-account"}>
              <button
                type="button"
                className="bg-primary hover:bg-hover text-white py-2 px-4 rounded focus:outline-none mt-3"
              >
                Back
              </button>
            </Link>

            <button
              type="submit"
              className="bg-primary hover:bg-hover text-white py-2 px-4 rounded focus:outline-none mt-3"
            >
              Continue
            </button>
          </div>
        </div>
      </form>

      {status === "loading" && <p>Updating...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
