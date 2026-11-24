import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';

const navLinks = [
  { href: '#sobre', label: 'A Escola', hover: 'hover:text-[#1E5A87]' },
  { href: '#metodologia', label: 'Metodologia', hover: 'hover:text-[#E63946]' },
  { href: '#segmentos', label: 'Segmentos', hover: 'hover:text-[#2E9A68]' },
  { href: '#diferenciais', label: 'Diferenciais', hover: 'hover:text-[#2B90D9]' },
  { href: '#espaco', label: 'Infraestrutura', hover: 'hover:text-[#1E5A87]' },
  { href: '#depoimentos', label: 'Depoimentos', hover: 'hover:text-[#E63946]' },
  { href: '#localizacao', label: 'Localização', hover: 'hover:text-[#2E9A68]' },
];

export default function Header({ onOpenAgendamento }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Institucional */}
      <div className="bg-gradient-to-r from-[#1E5A87] via-[#2B90D9] to-[#2E9A68] px-4 py-2 text-center text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-[#F6C343] shrink-0" />
        <span>Matrículas Abertas 2027 • Do Maternal 1 ao 5º Ano</span>
        <span className="hidden sm:inline bg-white text-[#1E5A87] px-2.5 py-0.5 rounded-full font-extrabold ml-2 shadow-sm text-xs">
          Turmas Reduzidas • Robótica • Horário Flexível
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all shadow-sm border-b border-slate-100">
        <div className="mx-auto flex h-20 sm:h-24 max-w-7xl items-center justify-between gap-3 xl:gap-4 px-4 xl:px-5">
          {/* Logotipo Oficial da Instituição */}
          <a
            href="#inicio"
            className="flex shrink-0 items-center gap-2.5 xl:gap-3.5 group rounded-2xl"
            aria-label="Escola Borboletinha Encantada e Colégio Estrutura"
          >
            <div className="relative shrink-0">
              <img
                src="./logo.png"
                alt="Escola Borboletinha Encantada e Colégio Estrutura"
                className="h-12 sm:h-14 xl:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
              />
              <span className="absolute -top-1 -right-1 text-sm select-none" aria-hidden="true">
                🦋
              </span>
            </div>
            <div className="leading-tight whitespace-nowrap">
              <span className="block font-quicksand text-base sm:text-lg xl:text-xl font-black tracking-tight text-[#1E5A87] group-hover:text-[#E63946] transition-colors">
                Borboletinha Encantada
              </span>
              <span className="block text-[11px] xl:text-xs font-extrabold uppercase tracking-wider text-[#6C7A89]">
                &amp; Colégio Estrutura
              </span>
            </div>
          </a>

          {/* Menu Desktop + CTA */}
          <div className="hidden items-center gap-4 xl:gap-6 lg:flex shrink-0">
            <nav className="flex items-center gap-3 xl:gap-5 font-quicksand" aria-label="Navegação Principal">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-xs xl:text-sm font-bold text-[#2C3E50] ${item.hover} transition-colors`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={onOpenAgendamento}
              className="inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full bg-gradient-to-r from-[#F6C343] to-[#f2b21d] px-4 py-2.5 xl:px-5 xl:py-3 font-quicksand text-xs xl:text-sm font-black text-[#2C3E50] shadow-md shadow-[#F6C343]/30 hover:scale-105 active:scale-95 transition-transform"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Agendar Visita 2027</span>
            </button>
          </div>

          {/* Menu Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-2xl p-2.5 text-[#2C3E50] bg-[#edf4ff] hover:bg-[#2B90D9] hover:text-white transition-colors lg:hidden"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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
              transition={{ duration: 0.22 }}
              className="overflow-hidden bg-white px-5 py-6 shadow-lg lg:hidden border-t border-slate-100"
            >
              <nav className="flex flex-col gap-3.5 font-quicksand font-bold" aria-label="Navegação Mobile">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    href={item.href}
                    className={`text-base text-[#2C3E50] ${item.hover}`}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenAgendamento) onOpenAgendamento();
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F6C343] to-[#f2b21d] px-6 py-4 font-quicksand text-base font-black text-[#2C3E50] shadow-md"
                >
                  <Calendar className="h-5 w-5" />
                  Agendar Visita 2027
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
