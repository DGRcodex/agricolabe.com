// components/about/AboutValues.tsx
/**
 * Values, mission and quick stats block.
 * Visual hierarchy follows the brand typography and palette.
 */

export default function AboutValues() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="font-semibold text-xl">Nuestra misión</h3>
        <p className="mt-3 text-sm md:text-base text-white/90 leading-relaxed">
          Promover alimentos sanos y sabores verdaderos, conectando productores responsables con chefs
          y tiendas que valoran la trazabilidad y la calidad.
        </p>

        <ul className="mt-4 space-y-2 text-sm list-none pl-0">
          <li className="flex items-start gap-3"><span className="text-agricola-white/80">•</span> Prácticas regenerativas y respeto por la biodiversidad.</li>
          <li className="flex items-start gap-3"><span className="text-agricola-white/80">•</span> Selección manual y controles de calidad estrictos.</li>
          <li className="flex items-start gap-3"><span className="text-agricola-white/80">•</span> Comercio justo y relaciones directas con productores.</li>
        </ul>
      </div>

      <div className="rounded-xl bg-white/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-xl">Impacto</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl font-extrabold">+120</div>
              <div className="text-sm opacity-90">Toneladas entregadas / año</div>
            </div>

            <div>
              <div className="text-3xl font-extrabold">+45</div>
              <div className="text-sm opacity-90">Productores asociados</div>
            </div>

            <div>
              <div className="text-3xl font-extrabold">90%</div>
              <div className="text-sm opacity-90">Reducción de desperdicio</div>
            </div>

            <div>
              <div className="text-3xl font-extrabold">100%</div>
              <div className="text-sm opacity-90">Trazabilidad por lote</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="font-semibold text-xl">Calidad y certificaciones</h3>
        <p className="mt-3 text-sm md:text-base text-white/90">
          Aplicamos estándares de inocuidad y buenas prácticas. Priorizamos procedimientos auditables
          y documentación clara por lote.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded">
            <img src="/organico.jpg" alt="Orgánico" className="w-8 h-8" loading="lazy" />
            <span className="text-sm">Orgánico</span>
          </div>

          <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded">
            <img src="/trazabilidad.jpg" alt="Trazabilidad" className="w-8 h-8" loading="lazy" />
            <span className="text-sm">Trazabilidad</span>
          </div>

          <div className="flex items-center gap-2 bg-white/6 px-3 py-2 rounded">
            <img src="/justo.jpg" alt="Comercio justo" className="w-8 h-8" loading="lazy" />
            <span className="text-sm">Comercio justo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
