import { FaHeart, FaEye } from "react-icons/fa";

export const ProductCard = ({
  product,
  handleAddToWishlist,
  handleAddToCart,
}) => {
  return (
    <div
      className={`relative block cursor-pointer md:w-96 md:h-64 h-48 w-[300px] overflow-hidden rounded-lg shadow-lg border-gray-200 border-2 bg-white group transform transition-transform fade-in`}
    >
      <img
        loading="lazy"
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <button
          className="text-white text-2xl hover:text-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={() => handleAddToWishlist(product._id)} // Added accessibility label
        >
          <FaHeart />
        </button>
        <button
          className="text-white text-2xl hover:text-blue-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          aria-label={`View details of ${product.name}`} // Added accessibility label
        >
          <FaEye />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4 transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
        <h2 className="text-lg font-semibold text-white">{product.name}</h2>
        <p className="text-gray-300">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
