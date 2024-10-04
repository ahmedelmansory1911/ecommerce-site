import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
export default function Heading({
  title,
  leftArrow,
  rightArrow,
  className,
  btns = [],
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full relative h-16 border-b-2 border-gray-200 px-2">
      <div className="before:content-[''] before:block before:absolute before:bg-primary before:bottom-0 before:w-16 before:h-0.5"></div>
      <div className="flex justify-between items-center h-full">
        <div>
          <h1 className="text-2xl font-mono">{title}</h1>
        </div>
        <div
          className={`flex gap-2 justify-between items-center h-full ${className} flex-row`}
        >
          {" "}
          {btns.length > 0 && (
            <div className="relative h-full flex items-center">
              <button
                className="bg-gray-200 p-2 rounded-md md:hidden"
                onClick={toggleDropdown}
              >
                {isDropdownOpen ? <RxDropdownMenu /> : <IoIosMenu />}
              </button>
              {isDropdownOpen && (
                <div className="absolute top-10 right-1 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
                  {btns.map((btn, index) => (
                    <div
                      className="flex flex-row h-full border-b last:border-b-0"
                      key={index}
                    >
                      <button className="w-full px-4 py-2 text-left relative group">
                        {btn.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <div className="btns  gap-4 h-full  mx-4 hidden md:flex">
            {btns.map((btn, index) => (
              <div className="flex flex-row h-full " key={index}>
                <button className="relative group">
                  {btn.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            ))}
          </div>
          <div className="arrows flex gap-3">
            {" "}
            <div
              className="cursor-pointer bg-primary text-white h-7 w-7 flex justify-center items-center rounded-s-full"
              onClick={leftArrow}
            >
              <IoIosArrowBack />
            </div>
            <div
              className="cursor-pointer bg-primary text-white h-7 w-7 flex justify-center items-center rounded-e-full"
              onClick={rightArrow}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
