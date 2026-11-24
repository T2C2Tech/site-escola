import React from 'react';
import { Mail, Heart, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#203243] pt-16 pb-12 text-white border-t-4 border-[#F6C343]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 text-center md:grid-cols-3 md:text-left">
        {/* Direitos e Dados */}
        <div className="order-2 text-sm text-white/80 md:order-1 font-nunito">
          <p className="font-quicksand font-black text-lg text-white mb-1">
            Escola Borboletinha Encantada & Colégio Estrutura
          </p>
          <p className="text-xs text-white/70">
            Educação Infantil (Maternal 1 ao 2º Período) • Ensino Fundamental (1º ao 5º Ano)
          </p>
          <p className="text-xs text-white/70 mt-1 font-semibold">
            📍 Rua Dr. Euvaldo Lodi, 131 - Borboleta, Juiz de Fora — MG
          </p>
          <p className="text-xs text-white/50 mt-1">
            Robótica • Inglês • Capoeira • Balé • Nossa Hortinha
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href="mailto:contato@borboletinhaencantada.com.br"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F6C343] hover:underline"
            >
              <Mail className="h-4 w-4" /> contato@borboletinhaencantada.com.br
            </a>
            <p className="inline-flex items-center gap-2 text-xs font-bold text-[#cee5ff]">
              <Phone className="h-4 w-4" /> Fixo: (32) 3213-7821
            </p>
            <p className="inline-flex items-center gap-2 text-xs font-bold text-[#2E9A68]">
              <MessageCircle className="h-4 w-4" /> WhatsApp: (32) 98804-4966
            </p>
          </div>
        </div>

        {/* Logo Central Vibrante */}
        <div className="order-1 mx-auto text-center md:order-2">
          <div className="relative inline-block mb-3">
            <img
              src="./logo.png"
              alt="Logo Borboletinha Encantada e Colégio Estrutura"
              className="h-28 w-auto mx-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[11px] text-white/70 italic mt-1 font-medium">
              “Aqui, cada passinho vira um grande voo de descobertas.”
            </p>
          </div>
        </div>

        {/* Horários e Mensagem de Amor */}
        <div className="order-3 flex flex-col items-center justify-center md:items-end font-nunito text-xs text-white/80">
          <div className="rounded-2xl bg-white/10 p-4 border border-white/15 text-center md:text-right">
            <p className="font-quicksand font-black text-sm text-[#F6C343] mb-1">⏰ Turnos & Atendimento</p>
            <p>Educação Infantil: Manhã e Tarde</p>
            <p>Ensino Fundamental: Manhã e Tarde</p>
            <p className="text-[#cee5ff] font-bold">Horário Parcial e Integral com Horário Flexível</p>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-xs text-white/70">
            Estrutura para crescer com <Heart className="h-4 w-4 text-[#E63946] fill-[#E63946]" /> Valores para a vida.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center">
        <p className="text-xs leading-relaxed text-white/50 font-nunito">
          Escola Borboletinha Encantada e Colégio Estrutura — Todos os direitos reservados. Juiz de Fora - MG. Turmas com número reduzido, robótica, inglês e afeto do Maternal 1 ao 5º Ano.
        </p>
      </div>
    </footer>
  );
}
