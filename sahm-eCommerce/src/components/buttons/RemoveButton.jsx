// src/components/Button.js

import React from "react";

const RemoveButton = ({ className = "", children, ...props }) => {
  return (
    <button
      className={`bg-red-600 hover:bg-red-300 text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RemoveButton;
