import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axiosInstance from "../../api";
import { FaListUl } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import NoData from "./../../../public/images/NoData.png";
import { ProductCard } from "./../../components/products/ProductCard";
import { products } from "./../../utils/Data";
import ProductDetails from "./../../components/products/ProductCardWithDetails";
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const CategorySinglePage = () => {
  const { categoryName: name } = useParams();
  const [products, setProducts] = useState([]);

  const capitalizedCategoryName = capitalizeFirstLetter(name);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/product");
      setProducts([response.data]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const filteredData =
    products.length > 0 && products[0].data
      ? products[0].data.filter(
          (product) => product.category.name === capitalizedCategoryName
        )
      : [];

  console.log(filteredData);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center px-3 py-2 mb-3 w-full bg-gray-100 text-black gap-5">
          <a href="/">
            <FaHome />
          </a>
          <span className="text-gray-500 text-2xl">{">"}</span>
          <p className="capitalize">{name}</p>
          <span className="text-gray-500 text-2xl">{">"}</span>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="w-full h-full relative overflow-hidden ">
          <div className="bg-[#fff] mb-[20px] w-full md:w-[70%] relative xl:h-[60px] gap-[10px] xl:gap-0 h-full flex-col  mx-auto flex md:flex-row justify-around border-[1px] border-[#ebebeb] text-[17px] items-center">
            <div className="flex w-[80px] justify-between  self-start ml-[15px] mt-[5px] md:m-0 md:self-auto duration-300">
              <FaListUl className="cat-nav" />
              <BsGrid className="cat-nav" />
            </div>
            <div className="capitalize text-hover hidden xl:flex hover:text-black duration-300 cursor-pointer">
              <span className="pr-[5px]"> product compare</span>
              <span>(0)</span>
            </div>
            <div>
              <label htmlFor="sort" className="pr-[5px]">
                Sort By:
              </label>
              <select name="" id="sort" className="cat-nav-select">
                <option value="">default</option>
                <option value="">default</option>
                <option value="">default</option>
                <option value="">default</option>
              </select>
            </div>
            <div>
              <label htmlFor="show" className="pr-[5px]">
                Show:
              </label>
              <select name="" id="show" className="cat-nav-select">
                <option value="100">100</option>
                <option value="100">100</option>
                <option value="100">100</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div className=" w-[70%] mx-auto h-full overflow-hidden flex flex-wrap gap-1  ">
            {filteredData.map((product, index) => (
              <ProductDetails product={product} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <img src={NoData} alt="" className="w-[30%] relative mx-auto" />
        </div>
      )}
    </div>
  );
};

export default CategorySinglePage;
