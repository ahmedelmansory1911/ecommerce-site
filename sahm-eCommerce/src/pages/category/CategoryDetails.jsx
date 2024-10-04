import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const CategoryCard = () => {
  const { categoryName: name } = useParams();
  const [deatils, setDeatils] = useState();
  const getData = async () => {
    const response = await axiosInstance.get(`/categories/${name}`);
    setDeatils(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(deatils);
  return <div>{name}</div>;
};

export default CategoryCard;
