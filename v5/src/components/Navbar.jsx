import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { CrownDoodle } from './PlayfulDoodles';

export default function Navbar({ onOpenVisitModal }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'O Reino',
      href: '#sobre',
      hoverClass: 'hover:bg-reinado-celeste-light hover:text-reinado-celeste-dark',
    },
    {
      label: 'Turmas',
      href: '#segmentos',
      hoverClass: 'hover:bg-reinado-sol-light hover:text-reinado-sol-dark',
    },
    {
      label: 'Vivências',
      href: '#projetos',
      hoverClass: 'hover:bg-reinado-limao-light hover:text-reinado-limao-dark',
    },
    {
      label: 'Rotina',
      href: '#rotina',
      hoverClass: 'hover:bg-reinado-tangerina-light hover:text-reinado-tangerina-dark',
    },
    {
      label: 'Famílias',
      href: '#depoimentos',
      hoverClass: 'hover:bg-reinado-chiclete-light hover:text-reinado-ink',
    },
    {
      label: 'Espaço',
      href: '#galeria',
      hoverClass: 'hover:bg-reinado-uva-light hover:text-reinado-uva',
    },
    {
      label: 'Visitas',
      href: '#localizacao',
      hoverClass: 'hover:bg-slate-100 hover:text-reinado-ink',
    },
  ];

  return (
    <header className="sticky top-2 sm:top-3 z-40 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-sticker px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between gap-2">
          {/* Logo + Marca Sóbria e Infantil */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-reinado-sol-light border border-amber-200/80 flex items-center justify-center p-1.5">
              <img
                src="./logo.png"
                onError={(e) => {
                  e.currentTarget.src = './logo.svg';
                }}
                alt="Colégio Reinado da Criança"
                className="w-full h-full object-contain"
              />
              <CrownDoodle className="w-4 h-4 absolute -top-1.5 -right-1.5" />
            </div>
            <div className="leading-tight">
              <span className="block font-fredoka font-semibold text-base sm:text-lg text-reinado-ink">
                Reinado <span className="text-reinado-tangerina">da Criança</span>
              </span>
              <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-semibold text-reinado-slate">
                <Sparkles className="w-3 h-3 text-reinado-celeste" /> Mariano Procópio • Juiz de Fora
              </span>
            </div>
          </a>

          {/* Navegação Limpa */}
          <nav className="hidden lg:flex items-center gap-1 font-quicksand font-bold text-sm text-reinado-slate">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-full transition-colors duration-200 ${item.hoverClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA de Agendamento Discreto e Elegante */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenVisitModal()}
              className="btn-toy px-4 sm:px-5 py-2 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Agendar Visita</span>
              <span className="sm:hidden">Visitar</span>
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-reinado-ink cursor-pointer"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="lg:hidden mt-2 bg-white rounded-3xl border border-slate-200 shadow-sticker p-4 grid grid-cols-2 gap-2 font-quicksand font-bold text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 px-3.5 rounded-2xl border border-slate-100 text-reinado-ink transition-colors ${item.hoverClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
