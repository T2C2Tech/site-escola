import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WaveTransition from './WaveTransition';

const selos = [
  {
    titulo: 'Acreditação CEE-RJ',
    sub: 'Autorização plena da Educação Infantil ao 5º Ano do E.F.',
    emoji: '🏛️',
    tag: 'Reconhecimento Oficial',
    cor: 'from-[#E63946] to-[#db313f]'
  },
  {
    titulo: 'Certificação Lei Lucas',
    sub: '100% da equipe capacitada e revalidada em Primeiros Socorros Pediátricos.',
    emoji: '🩺',
    tag: 'Prevenção & Saúde',
    cor: 'from-[#2B90D9] to-[#00639c]'
  },
  {
    titulo: 'Programa Bilíngue Divertido',
    sub: 'Músicas, jogos teatrais e vocabulário natural em língua inglesa.',
    emoji: '🇬🇧',
    tag: 'Vivência Global',
    cor: 'from-[#5E50A1] to-[#453880]'
  },
  {
    titulo: 'Selo Alimentação do Bem',
    sub: 'Acompanhamento nutricional, sem açúcar para os pequeninos e horta viva.',
    emoji: '🥦',
    tag: 'Nutrição Infantil',
    cor: 'from-[#2E9A68] to-[#1f734b]'
  },
  {
    titulo: 'Clube de Leitura Encantada',
    sub: 'Estímulo ao vínculo familiar com maleta de livrinhos toda sexta-feira.',
    emoji: '📚',
    tag: 'Família & Escola',
    cor: 'from-[#F6C343] to-[#d69f16]'
  }
];

export default function Certificados() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="diferenciais" className="relative bg-gradient-to-br from-[#203243] via-[#1a2d3f] to-[#0d1d2b] pt-28 pb-32 text-white overflow-hidden">
      {/* Estrelinhas cintilantes animadas */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-1/4 text-2xl select-none pointer-events-none"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-1/4 text-3xl select-none pointer-events-none"
      >
        🌟
      </motion.div>

      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6C343]/20 px-4 py-1.5 mb-3">
              <span className="text-base">🏆</span>
              <p className="font-quicksand text-xs font-black uppercase tracking-wider text-[#F6C343]">
                Selos de Excelência & Segurança
              </p>
            </div>
            <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Cuidado profissional para seu filho brilhar com tranquilidade
            </h2>
            <p className="mt-4 font-nunito text-base text-white/80 leading-relaxed">
              Aliamos a alegria lúdica da infância às mais sérias acreditações pedagógicas, sanitárias e de proteção à criança.
            </p>
          </div>
          
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="rounded-full bg-white/10 p-3.5 hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              aria-label="Próximo"
              className="rounded-full bg-white/10 p-3.5 hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Lista dos Selos com Animação Scroll */}
        <div
          ref={sliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {selos.map((selo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group w-[85%] shrink-0 snap-start rounded-[2rem] bg-white/10 p-7 backdrop-blur-md sm:w-[45%] lg:w-[calc(25%-15px)] transition-all duration-300 hover:bg-white/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl p-2.5 rounded-2xl bg-white/10 group-hover:scale-110 transition-transform">
                    {selo.emoji}
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${selo.cor}`}>
                    {selo.tag}
                  </span>
                </div>
                <h3 className="font-quicksand font-black text-xl text-white group-hover:text-[#F6C343] transition-colors">
                  {selo.titulo}
                </h3>
                <p className="mt-2.5 text-sm text-white/80 font-nunito leading-relaxed">
                  {selo.sub}
                </p>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between text-xs font-bold text-[#F6C343]">
                <span>Selo 0{idx + 1}</span>
                <span>Auditado ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Onda de Transição para o Espaço Lúdico Amarelo/Creme */}
      <WaveTransition fill="#fff9f0" position="bottom" variant={1} />
    </section>
  );
}
