import React from "react";

export const SubmitButton = ({ children, onClick, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full hover:bg-pink-500 transition-all duration-150 ease-in border-2 border-white rounded-3xl"
    >
      {children}
    </button>
  );
};
