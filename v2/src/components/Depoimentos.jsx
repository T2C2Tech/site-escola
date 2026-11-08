import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
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
    nome: 'Renata Cristina',
    relacao: 'Mãe de aluna • Avaliação no Google',
    origem: 'Google Maps',
    texto: 'Uma escola excelente, com profissionais qualificados e muito carinhosos. Minha filha está lá desde 1 ano e meio e ela simplesmente é apaixonada por todos. Ambiente acolhedor e familiar. Cuidado, dedicação e confiança são palavras que definem a Escola.',
    iniciais: 'RC',
    foto: 'https://lh3.googleusercontent.com/a/ACg8ocJFengortmvFcKw0-41cbGctfmEvwlJN4PDhQ8uz4_AgEVgNA=s120-c-rp-mo-br100',
    corBg: 'bg-[#ffdad8] text-[#E63946]',
    categoria: 'google'
  },
  {
    nome: 'Natália Barbosa',
    relacao: 'Mãe de alunos • Avaliação no Google',
    origem: 'Google Maps',
    texto: 'Não tenho palavras para descrever a escola, o carinho das professoras com os alunos, o olhar individualizado para os alunos, entendendo que cada criança é única! Tenho muita segurança em deixar meus filhos sobre os cuidados da Silmara e a equipe maravilhosa que ela tem! Meus filhos amam a escola e sentem falta até nos finais de semana, e isso é reflexo do trabalho feito com amor e dedicação!',
    iniciais: 'NB',
    foto: 'https://lh3.googleusercontent.com/a-/ALV-UjWnsGXoFPePW7zGNSUMfc7I2eVcsng6j2rxIXqgM0wildO3l9zu=s120-c-rp-mo-br100',
    corBg: 'bg-[#cee5ff] text-[#2B90D9]',
    categoria: 'google'
  },
  {
    nome: 'Francineide Cheffer',
    relacao: 'Mãe de aluna • Avaliação no Google',
    origem: 'Google Maps',
    texto: 'Excelente! Só tenho a dizer que só tem pontos positivos na escola, são todos muito atenciosos e o aprendizado é ótimo. Minha filha teve muita facilidade em aprender com as professoras graças a Deus, e ela adora estudar nessa escola. E pretendo manter ela até o quinto ano.',
    iniciais: 'FC',
    foto: 'https://lh3.googleusercontent.com/a/ACg8ocIazci2QYd2QAiWDlcnQqnlmRvPtFlg1kUYEAxQKNvP5FnecA=s120-c-rp-mo-br100',
    corBg: 'bg-[#ffdf9b] text-[#755700]',
    categoria: 'google'
  },
  {
    nome: 'Michele Fayer',
    relacao: 'Mãe de aluno • Avaliação no Google',
    origem: 'Google Maps',
    texto: 'Minha experiência foi ótima. Uma escola acolhedora, que está realmente preocupada com o desenvolvimento das crianças. Meu filho foi muito bem recebido e tratado com muito carinho por todos. Só tenho a agradecer.',
    iniciais: 'MF',
    foto: 'https://lh3.googleusercontent.com/a-/ALV-UjVvYUa1IrG-DsOwmOw3GAorkN0z7GLc6qGTgl0qVwIlPmYeGpldfg=s120-c-rp-mo-br100',
    corBg: 'bg-[#EAF6EE] text-[#2E9A68]',
    categoria: 'google'
  },
  {
    nome: 'Allan Souza Rodrigues',
    relacao: 'Pai de aluno (4 anos na escola) • Avaliação no Google',
    origem: 'Google Maps',
    texto: 'Meu filho já está na escola Borboletinha Encantada/Colégio Estrutura há 4 anos. Em todos esses anos só temos a agradecer a todos da escola que sempre mostrou excelência no ensino e no trato carinhoso com todos os pequenos. Eu e minha família amamos a escola e todos os profissionais de lá, se eu pudesse daria mil estrelas.',
    iniciais: 'AR',
    foto: 'https://lh3.googleusercontent.com/a-/ALV-UjUEgXbzh7sH2nL9fNzSYWB4V7oXM9K3j27VhxClpkhi5_Qof-gNeg=s120-c-rp-mo-ba12-br100',
    corBg: 'bg-[#f0e7ff] text-[#6b21a8]',
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
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            O que as famílias dizem sobre nossa escola
          </h2>
          <p className="mt-3 font-nunito text-[#6C7A89] text-base">
            Depoimentos verídicos de pais da Escola Borboletinha Encantada & Colégio Estrutura.
          </p>

          {/* Selo 5.0 Estrelas */}
          <div className="mt-4 inline-flex items-center gap-2.5 bg-amber-50 border border-amber-200/80 px-4 py-2 rounded-2xl shadow-sm">
            <span className="font-quicksand font-black text-amber-800 text-lg">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-600 font-sans border-l border-amber-200 pl-2.5">
              Nota máxima no Google Maps
            </span>
          </div>
        </motion.div>

        {/* Cards de Depoimento */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-2">
          {filtered.map((dep, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-[2.2rem] bg-white p-7 shadow-md hover:shadow-xl sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1" aria-label="5 de 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#F6C343] text-[#F6C343]" />
                  ))}
                </div>
              </div>

              <p className="flex-1 font-nunito text-sm sm:text-base leading-relaxed text-[#2C3E50] font-medium">
                “{dep.texto}”
              </p>

              <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                {dep.foto ? (
                  <img
                    src={dep.foto}
                    alt={dep.nome}
                    className="h-12 w-12 rounded-2xl object-cover shadow-sm border border-slate-200 shrink-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <span
                  style={{ display: dep.foto ? 'none' : 'flex' }}
                  className={`h-12 w-12 items-center justify-center rounded-2xl ${dep.corBg} text-sm font-black shadow-sm shrink-0`}
                >
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

        {/* Botão Ver no Google Maps */}
        <div className="mt-8 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.google.com/maps/place/Escola+Infantil+Borboletinha+Encantada/@-21.7581492,-43.3806702,17z/data=!4m8!3m7!1s0x989bbda7315ac1:0xc63f2e17aa270c6e!8m2!3d-21.7581492!4d-43.3780953!9m1!1b1!16s%2Fg%2F11h5wpr75g?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-6 py-3 font-quicksand text-sm font-black text-white shadow-md hover:bg-slate-800 transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Ver avaliações no Google Maps
            <ExternalLink className="h-4 w-4" />
          </motion.a>
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
