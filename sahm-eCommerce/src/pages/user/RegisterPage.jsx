import React, { useState } from "react";
import { useSignup } from "./../../hooks/useSignup";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    agree: false,
  });

  const { signup, isLoading, error } = useSignup();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user has agreed to the privacy policy and subscribed
    if (!formData.agree || !formData.newsletter) {
      alert("You must agree to the privacy policy and subscribe to continue.");
      return;
    }

    // Destructure form data
    const { firstName, lastName, email, password, confirmPassword, phone } =
      formData;

    // Concatenate first and last name to create the full name
    const name = `${firstName} ${lastName}`;

    // Call the signup function from the hook
    signup(email, password, name, confirmPassword, phone);
  };

  return (
    <div className="bg-white rounded-md fade-in">
      <h2 className="text-lg font-medium mb-4 border-b-2 border-gray-200 pb-2">
        Register Account
      </h2>
      <p className="mb-4 text-gray-500">
        If you already have an account with us, please login at the login page.
      </p>
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg mb-4 border-b-2 border-gray-200 pb-2">
          Your Personal Details
        </h3>
        <div className="ml-10">
          <div className="mb-4 flex items-center">
            <label
              htmlFor="firstName"
              className="text-gray-500 text-sm mb-2 flex w-40"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="lastName"
              className="flex text-gray-500 text-sm mb-2 w-40"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="email"
              className="flex text-gray-500 text-sm mb-2 w-40"
            >
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
              placeholder="E-Mail"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="phone"
              className="flex text-gray-500 text-sm mb-2 w-40"
            >
              Telephone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
              placeholder="Telephone"
            />
          </div>
        </div>
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
        <h3 className="text-lg mb-4 border-b-2 border-gray-200 pb-2">
          Newsletter
        </h3>
        <div className="ml-10">
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="newsletter">Subscribe</label>
            </div>
          </div>
          <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleCheckboxChange}
                required
                className="mr-2"
              />
              <label htmlFor="agree">
                I have read and agree to the{" "}
                <span className="font-bold">Privacy Policy</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-hover text-white py-2 px-4 rounded focus:outline-none mt-3"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Continue"}
            </button>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
