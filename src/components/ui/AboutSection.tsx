export default function AboutSection() {
    return (
        <section className="bg-stone-50 mt-18">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl group">
                        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" alt="interior" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                        <div className="absolute bottom-6 right-6 bg-amber-300 p-4 rounded-xl shadow-lg max-w-[200px]">
                            <p className="font-bold text-stone-900 text-lg">Since 1975</p>
                            <p className="text-sm text-stone-700">Serving Happiness Every Cup</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-stone-900 leading-tight">
                            Lebih dari 19 juta orang melamar kerja disini
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Disini bisa nyobain Kopikap
                        </p>
                        <ul className="space-y-4 mt-4">
                            {["Free WIfi High Speed", "Mushola", "Stopkontak Dimana-mana", "Kamar Mandi Bersih", "Area Bersih"].map((item, index) => (
                                <li key={item} className="flex items-center gap-3 text-stone-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 px-8 py-3 border-2 border-stone-900 text-stone-900 rounded-full font-bold hover:bg-stone-900 hover:text-white transition duration-300">
                            Lihat Lokasi Kami
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}