import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import WaveTransition from './WaveTransition';

const projetosDestaque = [
  {
    titulo: 'Aulas de Robótica Prática',
    sub: 'Tecnologia, montagem e criatividade para estimular o raciocínio lógico e preparar para o mundo do amanhã.',
    icone: '🤖',
    tag: 'Tecnologia & Criatividade'
  },
  {
    titulo: 'Aulas Extras de Capoeira & Balé',
    sub: 'Expressão artística, flexibilidade, ritmo e disciplina através de modalidades extracurriculares dinâmicas.',
    icone: '🩰',
    tag: 'Arte & Movimento'
  },
  {
    titulo: 'Amplo Espaço com Nossa Hortinha',
    sub: 'Crianças plantando, regando e colhendo em canteiros reais, despertando cuidado com a natureza e alimentação viva.',
    icone: '🌱',
    tag: 'Nossa Hortinha'
  },
  {
    titulo: 'Oficinas Culinárias "Mão na Massa"',
    sub: 'Receitas saborosas onde os alunos exploram medidas, texturas e autonomia em ambiente acolhedor.',
    icone: '👩‍🍳',
    tag: 'Vivência Prática'
  }
];

const depoimentosData = [
  {
    nome: 'Mariana & Carlos Silveira',
    relacao: 'Pais da Sophia (Maternal 1) e do Lucas (4º Ano)',
    origem: 'Comunidade Escolar',
    texto: 'Deixar a Sophia no Maternal 1 foi uma tranquilidade imensa. O número reduzido de alunos por turma garante um carinho que não encontramos em outro lugar. E o Lucas ama as aulas de robótica no Colégio Estrutura!',
    iniciais: 'MC',
    corBg: 'bg-[#ffdad8] text-[#E63946]',
    categoria: 'comunidade'
  },
  {
    nome: 'Renata Albuquerque',
    relacao: 'Mãe do Bernardo (2º Período)',
    origem: 'Avaliação da Família',
    texto: 'O Bernardo se encantou pelas aulas de inglês e pelas rodas de leitura. As aulas extras de capoeira e a vivência na hortinha tornam a rotina dele super alegre e saudável. Estamos muito felizes!',
    iniciais: 'RA',
    corBg: 'bg-[#cee5ff] text-[#2B90D9]',
    categoria: 'google'
  },
  {
    nome: 'Dra. Juliana Vasconcelos',
    relacao: 'Mãe do Gabriel (1º Período)',
    origem: 'Comunidade Escolar',
    texto: 'O horário flexível no período integral atende perfeitamente nossos plantões. A escola tem uma proposta socioemocional de verdade: respeito mútuo, acolhimento e turmas com atenção individualizada.',
    iniciais: 'JV',
    corBg: 'bg-[#EAF6EE] text-[#2E9A68]',
    categoria: 'comunidade'
  },
  {
    nome: 'Fernando & Camila Torres',
    relacao: 'Pais da Beatriz (3º Ano do Fundamental)',
    origem: 'Avaliação da Família',
    texto: 'No Colégio Estrutura a Beatriz encontrou professores experientes e material didático de altíssima qualidade. O slogan "Estrutura para crescer, valores para a vida" é cumprido todos os dias!',
    iniciais: 'FT',
    corBg: 'bg-[#ffdf9b] text-[#755700]',
    categoria: 'google'
  }
];

export default function Depoimentos() {
  const [activeTab, setActiveTab] = useState('todas');

  const filtered = activeTab === 'todas'
    ? depoimentosData
    : depoimentosData.filter(d => d.categoria === activeTab);

  return (
    <section id="depoimentos" className="relative pt-24 pb-32 bg-[#FAFCFE] overflow-hidden scroll-mt-20">
      {/* Âncora invisível para link direto #projetos */}
      <div id="projetos" className="absolute -top-10 left-0 h-1 w-1 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5">

        {/* Bloco 1: Nossos Momentos & Projetos (Páginas 9 e 10 do Portfólio) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#cee5ff] px-4 py-1 mb-3 shadow-sm">
              <span className="text-base">✨</span>
              <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#00456e]">
                Nossos Momentos & Projetos
              </span>
            </div>
            <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
              Vivências que transformam curiosidade em aprendizado
            </h2>
            <p className="mt-3 font-nunito text-[#4A5568] text-base">
              Do laboratório de misturas e densidades às oficinas de culinária e saídas de campo na natureza.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projetosDestaque.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl p-2 rounded-2xl bg-slate-50">{proj.icone}</span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#00456e]">
                      {proj.tag}
                    </span>
                  </div>
                  <h3 className="font-quicksand font-black text-lg text-[#2C3E50]">{proj.titulo}</h3>
                  <p className="mt-2 text-xs font-nunito text-[#5b403f] leading-relaxed">{proj.sub}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#E63946] flex items-center justify-between">
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloco 2: Cabeçalho dos Depoimentos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ffdf9b] px-4 py-1 mb-3 shadow-sm">
            <span className="text-base">💬</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#755700]">
              Corações Tranquilos
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            O que as famílias dizem sobre nossa escola
          </h2>
          <p className="mt-3 font-nunito text-[#6C7A89] text-base">
            Ouvir a vivência de outras mães e pais reflete o carinho da E.I. Borboletinha Encantada e Colégio Estrutura.
          </p>
        </motion.div>

        {/* Tabs de Filtro */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          <button
            onClick={() => setActiveTab('todas')}
            className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all ${activeTab === 'todas' ? 'bg-[#E63946] text-white shadow-md shadow-[#E63946]/30 scale-105' : 'bg-white text-[#2C3E50] shadow-sm hover:bg-[#edf4ff]'}`}
          >
            Todas as opiniões ✨
          </button>
          <button
            onClick={() => setActiveTab('google')}
            className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all ${activeTab === 'google' ? 'bg-[#2B90D9] text-white shadow-md shadow-[#2B90D9]/30 scale-105' : 'bg-white text-[#2C3E50] shadow-sm hover:bg-[#edf4ff]'}`}
          >
            Avaliações com Estrelas ⭐
          </button>
          <button
            onClick={() => setActiveTab('comunidade')}
            className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all ${activeTab === 'comunidade' ? 'bg-[#2E9A68] text-white shadow-md shadow-[#2E9A68]/30 scale-105' : 'bg-white text-[#2C3E50] shadow-sm hover:bg-[#edf4ff]'}`}
          >
            Depoimentos de Pais & Mães ❤️
          </button>
        </div>

        {/* Cards de Depoimento */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {filtered.map((dep, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-[2.2rem] bg-white p-8 shadow-md hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300"
            >
              <div className="flex gap-1" aria-label="5 de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F6C343] text-[#F6C343]" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-nunito text-base leading-relaxed text-[#2C3E50] font-medium">
                “{dep.texto}”
              </p>
              <div className="mt-6 flex items-center gap-3.5 border-t border-[#2B90D9]/10 pt-5">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${dep.corBg} text-sm font-black shadow-sm`}>
                  {dep.iniciais}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-quicksand font-black text-base text-[#2C3E50]">{dep.nome}</p>
                  <p className="flex items-center gap-1 text-xs text-[#2E9A68] font-bold">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {dep.relacao}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Banner de Confiança com Logo da Escola */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#edf4ff] via-[#fff8ea] to-[#ffdad8]/50 p-8 lg:p-12 shadow-xl"
        >
          <div className="grid items-center gap-8 md:grid-cols-[14rem_1fr]">
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-lg p-3"
            >
              <img
                src="./logo.png"
                alt="Escola Borboletinha Encantada e Colégio Estrutura"
                className="h-32 w-auto object-contain"
              />
            </motion.div>
            <div>
              <span className="inline-block rounded-full bg-[#E63946] px-3.5 py-1 text-xs font-black text-white uppercase tracking-wider mb-2">
                Amor Comprovado pelas Famílias ❤️
              </span>
              <h3 className="font-quicksand text-2xl sm:text-3xl font-black text-[#2C3E50]">
                Mais de 98% das famílias nos recomendam para amigos e vizinhos!
              </h3>
              <p className="mt-3 font-nunito text-[#5b403f] text-base leading-relaxed font-medium">
                Venha fazer parte da nossa comunidade escolar. Agende uma visita guiada sem compromisso e sinta a energia do nosso espaço.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#visita"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E63946] to-[#db313f] px-8 py-3.5 font-quicksand text-base font-black text-white shadow-xl shadow-[#E63946]/30 transition-all"
                >
                  Quero Conhecer de Perto! 🦋 <ArrowRight className="h-5 w-5" />
                </motion.a>
                <span className="rounded-2xl bg-white px-4 py-2 text-sm font-black text-[#2C3E50] shadow-sm">
                  ⭐ <strong>Acolhimento & Respeito</strong> comprovados pelas famílias
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Onda de Transição para o Agendamento */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={3} />
    </section>
  );
}
