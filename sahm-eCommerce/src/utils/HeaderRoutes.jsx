import { Link } from "react-router-dom";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { FaHome } from "react-icons/fa";

export default function HeaderRoutes({ page, route }) {
  const formattedRoute = route.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <div className="flex items-center px-3 py-2 mb-3 w-full bg-gray-100 text-black gap-5">
        <Link to={"/"}>
          <FaHome />
        </Link>
        <span className="text-gray-500 text-2xl ">{">"}</span>
        <Link to={`/account/my-account`}>
          <p className="hover:text-primary cursor-pointer">{page}</p>
        </Link>{" "}
        <span className="text-gray-500 text-2xl ">{">"}</span>
        <Link to={`/account/${formattedRoute}`}>
          {" "}
          <p className="hover:text-primary cursor-pointer">{route}</p>
        </Link>
      </div>
    </>
  );
}
