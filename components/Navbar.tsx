// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full border-b"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="mx-auto max-w-screen-sm px-5 py-3 md:max-w-5xl">
        <div className="flex items-center justify-center md:justify-between gap-2">
          {/* Marca: oculta en mobile, visible en md+, ahora en Georgia Pro */}
          <div className="hidden md:block leading-tight font-georgiaPro font-bold text-xl tracking-tight">
            <span className="align-middle">Agrícola</span>{" "}
            <span className="align-middle">BE</span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4 text-sm md:gap-6 md:text-base">
            <li><Link href="/#inicio" className="hover:underline underline-offset-4">Inicio</Link></li>
            <li><Link href="/#quienes-somos" className="hover:underline underline-offset-4">Nosotros</Link></li>
            <li><Link href="/#productos" className="hover:underline underline-offset-4">Productos</Link></li>
            <li><Link href="/#contacto" className="hover:underline underline-offset-4">Contacto</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
