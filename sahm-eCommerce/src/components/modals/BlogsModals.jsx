import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, blog }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow property
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 fade-in">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <FaTimes size={24} />
        </button>
        <img
          loading="lazy"
          src="https://sahmksa.com/image/cache/catalog/bnr/1920x700-2-893x502.jpg"
          alt={blog.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>
    </div>
  );
};

export default Modal;
