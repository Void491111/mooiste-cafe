"use client"

import { useState, useEffect } from "react";

export default function useNavbarLogic() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        if (isSidebarOpen || showInfoModal || showCart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => { document.body.style.overflow = ''; };
    }, [isSidebarOpen, showInfoModal, showCart]);

    return {
        state: { isSidebarOpen, showInfoModal, showCart },
        actions: { setIsSidebarOpen, setShowInfoModal, setShowCart }
    };
}