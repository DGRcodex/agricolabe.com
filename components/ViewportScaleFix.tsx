// components/ViewportScaleFix.tsx
"use client";

import { useEffect } from "react";

/**
 * Ajusta dinámicamente la altura real del wrapper escalado (#site-scale)
 * cuando la escala está activa (entre 768px y 1535px). Evita el scroll extra
 * por debajo del footer sin tocar tu layout ni tus estilos de escala.
 */
export default function ViewportScaleFix() {
  useEffect(() => {
    const site = document.getElementById("site-scale");
    if (!site) return;

    const apply = () => {
      const w = window.innerWidth;
      // Respeta: mobile sin escala, iMac sin escala
      const isScaledRange = w >= 768 && w < 1536;

      // Lee el valor actual de --site-scale (default 0.8 en tu CSS)
      const root = document.documentElement;
      const raw = getComputedStyle(root).getPropertyValue("--site-scale").trim();
      const scale = Number(raw || "1") || 1;

      if (isScaledRange && scale > 0 && scale < 1) {
        // Alto real compensado: 100dvh / escala
        site.style.height = `calc(100dvh / ${scale})`;
        site.style.overflow = "hidden"; // corta el “espacio fantasma” bajo el footer
      } else {
        // En mobile e iMac (sin escala) limpiamos estilos
        site.style.height = "";
        site.style.overflow = "";
      }
    };

    // Aplicar ahora + en resize/orientation changes
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return null;
}
