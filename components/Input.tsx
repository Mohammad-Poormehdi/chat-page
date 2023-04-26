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
      className={`bg-white text-center w-full h-[60px] ${maxLength===1 ? 'rounded-2xl' : 'rounded-full'} py-2 px-5 focus:outline-1 outline-icon dark:bg-primary-dark dark:text-white`}
    />
  );
};
export default Input;
