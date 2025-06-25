import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Ferme le menu mobile après clic
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Fond d’écran */}
      <div className="fixed inset-0 -z-50 overflow-hidden w-screen h-screen">
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Barre de navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 ${
          scrolled
            ? "bg-slate-900/90 backdrop-blur border-white/20"
            : "bg-transparent"
        } border-y border-white/20`}
      >
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center text-white">
          {/* Titre gauche */}
          <div className="text-sm font-semibold text-blue-300">
            Eportfolio – Krimi Salah-Eddine
          </div>

          {/* Menu desktop */}
          <div className="space-x-6 text-sm font-medium hidden md:flex">
            <button onClick={() => scrollTo("about")} className="hover:text-blue-300 transition-colors">À propos</button>
            <button onClick={() => scrollTo("education")} className="hover:text-blue-300 transition-colors">Éducation</button>
            <button onClick={() => scrollTo("experience")} className="hover:text-blue-300 transition-colors">Expérience</button>
            <button onClick={() => scrollTo("perfectionnement")} className="hover:text-blue-300 transition-colors">Perfectionnement</button>
            <button onClick={() => scrollTo("skills")} className="hover:text-blue-300 transition-colors">Compétences</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-blue-300 transition-colors">Contact</button>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden text-blue-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 text-white space-y-4 bg-slate-900/95 border-t border-white/10">
            <button onClick={() => scrollTo("about")} className="block w-full text-left">À propos</button>
            <button onClick={() => scrollTo("education")} className="block w-full text-left">Éducation</button>
            <button onClick={() => scrollTo("experience")} className="block w-full text-left">Expérience</button>
            <button onClick={() => scrollTo("perfectionnement")} className="block w-full text-left">Perfectionnement</button>
            <button onClick={() => scrollTo("skills")} className="block w-full text-left">Compétences</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left">Contact</button>
          </div>
        )}
      </nav>

      {/* Contenu principal */}
      <main className="relative z-10 pt-24 px-4">{children}</main>
    </div>
  );
};

export default Layout;
