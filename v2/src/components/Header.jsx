import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Menu, X, Sparkles, Heart } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Alegre Colorido */}
      <div className="bg-gradient-to-r from-[#E63946] via-[#F6C343] to-[#2B90D9] px-4 py-2 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 animate-spin text-white" />
        <span>Matrículas Abertas 2026/2027 • Berçário ao 5º Ano do Ensino Fundamental</span>
        <span className="hidden sm:inline bg-white text-[#E63946] px-2.5 py-0.5 rounded-full font-bold ml-2 shadow-sm">Vagas Limitadas!</span>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all shadow-sm">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5">
          {/* Logotipo da Escola */}
          <a href="#inicio" className="flex items-center gap-3.5 group" aria-label="Escola Borboletinha Encantada - Início">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Logo Borboletinha Encantada"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -top-1 -right-1 text-sm animate-bounce">✨</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-quicksand text-2xl font-black tracking-tight text-[#2C3E50] group-hover:text-[#E63946] transition-colors">
                  Borboletinha
                </span>
                <span className="font-quicksand text-2xl font-black text-[#E63946]">
                  Encantada
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="inline-block rounded-full bg-[#EAF6EE] px-2.5 py-0.5 text-[11px] font-bold text-[#2E9A68]">
                  🌱 Berçário
                </span>
                <span className="inline-block rounded-full bg-[#EFEBFA] px-2.5 py-0.5 text-[11px] font-bold text-[#5E50A1]">
                  🎨 Infantil
                </span>
                <span className="inline-block rounded-full bg-[#cee5ff] px-2.5 py-0.5 text-[11px] font-bold text-[#00639c]">
                  📚 1º ao 5º Ano
                </span>
              </div>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden items-center gap-6 xl:flex font-quicksand" aria-label="Navegação Principal">
            <a href="#inicio" className="text-sm font-bold text-[#2C3E50] hover:text-[#E63946] transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-bold text-[#2C3E50] hover:text-[#2B90D9] transition-colors">Quem Somos</a>
            <a href="#segmentos" className="text-sm font-bold text-[#2C3E50] hover:text-[#2E9A68] transition-colors">Turminhas</a>
            <a href="#diferenciais" className="text-sm font-bold text-[#2C3E50] hover:text-[#5E50A1] transition-colors">Diferenciais</a>
            <a href="#espaco" className="text-sm font-bold text-[#2C3E50] hover:text-[#F6C343] transition-colors">Nosso Espaço</a>
            <a href="#depoimentos" className="text-sm font-bold text-[#2C3E50] hover:text-[#E63946] transition-colors">Famílias</a>
            <a href="#localizacao" className="text-sm font-bold text-[#2C3E50] hover:text-[#2B90D9] transition-colors">Localização</a>
          </nav>

          {/* Botões de Ação Sem Bordas Pesadas */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/5521999999999?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20da%20Borboletinha%20Encantada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EAF6EE] px-5 py-2.5 text-sm font-extrabold text-[#2E9A68] hover:bg-[#2E9A68] hover:text-white transition-all shadow-sm hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#visita"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#db313f] px-6 py-2.5 text-sm font-extrabold text-white shadow-md shadow-[#E63946]/25 hover:scale-105 transition-all"
            >
              <Heart className="h-4 w-4 fill-white" />
              Agendar Visita
            </a>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-2xl p-2.5 text-[#2C3E50] bg-[#edf4ff] hover:bg-[#2B90D9] hover:text-white transition-colors xl:hidden"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Gaveta Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white px-5 py-6 shadow-lg xl:hidden"
            >
              <nav className="flex flex-col gap-4 font-quicksand font-bold">
                <a onClick={() => setMobileMenuOpen(false)} href="#inicio" className="text-base text-[#2C3E50] hover:text-[#E63946]">Início</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#sobre" className="text-base text-[#2C3E50] hover:text-[#2B90D9]">Quem Somos</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#segmentos" className="text-base text-[#2C3E50] hover:text-[#2E9A68]">Turminhas (Berçário ao 5º Ano)</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#diferenciais" className="text-base text-[#2C3E50] hover:text-[#5E50A1]">Diferenciais</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#espaco" className="text-base text-[#2C3E50] hover:text-[#F6C343]">Nosso Espaço</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#depoimentos" className="text-base text-[#2C3E50] hover:text-[#E63946]">Famílias</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#visita" className="text-base text-[#E63946] flex items-center gap-2">Agendar Visita <Heart className="h-4 w-4 fill-[#E63946]" /></a>
                <a onClick={() => setMobileMenuOpen(false)} href="#localizacao" className="text-base text-[#2C3E50]">Localização</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
