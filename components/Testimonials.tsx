export default function Testimonials() {
    return (
      <section id="testimonials" className="py-16 px-6 md:px-20 bg-green-50">
        <h3 className="text-3xl font-bold mb-6">Testimonios</h3>
        <div className="space-y-6">
          <blockquote className="p-6 border-l-4 border-green-600 italic">
            “Excelente calidad y servicio. Agrícola BE es un socio confiable.”
            <span className="block mt-2 font-semibold">– Cliente A</span>
          </blockquote>
          <blockquote className="p-6 border-l-4 border-green-600 italic">
            “La frescura de sus productos marca la diferencia.”
            <span className="block mt-2 font-semibold">– Cliente B</span>
          </blockquote>
        </div>
      </section>
    );
  }
  