import { button } from "framer-motion/client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button className={`
      relative px-2 py-1.5 font-medium cursor-pointer rounded-full bg-transparent text-[#1F1B1A] border border-[#2B2A2A] transition-all duration-300 ease-in-out hover:bg-[#2B2A2A] hover:text-[#FAFAFA] active-scale-95 ${className}
    `}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;