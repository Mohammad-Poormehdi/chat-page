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
      className="bg-white text-center w-full h-[60px] px-3 py-2 rounded-full focus:outline-1 outline-icon dark:bg-primary-dark dark:text-white"
    />
  );
};
export default Input;
