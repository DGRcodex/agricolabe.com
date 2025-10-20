// components/about/AboutHeader.tsx
/**
 * Header for About section: title, intro and hero image.
 * Uses next/image for optimized loading and responsive layout.
 * Comments in English per project rules.
 */

import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  heroSrc?: string;
  heroAlt?: string;
};

export default function AboutHeader({ title, subtitle, heroSrc, heroAlt }: Props) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-6">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg sm:text-xl opacity-95">
            {subtitle}
          </p>
        )}

        <p className="mt-6 max-w-2xl text-base sm:text-lg">
           Trabajamos con prácticas responsables junto a pequeños productores locales, 
  priorizando frescura, sabor y consistencia en cada cosecha. Entre nuestras 
  variedades encontrarás Salanova lisa y crispy, espinaca baby y mix baby leaf,
  una mezcla de hojas tiernas como rúcula, acelga baby y asiáticas como mizuna 
  y tatsoi. 
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
          <a
            href="#productos"
            className="inline-block rounded-md px-6 py-3 bg-agricola-white text-agricola-green font-medium shadow-sm hover:opacity-95 transition"
            aria-label="Ver productos"
          >
            Ver productos
          </a>

          <a
            href="#contacto"
            className="inline-block rounded-md px-6 py-3 border border-agricola-white text-agricola-white hover:bg-agricola-white hover:text-agricola-green transition"
            aria-label="Contactar"
          >
            Contactar
          </a>
        </div>
      </div>

      <div className="lg:col-span-6">
        {heroSrc ? (
          <div className="w-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={heroSrc}
                alt={heroAlt ?? ""}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                priority={false}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
