import React from 'react';
import { Mail, Heart, Sparkles, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#203243] pt-16 pb-12 text-white border-t-4 border-[#F6C343]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 text-center md:grid-cols-3 md:text-left">
        {/* Direitos e Dados */}
        <div className="order-2 text-sm text-white/80 md:order-1 font-nunito">
          <p className="font-quicksand font-black text-lg text-white mb-1">Escola Borboletinha Encantada</p>
          <p className="text-xs text-white/60">Educação Infantil e Ensino Fundamental 1</p>
          <p className="text-xs text-white/50 mt-2">CNPJ: 00.123.456/0001-99 • CEE/RJ 12.345/2026</p>
          
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="mailto:secretaria@borboletinhaencantada.com.br"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F6C343] hover:underline"
            >
              <Mail className="h-4 w-4" /> secretaria@borboletinhaencantada.com.br
            </a>
            <p className="inline-flex items-center gap-2 text-xs font-bold text-[#cee5ff]">
              <Phone className="h-4 w-4" /> (21) 99999-9999 / (21) 2222-3333
            </p>
          </div>
        </div>

        {/* Logo Central Vibrante */}
        <div className="order-1 mx-auto text-center md:order-2">
          <div className="relative inline-block mb-3">
            <img
              src="/logo.png"
              alt="Logo Borboletinha"
              className="h-28 w-auto mx-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm">🌈</span>
            <span className="font-quicksand font-black text-xs text-[#F6C343] tracking-widest uppercase">
              Onde a Infância Voa Feliz
            </span>
            <span className="text-sm">✨</span>
          </div>
        </div>

        {/* Horários e Mensagem de Amor */}
        <div className="order-3 flex flex-col items-center justify-center md:items-end font-nunito text-xs text-white/80">
          <div className="rounded-2xl bg-white/10 p-4 border border-white/15 text-center md:text-right">
            <p className="font-quicksand font-black text-sm text-[#F6C343] mb-1">⏰ Horários de Funcionamento</p>
            <p>Berçário e Maternal: 07h30 às 18h30</p>
            <p>Fundamental 1: Manhã e Tarde</p>
            <p>Opção de Turno Integral Flexível</p>
          </div>
          
          <p className="mt-4 flex items-center gap-1.5 text-xs text-white/70">
            Feito com <Heart className="h-4 w-4 text-[#E63946] fill-[#E63946]" /> para as crianças do nosso bairro
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-center">
        <p className="text-xs leading-relaxed text-white/50 font-nunito">
          Escola Borboletinha Encantada — Educação Infantil (Berçário e Maternal) e Ensino Fundamental de 1º ao 5º Ano. Matrículas abertas para o ano letivo 2026/2027.
        </p>
      </div>
    </footer>
  );
}
