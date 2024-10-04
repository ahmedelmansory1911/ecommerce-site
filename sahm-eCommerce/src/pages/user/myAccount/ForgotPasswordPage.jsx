import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import notify from "./../../../hooks/useNotifaction";
import { forgotPassword } from "../../../api/profileApi"; // Update the path as per your project structure

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await forgotPassword({ email: formData.email });
      if (response.status === "Success") {
        notify(response.message, "success");
        navigate("/account/verify-rest-code");
      } else {
        notify(response.message, "error");
      }
      console.log("Password reset successfully:", response);
    } catch (error) {
      console.error("Failed to reset password:", error.response.data.message);
      notify(error.response.data.message, "error");
    }
  };

  return (
    <div className="bg-white rounded-md fade-in">
      <p className="break-words py-2 text-gray-600">
        Enter the e-mail address associated with your account. Click submit to
        have a password reset link e-mailed to you.
      </p>
      <form onSubmit={handleSubmit}>
        <p className="font-medium mb-4 border-b-2 text-gray-700 border-gray-200 pb-2">
          Your E-Mail Address
        </p>
        <div className="mb-4 flex items-center">
          <label
            htmlFor="email"
            className="flex text-gray-500 text-sm mb-2 w-40"
          >
            <span className="text-red-500 p-2">*</span> E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
            placeholder="E-Mail Address"
            required
          />
        </div>
        <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
          <Link to={"/account/verify-rest-code"}>
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
