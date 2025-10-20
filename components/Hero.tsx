"use client";

import Image from "next/image";

export default function Hero() {
  const mandalaSrc = "/hero/mandala2.svg";

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 grid items-center gap-8 md:grid-cols-12">
        {/* Mandala */}
        <div className="md:col-span-6 flex justify-start">
          <Image
            src={mandalaSrc}
            alt=""
            aria-hidden="true"
            width={900}
            height={900}
            priority
            className="w-[60vw] sm:w-[52vw] md:w-[44vw] lg:w-[40vw] max-w-[760px] md:max-w-[680px] lg:max-w-[740px] h-auto -ml-10 sm:-ml-12 md:-ml-16"
          />
        </div>

        {/* Texto */}
        <div className="md:col-span-6">
          <h1 className="font-serif tracking-tight leading-[0.95]">
            <span className="block text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px]">
              AGRÍCOLA
            </span>
            <span className="block font-extrabold leading-[0.85] text-[20vw] sm:text-[16vw] md:text-[160px] lg:text-[220px] xl:text-[260px]">
              BE
            </span>
          </h1>

          <p className="font-serif mt-6 text-[22px] sm:text-[26px] md:text-[32px]">
            Desde la Tierra.
          </p>

          <p className="max-w-2xl mt-4 text-base md:text-lg opacity-90">
            En Agrícola BE, seleccionamos hortalizas gourmet con excelente calidad e inocuidad,
            elegidas por manos expertas, para asegurar frescura, sabor y consistencia.
          </p>

          <div className="flex gap-4 pt-6">
            <a href="#productos" className="inline-block rounded-md px-5 py-2 bg-agricola-green text-agricola-white">
              Ver productos
            </a>
            <a href="#contacto" className="inline-block rounded-md px-5 py-2 border border-agricola-green text-agricola-green">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
