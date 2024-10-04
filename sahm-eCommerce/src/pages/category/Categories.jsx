import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = ({ category }) => {
  return (
    <Link
      to={`category/${category.slug}`}
      className="flex flex-col justify-center my-8 items-center text-center group cursor-pointer"
    >
      <div className="w-44 h-44">
        <img
          loading="lazy"
          src={category.image}
          alt={typeof category.name === "string" ? category.name : "category"}
        />
      </div>
      <h1 className="text-1xl font-serif group-hover:text-primary transition-colors duration-300">
        {category.name}
      </h1>
    </Link>
  );
};

export default Categories;
