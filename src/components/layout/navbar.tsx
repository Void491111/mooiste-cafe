"use client"

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavLink {
    readonly name: string;
    readonly href: string;
}

const navLinks: ReadonlyArray<NavLink> = [
    { name: 'Home', href: '/'},
    { name: 'Coffee', href: '/coffee'},
    { name: 'Non Coffee', href: '/non-coffee'},
    { name: 'Snack', href: '/snack'},
    { name: 'Dessert', href: '/dessert'},
];

export default function Navbar(): React.JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = (): void => setIsOpen((prev) => !prev);
    const closeMenu = (): void => setIsOpen(false);

    return (
        <>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-30 h-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-stone-900 shrink-0 ">
                    Mooiste<span className="text-stone-400">Cafe</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href}
                            className="text-stone-500 hover:text-stone-900 font-medium transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                        <button type="button" className="p-2 hover:bg-stone-100 rounded-full transition">
                            <ShoppingBag className="w-5 h-5 text-stone-600 hover:text-stone-900"/>
                        </button>
                        <button type="button" className="bg-stone-900 text-white px-6 py-2 rounded-full hover:bg-stone-800 transition">
                            Order Now
                        </button>
                    </div>
                </div>

                <div className="lg:hidden flex items-center gap-4">
                    <ShoppingBag className="w-5 h-5 text-stone-600" />
                    <button onClick={toggleMenu} type="button" className="p-1">
                        <Menu className="w-7 h-7 text-stone-900" />
                    </button>
                </div>
            </div>
        </nav>

        <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-400 ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"    
            }`}
            onClick={closeMenu}
        />

        <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-400 flex flex-col p-6 ${
            isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        >
            <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-stone-900">Menu</span>
                <button
                    onClick={closeMenu}
                    type="button"
                    className="p-2 rounded-full hover:bg-stone-100 transition-colors cursor"
                >
                    <X className="w-5 h-5 text-stone-600"/>
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu} 
                        className="text-lg font-medium text-stone-600 py-2 border-b border-gray-50 hover:text-stone-900 hover:pl-2 transition-all"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="mt-auto pt-8">
                <button className="w-full bg-stone-900 text-white py-3 rounded-full font-medium hover:bg-stone-800 transition shadow-lg">
                    Order now
                </button>
            </div>
        </div>
        </>
    );
}