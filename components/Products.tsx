// components/Products.tsx
"use client";

/**
 * Products list with:
 * - Filter by season (all / in-season)
 * - Sort by newest / oldest
 * - Pagination: 6 items per page with "Mostrar 6 siguientes" button
 *
 * Comments in English. Uses Tailwind design tokens from the project.
 */

import { useMemo, useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  inSeason?: boolean;
  createdAt: string; // ISO date string
};

// Example product dataset (replace or fetch from your API)
const SAMPLE_PRODUCTS: Product[] = [
  { id: "p1", name: "Tomate Heirloom", description: "Tomates maduros, sabor intenso.", image: "/products/tomate.jpg", inSeason: true, createdAt: "2025-08-01" },
  { id: "p2", name: "Zanahoria Baby", description: "Dulce y crujiente, ideal para ensaladas.", image: "/products/zanahoria.jpg", inSeason: true, createdAt: "2025-07-20" },
  { id: "p3", name: "Lechuga Romana", description: "Hojas frescas y crujientes.", image: "/products/lechuga.jpg", inSeason: false, createdAt: "2025-03-15" },
  { id: "p4", name: "Ajo Morado", description: "Ajo con aroma profundo.", image: "/products/ajo.jpg", inSeason: false, createdAt: "2024-11-05" },
  { id: "p5", name: "Cebolla de Campo", description: "Sabor pleno para sofritos.", image: "/products/cebolla.jpg", inSeason: true, createdAt: "2025-06-10" },
  { id: "p6", name: "Papas Andinas", description: "Variedades antiguas, textura firme.", image: "/products/papas.jpg", inSeason: true, createdAt: "2025-05-02" },
  // more sample entries so pagination can be tested:
  { id: "p7", name: "Albahaca Fresca", description: "Aroma intenso, perfecta para salsas.", image: "/products/albahaca.jpg", inSeason: true, createdAt: "2025-08-05" },
  { id: "p8", name: "Rábanos", description: "Picante y crocante.", image: "/products/rabanos.jpg", inSeason: false, createdAt: "2024-10-10" },
  { id: "p9", name: "Zapallo", description: "Pulpa dulce para guisos.", image: "/products/zapallo.jpg", inSeason: false, createdAt: "2024-09-01" },
  { id: "p10", name: "Pimentón", description: "Colores y textura para platos.", image: "/products/pimenton.jpg", inSeason: true, createdAt: "2025-07-01" },
  { id: "p11", name: "Espinaca", description: "Hojas tiernas para saltear.", image: "/products/espinaca.jpg", inSeason: true, createdAt: "2025-06-18" },
  { id: "p12", name: "Betarraga", description: "Sabor terroso y color intenso.", image: "/products/betarraga.jpg", inSeason: false, createdAt: "2024-12-12" },
  // add more to test more pages...
];

const PAGE_SIZE = 6;

export default function Products() {
  const [filter, setFilter] = useState<"all" | "in-season">("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(0); // zero-based pages of size PAGE_SIZE

  // derive filtered + sorted list
  const processed = useMemo(() => {
    let list = [...SAMPLE_PRODUCTS];

    // filter
    if (filter === "in-season") {
      list = list.filter((p) => p.inSeason);
    }

    // sort by createdAt
    list.sort((a, b) => {
      const ta = new Date(a.createdAt).getTime();
      const tb = new Date(b.createdAt).getTime();
      return sort === "newest" ? tb - ta : ta - tb;
    });

    return list;
  }, [filter, sort]);

  const pageCount = Math.ceil(processed.length / PAGE_SIZE);

  // slice for current page
  const visible = processed.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function nextPage() {
    setPage((p) => (p + 1 < pageCount ? p + 1 : p));
  }
  function prevPage() {
    setPage((p) => (p - 1 >= 0 ? p - 1 : p));
  }

  // reset page when filter or sort changes
  function setFilterReset(f: "all" | "in-season") {
    setFilter(f);
    setPage(0);
  }
  function setSortReset(s: "newest" | "oldest") {
    setSort(s);
    setPage(0);
  }

  return (
    <section id="products" className="py-16 px-6 md:px-20 bg-gray-50">
      {/* header controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-3xl font-serif font-semibold mb-1">Nuestros Productos</h3>
          <p className="text-sm text-gray-600">Selecciona por temporada o por orden de publicación.</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Season filter */}
          <div className="inline-flex items-center gap-2 bg-white rounded-md p-1 shadow-sm">
            <button
              className={`px-3 py-2 text-sm rounded-md ${filter === "all" ? "bg-agricola-green text-agricola-white" : "text-gray-700"}`}
              onClick={() => setFilterReset("all")}
              aria-pressed={filter === "all"}
            >
              Todos
            </button>
            <button
              className={`px-3 py-2 text-sm rounded-md ${filter === "in-season" ? "bg-agricola-green text-agricola-white" : "text-gray-700"}`}
              onClick={() => setFilterReset("in-season")}
              aria-pressed={filter === "in-season"}
            >
              En temporada
            </button>
          </div>

          {/* Sort control */}
          <div className="inline-flex items-center gap-2 bg-white rounded-md p-1 shadow-sm">
            <label className="sr-only">Orden</label>
            <button
              onClick={() => setSortReset(sort === "newest" ? "oldest" : "newest")}
              className="px-3 py-2 text-sm rounded-md"
              aria-label="Toggle sort order"
            >
              {sort === "newest" ? "Más recientes" : "Más antiguos"}
            </button>
          </div>
        </div>
      </div>

      {/* grid of products */}
      <div className="grid md:grid-cols-3 gap-8">
        {visible.map((p) => (
          <article key={p.id} className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-white">
            <div className="w-full h-40 relative rounded-md overflow-hidden mb-4 bg-gray-100">
              {p.image ? (
                <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 33vw" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
              )}
            </div>

            <h4 className="font-semibold mb-2 text-agricola-green">{p.name}</h4>
            <p className="text-sm text-gray-700 mb-4">{p.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{p.inSeason ? "En temporada" : "Fuera de temporada"}</span>
              <button
                className="inline-block rounded-md px-3 py-1 text-sm border border-agricola-green text-agricola-green hover:bg-agricola-green hover:text-agricola-white transition"
                onClick={() => {
                  // placeholder: open product modal / page
                  // replace with routing or modal logic
                  alert(`${p.name} — Ver detalles`);
                }}
              >
                Ver
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* pagination controls */}
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="px-3 py-2 rounded-md border bg-white text-gray-700 disabled:opacity-50"
            disabled={page === 0}
            aria-label="Página anterior"
          >
            ← Anterior
          </button>

          <button
            onClick={nextPage}
            className="px-3 py-2 rounded-md border bg-white text-gray-700 disabled:opacity-50"
            disabled={page + 1 >= pageCount}
            aria-label="Siguiente página"
          >
            Siguiente →
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Página {page + 1} de {Math.max(1, pageCount)}</span>

          {/* "Show next 6" button (explicit) */}
          <button
            onClick={nextPage}
            className="ml-2 inline-block rounded-md px-4 py-2 bg-agricola-green text-agricola-white text-sm hover:opacity-95 transition"
            disabled={page + 1 >= pageCount}
          >
            Mostrar 6 siguientes
          </button>
        </div>
      </div>
    </section>
  );
}
