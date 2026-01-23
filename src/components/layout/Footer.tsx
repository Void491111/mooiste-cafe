import { Facebook, Instagram, Twitter, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    // UBAH 1: Padding atas-bawah dikecilin (py-6 bukan py-8 atau py-16)
    <footer className="bg-stone-900 text-stone-300 py-6 md:py-12 border-t border-stone-800 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* UBAH 2: Gap dikecilin jadi gap-6 biar gak renggang banget */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 text-center md:text-left">
          
          {/* 1. Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">Mooiste<span className="text-amber-500">Cafe</span></h3>
            <p className="text-stone-400 text-xs leading-relaxed">
              Tempat di mana kopi bertemu inspirasi.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-1">
              <a href="#" className="hover:text-amber-500 transition"><Instagram size={18} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Twitter size={18} /></a>
              <a href="#" className="hover:text-amber-500 transition"><Facebook size={18} /></a>
            </div>
          </div>

          {/* 2. Explore (Di HP bisa disembunyiin kalau mau lebih pendek lagi, tapi ini kita kecilin aja) */}
          <div>
            <h4 className="text-white font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#" className="hover:text-amber-500">Home</a></li>
              <li><a href="#" className="hover:text-amber-500">Our Menu</a></li>
              <li><a href="#" className="hover:text-amber-500">Story</a></li>
            </ul>
          </div>

          {/* 3. Jam Buka */}
          <div>
            <h4 className="text-white font-bold mb-3">Jam Buka</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex justify-center md:justify-between gap-4">
                <span>Senin - Jumat</span>
                <span className="text-white">08:00 - 22:00</span>
              </li>
              <li className="flex justify-center md:justify-between gap-4">
                <span>Sabtu - Minggu</span>
                <span className="text-white">09:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div>
            <h4 className="text-white font-bold mb-3">Kontak</h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex justify-center md:justify-start gap-2 items-center">
                <MapPin size={14} className="text-amber-500 shrink-0" />
                <span>Jl. Senopati No. 88, Jkt</span>
              </li>
              <li className="flex justify-center md:justify-start gap-2 items-center">
                <Phone size={14} className="text-amber-500 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-stone-800 mt-6 pt-6 text-center text-xs text-stone-600">
          <p>&copy; 2026 Mooiste Cafe. Built with ☕ by Boss.</p>
        </div>
      </div>
    </footer>
  );
}