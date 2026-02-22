import React from "react";

const TextInput = ({
  label,
  name,
  placeholder = "",
  type = "text",
  className = "",
  error,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm">
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`w-full h-12 mt-1 px-5 text-white font-light bg-[#0B353B] border border-[#2C4D53] focus:outline-none rounded-lg ${className}`}
        {...rest}
      />

      {error && (
        <span className="text-xs text-red-500 mt-1 block">{error}</span>
      )}
    </div>
  );
};

export default TextInput;