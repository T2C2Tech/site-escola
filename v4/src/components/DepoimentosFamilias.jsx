import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Quote,
  Heart,
  ChevronDown,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function DepoimentosFamilias({ onOpenVisitModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const testimonials = [
    {
      name: 'Camila & Rodrigo Mendes',
      role: 'Pais da Helena (Berçário • Turno Integral)',
      text: 'Voltar ao trabalho depois da licença-maternidade me dava um aperto no peito, até conhecer o Reinado da Criança aqui no Mariano Procópio. Desde o primeiro dia chamaram a Helena pelo nome com um carinho único. O tempo integral humanizado deles é uma bênção!',
      badge: 'Berçário • Integral Humanizado',
      accent: 'border-t-8 border-t-reinado-celeste',
    },
    {
      name: 'Juliana Ferreira',
      role: 'Mãe do Theo (Maternal III • Manhã)',
      text: 'O Theo tinha muita seletividade alimentar. Com a Oficina de Mini-Chef e a Horta Comunitária da escola, ele passou a pedir salada e frutas em casa! Além disso, já canta músicas inteiras em inglês todos os dias.',
      badge: 'Maternal III • Mini-Chef & Bilíngue',
      accent: 'border-t-8 border-t-reinado-limao',
    },
    {
      name: 'Marcelo & Patrícia Souza',
      role: 'Pais do Davi (3º Ano • Ensino Fundamental I)',
      text: 'Estávamos buscando no Mariano Procópio uma escola forte no Fundamental I mas que não tratasse as crianças de forma fria. O programa socioemocional Líder em Mim transformou a maturidade e a confiança do Davi nos estudos.',
      badge: '3º Ano Fundamental I',
      accent: 'border-t-8 border-t-reinado-tangerina',
    },
  ];

  const faqs = [
    {
      q: 'Como funciona o agendamento de visitas pelo WhatsApp?',
      a: 'Para garantirmos atenção 100% exclusiva à sua família, realizamos visitas guiadas de segunda a sexta-feira, das 08h30 às 11h00 e das 14h00 às 16h30, com intervalos de 30 minutos entre cada família. Basta clicar em "Agendar Visita", preencher o mini-formulário rápido e nossa secretária já recebe seus dados no WhatsApp (32) 99999-1234.',
    },
    {
      q: 'A partir de qual idade o Berçário recebe os bebês e quais são os turnos?',
      a: 'Na Educação Infantil atendemos do Berçário (a partir de 4 meses de idade) até o Maternal III (4 anos), com opções nos turnos da Manhã, Tarde e o nosso Tempo Integral Humanizado. Já no Ensino Fundamental I (1º ao 5º ano, de 6 a 10 anos), atendemos nos turnos da Manhã e Tarde.',
    },
    {
      q: 'As oficinas de Inglês, Mini-Chef e Horta já fazem parte da proposta?',
      a: 'Sim! Nossa proposta de desenvolvimento integral une a Iniciação Bilíngue (imersão lúdica diária na língua inglesa), Oficina de Mini-Chef na cozinha pedagógica, Horta Comunitária, Psicomotricidade e Educação Socioemocional (Líder em Mim).',
    },
    {
      q: 'Como é feita a adaptação das crianças pequenas?',
      a: 'Nossa adaptação é afetiva, gradual e personalizada. Respeitamos o tempo emocional de cada bebê e criança, mantendo os pais próximos e informados pelo WhatsApp com fotos e relatos carinhosos.',
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-16 lg:py-24 bg-gradient-to-b from-reinado-sol-light/50 via-white to-reinado-celeste-light/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-reinado-tangerina text-reinado-tangerina" /> Famílias do Mariano Procópio
          </span>
          <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink">
            Quem conhece o nosso Reinado,{' '}
            <span className="text-reinado-tangerina">confia de olhos fechados</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            A tranquilidade de deixar quem você mais ama em um lugar seguro, vibrante e humano.
          </p>
        </div>

        {/* Cards de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className={`card-vibrante p-6 sm:p-7 flex flex-col justify-between ${item.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-reinado-sol">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-reinado-sol text-reinado-sol" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-reinado-celeste/30" />
                </div>

                <p className="text-sm sm:text-base text-reinado-ink font-semibold italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-reinado-celeste-light text-reinado-celeste-dark text-[11px] font-extrabold mb-1.5">
                  {item.badge}
                </span>
                <p className="font-fredoka font-bold text-base text-reinado-ink">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-reinado-slate">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Perguntas Frequentes (FAQ) */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.25rem] p-6 sm:p-10 shadow-xl border-2 border-reinado-celeste/20">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-reinado-celeste-dark">
              <Sparkles className="w-4 h-4" /> Tire Suas Dúvidas
            </span>
            <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink mt-1">
              Perguntas Frequentes dos Pais
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border-2 transition-colors ${
                    isOpen
                      ? 'border-reinado-celeste bg-reinado-celeste-light/30'
                      : 'border-slate-200/80 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-fredoka font-bold text-base sm:text-lg text-reinado-ink cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-reinado-celeste shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm sm:text-base text-reinado-slate font-semibold leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-extrabold text-reinado-ink text-center sm:text-left">
              Quer conversar diretamente com a nossa Secretaria de Matrículas?
            </p>
            <button
              type="button"
              onClick={() => onOpenVisitModal()}
              className="btn-tangerina px-6 py-3.5 rounded-full font-fredoka font-bold text-sm sm:text-base flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Minha Visita Agora</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

