import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[40vh] flex items-center relative overflow-hidden pt-24">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Terminos y condiciones
          </h1>
        </div>
      </section>

      {/* Content Section */}
      
      <Footer />
    </div>
  );
}
