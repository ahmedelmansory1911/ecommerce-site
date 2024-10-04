import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "./../../../hooks/useAuthContext";
import { updateProfile } from "../../../api/profileApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../../hooks/useNotifaction";
export default function EditAccountPage() {
  const navigate = useNavigate();
  const profiles = useSelector((state) => state);
  console.log(profiles);
  const { user } = useAuthContext();
  console.log(user.data);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  useEffect(() => {
    if (user?.data?.name) {
      const [firstName, lastName] = user.data.name.split(" ");
      setFormData((prevState) => ({
        ...prevState,
        firstName: firstName || "",
        lastName: lastName || "",
        email: user.data.email || "",
        telephone: user.data.phone || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get token from local storage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const token = storedUser?.token;

      if (!token) {
        throw new Error("User is not authenticated");
      }

      // Prepare updated data
      const { firstName, lastName, email, telephone } = formData;
      const name = `${firstName} ${lastName}`;

      let updatedData;
      if (user.data.email === email) {
        // If email hasn't changed, exclude it from the request
        updatedData = { name, phone: telephone };
      } else {
        // Include the email if it has changed
        updatedData = { name, email, phone: telephone };
      }

      // Call the API to update the profile
      const response = await updateProfile(updatedData, token);
      notify("تم تحديث حسابك بنجاح !", "success");

      console.log("Profile updated successfully:", response);

      // Update user data in local storage
      const updatedUser = {
        ...storedUser,
        data: {
          ...storedUser.data,
          ...updatedData,
        },
      };
      console.log(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Wait for 1.5 seconds and then reload the page
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    } catch (error) {
      console.error("Failed to update profile:", error);
      notify("فشل تحديث الحساب. حاول مرة أخرى.", "error");
    }
  };

  return (
    <div>
      <div className="bg-white rounded-md fade-in">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-gray-200 pb-2">
          My Account Information
        </h2>

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
                htmlFor="telephone"
                className="flex text-gray-500 text-sm mb-2 w-40"
              >
                Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none"
                placeholder="Telephone"
              />
            </div>
          </div>

          <div className="ml-10">
            <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
              <Link to={"/account/my-account"}>
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
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
