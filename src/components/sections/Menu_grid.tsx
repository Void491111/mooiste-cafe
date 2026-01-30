import MenuCard from "../ui/MenuCart";
import { allMenu } from "@/data/all_menu";

export default function MenuGrid({ category, title }: { category: string, title: string }) {
  const items = allMenu.filter((item) => item.category === category);

  return (
    <section className="py-20 px-6 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto pt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-950 font-playfair mb-2">{title}</h1>
          <p className="text-stone-500">Pilihan terbaik untuk hari ini.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}