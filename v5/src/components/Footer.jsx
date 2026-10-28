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
import { CrownDoodle } from './PlayfulDoodles';

export default function Footer({ onOpenVisitModal }) {
  return (
    <footer className="bg-reinado-ink text-white pt-16 pb-24 sm:pb-12 border-t-4 border-reinado-sol relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Coluna 1: Identidade & Missão */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-sm">
                <img
                  src="./logo.png"
                  onError={(e) => {
                    e.currentTarget.src = './logo.svg';
                  }}
                  alt="Colégio Reinado da Criança"
                  className="w-11 h-11 object-contain"
                />
                <CrownDoodle className="w-4 h-4 absolute -top-1.5 -right-1.5" />
              </div>
              <div>
                <p className="font-fredoka text-xl font-bold text-white leading-none">
                  Colégio Reinado <span className="text-reinado-sol">da Criança</span>
                </p>
                <p className="text-xs font-medium text-white/75 mt-1">
                  Educação Infantil & Ensino Fundamental I • Mariano Procópio
                </p>
              </div>
            </div>

            <p className="text-sm text-white/80 font-medium leading-relaxed max-w-md">
              Ambiente moderno, afetivo e acolhedor no bairro <strong>Mariano Procópio</strong>, onde cada criança é chamada pelo nome. Do Berçário (4 meses) ao 5º Ano com <strong>Tempo Integral Humanizado</strong>, Inglês diário, Oficina de Mini-Chef, Horta Comunitária e Líder em Mim.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-emerald-300">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Ambiente seguro e imagens autorizadas conforme LGPD.</span>
            </div>
          </div>

          {/* Coluna 2: Segmentos & Projetos */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-fredoka text-base font-semibold text-reinado-sol">
              Turmas & Projetos
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
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
            <h4 className="font-fredoka text-base font-semibold text-reinado-sol">
              Visitas & Matrículas
            </h4>
            <div className="space-y-2.5 text-sm text-white/85 font-medium">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-reinado-sol shrink-0 mt-1" />
                <span>Bairro Mariano Procópio — Juiz de Fora / MG</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-reinado-sol shrink-0 mt-1" />
                <span>
                  Visitas Exclusivas (Seg a Sex):
                  <br />
                  Manhã: 08h30 às 11h00 | Tarde: 14h00 às 16h30
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-reinado-sol shrink-0" />
                <span>Secretaria WhatsApp: (32) 99999-1234</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-toy w-full py-3 px-5 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita pelo WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior com Links entre Versões */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70 font-medium">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Colégio Reinado da Criança • Feito com{' '}
            <Heart className="w-3.5 h-3.5 fill-reinado-tangerina text-reinado-tangerina" /> no Mariano Procópio, Juiz de Fora - MG.
          </p>
          <div className="flex items-center gap-3.5">
            <a href="../" className="hover:text-reinado-sol transition-colors">
              V1
            </a>
            <a href="../v2/" className="hover:text-reinado-sol transition-colors">
              V2
            </a>
            <a href="../v3/" className="hover:text-reinado-sol transition-colors">
              V3
            </a>
            <a href="../v4/" className="hover:text-reinado-sol transition-colors">
              V4
            </a>
            <span className="px-3 py-0.5 rounded-full bg-white/10 text-reinado-sol font-fredoka font-semibold border border-white/15">
              V5 Infantil Sóbria
            </span>
          </div>
        </div>
      </div>

      {/* Botão Flutuante de WhatsApp Discreto */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenVisitModal()}
          className="btn-toy flex items-center gap-2 px-4 py-3 rounded-full bg-[#22A858] hover:bg-[#1C8F4B] text-white font-fredoka font-semibold text-xs sm:text-sm cursor-pointer shadow-lg"
          aria-label="Falar conosco pelo WhatsApp"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Agendar Visita</span>
        </button>
      </div>
    </footer>
  );
}
