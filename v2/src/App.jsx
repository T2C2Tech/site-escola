import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Segmentos from './components/Segmentos';
import Sobre from './components/Sobre';
import Certificados from './components/Certificados';
import GaleriaEspaco from './components/GaleriaEspaco';
import Depoimentos from './components/Depoimentos';
import AgendamentoVisita from './components/AgendamentoVisita';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFCFE] font-nunito text-[#2C3E50] antialiased selection:bg-[#E63946] selection:text-white">
      <Header />
      <main>
        <Hero />
        <Segmentos />
        <Sobre />
        <Certificados />
        <GaleriaEspaco />
        <Depoimentos />
        <AgendamentoVisita />
        <Localizacao />
      </main>
      <Footer />
    </div>
  );
}
