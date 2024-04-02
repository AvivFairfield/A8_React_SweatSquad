import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";
// Button component that allows customization and handles click events
export const Button = ({ children, onClick, className, type }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        // Render a button element with dynamic attributes and styles.
        <button
            // Set the button type, defaulting to "button" if no type is provided
            type={type || "button"}
            onClick={onClick}
            //The default styling includes a black background, white border and text, padding, and rounded corners.
            className={`bg-black border-2 transition duration-400 roundedbg-black border-white text-white py-2 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
      px-4 rounded-md text-base ${theme} ${className || ""}`}
        >
            {children}
        </button>
    );
};
