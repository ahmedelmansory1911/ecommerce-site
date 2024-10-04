import React from "react";
import { FaRegSmile, FaMoneyBill, FaShip } from "react-icons/fa";
import { MdLoop, MdOutlinePayment } from "react-icons/md";

export const products = [
  {
    id: 1,
    name: "Canon",
    price: "$29.99",
    image: "https://sahmksa.com/image/cache/catalog/canon-symbol-800x800.jpg",
  },
  {
    id: 2,
    name: "iMac",
    price: "$39.99",
    image:
      "https://sahmksa.com/image/cache/catalog/item_XL_132361965_4077bbe9682bd-800x800.jpg",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    price: "$1500",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtyEpcgbyT48tITkMuYl_sB2KUi4uzDLiXQ&s",
  },
];
export const categories = [
  {
    id: 1,
    name: "Adidas Ultraboost 22 - Black",
    price: "$139.99",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
    discount: 20, // New discount value
    originalPrice: "$174.99", // Updated original price
    rating: 4.8, // Updated rating
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22 - Black2",
    price: "$119.99",
    image:
      "https://resources.mandmdirect.com/Images/_default/p/u/3/pu31155_1_cloudzoom.jpg",
    discount: 15, // New discount value
    originalPrice: "$139.99", // Updated original price
    rating: 4.6, // Updated rating
  },
  {
    id: 3,
    name: "New Balance 990v5 - Grey",
    price: "$179.99",
    image: "https://i.ebayimg.com/images/g/8RQAAOSwSw5mq9kq/s-l400.jpg",
    discount: 25, // New discount value
    originalPrice: "$239.99", // Updated original price
    rating: 4.9, // Updated rating
  },
  {
    id: 4,
    name: "Converse Chuck Taylor All Star - Blue",
    price: "$59.99",
    image:
      "https://www.converse.in/media/catalog/product/m/9/m9622c_01.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover",
    discount: 10, // New discount value
    originalPrice: "$66.99", // Updated original price
    rating: 4.4, // Updated rating
  },
  {
    id: 5,
    name: "Reebok Classic Leather - Beige",
    price: "$89.99",
    image:
      "https://images.reebok.eu/reebok-classic-leather-shoes_19728147_44793299_2048.jpg?c=1",
    discount: 5, // New discount value
    originalPrice: "$94.99", // Updated original price
    rating: 4.3, // Updated rating
  },
];

export const products2 = [
  {
    id: 1,
    name: "iPhone X ",
    price: "$29.99",
    image:
      "https://www.reliancedigital.in/wp-content/uploads/2018/04/dual-camera_banner2.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S9",
    price: "$39.99",
    image:
      "https://www.paget96projects.com/uploads/7/7/9/0/77909082/210756511_orig.jpg",
  },
];

export const Brands = [
  {
    id: 1,
    src: "https://sahmksa.com/image/cache/catalog/brand/1-225x150.jpg",
  },
  {
    id: 2,
    src: "https://sahmksa.com/image/cache/catalog/brand/6-225x150.jpg",
  },
  {
    id: 3,
    src: "https://sahmksa.com/image/cache/catalog/brand/5-225x150.jpg",
  },
  {
    id: 4,
    src: "https://sahmksa.com/image/cache/catalog/brand/4-225x150.jpg",
  },
  {
    id: 5,
    src: "https://sahmksa.com/image/cache/catalog/brand/3-225x150.jpg",
  },
  {
    id: 6,
    src: "https://sahmksa.com/image/cache/catalog/brand/2-225x150.jpg",
  },
  {
    id: 7,
    src: "https://sahmksa.com/image/cache/catalog/brand/1-225x150.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    name: "The Ultimate Guide to Camera Lenses",
    description:
      "Everything you need to know about choosing the right camera lens for your needs.",
    image:
      "https://sahmksa.com/image/cache/catalog/blog/guide-camera-lenses.jpg",
    link: "https://example.com/guide-camera-lenses",
  },
  {
    id: 2,
    name: "Top 10 Tips for Boosting Your iMac's Performance",
    description:
      "Discover tips and tricks to make your iMac run faster and more efficiently.",
    image: "https://sahmksa.com/image/cache/catalog/blog/imac-performance.jpg",
    link: "https://example.com/imac-performance",
  },
  {
    id: 3,
    name: "How to Get the Most Out of Your iPhone 14 Pro Max",
    description:
      "Learn how to maximize the features and capabilities of your new iPhone 14 Pro Max.",
    image: "https://sahmksa.com/image/cache/catalog/blog/iphone-14-pro-max.jpg",
    link: "https://example.com/iphone-14-pro-max",
  },
];
export const features = [
  {
    title: "100% SETISFACTION",
    paragraph: "If you are unable.",
    logo: <FaRegSmile />,
  },
  {
    title: "SAVE 20% WHEN YOU",
    paragraph: "use Credit Card",
    logo: <FaMoneyBill />,
  },
  {
    title: "FAST FREE SHIPMENT",
    paragraph: "Load any Computers.",
    logo: <FaShip />,
  },
  {
    title: "14 DAYS MONEY BACK",
    paragraph: "If you are unable",
    logo: <MdLoop />,
  },
  {
    title: "PAYMENT METHOD",
    paragraph: "Secure payment",
    logo: <MdOutlinePayment />,
  },
];
