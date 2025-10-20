// components/Products.tsx
"use client";

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

const SAMPLE_PRODUCTS: Product[] = [
 {
   id: "prd-mix-baby-leaf",
   name: "Mix Baby Leaf",
   description:
     "Mezcla de hojas tiernas: lechugas baby, espinaca baby, rúcula, acelga baby y asiáticas (mizuna, tatsoi). Texturas y sabores entre dulces, amargos y un picor agradable.",
   image: "/products/mixbabyleaf.png", // existe: baby-leaf.jpg
   inSeason: true,
   createdAt: "2025-08-15",
 },
 {
   id: "prd-espinaca-baby",
   name: "Espinaca Baby",
   description:
     "Hoja pequeña y redondeada, de sabor suave y dulce. Ideal para ensaladas.",
   image: "/products/espinacababy2.png", // existe: espinaca-baby.JPEG
   inSeason: true,
   createdAt: "2025-08-10",
 },
 {
   id: "prd-salanova-crispy-verde",
   name: "Lechuga Salanova Crispy (Verde)",
   description: "Versión crujiente de Salanova: firme y muy crocante.",
   image: "/products/LECHUGA-CRISPY-VERDE.JPEG", // existe: LECHUGA-CRISPY-VERDE.JPEG
   inSeason: true,
   createdAt: "2025-08-08",
 },
 {
   id: "prd-salanova-lisa",
   name: "Lechuga Salanova Lisa",
   description:
     "Lechuga suave y mantecosa en su versión lisa.",
   image: "/products/lechugasalanovalisa.png", // existe: lechugasalanovalisa.png
   inSeason: true,
   createdAt: "2025-08-07",
 },
 {
   id: "prd-espanola-verde",
   name: "Lechuga Española (Verde)",
   description:
     "Hojas alargadas, crujientes y de color verde brillante, con nervio central prominente. Sabor fresco y ligeramente dulce.",
   image: "/products/LECHUGA-ESPANOLA-VERDE.JPEG", // existe: LECHUGA-ESPANOLA-VERDE.JPEG
   inSeason: true,
   createdAt: "2025-08-05",
 },
 {
   id: "prd-espanola-roja",
   name: "Lechuga Española (Roja)",
   description:
     "Variante rojiza de la Española, crujiente y fresca con notas ligeramente dulces.",
   image: "/products/LECHUGA-ESPANOLA-ROJA.JPEG", // existe: LECHUGA-ESPANOLA-ROJA.JPEG
   inSeason: true,
   createdAt: "2025-08-04",
 },
 {
   id: "prd-roble-verde",
   name: "Lechuga Roble (Verde)",
   description:
     "Hojas rizadas y lobuladas, textura tierna y mantecosa, sabor suave y ligeramente dulce.",
   image: "/products/roble-verde.JPEG", // existe: roble-verde.JPEG
   inSeason: true,
   createdAt: "2025-08-03",
 },
 {
   id: "prd-roble-roja",
   name: "Lechuga Roble (Roja)",
   description:
     "Variante roja de Roble, con la misma textura tierna y sabor suave.",
   image: "/products/roble-roja.JPEG", // existe: roble-roja.JPEG
   inSeason: true,
   createdAt: "2025-08-02",
 },
 {
   id: "prd-lollo-bionda",
   name: "Lechuga Lollo Bionda",
   description:
     "Hojas sueltas y rizadas de verde claro, sabor suave y textura crujiente.",
   image: "/products/LECHUGA-LOLLO-BIONDA.JPEG", // existe: LECHUGA-LOLLO-BIONDA.JPEG
   inSeason: true,
   createdAt: "2025-08-01",
 },
];



const PAGE_SIZE = 6;

export default function Products() {
  const [filter, setFilter] = useState<"all" | "in-season">("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [page, setPage] = useState(0);

  const processed = useMemo(() => {
    let list = [...SAMPLE_PRODUCTS];
    if (filter === "in-season") list = list.filter((p) => p.inSeason);
    list.sort((a, b) => {
      const ta = new Date(a.createdAt).getTime();
      const tb = new Date(b.createdAt).getTime();
      return sort === "newest" ? tb - ta : ta - tb;
    });
    return list;
  }, [filter, sort]);

  const pageCount = Math.ceil(processed.length / PAGE_SIZE);
  const visible = processed.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  function nextPage() { setPage((p) => (p + 1 < pageCount ? p + 1 : p)); }
  function prevPage() { setPage((p) => (p - 1 >= 0 ? p - 1 : p)); }
  function setFilterReset(f: "all" | "in-season") { setFilter(f); setPage(0); }
  function setSortReset(s: "newest" | "oldest") { setSort(s); setPage(0); }

  return (
    <section id="productos" className="py-16 px-6 md:px-20 bg-gray-50 scroll-mt-24">
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
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
                onClick={() => alert(`${p.name} — Ver detalles`)}
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
          <span className="text-sm text-gray-600">
            Página {page + 1} de {Math.max(1, pageCount)}
          </span>
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
