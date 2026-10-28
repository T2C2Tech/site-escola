import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { PEQUE_PATHS } from './PequeShape';

export default function LocalizacaoHorarios({ onOpenVisitModal }) {
  const morningSlots = ['08h30', '09h00', '09h30', '10h00', '10h30', '11h00'];
  const afternoonSlots = ['14h00', '14h30', '15h00', '15h30', '16h00', '16h30'];

  return (
    <section id="localizacao" className="py-12 lg:py-20 peque-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Estrutura Assimétrica idêntica ao Slide 15 de peque.com.br */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* COLUNA ESQUERDA: Logo + Trapézio Verde-Limão (#CED636) com Seletor de Horários de 30 em 30 min */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="./logo.svg"
                alt="Logo Colégio Reinado da Criança"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <div>
                <h2 className="font-fredoka text-2xl sm:text-4xl font-bold text-reinado-ink leading-none">
                  Reinado <span className="text-reinado-tangerina">da Criança</span>
                </h2>
                <p className="text-xs sm:text-sm font-extrabold text-reinado-slate mt-1">
                  Visitas Exclusivas de 30 em 30 minutos • Seg a Sex
                </p>
              </div>
            </div>

            <div className="relative flex-1 min-h-[430px] flex items-center">
              <svg
                viewBox="0 0 495 485"
                preserveAspectRatio="none"
                className="w-full h-full absolute inset-0 drop-shadow-[0_18px_28px_rgba(101,193,31,0.22)]"
              >
                <path d={PEQUE_PATHS.trapezoidRight} fill="#D4DC36" />
              </svg>

              <div className="relative z-10 p-6 sm:p-10 w-full space-y-5 text-reinado-ink">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-reinado-ink text-reinado-sol font-fredoka font-bold text-xs uppercase">
                    <Clock className="w-3.5 h-3.5" /> Escolha Sua Janela Exclusiva
                  </span>
                  <h3 className="font-fredoka text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                    Clique em um horário para falar conosco no WhatsApp:
                  </h3>
                </div>

                {/* Manhã */}
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-2">
                    ☀️ Segunda a Sexta — Manhã (08h30 às 11h00):
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
                        className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-tangerina hover:text-white text-reinado-ink font-fredoka font-bold text-xs sm:text-sm border-2 border-reinado-ink/15 shadow-sm transition-all cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tarde */}
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-2">
                    🌤️ Segunda a Sexta — Tarde (14h00 às 16h30):
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
                        className="py-2.5 px-2 rounded-xl bg-white hover:bg-reinado-celeste hover:text-white text-reinado-ink font-fredoka font-bold text-xs sm:text-sm border-2 border-reinado-ink/15 shadow-sm transition-all cursor-pointer"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mini Mapa Embutido */}
                <div className="rounded-2xl overflow-hidden border-2 border-reinado-ink/20 h-40 bg-white">
                  <iframe
                    title="Mapa Colégio Reinado da Criança - Mariano Procópio"
                    src="https://www.google.com/maps?q=Mariano+Procopio,+Juiz+de+Fora+-+MG&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: Trapézio Azul-Celeste (#0096FF) "Venha conhecer de perto a nossa escola" + Círculo Gigante WhatsApp */}
          <div className="lg:col-span-6 relative min-h-[480px] flex items-center">
            <svg
              viewBox="0 0 410 495"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_20px_35px_rgba(0,150,255,0.25)]"
            >
              <path d={PEQUE_PATHS.tallVertical} fill="#0096FF" />
            </svg>

            <div className="relative z-10 p-8 sm:p-12 w-full flex flex-col justify-between h-full text-white space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs uppercase mb-3">
                  Portas e Coração Abertos
                </span>
                <h2 className="font-fredoka text-3xl sm:text-5xl font-bold leading-[1.12] text-reinado-ink bg-white/95 p-5 rounded-3xl shadow-lg">
                  Venha conhecer de perto a nossa escola.
                </h2>
              </div>

              {/* Bloco Central com Contatos + Círculo Gigante Verde do WhatsApp (idêntico ao Slide 15 da Pequê) */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <span className="w-12 h-12 rounded-2xl bg-white text-reinado-ink flex items-center justify-center shadow-md shrink-0">
                      <Phone className="w-6 h-6 text-reinado-tangerina" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase text-white/80">
                        Secretaria de Matrículas
                      </p>
                      <p className="font-fredoka text-2xl font-bold text-white">
                        (32) 99999-1234
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="w-12 h-12 rounded-2xl bg-white text-reinado-ink flex items-center justify-center shadow-md shrink-0">
                      <Clock className="w-6 h-6 text-reinado-limao-dark" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase text-white/80">
                        Horário de Visitas (Seg a Sex)
                      </p>
                      <p className="font-fredoka text-base sm:text-lg font-bold text-white">
                        08h30 às 11h00 e 14h00 às 16h30
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <span className="w-12 h-12 rounded-2xl bg-white text-reinado-ink flex items-center justify-center shadow-md shrink-0">
                      <MapPin className="w-6 h-6 text-reinado-celeste" />
                    </span>
                    <div>
                      <p className="text-xs font-extrabold uppercase text-white/80">
                        Endereço
                      </p>
                      <p className="font-fredoka text-lg font-bold text-white leading-snug">
                        Bairro Mariano Procópio
                        <br />
                        Juiz de Fora - MG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botão Circular Gigante Verde do WhatsApp (idêntico ao Slide 15 da Pequê) */}
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#1BA553] hover:bg-[#09D349] border-[6px] border-white shadow-2xl flex flex-col items-center justify-center gap-1 transition-transform hover:scale-110 cursor-pointer shrink-0 mx-auto sm:mx-0"
                  aria-label="Falar conosco pelo WhatsApp"
                >
                  <MessageCircle className="w-12 h-12 text-white fill-white" />
                  <span className="font-fredoka font-bold text-xs text-white uppercase tracking-wider">
                    Fale Conosco
                  </span>
                </button>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Mariano+Procopio+Juiz+de+Fora+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-reinado-ink/90 hover:bg-reinado-ink text-white font-fredoka font-bold text-xs sm:text-sm transition-colors"
                >
                  <Navigation className="w-4 h-4 text-reinado-sol" />
                  <span>Abrir Localização no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
