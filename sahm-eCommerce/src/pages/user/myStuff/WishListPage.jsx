import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../../features/wishlist/wishlistSlice";
import { addToCart } from "../../../features/cart/cartSlice";
import axios from "axios";
import axiosInstance from "../../../api";
const WishList = () => {
  const [wishlist, setWishList] = useState([]);
  const [refetching, setRefetching] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const usertoken = window.localStorage.getItem("user");
  const parseing = JSON.parse(usertoken);
  // get token 
  const token = parseing.token

// remove product from wishlist
  const handleRemoveFromWishlist = async (productId) => {
    try {
      const response = await await axiosInstance.delete(`wishlist/${productId}`, {
        headers: {
          Authorization: "Bearer " + token,
        }
      }).then(()=> setRefetching((prev) => !prev))
      if (response.status === 201) {
        console.log("removed from wishlist")
      }
    } catch(error) {
      console.log(error)
    }
  };
// Get wishlist 
useEffect(() => {
    const fetchWishList = async () => {
    try {
      const response = await axiosInstance.get(`/wishlist`, {
        headers: {
          Authorization: "Bearer " + token,
        }
      })
      setWishList(response.data.data)

    } catch(error) {
      console.log(error)
    }
  };
  fetchWishList();
}, [refetching])


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">
        My Wish List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlist.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-500">
            <h2 className="text-xl font-semibold">Your Wish List is Empty</h2>
            <p className="mt-2">
              Add items to your wish list to see them here.
            </p>
          </div>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-t-lg"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    className="bg-white p-2 rounded-full shadow hover:shadow-md text-red-500 hover:bg-red-100 transition-colors duration-200"
                    aria-label="Remove from Wish List"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg mb-4">{item.price}$</p>
                <div className="flex justify-between items-center">
                  <a
                    href={item.link}
                    className="text-blue-600 hover:underline hover:text-blue-800 transition-colors duration-200"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="flex items-center space-x-2 bg-primary text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    aria-label="Add to Cart"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
