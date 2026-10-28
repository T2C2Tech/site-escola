import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  Heart,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

export default function Footer({ onOpenVisitModal }) {
  return (
    <footer className="bg-reinado-ink text-white pt-16 pb-24 sm:pb-12 border-t-8 border-reinado-sol">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Coluna 1: Identidade & Missão */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md">
                <img
                  src="./logo.png"
                  onError={(e) => {
                    e.currentTarget.src = './logo.svg';
                  }}
                  alt="Colégio Reinado da Criança"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-fredoka text-2xl font-bold text-white leading-none">
                  Colégio Reinado <span className="text-reinado-sol">da Criança</span>
                </p>
                <p className="text-xs font-bold text-reinado-celeste-light mt-1">
                  Educação Infantil & Ensino Fundamental I • Mariano Procópio
                </p>
              </div>
            </div>

            <p className="text-sm text-white/85 font-semibold leading-relaxed max-w-md">
              Unimos a tradição de um ambiente acolhedor, onde cada criança é chamada pelo nome, com o nosso <strong>Tempo Integral Humanizado</strong>, Iniciação Bilíngue, Oficina de Mini-Chef, Horta Comunitária e Educação Socioemocional.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-reinado-limao">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Ambiente 100% seguro e imagens autorizadas conforme LGPD.</span>
            </div>
          </div>

          {/* Coluna 2: Segmentos & Projetos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-fredoka text-lg font-bold text-reinado-sol">
              Turmas & Projetos
            </h4>
            <ul className="space-y-2 text-sm text-white/85 font-semibold">
              <li>• Berçário Afetivo (a partir de 4 meses)</li>
              <li>• Maternal I, II e III (até 4 anos)</li>
              <li>• Ensino Fundamental I (1º ao 5º Ano)</li>
              <li>• Tempo Integral Humanizado</li>
              <li>• Iniciação Bilíngue Diária</li>
              <li>• Oficina de Mini-Chef & Horta</li>
              <li>• Programa "Líder em Mim"</li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento & Visitas */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-fredoka text-lg font-bold text-reinado-sol">
              Visitas & Matrículas
            </h4>
            <div className="space-y-2.5 text-sm text-white/90 font-semibold">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-reinado-celeste shrink-0 mt-1" />
                <span>Bairro Mariano Procópio — Juiz de Fora / MG</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-reinado-limao shrink-0 mt-1" />
                <span>
                  Visitas Exclusivas (Seg a Sex):<br />
                  Manhã: 08h30 às 11h00 | Tarde: 14h00 às 16h30
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-reinado-tangerina shrink-0" />
                <span>Secretaria WhatsApp: (32) 99999-1234</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-tangerina w-full py-3.5 px-5 rounded-full font-fredoka font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-semibold">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Colégio Reinado da Criança • Feito com{' '}
            <Heart className="w-3.5 h-3.5 fill-reinado-tangerina text-reinado-tangerina" /> no Mariano Procópio, Juiz de Fora - MG.
          </p>
          <div className="flex items-center gap-4">
            <a href="../" className="hover:text-reinado-sol transition-colors">V1</a>
            <a href="../v2/" className="hover:text-reinado-sol transition-colors">V2</a>
            <a href="../v3/" className="hover:text-reinado-sol transition-colors">V3</a>
            <span className="px-2.5 py-0.5 rounded-full bg-reinado-sol text-reinado-ink font-extrabold">
              V4 Oficial
            </span>
          </div>
        </div>
      </div>

      {/* Botão Flutuante de WhatsApp / Agendamento Rápido */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenVisitModal()}
          className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-fredoka font-bold text-sm sm:text-base shadow-2xl border-2 border-white transition-transform hover:scale-105 cursor-pointer"
          aria-label="Agendar visita pelo WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Agendar Visita no WhatsApp</span>
        </button>
      </div>
    </footer>
  );
}

