
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[#2C1810]">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
           src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop"
           alt="Coffee Beans"
           fill
           className="object-cover blur-[2px]"
        />
      </div>

      
      
    </main>
  );
}