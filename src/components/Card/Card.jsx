import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";

// Card component for displaying information such as images, titles, subtitles, and dates.
// It also provides "Done" and "Cancel" actions through buttons.
export const Card = ({ imgSrc, title, subtitle, date, onDone, onDelete }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	let imgLink = "";

	if (imgSrc === "HIIT.jpg") {
		imgLink = "https://www.orbitfitness.com.au/img/cms/HIIT%20Workouts.jpg";
	}

	if (imgSrc === "Running.jpg") {
		imgLink =
			"https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg";
	}

	if (imgSrc === "Spinning.jpg") {
		imgLink =
			"https://www.shape.com/thmb/alKlpQz3b5GSvLwTCq8-5tDc2no=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/30-Min-Stationary-Bike-Workout-GettyImages-835137254-7f089974b6ab45a18d4b48ded3efeae8.jpg";
	}

	if (imgSrc === "Crossfit.jpg") {
		imgLink =
			"https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM2MTI0ODI4MTY1NjM3/1280-crossfit-barbell.jpg";
	}

	return (
		// This is a comment outside of the JSX which is fine in its current form.
		<div
			className={`bg-white text-left rounded-lg shadow-lg overflow-hidden card ${theme}`}
		>
			{/* Displays an image with a fixed size, covering the content area without distortion.
          The image source is passed as a prop. The alt text is dynamically generated based on the title. */}
			<img
				className="w-60 h-36 object-cover object-center"
				src={imgLink}
				alt={`card-${title}`}
			/>
			{/* Container for the card's text content, padded for spacing. */}
			<div className="p-4">
				<h2
					className={`text-xl font-semibold text-gray-800 mb-2 card ${theme}`}
				>
					{title}
				</h2>
				<p className="text-sm">{subtitle}</p>
				<p className="text-sm mb-4">{date}</p>
				<div className="flex justify-between gap-4">
					{/* "Cancel" button with a red background that becomes darker on hover.
              Triggers the onDelete function passed as a prop when clicked. */}
					<button
						className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						onClick={onDelete}
					>
						Cancel
					</button>
					{/* "Done" button with a green background that becomes darker on hover.
              Triggers the onDone function passed as a prop when clicked. */}
					<button
						className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						onClick={onDone}
					>
						Done
					</button>
				</div>
			</div>
		</div>
	);
};
