// components/Hero.tsx
export default function Hero() {
    return (
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2">
          {/* Izquierda: logo + títulos + copy */}
          <div className="space-y-6">
            {/* Logo floral (usa /logo-floral.svg del public) */}
            <img src="/logo-floral.svg" alt="Agrícola BE" className="w-28 h-28" />
  
            {/* AGRÍCOLA BE */}
            <h1 className="font-serif tracking-tight leading-none">
              <span className="block text-5xl md:text-6xl">AGRÍCOLA</span>
              <span className="block text-[64px] md:text-[112px] font-extrabold">BE</span>
            </h1>
  
            {/* Claim */}
            <p className="font-serif text-2xl md:text-3xl">
              Desde la Tierra. Selección viva. <br /> Calidad real.
            </p>
  
            {/* Descripción */}
            <p className="max-w-xl text-base md:text-lg opacity-90">
              En BE, cultivamos seleccionar alimentos con conexión honesta a la
              tierra y trabajo dedicadoso para restaurantes, distribuidores y
              tiendas especializadas.
            </p>
  
            {/* Botones */}
            <div className="flex gap-4 pt-2">
              <a
                className="inline-block rounded-md px-5 py-2 text-white"
                style={{ backgroundColor: "var(--be-green)" }}
                href="#productos"
              >
                Ver productos
              </a>
              <a
                className="inline-block rounded-md px-5 py-2 border"
                style={{ borderColor: "var(--be-green)", color: "var(--be-green)" }}
                href="#contacto"
              >
                Contactar
              </a>
            </div>
          </div>
  
          {/* Derecha: espacio reservado para imagen futura */}
          <div className="min-h-[280px] md:min-h-[360px]"></div>
        </div>
  
        {/* Separador curvo hacia arriba que conecta con la sección verde */}
        <svg
          className="absolute bottom-[-1px] left-0 w-full h-32 md:h-44"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Curva ascendente de izquierda a derecha */}
          <path
            d="M0,120 C360,200 900,0 1440,120 L1440,200 L0,200 Z"
            fill="var(--be-green)"
          />
        </svg>
      </section>
    );
  }
  