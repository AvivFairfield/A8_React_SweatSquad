import React from "react";

// Card component for displaying information such as images, titles, subtitles, and dates.
// It also provides "Done" and "Cancel" actions through buttons.
export const Card = ({ imgSrc, title, subtitle, date, onDone, onDelete }) => {
  return (
    // This is a comment outside of the JSX which is fine in its current form.
    <div className="bg-white text-left rounded-lg shadow-lg overflow-hidden">
      {/* Displays an image with a fixed size, covering the content area without distortion.
          The image source is passed as a prop. The alt text is dynamically generated based on the title. */}
      <img
        className="w-60 h-36 object-cover object-center"
        src={imgSrc}
        alt={`card-${title}`}
      />
      {/* Container for the card's text content, padded for spacing. */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
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
