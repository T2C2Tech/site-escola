import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WaveTransition from './WaveTransition';

const diferenciais = [
  {
    titulo: 'Aulas de Robótica',
    sub: 'Tecnologia, raciocínio lógico e criatividade preparando a mente para o mundo do amanhã.',
    emoji: '🤖',
    tag: 'Infantil & Fundamental',
    cor: 'from-[#2B90D9] to-[#00639c]'
  },
  {
    titulo: 'Número Reduzido por Turma',
    sub: 'Mais atenção, cuidado individualizado e melhores resultados de desenvolvimento para cada aluno.',
    emoji: '👥',
    tag: 'Acolhimento Singular',
    cor: 'from-[#E63946] to-[#db313f]'
  },
  {
    titulo: 'Aulas de Inglês',
    sub: 'Familiarização natural com a língua inglesa através de jogos, músicas e diálogos lúdicos.',
    emoji: '🗣️',
    tag: 'Educação Infantil',
    cor: 'from-[#5E50A1] to-[#453880]'
  },
  {
    titulo: 'Aulas Extras: Capoeira & Balé',
    sub: 'Expressão artística, flexibilidade, ritmo e disciplina através de modalidades extracurriculares.',
    emoji: '🩰',
    tag: 'Corpo & Movimento',
    cor: 'from-[#F6C343] to-[#d69f16]'
  },
  {
    titulo: 'Educação Socioemocional',
    sub: 'Desenvolvendo emoções, empatia, princípios éticos e valores para a vida inspirados em Augusto Cury.',
    emoji: '💜',
    tag: 'Valores para a Vida',
    cor: 'from-[#2E9A68] to-[#1f734b]'
  },
  {
    titulo: 'Amplo Espaço com Hortinha',
    sub: 'A "Nossa Hortinha" oferece contato direto com a terra, rega, plantio e vivências ecológicas reais.',
    emoji: '🌱',
    tag: 'Nossa Hortinha',
    cor: 'from-[#2E9A68] to-[#165b38]'
  },
  {
    titulo: 'Material Didático & Professores',
    sub: 'Conteúdos atualizados que inspiram e educadores experientes, qualificados e apaixonados pelo ensino.',
    emoji: '📚',
    tag: 'Excelência Pedagógica',
    cor: 'from-[#1E5A87] to-[#2B90D9]'
  },
  {
    titulo: 'Horário Parcial e Integral Flexível',
    sub: 'Flexibilidade de horários pensada para acolher a rotina profissional das famílias com tranquilidade.',
    emoji: '⏰',
    tag: 'Horário Flexível',
    cor: 'from-[#E63946] to-[#F6C343]'
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
    <section id="diferenciais" className="relative bg-gradient-to-br from-[#203243] via-[#1a2d3f] to-[#0d1d2b] pt-28 pb-32 text-white overflow-hidden scroll-mt-20">
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
            <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Estrutura para crescer. Valores para a vida.
            </h2>
            <p className="mt-4 font-nunito text-base text-white/80 leading-relaxed">
              Aliamos afeto e ludicidade a serviços de excelência: robótica, inglês, capoeira, balé, turmas reduzidas e amplo espaço verde com hortinha.
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="rounded-full bg-white/10 p-3.5 hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              aria-label="Próximo"
              className="rounded-full bg-white/10 p-3.5 hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Lista dos Diferenciais com Animação Scroll */}
        <div
          ref={sliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {diferenciais.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group w-[85%] shrink-0 snap-start rounded-[2rem] bg-white/10 p-6 sm:p-7 backdrop-blur-md sm:w-[45%] lg:w-[calc(25%-15px)] transition-all duration-300 hover:bg-white/20 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Cabeçalho Compacto e Proporcional */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl shadow-sm group-hover:scale-105 transition-transform">
                    {item.emoji}
                  </span>
                  <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${item.cor} shadow-sm shrink-0 leading-none`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-quicksand font-black text-lg text-white group-hover:text-[#F6C343] transition-colors leading-snug">
                  {item.titulo}
                </h3>
                <p className="mt-2 text-xs text-white/80 font-nunito leading-relaxed">
                  {item.sub}
                </p>
              </div>

              <div className="mt-5 pt-3.5 flex items-center justify-between text-[11px] font-bold text-[#F6C343] border-t border-white/10">
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
