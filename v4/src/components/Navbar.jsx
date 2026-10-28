import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MessageCircle,
  Menu,
  X,
  Clock,
  MapPin,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

export default function Navbar({ onOpenVisitModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Quem Somos', href: '#sobre', color: 'hover:text-reinado-celeste' },
    { label: 'Turmas & Turnos', href: '#segmentos', color: 'hover:text-reinado-tangerina' },
    { label: 'Projetos & Bilíngue', href: '#projetos', color: 'hover:text-reinado-limao-dark' },
    { label: 'Fotos & Vídeos', href: '#galeria', color: 'hover:text-reinado-celeste' },
    { label: 'Famílias', href: '#depoimentos', color: 'hover:text-reinado-tangerina' },
    { label: 'Localização', href: '#localizacao', color: 'hover:text-reinado-limao-dark' },
  ];

  return (
    <>
      {/* Top Bar Institucional & Gatilho de Urgência */}
      <div className="bg-reinado-ink text-white text-xs sm:text-sm py-2.5 px-4 border-b-2 border-reinado-sol">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-bold text-reinado-sol">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              Bairro Mariano Procópio • Juiz de Fora/MG
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-white/90 font-semibold">
              <Clock className="w-3.5 h-3.5 text-reinado-limao shrink-0" />
              Visitas Exclusivas: Seg a Sex, 08h30 às 11h e 14h às 16h30
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-reinado-tangerina text-white font-extrabold text-[11px] uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3" /> Matrículas Abertas • Vagas Limitadas
            </span>
          </div>
        </div>
      </div>

      {/* Header Principal Limpo & Interativo (Inspiração Visconde de Porto Seguro + Red Balloon) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md border-b border-reinado-celeste/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-22 py-3 flex items-center justify-between gap-4">
          {/* Identidade Visual Oficial (.SVG + .PNG) */}
          <a
            href="#inicio"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Colégio Reinado da Criança - Página Inicial"
          >
            <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-reinado-celeste-light via-white to-reinado-sol-light p-1.5 border-2 border-reinado-celeste/30 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="./logo.png"
                onError={(e) => {
                  e.currentTarget.src = './logo.svg';
                }}
                alt="Logotipo Colégio Reinado da Criança"
                className="w-full h-full object-contain"
              />
              <span
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-reinado-limao border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
                title="Ensino Afetivo e Seguro"
              >
                ✓
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-fredoka text-xl sm:text-2xl font-bold tracking-tight leading-none">
                <span className="text-reinado-celeste-dark">Colégio Reinado</span>
                <span className="text-reinado-tangerina">da Criança</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                <span className="px-2 py-0.5 rounded-full bg-reinado-celeste-light text-reinado-celeste-dark font-extrabold text-[11px]">
                  👶 Berçário (4m+) ao Maternal III
                </span>
                <span className="px-2 py-0.5 rounded-full bg-reinado-limao-light text-reinado-limao-dark font-extrabold text-[11px]">
                  📚 1º ao 5º Ano
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-reinado-sol-light text-reinado-sol-dark font-extrabold text-[11px]">
                  💛 Integral Humanizado
                </span>
              </div>
            </div>
          </a>

          {/* Navegação Desktop Limpa */}
          <nav className="hidden xl:flex items-center gap-6 font-quicksand font-bold text-[15px] text-reinado-ink">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${item.color}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAs de Conversão Destacados */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5532999991234?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20Secretaria%20de%20Matr%C3%ADculas%20do%20Col%C3%A9gio%20Reinado%20da%20Crian%C3%A7a."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-reinado-limao-light text-reinado-limao-dark font-quicksand font-extrabold text-sm hover:bg-reinado-limao hover:text-white transition-all border border-reinado-limao/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>(32) 99999-1234</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenVisitModal()}
              className="btn-tangerina inline-flex items-center gap-2 px-6 py-3 rounded-full font-fredoka font-bold text-sm sm:text-base tracking-wide cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita</span>
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 rounded-2xl bg-reinado-celeste-light text-reinado-celeste-dark hover:bg-reinado-celeste hover:text-white transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Gaveta Mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-reinado-celeste/15 px-5 py-5 shadow-2xl"
            >
              <div className="flex flex-col gap-2 font-quicksand font-bold text-base">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-reinado-celeste-light text-reinado-ink"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-reinado-celeste" />
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenVisitModal();
                  }}
                  className="btn-tangerina w-full py-3.5 rounded-2xl font-fredoka font-bold text-base flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Visita pelo WhatsApp</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-reinado-slate">
                  <ShieldCheck className="w-4 h-4 text-reinado-limao-dark" />
                  <span>Atendimento exclusivo com hora marcada no Mariano Procópio</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

