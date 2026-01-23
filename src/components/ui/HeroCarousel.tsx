"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1920",
    title: "Nikmati Kopi Terbaik",
    desc: "Biji kopi pilihan untuk inspirasi harimu."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920",
    title: "Suasana Nyaman",
    desc: "Tempat perfect buat nugas."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=1920",
    title: "Pastry Fresh Oven",
    desc: "Teman setia secangkir kopimu."
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
        nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[50vh] md:h-[600px] w-full m-auto relative group mt-28 md:mt-32"> 
      
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-none md:rounded-2xl bg-center bg-cover duration-500 ease-in-out relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/40 md:rounded-2xl"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 drop-shadow-lg leading-tight">
                {slides[currentIndex].title}
            </h1>
            <p className="text-sm md:text-2xl font-light drop-shadow-md opacity-90">
                {slides[currentIndex].desc}
            </p>
            <button className="mt-4 md:mt-8 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-stone-900 hover:bg-stone-700 text-white rounded-full font-medium transition duration-300 shadow-lg border border-stone-700">
                Order Sekarang
            </button>
        </div>
      </div>

      <div className="hidden md:block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden md:block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center py-2 gap-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all duration-300 h-1.5 rounded-full shadow-sm ${
                currentIndex === slideIndex ? "bg-white w-6" : "bg-white/50 w-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}