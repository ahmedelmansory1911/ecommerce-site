import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import notify from "./useNotifaction";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const signup = async (email, password, name, passwordConfirm, phone) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/auth/signup`,
        { name, email, password, passwordConfirm, phone }
      );
      const json = response.data;

      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // update loading state
      setIsLoading(false);
      notify("تم التسجيل بنجاح", "success");
    } catch (error) {
      console.log("error RESPONSE", error.response.data.errors[0].msg);
      setIsLoading(false);
      setError(
        error.response ? error.response.data.errors[0].msg : "Network error"
      );
    }
  };

  return { signup, isLoading, error };
};
