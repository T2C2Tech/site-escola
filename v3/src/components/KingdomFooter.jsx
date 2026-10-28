import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Phone, Mail, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KingdomFooter() {
  const triggerHearts = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.9 },
      colors: ['#FF6F61', '#FFCA28', '#A8E6CF', '#D7BDE2'],
    });
  };

  return (
    <footer className="relative bg-kingdom-navy text-white pt-16 pb-12 overflow-hidden border-t-8 border-kingdom-yellow">
      {/* Elementos Lúdicos Flutuantes no Rodapé */}
      <div className="absolute top-4 left-1/4 opacity-15 pointer-events-none text-6xl">🎈</div>
      <div className="absolute bottom-6 right-1/4 opacity-15 pointer-events-none text-6xl">🪁</div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">

          {/* Coluna 1: Logo e Missão */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                onClick={triggerHearts}
                className="w-12 h-12 rounded-2xl bg-kingdom-yellow flex items-center justify-center text-2xl shadow-md cursor-pointer select-none"
              >
                👑
              </motion.div>
              <span className="font-fredoka font-bold text-2xl text-white">Reinado da Criança</span>
            </div>
            <p className="font-nunito text-sm text-white/70 leading-relaxed max-w-xs">
              O castelo de acolhimento onde a imaginação floresce com afeto, respeito e pedagogia inovadora do Berçário ao 5º ano.
            </p>
          </div>

          {/* Coluna 2: Nossas Turmas */}
          <div className="font-nunito">
            <h4 className="font-fredoka font-bold text-lg text-kingdom-yellow mb-3">Segmentos de Ensino</h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>🍼 Berçário (4 meses a 2 anos)</li>
              <li>🎨 Maternal & Pré-Escola (2 a 5 anos)</li>
              <li>📚 Ensino Fundamental I (1º ao 5º ano)</li>
              <li>⏰ Turno Integral Completo com Almoço</li>
            </ul>
          </div>

          {/* Coluna 3: Horários & Contato */}
          <div className="font-nunito">
            <h4 className="font-fredoka font-bold text-lg text-kingdom-yellow mb-3">Atendimento Familiar</h4>
            <p className="text-sm text-white/80 mb-2">
              Segunda a Sexta: 07h00 às 18h30
            </p>
            <p className="text-xs text-white/60 mb-4">
              Rua das Papoulas, 240 — Bairro Mariano Procópio, Juiz de Fora - MG
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <a
                href="https://wa.me/5532999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-kingdom-green hover:scale-110 transition-transform text-white shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@reinadodacrianca.com.br"
                className="p-2.5 rounded-full bg-kingdom-blue hover:scale-110 transition-transform text-white shadow-sm"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 4: Selo de Qualidade */}
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="p-5 rounded-3xl bg-white/10 border border-white/15 text-center w-full">
              <span className="text-3xl block mb-1">🌟</span>
              <p className="font-fredoka font-bold text-base text-kingdom-yellow">Matrículas 2026/2027</p>
              <p className="font-nunito text-xs text-white/80 mt-1">
                Turmas reduzidas para atenção acolhedora e individualizada.
              </p>
            </div>
          </div>

        </div>

        {/* Linha Inferior com Amor */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-nunito text-white/60">
          <p>© 2026 Escola Reinado da Criança. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-white/80">
            Feito com carinho e fantasia <Heart className="w-3.5 h-3.5 text-kingdom-coral fill-kingdom-coral" /> para as crianças do nosso bairro.
          </p>
        </div>
      </div>
    </footer>
  );
}
