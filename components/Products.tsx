export default function Products() {
    return (
      <section id="products" className="py-16 px-6 md:px-20 bg-gray-50">
        <h3 className="text-3xl font-bold mb-6">Nuestros Productos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Producto 1</h4>
            <p>Descripción breve del producto.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Producto 2</h4>
            <p>Descripción breve del producto.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h4 className="font-semibold mb-2">Producto 3</h4>
            <p>Descripción breve del producto.</p>
          </div>
        </div>
      </section>
    );
  }
  