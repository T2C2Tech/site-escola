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
    corTag: 'bg-[#2B90D9] text-white',
  },
  {
    titulo: 'Número Reduzido por Turma',
    sub: 'Mais atenção, cuidado individualizado e melhores resultados de desenvolvimento para cada aluno.',
    emoji: '👥',
    tag: 'Acolhimento Singular',
    corTag: 'bg-[#E63946] text-white',
  },
  {
    titulo: 'Aulas de Inglês',
    sub: 'Familiarização natural com a língua inglesa através de jogos, músicas e diálogos lúdicos.',
    emoji: '🗣️',
    tag: 'Educação Infantil',
    corTag: 'bg-[#2B90D9] text-white',
  },
  {
    titulo: 'Aulas Extras: Capoeira & Balé',
    sub: 'Expressão artística, flexibilidade, ritmo e disciplina através de modalidades extracurriculares.',
    emoji: '🩰',
    tag: 'Corpo & Movimento',
    corTag: 'bg-[#F6C343] text-[#203243]',
  },
  {
    titulo: 'Educação Socioemocional',
    sub: 'Desenvolvendo emoções, empatia, princípios éticos e valores sólidos para toda a vida.',
    emoji: '💜',
    tag: 'Valores para a Vida',
    corTag: 'bg-[#2E9A68] text-white',
  },
  {
    titulo: 'Amplo Espaço com Hortinha',
    sub: 'A "Nossa Hortinha" oferece contato direto com a terra, rega, plantio e vivências ecológicas reais.',
    emoji: '🌱',
    tag: 'Nossa Hortinha',
    corTag: 'bg-[#2E9A68] text-white',
  },
  {
    titulo: 'Material Didático & Professores',
    sub: 'Conteúdos atualizados que inspiram e educadores experientes, qualificados e apaixonados pelo ensino.',
    emoji: '📚',
    tag: 'Excelência Pedagógica',
    corTag: 'bg-[#2B90D9] text-white',
  },
  {
    titulo: 'Horário Parcial e Integral Flexível',
    sub: 'Flexibilidade de horários pensada para acolher a rotina profissional das famílias com tranquilidade.',
    emoji: '⏰',
    tag: 'Horário Flexível',
    corTag: 'bg-[#F6C343] text-[#203243]',
  },
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
    <section
      id="diferenciais"
      style={{ backgroundColor: '#203243' }}
      className="relative bg-[#203243] bg-dark-dots pt-28 pb-32 text-white overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#F6C343] mb-3">
              ✨ Nossos Diferenciais
            </span>
            <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Estrutura para crescer. <span className="text-[#F6C343]">Valores para a vida.</span>
            </h2>
            <p className="mt-4 font-nunito text-base sm:text-lg text-slate-200 leading-relaxed">
              Aliamos afeto e ludicidade a serviços de excelência: robótica, inglês, capoeira, balé,
              turmas reduzidas e amplo espaço verde com hortinha.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Anterior"
              className="rounded-full bg-white/15 border border-white/25 p-3.5 text-white hover:bg-[#F6C343] hover:text-[#203243] hover:border-[#F6C343] transition-all shadow-md cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Próximo"
              className="rounded-full bg-white/15 border border-white/25 p-3.5 text-white hover:bg-[#F6C343] hover:text-[#203243] hover:border-[#F6C343] transition-all shadow-md cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>

        {/* Lista dos Diferenciais */}
        <div
          ref={sliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {diferenciais.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group w-[85%] shrink-0 snap-start rounded-[2rem] bg-[#162534] p-6 sm:p-7 sm:w-[45%] lg:w-[calc(25%-15px)] transition-all duration-300 hover:bg-[#1c2f42] shadow-xl flex flex-col justify-between border border-white/15"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-2xl shadow-sm group-hover:scale-105 transition-transform"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </span>
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${item.corTag} shadow-sm shrink-0 leading-none`}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-quicksand font-black text-lg sm:text-xl text-white group-hover:text-[#F6C343] transition-colors leading-snug">
                  {item.titulo}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 font-nunito leading-relaxed">
                  {item.sub}
                </p>
              </div>

              <div className="mt-6 pt-3.5 flex items-center justify-between text-[11px] font-bold text-[#F6C343] border-t border-white/15">
                <span>Borboletinha &amp; Estrutura</span>
                <span aria-hidden="true">✦</span>
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
