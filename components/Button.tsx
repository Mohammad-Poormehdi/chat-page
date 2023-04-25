import React from "react";

interface ButtonProps {
  active?: boolean;
  label: string;
  onClick?: () => void | null ;
}
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 w-full py-3 rounded-2xl text-sm max-md:px-3 max-md:py-2 ${
        active ? "text-white bg-primary" : 'text-black bg-white dark:bg-primary-dark dark:text-white'
      }`}
    >
      {label}
    </button>
  );
};
export default Button;
