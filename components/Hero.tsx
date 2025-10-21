// components/Hero.tsx
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
      <div className="mx-auto max-w-7xl px-6 py-16 grid items-center gap-6 md:gap-8 md:grid-cols-12">
        {/* Mandala DESKTOP: alineado hacia el texto con tamaño estable */}
       <div className="hidden md:flex md:col-span-6 justify-end md:pr-6 lg:pr-10">
  <Image
    src={mandalaSrc}
    alt=""
    aria-hidden="true"
    width={900}
    height={900}
    priority
    data-testid="mandala-hero"
    className="
      h-auto
      !w-[clamp(520px,42vw,780px)] lg:!w-[clamp(600px,40vw,900px)]
      max-w-none
      transform origin-right md:scale-[1.10] lg:scale-[1.12]
    "
  />
</div>

        {/* Texto */}
        <div className="md:col-span-6">
          {/* Título en Geist Sans */}
          <h1 className="font-georgiaPro tracking-tight leading-[0.95] text-center md:text-left">
            <span className="block text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px]">
              AGRÍCOLA
            </span>
            <span className="block font-extrabold leading-[0.85] text-[20vw] sm:text-[16vw] md:text-[160px] lg:text-[220px] xl:text-[260px]">
              BE
            </span>
          </h1>

          {/* Mandala MOBILE: debajo del título, centrado */}
  {/* Mandala MOBILE: también más grande */}
<div className="mt-4 flex justify-center md:hidden">
  <Image
    src={mandalaSrc}
    alt=""
    aria-hidden="true"
    width={300}
    height={300}
    priority
    className="
      h-auto
      !w-64 sm:!w-72
      transform origin-center scale-[1.12]
    "
  />
</div>


          <p className="font-georgiaPro mt-6 text-[22px] sm:text-[26px] md:text-[32px] text-center md:text-left">
            Desde la Tierra.
          </p>

          <p className="font-georgiaPro  max-w-2xl mt-4 text-base md:text-lg opacity-90 mx-auto md:mx-0 text-center md:text-left">
            En Agrícola BE, seleccionamos hortalizas gourmet con excelente calidad e inocuidad,
            elegidas por manos expertas, para asegurar frescura, sabor y consistencia.
          </p>

          <div className="flex gap-4 pt-6 justify-center md:justify-start">
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
