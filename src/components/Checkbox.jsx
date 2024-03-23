import React from "react";

export const Checkbox = ({ placeholder, value, onChange, id, labelText }) => {
  return (
    <div className="relative w-full mb-3 inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="form-checkbox border-none ml-1 w-5 h-5"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {labelText && (
        <label className="ml-2 text-sm font-semibold text-gray-700" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};
