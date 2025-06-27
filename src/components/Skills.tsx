import { Code, Brain, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Logiciels Techniques",
      icon: Code,
      skills: [
        "SAP2000", "SAFI", "Robot", "CSI Bridges", "Advanced Design America", "AutoCad",
        "Civil 3D", "Microsoft Office", "MSproject", "SmartUse", "Revit", "SpColumn",
        "AquaGeo", "Primavera","ArcGis","Visual Basic"
      ],
      color: "bg-blue-500",
      badgeColor: "text-white"
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
        "Risques d'électrisation", "Carte de protection contre les chutes",
        "Carte de travail en espace clos"
      ],
      color: "bg-red-500",
      badgeColor: "bg-red-100 text-red-800"
    }
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skillCategories[0].skills.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="min-h-screen relative z-10 py-20 px-4 flex flex-col justify-center items-center overflow-x-hidden">
      <div className="max-w-4xl w-full text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Compétences</h2>
        <p className="text-xl text-gray-400">Expertise technique et connaissances</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="group bg-white/10 backdrop-blur-lg border-white/20 border text-center transition-all duration-500 ease-out transform"
          >
            <CardHeader className="text-center pb-4">
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <category.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-lg font-bold text-white">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {index === 0 ? (
                <div className="h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white transition-opacity duration-300 ease-in-out">
                    {category.skills[currentSkillIndex]}
                  </span>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`inline-block px-3 py-1 text-sm rounded-full m-1 ${category.badgeColor}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
