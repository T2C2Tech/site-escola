import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowDown } from 'lucide-react';
import WaveTransition from './WaveTransition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const pilaresHero = [
  {
    emoji: '👥',
    cor: 'bg-[#ffdad8]',
    titulo: 'Turmas Reduzidas',
    sub: 'Mais atenção e cuidado individual',
  },
  {
    emoji: '🤖',
    cor: 'bg-[#cee5ff]',
    titulo: 'Robótica & Inglês',
    sub: 'Tecnologia e mundo do amanhã',
  },
  {
    emoji: '🩰',
    cor: 'bg-[#ffdf9b]',
    titulo: 'Capoeira & Balé',
    sub: 'Aulas extras de movimento e arte',
  },
  {
    emoji: '💜',
    cor: 'bg-[#EAF6EE]',
    titulo: 'Socioemocional',
    sub: 'Empatia e habilidades para a vida',
  },
];

export default function Hero({ onOpenAgendamento }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[88vh] bg-gradient-to-b from-[#FAFCFE] via-[#edf4ff]/45 to-white bg-soft-grid pt-10 pb-28 sm:pt-14 sm:pb-32 overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-center">
        {/* Coluna Assimétrica de Conteúdo (7 colunas) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-[#fff8ea] border border-[#F6C343]/50 px-4 py-1.5 mb-5 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#E63946] animate-pulse" aria-hidden="true" />
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#755700]">
              Matrículas Abertas 2027 • Maternal 1 ao 5º Ano
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-quicksand text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-[#2C3E50]"
          >
            Onde o aprendizado e a{' '}
            <span className="relative inline-block text-[#2B90D9]">
              ludicidade
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#F6C343]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0,10 Q50,0 100,10 Q50,20 0,10" fill="currentColor" />
              </svg>
            </span>{' '}
            caminham juntos!
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-5 font-quicksand text-base sm:text-lg font-bold text-[#E63946]"
          >
            “Aqui, cada passinho vira um grande voo de descobertas.”
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-2xl font-nunito text-base sm:text-lg font-medium leading-relaxed text-[#5b403f]"
          >
            Na <strong>Escola Borboletinha Encantada</strong> e no <strong>Colégio Estrutura</strong>,
            oferecemos um ensino completo para formar hoje o amanhã:{' '}
            <strong>número reduzido de crianças por turma</strong>, robótica, inglês, hortinha,
            aulas extras de capoeira e balé, e educação socioemocional em ambiente acolhedor.
          </motion.p>

          {/* Pílulas de Destaque das Campanhas Oficiais */}
          <motion.div
            variants={itemVariants}
            className="mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-extrabold text-[#1E5A87]"
          >
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 shadow-sm border border-slate-100">
              👶 Maternal 1 ao 2º Período
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 shadow-sm border border-slate-100">
              🚀 1º ao 5º Ano (Fundamental)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#edf4ff] text-[#00456e] px-3 py-1.5 shadow-sm">
              🤖 Aulas de Robótica
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#fff8ea] text-[#755700] px-3 py-1.5 shadow-sm">
              ⏰ Horário Parcial &amp; Integral Flexível
            </span>
          </motion.div>

          {/* CTAs de Conversão */}
          <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={onOpenAgendamento}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F6C343] to-[#f2b21d] px-7 py-4 font-quicksand text-base font-black text-[#2C3E50] shadow-lg shadow-[#F6C343]/30 hover:scale-105 active:scale-95 transition-transform"
            >
              <Calendar className="h-5 w-5" />
              Agendar Visita 2027
            </button>
            <a
              href="#segmentos"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-6 py-4 font-quicksand text-sm font-black text-[#1E5A87] shadow-sm hover:border-[#2B90D9] hover:text-[#2B90D9] transition-colors"
            >
              Conhecer Turmas
              <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>

          {/* 4 Pilares Centrais */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-5 border-t border-slate-200/70"
          >
            {pilaresHero.map((pilar) => (
              <div
                key={pilar.titulo}
                className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${pilar.cor} text-lg`}
                  aria-hidden="true"
                >
                  {pilar.emoji}
                </span>
                <div>
                  <p className="font-quicksand font-bold text-sm text-[#2C3E50]">{pilar.titulo}</p>
                  <p className="text-xs text-[#6C7A89]">{pilar.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coluna da Imagem — Elemento Assinatura (5 colunas) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
        >
          {/* Camada decorativa deslocada para quebrar simetria */}
          <div
            className="absolute -inset-3 translate-x-2 translate-y-3 rounded-[3.2rem] bg-[#edf4ff] border-2 border-[#2B90D9]/20 -rotate-2"
            aria-hidden="true"
          />

          <div className="relative rounded-[3rem] p-2 bg-gradient-to-tr from-[#2B90D9] via-[#F6C343] to-[#2E9A68] shadow-2xl shadow-[#2B90D9]/25">
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <img
                src="./hero-escola.jpg"
                alt="Crianças sorrindo e aprendendo com blocos coloridos e kit de robótica na Escola Borboletinha Encantada e Colégio Estrutura"
                className="aspect-[4/5] w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Selo Flutuante Vagas Limitadas */}
          <div className="absolute -top-3 -right-2 sm:right-2 rounded-2xl bg-[#E63946] px-4 py-2 text-white shadow-xl rotate-[4deg] border-2 border-white">
            <p className="font-quicksand font-black text-xs uppercase tracking-wider">
              ⚡ Vagas Limitadas
            </p>
          </div>

          {/* Selinho Lúdico Superior Esquerdo */}
          <div className="absolute -top-3 -left-2 sm:-left-3 rounded-2xl bg-[#F6C343] px-4 py-2 shadow-lg rotate-[-5deg] border-2 border-white">
            <p className="font-quicksand font-black text-xs text-[#2C3E50]">
              Matrículas 2027 Abertas ✨
            </p>
          </div>

          {/* Badge Flutuante com Slogan Oficial */}
          <div className="relative -mt-7 mx-3 sm:mx-6 rounded-2xl bg-white px-5 py-3.5 text-center shadow-xl border border-slate-100">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl" aria-hidden="true">
                🦋
              </span>
              <p className="font-quicksand text-sm sm:text-base font-black text-[#1E5A87]">
                Estrutura para Crescer. Valores para a Vida.
              </p>
            </div>
            <p className="text-[11px] font-black tracking-wider text-[#2B90D9] uppercase mt-0.5">
              Maternal 1 ao 2º Período • 1º ao 5º Ano do Fundamental
            </p>
          </div>
        </motion.div>
      </div>

      {/* Onda de Transição para a próxima seção */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
