import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Sun,
  Clock,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Smile,
} from 'lucide-react';
import { CrownDoodle } from './PlayfulDoodles';

export default function PropostaAfetiva({ onOpenVisitModal }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      emoji: '💛',
      tag: 'Pilar 01 • Afeto Individualizado',
      title: 'Cada criança chamada pelo nome',
      activeTabClass: 'bg-reinado-sol-light border-amber-300 text-reinado-ink',
      lightBg: 'bg-reinado-sol-light/70',
      desc: 'Nada de turmas impessoais. Aqui conhecemos o jeitinho, o sorriso, a história e o ritmo de cada aluno e de sua família no bairro Mariano Procópio.',
      highlights: [
        'Adaptação respeitosa e acolhedora com a família',
        'Comunicação diária próxima e transparente com os pais',
        'Ambiente familiar onde a criança se sente segura e pertencente',
      ],
      image: './assets/bercario-afetivo.png',
    },
    {
      emoji: '☀️',
      tag: 'Pilar 02 • Paz para os Pais',
      title: 'Tempo Integral Humanizado',
      activeTabClass: 'bg-reinado-celeste-light border-sky-300 text-reinado-ink',
      lightBg: 'bg-reinado-celeste-light/70',
      desc: 'Trabalhe com tranquilidade sabendo que seu filho vive uma rotina equilibrada entre brincar livre, oficinas criativas, refeições nutritivas, higiene e descanso.',
      highlights: [
        'Opções de Manhã, Tarde ou Integral Humanizado',
        'Cardápio saudável acompanhado e rotina de descanso acolhedora',
        'Vivências de Inglês, Mini-Chef e Horta integradas à rotina',
      ],
      image: './assets/minichef-cozinha.png',
    },
    {
      emoji: '👑',
      tag: 'Pilar 03 • Desenvolvimento Integral',
      title: 'Emocional, Social e Cognitivo',
      activeTabClass: 'bg-reinado-limao-light border-emerald-300 text-reinado-ink',
      lightBg: 'bg-reinado-limao-light/70',
      desc: 'Unimos uma base pedagógica consistente do Berçário ao 5º Ano com o programa socioemocional "Líder em Mim", formando crianças confiantes, curiosas e empáticas.',
      highlights: [
        'Autonomia, escuta ativa e liderança positiva desde cedo',
        'Aprendizado prático com projetos reais e ludicidade na medida certa',
        'Preparação segura para todos os desafios escolares',
      ],
      image: './assets/horta-comunitaria.png',
    },
  ];

  const current = pillars[activePillar];

  return (
    <section id="sobre" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho Sóbrio e Acolhedor */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 font-fredoka font-medium text-xs sm:text-sm text-reinado-ink shadow-sticker-sm">
            <Heart className="w-3.5 h-3.5 fill-reinado-tangerina text-reinado-tangerina" />
            Nossa Proposta Pedagógica no Mariano Procópio
          </span>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Acolhimento de segunda casa aliado a uma{' '}
            <span className="text-reinado-celeste">estrutura moderna</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Conheça os 3 pilares que guiam o cuidado diário no{' '}
            <strong>Colégio Reinado da Criança</strong>:
          </p>
        </div>

        {/* Seletores dos 3 Pilares */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <button
                key={pillar.title}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`text-left p-5 rounded-3xl border transition-all cursor-pointer flex items-center gap-4 ${
                  isSelected
                    ? `${pillar.activeTabClass} shadow-sticker`
                    : 'bg-white border-slate-200/90 hover:bg-slate-50/80 text-reinado-ink'
                }`}
              >
                <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shrink-0">
                  {pillar.emoji}
                </span>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-reinado-slate block">
                    {pillar.tag}
                  </span>
                  <h3 className="font-fredoka text-base sm:text-lg font-bold leading-snug text-reinado-ink mt-0.5">
                    {pillar.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Painel do Pilar Selecionado */}
        <motion.div
          key={activePillar}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`sticker-card rounded-[2rem] p-6 sm:p-10 ${current.lightBg}`}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 font-fredoka font-medium text-xs text-reinado-slate">
                <CrownDoodle className="w-4 h-4" />
                <span>{current.tag}</span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg text-reinado-slate font-semibold leading-relaxed">
                {current.desc}
              </p>

              <div className="grid gap-2.5 pt-1">
                {current.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white/95 p-3.5 rounded-2xl border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-reinado-limao shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-reinado-ink">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="btn-toy px-6 py-3 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita Guiada</span>
                </button>

                <span className="text-xs sm:text-sm font-semibold text-reinado-slate flex items-center gap-1.5">
                  <Smile className="w-4 h-4 text-reinado-tangerina" />
                  Do Berçário (4 meses) ao 5º Ano
                </span>
              </div>
            </div>

            {/* Foto Limpa à Direita */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-3 rounded-[1.75rem] border border-slate-200 shadow-sticker">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-1.5">
                  <span className="font-fredoka font-semibold text-sm text-reinado-ink">
                    {current.emoji} {current.title}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-reinado-sol-light border border-amber-200 font-fredoka font-medium text-xs text-reinado-sol-dark">
                    Mariano Procópio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Faixa Resumo dos 3 Turnos */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Sun,
              badge: 'Manhã',
              title: 'Turno da Manhã',
              desc: 'Educação Infantil (Berçário ao Maternal III) e Ensino Fundamental I (1º ao 5º ano).',
              badgeClass: 'bg-reinado-celeste-light text-reinado-celeste-dark border-sky-200',
              preset: 'Manhã',
            },
            {
              icon: Clock,
              badge: 'Tarde',
              title: 'Turno da Tarde',
              desc: 'Educação Infantil (Berçário ao Maternal III) e Ensino Fundamental I (1º ao 5º ano).',
              badgeClass: 'bg-reinado-sol-light text-reinado-sol-dark border-amber-200',
              preset: 'Tarde',
            },
            {
              icon: ShieldCheck,
              badge: 'Destaque',
              title: 'Integral Humanizado',
              desc: 'Do Berçário (4m+) ao Maternal III com alimentação saudável, oficinas, descanso e afeto.',
              badgeClass: 'bg-reinado-limao-light text-reinado-limao-dark border-emerald-200',
              preset: 'Integral Humanizado',
            },
          ].map((shift) => {
            const Icon = shift.icon;
            return (
              <div
                key={shift.title}
                className="sticker-card rounded-3xl p-6 flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full border font-fredoka font-semibold text-xs ${shift.badgeClass}`}
                    >
                      {shift.badge}
                    </span>
                    <Icon className="w-5 h-5 text-reinado-slate" />
                  </div>
                  <h4 className="font-fredoka text-xl font-bold text-reinado-ink">
                    {shift.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-reinado-slate mt-1.5 leading-relaxed">
                    {shift.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenVisitModal({ turno: shift.preset })}
                  className="mt-5 w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-reinado-celeste-light border border-slate-200 font-fredoka font-semibold text-xs sm:text-sm text-reinado-ink transition-colors cursor-pointer"
                >
                  Consultar Vagas ({shift.badge}) →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
