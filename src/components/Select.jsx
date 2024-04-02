import React from "react";

// This component renders a select dropdown with options.
// It accepts an array of options, a current value, an onChange handler, an id, and optional labelText as props.
export const Select = ({ options, value, onChange, id, labelText }) => {
  return (
    // Container div for styling. Ensures the select element is full width with a bottom margin.
    <div className="relative w-full mb-3">
      {/* Conditional rendering of a label if labelText is provided. Styled as uppercase, bold, and small font. */}
      {labelText && (
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor={id} 
        >
          {labelText} 
        </label>
      )}
      {/* The select element itself, styled to fit the application's design. 
          It uses the provided id for association with its label, 
          and manages its current value and change events via props. */}
      <select
        id={id} 
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150 ease-in"
        value={value} 
        onChange={onChange} 
      >
        {/* Maps over the options prop to create a list of option elements */}
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label} 
          </option>
        ))}
      </select>
    </div>
  );
};
