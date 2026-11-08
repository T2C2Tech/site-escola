import React from 'react';
import { motion } from 'framer-motion';
import WaveTransition from './WaveTransition';

export default function GaleriaEspaco() {
  return (
    <section id="espaco" className="relative bg-[#fff9f0] pt-24 pb-32 overflow-hidden scroll-mt-20">
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
            <span className="text-base">🦋</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#b7102a]">
              Nosso Espaço
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Ambientes planejados para <br />
            <span className="text-[#2B90D9]">acolher</span>, <span className="text-[#E63946]">brincar</span> e <span className="text-[#2E9A68]">aprender</span>!
          </h2>
          <p className="mt-4 font-nunito text-base sm:text-lg text-[#5b403f]">
            Pátio amplo com caracol numérico, área verde arborizada, parquinho com casinha e cantinho da leitura aconchegante.
          </p>
        </motion.div>

        {/* Bento Grid dos Espaços do Portfólio */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:mx-0 md:grid md:h-[600px] md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:px-0">

          {/* Card Grande: Pátio Lúdico com Caracol Numérico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.5rem] md:w-auto md:col-span-2 md:row-span-2 shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80"
              alt="Crianças brincando no pátio lúdico da escola infantil"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
              <div>
                <span className="rounded-full bg-[#2E9A68] px-3.5 py-1 text-xs font-black text-white uppercase tracking-wider mb-2 inline-block shadow-sm">
                  Pátio Lúdico & Pinturas no Chão 🐌
                </span>
                <p className="text-white font-quicksand font-black text-2xl">Pátio do Caracol Numérico</p>
                <p className="text-white/90 text-sm font-medium mt-1">
                  Espaço aberto onde as brincadeiras tradicionais como o caracol e a amarelinha desenvolvem contagem, ritmo, equilíbrio e sociabilidade de forma espontânea.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Amplo Espaço com Hortinha e Área Verde */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=800&q=80"
              alt="Crianças em contato com a terra na Nossa Hortinha e pátio sombreado"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="rounded-full bg-[#2E9A68] px-2.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Nossa Hortinha & Ar Puro 🌱
                </span>
                <p className="text-white font-quicksand font-black text-base">Amplo Espaço com Hortinha</p>
                <p className="text-white/80 text-[11px] font-medium hidden sm:block">Canteiros pedagógicos e árvores com sombra natural.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Parquinho com Casinha Colorida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1597089542047-b9873d82d8ec?auto=format&fit=crop&w=800&q=80"
              alt="Parquinho infantil colorido com casinha e brinquedos lúdicos"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
              <div>
                <span className="rounded-full bg-[#E63946] px-2.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Faz de Conta & Socialização 🎪
                </span>
                <p className="text-white font-quicksand font-black text-base">Parquinho com Casinha Lúdica</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Cantinho da Leitura e Biblioteca Viva */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-[2.2rem] md:w-auto md:col-span-2 shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?auto=format&fit=crop&w=1200&q=80"
              alt="Crianças no cantinho da leitura com livros ilustrados e historinhas"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
              <div>
                <span className="rounded-full bg-[#F6C343] px-2.5 py-0.5 text-[10px] font-black text-[#2C3E50] uppercase tracking-wider mb-1 inline-block shadow-sm">
                  Literatura Infantil & Fantasia 📚
                </span>
                <p className="text-white font-quicksand font-black text-lg">Cantinho da Leitura & Biblioteca</p>
                <p className="text-white/80 text-xs font-medium mt-0.5 hidden sm:block">
                  Livros ao alcance das mãos, almofadas e fantoches que estimulam a imaginação desde o Maternal ao 5º Ano.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Onda de Transição para Depoimentos e Projetos */}
      <WaveTransition fill="#FAFCFE" position="bottom" variant={2} />
    </section>
  );
}
