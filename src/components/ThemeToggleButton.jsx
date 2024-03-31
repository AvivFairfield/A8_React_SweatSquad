import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
// This component provides a button for toggling the application's theme.
// It uses a context called `useTheme` to access the `toggleTheme` function.
export const ThemeToggleButton = () => {
  // `toggleTheme` is a function from the ThemeContext that toggles the theme between light and dark 
  const { toggleTheme } = useTheme();

  return (
    // This button, when clicked, calls the `toggleTheme` function to toggle the application's theme.
    // It is styled with a class `theme-toggle-button` 
    <button onClick={toggleTheme} className="theme-toggle-button">
      Toggle Theme
    </button>
  );
};