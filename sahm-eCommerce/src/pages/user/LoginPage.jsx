import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainButton from "../../components/buttons/MainButtons";
import { useLogin } from "../../hooks/useLogin"; // Adjust the path to where your useLogin hook is located
import notify from "../../hooks/useNotifaction";

export default function LoginPage() {
  const { login, isLoading, error } = useLogin(); // Destructure login, isLoading, and error from the useLogin hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    if (email === "" || password === "") {
      notify("من فضلك ادخل الايميل وكلمة المرور", "error");
      return;
    }
    try {
      await login(email, password);
    } catch (err) {
      notify(error, "error");
    }
  };

  return (
    <div className="flex gap-3 md:flex-row flex-col fade-in">
      <div className="bg-white border-2 border-gray-200 rounded-md p-4 md:w-1/2 flex justify-between flex-col">
        <div>
          <h2 className="text-lg font-medium mb-4 border-b-2 border-gray-200">
            New Customer
          </h2>
          <p className="break-words py-2 text-gray-600">Register Account</p>
          <p className="break-words py-2 text-gray-600">
            By creating an account you will be able to shop faster, be up to
            date on an order&apos;s status, and keep track of the orders you
            have previously made.
          </p>
          {/* Form fields for registration */}
        </div>
        <div>
          <Link to={"/account/register"}>
            <MainButton>Continue</MainButton>
          </Link>
        </div>
      </div>
      <div className="bg-white border-2 border-gray-200 rounded-md p-4 flex-1">
        <h2 className="text-lg font-medium mb-4">Returning Customer</h2>
        <p className="font-semibold text-gray-600">I am a returning customer</p>
        {/* Form fields for login */}
        <form className="space-y-4 mt-3">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              required
            />
          </div>
          <MainButton type="submit" disabled={isLoading} onClick={handleSignIn}>
            {isLoading ? "Logging in..." : "Login"}
          </MainButton>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <Link
            to="/account/forgot-password"
            className="block text-blue-500 hover:text-blue-700 text-center"
          >
            Forgotten Password
          </Link>
        </form>
      </div>
    </div>
  );
}
