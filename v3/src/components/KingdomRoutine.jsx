import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Sun, Utensils, Moon, Music, Sparkles } from 'lucide-react';

const schedule = [
  {
    time: '07h30 - 08h30',
    title: 'Acolhida & Roda de Afeto',
    desc: 'Recepção carinhosa de cada criança pelo nome, transição suave do colo dos pais e cantigas lúdicas.',
    icon: '☀️',
    color: 'bg-[#FFEBE8]',
    border: 'border-kingdom-coral',
    tag: 'Vínculo Seguro',
  },
  {
    time: '08h30 - 11h30',
    title: 'Ateliês, Descobertas & Bilíngue',
    desc: 'Projetos pedagógicos, ateliê de artes plásticas, ciências na horta viva e atividades de imersão no inglês.',
    icon: '🎨',
    color: 'bg-[#EBF4FC]',
    border: 'border-kingdom-blue',
    tag: 'Aprendizagem Ativa',
  },
  {
    time: '11h30 - 13h30',
    title: 'Almoço Saudável & Descanso',
    desc: 'Alimentação fresca e balanceada preparada por nutricionista, higiene e soneca revigorante em ambiente climatizado.',
    icon: '🥗',
    color: 'bg-[#EBF9F1]',
    border: 'border-kingdom-green',
    tag: 'Nutrição Orgânica',
  },
  {
    time: '13h30 - 18h30',
    title: 'Parque, Oficinas & Despedida',
    desc: 'Brincadeira livre no pátio arborizado, oficinas de judô, ballet, música e lanche da tarde até o reencontro familiar.',
    icon: '🌳',
    color: 'bg-[#F5EEFB]',
    border: 'border-kingdom-purple',
    tag: 'Energia & Socialização',
  },
];

export default function KingdomRoutine() {
  return (
    <section id="diaadia" className="relative py-16 lg:py-24 bg-[#F4FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-sun/40 text-[#755700] font-fredoka font-bold text-sm mb-3">
            <span>⏰ A Magia do Dia a Dia</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            Uma rotina com previsibilidade, alegria e aconchego
          </h2>
          <p className="font-nunito text-lg text-[#55697d] mt-2">
            Equilíbrio perfeito entre foco pedagógico, brincadeiras espontâneas, repouso tranquilo e nutrição nota 10.
          </p>
        </motion.div>

        {/* 4 Blocos da Jornada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className={`toy-card p-7 ${item.color} flex flex-col justify-between border-t-8 ${item.border} relative overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-fredoka font-bold text-xs px-3 py-1 rounded-full bg-white text-kingdom-navy shadow-sm">
                    {item.time}
                  </span>
                  <span className="text-3xl">{item.icon}</span>
                </div>

                <h3 className="font-fredoka text-xl font-bold text-kingdom-navy mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-nunito text-sm text-[#465E73] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#6D8299]">
                <span className="px-2 py-0.5 rounded-md bg-white/70">{item.tag}</span>
                <Sparkles className="w-4 h-4 text-kingdom-coral" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
