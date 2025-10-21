// components/Footer.tsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        mt-auto               /* se pega abajo cuando el contenido es corto */
        mb-[-0.5px]          /* elimina el 'aire' subpíxel bajo el footer en desktop con scale */
        bg-gray-900 text-gray-100
        py-8 px-6 md:px-20
        flow-root            /* bloquea colapso de márgenes internos */
      "
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p>&copy; {new Date().getFullYear()} Agrícola BE. Todos los derechos reservados.</p>

        <div className="flex flex-col items-center md:items-end gap-2">
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-green-400">Instagram</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniela-apablaza-avila-a7941015b/"
                target="_blank" rel="noopener noreferrer"
                className="hover:text-green-400"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="text-sm">
            Hecho por{" "}
            <a
              href="https://github.com/dgrcodex"
              target="_blank" rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              DGR
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://sambalab.pro"
              target="_blank" rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              Sambalab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
