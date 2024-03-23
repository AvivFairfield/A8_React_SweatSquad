import React from "react";

export const Radio = ({ labelText, id, checked, onChange }) => {
  return (
    <div className="relative mb-3 flex gap-2 w-fit place-items-center">
      <input
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
        className="form-radio text-gray-700 h-4 w-4"
      />
      {labelText && (
        <label className="text-gray-700 text-sm font-medium" htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};
