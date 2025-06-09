
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Salah-Eddine
            <span className="block text-blue-400">KRIMI</span>
          </h1>
          <p className="text-xl text-blue-200 font-medium">B.ing</p>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            Ingénieur en génie civil spécialisé dans la conception des ponts et ouvrages d'art. 
            Passionné par l'innovation structurelle et les technologies de construction.
          </p>
          
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:krimisalaheddine@gmail.com" className="hover:text-blue-400 transition-colors">
                krimisalaheddine@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>0 660 560 660</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>El-Biar, Alger</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Télécharger CV
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-300">
              Me Contacter
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl animate-scale-in"></div>
            <img 
              src="/lovable-uploads/dcf63844-562a-4a31-a778-751a79adaf9f.png" 
              alt="Salah-Eddine KRIMI"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
