import { useEffect, useState } from "react";
import { GraduationCap, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section id="education" className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center gap-2">
          <GraduationCap className="w-8 h-8 text-blue-300" />
          Parcours académique
        </h2>

        <div className="grid gap-8 md:grid-cols-1">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className="border-0 border-b-2 hover:border-b-4 border-b-blue-300 bg-transparent text-white transition-all duration-300 rounded-none"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-blue-200 font-medium">{edu.year}</span>
                  </div>

                  <div className="text-blue-100">
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1"
                    >
                      {edu.institution}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-sm text-gray-300 italic">{edu.type}</p>

                  {(isMobile || hoveredIndex === index) && (
                    <div className="mt-4 text-center px-4">
                      <img
                        src={edu.image}
                        alt={`Diplôme de ${edu.institution}`}
                        className="mx-auto w-full max-w-2xl rounded-2xl shadow-xl border border-blue-300"
                        onError={() =>
                          console.error("Image non trouvée:", edu.image)
                        }
                      />
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

export default Education;
