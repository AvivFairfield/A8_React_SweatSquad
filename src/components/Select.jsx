import React from "react";

export const Select = ({ options, value, onChange, id, labelText }) => {
  return (
    <div className="relative w-full mb-3">
      {labelText && (
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      <select
        id={id}
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150 ease-in"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
