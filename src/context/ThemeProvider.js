import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

//Create a Context object.

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    // Effect hook to perform side effects.
    // In this case, it updates localStorage and the document's data-theme attribute whenever the theme changes.
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]); //This effect depends on the theme state; it reruns whenever the theme changes.
    //Function to toggle the theme between 'light' and 'dark'.
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    //The provider component from Context is used to pass down
    //the theme state and the toggleTheme function to any child components that might need them.
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
