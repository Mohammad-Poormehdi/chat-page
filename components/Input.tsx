import React from "react";

interface InputProps {
  type: string;
  placeholder?: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({ type, placeholder, maxLength }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      className="bg-white text-center w-full px-3 py-2 rounded-2xl focus:outline-1 outline-icon"
    />
  );
};
export default Input;
