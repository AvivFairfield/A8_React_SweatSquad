import React from "react";

export const Card = ({ imgSrc, title, subtitle, date, onDone, onDelete }) => {
  return (
    <div className="bg-white text-left rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-60 h-36 object-cover object-center"
        src={imgSrc}
        alt={`card-${title}`}
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm">{subtitle}</p>
        <p className="text-sm mb-4">{date}</p>
        <div className="flex justify-between gap-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onDelete}
          >
            Cancel
          </button>
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
