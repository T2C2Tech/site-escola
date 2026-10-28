import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

const stages = [
  {
    id: 'bercario',
    emoji: '🍼',
    name: 'Berçário Encantado',
    age: '4 meses a 2 anos',
    color: 'from-[#FFE8E8] to-[#FFF3F3]',
    accent: 'bg-kingdom-coral text-white',
    badge: 'Cuidado & Estimulação Precoce',
    desc: 'Espaço com piso aquecido, lactário rigoroso, soninho acolhedor com música ambiente e berçaristas com carinho infinito.',
    highlights: [
      'Estimulação psicomotora especializada',
      'Desmame e introdução alimentar com nutricionista',
      'Massagem Shantala e rotina de sono tranquila',
      'Comunicação em tempo real via aplicativo',
    ],
    image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'infantil',
    emoji: '🎨',
    name: 'Educação Infantil',
    age: '2 a 5 anos (Maternal I, II e Pré)',
    color: 'from-[#EAF5FE] to-[#F3F9FF]',
    accent: 'bg-kingdom-blue text-white',
    badge: 'Curiosidade & Socialização',
    desc: 'Onde a imaginação transborda! Ateliê de artes plásticas, introdução à língua inglesa, musicalização e autonomia respeitosa.',
    highlights: [
      'Ateliê de artes e exploração com elementos naturais',
      'Projetos bilíngues integrados a brincadeiras',
      'Parque de areia, psicomotricidade e teatro',
      'Desenvolvimento da empatia e inteligência socioemocional',
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fundamental',
    emoji: '📚',
    name: 'Ensino Fundamental I',
    age: '1º ao 5º Ano (6 a 10 anos)',
    color: 'from-[#F3EBFA] to-[#FAF5FD]',
    accent: 'bg-kingdom-purple text-white',
    badge: 'Pensamento Crítico & Descobertas',
    desc: 'Letramento afetivo, laboratório de ciências vivas, robótica desplugada, leitura prazerosa e formação cidadã sólida.',
    highlights: [
      'Alfabetização sólida com letramento baseado em fábulas',
      'Iniciação científica com horta e experimentos práticos',
      'Raciocínio lógico, matemática lúdica e leitura semanal',
      'Apoio individualizado com fortalecimento da autoestima',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'integral',
    emoji: '⏰',
    name: 'Turno Integral Real',
    age: 'Flexibilidade total das 07h às 18h30',
    color: 'from-[#FFF7E6] to-[#FFFBF0]',
    accent: 'bg-[#F39C12] text-white',
    badge: 'Facilidade para a Família',
    desc: 'Alimentação orgânica completa feita na hora, oficinas culturais e esportivas (capoeira, judô, música) e acompanhamento das lições.',
    highlights: [
      '4 refeições balanceadas preparadas no próprio castelo',
      'Oficinas no contraturno: inglês, música e esportes',
      'Espaço de descanso individual e repouso vigiado',
      'Horários flexíveis adaptados à rotina profissional dos pais',
    ],
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=800&q=80',
  },
];

export default function KingdomStages() {
  const [selected, setSelected] = useState(stages[0].id);
  const currentStage = stages.find(s => s.id === selected) || stages[0];

  return (
    <section id="fases" className="relative py-16 lg:py-24 bg-[#F4FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-sun/40 text-[#755700] font-fredoka font-bold text-sm mb-3">
            <span>🌈 Do Ninho ao Primeiro Voo</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            Turminhas pensadas com amor para cada fase
          </h2>
          <p className="font-nunito text-lg text-[#55697d] mt-2">
            Clique nas abas abaixo para conhecer o carinho e o projeto pedagógico de cada segmento.
          </p>
        </motion.div>

        {/* Abas Divertidas Estilo Pílula Saltitante */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stages.map(stage => {
            const isActive = stage.id === selected;
            return (
              <motion.button
                key={stage.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(stage.id)}
                className={`px-5 py-3 rounded-full font-fredoka font-bold text-base sm:text-lg flex items-center gap-2.5 transition-all cursor-pointer shadow-md ${
                  isActive
                    ? `${stage.accent} shadow-lg scale-105`
                    : 'bg-white text-kingdom-navy hover:bg-white/80'
                }`}
              >
                <span className="text-xl">{stage.emoji}</span>
                <span>{stage.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Painel do Segmento Selecionado com Animação Fluida */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={`toy-card p-6 sm:p-10 lg:p-12 bg-gradient-to-br ${currentStage.color} border-4 border-white shadow-2xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Informações da Turma */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-white text-kingdom-navy font-fredoka font-bold text-xs shadow-sm">
                    {currentStage.age}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white/70 text-[#465E73] font-nunito font-extrabold text-xs">
                    {currentStage.badge}
                  </span>
                </div>

                <h3 className="font-fredoka text-3xl sm:text-4xl font-bold text-kingdom-navy">
                  {currentStage.emoji} {currentStage.name}
                </h3>

                <p className="font-nunito text-lg text-[#334D64] leading-relaxed">
                  {currentStage.desc}
                </p>

                {/* Lista de Diferenciais da Fase */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {currentStage.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="p-3.5 rounded-2xl bg-white/90 shadow-sm flex items-start gap-2.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-kingdom-green/20 text-[#1e6b47] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-nunito text-sm font-bold text-kingdom-navy">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#visita"
                    className="btn-jelly inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-kingdom-navy text-white font-fredoka font-bold text-base hover:bg-kingdom-blue transition-all"
                  >
                    <span>Conhecer o espaço desta turma</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Foto Ilustrativa */}
              <div className="lg:col-span-5 relative">
                <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-xl">
                  <img
                    src={currentStage.image}
                    alt={currentStage.name}
                    className="w-full h-80 sm:h-96 object-cover rounded-[2rem] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
