export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-100 py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Izquierda: copyright (igual que antes, sin créditos aquí) */}
        <p>&copy; {new Date().getFullYear()} Agrícola BE. Todos los derechos reservados.</p>

        {/* Derecha: redes + créditos debajo */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <ul className="flex gap-6">
   
            <li>
              <a href="#" className="hover:text-green-400">Instagram</a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/daniela-apablaza-avila-a7941015b/" 
                target="_blank" // ESTO abre el enlace en una nueva pestaña
                rel="noopener noreferrer" // ESTO es una práctica de seguridad recomendada
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              DGR
            </a>{" "}
            | Powered by{" "}
            <a
              href="https://sambalab.pro"
              target="_blank"
              rel="noopener noreferrer"
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