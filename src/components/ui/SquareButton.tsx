import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "filled" | "outline";
}

export default function SquareButton({ children, className = "", variant = "filled", ...props }: ButtonProps) {
    const baseStyle = "h-12 px-8 font-sans font-bold text-sm tracking-[2px] uppercase transition-all duration-200 border border-[#432818]";
    const variants = {
        filled: "bg-[#432818] text-white hover:bg-[#2b1a0f]", 
        outline: "bg-transparent text-[#432818] hover:bg-[#432818] hover:text-white"
    };

    return (
        <button
            {...props}
            className={`${baseStyle} ${variants[variant]} ${className} rounded-none`}  
        >
            {children}
        </button>
    );
}