import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Baby,
  BookOpen,
  Clock,
  Calendar,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Sun,
} from 'lucide-react';

export default function SegmentosInterativos({ onOpenVisitModal }) {
  const [selectedSegment, setSelectedSegment] = useState('infantil');

  const segmentsData = {
    infantil: {
      badge: 'Educação Infantil • 4 meses a 4 anos',
      title: 'Do Berçário ao Maternal III: Descobertas com Afeto e Segurança',
      subtitle:
        'Atendimento nos turnos da Manhã, Tarde e Tempo Integral Humanizado. Estímulos sensoriais, autonomia, socialização e muito carinho em cada conquista.',
      shifts: ['Manhã', 'Tarde', 'Integral Humanizado'],
      accentColor: 'border-reinado-celeste',
      headerBg: 'bg-reinado-celeste',
      cards: [
        {
          name: 'Berçário Afetivo',
          age: 'A partir de 4 meses',
          shifts: 'Manhã, Tarde e Integral',
          color: 'border-t-8 border-t-reinado-celeste',
          badgeBg: 'bg-reinado-celeste-light text-reinado-celeste-dark',
          desc: 'Ambiente tranquilo, higienizado e acolhedor, com estímulos sensoriais, psicomotricidade para bebês, solário e acompanhamento rigoroso da rotina alimentar e de sono.',
          items: [
            'Lactário exclusivo e nutrição acompanhada',
            'Estímulo sensorial, musical e psicomotor diário',
            'Relatório completo do dia para a família',
          ],
          presetSerie: 'Berçário (a partir de 4 meses)',
          presetTurno: 'Integral Humanizado',
        },
        {
          name: 'Maternal I e II',
          age: '2 a 3 anos',
          shifts: 'Manhã, Tarde e Integral',
          color: 'border-t-8 border-t-reinado-sol',
          badgeBg: 'bg-reinado-sol-light text-reinado-sol-dark',
          desc: 'Fase de expansão da linguagem, autonomia, desfralde respeitoso e primeiras amizades através do brincar intencional e contato com a natureza.',
          items: [
            'Iniciação Bilíngue lúdica todos os dias',
            'Oficina de Mini-Chef e Horta Comunitária',
            'Brinquedoteca e circuitos de Psicomotricidade',
          ],
          presetSerie: 'Maternal I ou II (2 a 3 anos)',
          presetTurno: 'Integral Humanizado',
        },
        {
          name: 'Maternal III & Pré-Escola',
          age: '4 a 5 anos',
          shifts: 'Manhã, Tarde e Integral',
          color: 'border-t-8 border-t-reinado-limao',
          badgeBg: 'bg-reinado-limao-light text-reinado-limao-dark',
          desc: 'Desenvolvimento da curiosidade científica, coordenação motora fina, letramento lúdico e inteligência socioemocional com o programa Líder em Mim.',
          items: [
            'Preparação afetiva e segura para o Fundamental I',
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
      title: 'Do 1º ao 5º Ano: Base Acadêmica Forte e Liderança Socioemocional',
      subtitle:
        'Atendimento nos turnos da Manhã e Tarde. Alfabetização encantadora, raciocínio lógico, protagonismo estudantil e valores humanos para a vida toda.',
      shifts: ['Manhã', 'Tarde'],
      accentColor: 'border-reinado-limao',
      headerBg: 'bg-reinado-limao',
      cards: [
        {
          name: '1º e 2º Ano (Ciclo de Alfabetização)',
          age: '6 a 7 anos',
          shifts: 'Turnos: Manhã e Tarde',
          color: 'border-t-8 border-t-reinado-tangerina',
          badgeBg: 'bg-reinado-tangerina-light text-reinado-tangerina-dark',
          desc: 'Transição suave da Educação Infantil para o Fundamental I. Leitura, escrita e alfabetização matemática construídas com significado e encantamento.',
          items: [
            'Acompanhamento próximo na leitura e escrita',
            'Inglês diário integrado à rotina escolar',
            'Projetos na Horta Comunitária e Cozinha Pedagógica',
          ],
          presetSerie: 'Ensino Fundamental I - 1º ou 2º Ano',
          presetTurno: 'Manhã',
        },
        {
          name: '3º e 4º Ano (Consolidação & Pesquisa)',
          age: '8 a 9 anos',
          shifts: 'Turnos: Manhã e Tarde',
          color: 'border-t-8 border-t-reinado-celeste',
          badgeBg: 'bg-reinado-celeste-light text-reinado-celeste-dark',
          desc: 'Aprofundamento na interpretação textual, resolução de problemas, ciências experimentais e fortalecimento de hábitos de estudo autônomos.',
          items: [
            'Metodologia ativa em salas temáticas',
            'Programa Socioemocional "Líder em Mim"',
            'Vivências práticas de culinária e sustentabilidade',
          ],
          presetSerie: 'Ensino Fundamental I - 3º ou 4º Ano',
          presetTurno: 'Manhã',
        },
        {
          name: '5º Ano (Protagonismo & Preparação)',
          age: '10 anos',
          shifts: 'Turnos: Manhã e Tarde',
          color: 'border-t-8 border-t-reinado-limao',
          badgeBg: 'bg-reinado-limao-light text-reinado-limao-dark',
          desc: 'Consolidação dos anos iniciais com excelência acadêmica, pensamento crítico, liderança positiva e segurança emocional para os próximos desafios.',
          items: [
            'Excelência em Língua Portuguesa, Matemática e Ciências',
            'Liderança estudantil e projetos colaborativos',
            'Atenção individualizada onde cada aluno é ouvido',
          ],
          presetSerie: 'Ensino Fundamental I - 5º Ano',
          presetTurno: 'Manhã',
        },
      ],
    },
  };

  const activeData = segmentsData[selectedSegment];

  return (
    <section
      id="segmentos"
      className="py-16 lg:py-24 bg-gradient-to-b from-reinado-celeste-light/50 via-white to-reinado-sol-light/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4" /> Turmas, Idades e Turnos
          </span>
          <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink">
            Escolha a fase do seu filho no{' '}
            <span className="text-reinado-celeste">Reinado da Criança</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Navegue pelos nossos segmentos e veja como cuidamos de cada etapa com ensino afetivo e projetos vibrantes.
          </p>
        </div>

        {/* Seletor Principal de Segmento (Educação Infantil vs Ensino Fundamental I) */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto mb-12">
          <button
            type="button"
            onClick={() => setSelectedSegment('infantil')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-fredoka font-bold text-base sm:text-lg transition-all cursor-pointer border-2 ${
              selectedSegment === 'infantil'
                ? 'bg-reinado-celeste text-white border-reinado-celeste shadow-tactile-celeste scale-[1.02]'
                : 'bg-white text-reinado-ink border-reinado-celeste/30 hover:bg-reinado-celeste-light'
            }`}
          >
            <Baby className="w-6 h-6" />
            <div className="text-left">
              <div className="leading-none">Educação Infantil</div>
              <div className={`text-xs font-nunito font-bold mt-1 ${selectedSegment === 'infantil' ? 'text-white/90' : 'text-reinado-slate'}`}>
                Berçário (4 meses) ao Maternal III (4 anos)
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedSegment('fundamental')}
            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-fredoka font-bold text-base sm:text-lg transition-all cursor-pointer border-2 ${
              selectedSegment === 'fundamental'
                ? 'bg-reinado-limao text-white border-reinado-limao shadow-tactile-limao scale-[1.02]'
                : 'bg-white text-reinado-ink border-reinado-limao/40 hover:bg-reinado-limao-light'
            }`}
          >
            <BookOpen className="w-6 h-6" />
            <div className="text-left">
              <div className="leading-none">Ensino Fundamental I</div>
              <div className={`text-xs font-nunito font-bold mt-1 ${selectedSegment === 'fundamental' ? 'text-white/95' : 'text-reinado-slate'}`}>
                Do 1º ao 5º Ano (6 a 10 anos)
              </div>
            </div>
          </button>
        </div>

        {/* Banner de Resumo do Segmento */}
        <motion.div
          key={selectedSegment}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-reinado-celeste/20 mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-reinado-sol/40 text-reinado-ink font-fredoka font-bold text-xs uppercase">
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
              <span className="text-xs font-extrabold uppercase text-reinado-slate mr-1 flex items-center gap-1">
                <Clock className="w-4 h-4 text-reinado-tangerina" /> Turnos disponíveis:
              </span>
              {activeData.shifts.map((shift) => (
                <span
                  key={shift}
                  className="px-3.5 py-1.5 rounded-full bg-reinado-ink text-white font-fredoka font-bold text-xs sm:text-sm flex items-center gap-1.5"
                >
                  <Sun className="w-3.5 h-3.5 text-reinado-sol" />
                  {shift}
                </span>
              ))}
            </div>
          </div>

          {/* Grid de Cards das Turmas */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {activeData.cards.map((card) => (
              <div
                key={card.name}
                className={`card-vibrante p-6 sm:p-7 flex flex-col justify-between ${card.color}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${card.badgeBg}`}>
                      {card.age}
                    </span>
                    <span className="text-xs font-bold text-reinado-slate flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-reinado-tangerina" />
                      {card.shifts}
                    </span>
                  </div>

                  <h4 className="font-fredoka text-2xl font-bold text-reinado-ink mb-2.5">
                    {card.name}
                  </h4>

                  <p className="text-sm text-reinado-slate font-semibold leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-bold text-reinado-ink">
                        <CheckCircle2 className="w-4 h-4 text-reinado-limao shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenVisitModal({
                      serie: card.presetSerie,
                      turno: card.presetTurno,
                    })
                  }
                  className="w-full py-3.5 px-4 rounded-2xl bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita para {card.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

