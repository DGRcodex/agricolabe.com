import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
