import AboutHeader from "./AboutHeader";
import AboutValues from "./AboutValues";
import TeamGallery from "./TeamGallery";
import AboutCTA from "./AboutCTA";

export default function About() {
  return (
    <section id="quienes-somos" className="relative bg-agricola-green text-agricola-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <AboutHeader
          title="Quiénes somos"
          subtitle="En Agrícola BE cultivamos con respeto por la tierra y la gente."
          heroSrc="/aboutprincipal.jpg"
          heroAlt="Campo y productores de Agrícola BE"
        />
        <AboutValues />
        <TeamGallery />
        <AboutCTA />
      </div>
    </section>
  );
}
