import React from "react";

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
    <div className={`relative w-full mb-3 ${className || ""}`}>
      {labelText && (
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor={id}
        >
          {labelText}
        </label>
      )}
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
