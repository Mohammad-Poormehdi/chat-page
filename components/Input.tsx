import React, { useCallback, useState } from "react";

interface InputProps {
  value:string | undefined,
  placeholder: string;
  onChange: (data: string) => void;
}
const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {

  return (
    <textarea
    value={value}
      dir="rtl"
      onChange={(e) => {
        onChange(e.target.value);
        
      }}
      placeholder={placeholder}
      className=" rounded-xl pt-4 px-3 w-full focus:outline-none resize-none dark:text-white dark:bg-primary-dark"
    />
  );
};
export default Input;
