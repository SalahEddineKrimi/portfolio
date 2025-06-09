
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProfessionalDevelopment from "@/components/ProfessionalDevelopment";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <ProfessionalDevelopment />
      <Contact />
    </div>
  );
};

export default Index;
