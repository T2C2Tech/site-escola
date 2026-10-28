import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjetosExtracurriculares({
  onOpenVisitModal,
  onOpenVideoModal,
}) {
  const [activeClub, setActiveClub] = useState(0);

  const clubs = [
    {
      emoji: '🇬🇧',
      shortName: 'Iniciação Bilíngue',
      badge: 'Inglês Todos os Dias',
      title: 'Iniciação Bilíngue Diária com Música e Vivências',
      activeTabClass: 'bg-reinado-celeste text-white border-reinado-celeste',
      cardBg: 'bg-reinado-celeste-light/60',
      description:
        'Acreditamos que o inglês deve ser vivido com naturalidade e alegria. Todos os dias, nossas crianças têm contato com o idioma através de músicas, jogos, contação de histórias e situações práticas.',
      benefits: [
        'Contato diário com a língua inglesa na janela ideal da infância',
        'Aprendizado auditivo e oral natural, sem pressão e de forma acolhedora',
        'Integrado à rotina da Educação Infantil e do Ensino Fundamental I',
      ],
      image: './assets/hero-criancas.png',
      hasVideo: true,
      videoTitle: 'Iniciação Bilíngue Diária — Colégio Reinado da Criança',
    },
    {
      emoji: '👩‍🍳',
      shortName: 'Oficina Mini-Chef',
      badge: 'Cozinha Pedagógica Experimental',
      title: 'Oficina de Mini-Chef & Educação Alimentar Saudável',
      activeTabClass: 'bg-reinado-tangerina text-white border-reinado-tangerina',
      cardBg: 'bg-reinado-tangerina-light/60',
      description:
        'Em nossa Cozinha Pedagógica, os alunos exploram texturas, aromas e receitas nutritivas usando ingredientes frescos colhidos na própria escola.',
      benefits: [
        'Auxilia na superação da seletividade alimentar com incentivo coletivo',
        'Trabalha matemática (medidas), ciências e hábitos de higiene na prática',
        'Autonomia e prazer em experimentar frutas, legumes e alimentos naturais',
      ],
      image: './assets/minichef-cozinha.png',
      hasVideo: true,
      videoTitle: 'Oficina de Mini-Chef — Cozinha Pedagógica no Reinado da Criança',
    },
    {
      emoji: '🌱',
      shortName: 'Horta & Psicomotricidade',
      badge: 'Natureza & Movimento Diário',
      title: 'Horta Comunitária & Circuitos de Psicomotricidade',
      activeTabClass: 'bg-reinado-limao text-white border-reinado-limao',
      cardBg: 'bg-reinado-limao-light/60',
      description:
        'Nossos alunos plantam, regam e colhem na Horta Comunitária, além de desenvolverem equilíbrio, coordenação e ritmo nas atividades de Psicomotricidade.',
      benefits: [
        'Cuidado diário com a natureza, paciência e consciência ambiental',
        'Desenvolvimento motor global, lateralidade e consciência corporal',
        'Conexão direta entre o cultivo na horta e o preparo no Mini-Chef',
      ],
      image: './assets/horta-comunitaria.png',
      hasVideo: false,
    },
    {
      emoji: '👑',
      shortName: 'Líder em Mim',
      badge: 'Educação Socioemocional',
      title: 'Programa Socioemocional "Líder em Mim"',
      activeTabClass: 'bg-reinado-sol text-reinado-ink border-amber-300',
      cardBg: 'bg-reinado-sol-light/70',
      description:
        'Formamos crianças emocionalmente seguras. Trabalhamos autoconfiança, empatia, escuta ativa, colaboração e resolução pacífica de conflitos.',
      benefits: [
        'Protagonismo infantil e responsabilidade desde os primeiros anos',
        'Crianças que aprendem a reconhecer sentimentos e respeitar os colegas',
        'Parceria próxima entre escola e família na formação de valores',
      ],
      image: './assets/bercario-afetivo.png',
      hasVideo: false,
    },
  ];

  const current = clubs[activeClub];

  return (
    <section id="projetos" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho Sóbrio */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-reinado-ink font-fredoka font-medium text-xs sm:text-sm shadow-sticker-sm">
            <Sparkles className="w-3.5 h-3.5 text-reinado-tangerina" />
            Vivências & Projetos Extracurriculares
          </span>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Projetos práticos que encantam e{' '}
            <span className="text-reinado-limao">desenvolvem para a vida</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Selecione um dos projetos abaixo para conhecer como enriquecemos a rotina no{' '}
            <strong>Reinado da Criança</strong>:
          </p>
        </div>

        {/* Abas dos 4 Projetos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
          {clubs.map((club, index) => {
            const active = activeClub === index;
            return (
              <button
                key={club.shortName}
                type="button"
                onClick={() => setActiveClub(index)}
                className={`p-4 rounded-2xl border font-fredoka font-semibold text-left flex items-center gap-3 transition-all cursor-pointer ${
                  active
                    ? `${club.activeTabClass} shadow-sticker`
                    : 'bg-white border-slate-200 text-reinado-ink hover:bg-slate-50'
                }`}
              >
                <span className="w-11 h-11 rounded-xl bg-white/95 border border-slate-200/70 flex items-center justify-center text-xl shrink-0">
                  {club.emoji}
                </span>
                <div>
                  <span
                    className={`text-[10px] font-nunito font-bold uppercase block ${
                      active ? 'opacity-90' : 'text-reinado-slate'
                    }`}
                  >
                    Projeto 0{index + 1}
                  </span>
                  <span className="text-sm sm:text-base leading-tight block">
                    {club.shortName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Card Principal do Projeto Ativo */}
        <motion.div
          key={activeClub}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`sticker-card rounded-[2rem] p-6 sm:p-10 ${current.cardBg}`}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Imagem / Vídeo à Esquerda */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-3 rounded-[1.75rem] border border-slate-200 shadow-sticker">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3.3] group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 border border-slate-200 font-fredoka font-semibold text-xs text-reinado-ink">
                    {current.emoji} {current.shortName}
                  </span>

                  {current.hasVideo && (
                    <button
                      type="button"
                      onClick={() =>
                        onOpenVideoModal({
                          title: current.videoTitle,
                        })
                      }
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white cursor-pointer"
                    >
                      <span className="w-14 h-14 rounded-full bg-reinado-tangerina/95 text-white border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </span>
                      <span className="px-3 py-1 rounded-full bg-reinado-ink/85 text-xs font-fredoka font-medium">
                        Assistir Vídeo
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Texto e Benefícios à Direita */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 font-fredoka font-medium text-xs text-reinado-slate">
                {current.badge}
              </span>

              <h3 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                {current.title}
              </h3>

              <p className="text-base sm:text-lg text-reinado-slate font-semibold leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2.5">
                {current.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 bg-white/95 p-3.5 rounded-2xl border border-slate-200/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-reinado-limao shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-reinado-ink">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="btn-toy px-6 py-3 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm sm:text-base flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita para Conhecer</span>
                </button>

                {current.hasVideo && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenVideoModal({
                        title: current.videoTitle,
                      })
                    }
                    className="btn-toy px-5 py-3 rounded-full bg-white text-reinado-ink font-fredoka font-semibold text-sm flex items-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-reinado-celeste text-reinado-celeste" />
                    <span>Ver Vídeo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
