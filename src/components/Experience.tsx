import { useState } from "react";
import {
  Briefcase,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* -------------------------------------------------------------------------- */
/*                              Types & Helpers                               */
/* -------------------------------------------------------------------------- */
interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  responsibilities: string[];
  achievements: string[];
  images: string[];
}

/** Extrait la première année (YYYY) d’une chaîne. */
const startYear = (period: string): number =>
  Number(period.match(/\d{4}/)?.[0] ?? 0);

/* -------------------------------------------------------------------------- */
/*                         Données (PNG dans /public)                         */
/* -------------------------------------------------------------------------- */
const experiences: ExperienceItem[] = [
  {
    period: "2024 à 2025",
    title:
      "Candidat à la profession d'ingénieur – Conception de ponts et ouvrages d'art",
    company: "Stantec Experts-Conseils",
    companyUrl: "https://www.stantec.com/en",
    responsibilities: [
      "Participer à la conception, la réhabilitation et la réfection de ponts et ouvrages d'art",
      "Réaliser la modélisation et les calculs (CSI Bridge, ADA, etc.)",
      "Élaborer les notes de calcul et rédiger les études de faisabilité",
      "Participer aux évaluations de capacité portante",
      "Orienter les dessinateurs et préparer devis, plans et rapports",
      "Assurer la coordination et résoudre des problèmes techniques complexes",
    ],
    achievements: [
      "Reconnaissance de la cheffe d'équipe pour ma rigueur et ma rapidité d'apprentissage",
      "Appréciation pour mon autonomie et ma gestion de la pression",
    ],
    images: ["/img007.png", "/img008.png"],
  },
  {
    period: "2023 à 2024",
    title: "Tuteur",
    company: "Nimbus",
    companyUrl:
      "https://www.etsmtl.ca/experience-etudiante/appui-a-la-reussite/tutorat-par-les-pairs-nimbus",
    responsibilities: [
      "Évaluer les besoins des étudiants",
      "Préparer des cours, présentations et exercices",
      "Accompagner les étudiants dans la compréhension des notions",
      "Renforcer l'apprentissage autonome",
      "Développer la confiance des étudiants",
    ],
    achievements: [
      "Note parfaite de 5/5 attribuée par 77 étudiants",
      "Commentaires exclusivement positifs sur la plateforme Nimbus",
    ],
    images: ["/img005.png", "/img006.png"],
  },
  {
    period: "Automne 2022",
    title: "Stagiaire en ingénierie des lignes souterraines",
    company: "Hydro-Québec",
    companyUrl: "https://www.hydroquebec.com/",
    responsibilities: [
      "Construire le SIG des lignes souterraines",
      "Élaborer des tableaux croisés dynamiques",
      "Préparer un relevé de quantité préliminaire",
      "Participer à la mise à jour du devis-cadre",
      "Contribuer à un logiciel interne et réviser un plan d'entrée en poste",
    ],
    achievements: [],
    images: ["/img003.png", "/img004.png"],
  },
  {
    period: "2019 à 2022",
    title: "Surveillant de chantier",
    company: "Hydro-Québec",
    companyUrl: "https://www.hydroquebec.com/",
    responsibilities: [
      "Examiner les documents contractuels et l'état des lieux",
      "Appliquer le programme de surveillance et le plan qualité",
      "Suivre et documenter les non-conformités",
      "Suivre l'avancement des travaux contractuels et non contractuels",
      "Veiller à la remise en état des lieux",
    ],
    achievements: [
      "Courriel de remerciement soulignant mon travail remarquable et mon souci du détail",
    ],
    images: ["/img009.png", "/img010.png"],
  },
  {
    period: "2017 à 2019",
    title: "Technicien en contrôle des matériaux",
    company: "Groupe ABS",
    companyUrl: "https://www.groupeabs.com/",
    responsibilities: [
      "Vérifier les matériaux livrés au chantier",
      "Effectuer les essais de contrôle des matériaux",
      "Rédiger des rapports journaliers",
      "Suivre les mémos de non-conformité",
      "Garantir la conformité aux exigences contractuelles",
    ],
    achievements: [
      "Certificat de reconnaissance soulignant mon implication professionnelle",
      "Formation et initiation de nouveaux employés",
    ],
    images: ["/img001.png", "/img002.png"],
  },
];

/* -------------------------------------------------------------------------- */
/*                               Composant UI                                 */
/* -------------------------------------------------------------------------- */
const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  // Trie les expériences du plus récent au plus ancien
  const sorted = [...experiences].sort(
    (a, b) => startYear(b.period) - startYear(a.period)
  );

  const toggleCard = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
    setSlide(0); // reset du carrousel
  };

  const next = (len: number) => setSlide((s) => (s + 1) % len);
  const prev = (len: number) => setSlide((s) => (s ? s - 1 : len - 1));

  return (
    <section className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-xl text-gray-600">
            Parcours et réalisations en ingénierie
          </p>
        </div>

        {/* Liste des expériences */}
        <div className="space-y-12">
          {sorted.map((exp, i) => (
            <div key={i}>
              <Card
                onClick={() => toggleCard(i)}
                className="hover:shadow-xl cursor-pointer transition-shadow duration-300 animate-fade-in border border-blue-100"
              >
                <CardHeader className="bg-blue-50 border-b">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </CardTitle>

                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-lg font-semibold text-blue-600 hover:underline mb-1 block"
                      >
                        {exp.company}
                      </a>

                      <div className="flex items-center gap-2 text-gray-600 text-lg">
                        <Calendar className="w-5 h-5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {/* Détails affichés si la carte est ouverte */}
                {openIndex === i && (
                  <CardContent className="p-8 space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Responsabilités */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Responsabilités principales
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Réalisations */}
                      {exp.achievements.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">
                            Réalisations
                          </h4>
                          <div className="space-y-4">
                            {exp.achievements.map((a, j) => (
                              <div
                                key={j}
                                className="p-4 bg-green-50 border-l-4 border-green-500 rounded"
                              >
                                <p className="text-gray-700 italic">"{a}"</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Carrousel des images */}
                    <div className="flex items-center justify-center gap-6 pt-8">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prev(exp.images.length);
                        }}
                        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>

                      <img
                        src={exp.images[slide]}
                        alt="Document"
                        className="w-full max-w-3xl rounded-xl shadow-xl border border-blue-200"
                      />

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          next(exp.images.length);
                        }}
                        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
