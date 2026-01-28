"use client"

import Link from "next/link";
import useNavbarLogic from "./navbar.hooks";
import DesktopView from "./desktop-view";
import MobileView from "./mobile-view";
import InfoModal from "../ui/infoModal";
import CartDrawer from "../ui/cartDrawer";

export default function Navbar() {
    // Panggil Logic di sini (Clean banget kan?)
    const { state, actions } = useNavbarLogic();

    return (
        <>
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-100 z-50 h-20">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    
                    {/* LOGO (Bisa dipisah juga kalau mau, tapi gini oke) */}
                    <Link href="/" className="text-2xl font-bold text-stone-900 shrink-0">
                        Mooiste<span className="text-stone-400">Cafe</span>
                    </Link>

                    {/* Tampilan Desktop */}
                    <DesktopView 
                        onOpenCart={() => actions.setShowCart(true)}
                        onOpenInfo={() => actions.setShowInfoModal(true)}
                    />

                    {/* Tampilan Mobile */}
                    <MobileView 
                        isOpen={state.isSidebarOpen}
                        setIsOpen={actions.setIsSidebarOpen}
                        onOpenCart={() => actions.setShowCart(true)}
                        onOpenInfo={() => actions.setShowInfoModal(true)}
                    />
                </div>
            </nav>

            {/* Modals & Drawers */}
            <InfoModal 
                isOpen={state.showInfoModal} 
                onClose={() => actions.setShowInfoModal(false)} 
            />
            
            <CartDrawer 
                isOpen={state.showCart}
                onClose={() => actions.setShowCart(false)}
            />
        </>
    );
}