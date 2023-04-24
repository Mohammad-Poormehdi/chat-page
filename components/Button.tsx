import React from "react";

interface ButtonProps {
  active?: boolean;
  label: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 w-full py-2 rounded-2xl text-sm ${
        active ? "text-white bg-primary" : 'text-black bg-white dark:bg-primary-dark dark:text-white'
      }`}
    >
      {label}
    </button>
  );
};
export default Button;
