import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import WaveTransition from './WaveTransition';

const ciclos = [
  {
    titulo: 'Maternal 1 e 2',
    idade: '1 a 3 anos',
    instituicao: 'Escola Borboletinha Encantada',
    desc: 'Número reduzido de crianças por turma para garantir acolhimento singular, estimulação sensorial, visual e auditiva, musicalização infantil e contação de histórias.',
    destaques: [
      'Número reduzido de crianças por turma',
      'Estimulação sensorial, visual e musicalização',
      'Coordenação motora e acolhimento com afeto'
    ],
    corBg: 'from-[#ffdad8] to-[#ffb3b1]',
    corTexto: 'text-[#b7102a]',
    emoji: '🍼',
    badge: 'Turmas Reduzidas & Afeto',
    imagem: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: '1º Período',
    idade: '4 anos',
    instituicao: 'Escola Borboletinha Encantada',
    desc: 'Coordenação motora ampla e fina, consciência corporal e autonomia. Inserção de aulas de robótica, inglês lúdico, vivências na hortinha e turmas reduzidas.',
    destaques: [
      'Aulas de Robótica e iniciação ao Inglês',
      'Coordenação motora e autonomia infantil',
      'Amplo espaço com hortinha e contato com a terra'
    ],
    corBg: 'from-[#cee5ff] to-[#98cbff]',
    corTexto: 'text-[#00456e]',
    emoji: '🤖',
    badge: 'Robótica & Inglês',
    imagem: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: '2º Período',
    idade: '5 anos',
    instituicao: 'Escola Borboletinha Encantada',
    desc: 'Familiarização natural com o universo das letras e linguagem escrita através de rodas de leitura, contação de histórias, projetos makers de robótica e aulas de inglês.',
    destaques: [
      'Iniciação ao universo das letras com afeto',
      'Aulas de Robótica e vocabulário em Inglês',
      'Expressão espontânea pela leitura e arte'
    ],
    corBg: 'from-[#ffdf9b] to-[#f2bf40]',
    corTexto: 'text-[#5b4300]',
    emoji: '🎨',
    badge: 'Letramento & Descobertas',
    imagem: 'https://images.unsplash.com/photo-1500995617113-cf789362a3e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Ensino Fundamental 1',
    idade: '1º ao 5º ano',
    instituicao: 'Colégio Estrutura',
    desc: 'Um ensino completo para formar hoje o amanhã: turmas com número reduzido, professores experientes, material didático de qualidade, aulas de robótica e educação socioemocional.',
    destaques: [
      'Número reduzido de crianças por turma',
      'Aulas de Robótica: tecnologia e criatividade',
      'Material didático atualizado e professores experientes',
      'Educação Socioemocional para a vida'
    ],
    corBg: 'from-[#EAF6EE] to-[#c1e7ce]',
    corTexto: 'text-[#1c6342]',
    emoji: '🚀',
    badge: 'Fundamental Completo 2027',
    imagem: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Aulas Extras: Capoeira & Balé',
    idade: 'Educação Infantil & Fundamental',
    instituicao: 'Borboletinha & Estrutura',
    desc: 'Aulas extras de Capoeira e Balé que estimulam ritmo, flexibilidade, expressão artística, disciplina e consciência corporal, além de Educação Física dinâmica e tecido acrobático.',
    destaques: [
      'Aulas extras de Capoeira e Balé',
      'Equilíbrio, postura corporal e saúde',
      'Circuitos psicomotores e tecido acrobático'
    ],
    corBg: 'from-[#EFEBFA] to-[#d6cff1]',
    corTexto: 'text-[#3b3266]',
    emoji: '🩰',
    badge: 'Capoeira, Balé & Movimento',
    imagem: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Parcial & Integral Flexível',
    idade: 'Maternal 1 ao 5º Ano',
    instituicao: 'Borboletinha & Estrutura',
    desc: 'Horário parcial e integral com horário flexível adaptado às necessidades dos pais. Oficinas culinárias ("mão na massa"), vivências na Nossa Hortinha, apoio escolar e descanso seguro.',
    destaques: [
      'Horário parcial e integral flexível',
      'Amplo espaço com hortinha pedagógica',
      'Oficinas de culinária e ateliê criativo'
    ],
    corBg: 'from-[#ffdad8] to-[#ffdf9b]',
    corTexto: 'text-[#b7102a]',
    emoji: '⏰',
    badge: 'Horário Flexível',
    imagem: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  }
];

const condicoesEducacionais = [
  { icon: '🍓', texto: 'Alimentação 100% Saudável e Colorida' },
  { icon: '👥', texto: 'Turmas Acolhedoras com Poucos Alunos' },
  { icon: '🤖', texto: 'Robótica e Pensamento Computacional' },
  { icon: '🇬🇧', texto: 'Inglês Lúdico com Músicas' },
  { icon: '🩰', texto: 'Aulas Extras de Capoeira e Balé' },
  { icon: '🌱', texto: 'Horta Pedagógica que as Crianças Cuidam' },
  { icon: '🎵', texto: 'Musicalização e Bandinha Rítmica' },
  { icon: '📚', texto: 'Cantinho da Leitura e Material Atualizado' },
  { icon: '💜', texto: 'Educação Socioemocional e Empatia' },
  { icon: '⏰', texto: 'Horário Parcial e Integral Flexível' },
  { icon: '👩‍🏫', texto: 'Quadro de Professores Experientes' },
  { icon: '🍼', texto: 'Estimulação Sensorial no Maternal 1 e 2' },
  { icon: '🤸', texto: 'Educação Física e Consciência Corporal' },
  { icon: '👩‍🍳', texto: 'Oficinas Culinárias Práticas Mão na Massa' },
  { icon: '🎪', texto: 'Pátio Amplo e Seguro para Brincar' }
];

export default function Segmentos() {
  return (
    <section id="segmentos" className="relative bg-[#edf4ff] pt-24 pb-32 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >

          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Da primeira infância ao <br />
            <span className="text-[#2B90D9]">protagonismo escolar</span> com amor e inovação!
          </h2>
          <p className="mt-4 font-nunito text-base sm:text-lg text-[#5b403f] leading-relaxed">
            Conheça as etapas e serviços da <strong>Escola Borboletinha Encantada</strong> (Maternal 1 ao 2º Período) e do <strong>Colégio Estrutura</strong> (1º ao 5º Ano do Ensino Fundamental): turmas reduzidas, robótica, inglês, capoeira, balé e horário flexível.
          </p>
        </motion.div>

        {/* Grid de Cards com Stagger Suave */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:px-0">
          {ciclos.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex w-[85%] shrink-0 snap-start flex-col rounded-[2.8rem] bg-white p-7 shadow-lg hover:shadow-2xl sm:w-[calc(50%-12px)] lg:w-auto transition-all duration-300 border border-slate-100"
            >
              {/* Badge Superior */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${item.corBg} px-3.5 py-1 text-xs font-black ${item.corTexto} shadow-sm`}>
                  <span>{item.emoji}</span> {item.badge}
                </span>
                <span className="text-xs font-bold text-[#6C7A89] bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {item.idade}
                </span>
              </div>

              {/* Foto da Turma */}
              <div className="relative mb-5 overflow-hidden rounded-3xl aspect-[16/10] bg-slate-100 shadow-inner">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 rounded-xl bg-black/60 px-2.5 py-1 text-[11px] font-black text-white backdrop-blur-sm">
                  {item.instituicao}
                </span>
              </div>

              {/* Título e Descrição Oficial */}
              <h3 className="font-quicksand text-xl font-black text-[#2C3E50]">
                {item.titulo}
              </h3>
              <p className="mt-2.5 font-nunito text-xs text-[#5b403f] leading-relaxed">
                {item.desc}
              </p>

              {/* Tópicos com Check */}
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 flex-1">
                {item.destaques.map((dest, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-bold text-[#2C3E50]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2E9A68] mt-0.5" />
                    <span>{dest}</span>
                  </li>
                ))}
              </ul>

              {/* Rodapé do Card com CTA */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#visita"
                  className="rounded-full bg-[#edf4ff] hover:bg-[#2B90D9] text-[#1E5A87] hover:text-white px-3.5 py-1.5 text-xs font-extrabold transition-colors shadow-sm"
                >
                  Conhecer Turma →
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bloco: Compromissos e Práticas Pedagógicas Oficiais no estilo Pills Flutuantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-[2.5rem] bg-white p-7 sm:p-12 shadow-md border border-slate-100 max-w-5xl mx-auto"
        >
          <div className="text-center mb-7 sm:mb-9">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#E63946]">
              ✨ COMPROMISSOS E PRÁTICAS PEDAGÓGICAS OFICIAIS
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
            {condicoesEducacionais.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#f0f6ff] hover:bg-[#e2edff] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-bold text-[#1E5A87] shadow-xs transition-colors cursor-default border border-[#e2ecf9]/60"
              >
                <span className="text-base shrink-0">{item.icon}</span>
                <span>{item.texto}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Onda de Transição para a próxima seção */}
      <WaveTransition fill="#ffffff" position="bottom" variant={2} />
    </section>
  );
}
