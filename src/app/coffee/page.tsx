import Navbar from "@/components/navbar";
import MenuGrid from "@/components/sections/Menu_grid";

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <div className="pt-24">
        <MenuGrid 
          category="coffee" 
          title="Coffee Collection" 
        />
      </div>
    </main>
  );
}