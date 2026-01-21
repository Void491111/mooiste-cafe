import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair", 
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mooiste Cafe",
  description: "Kopikap enak"
}

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${jakarta.classname} ${playfair.variable} antialiased bg-[FDFBF7] text-stone-800'}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}


