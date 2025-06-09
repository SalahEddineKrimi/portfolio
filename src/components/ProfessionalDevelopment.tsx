
import { Award, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfessionalDevelopment = () => {
  const trainings = [
    "Analyse dynamique et sismique des ponts et bâtiments (mention A), ÉTS, Montréal, Canada (Hiver 2025)",
    "PFE : Conception hydraulique d'une nouvelle attraction touristique, Baie-Comeau, Canada (Été 2024)",
    "Ingénierie du vent (mention A+), ÉTS, Montréal, Canada (Automne 2023)",
    "Défi Structure-AL : Conception d'un Belvédère, Abitibi-Témiscamingue, Québec, Canada (2023)",
    "Programmation en VBA : Logiciel d'analyse de déformations structurelles par la méthode MEF (2021)"
  ];

  const competencyCards = [
    "Risques d'électrisation, Mise à la terre et Initiation CDST Lignes de transport aériennes",
    "Risques d'électrisation, Mise à la terre et Initiation Installation HQ et Initiation au CDST Postes électriques",
    "Carte de protection contre les chutes et Carte de travail en espace clos"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfectionnement Professionnel</h2>
          <p className="text-xl text-gray-600">Formation continue et certifications</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formations */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-blue-50 border-b">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Formations Spécialisées</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {trainings.map((training, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{training}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Cartes de compétences */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-green-50 border-b">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Cartes de Compétences</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {competencyCards.map((card, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{card}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
