import React, { useState } from "react";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import MainButton from "../../components/buttons/MainButtons";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  return (
    <MaxWidthWrapper className={"max-w-screen-xl"}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-3 text-gray-700 mb-8">
          Shopping Cart (1.00kg)
        </h2>
        <div className="overflow-x-auto sm:overflow-auto md:overflow-visible my-5 ">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Product Name</th>
                <th className="border px-4 py-2">Model</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Unit Price</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2 flex justify-center items-center">
                    <img
                      src={item.image}
                      alt="Product Image"
                      className="w-12 h-12 rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.model}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">{item.price} ريال سعودي</td>
                  <td className="border px-4 py-2">{item.total} ريال سعودي</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-2xl font-bold border-b-2 text-gray-700 border-gray-200 p-2  mb-8">
          What would you like to do next?
        </h2>
        <p className="text-gray-500 my-3 p-2">
          Choose if you have a discount code or reward points you want to use or
          would like to estimate your delivery cost.
        </p>
        <div className="p-2">
          <div className="w-full border-2 rounded-md  border-gray-400 mx-auto">
            <DropDown
              title={"Use Coupon Code"}
              isOpen={openDropdown === 0}
              onClick={() => handleDropdownClick(0)}
            >
              <div className="flex p-3 items-center gap-3 flex-col md:flex-row">
                <label className="" htmlFor="input-coupon">
                  Enter your coupon here
                </label>
                <div className="input-group flex items-center w-full">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Enter your coupon here"
                    id="input-coupon"
                    className="flex-1 p-2 border-2 border-gray-400 text-gray-500 focus:border-gray-400 rounded-md"
                  />
                  <MainButton>
                    <span className="">
                      <input
                        type="button"
                        value="Apply Coupon"
                        id="button-coupon"
                        data-loading-text="Loading..."
                        className=""
                      />
                    </span>
                  </MainButton>
                </div>
              </div>
            </DropDown>
            <DropDown
              title={"Estimate Shipping & Taxes"}
              isOpen={openDropdown === 1}
              onClick={() => handleDropdownClick(1)}
            >
              <p className="text-gray-500 my-3 p-2">
                Enter your destination to get a shipping estimate.
              </p>
              <div className="mb-4 flex items-center px-5">
                <label
                  htmlFor="country"
                  className="flex text-gray-500 text-sm mb-2 w-40"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Saudi Arabia
                  </option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              {/* Additional form fields for shipping */}
            </DropDown>
            <DropDown
              title={"Use Gift Certificate"}
              isOpen={openDropdown === 2}
              onClick={() => handleDropdownClick(2)}
            >
              <div className="flex p-3 items-center gap-3 flex-col md:flex-row">
                <label className="" htmlFor="input-coupon">
                  Enter your gift certificate code here
                </label>
                <div className="input-group flex items-center w-full">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Enter your gift certificate code here"
                    id="input-coupon"
                    className="flex-1 p-2 border-2 border-gray-400 text-gray-500 focus:border-gray-400 rounded-md"
                  />
                  <MainButton>
                    <span className="">
                      <input
                        type="button"
                        value="Apply Gift Coupon"
                        id="button-coupon"
                        data-loading-text="Loading..."
                        className=""
                      />
                    </span>
                  </MainButton>
                </div>
              </div>
            </DropDown>
          </div>
        </div>

        <div className="mt-4 p-4 border-2 border-gray-200 w-44 rounded-md">
          <p>
            <span className="font-bold">Total:</span>{" "}
            {cartItems.reduce((total, item) => total + item.rewardPoints, 0)}
          </p>
        </div>
        <div className="my-4 p-4 flex justify-between">
          <Link to="/">
            <MainButton>Continue Shopping</MainButton>
          </Link>
          <MainButton>Checkout</MainButton>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default ShoppingCart;

const DropDown = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="">
      <div
        className="border-b-2 border-gray-500 flex items-center cursor-pointer"
        onClick={onClick}
      >
        <h2 className="p-3 text-primary">{title}</h2>
        <IoIosArrowDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0px",
        }}
        className="transition-max-height duration-200 ease-in-out overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};
