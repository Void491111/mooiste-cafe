import { Star } from "lucide-react";

const bestSellers = [
    { id: 1, name: "Kopi Gula Aren", price: "28k", rating: "4.9", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"},
    { id: 2, name: "Kopi Gula Aren", price: "28k", rating: "4.9", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"},
    { id: 3, name: "Kopi Gula Aren", price: "28k", rating: "4.9", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"},
    { id: 4, name: "Kopi Gula Aren", price: "28k", rating: "4.9", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600"},
];

export default function BestSeller() {
    return (
        <section className="max-w-7xl mx-auto px-6 mt-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">Signature</h2>
                <p className="text-stone-900">Mooiste Cafe</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {bestSellers.map((item) => (
                    <div key={item.id} className="group bg-white rounded-2xl p-3 hover:shadow-xl transition duration-300 border border-stone-100">
                        <div className="relative h-64 overflow-hidden rounded-2xl bg-gray-100">
                            <img
                                 src={item.img}
                                 alt={item.name}
                                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />

                            <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-500 shadow-sm">
                                <Star className="w-3 h-3 fill-amber-500" />
                                    {item.rating}
                            </div>
                        </div>

                        <div className="mt-4 px-2">
                            <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                            <p className="text-stone-600">{item.price}</p>  
                        </div>
                </div>
                ))}
            </div>
        </section>
    );
}