import { Fragment, useRef, useState } from "react";
import ImageSwiper from "../components/MainSwiper";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import ProductCard from "../components/products/ProductCard";
import Heading from "../utils/Heading";
import { addToComparelist } from "../api/CompareList";
import { FaStar } from "react-icons/fa";
import { TbGitCompare } from "react-icons/tb";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import {
  responsive,
  responsive2,
  responsive3,
  responsive4,
} from "../utils/CarouselResponsives";
import "react-multi-carousel/lib/styles.css";
import Carousel from "../components/Carousel";
import ProductDetails from "../components/products/ProductCardWithDetails";
import { FaHeart, FaEye, FaRegSmile, FaMoneyBill } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { MdLoop, MdOutlinePayment } from "react-icons/md";
import BlogCard from "../components/BlogCard";
import {
  products,
  categories,
  products2,
  Brands,
  blogs,
  features,
} from "../utils/Data"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../components/modals/BlogsModals";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "./../features/cart/cartSlice";
import { addToCompare } from "./../features/compare/compareSlice";
import { useAuthContext } from "../hooks/useAuthContext";
import notify from "../hooks/useNotifaction";
import ProductsLoader from "../utils/ProductsLoader";
import { Link } from "react-router-dom";
import axios from "axios";
import Categories from "./category/Categories";

export default function Main() {
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const categoryCarouselRef = useRef(null);
  const trendingCarouselRef = useRef(null);
  const specialsCarouselRef = useRef(null);
  const Topcategories = useSelector((state) => state.categories.categories);
  const TopCategoriesStatus = useSelector((state) => state.categories.status);
  const Realproducts = useSelector((state) => state.products.products);
  const trendingProducts = Realproducts?.data?.filter(
    (item) => item.trending === true
  );
  const specialProducts = Realproducts?.data?.filter(
    (item) => item.specials === true
  );
  console.log(Topcategories);
  console.log(trendingProducts);
  const handleCategoryLeftArrowClick = () =>
    categoryCarouselRef.current.previous();
  const handleCategoryRightArrowClick = () =>
    categoryCarouselRef.current.next();
  const handleTrendingLeftArrowClick = () =>
    trendingCarouselRef.current.previous();
  const handleTrendingRightArrowClick = () =>
    trendingCarouselRef.current.next();
  const handleSpecialsLeftArrowClick = () =>
    specialsCarouselRef.current.previous();
  const handleSpecialsRightArrowClick = () =>
    specialsCarouselRef.current.next();

  const buttons = [
    { name: "Featured" },
    { name: "BestSeller" },
    { name: "New" },
  ];

  // Add To Compare Page Fn
  const addToCpmarePage = () => {};

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart(product));
    } else {
      notify("please login to add products", "error");
    }
  };

  const handleAddToCompare = (product) => {
    dispatch(addToCompare(product));
  };

  const usertoken = window.localStorage.getItem("user");
  const parseing = JSON.parse(usertoken);
  // get token

  const addToWishList = async (productId) => {
    try {
      const response = await axios.post(
        `${process.env.API_BASE_URL}/wishlist`,
        { productId },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        console.log("Added to wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ImageSwiper />
      <>
        <OfferSwiper />
      </>

      <MaxWidthWrapper className={"max-w-screen-xl"}>
        <section>
          <div className="flex flex-col md:flex-row my-8 gap-5 justify-center items-center w-full">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                handleAddToWishlist={addToWishList}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
        <Heading
          title={"Top Category"}
          leftArrow={handleCategoryLeftArrowClick}
          rightArrow={handleCategoryRightArrowClick}
        />
        <Carousel carouselRef={categoryCarouselRef} responsive={responsive}>
          {Topcategories?.data && Topcategories.data.length > 0 ? (
            Topcategories.data.map((category, index) => (
              <div key={index}>
                <Categories category={category} />
              </div>
            ))
          ) : (
            <div className=" my-8 flex justify-center items-start w-full">
              <ProductsLoader />
            </div>
          )}
        </Carousel>
        <Heading
          title={"Trending products"}
          leftArrow={handleTrendingLeftArrowClick}
          rightArrow={handleTrendingRightArrowClick}
          btns={buttons}
        />

        <Carousel carouselRef={trendingCarouselRef} responsive={responsive2}>
          {!trendingProducts || trendingProducts.length === 0 ? (
            <div className=" my-8 flex justify-center items-start w-full">
              <ProductsLoader />
            </div>
          ) : (
            trendingProducts.map((product, index) => (
              <div className="m-3" key={index}>
                <ProductDetails
                  product={product}
                  handleAddToWishlist={addToWishList}
                  handleAddToCart={handleAddToCart}
                  handleAddToCompare={handleAddToCompare}
                />
              </div>
            ))
          )}
        </Carousel>
        <section className=" overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2  my-8 gap-5 justify-items-center items-center w-full">
            {products2.map((product, index) => (
              <div
                key={index}
                className="relative block cursor-pointer  md:w-[600px] md:h-64 h-48 w-[300px] overflow-hidden rounded-lg shadow-lg border-gray-200 border-2 bg-white group transform transition-transform  fade-in"
              >
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="text-white text-2xl hover:text-orange-500 transition-colors duration-300">
                    <IoGitCompareSharp />
                  </button>
                  <button className="text-white text-2xl hover:text-red-500 transition-colors duration-300">
                    <FaHeart onClick={() => handleAddToCart(product)} />
                  </button>
                  <button className="text-white text-2xl hover:text-blue-500 transition-colors duration-300">
                    <FaEye />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4 transition-transform duration-300 transform group-hover:translate-y-0 translate-y-full">
                  <h2 className="text-lg font-semibold text-white">
                    {product.name}
                  </h2>
                  <p className="text-gray-300">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex flex-col md:flex-row m-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row sm:flex-col md:flex-row  cursor-pointer border-gray-100 border-2 gap-3 items-center md:w-64 w-full p-2 mb-3"
              >
                <div className="text-primary text-4xl">{feature.logo}</div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p>{feature.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <Heading
            title={"Specials"}
            leftArrow={handleSpecialsLeftArrowClick}
            rightArrow={handleSpecialsRightArrowClick}
          />
          <Carousel carouselRef={specialsCarouselRef} responsive={responsive2}>
            {!specialProducts || specialProducts.length === 0 ? (
              <div className=" my-8 flex justify-center items-start w-full">
                <ProductsLoader />
              </div>
            ) : (
              specialProducts.map((product, index) => (
                <div className="m-3" key={index}>
                  <ProductDetails
                    product={product}
                    handleAddToWishlist={addToWishList}
                    handleAddToCart={handleAddToCart}
                  />
                </div>
              ))
            )}
          </Carousel>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
const BlogSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const blogCarouselRef = useRef(null);
  const handleBlogCardClick = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };
  const handleBlogLeftArrowClick = () => blogCarouselRef.current.previous();
  const handleBlogRightArrowClick = () => blogCarouselRef.current.next();
  return (
    <section className="relative mb-3">
      <Heading
        title={"Latest Blog"}
        leftArrow={handleBlogLeftArrowClick} // Implement these handlers if needed
        rightArrow={handleBlogRightArrowClick}
      />
      <Carousel
        carouselRef={blogCarouselRef}
        responsive={responsive3}
        isModalOpen={isModalOpen}
      >
        {blogs.map((blog, index) => (
          <div key={index} className="m-3">
            <BlogCard blog={blog} onClick={() => handleBlogCardClick(blog)} />
          </div>
        ))}
      </Carousel>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        blog={selectedBlog}
      />
    </section>
  );
};
const OfferSwiper = () => {
  return (
    <>
      {" "}
      <Swiper
        className=" select-none offer-swiper"
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        slidesPerView={1} // default for mobile
        spaceBetween={4}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7, // 4 slides on desktop
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/ec15e080-38a3-46dd-aad0-e75a75c7d8bd.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/ec15e080-38a3-46dd-aad0-e75a75c7d8bd.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/ec15e080-38a3-46dd-aad0-e75a75c7d8bd.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/e64180d7-2fbb-4803-b2be-7a6ad515e9f1.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/e64180d7-2fbb-4803-b2be-7a6ad515e9f1.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/e64180d7-2fbb-4803-b2be-7a6ad515e9f1.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/e64180d7-2fbb-4803-b2be-7a6ad515e9f1.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/e64180d7-2fbb-4803-b2be-7a6ad515e9f1.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[150px] h-[100px] w-[100px]  ">
            <img
              loading="lazy"
              src="https://f.nooncdn.com/mpcms/EN0003/assets/ec15e080-38a3-46dd-aad0-e75a75c7d8bd.png?format=avif"
              alt="Slide 1"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
