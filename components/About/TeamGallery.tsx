// components/about/CoopPartnerCard.tsx
"use client";

/**
 * Card de aliado: Cooperativa Agrícola de Lampa
 * - Incluye separador superior integrado para dar respiro entre secciones.
 * - Logo fijo desde /public/about/logocooperativa.jpeg.
 * - Fondo opcional (puedes activar uno real si lo subes a /public/about/fondo-campo.jpg).
 * - Accesible y responsivo.
 */

import Image from "next/image";

export default function CoopPartnerCard() {
  return (
    <>
      {/* Separador superior */}
      <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10" />

      <section
        aria-label="Alianza con Cooperativa Agrícola de Lampa"
        className="relative isolate overflow-hidden rounded-2xl border border-white/10 mt-12 sm:mt-16 lg:mt-24 scroll-mt-28"
      >
        {/* Fondo opcional — si tienes una foto de campo en /public/about/fondo-campo.jpg, descomenta las siguientes líneas */}
        {false ? (
          <div className="absolute inset-0 -z-10">
            <Image
              src="/about/fondo-campo.jpg"
              alt="Campo agrícola en Lampa"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 p-6 sm:p-8">
          {/* Logo con plaquita blanca */}
          <figure className="mx-auto md:mx-0 w-40 sm:w-48">
            <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
              <Image
                src="/about/logocooperativa.jpeg"
                alt="Logo Cooperativa Agrícola de Lampa"
                width={512}
                height={512}
                className="w-full h-auto"
                priority
              />
            </div>
            <figcaption className="sr-only">
              Cooperativa Agrícola de Lampa
            </figcaption>
          </figure>

          {/* Texto institucional */}
          <div className="flex flex-col justify-center text-white">
            <h3 className="font-serif text-2xl sm:text-3xl tracking-tight">
              Cooperativa Agrícola de Lampa
            </h3>
            <p className="mt-3 text-sm sm:text-base max-w-2xl leading-relaxed text-white/95">
                Agrícola BE forma parte de la 
    Cooperativa Agrícola de Lampa. Trabajamos en conjunto por el desarrollo 
    agrícola de la comuna, con el objetivo de fortalecer el rubro e inspirar a 
    futuras generaciones. 
            </p>
            <p className="mt-2 text-xs sm:text-sm text-white/80">COOPAGRILAMP</p>
          </div>
        </div>
      </section>
    </>
  );
}
