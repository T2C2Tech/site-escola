import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, GraduationCap } from 'lucide-react';

const metricas = [
  {
    icon: Award,
    valor: '+15 anos',
    titulo: 'Formando gerações',
    desc: 'Tradição, afeto e excelência pedagógica em Juiz de Fora',
    corIcon: 'bg-[#fff8ea] text-[#755700]',
  },
  {
    icon: Users,
    valor: 'Turmas Reduzidas',
    titulo: 'Acolhimento singular',
    desc: 'Acompanhamento próximo e individualizado para cada criança',
    corIcon: 'bg-[#edf4ff] text-[#1E5A87]',
  },
  {
    icon: GraduationCap,
    valor: 'Maternal 1 ao 5º Ano',
    titulo: 'Jornada completa',
    desc: 'Da Educação Infantil ao Fundamental I com horário parcial ou integral',
    corIcon: 'bg-[#EAF6EE] text-[#1c6342]',
  },
];

export default function BarraAutoridade() {
  return (
    <section aria-label="Indicadores de Confiança" className="relative z-20 -mt-10 pb-8 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-slate-200/80 rounded-[2rem] bg-white p-6 sm:p-7 shadow-xl shadow-[#1E5A87]/10 border border-slate-100"
        >
          {metricas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 md:px-6 first:md:pl-2 last:md:pr-2"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.corIcon}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-quicksand text-lg font-black text-[#2C3E50] leading-tight">
                    {item.valor}
                  </p>
                  <p className="font-quicksand text-xs font-bold text-[#1E5A87] mt-0.5">
                    {item.titulo}
                  </p>
                  <p className="font-nunito text-xs text-[#5b6b7a] mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
