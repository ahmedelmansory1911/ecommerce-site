/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {
  useState,
  useEffect,
  memo,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from "react";
import { debounce, values } from 'lodash'; // Ensure lodash is imported correctly
import { createProduct, fetchProduct } from "../api/productApi"
import {
  createBrowserRouter,
  createRoutesFromElements,
  json,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Sidebar from "./Sidebar";
import RemoveButton from "./buttons/RemoveButton";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import { CiLogin, CiLogout } from "react-icons/ci";
import { TiContacts, TiShoppingCart } from "react-icons/ti";
import "../utils/Data";
import {
  FaArrowAltCircleUp,
  FaSearch,
  FaRegStar,
  FaHome,
} from "react-icons/fa";
import { RiAccountBoxFill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { TbReplace } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { clearWishlist } from "../features/wishlist/wishlistSlice";
import { clearCart } from "../features/cart/cartSlice";
import "../i18n";
import { setLanguage } from "../features/language/languageSlice";
import { useTranslation } from "react-i18next";
import CategorySinglePage from "../pages/category/CategorySinglePage";
import { products } from "../utils/Data";
import ProductCard from "./products/ProductCard";
import CategoryCard from "../pages/category/CategoryDetails";
import Categories from "../pages/category/Categories";
import ProductDetails from "./products/ProductCardWithDetails";
import ProductsCompare from "../pages/product/ProductsCompare";
function Navbar() {
  ///////////////////////////////////////////////////////////////////////
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await fetchProduct(searchTerm);
      console.log('that is allproducts', allProducts)
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
      console.log('Filtered products:', filteredProducts);
    };

    loadProducts();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  ////////////////////////////////////////////////////////////////////////////////
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishList = useSelector((state) => state.wishlist.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const categories = useSelector((state) => state.categories.categories);
  const { logout, isLoading, error } = useLogout();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: "English",
    flag: "/images/header/united-kingdom.webp",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.pageYOffset > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const handleMenuClick = useCallback((menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }, []);
  const toggleCartDropdown = useCallback(() => {
    setIsCartOpen((prev) => !prev);
  }, []);
  const handleCurrencyChange = useCallback((currency) => {
    setSelectedCurrency(currency);
    setOpenMenu(null); // Close the dropdown after selecting
  }, []);
  const handleLanguageChange = useCallback((language) => {
    setSelectedLanguage(language);
    setOpenMenu(null); // Close the dropdown after selecting
  }, []);
  const handleLogout = () => {
    dispatch(clearWishlist());
    dispatch(clearCart());
    logout();
  };
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch removeFromCart action
  };
  const { t, i18n } = useTranslation();
  const lang = useSelector((state) => state.language.value);
  useEffect(() => {
    if (lang) {
      dispatch(setLanguage(lang));
      console.log(`current language: ${lang}`);
    }
  }, [lang, dispatch]);

  return (
    <>
      <nav className="w-full bg-black text-white p-2 fade-in z-50">
        <MaxWidthWrapper className="max-w-screen-xl">
          <div className="flex justify-between items-center">
            <div className="text-sm font-amiri">
              <p>اهلاَ و سهلاَ بكم في متجر سهم</p>
            </div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                {user ? (
                  <Dropdown
                    label={t("My Account")}
                    icon={<IoIosArrowDown />}
                    openMenu={openMenu}
                    menuName="myAccount"
                    handleMenuClick={handleMenuClick}
                  >
                    <DropdownItemAccount
                      icon={<RiAccountBoxFill />}
                      label="My Account"
                      route={"/account/my-account"}
                    />
                    <DropdownItemAccount
                      icon={<GiReturnArrow />}
                      label="Order History"
                      route={"/account/order-history"}
                    />{" "}
                    <DropdownItemAccount
                      icon={<GrTransaction />}
                      label="Transactions"
                      route={"/account/transactions"}
                    />{" "}
                    <DropdownItemAccount
                      icon={<CiLogout />}
                      label="Logout"
                      route={"/account/login"}
                      onClick={handleLogout}
                    />
                  </Dropdown>
                ) : (
                  <Dropdown
                    label={t("My Account")}
                    icon={<IoIosArrowDown />}
                    openMenu={openMenu}
                    menuName="myAccount"
                    handleMenuClick={handleMenuClick}
                  >
                    <DropdownItemAccount
                      icon={<TiContacts />}
                      label="تسجيل"
                      route={"/account/register"}
                    />
                    <DropdownItemAccount
                      icon={<CiLogin />}
                      label="تسجيل الدخول"
                      route={"/account/login"}
                    />
                  </Dropdown>
                )}

                <Dropdown
                  currency={selectedCurrency}
                  label={t("Currency")}
                  icon={<IoIosArrowDown />}
                  openMenu={openMenu}
                  menuName="currency"
                  handleMenuClick={handleMenuClick}
                >
                  <DropdownItem
                    label="$ US Dollar"
                    onClick={() => handleCurrencyChange("$")}
                  />
                  <DropdownItem
                    label="ريال سعودي"
                    onClick={() => handleCurrencyChange("ريال سعودي")}
                  />
                  <DropdownItem
                    label="ج.م جنيه مصري"
                    onClick={() => handleCurrencyChange("ج.م")}
                  />
                  <DropdownItem
                    label="درهم اماراتي"
                    onClick={() => handleCurrencyChange("درهم اماراتي")}
                  />
                </Dropdown>
                <Dropdown
                  lang={selectedLanguage.flag}
                  label={t("Language")}
                  icon={<IoIosArrowDown />}
                  openMenu={openMenu}
                  menuName="language"
                  handleMenuClick={handleMenuClick}
                >
                  <DropdownItem
                    label="English"
                    icon={
                      <img
                        src="/images/header/united-kingdom.webp"
                        alt="English"
                        className="w-5 h-5"
                      />
                    }
                    onClick={() => {
                      // changeLanguage("en");
                      handleLanguageChange({
                        label: "English",
                        flag: "/images/header/united-kingdom.webp",
                      });
                    }}
                  />
                  <DropdownItem
                    label="Arabic"
                    icon={
                      <img
                        src="/images/header/saudi-arabia.webp"
                        alt="Arabic"
                        className="w-5 h-5"
                      />
                    }
                    onClick={() => {
                      // changeLanguage("ar");
                      handleLanguageChange({
                        label: "Arabic",
                        flag: "/images/header/saudi-arabia.webp",
                      });
                    }}
                  />
                </Dropdown>
              </ul>
            </div>
            <IoIosMenu
              className="md:hidden text-2xl cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </MaxWidthWrapper>
        {showScrollButton && <ScrollButton scrollToTop={scrollToTop} />}
      </nav>
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MaxWidthWrapper className="max-w-screen-xl">
        <header className="flex justify-between items-center py-5 px-4 fade-in">
          <Link to="/">
            <div>
              <img
                loading="lazy"
                src="https://sahmksa.com/image/catalog/bnr/loogo2.jpg"
                alt="Logo"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-4 w-full max-w-xl">
            <li className="flex flex-row">

              <div className="relative pr-2">
                <button
                  className="py-2 px-4 flex items-center border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => handleMenuClick("category")}
                >
                  Category{""}
                  <IoIosArrowDown
                    className={`ml-2 transition-transform ${openMenu === "category" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openMenu === "category" && (
                  <ul
                    className={`absolute left-0 mt-2 w-48 z-50 bg-white text-black border rounded shadow-md font-amiri ${categories?.data?.length > 5 ? "h-48 overflow-y-auto" : ""
                      }`}
                  >
                    {categories?.data?.length > 0 ? (
                      categories.data.map((category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:border-primary hover:border-l-2"
                        >
                          <Link to={`category/${category.slug}`}>
                            {" "}
                            {category.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">
                        No categories available
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div className="flex flex-grow  flex-col mz-0">
                <div className="flex flex-row w-[600px] ">

                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />

                  <button type="submit" className="py-2 px-4 bg-primary text-white rounded-r-lg flex items-center justify-center">
                    <FaSearch />

                  </button>
                </div>
                {/* Display filtered products */}
                {searchTerm && products.length > 0 && (
                  <div className="flex flex-col bg-white  mt-[1rem] w-[600px] rounded-xl z-999 max-h-[900px] overflow-y-scroll shadow-md">

                    <ul className="w-full flex flex-wrap ">

                      {products.map(product => (


                        <li className=" pr-3  w-1/2 pt-2 shadow-md " key={product.id}>
                          <div className="flex flex-row">

                            <div>
                              <img src={product.images[0]} alt style={{ width: '100px', height: '100px' }} />
                            </div>
                            <div className="flex flex-col">
                              {/* title */}
                              <div className="">

                                <span className="font-bold text-sm	">

                                  :{product.title}
                                </span>

                                <p className="relative pl-3 overflow-hidden text-ellipsis whitespace-nowrap w-48 font-normal text-xs">:{product.description}</p>
                              </div>
                              {/* price */}
                              <div className="top-9 relative">

                                <span className="font-medium text-xs relative flex  justify-start">{product.price}</span>
                              </div>
                            </div>
                          </div>

                        </li>


                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </div>

          <div className="flex justify-around items-center gap-7 relative">
            <Link to={"/comparison"}>
              {" "}
              <div className="relative group">
                <TbReplace className="text-3xl cursor-pointer hover:text-primary" />
                <span className="absolute left-1/2 -bottom-12 transform -translate-x-1/2 -translate-y-6 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Compare
                </span>
              </div>
            </Link>
            <Link
              to={`/account/${user ? "wish-list" : "login"}`}
              className="relative group"
            >
              <FaRegStar className="text-3xl cursor-pointer hover:text-primary" />
              <span className="absolute left-1/2 -bottom-12 transform w-16 -translate-x-1/2 -translate-y-6 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Wish List
              </span>
              {wishList.length > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {wishList.length}
                </span>
              )}
            </Link>
            <div className="relative text-3xl z-20">
              <TiShoppingCart
                onClick={toggleCartDropdown}
                className="cursor-pointer hover:text-primary"
              />
              {cartItems.length > 0 ? (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  0
                </span>
              )}
            </div>
            {isCartOpen && (
              <div
                className={`absolute top-7 right-0 mt-2 w-96 z-20 fade-in bg-white text-black border rounded-lg shadow-xl transition-all duration-300 transform ${isCartOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Shopping Cart
                    </h3>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-gray-500 hover:text-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Cart Items */}
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    {cartItems.length === 0 ? (
                      <p className="text-center text-gray-500">
                        Your cart is empty
                      </p>
                    ) : (
                      cartItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt="Product Image"
                              className="w-14 h-14 rounded-lg object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium text-gray-700">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {item.price}
                              </p>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-700">x 1</p>
                          </div>
                          <button
                            className="text-red-500 hover:text-red-700 transition-colors"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            ✕
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Total Price */}
                  <div className="flex justify-between items-center border-t pt-4 mt-4">
                    <span className="font-semibold text-gray-800">Total:</span>
                    <span className="font-semibold text-gray-800">
                      {cartItems.totalPrice}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-6 space-x-4">
                    <Link
                      to="/shopping-cart"
                      className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      View Cart
                    </Link>

                    <button className="flex-1 py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </MaxWidthWrapper>
    </>
  );
}

// eslint-disable-next-line react/display-name
const ScrollButton = memo(({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-primary text-white p-2 rounded-full shadow-lg z-999"
      aria-label="Scroll to Top"
    >
      <FaArrowAltCircleUp className="text-2xl" />
    </button>
  );
});

// eslint-disable-next-line react/display-name
const Dropdown = memo(
  ({
    label,
    icon,
    openMenu,
    menuName,
    handleMenuClick,
    children,
    currency,
    lang,
  }) => (
    <li className="relative group">
      <button
        className="py-2 px-4 flex gap-1 items-center hover:text-primary"
        onClick={() => handleMenuClick(menuName)}
        aria-expanded={openMenu === menuName}
      >
        {currency && <p className="text-sm font-amiri">{currency}</p>}
        {lang && <img src={lang} alt={label} className="w-5 h-5 ml-1" />}
        {label} {icon}
      </button>
      <ul
        className={`absolute left-0 mt-2 w-36 z-40 bg-white text-black border rounded shadow-md transition-opacity duration-300 text-sm font-amiri ${openMenu === menuName ? "opacity-100" : "opacity-0 hidden"
          }`}
        aria-hidden={openMenu !== menuName}
      >
        {children}
      </ul>
    </li>
  )
);

// eslint-disable-next-line react/display-name
const DropdownItem = memo(({ icon, label, onClick }) => (
  <li
    onClick={onClick}
    className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-1 hover:border-primary hover:border-l-2"
  >
    {icon} {label}
  </li>
));
// eslint-disable-next-line react/display-name
const DropdownItemAccount = memo(({ icon, label, route, onClick }) => (
  <Link to={route} onClick={onClick}>
    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-1 hover:border-primary hover:border-l-2">
      {icon}
      {label}
    </li>
  </Link>
));

export default memo(Navbar);
