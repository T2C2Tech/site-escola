import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Rocket, Compass, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KingdomHero() {
  const launchConfetti = () => {
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#FFCA28', '#FF6F61', '#1E88E5', '#2ECC71', '#9B59B6'],
    });
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#FFCA28', '#FF6F61', '#1E88E5', '#2ECC71', '#9B59B6'],
    });
  };

  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Nuvens Flutuantes no Topo */}
      <motion.div
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-5 pointer-events-none opacity-40 hidden sm:block"
      >
        <span className="text-6xl">☁️</span>
      </motion.div>

      <motion.div
        animate={{ x: [20, -20, 20] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 pointer-events-none opacity-40 hidden sm:block"
      >
        <span className="text-7xl">☁️</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Coluna de Texto e Convite Mágico */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left"
          >
            {/* Badge de Bem-vindo Saltitante */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kingdom-sun/50 text-[#755700] font-fredoka font-bold text-sm w-fit mx-auto lg:mx-0 shadow-sm animate-bounceSubtle">
              <span className="text-lg">🎈</span>
              <span>Matrículas Abertas para 2026/2027</span>
              <span className="text-xs bg-white px-2 py-0.5 rounded-full text-kingdom-coral font-black">Vagas Limitadas</span>
            </div>

            <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-kingdom-navy">
              Onde o aprendizado é uma grande{' '}
              <span className="relative inline-block text-kingdom-coral">
                aventura
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute -bottom-2 left-0 w-full h-4 text-kingdom-yellow"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </motion.svg>
              </span>{' '}
              cheia de afeto! 🏰
            </h1>

            <p className="font-nunito text-lg sm:text-xl text-[#395066] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              No <strong>Reinado da Criança</strong>, cada dia é repleto de curiosidade viva, brincadeiras ao ar livre, contato com a natureza e acolhimento familiar — do <strong>Berçário ao 5º Ano do Ensino Fundamental</strong>.
            </p>

            {/* Diferenciais em Pílulas Vibrantes */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
              <span className="px-3.5 py-1.5 rounded-2xl bg-[#E8F4FD] text-kingdom-blue font-fredoka font-semibold text-sm flex items-center gap-1.5 shadow-sm">
                🍼 Berçário Especializado
              </span>
              <span className="px-3.5 py-1.5 rounded-2xl bg-[#FEF3D6] text-[#B78103] font-fredoka font-semibold text-sm flex items-center gap-1.5 shadow-sm">
                🎨 Pedagogia Ativa & Lúdica
              </span>
              <span className="px-3.5 py-1.5 rounded-2xl bg-[#E8F8F0] text-[#1e6b47] font-fredoka font-semibold text-sm flex items-center gap-1.5 shadow-sm">
                🥗 Refeições Orgânicas Inclusas
              </span>
              <span className="px-3.5 py-1.5 rounded-2xl bg-[#F3EBF9] text-kingdom-purple font-fredoka font-semibold text-sm flex items-center gap-1.5 shadow-sm">
                🌳 Pátio Verde com Horta Viva
              </span>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#visita"
                onClick={launchConfetti}
                className="btn-jelly w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-kingdom-coral to-[#E74C3C] text-white font-fredoka font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-kingdom-coral/25"
              >
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Agendar Tour no Castelo</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#fases"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-kingdom-navy font-fredoka font-bold text-lg flex items-center justify-center gap-2.5 border-2 border-kingdom-sky/40 shadow-md hover:bg-kingdom-sky/10 transition-all"
              >
                <Rocket className="w-5 h-5 text-kingdom-blue" />
                <span>Explorar as Turmas</span>
              </motion.a>
            </div>

            {/* Avaliação das Famílias */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-sm text-[#465E73]">
              <div className="flex -space-x-2">
                <span className="inline-block w-8 h-8 rounded-full bg-kingdom-sun flex items-center justify-center text-xs shadow-sm">👶</span>
                <span className="inline-block w-8 h-8 rounded-full bg-kingdom-mint flex items-center justify-center text-xs shadow-sm">👧</span>
                <span className="inline-block w-8 h-8 rounded-full bg-kingdom-lavender flex items-center justify-center text-xs shadow-sm">🧒</span>
              </div>
              <p className="font-nunito font-bold">
                Nota <strong className="text-kingdom-dark font-black">4.9 ⭐</strong> recomendada por mais de 350 famílias felizes!
              </p>
            </div>
          </motion.div>

          {/* Coluna Visual: O Castelo Ilustrado e Crianças */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, type: 'spring' }}
            className="lg:col-span-5 relative"
          >
            {/* Halo de fundo circular */}
            <div className="absolute inset-0 bg-gradient-to-tr from-kingdom-yellow/30 via-kingdom-coral/20 to-kingdom-sky/30 rounded-[3.5rem] filter blur-2xl -z-10 animate-pulse"></div>

            <div className="relative toy-card p-4 sm:p-6 bg-white border-4 border-kingdom-yellow/40">
              <div className="overflow-hidden rounded-[2.5rem] relative">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
                  alt="Crianças aprendendo e sorrindo na Escola Reinado da Criança"
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-[2.5rem] transition-transform duration-700 hover:scale-105"
                />

                {/* Tag Flutuante com Animação */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-kingdom-yellow/30 flex items-center gap-2"
                >
                  <span className="text-xl">👑</span>
                  <div>
                    <p className="font-fredoka text-xs font-bold text-kingdom-navy">Ambiente Humanizado</p>
                    <p className="font-nunito text-[10px] text-kingdom-coral font-extrabold">Afeto e Atenção Individual</p>
                  </div>
                </motion.div>

                {/* Tag Flutuante Inferior */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-kingdom-green/30 flex items-center gap-2"
                >
                  <span className="text-xl">🌿</span>
                  <div>
                    <p className="font-fredoka text-xs font-bold text-[#1e6b47]">Contato com a Natureza</p>
                    <p className="font-nunito text-[10px] text-gray-500 font-semibold">Parque de areia & horta viva</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Ícones Decorativos ao Redor */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-6 text-4xl select-none hidden sm:block"
            >
              ☀️
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 text-4xl select-none hidden sm:block"
            >
              🌈
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
