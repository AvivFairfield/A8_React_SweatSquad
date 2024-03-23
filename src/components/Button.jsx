import React from "react";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`bg-black border-2 transition duration-400 roundedbg-black border-white text-white py-2 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
      px-4 rounded-md text-base ${className || ""}`}
    >
      {children}
    </button>
  );
};
