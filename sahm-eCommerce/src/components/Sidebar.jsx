import { useState, useCallback, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "English",
    flag: "images/header/united-kingdom.webp",
  });

  // Disable scrolling when the sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when the component is unmounted or sidebar state changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleCurrencyChange = useCallback((currency) => {
    setSelectedCurrency(currency);
    setActiveMenu(null); // Close the dropdown after selecting
  }, []);

  const handleLanguageChange = useCallback((language) => {
    setSelectedLanguage(language);
    setActiveMenu(null); // Close the dropdown after selecting
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full z-50 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 relative">
        <button
          className="absolute top-4 left-4 text-2xl text-white"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <ul className="space-y-4 mt-10">
          <SidebarMenuItem
            title="My Account"
            onClick={() => handleMenuClick("account")}
            activeMenu={activeMenu}
            menuItems={[
              {
                label: "تسجيل",
                icon: <TiContacts />,
                route: "/account/register",
              },
              {
                label: "تسجيل الدخول",
                icon: <CiLogin />,
                route: "/account/login",
              },
            ]}
          />
          <SidebarMenuItem
            title={`Currency (${selectedCurrency})`}
            onClick={() => handleMenuClick("currency")}
            activeMenu={activeMenu}
            menuItems={[
              {
                label: "$ US Dollar",
                onClick: () => handleCurrencyChange("$"),
              },
              {
                label: "ريال سعودي",
                onClick: () => handleCurrencyChange("ريال سعودي"),
              },
              {
                label: "ج.م جنيه مصري",
                onClick: () => handleCurrencyChange("ج.م"),
              },
              {
                label: "درهم اماراتي",
                onClick: () => handleCurrencyChange("درهم اماراتي"),
              },
            ]}
          />
          <SidebarMenuItem
            title={`Language (${selectedLanguage.label})`}
            onClick={() => handleMenuClick("language")}
            activeMenu={activeMenu}
            menuItems={[
              {
                label: "English",
                icon: (
                  <img
                    src="images/header/united-kingdom.webp"
                    alt="English"
                    className="w-5 h-5"
                  />
                ),
                onClick: () =>
                  handleLanguageChange({
                    label: "English",
                    flag: "images/header/united-kingdom.webp",
                  }),
              },
              {
                label: "Arabic",
                icon: (
                  <img
                    src="images/header/saudi-arabia.webp"
                    alt="Arabic"
                    className="w-5 h-5"
                  />
                ),
                onClick: () =>
                  handleLanguageChange({
                    label: "Arabic",
                    flag: "images/header/saudi-arabia.webp",
                  }),
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const SidebarMenuItem = React.memo(
  ({ title, onClick, activeMenu, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () => {
      setIsOpen(!isOpen);
      onClick();
    };

    return (
      <li>
        <button
          className="w-full py-2 px-4 flex justify-between items-center bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
          onClick={handleItemClick}
        >
          {title}
          <IoIosArrowDown
            className={`transition-transform ${
              isOpen || activeMenu === title ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul className="bg-gray-600 text-white border rounded mt-2">
            {menuItems.map((item, index) => (
              <>
                {item.route ? (
                  <Link
                    to={item.route}
                    onClick={item.onClick}
                    className="flex items-center gap-2"
                    key={index}
                  >
                    <li className="px-4 py-2 hover:bg-gray-500 cursor-pointer flex items-center gap-2">
                      {item.icon}
                      {item.label}
                    </li>
                  </Link>
                ) : (
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </div>
                )}
              </>
            ))}
          </ul>
        )}
      </li>
    );
  }
);

export default Sidebar;
