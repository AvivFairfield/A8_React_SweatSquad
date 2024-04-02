import React from "react";

// Defines a reusable Input component that can be customized for different data types.
// Supports additional HTML input attributes like min, max, step, and autoComplete.
export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  labelText,
  min,
  max,
  step,
  className,
}) => {
  return (
    // Wrapper div that can accept a className prop for custom styling.
    // The `relative w-full mb-3` ensures the input is full width and spaced appropriately.
    <div className={`relative w-full mb-3 ${className || ""}`}>
      {/* Conditionally renders a label if labelText is provided.
          It is styled as uppercase, gray text. Associates the label with the input using htmlFor. */}
      {labelText && (
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
      {/* The input element itself, with dynamic type, placeholder, value, and onChange props.
          It adopts a styling that ensures a borderless input, rounded corners, and shadow.
          The transition property is used for smooth visual effects on focus. */}
      <input
        id={id} 
        type={type || "text"} 
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150 ease-in"
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        min={min} 
        max={max} 
        step={step} 
        autoComplete="on" 
      />
    </div>
  );
};
