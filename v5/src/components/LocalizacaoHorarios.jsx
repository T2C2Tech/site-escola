import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { CrownDoodle } from './PlayfulDoodles';
import { ScrollReveal } from './ScrollInteractive';

export default function LocalizacaoHorarios({ onOpenVisitModal }) {
  const morningSlots = ['08h30', '09h00', '09h30', '10h00', '10h30', '11h00'];
  const afternoonSlots = ['14h00', '14h30', '15h00', '15h30', '16h00', '16h30'];

  return (
    <section
      id="localizacao"
      className="py-16 lg:py-24 border-t border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-reinado-ink font-fredoka font-medium text-xs sm:text-sm shadow-sticker-sm">
            <Sparkles className="w-3.5 h-3.5 text-reinado-tangerina" />
            Atendimento Individual • Segunda a Sexta
          </span>

          <h2 className="mt-4 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
            Escolha um horário e venha{' '}
            <span className="text-reinado-celeste">conhecer nossa escola</span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Visitas guiadas individuais de <strong>30 em 30 minutos</strong> no bairro{' '}
            <strong>Mariano Procópio</strong>. Selecione uma janela abaixo para conversar pelo WhatsApp:
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* COLUNA ESQUERDA: Seletor de Horários Limpo */}
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="sticker-card rounded-3xl p-6 sm:p-8 bg-white flex flex-col justify-between gap-6 h-full">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-reinado-sol-light border border-amber-200 flex items-center justify-center">
                    <CrownDoodle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-reinado-slate block">
                      Agendamento Rápido
                    </span>
                    <h3 className="font-fredoka text-xl sm:text-2xl font-bold text-reinado-ink">
                      Selecione seu horário de preferência:
                    </h3>
                  </div>
                </div>

                {/* Manhã */}
                <div className="bg-reinado-celeste-light/50 p-4 sm:p-5 rounded-2xl border border-sky-200/70">
                  <p className="text-xs font-bold uppercase tracking-wider text-reinado-ink mb-3 flex items-center gap-1.5">
                    <span>☀️</span> Manhã — Segunda a Sexta (08h30 às 11h00):
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {morningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() =>
                          onOpenVisitModal({
                            turno: 'Manhã',
                            horarioVisita: `Manhã às ${slot}`,
                          })
                        }
                        className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-tangerina hover:text-white text-reinado-ink font-fredoka font-semibold text-xs sm:text-sm border border-slate-200 shadow-sm transition-colors cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tarde */}
                <div className="bg-reinado-limao-light/50 p-4 sm:p-5 rounded-2xl border border-emerald-200/70">
                  <p className="text-xs font-bold uppercase tracking-wider text-reinado-ink mb-3 flex items-center gap-1.5">
                    <span>🌤️</span> Tarde — Segunda a Sexta (14h00 às 16h30):
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {afternoonSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() =>
                          onOpenVisitModal({
                            turno: 'Tarde',
                            horarioVisita: `Tarde às ${slot}`,
                          })
                        }
                        className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-celeste hover:text-white text-reinado-ink font-fredoka font-semibold text-xs sm:text-sm border border-slate-200 shadow-sm transition-colors cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mapa Embutido */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 bg-slate-50">
                <iframe
                  title="Mapa Colégio Reinado da Criança - Mariano Procópio"
                  src="https://www.google.com/maps?q=Mariano+Procopio,+Juiz+de+Fora+-+MG&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* COLUNA DIREITA: Card de Contato Sóbrio */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-5">
            <div className="sticker-card rounded-3xl p-7 sm:p-8 bg-reinado-celeste-light/70 flex flex-col justify-between gap-6 h-full">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-white text-reinado-celeste-dark border border-sky-200 font-fredoka font-semibold text-xs">
                  Portas Abertas para Sua Família
                </span>

                <h3 className="font-fredoka text-2xl sm:text-3xl font-bold leading-snug text-reinado-ink">
                  Venha tomar um café conosco no Mariano Procópio!
                </h3>
                <p className="text-sm text-reinado-slate font-semibold">
                  Nossa equipe pedagógica terá alegria em apresentar cada espaço do Berçário ao 5º Ano.
                </p>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <span className="w-11 h-11 rounded-xl bg-reinado-tangerina-light text-reinado-tangerina flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-reinado-slate">
                      WhatsApp da Secretaria
                    </p>
                    <p className="font-fredoka text-xl font-bold text-reinado-ink">
                      (32) 99999-1234
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <span className="w-11 h-11 rounded-xl bg-reinado-limao-light text-reinado-limao flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-reinado-slate">
                      Janelas de Visita (Seg a Sex)
                    </p>
                    <p className="font-fredoka text-sm sm:text-base font-bold text-reinado-ink">
                      08h30 às 11h00 e 14h00 às 16h30
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80">
                  <span className="w-11 h-11 rounded-xl bg-reinado-celeste-light text-reinado-celeste flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-reinado-slate">
                      Localização
                    </p>
                    <p className="font-fredoka text-sm sm:text-base font-bold text-reinado-ink leading-snug">
                      Bairro Mariano Procópio • Juiz de Fora - MG
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="btn-toy w-full py-3.5 px-6 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-base flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com a Secretaria no WhatsApp</span>
                </button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mariano+Procopio+Juiz+de+Fora+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-reinado-ink font-fredoka font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-reinado-celeste" />
                  <span>Abrir Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
