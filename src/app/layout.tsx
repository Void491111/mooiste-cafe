import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mooiste Cafe",
  description: "Best Coffee in Town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 1. KUNCI PERTAMA: Tambah "min-h-screen flex flex-col" di sini */}
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        
        <Navbar />
        
        {/* 👇 2. KUNCI KEDUA: Bungkus children pake "flex-1" */}
        {/* Ini perintah buat konten: "Isi semua ruang kosong yang tersisa!" */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}