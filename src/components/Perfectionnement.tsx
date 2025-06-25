import { useState, useEffect } from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProfessionalDevelopment = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const trainings = [
    {
      title: "Analyse dynamique et sismique des ponts et bâtiments (mention A), ÉTS, Montréal, Canada (Hiver 2025)",
      image: "/Dynamic.png",
    },
    {
      title: "PFE : Conception hydraulique d'une nouvelle attraction touristique, Baie-Comeau, Canada (Été 2024)",
      image: "https://www.youtube.com/embed/CcOKRiHlIPA",
    },
    {
      title: "Ingénierie du vent (mention A+), ÉTS, Montréal, Canada (Automne 2023)",
      image: "/Wind.png",
    },
    {
      title: "Défi Structure-AL : Conception d'un Belvédère, Abitibi-Témiscamingue, Québec, Canada (2023)",
      image: "/img102.png",
    },
    {
      title: "Programmation en VBA : Logiciel d'analyse de déformations structurelles par la méthode MEF (2021)",
      image: "/img101.png",
    },
  ];

  return (
    <section id="perfectionnement" className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-blue-300" />
          Perfectionnement Professionnel
        </h2>

        <div className="grid gap-8 md:grid-cols-1">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className="border-0 border-b-2 hover:border-b-4 border-b-blue-300 bg-transparent text-white transition-all duration-300 cursor-pointer rounded-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-md font-semibold">{training.title}</h3>
                  </div>

                  {(isMobile || hoveredIndex === index || visibleIndex === index) && (
                    <div className="mt-4 text-center px-4">
                      {index === 1 ? (
                        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl border border-blue-300">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={training.image}
                            title="Vidéo du PFE"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <img
                          src={training.image}
                          alt="Document de perfectionnement"
                          className="mx-auto w-full max-w-2xl rounded-2xl shadow-xl border border-blue-300"
                          onError={() =>
                            console.error("Image non trouvée:", training.image)
                          }
                        />
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
