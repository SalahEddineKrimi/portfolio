import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Download, Linkedin, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (showVideo) setShowVideo(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo]);

  return (
    <section
      id="about"
      className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
        {/* Partie texte */}
        <div className="text-white space-y-6 animate-fade-in">
          <div className="flex items-baseline flex-wrap gap-x-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Salah-Eddine <span className="text-blue-300">KRIMI</span>
            </h1>
            <span className="text-2xl text-blue-200 font-medium">B.ing</span>
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
                href="mailto:krimisalaheddine@gmail.com"
                className="hover:text-blue-300 transition-colors break-all"
              >
                krimisalaheddine@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/salah-eddine-krimi-967072143/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
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
            <a href="/Salah-Eddine+Krimi+202506.pdf" download>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4 mr-2" />
                Télécharger CV
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black px-6 py-3 rounded-lg transition-all duration-300"
              onClick={handleScrollToContact}
            >
              Me Contacter
            </Button>
          </div>
        </div>

        {/* Partie photo ou vidéo */}
        <div className="flex flex-col items-center lg:items-end">
          {showVideo ? (
            <div className="w-[320px] sm:w-[400px] md:w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VQpkA8Y5qtU?autoplay=1"
                title="Présentation de Salah-Eddine"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div
                onClick={() => setShowVideo(true)}
                className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {/* Halo indicatif */}
                <div className="absolute inset-0 z-10 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

                {/* Image ronde responsive */}
                <img
                  src="/lovable-uploads/dcf63844-562a-4a31-a778-751a79adaf9f.png"
                  alt="Salah-Eddine KRIMI"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Lien vers YouTube */}
              <a
                href="https://www.youtube.com/watch?v=VQpkA8Y5qtU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 animate-pulse rounded-lg border border-red-500 px-6 py-3 flex items-center gap-2 text-lg text-blue-100 hover:bg-red-500 hover:text-white transition duration-300"
                style={{ animationDuration: "0.8s" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-red-500"
                >
                  <path d="M19.615 3.184c-.692-.692-1.492-.957-2.422-1.009C15.607 2.024 12 2 12 2s-3.607.024-5.193.175c-.93.052-1.73.317-2.422 1.009C3.693 3.876 3.428 4.676 3.376 5.606 3.225 7.192 3.2 10.8 3.2 10.8s.024 3.607.175 5.193c.052.93.317 1.73 1.009 2.422.692.692 1.492.957 2.422 1.009 1.586.151 5.193.175 5.193.175s3.607-.024 5.193-.175c.93-.052 1.73-.317 2.422-1.009.692-.692.957-1.492 1.009-2.422.151-1.586.175-5.193.175-5.193s-.024-3.607-.175-5.193c-.052-.93-.317-1.73-1.009-2.422zM10 15.5v-7l6 3.5-6 3.5z" />
                </svg>
                <span className="font-semibold">Présentation</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
