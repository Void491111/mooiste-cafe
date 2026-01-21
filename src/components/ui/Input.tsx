import { input } from "framer-motion/client";
import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps> (
    ({ className, type, ...props }, ref) => {
        return (
            <input
            type={type}
            className={'flex h-12 w-full rounded-xl border border-stone-300 bg-whitepx-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}'}
            ref={ref}
            {...props}
            />
            
        )
    }
)

export {Input}