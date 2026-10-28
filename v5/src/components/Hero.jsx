import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Play,
  Sparkles,
  Clock,
  MapPin,
  ShieldCheck,
  Star,
} from 'lucide-react';
import {
  CrownDoodle,
  SunSmileyDoodle,
  RainbowStickerDoodle,
} from './PlayfulDoodles';

export default function Hero({ onOpenVisitModal, onOpenVideoModal }) {
  const quickBadges = [
    {
      emoji: '👶',
      title: 'Berçário ao 5º Ano',
      desc: '4 meses a 10 anos',
      bg: 'bg-reinado-celeste-light',
    },
    {
      emoji: '☀️',
      title: 'Integral Humanizado',
      desc: 'Manhã, Tarde e Integral',
      bg: 'bg-reinado-sol-light',
    },
    {
      emoji: '🇬🇧',
      title: 'Inglês Todo Dia',
      desc: 'Imersão lúdica diária',
      bg: 'bg-reinado-limao-light',
    },
    {
      emoji: '👩‍🍳',
      title: 'Mini-Chef & Horta',
      desc: 'Vivências práticas',
      bg: 'bg-reinado-tangerina-light',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden"
    >
      {/* Sol Ilustrado Discreto no Canto Superior */}
      <div className="hidden lg:block absolute top-10 right-12 pointer-events-none opacity-65">
        <SunSmileyDoodle className="w-14 h-14" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* COLUNA ESQUERDA: Narrativa Afetiva, Calma e Acolhedora */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Selos Topo Sóbrios */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 font-fredoka font-medium text-xs sm:text-sm text-reinado-ink shadow-sticker-sm">
                <MapPin className="w-3.5 h-3.5 text-reinado-tangerina" />
                Bairro Mariano Procópio • Juiz de Fora
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-reinado-sol-light border border-amber-200/80 font-fredoka font-semibold text-xs sm:text-sm text-reinado-sol-dark">
                <Sparkles className="w-3.5 h-3.5 text-reinado-tangerina" />
                Matrículas Abertas
              </span>
            </div>

            {/* Título Principal Equilibrado */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-reinado-celeste font-fredoka font-semibold text-sm sm:text-base">
                <CrownDoodle className="w-5 h-5" />
                <span>Educação Infantil & Ensino Fundamental I</span>
              </div>

              <h1 className="font-fredoka text-3xl sm:text-5xl lg:text-[50px] font-bold text-reinado-ink leading-[1.12] tracking-tight">
                Onde cada criança é{' '}
                <span className="inline-block px-3 py-0.5 rounded-xl bg-reinado-sol/35 text-reinado-ink">
                  chamada pelo nome
                </span>{' '}
                e aprende com afeto.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-reinado-slate font-semibold leading-relaxed max-w-2xl">
              Do <strong>Berçário (a partir de 4 meses)</strong> ao{' '}
              <strong>5º Ano do Fundamental I</strong>. Unimos a segurança de um ambiente acolhedor no{' '}
              <strong>Mariano Procópio</strong> ao nosso{' '}
              <strong className="text-reinado-ink">Tempo Integral Humanizado</strong>, Iniciação Bilíngue diária, Oficina de Mini-Chef e Horta Comunitária.
            </p>

            {/* Botões de Ação Equilibrados */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-toy px-6 py-3.5 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-base sm:text-lg flex items-center justify-center gap-3 cursor-pointer"
              >
                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </span>
                <div className="text-left leading-tight">
                  <span className="block">Agendar Visita pelo WhatsApp</span>
                  <span className="block text-[11px] font-nunito font-semibold text-white/90">
                    Seg a Sex • 08h30 às 11h e 14h às 16h30
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => onOpenVideoModal()}
                className="btn-toy px-5 py-3.5 rounded-full bg-white hover:bg-reinado-celeste-light text-reinado-ink font-fredoka font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-reinado-celeste-light text-reinado-celeste flex items-center justify-center shrink-0">
                  <Play className="w-4 h-4 fill-reinado-celeste ml-0.5" />
                </span>
                <span>Conhecer em Vídeo (1 min)</span>
              </button>
            </div>

            {/* 4 Mini Cards Pastel Sóbrios */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {quickBadges.map((item) => (
                <div
                  key={item.title}
                  className={`${item.bg} border border-slate-200/80 rounded-2xl p-3.5 transition-transform hover:-translate-y-0.5`}
                >
                  <div className="text-xl mb-1">{item.emoji}</div>
                  <p className="font-fredoka font-semibold text-xs sm:text-sm text-reinado-ink leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] font-semibold text-reinado-slate mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUNA DIREITA: Moldura Fotográfica Suave e Acolhedora */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="washi-tape" />

              <div className="absolute -top-6 -left-3 z-20 opacity-85">
                <RainbowStickerDoodle className="w-16 h-11" />
              </div>

              {/* Card Principal com Foto Grande */}
              <div className="sticker-card rounded-[2.25rem] p-3.5 bg-white">
                <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/4.2] bg-reinado-celeste-light">
                  <img
                    src="./assets/hero-criancas.png"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80';
                    }}
                    alt="Crianças sorrindo no Colégio Reinado da Criança"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/65 via-transparent to-transparent" />

                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 text-reinado-limao-dark border border-slate-200 font-fredoka font-semibold text-xs shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-reinado-limao" />
                    Ambiente Seguro e Afetivo
                  </div>

                  {/* Legenda Interna Suave */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-reinado-tangerina block">
                          Mariano Procópio • Juiz de Fora
                        </span>
                        <p className="font-fredoka font-semibold text-sm text-reinado-ink">
                          Infância respeitada, feliz e acolhida todos os dias
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-reinado-sol-light px-2.5 py-1 rounded-full border border-amber-200 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-reinado-sol text-reinado-sol-dark" />
                        <span className="font-fredoka font-bold text-xs text-reinado-ink">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Flutuante Discreto: Horários de Visita */}
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="mt-3.5 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-4 z-20 w-full sm:w-auto bg-white hover:bg-reinado-celeste-light text-reinado-ink rounded-2xl px-4 py-2.5 border border-slate-200 shadow-sticker flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
              >
                <Clock className="w-4 h-4 text-reinado-celeste shrink-0" />
                <div className="text-left leading-tight">
                  <span className="block font-fredoka font-semibold text-xs">
                    Visitas Exclusivas (30 em 30 min)
                  </span>
                  <span className="block text-[11px] font-semibold text-reinado-slate">
                    WhatsApp (32) 99999-1234
                  </span>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
