import { Code, Wrench, Brain, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Logiciels Techniques",
      icon: Code,
      skills: ["SAP2000", "SAFI", "Robot", "CSI Bridges", "Advanced Design America", "AutoCad", "Civil 3D"],
      color: "bg-blue-500",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Outils Microsoft",
      icon: Wrench,
      skills: ["Microsoft Office", "MSproject", "SmartUse", "Revit", "SpColumn", "AquaGeo"],
      color: "bg-green-500",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      title: "Langues",
      icon: Brain,
      skills: ["Français", "Anglais", "Arabe"],
      color: "bg-purple-500",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Compétences",
      icon: Users,
      skills: ["Conception de ponts", "Analyse structurelle", "Gestion de projet", "Permis de conduire classe B"],
      color: "bg-orange-500",
      badgeColor: "bg-orange-100 text-orange-800"
    },
    {
      title: "Certifications",
      icon: Shield,
      skills: [
        "Risques d'électrisation, Mise à la terre et Initiation CDST - Lignes de transport aériennes et postes électiques",
        "Carte de protection contre les chutes",
        "Carte de travail en espace clos"
      ],
      color: "bg-red-500",
      badgeColor: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
          <p className="text-xl text-gray-600">Expertise technique et connaissances</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block px-3 py-1 text-sm rounded-full m-1 ${category.badgeColor} hover:brightness-110 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
