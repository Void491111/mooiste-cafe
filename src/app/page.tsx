import Footer from "@/components/ui/Footer";
import HeroCarousel from "@/components/ui/HeroCarousel";
import BestSeller from "@/components/ui/BestSeller";
import Testimonials from "@/components/ui/Testimonials";
import AboutSection from "@/components/ui/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">

      <div className="px-0 md:px-8">
        <HeroCarousel />  
      </div>  

      <BestSeller />

      <AboutSection />

      <Testimonials />

      <Footer />

    </main>
  );
}