import { Star, Quote } from "lucide-react"; // ✅ JANGAN LUPA IMPORT QUOTE

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Kata Warga Mooiste</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">
            Cerita mereka yang sudah menjadikan Mooiste rumah kedua.
          </p>
        </div>

        {/* Grid Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Review Card 1 */}
          <div className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <Quote className="absolute top-6 right-8 text-amber-200 w-10 h-10 rotate-180" />
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-stone-700 mb-6 italic leading-relaxed">
              "Jujurly kopi gula arennya one of the best di kota ini. Ambience-nya dapet banget buat nugas skripsi, playlist lagunya juga gak ganggu. Bakal balik lagi fix!"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                alt="User 1" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Sarah Amalia</h4>
                <p className="text-xs text-stone-500">Mahasiswi</p>
              </div>
            </div>
          </div>

          {/* Review Card 2 (Highlight Dark) */}
          <div className="bg-stone-900 p-8 rounded-2xl relative shadow-2xl hover:-translate-y-2 transition duration-300 transform scale-105 md:scale-110 z-10">
            <Quote className="absolute top-6 right-8 text-stone-700 w-10 h-10 rotate-180" />
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-stone-300 mb-6 italic leading-relaxed">
              "Croissant-nya juara dunia! Renyah di luar lembut di dalam. Pelayanannya ramah banget, wifi kenceng buat meeting online. Recommended parah."
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                alt="User 2" 
                className="w-12 h-12 rounded-full object-cover border-2 border-stone-700 shadow-md"
              />
              <div>
                <h4 className="font-bold text-white text-sm">Budi Santoso</h4>
                <p className="text-xs text-stone-400">Freelancer</p>
              </div>
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <Quote className="absolute top-6 right-8 text-amber-200 w-10 h-10 rotate-180" />
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-stone-700 mb-6 italic leading-relaxed">
              "Tempat hidden gem yang asik buat deep talk sama pasangan. Minuman non-coffee nya juga enak-enak. Toilet bersih banget, nilai plus!"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                alt="User 3" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
              />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Jessica Tan</h4>
                <p className="text-xs text-stone-500">Food Blogger</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}