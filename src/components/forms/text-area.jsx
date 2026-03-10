import React from "react";

const TextArea = ({
  label,
  name,
  placeholder = "",
  rows = 5,
  className = "",
  error,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-light">
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={`w-full mt-1 px-5 py-3 text-sm font-light bg-[#FAFAFA] border border-[#EEEEEE] focus:outline-none rounded-lg ${className}`}
        {...rest}
      />

      {error && (
        <span className="text-xs text-red-500 mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default TextArea;