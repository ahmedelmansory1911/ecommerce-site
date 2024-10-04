import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext"; // Adjust the path to where your useAuthContext hook is located
import { useNavigate } from "react-router-dom";
import notify from "./useNotifaction";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Initialize with false
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/auth/login`,
        { email, password }
      );
      const json = response.data;

      console.log("User data retrieved:", json); // Log the user data

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // check the user's role
      if (
        json.data &&
        (json.data.role === "admin" ||
          json.data.role === "manager" ||
          json.data.role === "user")
      ) {
        console.log("User has valid role:", json.data.role); // Log the role

        // update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // update loading state
        setIsLoading(false);
        notify("تم تسجيل الدخول بنجاح", "success");
        navigate("/account/my-account");
      } else {
        // remove the user from local storage
        localStorage.removeItem("user");
        notify("ليس لديك صلاحية الدخول", "error");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("while login", error);
      setError(
        error.response ? error.response.data.errors[0].msg : "Network error"
      );
    }
  };

  return { login, isLoading, error };
};
