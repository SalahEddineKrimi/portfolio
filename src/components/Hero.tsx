import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>    
      {/* Section Hero */}
      <section className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            {/* Partie texte */}
            <div className="text-white space-y-6 animate-fade-in">
              <div className="flex items-baseline flex-wrap gap-x-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
                  Salah-Eddine <span className="text-blue-300">KRIMI</span>
                </h1>
                <span className="text-2xl text-blue-200 font-medium whitespace-nowrap">B.ing</span>
              </div>

              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                Ingénieur en génie civil spécialisé dans la conception des ponts et ouvrages d'art. 
                Passionné par l'innovation structurelle et les technologies de construction.
              </p>

            {/* Coordonnées */}
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <a
                  href="mailto:salah-eddine.krimi.1@ens.etsmtl.ca"
                  className="hover:text-blue-300 transition-colors"
                  aria-label="Envoyer un email"
                >
                  salah-eddine.krimi.1@ens.etsmtl.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a href="tel:+213660560660" className="hover:text-blue-300 transition-colors">
                  +213 660 560 660
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>El-Biar, Alger</span>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/SalahEddine_Krimi_202506.pdf" download aria-label="Télécharger le CV">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger CV
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black px-6 py-3 rounded-lg transition-all duration-300"
              >
                Me Contacter
              </Button>
            </div>
          </div>

          {/* Partie photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/lovable-uploads/dcf63844-562a-4a31-a778-751a79adaf9f.png"
                alt="Salah-Eddine KRIMI"
            	className="w-full h-auto min-h-[400px] object-cover rounded-2xl shadow-xl border border-gray-200/20" /* Largeur fixe, hauteur proportionnelle */
               style={{
                 maxHeight: '70vh',
                  objectPosition: 'top center'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;