import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Perfectionnement from "@/components/Perfectionnement";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      {/* Fond d’écran commun à toute la page */}
      <div className="fixed inset-0 -z-50  overflow-hidden w-screen h-screen">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/imgFondEcran.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Tous les composants par-dessus le fond */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Education />
        <Experience />
        <Perfectionnement />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Index;
