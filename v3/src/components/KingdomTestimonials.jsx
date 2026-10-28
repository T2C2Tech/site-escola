import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    nome: 'Mariana & Bruno Castro',
    filho: 'Pais do Henrique (Berçário II)',
    stars: 5,
    tag: 'Berçário com Afeto',
    avatar: '👶',
    bg: 'bg-[#FFEBE8]',
    border: 'border-kingdom-coral/40',
    texto: 'Deixar nosso bebê de 6 meses dava um aperto no coração, mas a equipe do Reinado foi de uma sensibilidade indescritível. Recebemos fotos e atualizações o dia todo. O Henrique sorri quando vê a tia na entrada!',
  },
  {
    nome: 'Dra. Vanessa Albuquerque',
    filho: 'Mãe da Alice (Maternal II)',
    stars: 5,
    tag: 'Educação Infantil & Horta',
    avatar: '👧',
    bg: 'bg-[#FFF9E6]',
    border: 'border-kingdom-yellow/40',
    texto: 'O espaço ao ar livre com terra, árvores e horta é algo raro de encontrar hoje em dia. A Alice aprendeu a provar legumes que rejeitava em casa e adora as aulinhas de música e inglês.',
  },
  {
    nome: 'Lucas e Patrícia Mendes',
    filho: 'Pais do Theo (3º Ano Fundamental)',
    stars: 5,
    tag: 'Fundamental & Cidadania',
    avatar: '🧒',
    bg: 'bg-[#EBF9F1]',
    border: 'border-kingdom-green/40',
    texto: 'A transição para o Fundamental foi leve e acolhedora. O Theo é muito curioso e a escola estimula o raciocínio dele com projetos práticos, sem aquela pressão mecânica tradicional. Recomendo de olhos fechados!',
  },
];

export default function KingdomTestimonials() {
  return (
    <section id="reino-dos-pais" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-sun/30 text-[#755700] font-fredoka font-bold text-sm mb-3">
            <span>❤️ Vozes das Nossas Famílias</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
            A tranquilidade de quem confia no Reinado da Criança
          </h2>
          <p className="font-nunito text-lg text-[#55697d] mt-2">
            O carinho compartilhado diariamente por mães, pais e avós que vivem essa parceria conosco.
          </p>
        </motion.div>

        {/* 3 Cards de Depoimento Flutuantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`toy-card p-8 ${r.bg} border-2 ${r.border} flex flex-col justify-between`}
            >
              <div>
                {/* 5 Estrelas Douradas */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#F1C40F]">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-fredoka font-bold px-2.5 py-1 rounded-full bg-white shadow-sm text-kingdom-navy">
                    {r.tag}
                  </span>
                </div>

                <p className="font-nunito text-base text-[#384F66] italic leading-relaxed font-medium">
                  "{r.texto}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <h4 className="font-fredoka font-bold text-base text-kingdom-navy">{r.nome}</h4>
                  <p className="font-nunito text-xs text-[#2ECC71] font-extrabold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{r.filho}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
