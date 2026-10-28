import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropostaAfetiva from './components/PropostaAfetiva';
import SegmentosInterativos from './components/SegmentosInterativos';
import ProjetosExtracurriculares from './components/ProjetosExtracurriculares';
import GaleriaMidiaInterativa from './components/GaleriaMidiaInterativa';
import DepoimentosFamilias from './components/DepoimentosFamilias';
import LocalizacaoHorarios from './components/LocalizacaoHorarios';
import Footer from './components/Footer';
import ModalAgendamentoWhatsApp from './components/ModalAgendamentoWhatsApp';

export default function App() {
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [visitPreset, setVisitPreset] = useState({});
  const [videoModalItem, setVideoModalItem] = useState(null);

  const handleOpenVisitModal = (preset = {}) => {
    setVisitPreset(preset);
    setVisitModalOpen(true);
  };

  const handleOpenVideoModal = (item = null) => {
    setVideoModalItem(
      item || {
        title: 'Tour Institucional — Colégio Reinado da Criança (Mariano Procópio)',
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col peque-canvas text-reinado-ink font-nunito">
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      <main className="flex-1">
        <Hero
          onOpenVisitModal={handleOpenVisitModal}
          onOpenVideoModal={handleOpenVideoModal}
        />
        <PropostaAfetiva onOpenVisitModal={handleOpenVisitModal} />
        <SegmentosInterativos onOpenVisitModal={handleOpenVisitModal} />
        <ProjetosExtracurriculares
          onOpenVisitModal={handleOpenVisitModal}
          onOpenVideoModal={handleOpenVideoModal}
        />
        <DepoimentosFamilias onOpenVisitModal={handleOpenVisitModal} />
        <GaleriaMidiaInterativa
          onOpenVisitModal={handleOpenVisitModal}
          onOpenVideoModal={handleOpenVideoModal}
        />
        <LocalizacaoHorarios onOpenVisitModal={handleOpenVisitModal} />
      </main>

      <Footer onOpenVisitModal={handleOpenVisitModal} />

      <ModalAgendamentoWhatsApp
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
        initialValues={visitPreset}
        videoModalItem={videoModalItem}
        onCloseVideoModal={() => setVideoModalItem(null)}
        onOpenVisitFromVideo={() => handleOpenVisitModal()}
      />
    </div>
  );
}
