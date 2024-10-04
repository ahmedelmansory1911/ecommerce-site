import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NewsletterPage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      {" "}
      <div className="bg-white  rounded-md fade-in ">
        <h2 className="text-lg font-medium mb-4 border-b-2 border-gray-200 pb-2">
          Newsletter Subscription
        </h2>
        <div className="mb-4">
          <div className="flex items-center ">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={formData.newsletter}
              onChange={(e) =>
                setFormData({ ...formData, newsletter: e.target.checked })
              }
              className="mr-2"
            />
            <label htmlFor="newsletter">Subscribe</label>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="flex items-center md:justify-between justify-center flex-col md:flex-row">
              <Link to={"/account/my-account"}>
                {" "}
                <button
                  type="submit"
                  className="bg-primary hover:bg-hover text-white  py-2 px-4 rounded focus:outline-none mt-3 "
                >
                  Back
                </button>
              </Link>

              <button
                type="submit"
                className="bg-primary hover:bg-hover text-white  py-2 px-4 rounded focus:outline-none mt-3 "
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
