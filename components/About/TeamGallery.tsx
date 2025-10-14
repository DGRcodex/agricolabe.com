// components/about/TeamGallery.tsx
/**
 * Team/gallery component. Uses next/image for photos.
 * Grid responsive and accessible with figcaption.
 */

import Image from "next/image";

const members = [
  { src: "/team1.jpg", alt: "María — Productora", name: "María", role: "Productora" },
  { src: "/team2.jpg", alt: "Carlos — Campo", name: "Carlos", role: "Campo" },
  { src: "/team3.jpg", alt: "Sofía — Control de calidad", name: "Sofía", role: "Control de calidad" },
  { src: "/team4.jpg", alt: "Jorge — Logística", name: "Jorge", role: "Logística" },
];

export default function TeamGallery() {
  return (
    <div className="mt-12">
      <h3 className="font-serif text-2xl sm:text-3xl">Equipo & productores</h3>
      <p className="mt-2 text-sm text-white/90 max-w-3xl">
        Conoce a algunas de las manos detrás de nuestros productos — equipos en terreno, empacado y control de calidad.
      </p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {members.map((m) => (
          <figure key={m.name} className="rounded-lg overflow-hidden bg-white/6 p-2 flex flex-col items-center">
            <div className="w-full h-32 relative">
              <Image src={m.src} alt={m.alt} fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
            <figcaption className="text-sm mt-3 text-center">
              <span className="font-medium">{m.name}</span>
              <span className="block text-xs opacity-90">{m.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
