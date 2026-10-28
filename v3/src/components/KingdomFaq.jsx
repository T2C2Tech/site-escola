import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'Como funciona o período de adaptação no Berçário e na Educação Infantil?',
    a: 'A adaptação é totalmente individualizada e respeita o tempo emocional da criança. A presença de um responsável de referência é calorosamente encorajada nos primeiros dias, com horários progressivos até a construção de um vínculo seguro com as educadoras.',
  },
  {
    q: 'Todas as refeições são preparadas na própria escola?',
    a: 'Sim! Nosso cardápio é 100% elaborado por nutricionista especializada e preparado diariamente em nossa cozinha com alimentos orgânicos e frescos. Acolhemos com rigor qualquer restrição alimentar, intolerância ou alergia.',
  },
  {
    q: 'Quais são os horários e como funciona a tolerância de entrada/saída?',
    a: 'Turno Manhã: 07h30 às 11h45 | Turno Tarde: 13h00 às 17h15 | Turno Integral: das 07h00 às 18h30. Temos tolerância planejada para acolher as necessidades reais da rotina familiar e trânsito.',
  },
  {
    q: 'Quais atividades extras estão incluídas no Turno Integral?',
    a: 'No contraturno oferecemos oficinas de iniciação musical, judô, ballet infantil, ateliê de arte criativa, horticultura prática e acompanhamento amoroso para os deveres de casa.',
  },
];

export default function KingdomFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-sun/30 text-[#755700] font-fredoka font-bold text-sm mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            Dúvidas mais comuns dos pais
          </h2>
        </motion.div>

        {/* Acordeão Interativo Estilo Toy */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`toy-card p-6 border-2 transition-all cursor-pointer ${
                  isOpen ? 'border-kingdom-coral bg-[#FFF8F7] shadow-lg' : 'border-kingdom-sky/20 bg-white'
                }`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-fredoka text-lg sm:text-xl font-bold text-kingdom-navy flex items-center gap-2">
                    <span className="text-xl">🎈</span>
                    <span>{faq.q}</span>
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? 'bg-kingdom-coral text-white' : 'bg-kingdom-sky/15 text-kingdom-blue'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-kingdom-coral/15 font-nunito text-base text-[#465E73] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
