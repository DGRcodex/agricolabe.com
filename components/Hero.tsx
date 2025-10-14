export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 grid items-center gap-8 md:grid-cols-12">
        <div className="md:col-span-5 flex justify-start">
          <img src="/logo-floral.svg" alt="Agrícola BE" className="w-[180px] sm:w-[240px] md:w-[320px] lg:w-[380px] h-auto" />
        </div>
        <div className="md:col-span-7">
          <h1 className="font-serif tracking-tight leading-[0.95]">
            <span className="block text-[48px] sm:text-[64px] md:text-[96px] lg:text-[112px]">AGRÍCOLA</span>
            <span className="block font-extrabold leading-[0.85] text-[20vw] sm:text-[16vw] md:text-[160px] lg:text-[220px] xl:text-[260px]">BE</span>
          </h1>
          <p className="font-serif mt-6 text-[22px] sm:text-[26px] md:text-[32px]">Desde la Tierra. Selección viva. <br/> Calidad real.</p>
          <p className="max-w-2xl mt-4 text-base md:text-lg opacity-90">En BE, cultivamos seleccionar alimentos con conexión honesta a la tierra y trabajo dedicadoso para restaurantes, distribuidores y tiendas especializadas.</p>
          <div className="flex gap-4 pt-6">
            <a href="#productos" className="inline-block rounded-md px-5 py-2 bg-agricola-green text-agricola-white">Ver productos</a>
            <a href="#contacto" className="inline-block rounded-md px-5 py-2 border border-agricola-green text-agricola-green">Contactar</a>
          </div>
        </div>
      </div>
  
    </section>
  );
}
