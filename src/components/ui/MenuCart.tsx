"use client";
import Image from "next/image";
import { Plus, Star } from "lucide-react";

export default function MenuCard({ item }: { item: any }) {
  return (
    <div className="group bg-white rounded-2xl p-3 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-stone-100">
        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
          <span className="text-xs font-bold">{item.rating}</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-bold text-stone-900 text-lg line-clamp-1">{item.name}</h3>
        <p className="text-stone-500 text-sm mb-3 line-clamp-2">{item.desc}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <p className="font-bold text-emerald-900">Rp {item.price.toLocaleString("id-ID")}</p>
          <button 
            onClick={() => alert(`Ditambahkan: ${item.name} (Pura-pura masuk cart dulu boss)`)}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-emerald-900 hover:text-white flex items-center justify-center transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}