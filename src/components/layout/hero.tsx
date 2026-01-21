import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative w-full min-h-90vh flex items-center pt-20 overflow-hidden">
            <div className="absolute top-0 right-0 w-500px h-500px bg-amber-200/20 rounded-full blur-3xl -z-10"/>
            <div className="absolute bottom-0 left-0 w-500px h-500px bg-emerald-100/30 rounded-full blur-3xl -z-10"/>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-800 font-semibold">
                        Best Coffee In Town😋
                    </div>

                    <h1 className="font-playfair text-xl lg:text-7xl font-bold leading-tight text-emerald-950">
                        Rasakan <span className="text-emerald-700 italic">Aroma</span> <br />
                        Kopi Sejati.
                    </h1>

                    <p className="text-lg text-stone-500 max-w-md loading-relaxed">
                        Kami menyeduh biji kopi pilihan dari petani lokal dengan teknik roasting modern untuk cita rasa yang tak terkalahkan
                    </p>

                    <div className="flex gap-4">
                        <Link href="/menu">
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-8 border-t border-stone-200">
                        <div>
                            <p className="text-3xl font-bold text-emerald-900">5k+</p>
                            <p className="text-sm text-stone-500">Rating Reviews</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 hidden lg:block">
                    <div className="relative-w-450px h-550px mx-auto">
                        <div className="absolute inset-0 bg-emerald-900 rounded-40px overflow-hidden shadow-2xl border-4 border-white">
                        <Image 
                            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
                            alt="Coffee Hero"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>

                        <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow">
                            <div>
                                <p className="font-bold text-stone-800">Free Pastry</p> 
                                <p className="text-xs text-stone-500">Every Breath You Take</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;