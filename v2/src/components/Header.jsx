import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Institucional */}
      <div className="bg-gradient-to-r from-[#1E5A87] via-[#2B90D9] to-[#2E9A68] px-4 py-2 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 animate-spin text-[#F6C343]" />
        <span>Matrículas Abertas 2027 • Do Maternal 1 ao 5º Ano</span>
        <span className="hidden sm:inline bg-white text-[#1E5A87] px-2.5 py-0.5 rounded-full font-extrabold ml-2 shadow-sm text-xs">
          Turmas Reduzidas • Robótica • Horário Flexível
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all shadow-sm border-b border-slate-100">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-5">
          {/* Logotipo Oficial da Instituição */}
          <a href="#inicio" className="flex items-center gap-3.5 group" aria-label="Escola Borboletinha Encantada e Colégio Estrutura">
            <div className="relative">
              <img
                src="./logo.png"
                alt="Escola Borboletinha Encantada e Colégio Estrutura"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
              <span className="absolute -top-1 -right-1 text-sm animate-bounce">🦋</span>
            </div>
            <div>
              <div className="leading-tight">
                <span className="block font-quicksand text-xl sm:text-2xl font-black tracking-tight text-[#1E5A87] group-hover:text-[#E63946] transition-colors">
                  Borboletinha Encantada
                </span>
                <span className="hidden sm:block text-[20px] font-bold text-[#6C7A89]">
                  Colégio Estrutura
                </span>
              </div>
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden items-center gap-6 lg:flex font-quicksand" aria-label="Navegação Principal">
            <a href="#inicio" className="text-sm font-bold text-[#2C3E50] hover:text-[#2B90D9] transition-colors">Início</a>
            <a href="#sobre" className="text-sm font-bold text-[#2C3E50] hover:text-[#1E5A87] transition-colors">Quem Somos</a>
            <a href="#metodologia" className="text-sm font-bold text-[#2C3E50] hover:text-[#E63946] transition-colors">Metodologia</a>
            <a href="#segmentos" className="text-sm font-bold text-[#2C3E50] hover:text-[#2E9A68] transition-colors">Turmas</a>
            <a href="#diferenciais" className="text-sm font-bold text-[#2C3E50] hover:text-[#5E50A1] transition-colors">Diferenciais</a>
            <a href="#espaco" className="text-sm font-bold text-[#2C3E50] hover:text-[#F6C343] transition-colors">Nosso Espaço</a>
            <a href="#projetos" className="text-sm font-bold text-[#2C3E50] hover:text-[#2B90D9] transition-colors">Momentos & Projetos</a>
            <a href="#localizacao" className="text-sm font-bold text-[#2C3E50] hover:text-[#1E5A87] transition-colors">Localização</a>
          </nav>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-2xl p-2.5 text-[#2C3E50] bg-[#edf4ff] hover:bg-[#2B90D9] hover:text-white transition-colors lg:hidden"
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
              className="bg-white px-5 py-6 shadow-lg lg:hidden border-t border-slate-100"
            >
              <nav className="flex flex-col gap-3.5 font-quicksand font-bold">
                <a onClick={() => setMobileMenuOpen(false)} href="#inicio" className="text-base text-[#2C3E50] hover:text-[#2B90D9]">Início</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#sobre" className="text-base text-[#2C3E50] hover:text-[#1E5A87]">Quem Somos</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#metodologia" className="text-base text-[#2C3E50] hover:text-[#E63946]">Metodologia (Vygotsky, Freire & Cury)</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#segmentos" className="text-base text-[#2C3E50] hover:text-[#2E9A68]">Turmas (Maternal 1 ao 5º Ano)</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#diferenciais" className="text-base text-[#2C3E50] hover:text-[#5E50A1]">Diferenciais & Robótica</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#espaco" className="text-base text-[#2C3E50] hover:text-[#F6C343]">Nosso Espaço & Hortinha</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#projetos" className="text-base text-[#2C3E50] hover:text-[#2B90D9]">Momentos & Balé/Capoeira</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#localizacao" className="text-base text-[#2C3E50]">Localização</a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
