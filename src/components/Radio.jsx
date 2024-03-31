import React from "react";

// This component renders a single radio button with an associated label.
// It accepts labelText, id, checked, and onChange as props.
export const Radio = ({ labelText, id, checked, onChange }) => {
  return (
    // The container for the radio button and its label. It is styled to be relatively positioned
    // with a bottom margin, flexible gap between elements, fitting content width, and centered items.
    <div className="relative mb-3 flex gap-2 w-fit place-items-center">
      {/* The radio input element itself. It is bound to the provided id, checked status, and onChange handler.
          The className applies Tailwind CSS styles for appearance and sizing. */}
      <input
        type="radio"
        id={id} 
        checked={checked} 
        onChange={onChange} 
        className="form-radio text-gray-700 h-4 w-4"
      />
      {/* Conditionally rendered label associated with the radio button.
          It is only displayed if labelText is provided. */}
      {labelText && (
        <label className="text-gray-700 text-sm font-medium" htmlFor={id}>
          {labelText} 
        </label>
      )}
    </div>
  );
};
