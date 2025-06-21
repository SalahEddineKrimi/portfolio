import { useState } from "react";
import { Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfessionalDevelopment = () => {
  const trainings = [
    {
      title: "Analyse dynamique et sismique des ponts et bâtiments (mention A), ÉTS, Montréal, Canada (Hiver 2025)",
      image: "/img001.png",
    },
    {
      title: "PFE : Conception hydraulique d'une nouvelle attraction touristique, Baie-Comeau, Canada (Été 2024)",
      image: "https://www.youtube.com/embed/CcOKRiHlIPA", 
    },
    {
      title: "Ingénierie du vent (mention A+), ÉTS, Montréal, Canada (Automne 2023)",
      image: "/img003.png",
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

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Titre de la section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfectionnement Professionnel</h2>
          <p className="text-xl text-gray-600">Formation continue et spécialisations</p>
        </div>

        {/* Cartes empilées */}
        <div className="flex flex-col gap-6">
          {trainings.map((training, index) => (
            <div key={index}>
              {/* Carte cliquable */}
              <Card
                onClick={() => setVisibleIndex(visibleIndex === index ? null : index)}
                className={`cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-xl border-2 ${
                  visibleIndex === index ? "border-blue-400" : "border-gray-200"
                }`}
              >
                <CardHeader className="bg-blue-50 border-b p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-md font-semibold text-gray-900 leading-snug">
                      {training.title}
                    </CardTitle>
                  </div>
                </CardHeader>
              </Card>

              {/* Affichage conditionnel : image ou vidéo */}
              {visibleIndex === index && (
                <div className="mt-4 text-center">
                  {index === 1 ? (
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-blue-200">
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
                      className="mx-auto w-full max-w-2xl rounded-xl shadow-lg border border-blue-200"
                      onError={() => console.error("Image non trouvée:", training.image)}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
