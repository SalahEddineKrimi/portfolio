import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const [visibleDiplomaIndex, setVisibleDiplomaIndex] = useState<number | null>(null);

  const education = [
    {
      year: "2024",
      degree: "Baccalauréat en génie de la construction – Option structure",
      institution: "École de technologie supérieure, Montréal (Canada)",
      type: "Baccalauréat",
      image: "/diplome_KseEts.png",
      url: "https://www.etsmtl.ca/",
    },
    {
      year: "2017",
      degree: "DEC en techniques du génie civil",
      institution: "Cégep André-Laurendeau, Lasalle (Canada)",
      type: "DEC",
      image: "/diplome_KseCegep.png",
      url: "https://claurendeau.qc.ca/",
    },
    {
      year: "2014",
      degree: "Licence en génie civil",
      institution:
        "Université des Sciences et de la Technologie Houari Boumediene, Alger (Algérie)",
      type: "Licence",
      image: "/diplome_KseUsthb.png",
      url: "https://www.usthb.dz/",
    },
  ];

  return (
    <section className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation</h2>
          <p className="text-xl text-gray-600">
            Parcours académique en génie civil
          </p>
        </div>

        {/* Liste des diplômes */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index}>
              {/* Carte diplômes */}
                  <Card
                    onClick={() =>
                      setVisibleDiplomaIndex(index === visibleDiplomaIndex ? null : index)
                    }
                    className={`transform transition-transform duration-300 ease-in-out cursor-pointer border-2 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl ${
                      visibleDiplomaIndex === index ? "border-blue-400" : "border-gray-200"
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Icone & année */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                        {edu.year}
                      </div>
                    </div>

                    {/* Infos diplôme */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>

                      {/* Lien vers l’établissement */}
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-blue-600 hover:underline text-base"
                      >
                        {edu.institution}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image du diplôme */}
              {visibleDiplomaIndex === index && (
                <div className="mt-4 text-center">
                  <img
                    src={edu.image}
                    alt={`Diplôme de ${edu.institution}`}
                    className="mx-auto w-full max-w-4xl rounded-2xl shadow-xl border border-blue-300"
                    onError={() =>
                      console.error("Image non trouvée:", edu.image)
                    }
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
