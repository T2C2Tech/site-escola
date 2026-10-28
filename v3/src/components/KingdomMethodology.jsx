import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Brain, Compass, Users, HeartHandshake } from 'lucide-react';

const methods = [
  {
    icon: '🌱',
    tag: 'Sociointeracionismo',
    title: 'Mediação com Afeto (Vygotsky)',
    desc: 'O professor atua como guia sensível que instiga perguntas, estimula a autonomia e valoriza as descobertas individuais.',
    bg: 'bg-[#FFF2EE]',
    color: 'text-kingdom-coral',
  },
  {
    icon: '🧩',
    tag: 'Heurística',
    title: 'Investigação e Brincar Livre',
    desc: 'Materiais naturais não estruturados que convidam à invenção, raciocínio espacial, experimentação e colaboração.',
    bg: 'bg-[#EEF7FE]',
    color: 'text-kingdom-blue',
  },
  {
    icon: '📖',
    tag: 'Letramento',
    title: 'Alfabetização com Contos de Fadas',
    desc: 'O gosto pela literatura nasce nas rodas de leitura, encenações teatrais e histórias cheias de fantasia e vocabulário vivo.',
    bg: 'bg-[#FEFCE8]',
    color: 'text-[#B78103]',
  },
  {
    icon: '💖',
    tag: 'Socioemocional',
    title: 'Roda dos Sentimentos',
    desc: 'Momentos diários para aprender a reconhecer emoções, resolver conflitos com diálogo e cultivar a empatia e amizade.',
    bg: 'bg-[#F5EEFB]',
    color: 'text-kingdom-purple',
  },
];

export default function KingdomMethodology() {
  return (
    <section id="magia" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-lavender/30 text-kingdom-purple font-fredoka font-bold text-sm mb-3">
            <span>✨ Proposta Pedagógica</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            Como transformamos curiosidade em conhecimento duradouro
          </h2>
          <p className="font-nunito text-lg text-[#55697d] mt-2">
            Metodologias comprovadas que respeitam a infância e colocam o aluno como protagonista de suas próprias conquistas.
          </p>
        </motion.div>

        {/* 4 Cards da Metodologia com Ícones Gigantes e Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`toy-card p-7 ${m.bg} flex flex-col justify-between border-2 border-white`}
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl mb-4">
                  {m.icon}
                </div>
                <span className={`text-xs font-fredoka font-bold px-2.5 py-1 rounded-full bg-white shadow-sm ${m.color}`}>
                  {m.tag}
                </span>
                <h3 className="font-fredoka text-xl font-bold text-kingdom-navy mt-3 mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="font-nunito text-sm text-[#465E73] leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-bold text-[#6D8299]">
                <Sparkles className="w-3.5 h-3.5 text-kingdom-yellow" />
                <span>Educação com Amor</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
