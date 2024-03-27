import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Adjust the path as necessary

export const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      Toggle Theme
    </button>
  );
};