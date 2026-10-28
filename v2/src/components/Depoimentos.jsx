import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import WaveTransition from './WaveTransition';

const depoimentosData = [
  {
    nome: 'Mariana & Carlos Silveira',
    relacao: 'Pais do Theo (Berçário II) e da Alice (3º Ano)',
    origem: 'Avaliação no Google',
    texto: 'Deixar o Theo com 6 meses no berçário me dava aperto no peito, mas a equipe nos acolheu como família! A Alice já está no 3º ano, lê livros inteiros sozinha e volta para casa cantando todas as músicas.',
    iniciais: 'MC',
    corBg: 'bg-[#ffdad8] text-[#E63946]',
    categoria: 'google'
  },
  {
    nome: 'Renata Albuquerque',
    relacao: 'Mãe do Bernardo (1º Ano do Fundamental)',
    origem: 'Avaliação no Google',
    texto: 'A alfabetização do Bernardo foi puro encanto. Nada de apostilas pesadas ou cobrança: tudo com brincadeiras com letras, historinhas e carinho. Ele acorda feliz da vida para ir para a escola!',
    iniciais: 'RA',
    corBg: 'bg-[#cee5ff] text-[#2B90D9]',
    categoria: 'google'
  },
  {
    nome: 'Dra. Juliana Vasconcelos',
    relacao: 'Mãe da Luísa (Maternal II)',
    origem: 'Comunidade Escolar',
    texto: 'Sou médica e fico impressionada com o rigor sanitário do lactário e a introdução alimentar com nutricionista própria. Não existe escola mais acolhedora e confiável no nosso bairro.',
    iniciais: 'JV',
    corBg: 'bg-[#EAF6EE] text-[#2E9A68]',
    categoria: 'comunidade'
  },
  {
    nome: 'Fernando & Camila Torres',
    relacao: 'Pais da Sofia (4º Ano)',
    origem: 'Comunidade Escolar',
    texto: 'A transição para as séries fundamentais foi maravilhosa. A Sofia ama as aulas de ciências, a horta e os projetos em grupo. A escola valoriza o caráter e a amizade tanto quanto o boletim.',
    iniciais: 'FT',
    corBg: 'bg-[#ffdf9b] text-[#755700]',
    categoria: 'comunidade'
  }
];

export default function Depoimentos() {
  const [activeTab, setActiveTab] = useState('todas');

  const filtered = activeTab === 'todas'
    ? depoimentosData
    : depoimentosData.filter(d => d.categoria === activeTab);

  return (
    <section id="depoimentos" className="relative pt-24 pb-32 bg-[#FAFCFE] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}
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
            O que as famílias dizem sobre a nossa escola
          </h2>
          <p className="mt-3 font-nunito text-[#6C7A89] text-base">
            Ouvir a experiência de outras mães e pais é a melhor forma de sentir o clima da Borboletinha Encantada.
          </p>
        </motion.div>

        {/* Tabs de Filtro Coloridas e Limpas */}
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
            Google Avaliações (Nota 4.9 ⭐)
          </button>
          <button
            onClick={() => setActiveTab('comunidade')}
            className={`rounded-full px-6 py-2.5 text-sm font-extrabold transition-all ${activeTab === 'comunidade' ? 'bg-[#2E9A68] text-white shadow-md shadow-[#2E9A68]/30 scale-105' : 'bg-white text-[#2C3E50] shadow-sm hover:bg-[#edf4ff]'}`}
          >
            Depoimentos de Pais & Mães ❤️
          </button>
        </div>

        {/* Cards de Depoimento com Efeito Suave */}
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

        {/* Mascote Google Alegre */}
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
              className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-white shadow-lg"
            >
              <img
                src="/logo.png"
                alt="Borboletinha Mascote"
                className="h-28 w-auto object-contain"
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
                  ⭐ <strong>4,9 de 5,0</strong> no Google Avaliações
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
