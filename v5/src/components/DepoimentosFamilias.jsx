import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Calendar, Sparkles } from 'lucide-react';

export default function DepoimentosFamilias({ onOpenVisitModal }) {
  const testimonials = [
    {
      name: 'Camila & Rodrigo Mendes',
      role: 'Pais da Helena (Berçário • Integral Humanizado)',
      avatar: '👧',
      accentBg: 'bg-reinado-celeste-light text-reinado-celeste-dark',
      text: 'Voltar ao trabalho depois da licença-maternidade só foi tranquilo porque encontramos o Tempo Integral Humanizado aqui no Mariano Procópio. Cada profissional chama nossa filha pelo nome com um carinho único!',
      tag: 'Confiança desde os 4 meses',
    },
    {
      name: 'Vanessa & Lucas Barcellos',
      role: 'Pais do Theo (Maternal III • Manhã)',
      avatar: '👦',
      accentBg: 'bg-reinado-sol-light text-reinado-sol-dark',
      text: 'Com a Oficina de Mini-Chef na cozinha pedagógica e a Horta Comunitária, o Theo passou a comer frutas e legumes com alegria. E todos os dias chega em casa cantando músicas novas da Iniciação Bilíngue.',
      tag: 'Mini-Chef & Inglês Diário',
    },
    {
      name: 'Patrícia & Marcelo Zanetti',
      role: 'Pais do Davi (4º Ano • Ensino Fundamental I)',
      avatar: '🧑',
      accentBg: 'bg-reinado-limao-light text-reinado-limao-dark',
      text: 'Além da base acadêmica consistente do 1º ao 5º ano, o programa socioemocional "Líder em Mim" desenvolveu a autonomia, a empatia e a segurança do Davi para encarar qualquer desafio.',
      tag: 'Base Forte & Líder em Mim',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-reinado-ink font-fredoka font-medium text-xs sm:text-sm shadow-sticker-sm">
            <div className="flex items-center gap-0.5 text-reinado-sol">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-reinado-sol text-reinado-sol-dark" />
              ))}
            </div>
            <span className="ml-1">Nota 5.0 • Famílias do Mariano Procópio</span>
          </div>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            O que as nossas famílias{' '}
            <span className="text-reinado-tangerina">contam sobre nós</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Relatos reais de quem vive a tranquilidade do ensino afetivo no{' '}
            <strong>Colégio Reinado da Criança</strong>:
          </p>
        </div>

        {/* Grid de Cartões Sóbrios */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="sticker-card rounded-3xl p-6 sm:p-7 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shrink-0">
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="font-fredoka text-base sm:text-lg font-bold text-reinado-ink leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-reinado-slate mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="py-5 text-sm sm:text-base text-reinado-slate font-semibold leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span
                  className={`px-3 py-1 rounded-full font-fredoka font-medium text-xs ${item.accentBg}`}
                >
                  {item.tag}
                </span>
                <Heart className="w-4 h-4 fill-reinado-tangerina text-reinado-tangerina shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Chamada para Ação Sóbrio */}
        <div className="mt-12 sticker-card rounded-3xl p-6 sm:p-9 bg-reinado-sol-light/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-reinado-sol-dark">
              <Sparkles className="w-3.5 h-3.5 text-reinado-tangerina" /> Atendimento Individualizado
            </span>
            <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
              Agende uma visita guiada exclusiva no Mariano Procópio.
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-reinado-slate">
              Segunda a sexta-feira, das 08h30 às 11h00 e das 14h00 às 16h30 (horários de 30 em 30 minutos).
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenVisitModal()}
            className="btn-toy px-6 py-3.5 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm sm:text-base flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Visita pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
