import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";
import { ReactComponent as MoonIcon } from "./moon.svg";
import { ReactComponent as SunIcon } from "./sun.svg";

// This component provides a button for toggling the application's theme.
// It uses a context called `useTheme` to access the `toggleTheme` function.
export const ThemeToggleButton = () => {
    // `toggleTheme` is a function from the ThemeContext that toggles the theme between light and dark
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        // This button, when clicked, calls the `toggleTheme` function to toggle the application's theme.
        // It is styled with a class `theme-toggle-button`
        <>
            {/* <button onClick={toggleTheme} className={`themeButton ${theme}`}>
                Toggle Theme
            </button> */}

            <div className={`toggleContainer ${theme}`} onClick={toggleTheme}>
                <button className={`themeButton`}>
                    {theme === "light" ? <SunIcon className="svg_sun" /> : ""}
                    <p className="text-white"></p>
                </button>

                <button className={`themeButton`}>
                    {theme === "dark" ? <MoonIcon className="svg_moon" /> : ""}
                </button>
            </div>
        </>
    );
};
