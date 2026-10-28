import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Play, Sparkles, Clock, MapPin } from 'lucide-react';
import { PEQUE_PATHS } from './PequeShape';

export default function Hero({ onOpenVisitModal, onOpenVideoModal }) {
  return (
    <section
      id="inicio"
      className="relative pt-6 pb-14 lg:py-14 overflow-hidden peque-canvas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Grid Assimétrico de 2 Colunas — Estrutura idêntica ao Slide 1 de peque.com.br */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* COLUNA ESQUERDA: Logo + Trapézio Verde-Limão + Foto Recortada Sobreposta */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between relative"
          >
            {/* Topo: Marca em Destaque Editorial */}
            <div className="flex items-center gap-4 mb-4 lg:mb-6 pl-2">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white p-2.5 shadow-xl border-4 border-reinado-sol shrink-0">
                <img
                  src="./logo.svg"
                  alt="Colégio Reinado da Criança"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-reinado-celeste text-white font-fredoka font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-3 h-3" /> Bairro Mariano Procópio • JF
                </span>
                <h1 className="font-fredoka text-3xl sm:text-5xl font-bold text-reinado-ink leading-none mt-1">
                  Reinado{' '}
                  <span className="text-reinado-tangerina">da Criança</span>
                </h1>
                <p className="text-xs sm:text-sm font-extrabold text-reinado-slate mt-1">
                  Ensino Afetivo & Tempo Integral Humanizado
                </p>
              </div>
            </div>

            {/* Bloco Trapézio Verde-Limão (#D4DC36 / #65C11F) + Imagem Sobreposta */}
            <div className="relative min-h-[340px] sm:min-h-[390px] flex items-end">
              {/* SVG Poligonal original da Pequê (Slide 1 Left Block) */}
              <svg
                viewBox="0 0 495 425"
                preserveAspectRatio="none"
                className="w-full h-full absolute inset-0 drop-shadow-[0_18px_30px_rgba(101,193,31,0.22)]"
              >
                <path d={PEQUE_PATHS.heroBlockLeft} fill="#D4DC36" />
              </svg>

              {/* Conteúdo dentro do Trapézio Verde-Limão */}
              <div className="relative z-10 w-full p-6 sm:p-9 grid sm:grid-cols-12 gap-4 items-end">
                <div className="sm:col-span-7 space-y-2.5 pt-10 sm:pt-14">
                  <span className="inline-block px-3 py-1 rounded-full bg-reinado-ink text-reinado-sol font-fredoka font-bold text-xs uppercase">
                    Educação Infantil & Fundamental I
                  </span>
                  <h2 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-[1.12]">
                    Do Berçário (4 meses)
                    <br />
                    ao 5º Ano
                  </h2>
                  <p className="font-fredoka text-lg sm:text-2xl font-bold text-[#1B4D06]">
                    Integral Humanizado,
                    <br />
                    Manhã e Tarde
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 text-reinado-ink font-extrabold text-xs">
                      🇬🇧 Inglês Diário
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 text-reinado-ink font-extrabold text-xs">
                      👩‍🍳 Mini-Chef
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 text-reinado-ink font-extrabold text-xs">
                      🌱 Horta & Líder em Mim
                    </span>
                  </div>
                </div>

                {/* Foto Recortada Sobreposta à direita do Trapézio (como na Pequê) */}
                <div className="sm:col-span-5 relative">
                  <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-reinado-celeste-light aspect-[3/4] transform sm:-translate-y-4 sm:rotate-2">
                    <img
                      src="./assets/hero-criancas.png"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80';
                      }}
                      alt="Criança feliz no Colégio Reinado da Criança"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DIREITA: Trapézio Azul-Celeste + Tipografia Curva/Contornada + Super Botão Fale Conosco */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative flex flex-col justify-between min-h-[440px] sm:min-h-[500px]"
          >
            {/* Trapézio Vertical Azul-Celeste (#0096FF) idêntico ao bloco direito do Slide 1 da Pequê */}
            <svg
              viewBox="0 0 410 495"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_20px_35px_rgba(0,150,255,0.24)]"
            >
              <path d={PEQUE_PATHS.tallVertical} fill="#0096FF" />
            </svg>

            <div className="relative z-10 p-7 sm:p-11 flex flex-col justify-between h-full">
              {/* Selo Superior */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-reinado-ink font-fredoka font-bold text-xs sm:text-sm shadow-md">
                  <Sparkles className="w-4 h-4 text-reinado-tangerina" />
                  Cada criança é chamada pelo nome!
                </span>

                <button
                  type="button"
                  onClick={() => onOpenVideoModal()}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-reinado-ink/90 hover:bg-reinado-ink text-white font-fredoka font-bold text-xs transition-transform hover:scale-105 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-reinado-sol text-reinado-sol" />
                  <span>Ver Vídeo (1 min)</span>
                </button>
              </div>

              {/* Composição Tipográfica "Estamos de coração e matrículas abertas!" */}
              <div className="my-6 sm:my-8 text-center sm:text-left">
                <p className="font-fredoka text-3xl sm:text-5xl font-bold text-white leading-none drop-shadow-sm">
                  Estamos de
                </p>
                <p className="font-fredoka text-4xl sm:text-6xl font-bold text-stroke-peque tracking-wide leading-tight my-1 transform -rotate-2 inline-block">
                  coração e
                </p>
                <div className="mt-1">
                  <span className="inline-block px-5 py-2 rounded-2xl bg-[#FF007A] text-white font-fredoka text-2xl sm:text-4xl font-bold shadow-lg transform rotate-1">
                    matrículas abertas!
                  </span>
                </div>

                <p className="mt-5 text-white text-sm sm:text-base font-bold leading-relaxed max-w-lg">
                  Tradição acolhedora no <strong>Mariano Procópio</strong> aliada a uma estrutura moderna para o desenvolvimento emocional, social e cognitivo do seu filho.
                </p>
              </div>

              {/* Botão Assinatura da Pequê: Barra Laranja "Fale conosco." + Círculo Gigante WhatsApp */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onOpenVisitModal()}
                    className="w-full sm:w-auto flex-1 peque-cta-pill rounded-full pl-7 pr-3 py-3 flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="text-left">
                      <span className="block font-fredoka text-xl sm:text-2xl font-bold text-white leading-none">
                        Fale conosco.
                      </span>
                      <span className="block text-xs font-extrabold text-white/90 mt-1">
                         Seg a Sex • 08h30 às 11h e 14h às 16h30
                      </span>
                    </div>

                    {/* Círculo Verde Gigante do WhatsApp (idêntico ao canto inferior direito do Slide 1 da Pequê) */}
                    <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#09D349] border-4 border-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform shrink-0">
                      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white" />
                    </span>
                  </button>
                </div>

                <p className="mt-3 text-xs font-extrabold text-white/90 flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-4 h-4 text-reinado-sol shrink-0" />
                  <span>
                    Atendimento exclusivo de 30 em 30 minutos pelo WhatsApp (32) 99999-1234
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
