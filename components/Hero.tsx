// components/Hero.tsx
export default function Hero() {
    return (
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 grid items-center gap-8 md:grid-cols-12">
          {/* Izquierda: flor grande */}
          <div className="md:col-span-5 flex justify-start">
            <img
              src="/logo-floral.svg"
              alt="Agrícola BE"
              className="w-[180px] sm:w-[240px] md:w-[320px] lg:w-[380px] h-auto"
            />
          </div>
  
          {/* Derecha: AGRÍCOLA + BE + texto */}
          <div className="md:col-span-7">
            <h1 className="font-serif tracking-tight leading-[0.95]">
              <span className="block text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px]">
                AGRÍCOLA
              </span>
              <span className="block font-extrabold leading-[0.85]
                               text-[20vw] sm:text-[16vw] md:text-[160px] lg:text-[220px] xl:text-[260px]">
                BE
              </span>
            </h1>
  
            <p className="font-serif mt-6 text-[22px] sm:text-[26px] md:text-[32px]">
              Desde la Tierra. Selección viva. <br /> Calidad real.
            </p>
  
            <p className="max-w-2xl mt-4 text-base md:text-lg opacity-90">
              En BE, cultivamos seleccionar alimentos con conexión honesta a la tierra
              y trabajo dedicadoso para restaurantes, distribuidores y tiendas especializadas.
            </p>
  
            <div className="flex gap-4 pt-6">
              <a
                href="#productos"
                className="inline-block rounded-md px-5 py-2 bg-agricola-green text-agricola-white hover:opacity-90 transition"
              >
                Ver productos
              </a>
              <a
                href="#contacto"
                className="inline-block rounded-md px-5 py-2 border border-agricola-green text-agricola-green hover:bg-agricola-green hover:text-agricola-white transition"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
  
        {/* Curva inferior que engancha con la sección verde */}
        <svg
          className="absolute bottom-[-1px] left-0 w-full h-28 md:h-40"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,120 C360,200 900,0 1440,120 L1440,200 L0,200 Z"
            fill="var(--color-agricola-green)"
          />
        </svg>
      </section>
    );
  }
  