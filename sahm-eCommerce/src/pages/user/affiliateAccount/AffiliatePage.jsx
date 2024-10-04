import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    company: "",
    taxid: "",
    cpn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white  rounded-md fade-in ">
      <h2 className="text-2xl text-gray-800 font-medium mb-5 border-b-2 border-gray-200 pb-2">
        Your Affiliate Information
      </h2>

      <form onSubmit={handleSubmit}>
        <h3 className="text-lg  mb-4 border-b-2 border-gray-200 pb-2">
          My Affiliate Account
        </h3>
        <div className="ml-10">
          <div className="mb-4 flex items-center">
            <label
              htmlFor="Company"
              className=" text-gray-500 text-sm  mb-2 flex w-40"
            >
              Company
            </label>
            <input
              type="text"
              id="Company"
              name="Company"
              value={formData.company}
              onChange={handleChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight "
              placeholder="Company"
              required
            />
          </div>
          <div className="mb-4 flex items-center ">
            <label
              htmlFor="website"
              className="flex text-gray-500 text-sm  mb-2 w-40"
            >
              Web Site
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none "
              placeholder="website"
              required
            />
          </div>
        </div>
        <h3 className="text-lg  mb-4 border-b-2 border-gray-200 pb-2">
          Payment Information
        </h3>
        <div className="ml-10">
          <div className="mb-4 flex items-center">
            <label
              htmlFor="taxid"
              className="flex text-gray-500 text-sm  mb-2 w-40"
            >
              Tax Id
            </label>
            <input
              type="taxid"
              id="taxid"
              name="taxid"
              value={formData.taxid}
              onChange={handleChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none "
              placeholder=" Tax Id"
              required
            />
          </div>{" "}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="cpn"
              className="flex text-gray-500 text-sm  mb-2 w-40 "
            >
              Payment Method
            </label>
            <select
              id="payment-method"
              name="payment-method"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="cheque">Cheque</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="cpn"
              className="flex text-gray-500 text-sm  mb-2 w-40 "
            >
              Cheque Payee Name
            </label>
            <input
              type="password"
              id="cpn"
              name="cpn"
              value={formData.cpn}
              onChange={handleChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none "
              placeholder="Cheque Payee Name"
              required
            />
          </div>
        </div>{" "}
        <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
          <Link to={"/account/my-account"}>
            {" "}
            <button
              type="submit"
              className="bg-primary hover:bg-hover text-white  py-2 px-4 rounded focus:outline-none mt-3 "
            >
              Continue
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
