import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  ChefHat,
  Sprout,
  HeartHandshake,
  Activity,
  Sparkles,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export default function ProjetosExtracurriculares({ onOpenVisitModal }) {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Iniciação Bilíngue Diária',
      subtitle: 'Imersão lúdica na língua inglesa todos os dias',
      emoji: '🇬🇧',
      icon: Globe2,
      badge: 'Inglês Todo Dia',
      cardBg: 'bg-reinado-celeste',
      lightBg: 'bg-reinado-celeste-light',
      textColor: 'text-reinado-celeste-dark',
      borderColor: 'border-reinado-celeste',
      description:
        'Inspirados nas melhores referências de ensino de idiomas para crianças (como a metodologia lúdica Red Balloon), nossos alunos vivenciam o inglês diariamente de forma natural: através de músicas, contação de histórias, jogos motores e conversação afetiva.',
      benefits: [
        'Contato diário com o idioma na janela ideal de neuroplasticidade',
        'Aprendizado natural sem pressão, por meio de brincadeiras e músicas',
        'Vocabulário integrado à rotina escolar, culinária e natureza',
      ],
    },
    {
      title: 'Oficina de Mini-Chef',
      subtitle: 'Cozinha pedagógica para explorar a alimentação saudável',
      emoji: '👩‍🍳',
      icon: ChefHat,
      badge: 'Cozinha Pedagógica',
      cardBg: 'bg-reinado-tangerina',
      lightBg: 'bg-reinado-tangerina-light',
      textColor: 'text-reinado-tangerina-dark',
      borderColor: 'border-reinado-tangerina',
      description:
        'Na Oficina de Mini-Chef, as crianças colocam a mão na massa! Elas preparam receitas nutritivas, conhecem texturas, cores e aromas dos alimentos e desenvolvem uma relação positiva e alegre com a alimentação saudável.',
      benefits: [
        'Redução da seletividade alimentar de forma divertida e coletiva',
        'Noções práticas de medidas, matemática, higiene e cooperação',
        'Integração direta com os ingredientes colhidos na nossa Horta',
      ],
    },
    {
      title: 'Horta Comunitária',
      subtitle: 'Contato diário com a terra, natureza e sustentabilidade',
      emoji: '🌱',
      icon: Sprout,
      badge: 'Educação Ambiental',
      cardBg: 'bg-reinado-limao',
      lightBg: 'bg-reinado-limao-light',
      textColor: 'text-reinado-limao-dark',
      borderColor: 'border-reinado-limao',
      description:
        'Plantar, regar, cuidar e colher! Na nossa Horta Comunitária, as crianças aprendem sobre o tempo da natureza, paciência, responsabilidade ambiental e o valor do trabalho em equipe.',
      benefits: [
        'Experiências sensoriais ricas ao ar livre no Mariano Procópio',
        'Consciência ecológica e respeito aos alimentos desde o berçário',
        'Colheitas levadas para a família e para a Oficina de Mini-Chef',
      ],
    },
    {
      title: 'Educação Socioemocional (Líder em Mim)',
      subtitle: 'Autoconhecimento, empatia, protagonismo e ética',
      emoji: '💛',
      icon: HeartHandshake,
      badge: 'Líder em Mim',
      cardBg: 'bg-reinado-sol',
      lightBg: 'bg-reinado-sol-light',
      textColor: 'text-reinado-sol-dark',
      borderColor: 'border-reinado-sol',
      description:
        'Desenvolvemos habilidades socioemocionais essenciais para o século XXI. Com os princípios do programa "Líder em Mim", cada criança aprende a nomear emoções, ouvir o colega, ter responsabilidade e liderar a própria história.',
      benefits: [
        'Fortalecimento da autoestima e da inteligência emocional',
        'Prevenção ativa ao bullying e cultura de paz na escola',
        'Hábitos de organização, proatividade e colaboração em família',
      ],
    },
    {
      title: 'Psicomotricidade Lúdica',
      subtitle: 'Corpo em movimento, equilíbrio e desenvolvimento cognitivo',
      emoji: '🤸',
      icon: Activity,
      badge: 'Corpo & Mente',
      cardBg: 'bg-reinado-celeste-dark',
      lightBg: 'bg-reinado-celeste-light',
      textColor: 'text-reinado-celeste-dark',
      borderColor: 'border-reinado-celeste',
      description:
        'Na infância, o pensamento nasce do movimento! Nossos circuitos de psicomotricidade estimulam a coordenação motora ampla e fina, lateralidade, equilíbrio e noção espacial — bases indispensáveis para a alfabetização.',
      benefits: [
        'Circuitos motores adaptados do Berçário (4 meses) ao Fundamental I',
        'Preparação neurológica e motora para a escrita firme e prazerosa',
        'Gasto saudável de energia com alegria e cooperação',
      ],
    },
  ];

  const active = projects[selectedProject];

  return (
    <section id="projetos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-limao-light text-reinado-limao-dark font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Vivências Extracurriculares & Projetos Especiais
          </span>
          <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink">
            Um universo de descobertas{' '}
            <span className="text-reinado-limao-dark">todos os dias</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Clique nos projetos abaixo e veja como tornamos o aprendizado vivo, colorido e inesquecível.
          </p>
        </div>

        {/* Grid Interativo de Seletores */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {projects.map((proj, index) => {
            const isSelected = index === selectedProject;
            return (
              <button
                key={proj.title}
                type="button"
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border-2 flex flex-col justify-between ${
                  isSelected
                    ? `${proj.lightBg} ${proj.borderColor} shadow-lg scale-[1.03]`
                    : 'bg-slate-50 border-slate-200/80 hover:bg-white hover:border-reinado-celeste/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-3xl">{proj.emoji}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${proj.lightBg} ${proj.textColor}`}
                  >
                    {proj.badge}
                  </span>
                </div>
                <p className="font-fredoka font-bold text-sm sm:text-base text-reinado-ink leading-snug">
                  {proj.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Card Detalhado do Projeto Ativo */}
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`rounded-[2.25rem] p-6 sm:p-10 lg:p-12 border-4 ${active.borderColor} ${active.lightBg}/40 bg-white shadow-xl`}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm border border-slate-200">
                <span className="text-xl">{active.emoji}</span>
                <span className={`font-fredoka font-bold text-xs uppercase ${active.textColor}`}>
                  {active.badge}
                </span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink">
                {active.title}
              </h3>

              <p className="text-base sm:text-lg text-reinado-slate font-semibold leading-relaxed">
                {active.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {active.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/70 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-reinado-limao shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-reinado-ink">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-reinado-ink text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs uppercase mb-3">
                  Vivencie ao Vivo!
                </span>
                <h4 className="font-fredoka text-2xl font-bold leading-snug">
                  Venha ver seu filho encantado com nossas oficinas!
                </h4>
                <p className="text-sm text-white/85 font-semibold mt-2 leading-relaxed">
                  Durante a sua visita guiada no Mariano Procópio, apresentamos pessoalmente a Cozinha Mini-Chef, a Horta Comunitária e as salas temáticas.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-tangerina w-full py-4 px-5 rounded-2xl font-fredoka font-bold text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Visita Exclusiva</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

