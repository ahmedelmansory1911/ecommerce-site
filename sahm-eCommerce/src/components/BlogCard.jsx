import { MdOutlineZoomIn } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { useState } from "react";
import Modal from "./modals/BlogsModals";

export default function BlogCard({ blog, onClick }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div
        className="relative cursor-pointer md:w-full m-3 md:h-64 h-48 w-full overflow-hidden rounded-lg border-gray-200 border-2 bg-white group transform transition-transform fade-in"
        // Calls the onClick prop to open modal
      >
        <img
          loading="lazy"
          src="https://sahmksa.com/image/cache/catalog/bnr/1920x700-2-893x502.jpg"
          alt={blog.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <button
            className="text-white text-3xl hover:text-primary transition-colors duration-300 "
            aria-label={`Zoom in to view ${blog.name}`}
            onClick={() => onClick(blog)}
          >
            <MdOutlineZoomIn />
          </button>
          <button
            className="text-white text-2xl hover:text-blue-500 transition-colors duration-300"
            onClick={() => window.open(blog.link, "_blank")}
          >
            <FaLink />
          </button>
        </div>
      </div>{" "}
      <div className="text-black p-1 md:px-4">
        <h2 className="text-lg font-semibold">{blog.name}</h2>
        <p className="text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          dolore nesciunt porro tempora, minus nostrum est natus
        </p>
        <a href="" className="text-blue-400">
          Read more
        </a>
      </div>
    </>
  );
}
