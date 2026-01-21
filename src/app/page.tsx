import HeroCarousel from "@/components/ui/HeroCarousel";
import { Star } from "lucide-react";

// Data Dummy Menu Best Seller
const bestSellers = [
  { id: 1, name: "Kopi Gula Aren", price: "25K", rating: "4.9", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Croissant Butter", price: "28K", rating: "4.8", img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Matcha Latte", price: "28K", rating: "4.7", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Classic Tiramisu", price: "35K", rating: "5.0", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* 1. CAROUSEL SECTION */}
      <div className="px-4 md:px-8">
        <HeroCarousel />
      </div>

      {/* 2. BEST SELLER SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">Menu Andalan</h2>
          <p className="text-stone-500">Paling banyak dicari sama warga Mooiste</p>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl p-3 hover:shadow-xl transition duration-300 border border-stone-100">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-xl bg-gray-100">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-500 shadow-sm">
                  <Star className="w-3 h-3 fill-amber-500" /> {item.rating}
                </div>
              </div>

              {/* Info Product */}
              <div className="pt-4 px-2">
                <h3 className="text-lg font-bold text-stone-900">{item.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-stone-600 font-semibold">{item.price}</span>
                  <button className="bg-stone-900 text-white p-2 rounded-full hover:bg-stone-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}