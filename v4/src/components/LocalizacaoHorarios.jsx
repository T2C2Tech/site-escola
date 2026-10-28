import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  Sparkles,
  CheckCircle2,
  Navigation,
} from 'lucide-react';

export default function LocalizacaoHorarios({ onOpenVisitModal }) {
  const morningSlots = ['08h30', '09h00', '09h30', '10h00', '10h30', '11h00'];
  const afternoonSlots = ['14h00', '14h30', '15h00', '15h30', '16h00', '16h30'];

  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Coluna Esquerda: Horários Exclusivos de Visita (30 em 30 min) */}
          <div className="lg:col-span-6 rounded-[2.25rem] bg-gradient-to-br from-reinado-celeste-light via-white to-reinado-sol-light p-6 sm:p-10 border-2 border-reinado-celeste/30 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-reinado-tangerina text-white font-fredoka font-bold text-xs uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Atendimento Individualizado • De 30 em 30 min
              </span>

              <h2 className="mt-3 font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                Escolha seu horário exclusivo de visita no Mariano Procópio
              </h2>

              <p className="mt-2.5 text-sm sm:text-base text-reinado-slate font-semibold leading-relaxed">
                De <strong>segunda a sexta-feira</strong>, reservamos janelas de <strong>30 minutos</strong> exclusivas para que sua família conheça cada espaço com calma e converse com a nossa coordenação.
              </p>

              {/* Slots da Manhã */}
              <div className="mt-6">
                <p className="text-xs font-extrabold uppercase tracking-wider text-reinado-celeste-dark mb-2.5">
                  ☀️ Manhã (08h30 às 11h00) — Clique em um horário para pré-reservar:
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
                      className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-celeste hover:text-white text-reinado-ink font-fredoka font-bold text-xs sm:text-sm border-2 border-reinado-celeste/30 transition-all shadow-sm cursor-pointer"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slots da Tarde */}
              <div className="mt-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-reinado-tangerina-dark mb-2.5">
                  🌤️ Tarde (14h00 às 16h30) — Clique em um horário para pré-reservar:
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
                      className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-tangerina hover:text-white text-reinado-ink font-fredoka font-bold text-xs sm:text-sm border-2 border-reinado-tangerina/30 transition-all shadow-sm cursor-pointer"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-reinado-celeste/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-reinado-limao-dark shrink-0" />
                <div>
                  <p className="text-xs font-bold text-reinado-slate">WhatsApp da Secretaria:</p>
                  <p className="font-fredoka font-bold text-base text-reinado-ink">
                    (32) 99999-1234
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-tangerina w-full sm:w-auto px-7 py-3.5 rounded-full font-fredoka font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Abrir Formulário de Visita</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Mapa e Localização no Bairro Mariano Procópio */}
          <div className="lg:col-span-6 rounded-[2.25rem] bg-white p-6 sm:p-8 border-2 border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-reinado-limao-light text-reinado-limao-dark font-fredoka font-bold text-xs uppercase">
                  <MapPin className="w-3.5 h-3.5" /> Localização Privilegiada
                </span>
                <span className="text-xs font-extrabold text-reinado-slate">
                  Juiz de Fora • Minas Gerais
                </span>
              </div>

              <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-reinado-ink">
                No coração do bairro Mariano Procópio
              </h3>
              <p className="mt-2 text-sm sm:text-base text-reinado-slate font-semibold">
                Fácil acesso para embarque e desembarque seguro das crianças, pertinho do Museu Mariano Procópio e das principais vias da região.
              </p>

              <div className="mt-5 rounded-2xl overflow-hidden border-2 border-reinado-celeste/25 aspect-[16/10] bg-slate-100">
                <iframe
                  title="Mapa Colégio Reinado da Criança - Mariano Procópio, Juiz de Fora"
                  src="https://www.google.com/maps?q=Mariano+Procopio,+Juiz+de+Fora+-+MG&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-reinado-celeste-light/50">
                <CheckCircle2 className="w-5 h-5 text-reinado-celeste shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-reinado-ink">
                  Bairro Mariano Procópio • Juiz de Fora/MG
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mariano+Procopio+Juiz+de+Fora+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-reinado-ink text-white font-fredoka font-bold text-xs sm:text-sm hover:bg-reinado-celeste transition-colors"
              >
                <Navigation className="w-4 h-4 text-reinado-sol" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

