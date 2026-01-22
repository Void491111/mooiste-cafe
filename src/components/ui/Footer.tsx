import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* 1. Brand & Tagline */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Mooiste<span className="text-amber-500">Cafe</span></h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Tempat di mana kopi bertemu inspirasi. Nikmati momen terbaikmu bersama kami setiap hari.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-amber-500 transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Facebook size={20} /></a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Our Menu</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Story</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Career</a></li>
            </ul>
          </div>

          {/* 3. Operational Hours */}
          <div>
            <h4 className="text-white font-bold mb-6">Jam Buka</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu - Minggu</span>
                <span className="text-white">09:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <span>Jl. Senopati No. 88, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>hello@mooiste.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Mooiste Cafe. All rights reserved. Built with ☕ by Boss.</p>
        </div>
      </div>
    </footer>
  );
}