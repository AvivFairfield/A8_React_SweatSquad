import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// This component renders the company's logo.
export const Logo = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		// The logo image is rendered within an <img> tag.
		// It uses Tailwind CSS classes for styling:
		// "logo-img" for custom logo styling (not a default Tailwind class),
		// "block" to display the image as a block-level element,
		// and "w-28" to set the width of the logo.
		<img
			className="logo-img block w-28"
			alt="logo"
			src={
				theme == "dark"
					? `https://i.ibb.co/4jnQ609/white-logo.png`
					: "https://i.ibb.co/MZ5pW9V/logo.png"
			} // The source URL of the logo image.
		/>
	);
};
