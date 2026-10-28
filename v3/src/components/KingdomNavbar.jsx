import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, MessageCircle, Menu, X, Heart, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KingdomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const shootMagic = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#FFCA28', '#FF6F61', '#1E88E5', '#2ECC71', '#9B59B6'],
    });
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 pb-2">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] px-5 py-3.5 shadow-xl shadow-kingdom-blue/10 border-2 border-kingdom-sky/20 flex items-center justify-between"
        >
          {/* Logo Reinado com Coroa Animada */}
          <a
            href="#inicio"
            onClick={shootMagic}
            className="flex items-center gap-3.5 group cursor-pointer"
            aria-label="Escola Reinado da Criança"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FFE082] via-[#FFCA28] to-[#FF8A80] p-2 flex items-center justify-center shadow-lg shadow-kingdom-yellow/30"
              >
                <img src="./logo.svg" alt="Logo Reinado da Criança" className="w-full h-full object-contain select-none" />
              </motion.div>
              <span className="absolute -top-2 -right-2 text-lg animate-spin">✨</span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-fredoka font-bold text-2xl tracking-wide">
                <span className="text-kingdom-blue">Reinado</span>
                <span className="text-kingdom-coral">da Criança</span>
              </div>
            </div>
          </a>

          {/* Links Desktop Divertidos */}
          <nav className="hidden lg:flex items-center gap-6 font-fredoka font-semibold text-base">
            <a href="#castelo" className="text-kingdom-dark hover:text-kingdom-blue hover:scale-105 transition-all">Quem Somos</a>
            <a href="#fases" className="text-kingdom-dark hover:text-kingdom-green hover:scale-105 transition-all">Nossas Turmas</a>
            <a href="#magia" className="text-kingdom-dark hover:text-kingdom-purple hover:scale-105 transition-all">Proposta</a>
            <a href="#diaadia" className="text-kingdom-dark hover:text-kingdom-coral hover:scale-105 transition-all">Rotina</a>
            <a href="#reino-dos-pais" className="text-kingdom-dark hover:text-[#D49300] hover:scale-105 transition-all">Depoimentos</a>
            <a href="#mapa" className="text-kingdom-dark hover:text-kingdom-blue hover:scale-105 transition-all">Onde Fica</a>
          </nav>

          {/* Botões Lúdicos */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Escola%20Reinado%20da%20Crian%C3%A7a."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E8F8F0] text-[#1e6b47] font-fredoka font-bold text-sm hover:bg-[#2ECC71] hover:text-white transition-all shadow-sm hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="#visita"
              className="btn-jelly inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-kingdom-coral to-[#E74C3C] text-white font-fredoka font-bold text-sm tracking-wide"
            >
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Agendar Visita</span>
            </motion.a>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-kingdom-sun/30 text-kingdom-dark"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              className="lg:hidden mt-2 p-5 rounded-[2rem] bg-white shadow-2xl border-2 border-kingdom-sky/20 flex flex-col gap-3 font-fredoka text-lg"
            >
              <a onClick={() => setIsOpen(false)} href="#castelo" className="py-2 px-3 rounded-xl hover:bg-kingdom-sky/15">🏰 Quem Somos</a>
              <a onClick={() => setIsOpen(false)} href="#fases" className="py-2 px-3 rounded-xl hover:bg-kingdom-mint/20">🌈 Nossas Turmas</a>
              <a onClick={() => setIsOpen(false)} href="#magia" className="py-2 px-3 rounded-xl hover:bg-kingdom-lavender/30">🎨 Proposta Pedagógica</a>
              <a onClick={() => setIsOpen(false)} href="#diaadia" className="py-2 px-3 rounded-xl hover:bg-kingdom-sun/30">⏰ Rotina no Reino</a>
              <a onClick={() => setIsOpen(false)} href="#reino-dos-pais" className="py-2 px-3 rounded-xl hover:bg-kingdom-rose/25">❤️ Depoimentos</a>
              <a onClick={() => setIsOpen(false)} href="#mapa" className="py-2 px-3 rounded-xl hover:bg-kingdom-sky/15">📍 Localização</a>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  onClick={() => setIsOpen(false)}
                  href="#visita"
                  className="w-full text-center py-3 rounded-2xl bg-kingdom-coral text-white font-bold"
                >
                  ✨ Agendar Visita Encantada
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
