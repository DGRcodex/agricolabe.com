import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Contenido principal: sin min-h-screen; usa min-h-0 para no “empujar” */}
      <main className="flex-1 min-h-0">
        <Hero />
        <Products />
        <About />
        {/* <Testimonials /> si lo necesitas */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
