"use client"

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Info } from "lucide-react";
import InfoModal from "../ui/infoModal";
import CartDrawer from "../ui/cartDrawer";

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Coffee', href: '/coffee' },
    { name: 'Non Coffee', href: '/non-coffee' },
    { name: 'Snack', href: '/snack' },
    { name: 'Dessert', href: '/dessert' }, 
];

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false); // 2. State buat Cart

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-50 h-20">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    
                    <Link href="/" className="text-2xl font-bold text-stone-900 shrink-0">
                        Mooiste<span className="text-stone-400">Cafe</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-stone-500 hover:text-stone-900 font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="h-6 w-px bg-stone-300 mx-2"></div>

                        <div className="flex items-center gap-4">
                            {/* 3. Button Cart Diklik -> setShowCart(true) */}
                            <button 
                                onClick={() => setShowCart(true)}
                                className="p-2 hover:bg-stone-100 rounded-full transition text-stone-600 relative"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                {/* Optional: Badge Merah (Jumlah Item) */}
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                            </button>

                            <button 
                                onClick={() => setShowInfoModal(true)}
                                className="bg-stone-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-stone-800 transition shadow-lg flex items-center gap-2"
                            >
                                <Info className="w-4 h-4" />
                                Info Meja
                            </button>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <button onClick={() => setShowCart(true)}>
                            <ShoppingBag className="w-5 h-5 text-stone-600" />
                        </button>
                        <button onClick={() => setIsSidebarOpen(true)} type="button" className="p-1">
                            <Menu className="w-7 h-7 text-stone-900" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div 
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
                    isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsSidebarOpen(false)}
            />

            <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center p-6 border-b border-stone-100">
                    <span className="text-xl font-bold text-stone-900">Menu</span>
                    <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-full hover:bg-stone-100 transition">
                        <X className="w-6 h-6 text-stone-600" />
                    </button>
                </div>

                <div className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsSidebarOpen(false)}
                            className="text-lg font-medium text-stone-600 py-3 border-b border-stone-50 hover:text-stone-900 hover:pl-2 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-auto p-6">
                    <button 
                        onClick={() => {
                            setIsSidebarOpen(false);
                            setTimeout(() => setShowInfoModal(true), 300);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-3 rounded-xl font-bold hover:bg-stone-800 transition"
                    >
                        <Info className="w-5 h-5" />
                        Info Meja
                    </button>
                </div>
            </div>

            {/* 4. Render Component Modal & Cart */}
            <InfoModal 
                isOpen={showInfoModal} 
                onClose={() => setShowInfoModal(false)} 
            />
            
            <CartDrawer 
                isOpen={showCart}
                onClose={() => setShowCart(false)}
            />
        </>
    );
}