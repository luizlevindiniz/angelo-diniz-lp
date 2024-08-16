"use client";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Headline from "./components/ui/Headline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Headline />
        <div>image or video here</div>

        <div>Sobre mim</div>
        <div>
          <h2>Propostas</h2>
          <div>
            <h3>Proposta</h3>
            <h3>Proposta</h3>
            <h3>Proposta</h3>
            <h3>Proposta</h3>
          </div>
        </div>
        <div>
          <h4>Redes Sociais</h4>
        </div>
      </main>
      <Footer />
    </>
  );
}
