import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: 'Proposta',
      href: '#sobre',
      hoverClass: 'hover:bg-[#0096FF] hover:text-white',
    },
    {
      label: 'Turmas',
      href: '#segmentos',
      hoverClass: 'hover:bg-[#FF6B00] hover:text-white',
    },
    {
      label: 'Vivências',
      href: '#projetos',
      hoverClass: 'hover:bg-[#65C11F] hover:text-white',
    },
    {
      label: 'Depoimentos',
      href: '#depoimentos',
      hoverClass: 'hover:bg-[#FFC700] hover:text-reinado-ink',
    },
    {
      label: 'Espaço',
      href: '#galeria',
      hoverClass: 'hover:bg-[#FF007A] hover:text-white',
    },
    {
      label: 'Localização',
      href: '#localizacao',
      hoverClass: 'hover:bg-reinado-ink hover:text-[#FFC700]',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F1F1F1]/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Marca Simples */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 font-fredoka font-bold text-lg sm:text-xl text-reinado-ink"
        >
          <img
            src="./logo.svg"
            alt="Colégio Reinado da Criança"
            className="w-8 h-8 object-contain"
          />
          <span>
            Reinado <span className="text-reinado-tangerina">da Criança</span>
          </span>
        </a>

        {/* Links com Hover de Cores Diferentes */}
        <nav className="hidden md:flex items-center gap-2 font-quicksand font-extrabold text-sm text-reinado-ink">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${item.hoverClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl text-reinado-ink hover:bg-black/5 cursor-pointer"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Menu Mobile Simples com Cores Diferentes no Hover */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-black/10 px-4 py-3 flex flex-col gap-1.5 font-quicksand font-extrabold text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`py-2 px-3.5 rounded-xl text-reinado-ink transition-colors ${item.hoverClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
