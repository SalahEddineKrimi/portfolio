import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProfessionalDevelopment from "@/components/ProfessionalDevelopment";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* Fond d’écran commun à toute la page */}
      <div className="fixed inset-0 -z-50">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/imgFondEcran.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Tous les composants par-dessus le fond */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <ProfessionalDevelopment />
        <Contact />
      </div>
    </>
  );
};

export default Index;
