// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full flex justify-between items-center px-6 py-4 border-b"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Logo / Marca */}
      <div className="text-xl font-bold">Agrícola BE</div>

      {/* Links */}
      <ul className="flex gap-6 text-base">
        <li><Link href="/#inicio" className="hover:underline">Inicio</Link></li>
        <li><Link href="/#quienes-somos" className="hover:underline">Nosotros</Link></li>
     
        <li><Link href="/#productos" className="hover:underline">Productos</Link></li>
        <li><Link href="/#contacto" className="hover:underline">Contacto</Link></li>
      </ul>
    </nav>
  );
}
