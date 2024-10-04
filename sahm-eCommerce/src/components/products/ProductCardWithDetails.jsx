import { FaHeart, FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoGitCompareSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
export default function ProductDetails({
  product,
  handleAddToWishlist,
  handleAddToCart,
  handleAddToCompare,
}) {
  return (
    <div className="flex flex-col justify-center gap-8 items-center text-center group cursor-pointer">
      <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          to={`/product/${product.slug}`}
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        >
          <img
            loading="lazy"
            className="object-cover"
            src={product.imageCover}
            alt="product image"
          />
          {product.priceAfterDiscount && (
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              {product.priceAfterDiscount}% save
            </span>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <button
              className="text-white text-2xl hover:text-orange-500 transition-colors duration-300"
              onClick={() => {
                handleAddToCompare(product);
              }}
            >
              <IoGitCompareSharp />
            </button>
            <button
              className="text-white text-2xl hover:text-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={() => handleAddToWishlist(product)}
            >
              <FaHeart />
            </button>
            <button
              className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label={`View details of ${product.name}`}
            >
              <FaEye />
            </button>
          </div>
        </Link>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {product.title}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {product.price} $
              </span>
              {product.priceAfterDiscount && (
                <span className="text-sm text-slate-900 line-through ml-2">
                  {product.priceAfterDiscount}
                </span>
              )}
            </p>
            <div className="flex items-center">
              <IoStar className=" h-5 w-5 text-yellow-300" />
              {product.ratingsAverage && (
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  {product.ratingsAverage}
                </span>
              )}
            </div>
          </div>
          <Link to={`/product/${product.slug}`}>
            {" "}
            <button
              className="flex items-center justify-center rounded-md w-full bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800"
              onClick={() => handleAddToCart(product)}
            >
              <MdOutlineArrowDropDownCircle className="text-xl m-2" />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
