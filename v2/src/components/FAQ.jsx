import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Calendar } from 'lucide-react';
import WaveTransition from './WaveTransition';

const faqs = [
  {
    pergunta: 'Quais são os horários de funcionamento da escola?',
    resposta:
      'Oferecemos turnos da manhã e da tarde para Educação Infantil (Maternal 1 ao 2º Período) e Ensino Fundamental I (1º ao 5º Ano), além de opções com Horário Flexível para atender à rotina de trabalho das famílias.',
  },
  {
    pergunta: 'Como funciona o Período Integral e quais atividades estão incluídas?',
    resposta:
      'No Período Integral, a criança conta com acolhimento seguro, acompanhamento das tarefas escolares, cardápio balanceado com acompanhamento de nutricionista, descanso assistido, oficinas culinárias "mão na massa", vivências na Nossa Hortinha, cantinho da leitura e recreação orientada.',
  },
  {
    pergunta: 'Como funciona o material didático e as aulas diferenciadas?',
    resposta:
      'Trabalhamos com material didático atualizado e lúdico para cada faixa etária, além de aulas de Robótica, Inglês, Educação Socioemocional, Educação Financeira e Empreendedorismo integradas à rotina, com possibilidade de aulas extras de Capoeira e Balé.',
  },
  {
    pergunta: 'Como agendar uma visita para conhecer a escola e garantir vaga para 2027?',
    resposta:
      'Você pode agendar diretamente pelo botão "Agendar Visita 2027" no topo da página ou pelo formulário de visita nesta página. Nossa equipe pedagógica recebe sua família com hora marcada para apresentar toda a estrutura e tirar dúvidas.',
  },
];

export default function FAQ({ onOpenAgendamento }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative bg-white pt-24 pb-32 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#edf4ff] px-4 py-1 mb-3 shadow-sm">
            <HelpCircle className="h-4 w-4 text-[#2B90D9]" />
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#1E5A87]">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Perguntas das <span className="text-[#2B90D9]">Famílias</span>
          </h2>
          <p className="mt-3 font-nunito text-base text-[#4A5568]">
            Tudo o que você precisa saber sobre horários, integral, material didático e matrículas 2027.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all ${
                  isOpen
                    ? 'border-[#2B90D9]/40 bg-[#FAFCFE] shadow-md'
                    : 'border-slate-200/80 bg-white hover:border-[#2B90D9]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left rounded-3xl"
                >
                  <span className="font-quicksand text-base sm:text-lg font-black text-[#2C3E50]">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#2B90D9] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 font-nunito text-sm sm:text-base leading-relaxed text-[#4A5568]">
                        {item.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {onOpenAgendamento && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onOpenAgendamento}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#F6C343] hover:bg-[#e8b32d] px-8 py-4 font-quicksand text-base font-black text-[#2C3E50] shadow-lg shadow-[#F6C343]/30 transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Ainda tem dúvidas? Agende uma Visita 2027
            </button>
          </div>
        )}
      </div>

      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
