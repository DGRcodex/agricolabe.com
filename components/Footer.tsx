export default function Footer() {
    return (
      <footer id="contact" className="bg-gray-900 text-gray-100 py-8 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Agrícola BE. Todos los derechos reservados.</p>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-green-400">Facebook</a></li>
            <li><a href="#" className="hover:text-green-400">Instagram</a></li>
            <li><a href="#" className="hover:text-green-400">LinkedIn</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  