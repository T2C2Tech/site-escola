import React from 'react';
import { motion } from 'framer-motion';
import WaveTransition from './WaveTransition';

export default function GaleriaEspaco() {
  return (
    <section id="espaco" className="relative bg-[#fff9f0] pt-24 pb-32 overflow-hidden">
      {/* Decorações */}
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 left-12 text-3xl opacity-50 select-none pointer-events-none"
      >
        🏡
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-12 text-3xl opacity-50 select-none pointer-events-none"
      >
        🌳
      </motion.div>

      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ffdad8] px-4 py-1 mb-3 shadow-sm">
            <span className="text-base">🎪</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#b7102a]">
              Ambientes Seguros & Estimulantes
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Um cantinho colorido feito para <br />
            <span className="text-[#2B90D9]">correr</span>, <span className="text-[#E63946]">criar</span> e <span className="text-[#2E9A68]">sonhar</span>!
          </h2>
          <p className="mt-4 font-nunito text-base sm:text-lg text-[#5b403f]">
            Pátio ensolarado, gramado gostoso, horta sensorial, biblioteca viva e piso especial amortecedor de impacto.
          </p>
        </motion.div>

        {/* Bento Grid com Animações de Entrada */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:mx-0 md:grid md:h-[580px] md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.5rem] md:w-auto md:col-span-2 md:row-span-2 shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
              alt="Pátio e área ao ar livre com brinquedos"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
              <div>
                <span className="rounded-full bg-[#2E9A68] px-3.5 py-1 text-xs font-black text-white uppercase tracking-wider mb-2 inline-block shadow-sm">
                  Ar Puro & Solzinho 🌿
                </span>
                <p className="text-white font-quicksand font-black text-2xl">Pátio Ecológico & Horta Sensorial</p>
                <p className="text-white/85 text-sm font-medium mt-1">Onde as crianças plantam, regam e colhem alimentos orgânicos com as próprias mãozinhas.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80"
              alt="Biblioteca mágica da escola"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="rounded-full bg-[#5E50A1] px-2.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Contação de Histórias 📖
                </span>
                <p className="text-white font-quicksand font-black text-base">Biblioteca Encantada</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
              alt="Berçário seguro e sala de estimulação"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="rounded-full bg-[#E63946] px-2.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Aconchego Total 🍼
                </span>
                <p className="text-white font-quicksand font-black text-base">Berçário Seguro & Lactário</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              alt="Sala de artes e ateliê maker"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="rounded-full bg-[#F6C343] px-2.5 py-0.5 text-[10px] font-black text-[#2C3E50] uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Criatividade Sem Limites 🎨
                </span>
                <p className="text-white font-quicksand font-black text-base">Ateliê de Artes & Maker</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Onda de Transição para Depoimentos */}
      <WaveTransition fill="#FAFCFE" position="bottom" variant={2} />
    </section>
  );
}
