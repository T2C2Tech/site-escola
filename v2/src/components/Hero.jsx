import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';
import WaveTransition from './WaveTransition';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFE] via-[#edf4ff]/60 to-[#fff8ea]/70 pt-8 pb-32">
      {/* Elementos Lúdicos Flutuantes Decorativos */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-6 text-4xl select-none pointer-events-none z-10"
      >
        🎈
      </motion.div>

      <motion.div
        animate={{ y: [0, -22, 0], x: [0, 8, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-28 right-12 text-5xl select-none pointer-events-none z-10"
      >
        🦋
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-32 left-1/4 text-3xl select-none pointer-events-none z-10"
      >
        ⭐
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-36 right-1/4 text-4xl select-none pointer-events-none z-10"
      >
        🎨
      </motion.div>
      
      {/* Nuvenzinhas / Manchas Coloridas Suaves de Fundo */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#cee5ff] to-[#ffdf9b]/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-[#ffdad8] to-[#edf4ff] blur-3xl pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-4 pb-12 lg:grid-cols-[54fr_46fr] lg:items-center">
        {/* Coluna de Texto & Pilares */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag Divertida */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ffdad8] px-4 py-1.5 shadow-sm"
          >
            <span className="text-lg">🌈</span>
            <p className="text-xs font-black uppercase tracking-wider text-[#b7102a]">
              Acolhimento com Afeto • Berçário ao 5º Ano
            </p>
          </motion.div>

          <h1 className="font-quicksand text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] text-[#2C3E50]">
            Aqui, cada passinho vira um <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#E63946]">
              grande voo
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F6C343]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10 Q50,20 0,10" fill="currentColor"/>
              </svg>
            </span> de descobertas!
          </h1>

          <p className="mt-6 max-w-xl font-nunito text-lg sm:text-xl font-medium leading-relaxed text-[#5b403f]">
            No <strong>Reinado da Criança</strong>, as crianças aprendem brincando, experimentando e convivendo. Espaço amplo, verde, seguro e preparado para bebês a partir de 4 meses até o 5º ano do Ensino Fundamental.
          </p>

          {/* Botões Chamativos */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#visita"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#E63946] to-[#db313f] px-8 py-4 text-white shadow-xl shadow-[#E63946]/30 transition-all"
            >
              <div className="text-left">
                <span className="block font-quicksand font-black text-base sm:text-lg">Agendar Visita Guiada 🐝</span>
                <span className="block text-xs font-bold text-white/90">Venha se encantar com nosso espaço</span>
              </div>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2E9A68] to-[#257d54] px-7 py-4 text-white shadow-lg shadow-[#2E9A68]/25 transition-all"
            >
              <MessageCircle className="h-6 w-6 animate-gentle-pulse" />
              <div className="text-left">
                <span className="block font-quicksand font-black text-sm sm:text-base">Chamar no WhatsApp</span>
                <span className="block text-xs font-bold text-white/90">(21) 99999-9999</span>
              </div>
            </motion.a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-bold text-[#6C7A89]">
            <MapPin className="h-5 w-5 text-[#E63946]" /> Tijuca / Maracanã — Rio de Janeiro • Fácil embarque e desembarque
          </p>

          {/* 4 Blocos Coloridos com Animação Stagger */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 pt-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffdad8] text-xl">
                🍼
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Berçário com Amor</p>
                <p className="text-xs text-[#6C7A89]">Lactário & estímulo</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#cee5ff] text-xl">
                🛡️
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Segurança 360°</p>
                <p className="text-xs text-[#6C7A89]">Monitoramento e carinho</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffdf9b] text-xl">
                📖
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Fundamental 1</p>
                <p className="text-xs text-[#6C7A89]">Base sólida e alegre</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition-all"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF6EE] text-xl">
                🌿
              </span>
              <div>
                <p className="font-quicksand font-bold text-sm text-[#2C3E50]">Pátio & Natureza</p>
                <p className="text-xs text-[#6C7A89]">Horta viva e ar puro</p>
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
          <div className="relative rounded-[3rem] p-2 bg-gradient-to-tr from-[#F6C343] via-[#E63946] to-[#2B90D9] shadow-2xl shadow-[#2B90D9]/25">
            <div className="overflow-hidden rounded-[2.7rem] bg-white">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
                alt="Crianças aprendendo e sorrindo na Escola Reinado da Criança"
                className="aspect-[4/5] w-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Badge Flutuante */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white px-7 py-3.5 text-center shadow-xl">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl animate-spin">🌟</span>
              <p className="font-quicksand text-lg font-black text-[#2C3E50]">Matrículas 2026/2027</p>
            </div>
            <p className="text-xs font-black tracking-wider text-[#E63946] uppercase">
              Berçário • Maternal • Pré • 1º ao 5º Ano
            </p>
          </div>

          {/* Selinho Divertido */}
          <div className="absolute -top-3 -left-3 rounded-2xl bg-[#F6C343] px-3.5 py-2 shadow-lg rotate-[-6deg] animate-float">
            <p className="font-quicksand font-black text-xs text-[#2C3E50]">100% Afeto ❤️</p>
          </div>
        </motion.div>
      </div>

      {/* Onda de Transição para a próxima seção */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
