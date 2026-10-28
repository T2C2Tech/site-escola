import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Train, ShieldCheck } from 'lucide-react';

export default function KingdomLocation() {
  return (
    <section id="mapa" className="relative py-16 lg:py-24 bg-[#F4FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        <div className="toy-card p-6 sm:p-10 lg:p-12 bg-white border-4 border-kingdom-sky/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Informações de Acesso */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-kingdom-blue font-fredoka font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Bairro Mariano Procópio • Juiz de Fora - MG</span>
              </div>

              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold text-kingdom-navy leading-snug">
                Fácil acesso, rua tranquila e embarque 100% seguro 🏰
              </h3>

              <p className="font-nunito text-base sm:text-lg text-[#465E73] leading-relaxed">
                Situada em rua calma e residencial no tradicional bairro Mariano Procópio, nossa sede dispõe de área exclusiva e segura para embarque e desembarque assistido com monitores de calçada.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 font-nunito text-sm font-bold text-kingdom-navy">
                  <div className="w-8 h-8 rounded-full bg-kingdom-sun/40 flex items-center justify-center text-lg">
                    🚗
                  </div>
                  <span>Recuo amplo para desembarque rápido com auxílio de monitores.</span>
                </div>
                <div className="flex items-center gap-3 font-nunito text-sm font-bold text-kingdom-navy">
                  <div className="w-8 h-8 rounded-full bg-kingdom-mint/40 flex items-center justify-center text-lg">
                    🌳
                  </div>
                  <span>Rua arborizada e silenciosa, perfeita para a concentração infantil.</span>
                </div>
              </div>

              <div className="pt-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.google.com/?q=Bairro+Mariano+Procopio+Juiz+de+Fora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-jelly inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-kingdom-blue text-white font-fredoka font-bold text-base hover:bg-kingdom-navy transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </motion.a>
              </div>
            </div>

            {/* Card de Endereço e Mapa */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#EAF5FE] to-[#F5F9FD] border-2 border-kingdom-sky/30 text-center flex flex-col items-center justify-center shadow-inner">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 rounded-3xl bg-white shadow-md flex items-center justify-center text-3xl mb-4 text-kingdom-coral"
                >
                  📍
                </motion.div>
                <h4 className="font-fredoka font-bold text-2xl text-kingdom-navy">Escola Reinado da Criança</h4>
                <p className="font-nunito text-base text-[#465E73] mt-2 leading-relaxed">
                  Rua das Papoulas, 240 — Bairro Mariano Procópio<br />
                  Juiz de Fora - MG • CEP: 36035-000
                </p>
                <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-bold text-[#1e6b47] shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                  <span>Portaria Monitorada 24 Horas</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
