import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
import WaveTransition from './WaveTransition';

export default function Localizacao() {
  return (
    <section id="localizacao" className="relative bg-[#edf4ff] pt-24 pb-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr] items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#cee5ff] px-4 py-1 mb-4 w-fit shadow-sm">
            <span className="text-base">📍</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#00456e]">
              Fácil Acesso no Bairro
            </span>
          </div>

          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Uma rua arborizada, segura e tranquila para sua rotina!
          </h2>

          <address className="mt-8 flex gap-3.5 not-italic rounded-3xl bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffdad8] text-2xl">
              📍
            </div>
            <div>
              <p className="font-quicksand font-black text-lg text-[#2C3E50]">Escola Reinado da Criança</p>
              <p className="font-nunito text-base text-[#5b403f] mt-1 leading-relaxed">
                Rua das Palmeiras Encantadas, 120<br />
                Tijuca / Maracanã — Rio de Janeiro — RJ<br />
                CEP: 20521-000
              </p>
            </div>
          </address>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm font-bold text-[#5b403f]">
              <span className="text-xl">🚗</span>
              <span>Embarque e desembarque rápido com auxílio de monitores na calçada.</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-[#5b403f]">
              <span className="text-xl">🚇</span>
              <span>A 4 minutos da estação de metrô e das principais linhas de ônibus da região.</span>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#db313f] px-8 py-4 font-quicksand text-base font-black text-white shadow-xl shadow-[#E63946]/25 transition-all"
          >
            <Navigation className="h-5 w-5" /> Abrir no Google Maps
          </motion.a>
        </motion.div>

        {/* Mapa Embed */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="min-h-[420px] overflow-hidden rounded-[2.8rem] shadow-2xl bg-white p-2"
        >
          <iframe
            title="Localização da Escola Reinado da Criança"
            src="https://www.google.com/maps?q=Tijuca%20Rio%20de%20Janeiro&output=embed"
            className="h-full min-h-[400px] w-full rounded-[2.5rem] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* Onda de Transição para o Footer Escuro */}
      <WaveTransition fill="#203243" position="bottom" variant={2} />
    </section>
  );
}
