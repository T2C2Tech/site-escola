import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  ShieldCheck,
  Sparkles,
  Sun,
  Smile,
  Brain,
  Users,
  Clock,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export default function PropostaAfetiva({ onOpenVisitModal }) {
  const [activeTab, setActiveTab] = useState('afetivo');

  const pillars = [
    {
      id: 'afetivo',
      badge: 'Acolhimento Real',
      title: 'Onde cada criança é chamada pelo nome',
      icon: Heart,
      color: 'bg-reinado-tangerina',
      lightBg: 'bg-reinado-tangerina-light',
      textColor: 'text-reinado-tangerina-dark',
      description:
        'No Colégio Reinado da Criança, seu filho nunca é apenas um número de matrícula. Nossa equipe conhece a história, o temperamento e as conquistas de cada aluno do Mariano Procópio, criando um vínculo verdadeiro entre escola e família.',
      highlights: [
        'Turmas reduzidas para atenção realmente individualizada',
        'Adaptação escolar respeitosa e acolhedora com os pais',
        'Comunicação direta e transparente todos os dias com a família',
        'Ambiente seguro no coração do bairro Mariano Procópio',
      ],
    },
    {
      id: 'integral',
      badge: 'Tranquilidade para os Pais',
      title: 'Tempo Integral Humanizado (Sem Sobrecarga)',
      icon: Sun,
      color: 'bg-reinado-celeste',
      lightBg: 'bg-reinado-celeste-light',
      textColor: 'text-reinado-celeste-dark',
      description:
        'Sabemos que os pais precisam trabalhar com o coração em paz. Nosso Tempo Integral na Educação Infantil foi desenhado para nutrir a infância com afeto, descanso, alimentação saudável, brincar livre e oficinas ricas — sem estresse.',
      highlights: [
        'Rotina equilibrada entre estímulo pedagógico, brincar e sono tranquilo',
        'Refeições nutritivas acompanhadas de educação alimentar (Mini-Chef)',
        'Vivências diárias de Inglês, Horta Comunitária e Psicomotricidade',
        'Higiene cuidadosa e monitoramento constante por profissionais apaixonados',
      ],
    },
    {
      id: 'desenvolvimento',
      badge: 'Formação 360°',
      title: 'Desenvolvimento Emocional, Social e Cognitivo',
      icon: Brain,
      color: 'bg-reinado-limao',
      lightBg: 'bg-reinado-limao-light',
      textColor: 'text-reinado-limao-dark',
      description:
        'Unimos a tradição acolhedora de escola de bairro a uma estrutura pedagógica moderna. Preparamos crianças seguras emocionalmente, curiosas intelectualmente e éticas no convívio social.',
      highlights: [
        'Educação Socioemocional estruturada com o programa "Líder em Mim"',
        'Base alfabética, científica e matemática sólida no Fundamental I',
        'Estímulo à autonomia, empatia e resolução pacífica de conflitos',
        'Espaços planejados: salas temáticas, brinquedoteca, pátio e horta',
      ],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-celeste-light text-reinado-celeste-dark font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Nosso Grande Diferencial no Mariano Procópio
          </span>
          <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Tradição acolhedora de bairro com{' '}
            <span className="text-reinado-tangerina">estrutura moderna</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-reinado-slate font-semibold">
            Mais do que ensinar conteúdos, formamos crianças felizes, confiantes e amadas em cada etapa do crescimento.
          </p>
        </div>

        {/* Abas Interativas (Inspiração Visconde de Porto Seguro) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-fredoka font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  isActive
                    ? `${pillar.color} text-white shadow-lg scale-105`
                    : 'bg-slate-100 text-reinado-ink hover:bg-reinado-celeste-light'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{pillar.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Painel Interativo do Pilar Selecionado */}
        <motion.div
          key={currentPillar.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-[2.25rem] bg-gradient-to-br from-reinado-canvas via-white to-reinado-celeste-light/40 border-2 border-reinado-celeste/20 p-6 sm:p-10 lg:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span
                className={`inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${currentPillar.lightBg} ${currentPillar.textColor}`}
              >
                {currentPillar.badge}
              </span>
              <h3 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                {currentPillar.title}
              </h3>
              <p className="text-base sm:text-lg text-reinado-slate font-semibold leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {currentPillar.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-reinado-celeste/15 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-reinado-limao shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-reinado-ink leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="btn-tangerina inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-fredoka font-bold text-base cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Conhecer Pessoalmente o Colégio</span>
                </button>
                <span className="text-xs sm:text-sm font-extrabold text-reinado-slate">
                  ✨ Atendimento exclusivo para cada família (30 em 30 min)
                </span>
              </div>
            </div>

            {/* Cards Visuais de Estatísticas & Confiança */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="card-vibrante p-5 bg-reinado-celeste-light/60 border-2 border-reinado-celeste/30">
                <div className="w-11 h-11 rounded-2xl bg-reinado-celeste text-white flex items-center justify-center mb-3">
                  <Smile className="w-6 h-6" />
                </div>
                <p className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                  100% Afetivo
                </p>
                <p className="text-xs sm:text-sm font-bold text-reinado-slate mt-1">
                  Crianças acolhidas pelo nome desde a portaria até a sala de aula.
                </p>
              </div>

              <div className="card-vibrante p-5 bg-reinado-sol-light/70 border-2 border-reinado-sol">
                <div className="w-11 h-11 rounded-2xl bg-reinado-sol text-reinado-ink flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                  3 Turnos
                </p>
                <p className="text-xs sm:text-sm font-bold text-reinado-slate mt-1">
                  Manhã, Tarde e o nosso Tempo Integral Humanizado no Infantil.
                </p>
              </div>

              <div className="card-vibrante p-5 bg-reinado-limao-light/70 border-2 border-reinado-limao/40">
                <div className="w-11 h-11 rounded-2xl bg-reinado-limao text-white flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <p className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                  4m aos 10 anos
                </p>
                <p className="text-xs sm:text-sm font-bold text-reinado-slate mt-1">
                  Jornada completa do Berçário ao 5º ano do Ensino Fundamental I.
                </p>
              </div>

              <div className="card-vibrante p-5 bg-reinado-tangerina-light/70 border-2 border-reinado-tangerina/40">
                <div className="w-11 h-11 rounded-2xl bg-reinado-tangerina text-white flex items-center justify-center mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                  Segurança Total
                </p>
                <p className="text-xs sm:text-sm font-bold text-reinado-slate mt-1">
                  Tradição e tranquilidade no bairro Mariano Procópio.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

