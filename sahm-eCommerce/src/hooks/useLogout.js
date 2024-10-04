import { useState } from "react";
import { useAuthContext } from "./useAuthContext"; // Adjust the path if necessary
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { clearWishlist } from "../features/wishlist/wishlistSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const { dispatch: authDispatch } = useAuthContext(); // Use correct dispatch from auth context
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Optionally, call your API to handle logout here if needed

      // Clear Redux store
      dispatch(clearCart());
      dispatch(clearWishlist());

      // Remove user from local storage
      localStorage.removeItem("user");

      // Update auth context
      authDispatch({ type: "LOGOUT" });

      // Redirect to login page
      navigate("/account/login");
    } catch (err) {
      setError("Logout failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading, error };
};
