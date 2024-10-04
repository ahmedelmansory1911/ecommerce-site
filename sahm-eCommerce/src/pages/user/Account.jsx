import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import HeaderRoutes from "../../utils/HeaderRoutes";
import { RiAccountBoxFill } from "react-icons/ri";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { CiLogout } from "react-icons/ci";

export default function Account() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Extract the part after "/account/"
  const routePart = currentPath.split("/account/")[1] || "";

  // Function to capitalize the first letter of each word
  const capitalizeWords = (str) =>
    str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Apply the function to the routePart
  const formattedRoutePart = capitalizeWords(routePart);
  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <HeaderRoutes page="Account" route={formattedRoutePart} />
      <section className="mb-3 flex flex-col-reverse md:flex-row ">
        <div className="flex-1 p-4 h-full">
          <Outlet />
        </div>
        <div>
          <AccountCard />
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

const AccountCard = () => {
  const { user } = useAuthContext();
  const { logout, isLoading, error } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-md p-5 m-4 hidden md:block">
      <div className={`border-gray-200 ${user ? "border-b-2" : ""} pb-2 mb-4 `}>
        <div className="flex items-center mb-4">
          <RiAccountBoxFill className="text-2xl" />
          <h2 className="text-lg font-medium ml-2">My Account</h2>
        </div>
        {user ? (
          <ul className="">
            <li className="py-2 px-5">
              <Link
                to="/account/my-account"
                className="text-gray-400 hover:text-hover"
              >
                My Account
              </Link>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to="/account/edit-account"
                className="text-gray-400 hover:text-hover"
              >
                Edit Account
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to="/account/change-password"
                className="text-gray-400 hover:text-hover"
              >
                Change Password
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to={"/account/address"}
                className="text-gray-400 hover:text-hover"
              >
                Address Book
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li className="py-2 px-5">
              <NavLink
                to="/account/login"
                className="text-gray-400 hover:text-hover"
              >
                Login
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to="/account/register"
                className="text-gray-400 hover:text-hover"
              >
                Register
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <NavLink
                to="/account/forgot-password"
                className="text-gray-400 hover:text-hover"
              >
                Forgotten Password
              </NavLink>
            </li>
            <li className="py-2 px-5">
              <a href="/" className="text-gray-400 hover:text-hover">
                My Account
              </a>
            </li>
          </ul>
        )}
      </div>
      {user && (
        <div className="hidden md:block">
          <div className="border-gray-200 border-b-2 pb-2 mb-4">
            <div className="flex items-center mb-4">
              <RiAccountBoxFill className="text-2xl" />
              <h2 className="text-lg font-medium ml-2">My Orders</h2>
            </div>
            <ul>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/order-history"
                  className="text-gray-400 hover:text-hover"
                >
                  Order History
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/download"
                  className="text-gray-400 hover:text-hover"
                >
                  Downloads
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to={"/account/return"}
                  className="text-gray-400 hover:text-hover"
                >
                  Returns
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/transactions"
                  className="text-gray-400 hover:text-hover"
                >
                  Transactions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="border-gray-200 border-b-2 pb-2 mb-4">
            <div className="flex items-center mb-4">
              <RiAccountBoxFill className="text-2xl" />
              <h2 className="text-lg font-medium ml-2">My Stuff</h2>
            </div>
            <ul>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/wish-list"
                  className="text-gray-400 hover:text-hover"
                >
                  Wish List
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/recurring-payments"
                  className="text-gray-400 hover:text-hover"
                >
                  Recurring Payments
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/rewards"
                  className="text-gray-400 hover:text-hover"
                >
                  Reward Points
                </NavLink>
              </li>
              <li className="py-2 px-5">
                <NavLink
                  to="/account/newsletter"
                  className="text-gray-400 hover:text-hover"
                >
                  Newsletter
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="flex items-center mt-2 cursor-pointer"
            onClick={handleLogout}
          >
            <CiLogout className="text-2xl" />
            <h2 className="text-lg font-medium ml-2">Logout</h2>
          </div>
        </div>
      )}
    </div>
  );
};
