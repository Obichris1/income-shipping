import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-black   font-bold px-4 py-2 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
    >
      {children}
    </button>
  );
};

export default Button;
