// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)"
        }}
      >
        {/* Logo */}
        <div className="text-xl font-bold">
          Agrícola BE
        </div>
  
        {/* Links */}
        <ul className="flex gap-6 text-base">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Nosotros</li>
          <li className="hover:underline cursor-pointer">Servicios</li>
          <li className="hover:underline cursor-pointer">Contacto</li>
        </ul>
      </nav>
    );
  }
  