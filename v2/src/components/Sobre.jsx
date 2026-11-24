import React from 'react';
import { motion } from 'framer-motion';
import WaveTransition from './WaveTransition';

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-28 bg-white overflow-hidden scroll-mt-20">
      {/* Âncora invisível para link direto #metodologia */}
      <div id="metodologia" className="absolute -top-10 left-0 h-1 w-1 pointer-events-none" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:items-center">
        {/* Composição Assimétrica de Fotos (5 colunas) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none"
        >
          {/* Foto Principal */}
          <div className="relative rounded-[2.8rem] overflow-hidden shadow-2xl shadow-[#E63946]/15">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
              alt="Crianças pequenas da educação infantil sorrindo em roda de acolhimento"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Foto Secundária 1 */}
          <div className="absolute -top-6 -right-4 hidden aspect-[3/4] w-[40%] rounded-3xl overflow-hidden shadow-2xl shadow-[#2B90D9]/30 rotate-3 border-4 border-white sm:block">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
              alt="Crianças em atividades lúdicas de desenho e artes coloridas"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Foto Secundária 2 */}
          <div className="absolute -bottom-8 -left-4 hidden aspect-square w-[38%] rounded-3xl overflow-hidden shadow-2xl shadow-[#2E9A68]/30 -rotate-3 border-4 border-white sm:block">
            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80"
              alt="Pequenino brincando com blocos de madeira e coordenação motora"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Selinho institucional de Afeto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C343] p-4 text-center shadow-2xl rotate-[-8deg] pointer-events-none border-2 border-white">
            <p className="font-quicksand font-black text-2xl text-[#2C3E50]">100%</p>
            <p className="font-quicksand text-[10px] font-black uppercase text-[#755700]">
              Afeto &amp; Respeito
            </p>
          </div>
        </motion.div>

        {/* Textos Institucionais (7 colunas) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50] leading-tight">
            Família, acolhimento e educação socioemocional com raízes no afeto.
          </h2>

          <p className="mt-4 font-quicksand text-lg font-bold text-[#E63946]">
            E.I. Borboletinha Encantada &amp; Colégio Estrutura
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#4A5568] leading-relaxed">
            Nossa base pedagógica é fundamentada na união entre escola e família, no respeito mútuo,
            no acolhimento singular e na formação integral. Acreditamos que o ambiente escolar deve ser
            a continuidade segura do cuidado de casa, preparando a criança para a vida com amor e autonomia.
          </p>

          <div className="mt-4 rounded-2xl bg-amber-50/70 border-l-4 border-[#F6C343] p-3.5 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
            <strong className="font-black text-amber-950 block mb-0.5">
              Aprendizado e Ludicidade caminham juntos:
            </strong>
            A ludicidade é uma metodologia que respeita a interpretação do mundo pela própria criança,
            tornando a formação fluida, afetiva, emancipadora e feliz.
          </div>

          <p className="mt-6 font-quicksand text-xs font-black uppercase tracking-wider text-[#00456e]">
            Pilares da Nossa Metodologia Integrada
          </p>

          <ul className="mt-3 space-y-3.5">
            <li className="flex items-start gap-3.5 rounded-2xl bg-[#edf4ff] p-3.5 shadow-sm">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2B90D9] text-white font-bold text-base shadow-sm"
                aria-hidden="true"
              >
                🤝
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-sm">Sociointeracionismo</p>
                <p className="font-nunito text-xs text-[#4A5568] leading-relaxed">
                  O conhecimento é ativamente construído por meio da interação social, da troca com o meio e das ricas experiências coletivas com educadores e colegas.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3.5 rounded-2xl bg-[#fff2f2] p-3.5 shadow-sm">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E63946] text-white font-bold text-base shadow-sm"
                aria-hidden="true"
              >
                🌱
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-sm">Educação Humanizada</p>
                <p className="font-nunito text-xs text-[#4A5568] leading-relaxed">
                  Escuta ativa e valorização da bagagem do aluno. O estudante é protagonista da sua jornada de descoberta em um ambiente acolhedor e dialógico.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3.5 rounded-2xl bg-[#fff8ea] p-3.5 shadow-sm">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6C343] text-[#2C3E50] font-bold text-base shadow-sm"
                aria-hidden="true"
              >
                💜
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-sm">
                  Inteligência Socioemocional &amp; Princípios
                </p>
                <p className="font-nunito text-xs text-[#4A5568] leading-relaxed">
                  Desenvolvimento da empatia, resiliência, ética e gestão das emoções. Cultivo contínuo de princípios e valores que sustentam o caráter para a vida toda.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 4 Cards de Destaque alinhados às Campanhas Oficiais */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: '👥',
            title: 'Turmas com Número Reduzido',
            desc: 'Mais atenção, cuidado singular e melhores resultados de aprendizagem para cada aluno.',
            bg: 'from-white to-[#ffdad8]/40',
          },
          {
            icon: '🤖',
            title: 'Aulas de Robótica',
            desc: 'Tecnologia prática e criatividade preparando a mente das crianças para o mundo do amanhã.',
            bg: 'from-white to-[#cee5ff]/40',
          },
          {
            icon: '👩‍🏫',
            title: 'Professores & Material',
            desc: 'Corpo docente experiente e material didático de qualidade com conteúdos atualizados.',
            bg: 'from-white to-[#EAF6EE]/60',
          },
          {
            icon: '💜',
            title: 'Educação Socioemocional',
            desc: 'Desenvolvimento das emoções, empatia, princípios éticos e valores sólidos para a vida toda.',
            bg: 'from-white to-[#ffdf9b]/40',
          },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`rounded-3xl bg-gradient-to-b ${c.bg} p-6 shadow-md hover:shadow-xl transition-all border border-slate-100`}
          >
            <span className="text-3xl block mb-2" aria-hidden="true">
              {c.icon}
            </span>
            <p className="font-quicksand text-base font-black text-[#2C3E50]">{c.title}</p>
            <p className="mt-2 text-xs font-semibold text-[#6C7A89] leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Onda de Transição para a seção escura de Diferenciais */}
      <WaveTransition fill="#203243" position="bottom" variant={3} />
    </section>
  );
}
