import React from "react";
// This component renders a submit button, designed for form submissions or similar actions.
// It accepts children (to display button text or elements), an onClick handler, and an optional type prop.
export const SubmitButton = ({ children, onClick, type }) => {
  return (
    // The button element is styled with Tailwind CSS for a consistent, modern appearance.
    // The default type is "button", but it can be overridden (e.g., with "submit") through props.
    // It features a comprehensive set of styles for various states: normal, hover, focus, and active.
    // This includes a transition effect for smooth visual feedback.
    <button
      type={type || "button"}
      onClick={onClick}
      className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full hover:bg-pink-500 transition-all duration-150 ease-in border-2 border-white rounded-3xl"
    >
      {children}
    </button>
  );
};
