import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Phone, MessageCircle } from 'lucide-react';
import WaveTransition from './WaveTransition';

export default function Localizacao() {
  return (
    <section id="localizacao" className="relative bg-[#edf4ff] pt-24 pb-32 overflow-hidden scroll-mt-20">
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
              Bairro Borboleta • Juiz de Fora - MG
            </span>
          </div>

          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Espaço físico acolhedor para toda a jornada escolar!
          </h2>

          <address className="mt-8 flex gap-3.5 not-italic rounded-3xl bg-white p-6 shadow-md border border-slate-100">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl">
              <img src="./logo.png" alt="Logo" className="h-12 w-12 " />
            </div>
            <div>
              <p className="font-quicksand font-black text-lg text-[#2C3E50]">
                Escola Borboletinha Encantada & Colégio Estrutura
              </p>
              <p className="font-nunito text-sm font-bold text-[#1E5A87] mt-1">
                📍 Rua Dr. Euvaldo Lodi, 131 — Bairro Borboleta, Juiz de Fora - MG
              </p>
              <p className="font-nunito text-xs text-[#5b403f] mt-1.5 leading-relaxed">
                Espaço físico estruturado para cada faixa etária: da <strong>Educação Infantil (Maternal 1 ao 2º Período)</strong> ao <strong>Ensino Fundamental (1º ao 5º Ano)</strong>.<br />
                Pátios lúdicos, ampla área verde com hortinha e ambientes acolhedores.
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-black text-[#1E5A87]">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#2B90D9]" />
                  (32) 3213-7821
                </span>
                <span className="flex items-center gap-1.5 text-[#2E9A68]">
                  <MessageCircle className="h-4 w-4" />
                  (32) 98804-4966 (WhatsApp)
                </span>
              </div>
            </div>
          </address>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm font-bold text-[#5b403f]">
              <span className="text-xl">🚗</span>
              <span>Embarque e desembarque seguro com monitoria e apoio na entrada.</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-[#5b403f]">
              <span className="text-xl">🌿</span>
              <span>Rua tranquila, vizinhança familiar e fácil acesso para pais e responsáveis.</span>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Euvaldo+Lodi%2C+131+-+Borboleta%2C+Juiz+de+Fora+-+MG"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E63946] to-[#db313f] px-8 py-4 font-quicksand text-base font-black text-white shadow-xl shadow-[#E63946]/25 transition-all"
          >
            <Navigation className="h-5 w-5" /> Abrir no Google Maps
          </motion.a>
        </motion.div>

        {/* Mapa Embed Juiz de Fora */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="min-h-[420px] overflow-hidden rounded-[2.8rem] shadow-2xl bg-white p-2"
        >
          <iframe
            title="Localização da Escola Borboletinha Encantada e Colégio Estrutura - Rua Dr. Euvaldo Lodi, 131, Borboleta, Juiz de Fora - MG"
            src="https://www.google.com/maps?q=Rua+Dr.+Euvaldo+Lodi%2C+131+-+Borboleta%2C+Juiz+de+Fora+-+MG&output=embed"
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
