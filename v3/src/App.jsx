import React from 'react';
import FloatingBubbles from './components/FloatingBubbles';
import KingdomNavbar from './components/KingdomNavbar';
import KingdomHero from './components/KingdomHero';
import KingdomAbout from './components/KingdomAbout';
import KingdomStages from './components/KingdomStages';
import KingdomMethodology from './components/KingdomMethodology';
import KingdomRoutine from './components/KingdomRoutine';
import KingdomTestimonials from './components/KingdomTestimonials';
import KingdomVisitForm from './components/KingdomVisitForm';
import KingdomFaq from './components/KingdomFaq';
import KingdomLocation from './components/KingdomLocation';
import KingdomFooter from './components/KingdomFooter';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F4FAFF] font-nunito text-kingdom-dark selection:bg-kingdom-yellow selection:text-kingdom-dark">
      {/* Fundo com bolhas mágicas animadas */}
      <FloatingBubbles />

      {/* Conteúdo do Reino */}
      <div className="relative z-10">
        <KingdomNavbar />
        <main>
          <KingdomHero />
          <KingdomAbout />
          <KingdomStages />
          <KingdomMethodology />
          <KingdomRoutine />
          <KingdomTestimonials />
          <KingdomVisitForm />
          <KingdomFaq />
          <KingdomLocation />
        </main>
        <KingdomFooter />
      </div>
    </div>
  );
}
