import React from "react";

// Ce layout englobe tout le contenu (header, footer, fond d'écran, etc.)
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Fond d’écran commun */}
      <div className="fixed inset-0 -z-50 overflow-hidden w-screen h-screen">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/imgFondEcran.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* En-tête (si tu veux) */}
      {/* <Header /> */}

      {/* Contenu principal (pages) */}
      <main className="relative z-10">{children}</main>

      {/* Pied de page (facultatif) */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
