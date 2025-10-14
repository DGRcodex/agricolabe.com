// components/about/AboutCTA.tsx
/**
 * CTA footer for About section.
 * Uses brand palette and clear CTAs.
 */

export default function AboutCTA() {
  return (
    <div className="mt-12 rounded-2xl bg-white/6 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h4 className="font-semibold text-lg">¿Quieres que trabajemos con tu restaurante o tienda?</h4>
        <p className="mt-2 text-sm text-white/90 max-w-2xl">
          Escríbenos para hablar de volúmenes, frecuencias y condiciones. Hacemos entregas programadas y soluciones a medida.
        </p>
      </div>

      <div className="flex gap-3">
        <a
          href="#contacto"
          className="inline-block rounded-md px-5 py-3 bg-agricola-white text-agricola-green font-medium hover:opacity-95 transition"
          aria-label="Cotizar pedidos"
        >
          Cotizar pedidos
        </a>

        <a
          href="/pdfs/ficha-productos.pdf"
          className="inline-block rounded-md px-5 py-3 border border-white/30 text-sm hover:bg-white/10 transition"
          aria-label="Descargar ficha"
        >
          Descargar ficha
        </a>
      </div>
    </div>
  );
}
