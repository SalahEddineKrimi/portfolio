
import { Code, Wrench, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Logiciels Techniques",
      icon: Code,
      skills: ["SAP2000", "SAFI", "Robot", "CSI Bridges", "Advanced Design America", "AutoCad", "Civil 3D"],
      color: "bg-blue-500"
    },
    {
      title: "Outils Microsoft",
      icon: Wrench,
      skills: ["Microsoft Office", "MSproject", "SmartUse", "Revit", "SpColumn", "AquaGeo"],
      color: "bg-green-500"
    },
    {
      title: "Langues",
      icon: Brain,
      skills: ["Français", "Anglais", "Arabe"],
      color: "bg-purple-500"
    },
    {
      title: "Compétences",
      icon: Users,
      skills: ["Conception de ponts", "Analyse structurelle", "Gestion de projet", "Permis de conduire classe B"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences</h2>
          <p className="text-xl text-gray-600">Expertise technique et connaissances</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mr-2 mb-2 hover:bg-gray-200 transition-colors"
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
