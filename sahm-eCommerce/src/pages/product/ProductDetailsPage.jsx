import React, { useState, useRef } from "react";
import ReactImageMagnify from "@blacklab/react-image-magnify";
import HeaderRoutes from "../../utils/HeaderRoutes";
import Heading from "../../utils/Heading";
import Carousel from "../../components/Carousel";
import { categories } from "../../utils/Data";
import { responsive2 } from "../../utils/CarouselResponsives";
import ProductDetails from "../../components/products/ProductCardWithDetails";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hooks/useNotifaction";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";
import MainButton from "../../components/buttons/MainButtons";
import { createReview } from "../../api/productApi";
import { AuthContext } from "../../context/AuthContext";
const ProductDetailsPage = () => {
  const { productId } = useParams();
  const Realproducts = useSelector((state) => state.products.products.data);
  const filteredCategory = Realproducts.filter(
    (category) => category.slug === productId
  );
  console.log("filteredCategory", filteredCategory[0]._id);
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Specification");
  const [selectedImage, setSelectedImage] = useState(
    `${filteredCategory[0].image}`
  );
  const relatedProductsRef = useRef(null);
  const product = {
    name: "HP LP3065",
    brand: "HP",
    code: "Product 21",
    rewardPoints: 300,
    availability: "In Stock",
    price: "856 ريال سعودي",
    exTax: "856 ريال سعودي",
    images: [
      "https://i.ebayimg.com/00/s/MjY4WDUyMA==/z/RS0AAOSw2cVlHRhN/$_57.JPG", // Primary Image
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJAMIyX5zKXOZCk2PTv8RO0lw1OmwCO9Q945P_2ykLDpWKlh8Hz_b9Ayz0rqa39EhNFI&usqp=CAU", // Additional Image 1
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9tDoL5TT8HbUv8mU2AU6YSkEQWdr43q5sRw2sjSLMUHcPjm-3oeGpd_vUhCm3ZUR0EU&usqp=CAU", // Additional Image 2
      "https://image.goat.com/attachments/product_template_additional_pictures/images/093/184/242/medium/1164935_07.jpg.jpeg?1694570507", // Additional Image 3
    ],
    deliveryDate: "2011-04-22",
    reviews: 1,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Specification":
        return <Specification />;
      case "Description":
        return <Description />;
      case "Reviews":
        return <Reviews />;
      default:
        return <Specification />;
    }
  };
  const handleRelatedProductsLeftArrowClick = () =>
    relatedProductsRef.current.previous();
  const handleRelatedProductsRightArrowClick = () =>
    relatedProductsRef.current.next();
  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart(product));
    } else {
      notify("please login to add products", "error");
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="flex items-center mb-4">
        <HeaderRoutes page={product.name} route={""} />
      </div>
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="flex-1">
          <div className="w-full h-96">
            <ReactImageMagnify
              imageProps={{
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: selectedImage,
              }}
              magnifiedImageProps={{
                src: selectedImage,
                width: 700,
                height: 700,
              }}
              portalProps={{
                id: "portal-test-id",
                horizontalOffset: 5,
              }}
              className="w-full h-full"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-4 mt-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-24 h-24 object-cover border rounded-lg cursor-pointer ${
                  selectedImage === image ? "border-primary" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1 mt-6 lg:mt-0 lg:ml-8">
          <h1 className="text-2xl font-bold mb-2">
            {filteredCategory[0].title}
          </h1>
          <div className="mb-4">
            <span className="text-gray-700">Brand: </span>
            <span className="text-blue-500">{product.brand}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Product Code: </span>
            <span className="text-blue-500">{product.code}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Reward Points: </span>
            <span className="text-blue-500">{product.rewardPoints}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-700">Available Options: </span>
            <div className="mt-2">
              <label className="block text-gray-700 mb-1">Delivery Date</label>
              <input
                type="date"
                defaultValue={product.deliveryDate}
                className="border rounded-lg p-2 w-full"
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-700">Qty: </span>
            <div className="flex items-center ml-2">
              <button className="px-2 py-1 border">-</button>
              <input
                type="text"
                defaultValue="1"
                className="w-12 text-center border"
              />
              <button className="px-2 py-1 border">+</button>
            </div>
          </div>
          <button className="w-full lg:w-auto mt-4 bg-primary text-white py-2 px-6 rounded-lg">
            Add to Cart
          </button>
        </div>

        {/* Availability and Price */}
        <div className="mt-6 lg:mt-0 lg:ml-8 w-full lg:w-1/3">
          <div className="border p-4 rounded-lg">
            <p className="text-green-600 mb-2">{product.availability}</p>
            <p className="text-3xl font-bold text-red-600 mb-2">
              {filteredCategory[0].price} $
            </p>
            <p className="text-gray-700">Ex Tax: {product.exTax}</p>
            <p className="text-gray-700 mt-4">
              Price in reward points: {product.rewardPoints}
            </p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400 mr-2">★ ★ ★ ★ ☆</span>
              <span>{product.reviews} Review</span>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social Share Buttons */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-full">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full">
                <i className="fab fa-pinterest"></i>
              </button>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-full">
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                <i className="fas fa-share-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="mt-10">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none ${
                activeTab === "Specification"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("Specification")}
            >
              Specification
            </button>
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none ${
                activeTab === "Description"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("Description")}
            >
              Description
            </button>
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm focus:outline-none ${
                activeTab === "Reviews"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("Reviews")}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="mt-6">{renderContent()}</div>
      </div>{" "}
      <Heading
        title={"Related Products"}
        leftArrow={handleRelatedProductsLeftArrowClick}
        rightArrow={handleRelatedProductsRightArrowClick}
        // btns={buttons}
      />
      <Carousel carouselRef={relatedProductsRef} responsive={responsive2}>
        {categories.map((product, index) => (
          <div className="m-3" key={index}>
            <ProductDetails
              product={product}
              handleAddToWishlist={handleAddToWishlist}
              handleAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Specification = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Specification</h2>
    <p className="text-gray-700">
      Here you can provide detailed specifications of the product, including
      technical details, dimensions, weight, and any other relevant information
      that helps users understand the product better.
    </p>
  </div>
);

const Description = () => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Description</h2>
    <p className="text-gray-700">
      Provide a comprehensive description of the product, highlighting its
      features, benefits, and unique selling points. This section can help
      potential buyers make an informed decision by understanding what makes the
      product special.
    </p>
  </div>
);

const Reviews = () => {
  const { user } = useAuthContext();
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Great Product!",
      rating: 5,
      content:
        "I absolutely love this product! Highly recommend it to everyone.",
    },
    {
      id: 2,
      title: "Not Bad",
      rating: 3,
      content: "The product is good but could use some improvements.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    title: "",
    rating: 1,
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      notify("Please log in to submit a review.", "error");
      return;
    }

    try {
      const reviewData = {
        title: newReview.title,
        ratings: newReview.rating,
        user: user.data._id,
        product: "66c6f95099d2f5822c5efe5d",
      };

      const token = JSON.parse(localStorage.getItem("user")); // Adjust this based on how you store the token
      console.log("token", token.token);
      await createReview(reviewData, token.token);

      setNewReview({ title: "", rating: 1, content: "" });
    } catch (error) {
      console.log(error);
      notify("Failed to submit the review.", "error");
    }
  };

  return (
    <div className="p-4 border-2 border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      {reviews.map((review) => (
        <div key={review.id} className="mb-4 border-2 p-3 pb-4">
          <div className="flex justify-between w-full">
            <h3 className="font-bold">{review.title}</h3>
            <div>{new Date().toLocaleDateString()}</div>
          </div>

          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < review.rating ? "text-yellow-500" : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-700">{review.content}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="mt-6">
        <h2 className="text-xl font-semibold mb-4 border-b-2 pb-2 border-gray-200">
          Write review
        </h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 mb-2">
            Review Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newReview.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <div className="flex">
            {[...Array(5)].map((_, i) => {
              const starRating = i + 1;
              return (
                <i
                  key={i}
                  className={`fa${
                    starRating <= newReview.rating ? "s" : "r"
                  } fa-star cursor-pointer text-xl ${
                    starRating <= newReview.rating
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleStarClick(starRating)}
                ></i>
              );
            })}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 mb-2">
            Review Content
          </label>
          <textarea
            id="content"
            name="content"
            value={newReview.content}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>

        <MainButton>Add Review</MainButton>
      </form>
    </div>
  );
};
export default ProductDetailsPage;
