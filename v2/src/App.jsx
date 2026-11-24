import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import BarraAutoridade from './components/BarraAutoridade';
import Segmentos from './components/Segmentos';
import Sobre from './components/Sobre';
import Certificados from './components/Certificados';
import GaleriaEspaco from './components/GaleriaEspaco';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import AgendamentoVisita from './components/AgendamentoVisita';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AgendamentoModal from './components/AgendamentoModal';
import LgpdModal from './components/LgpdModal';

export default function App() {
  const [agendamentoOpen, setAgendamentoOpen] = useState(false);
  const [lgpdOpen, setLgpdOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="surface-grain min-h-screen bg-[#FAFCFE] font-nunito text-[#2C3E50] antialiased selection:bg-[#E63946] selection:text-white">
        <Header onOpenAgendamento={() => setAgendamentoOpen(true)} />
        <main>
          <Hero onOpenAgendamento={() => setAgendamentoOpen(true)} />
          <BarraAutoridade />
          <Segmentos />
          <Sobre />
          <Certificados />
          <GaleriaEspaco />
          <Depoimentos />
          <FAQ onOpenAgendamento={() => setAgendamentoOpen(true)} />
          <AgendamentoVisita />
          <Localizacao />
        </main>
        <Footer onOpenLgpd={() => setLgpdOpen(true)} />
        <FloatingWhatsApp />
        <AgendamentoModal isOpen={agendamentoOpen} onClose={() => setAgendamentoOpen(false)} />
        <LgpdModal isOpen={lgpdOpen} onClose={() => setLgpdOpen(false)} />
      </div>
    </MotionConfig>
  );
}
