import React from 'react';
import { motion } from 'framer-motion';
import WaveTransition from './WaveTransition';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] bg-gradient-to-b from-[#FAFCFE] via-[#edf4ff]/40 to-white pt-10 pb-28 overflow-hidden">
      {/* Elementos decorativos infantis flutuantes */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-6 text-4xl select-none pointer-events-none opacity-60"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-24 right-10 text-5xl select-none pointer-events-none opacity-50"
      >
        ☀️
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-24 left-1/3 text-3xl select-none pointer-events-none opacity-40"
      >
        🦋
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-1/2 right-4 text-3xl select-none pointer-events-none opacity-40"
      >
        ⭐
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        {/* Conteúdo Institucional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-quicksand text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] text-[#2C3E50]">
            Onde o aprendizado e a{' '}
            <span className="relative inline-block text-[#2B90D9]">
              ludicidade
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F6C343]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10 Q50,20 0,10" fill="currentColor" />
              </svg>
            </span>{' '}
            caminham juntos!
          </h1>

          <p className="mt-4 font-quicksand text-base sm:text-lg font-bold text-[#E63946]">
            “Aqui, cada passinho vira um grande voo de descobertas.”
          </p>

          <p className="mt-3 max-w-xl font-nunito text-base sm:text-lg font-medium leading-relaxed text-[#5b403f]">
            Na <strong>Escola Borboletinha Encantada</strong> e no <strong>Colégio Estrutura</strong>, oferecemos um ensino completo para formar hoje o amanhã: <strong>número reduzido de crianças por turma</strong>, robótica, inglês, hortinha, aulas extras de capoeira e balé, e educação socioemocional em ambiente acolhedor.
          </p>

          {/* Pílulas de Destaque das Campanhas Oficiais */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-extrabold text-[#1E5A87]">
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
              ⏰ Horário Parcial & Integral Flexível
            </span>
          </div>

          {/* 4 Pilares Centrais extraídos das artes e portfólio */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-200/60">
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffdad8] text-lg">
                👥
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Turmas Reduzidas</p>
                <p className="text-xs text-[#6C7A89]">Mais atenção e cuidado individual</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#cee5ff] text-lg">
                🤖
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Robótica & Inglês</p>
                <p className="text-xs text-[#6C7A89]">Tecnologia e mundo do amanhã</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffdf9b] text-lg">
                🩰
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Capoeira & Balé</p>
                <p className="text-xs text-[#6C7A89]">Aulas extras de movimento e arte</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm hover:shadow-md transition-all border border-slate-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6EE] text-lg">
                💜
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Socioemocional</p>
                <p className="text-xs text-[#6C7A89]">Empatia e habilidades para a vida</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Coluna da Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-[3rem] p-2 bg-gradient-to-tr from-[#2B90D9] via-[#F6C343] to-[#2E9A68] shadow-2xl shadow-[#2B90D9]/25">
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80"
                alt="Criança pequena sorrindo com pintura nas mãozinhas na Escola Borboletinha Encantada"
                className="aspect-[4/5] w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Badge Flutuante com Slogan Oficial */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-7 py-3.5 text-center shadow-xl border border-slate-100">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🦋</span>
              <p className="font-quicksand text-base sm:text-lg font-black text-[#1E5A87]">
                Estrutura para Crescer. Valores para a Vida.
              </p>
            </div>
            <p className="text-xs font-black tracking-wider text-[#2B90D9] uppercase mt-0.5">
              Maternal 1 ao 2º Período • 1º ao 5º Ano do Fundamental
            </p>
          </div>

          {/* Selinho Lúdico */}
          <div className="absolute -top-3 -left-3 rounded-2xl bg-[#F6C343] px-4 py-2 shadow-lg rotate-[-6deg]">
            <p className="font-quicksand font-black text-xs text-[#2C3E50]">Matrículas 2027 Abertas ✨</p>
          </div>
        </motion.div>
      </div>

      {/* Onda de Transição para a próxima seção */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
