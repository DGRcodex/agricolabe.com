// components/about/CoopPartnerCard.tsx
"use client";

import Image from "next/image";

export default function CoopPartnerCard() {
  return (
    <>
      {/* Separador superior */}
      <div className="mt-12 sm:mt-16 lg:mt-20 border-t border-white/10" />

      <section
        aria-label="Alianza con Cooperativa Agrícola de Lampa"
        className="relative isolate overflow-hidden rounded-2xl border border-white/10 mt-12 sm:mt-16 lg:mt-24 scroll-mt-28 md:min-h-[360px]"
      >
        {/* Fondo */}
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

        {/* Imagen derecha (solo desktop), ocupa el espacio verde */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-[38%] h-[calc(100%-3rem)]">
          <div className="relative h-full rounded-xl overflow-hidden shadow-sm ring-1 ring-black/10">
            <Image
              src="/about/cooperativa.jpeg"
              alt="Cooperativa Agrícola de Lampa"
              fill
              sizes="33vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Contenido original (sin cambios en estructura). 
           Solo agrego padding-right en md+ para no chocar con la imagen absoluta */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 p-6 sm:p-8 md:pr-[calc(38%+1.5rem)]">
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

            {/* Imagen en mobile: debajo del texto */}
            <div className="md:hidden mt-4">
              <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/about/cooperativa.jpeg"
                  alt="Cooperativa Agrícola de Lampa"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
