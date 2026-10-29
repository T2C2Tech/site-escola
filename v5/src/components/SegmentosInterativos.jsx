import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Sun,
} from 'lucide-react';
import { ScrollReveal } from './ScrollInteractive';

export default function SegmentosInterativos({ onOpenVisitModal }) {
  const [selectedSegment, setSelectedSegment] = useState('infantil');

  const segmentsData = {
    infantil: {
      badge: 'Educação Infantil • 4 meses a 4 anos',
      title: 'Do Berçário ao Maternal III: Descobertas com Colinho e Autonomia',
      subtitle:
        'Turnos da Manhã, Tarde e Tempo Integral Humanizado. Estímulos sensoriais, psicomotricidade, musicalização e muito afeto em cada conquista.',
      shifts: ['Manhã', 'Tarde', 'Integral Humanizado'],
      bannerBg: 'bg-reinado-celeste-light/60',
      cards: [
        {
          emoji: '🍼',
          name: 'Berçário Afetivo',
          age: 'A partir de 4 meses',
          shifts: 'Manhã, Tarde e Integral',
          headerColor: 'bg-reinado-celeste-light text-reinado-ink',
          desc: 'Ambiente tranquilo, higienizado e acolhedor, com estímulos sensoriais, psicomotricidade para bebês, solário e acompanhamento rigoroso da rotina alimentar e de sono.',
          items: [
            'Lactário exclusivo e nutrição acompanhada',
            'Estímulo sensorial, musical e psicomotor diário',
            'Agenda e relatório completo do dia para a família',
          ],
          presetSerie: 'Berçário (a partir de 4 meses)',
          presetTurno: 'Integral Humanizado',
        },
        {
          emoji: '🧸',
          name: 'Maternal I e II',
          age: '2 a 3 anos',
          shifts: 'Manhã, Tarde e Integral',
          headerColor: 'bg-reinado-sol-light text-reinado-ink',
          desc: 'Fase de expansão da fala, autonomia, desfralde respeitoso e primeiras amizades através do brincar intencional e contato diário com a natureza.',
          items: [
            'Iniciação Bilíngue lúdica todos os dias',
            'Oficina de Mini-Chef e Horta Comunitária',
            'Brinquedoteca e circuitos de Psicomotricidade',
          ],
          presetSerie: 'Maternal I (2 anos)',
          presetTurno: 'Integral Humanizado',
        },
        {
          emoji: '🎨',
          name: 'Maternal III',
          age: '4 anos',
          shifts: 'Manhã, Tarde e Integral',
          headerColor: 'bg-reinado-limao-light text-reinado-ink',
          desc: 'Desenvolvimento da curiosidade científica, coordenação motora fina, histórias encantadas e inteligência socioemocional com o programa Líder em Mim.',
          items: [
            'Preparação afetiva e lúdica para os próximos passos',
            'Educação Socioemocional (Líder em Mim)',
            'Imersão diária em Inglês com jogos e músicas',
          ],
          presetSerie: 'Maternal III (4 anos)',
          presetTurno: 'Manhã',
        },
      ],
    },
    fundamental: {
      badge: 'Ensino Fundamental I • 6 a 10 anos',
      title: 'Do 1º ao 5º Ano: Base Acadêmica Sólida e Protagonismo Infantil',
      subtitle:
        'Turnos da Manhã e Tarde. Alfabetização encantadora, raciocínio lógico, projetos científicos e valores humanos para a vida toda.',
      shifts: ['Manhã', 'Tarde'],
      bannerBg: 'bg-reinado-limao-light/60',
      cards: [
        {
          emoji: '📖',
          name: '1º e 2º Ano (Alfabetização)',
          age: '6 a 7 anos',
          shifts: 'Turnos: Manhã e Tarde',
          headerColor: 'bg-reinado-tangerina-light text-reinado-ink',
          desc: 'Transição suave e acolhedora para o Fundamental I. Leitura, escrita e raciocínio matemático construídos com significado e encantamento.',
          items: [
            'Acompanhamento individualizado na leitura e escrita',
            'Inglês diário integrado à rotina escolar',
            'Vivências na Horta Comunitária e Cozinha Pedagógica',
          ],
          presetSerie: '1º Ano Fundamental I (6 anos)',
          presetTurno: 'Manhã',
        },
        {
          emoji: '🔬',
          name: '3º e 4º Ano (Descobertas)',
          age: '8 a 9 anos',
          shifts: 'Turnos: Manhã e Tarde',
          headerColor: 'bg-reinado-celeste-light text-reinado-ink',
          desc: 'Aprofundamento na interpretação textual, resolução de desafios, ciências práticas e fortalecimento de hábitos de estudo autônomos.',
          items: [
            'Metodologia ativa em salas temáticas',
            'Programa Socioemocional "Líder em Mim"',
            'Projetos práticos de culinária e sustentabilidade',
          ],
          presetSerie: '3º Ano Fundamental I (8 anos)',
          presetTurno: 'Manhã',
        },
        {
          emoji: '🚀',
          name: '5º Ano (Liderança)',
          age: '10 anos',
          shifts: 'Turnos: Manhã e Tarde',
          headerColor: 'bg-reinado-uva-light text-reinado-ink',
          desc: 'Consolidação dos anos iniciais com excelência acadêmica, pensamento crítico, liderança positiva e segurança emocional.',
          items: [
            'Base sólida em Português, Matemática e Ciências',
            'Protagonismo estudantil e projetos em equipe',
            'Atenção próxima onde cada aluno é chamado pelo nome',
          ],
          presetSerie: '5º Ano Fundamental I (10 anos)',
          presetTurno: 'Manhã',
        },
      ],
    },
  };

  const activeData = segmentsData[selectedSegment];

  return (
    <section
      id="segmentos"
      className="py-16 lg:py-24 bg-white/80 border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho com Revelação no Scroll */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-reinado-sol-light border border-amber-200 text-reinado-sol-dark font-fredoka font-semibold text-xs sm:text-sm">
            <Sparkles className="w-3.5 h-3.5 text-reinado-tangerina" />
            Turmas, Idades e Turnos
          </span>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Acompanhamos cada fase no{' '}
            <span className="text-reinado-celeste">Reinado da Criança</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Selecione abaixo entre <strong>Educação Infantil</strong> e{' '}
            <strong>Ensino Fundamental I</strong>:
          </p>
        </ScrollReveal>

        {/* Seletores de Segmento */}
        <ScrollReveal
          direction="up"
          delay={0.08}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto mb-10"
        >
          <button
            type="button"
            onClick={() => setSelectedSegment('infantil')}
            className={`flex-1 flex items-center justify-center gap-3.5 py-4 px-6 rounded-2xl font-fredoka font-semibold text-base sm:text-lg transition-all cursor-pointer border ${
              selectedSegment === 'infantil'
                ? 'bg-reinado-celeste text-white border-reinado-celeste shadow-sticker'
                : 'bg-white text-reinado-ink border-slate-200 hover:bg-reinado-celeste-light/50'
            }`}
          >
            <span className="w-11 h-11 rounded-xl bg-white/95 border border-slate-200/60 flex items-center justify-center text-xl shrink-0">
              👶
            </span>
            <div className="text-left">
              <div className="leading-none">Educação Infantil</div>
              <div
                className={`text-xs font-nunito font-semibold mt-1 ${
                  selectedSegment === 'infantil' ? 'text-white/90' : 'text-reinado-slate'
                }`}
              >
                Berçário (4 meses) ao Maternal III (4 anos)
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSegment('fundamental')}
            className={`flex-1 flex items-center justify-center gap-3.5 py-4 px-6 rounded-2xl font-fredoka font-semibold text-base sm:text-lg transition-all cursor-pointer border ${
              selectedSegment === 'fundamental'
                ? 'bg-reinado-limao text-white border-reinado-limao shadow-sticker'
                : 'bg-white text-reinado-ink border-slate-200 hover:bg-reinado-limao-light/50'
            }`}
          >
            <span className="w-11 h-11 rounded-xl bg-white/95 border border-slate-200/60 flex items-center justify-center text-xl shrink-0">
              🎒
            </span>
            <div className="text-left">
              <div className="leading-none">Ensino Fundamental I</div>
              <div
                className={`text-xs font-nunito font-semibold mt-1 ${
                  selectedSegment === 'fundamental' ? 'text-white/90' : 'text-reinado-slate'
                }`}
              >
                Do 1º ao 5º Ano (6 a 10 anos)
              </div>
            </div>
          </button>
        </ScrollReveal>

        {/* Conteúdo das Turmas */}
        <motion.div
          key={selectedSegment}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ScrollReveal direction="up" delay={0.12}>
            <div
              className={`sticker-card rounded-3xl p-6 sm:p-8 mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${activeData.bannerBg}`}
            >
              <div className="space-y-1.5 max-w-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-reinado-ink font-fredoka font-medium text-xs">
                  {activeData.badge}
                </span>
                <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                  {activeData.title}
                </h3>
                <p className="text-sm sm:text-base text-reinado-slate font-semibold">
                  {activeData.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="text-xs font-bold uppercase text-reinado-slate mr-1 flex items-center gap-1">
                  <Clock className="w-4 h-4 text-reinado-tangerina" /> Turnos:
                </span>
                {activeData.shifts.map((shift) => (
                  <span
                    key={shift}
                    className="px-3.5 py-1.5 rounded-full bg-white text-reinado-ink font-fredoka font-semibold text-xs sm:text-sm flex items-center gap-1.5 border border-slate-200"
                  >
                    <Sun className="w-3.5 h-3.5 text-reinado-sol-dark" />
                    {shift}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Grid de Cards das Turmas com Entrada Escalonada */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {activeData.cards.map((card, idx) => (
              <ScrollReveal key={card.name} direction="up" delay={0.14 + idx * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="sticker-card rounded-3xl overflow-hidden flex flex-col justify-between bg-white h-full"
                >
                  <div>
                    <div
                      className={`${card.headerColor} p-5 border-b border-slate-100 flex items-center gap-3.5`}
                    >
                      <span className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-2xl shadow-sm shrink-0">
                        {card.emoji}
                      </span>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-reinado-slate block">
                          {card.age}
                        </span>
                        <h4 className="font-fredoka text-xl font-bold text-reinado-ink leading-tight">
                          {card.name}
                        </h4>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-reinado-slate mb-4">
                        <Clock className="w-3.5 h-3.5 text-reinado-tangerina" />
                        <span>{card.shifts}</span>
                      </div>

                      <p className="text-sm text-reinado-slate font-semibold leading-relaxed mb-5">
                        {card.desc}
                      </p>

                      <ul className="space-y-2.5">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-reinado-ink"
                          >
                            <CheckCircle2 className="w-4 h-4 text-reinado-limao shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() =>
                        onOpenVisitModal({
                          serie: card.presetSerie,
                          turno: card.presetTurno,
                        })
                      }
                      className="btn-toy w-full py-3 px-4 rounded-2xl bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar Visita ({card.name})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
