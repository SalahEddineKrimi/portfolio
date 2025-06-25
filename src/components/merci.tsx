import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom"; // ou "next/link" si tu utilises Next.js

const Merci = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 px-4">
      <div className="max-w-md w-full text-center bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Merci pour votre message !</h1>
        <p className="text-blue-200 mb-6">
          Je l'ai bien reçu et je vous répondrai dans les plus brefs délais.
        </p>
        <Link to="/" className="inline-block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 hover:scale-105">
            Retour à l’accueil
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Merci;
