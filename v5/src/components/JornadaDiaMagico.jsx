import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollInteractive';

export default function JornadaDiaMagico({ onOpenVisitModal }) {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      time: '07h30 • Chegada',
      emoji: '🤗',
      title: 'Acolhida Afetiva pelo Nome',
      activeClass: 'bg-reinado-sol-light border-amber-300 text-reinado-ink',
      lightBg: 'bg-reinado-sol-light/60',
      desc: 'Cada criança é recebida no portão com sorriso e chamada pelo próprio nome. Na roda de conversa inicial, acolhemos as novidades e iniciamos o dia com segurança emocional.',
      tag: 'Segurança Emocional & Pertencimento',
    },
    {
      time: '08h30 • Manhã',
      emoji: '🇬🇧',
      title: 'Projetos & Inglês Diário',
      activeClass: 'bg-reinado-celeste-light border-sky-300 text-reinado-ink',
      lightBg: 'bg-reinado-celeste-light/60',
      desc: 'Atividades pedagógicas planejadas para cada faixa etária, salas temáticas e imersão lúdica em Inglês com músicas, jogos e contação de histórias.',
      tag: 'Desenvolvimento Cognitivo & Bilíngue',
    },
    {
      time: '10h00 • Manhã',
      emoji: '🌱',
      title: 'Lanche Saudável, Pátio & Horta',
      activeClass: 'bg-reinado-limao-light border-emerald-300 text-reinado-ink',
      lightBg: 'bg-reinado-limao-light/60',
      desc: 'Pausa para frutas frescas, convivência no pátio ensolarado, circuitos de psicomotricidade e cuidado com a nossa Horta Comunitária.',
      tag: 'Natureza, Movimento & Socialização',
    },
    {
      time: '11h30 • Integral',
      emoji: '🍲',
      title: 'Almoço Nutritivo, Higiene & Descanso',
      activeClass: 'bg-reinado-tangerina-light border-orange-300 text-reinado-ink',
      lightBg: 'bg-reinado-tangerina-light/60',
      desc: 'No Tempo Integral Humanizado, as crianças almoçam com acompanhamento nutricional, realizam a higiene pessoal orientadas e descansam em ambiente tranquilo.',
      tag: 'Cuidado Integral Humanizado',
    },
    {
      time: '14h30 • Tarde',
      emoji: '👩‍🍳',
      title: 'Oficina Mini-Chef & Líder em Mim',
      activeClass: 'bg-reinado-uva-light border-purple-300 text-reinado-ink',
      lightBg: 'bg-reinado-uva-light/60',
      desc: 'Tarde dedicada à criatividade na Cozinha Pedagógica (Mini-Chef), artes e vivências socioemocionais do programa "Líder em Mim".',
      tag: 'Criatividade & Protagonismo Infantil',
    },
  ];

  const active = steps[selectedStep];

  return (
    <section
      id="rotina"
      className="py-16 lg:py-24 bg-white/80 border-y border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho com Revelação no Scroll */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-reinado-celeste-light border border-sky-200 text-reinado-celeste-dark font-fredoka font-semibold text-xs sm:text-sm">
            <Sun className="w-3.5 h-3.5 text-reinado-tangerina" />
            Rotina Escolar & Tempo Integral Humanizado
          </span>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Como funciona o dia a dia no{' '}
            <span className="text-reinado-tangerina">nosso Reino</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Acompanhe passo a passo nossa rotina equilibrada entre aprendizado, afeto, alimentação e descanso:
          </p>
        </ScrollReveal>

        {/* Trilha de Botões Numerados com Entrada Escalonada */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => {
            const isCurrent = selectedStep === idx;
            return (
              <ScrollReveal key={step.title} direction="up" delay={idx * 0.07}>
                <button
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full h-full p-4 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                    isCurrent
                      ? `${step.activeClass} shadow-sticker`
                      : 'bg-white border-slate-200 text-reinado-ink hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-xl">
                      {step.emoji}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-fredoka font-semibold bg-white border border-slate-200 text-reinado-slate">
                      0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-reinado-slate block">
                      {step.time}
                    </span>
                    <p className="font-fredoka font-semibold text-xs sm:text-sm leading-tight mt-0.5 text-reinado-ink">
                      {step.title}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Cartão de Destaque da Etapa Selecionada */}
        <ScrollReveal direction="scale">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`sticker-card rounded-[2rem] p-6 sm:p-9 ${active.lightBg}`}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4 sm:gap-6 max-w-3xl">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-3xl shrink-0">
                  {active.emoji}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-reinado-ink text-white font-fredoka font-medium text-xs">
                      {active.time}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white border border-slate-200 font-fredoka font-medium text-xs text-reinado-slate">
                      {active.tag}
                    </span>
                  </div>

                  <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                    {active.title}
                  </h3>

                  <p className="text-sm sm:text-base text-reinado-slate font-semibold leading-relaxed">
                    {active.desc}
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    onOpenVisitModal({ turno: 'Integral Humanizado' })
                  }
                  className="btn-toy w-full lg:w-auto px-6 py-3.5 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Conhecer a Rotina Pessoalmente</span>
                </button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
