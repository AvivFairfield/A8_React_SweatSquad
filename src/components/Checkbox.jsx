import React from "react";

// This component renders a customizable checkbox input with an optional label.
// Props include placeholder, value, onChange, id, and labelText for customization.
export const Checkbox = ({ placeholder, value, onChange, id, labelText }) => {
  return (
    // The container div holds the checkbox and its label. It is styled to align items center in an inline-flex display.
    <div className="relative w-full mb-3 inline-flex items-center cursor-pointer">
      {/* The checkbox input itself. Accepts onChange and value props for functionality. */}
      <input
        type="checkbox"
        className="form-checkbox border-none ml-1 w-5 h-5"
        placeholder={placeholder} // Consider removing as it's not standard for checkboxes.
        onChange={onChange}
        value={value}
      />
      {/* Conditionally renders a label element if labelText is provided.
          Associates the label with the input using the htmlFor prop. */}
      {labelText && (
        <label className="ml-2 text-sm font-semibold text-gray-700" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};
