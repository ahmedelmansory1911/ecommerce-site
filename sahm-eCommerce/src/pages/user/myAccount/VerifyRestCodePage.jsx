import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { verifyResetCode } from "../../../api/profileApi"; // Update the path as per your project structure
import notify from "../../../hooks/useNotifaction";

export default function VerifyRestCodePage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  const [formData, setFormData] = useState({
    resetCode: "", // Updated the state to match the correct name
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await verifyResetCode({ resetCode: formData.resetCode });

      notify(response.message, "success");
      if (response.status === "Success") {
        notify(response.message, "success");
      } else {
        notify(response.message, "error");
      }
      navigate("/account/rest-password");
      console.log("Password reset successfully:", response);
    } catch (error) {
      console.error(
        "Failed to reset password:",
        error.response?.data?.message || error.message
      );
      notify(error.response?.data?.message || "An error occurred", "error");
    }
  };

  return (
    <div className="bg-white rounded-md fade-in">
      <p className="break-words py-2 text-gray-600">
        Please enter the code that was sent to your email address
      </p>
      <form onSubmit={handleSubmit}>
        <p className="font-medium mb-4 border-b-2 text-gray-700 border-gray-200 pb-2">
          The Reset Code
        </p>
        <div className="mb-4 flex items-center">
          <label
            htmlFor="resetCode"
            className="flex text-gray-500 text-sm mb-2 w-40"
          >
            <span className="text-red-500 p-2">*</span> The Reset Code
          </label>
          <input
            type="text"
            id="resetCode"
            name="resetCode" // Updated to match the state
            value={formData.resetCode}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
            placeholder="The Reset Code"
            required
          />
        </div>
        <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
          <Link to={"/account/forgot-password"}>
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
      </form>
    </div>
  );
}
