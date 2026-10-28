import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Play,
  ShieldCheck,
  X,
  ZoomIn,
  Calendar,
} from 'lucide-react';

export default function GaleriaMidiaInterativa({ onOpenVisitModal, onOpenVideoModal }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filters = [
    { id: 'todos', label: '🌟 Mosaico Completo' },
    { id: 'patio', label: '☀️ Pátio & Recreação' },
    { id: 'bercario', label: '👶 Berçário & Salas Temáticas' },
    { id: 'minichef', label: '👩‍🍳 Refeitório & Mini-Chef' },
    { id: 'horta', label: '🌱 Horta Comunitária' },
  ];

  // Mosaicos estilo Slides 12, 13 e 14 da Pequê usando os novos assets exclusivos gerados
  const mosaicItems = [
    {
      id: 1,
      category: 'patio',
      span: 'md:col-span-7',
      title: 'Pátio Ensolarado & Convivência Afetiva',
      subtitle: 'Brincadeiras ao ar livre, acolhimento pelo nome e muita alegria no Mariano Procópio.',
      badge: 'Pátio & Área Livre',
      badgeColor: 'bg-reinado-celeste',
      image: './assets/hero-criancas.png',
      type: 'photo',
    },
    {
      id: 2,
      category: 'bercario',
      span: 'md:col-span-5',
      title: 'Berçário Afetivo & Salas Temáticas',
      subtitle: 'Ambiente higienizado, seguro e estimulante a partir dos 4 meses de idade.',
      badge: 'Berçário & Maternal',
      badgeColor: 'bg-reinado-tangerina',
      image: './assets/bercario-afetivo.png',
      type: 'photo',
    },
    {
      id: 3,
      category: 'minichef',
      span: 'md:col-span-5',
      title: 'Oficina de Mini-Chef & Refeitório',
      subtitle: 'Cozinha pedagógica para explorar receitas nutritivas e alimentação saudável.',
      badge: 'Cozinha Pedagógica',
      badgeColor: 'bg-reinado-sol text-reinado-ink',
      image: './assets/minichef-cozinha.png',
      type: 'video',
    },
    {
      id: 4,
      category: 'horta',
      span: 'md:col-span-7',
      title: 'Horta Comunitária & Educação Ambiental',
      subtitle: 'Contato diário com a natureza: plantar, regar, cuidar e colher em equipe.',
      badge: 'Horta Comunitária',
      badgeColor: 'bg-reinado-limao',
      image: './assets/horta-comunitaria.png',
      type: 'photo',
    },
  ];

  const visibleItems =
    activeFilter === 'todos'
      ? mosaicItems
      : mosaicItems.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="py-16 lg:py-24 peque-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho dos Mosaicos (Slides 12, 13 e 14 da Pequê) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-celeste text-white font-fredoka font-bold text-xs uppercase tracking-wider">
              <Camera className="w-4 h-4" /> Mosaico Visual • Estrutura no Mariano Procópio
            </span>
            <h2 className="mt-3 font-fredoka text-3xl sm:text-5xl font-bold text-reinado-ink leading-tight">
              Nosso espaço em cada detalhe
            </h2>
          </div>

          {/* Filtros Rápidos */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full font-fredoka font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-reinado-ink text-reinado-sol shadow-md scale-105'
                    : 'bg-white text-reinado-ink border border-reinado-ink/15 hover:bg-reinado-sol/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Bento Collage estilo Slides 12-14 da Pequê */}
        <div className="grid md:grid-cols-12 gap-6">
          {visibleItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className={`${
                activeFilter === 'todos' ? item.span : 'md:col-span-6'
              } group relative rounded-[2.25rem] overflow-hidden bg-white p-3 shadow-xl border-2 border-reinado-ink/10`}
            >
              <div className="relative h-[300px] sm:h-[360px] rounded-[1.75rem] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/85 via-reinado-ink/20 to-transparent" />

                <span
                  className={`absolute top-4 left-4 px-3.5 py-1 rounded-full font-fredoka font-bold text-xs text-white shadow-md ${item.badgeColor}`}
                >
                  {item.badge}
                </span>

                {item.type === 'video' ? (
                  <button
                    type="button"
                    onClick={() => onOpenVideoModal(item)}
                    className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-reinado-tangerina text-white font-fredoka font-bold text-xs flex items-center gap-1.5 shadow-lg cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Assistir Vídeo
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(item)}
                    className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 text-reinado-ink font-fredoka font-bold text-xs flex items-center gap-1.5 shadow-lg cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-reinado-celeste" /> Ampliar
                  </button>
                )}

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-fredoka text-xl sm:text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selo Oficial de Direito de Imagem (LGPD) */}
        <div className="mt-8 bg-white rounded-3xl p-5 sm:p-6 border-2 border-reinado-limao flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-8 h-8 text-reinado-limao shrink-0" />
            <p className="text-xs sm:text-sm font-bold text-reinado-ink">
              <strong>Segurança & Conformidade LGPD:</strong> Todas as imagens e vídeos institucionais do acervo possuem Termo de Autorização de Uso de Imagem assinado pelos responsáveis.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenVisitModal()}
            className="px-5 py-2.5 rounded-full bg-reinado-celeste text-white font-fredoka font-bold text-xs sm:text-sm shrink-0 hover:bg-reinado-celeste-dark transition-colors cursor-pointer"
          >
            Conhecer Pessoalmente →
          </button>
        </div>
      </div>

      {/* Modal Lightbox de Foto */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-reinado-ink/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.25rem] max-w-3xl w-full overflow-hidden shadow-2xl border-4 border-reinado-sol"
            >
              <div className="relative aspect-video bg-slate-950">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-reinado-ink flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-fredoka text-2xl font-bold text-reinado-ink">
                    {selectedPhoto.title}
                  </h4>
                  <p className="text-sm text-reinado-slate font-semibold mt-1">
                    {selectedPhoto.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenVisitModal();
                  }}
                  className="peque-cta-pill px-6 py-3 rounded-full font-fredoka font-bold text-sm shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Fale conosco</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
