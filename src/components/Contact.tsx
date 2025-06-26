import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Prenons contact</h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                Je suis actuellement à la recherche de nouvelles opportunités en ingénierie.
                N’hésitez pas à me contacter pour toute collaboration ou offre d’emploi. Je suis disponible pour échanger et discuter de vos projets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email</p>
                  <a href="mailto:salah-eddine.krimi.1@ens.etsmtl.ca" className="text-white hover:text-blue-400 transition-colors">
                    salah-eddine.krimi.1@ens.etsmtl.ca
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Téléphone</p>
                  <p className="text-white">+213 660 560 660</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez un message</h3>

              {!submitted ? (
                <form
                  action="https://formsubmit.co/krimisalaheddine@gmail.com"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Bonjour,\n\nMerci pour votre message. Il a bien été reçu. Je vous répondrai dans les plus brefs délais.\n\n— Salah-Eddine Krimi"
                  />

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    Envoyer le message
                  </Button>
                </form>
              ) : (
                <div className="text-center text-blue-200">
                  <p className="text-lg">✅ Merci ! Votre message a bien été envoyé.</p>
                  <p>Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
