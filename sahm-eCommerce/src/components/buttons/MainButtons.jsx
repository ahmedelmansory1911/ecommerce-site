// src/components/Button.js

import React from "react";

const MainButton = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
