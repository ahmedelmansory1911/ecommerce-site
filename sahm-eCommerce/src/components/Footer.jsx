import React, { useState } from "react";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaFacebook,
  FaPinterestSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const [email, setEmail] = useState(""); // Define the email state
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Submitted email:", email);
  };

  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className="w-full bg-primary flex items-center text-white">
        <MaxWidthWrapper className={"max-w-screen-xl"}>
          <div className="flex justify-between  flex-col md:flex-row items-center  p-4 max-lg:gap-7">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-manrope font-bold text-1xl leading-tight text-white mb-2 max-lg:text-center">
                Sign Up For Newsletter اشترك في نشرتنا الإخبارية واحصل على آخر
                عروض سهم!
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 items-center">
              <div className="flex items-center justify-between bg-gray-900 w-full max-w-md mx-auto lg:mr-0 rounded-full p-2.5 min-[470px]:p-1.5 pl-5 min-[470px]:pl-7 border border-gray-700 transition-all duration-300 hover:border-gray-400 focus-within:border-gray-400">
                <input
                  type="text"
                  className="bg-transparent text-base font-normal text-white placeholder:text-gray-500 focus-within:outline-0"
                  placeholder="Your email here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="py-3 px-7 hidden min-[470px]:block rounded-full bg-primary text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-violet-700 focus-within:bg-violet-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <button
                className="py-3 px-7 min-[470px]:hidden rounded-full bg-gray-900 text-base font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-0 hover:bg-violet-700 focus-within:bg-violet-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <footer className="w-full bg-gray-900">
        {" "}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:block">
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7 relative">
                Contact us{" "}
                <span className="absolute -bottom-1 left-0  h-0.5 w-10 bg-primary transition-all duration-300 "></span>
              </h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6 flex">
                  <a
                    href=""
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <FaLocationDot className="text-2xl mr-2" />
                    42 Dream House, Dreammy street, 7131 Dreamville, USA
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href=""
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    {" "}
                    <IoIosMail className="text-2xl mr-2" />
                    company@gmail.com
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href=""
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <FaPhoneAlt className="text-1xl mr-2" />
                    456-456-4512
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href=""
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <FaTelegramPlane className="text-1xl mr-2" />
                    Dream City, USA
                  </a>
                </li>{" "}
                <li className="mb-6">
                  <a
                    href=""
                    className="text-gray-400 hover:text-white flex items-center"
                  >
                    <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 text-white">
                      <a
                        href=""
                        className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href=""
                        className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                      >
                        <FaXTwitter />
                      </a>
                      <a
                        href=""
                        className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                      >
                        <IoIosMail />
                      </a>
                      <a
                        href=""
                        className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                      >
                        <FaPinterestSquare />
                      </a>
                    </div>
                  </a>
                </li>{" "}
              </ul>
            </div>
            {/* End Col */}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7 relative">
               {t('Extras')}
                <span className="absolute -bottom-1 left-0  h-0.5 w-10 bg-primary transition-all duration-300 "></span>
              </h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Brands
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Gift Certificates
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Affiliate
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Specials
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            {/* End Col */}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7 relative">
                {t('Information')}
                <span className="absolute -bottom-1 left-0  h-0.5 w-10 bg-primary transition-all duration-300 "></span>
              </h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Delivery Information
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-6">
                  <a href="" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            {/* End Col */}
            <div className="block">
              <h4 className="text-xl text-white font-bold mb-7 relative">
                My Account
                <span className="absolute -bottom-1 left-0  h-0.5 w-10 bg-primary transition-all duration-300 "></span>
              </h4>
              <ul className="text-lg transition-all duration-500">
                <li className="mb-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    My Account
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Order History
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Wish List
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-400 hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex gap-2  flex-col md:flex-row justify-center items-center mb-3">
              <h1 className="text-xl text-white font-bold mb-7 relative">
                Download Our App{" "}
              </h1>
              <div className="flex gap-2  ">
                <div>
                  <img
                    src="https://sahmksa.com/image/catalog/app2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://sahmksa.com/image/catalog/app1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://sahmksa.com/image/catalog/payment.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* End Grid */}
          <div className="py-7 border-t border-gray-700">
            <div className="flex items-center justify-center flex-col ">
              <a href="" className="flex justify-center">
                {/* Optional logo or image */}
              </a>
              <span className="text-gray-400 block">
                Powered By OpenCart2024 ©<a href=""></a> متجر سهم
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
            {[
              // Add an array to map over the blocks
              {
                title: "Contact us",
                content: (
                  <ul className="text-lg">
                    <li className="mb-6 flex">
                      <a
                        href=""
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <FaLocationDot className="text-2xl mr-2" />
                        42 Dream House, Dreammy street, 7131 Dreamville, USA
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <IoIosMail className="text-2xl mr-2" />
                        company@gmail.com
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <FaPhoneAlt className="text-1xl mr-2" />
                        456-456-4512
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <FaTelegramPlane className="text-1xl mr-2" />
                        Dream City, USA
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href=""
                        className="text-gray-400 hover:text-white flex items-center"
                      >
                        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0 text-white">
                          <a
                            href=""
                            className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                          >
                            <FaFacebook />
                          </a>
                          <a
                            href=""
                            className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                          >
                            <FaXTwitter />
                          </a>
                          <a
                            href=""
                            className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                          >
                            <IoIosMail />
                          </a>
                          <a
                            href=""
                            className="w-9 h-9 rounded-full border border-gray-700 flex justify-center items-center hover:border-primary"
                          >
                            <FaPinterestSquare />
                          </a>
                        </div>
                      </a>
                    </li>
                  </ul>
                ),
              },
              {
                title: "Extras",
                content: (
                  <ul className="text-lg">
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Brands
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Gift Certificates
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Affiliate
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Specials
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-gray-400 hover:text-white">
                        Site Map
                      </a>
                    </li>
                  </ul>
                ),
              },
              {
                title: "Information",
                content: (
                  <ul className="text-lg">
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Delivery Information
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="" className="text-gray-400 hover:text-white">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white">
                        Site Map
                      </a>
                    </li>
                  </ul>
                ),
              },
              {
                title: "My Account",
                content: (
                  <ul className="text-lg">
                    <li className="mb-6">
                      <a href="#" className="text-gray-400 hover:text-white">
                        My Account
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="#" className="text-gray-400 hover:text-white">
                        Order History
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="#" className="text-gray-400 hover:text-white">
                        Wish List
                      </a>
                    </li>
                    <li className="mb-6">
                      <a href="#" className="text-gray-400 hover:text-white">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-gray-400 hover:text-white">
                        Returns
                      </a>
                    </li>
                  </ul>
                ),
              },
            ].map((section, index) => (
              <div key={index} className="block">
                <h4
                  className="text-xl text-white font-bold mb-7 relative cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  {section.title}
                  <svg
                    className={`w-5 h-5 absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                    loading="lazy"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </h4>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ${
                    openDropdown === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>{" "}
          <div className="flex md:justify-between justify-center items-center mb-4 flex-col md:flex-row">
            <div className="flex gap-2  flex-col md:flex-row justify-center items-center mb-3">
              <h1 className="text-xl text-white font-bold mb-7 relative">
                Download Our App{" "}
              </h1>
              <div className="flex gap-2  ">
                <div>
                  <img
                    loading="lazy"
                    src="https://sahmksa.com/image/catalog/app2.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://sahmksa.com/image/catalog/app1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src="https://sahmksa.com/image/catalog/payment.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* End Grid */}
          <div className="py-4 border-t border-gray-700">
            <div className="flex items-center justify-center ">
              <span className="text-gray-400">
                Powered By OpenCart2024 ©<a href=""></a> متجر سهم
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
