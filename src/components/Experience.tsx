import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Calendar,
  PlusCircle,
  Download,
  ChevronLeft, 
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {  Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl: string;
  responsibilities: string[];
  achievements: string[];
  pdfUrl: string;
}

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
    pdfUrl: "/pdfs/performanceevaluation.pdf",
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
    pdfUrl: "/pdfs/lettreattestationtuto.pdf",
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
    pdfUrl: "/pdfs/evaluationemployeurstage.pdf",
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
    pdfUrl: "/pdfs/courrielremerciement.pdf",
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
    pdfUrl: "/pdfs/certificatreconnaissance.pdf",
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [numPages, setNumPages] = useState<(number | null)[]>(experiences.map(() => null));
  const [pdfLoadError, setPdfLoadError] = useState<boolean[]>(experiences.map(() => false));
  const [width, setWidth] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number[]>(experiences.map(() => 1));

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth - 32);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [openIndex]);

  const handlePdfLoadSuccess = (i: number, { numPages }: { numPages: number }) => {
    setNumPages((prev) => {
      const updated = [...prev];
      updated[i] = numPages;
      return updated;
    });
    setPdfLoadError((prev) => {
      const updated = [...prev];
      updated[i] = false;
      return updated;
    });
  };

  const handlePdfLoadError = (i: number) => {
    setPdfLoadError((prev) => {
      const updated = [...prev];
      updated[i] = true;
      return updated;
    });
    console.error(`Failed to load PDF: ${experiences[i].pdfUrl}`);
  };

  return (
    <section className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Expérience professionnelle</h2>
          <p className="text-xl text-gray-300">Mon parcours en ingénierie et en construction</p>
        </div>

        <div className="grid gap-10 grid-cols-1" ref={containerRef}>
          {experiences.map((exp, i) => (
            <Card
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl shadow-xl transition hover:scale-[1.01]"
            >
              <div onClick={() => setOpenIndex(openIndex === i ? null : i)} className="cursor-pointer">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-start gap-4 justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg font-semibold">{exp.title}</CardTitle>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-blue-300 text-sm hover:underline block"
                        >
                          {exp.company}
                        </a>
                        <div className="flex items-center gap-2 text-gray-200 text-sm mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-300 text-xs">
                      <PlusCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">Voir plus</span>
                    </div>
                  </div>
                </CardHeader>
              </div>

              {openIndex === i && (
                <CardContent className="p-6 text-gray-100 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responsabilités principales</h4>
                    <ul className="space-y-2 list-disc pl-5 text-gray-200">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Réalisations</h4>
                      <ul className="space-y-2 list-disc pl-5 text-green-300">
                        {exp.achievements.map((a, j) => (
                          <li key={j}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="relative w-full flex items-center justify-center min-h-[400px] bg-white rounded-xl shadow-md">
                    {/* Flèche gauche */}
                    {currentPage[i] > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage((prev) => {
                            const updated = [...prev];
                            updated[i] = Math.max(1, updated[i] - 1);
                            return updated;
                          });
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    {/* PDF */}
                    {pdfLoadError[i] ? (
                      <div className="text-center text-red-500 p-4">
                        Le PDF n'a pas pu être chargé. Veuillez le télécharger.
                      </div>
                    ) : (
                      <Document
                        file={exp.pdfUrl}
                        onLoadSuccess={({ numPages }) => handlePdfLoadSuccess(i, { numPages })}
                        onLoadError={() => handlePdfLoadError(i)}
                        loading={<div className="text-center text-gray-500 p-4">Chargement du PDF…</div>}
                      >
                        <Page
                          pageNumber={currentPage[i]}
                          width={Math.max(width, 320)}
                          renderTextLayer={false}
                          renderAnnotationLayer={false}
                        />
                      </Document>
                    )}

                    {/* Flèche droite */}
                    {currentPage[i] < (numPages[i] ?? 1) && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage((prev) => {
                            const updated = [...prev];
                            updated[i] = Math.min(numPages[i] ?? 1, updated[i] + 1);
                            return updated;
                          });
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  <div className="flex justify-center pt-4">
                    <a
                      href={`${window.location.origin}${exp.pdfUrl}`}
                      download
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(`${window.location.origin}${exp.pdfUrl}`, "_blank");
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors"
                    >
                      <Download className="w-4 h-4" /> Télécharger le PDF
                    </a>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;