// components/About.tsx
export default function About() {
    return (
      <section
        id="quienes-somos"
        className="relative"
        style={{ backgroundColor: "var(--be-green)", color: "white" }}
      >
        {/* Contenido */}
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Quiénes somos</h2>
          <p className="max-w-2xl text-lg opacity-90">
            Brindamos alimentos puros, con conexión honesta a la tierra y trabajo
            dedicado.
          </p>
        </div>
      </section>
    );
  }
  