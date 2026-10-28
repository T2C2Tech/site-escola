import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sun, Sparkles, Smile, Users } from 'lucide-react';

const pillars = [
  {
    icon: '🏰',
    title: 'Acolhimento Familiar',
    desc: 'Aqui as crianças são chamadas pelo nome e se sentem tão seguras quanto no colo da família.',
    color: 'bg-[#FFEBE8]',
    border: 'border-kingdom-coral/30',
    tag: 'Afeto Genuíno',
  },
  {
    icon: '🎨',
    title: 'Aprender Brincando',
    desc: 'O brincar heurístico e livre desperta o raciocínio, a cooperação e a paixão por descobrir o mundo.',
    color: 'bg-[#FFF9E6]',
    border: 'border-kingdom-yellow/30',
    tag: 'Metodologia Ativa',
  },
  {
    icon: '🌱',
    title: 'Horta & Natureza',
    desc: 'Canteiros pedagógicos, arborização e exploração sensorial ao ar livre todos os dias.',
    color: 'bg-[#EBF9F1]',
    border: 'border-kingdom-green/30',
    tag: 'Sustentabilidade',
  },
  {
    icon: '🤝',
    title: 'Portas Abertas',
    desc: 'Comunicação diária transparente via aplicativo próprio com registros detalhados da rotina.',
    color: 'bg-[#EBF4FC]',
    border: 'border-kingdom-blue/30',
    tag: 'Parceria com os Pais',
  },
];

export default function KingdomAbout() {
  return (
    <section id="castelo" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-mint/30 text-[#1e6b47] font-fredoka font-bold text-sm mb-3">
            <span>🏰 Nossa História e Valores</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            Um refúgio seguro onde cada criança é ouvida e valorizada
          </h2>
          <p className="font-nunito text-lg text-[#55697d] mt-3 leading-relaxed">
            Fundada com o propósito de humanizar a educação infantil no bairro, o <strong>Reinado da Criança</strong> une sólida base pedagógica a um ambiente cercado de carinho, respeito ao tempo de cada idade e alegria contagiante.
          </p>
        </motion.div>

        {/* Grid dos 4 Pilares Mágicos com animações e elevação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`toy-card p-7 flex flex-col justify-between ${p.color} border-2 ${p.border}`}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-5">
                  {p.icon}
                </div>
                <span className="text-xs font-fredoka font-bold px-2.5 py-1 rounded-full bg-white/80 text-kingdom-dark shadow-sm">
                  {p.tag}
                </span>
                <h3 className="font-fredoka text-2xl font-bold text-kingdom-navy mt-3 mb-2">
                  {p.title}
                </h3>
                <p className="font-nunito text-base text-[#465E73] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-nunito font-bold text-[#6D8299]">
                <Sparkles className="w-4 h-4 text-kingdom-yellow" />
                <span>Prática pedagógica diária</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
