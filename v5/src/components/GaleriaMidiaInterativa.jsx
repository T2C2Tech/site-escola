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

export default function GaleriaMidiaInterativa({
  onOpenVisitModal,
  onOpenVideoModal,
}) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filters = [
    { id: 'todos', label: 'Todos os Espaços' },
    { id: 'patio', label: 'Pátio & Recreação' },
    { id: 'bercario', label: 'Berçário & Salas' },
    { id: 'minichef', label: 'Cozinha Mini-Chef' },
    { id: 'horta', label: 'Horta Comunitária' },
  ];

  const mosaicItems = [
    {
      id: 1,
      category: 'patio',
      span: 'md:col-span-7',
      title: 'Pátio Ensolarado & Convivência Afetiva',
      subtitle:
        'Brincadeiras ao ar livre, acolhimento pelo nome e convivência no Mariano Procópio.',
      badge: 'Pátio & Recreação',
      badgeColor: 'bg-reinado-celeste-light text-reinado-celeste-dark',
      image: './assets/hero-criancas.png',
      type: 'photo',
    },
    {
      id: 2,
      category: 'bercario',
      span: 'md:col-span-5',
      title: 'Berçário Afetivo & Salas Temáticas',
      subtitle:
        'Ambiente higienizado, seguro e estimulante a partir dos 4 meses de idade.',
      badge: 'Berçário & Maternal',
      badgeColor: 'bg-reinado-sol-light text-reinado-sol-dark',
      image: './assets/bercario-afetivo.png',
      type: 'photo',
    },
    {
      id: 3,
      category: 'minichef',
      span: 'md:col-span-5',
      title: 'Oficina de Mini-Chef & Refeitório',
      subtitle:
        'Cozinha pedagógica para explorar receitas nutritivas e alimentação saudável.',
      badge: 'Cozinha Pedagógica',
      badgeColor: 'bg-reinado-tangerina-light text-reinado-tangerina-dark',
      image: './assets/minichef-cozinha.png',
      type: 'video',
    },
    {
      id: 4,
      category: 'horta',
      span: 'md:col-span-7',
      title: 'Horta Comunitária & Educação Ambiental',
      subtitle:
        'Contato diário com a natureza: plantar, regar, cuidar e colher em equipe.',
      badge: 'Horta Comunitária',
      badgeColor: 'bg-reinado-limao-light text-reinado-limao-dark',
      image: './assets/horta-comunitaria.png',
      type: 'photo',
    },
  ];

  const visibleItems =
    activeFilter === 'todos'
      ? mosaicItems
      : mosaicItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="galeria"
      className="py-16 lg:py-24 bg-white/80 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho Sóbrio */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-reinado-uva-light border border-purple-200 text-reinado-uva font-fredoka font-semibold text-xs">
              <Camera className="w-3.5 h-3.5" /> Estrutura no Mariano Procópio
            </span>
            <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink leading-tight">
              Nosso espaço em <span className="text-reinado-celeste">cada detalhe</span>
            </h2>
          </div>

          {/* Botões de Filtro Sóbrios */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full font-fredoka font-semibold text-xs sm:text-sm border transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-reinado-ink text-white border-reinado-ink shadow-sm'
                    : 'bg-white text-reinado-slate border-slate-200 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Fotos Limpo */}
        <div className="grid md:grid-cols-12 gap-6">
          {visibleItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`${
                activeFilter === 'todos' ? item.span : 'md:col-span-6'
              } sticker-card rounded-3xl p-3 bg-white group`}
            >
              <div className="relative h-[280px] sm:h-[330px] rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/75 via-reinado-ink/15 to-transparent" />

                <span
                  className={`absolute top-3.5 left-3.5 px-3 py-1 rounded-full border border-white/60 font-fredoka font-semibold text-xs shadow-sm ${item.badgeColor}`}
                >
                  {item.badge}
                </span>

                {item.type === 'video' ? (
                  <button
                    type="button"
                    onClick={() => onOpenVideoModal(item)}
                    className="btn-toy absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-reinado-tangerina text-white font-fredoka font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" /> Assistir Vídeo
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedPhoto(item)}
                    className="btn-toy absolute top-3.5 right-3.5 px-3.5 py-1.5 rounded-full bg-white/95 text-reinado-ink font-fredoka font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-reinado-celeste" /> Ampliar
                  </button>
                )}

                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 border border-slate-200/80">
                  <h3 className="font-fredoka text-base sm:text-lg font-bold text-reinado-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-reinado-slate font-semibold mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selo Oficial de Direito de Imagem (LGPD) */}
        <div className="mt-8 sticker-card rounded-2xl p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-reinado-limao-light border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-reinado-limao" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-reinado-slate">
              <strong className="text-reinado-ink">Segurança & Conformidade LGPD:</strong> Todas as imagens e vídeos institucionais do acervo possuem Termo de Autorização de Uso de Imagem assinado pelos responsáveis.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenVisitModal()}
            className="btn-toy px-5 py-2.5 rounded-full bg-reinado-celeste hover:bg-reinado-celeste-dark text-white font-fredoka font-semibold text-xs sm:text-sm shrink-0 cursor-pointer"
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
            className="fixed inset-0 z-50 bg-reinado-ink/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden border border-slate-200 shadow-sticker-lg"
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
                  className="btn-toy absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-reinado-ink flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-fredoka text-xl font-bold text-reinado-ink">
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
                  className="btn-toy px-5 py-2.5 rounded-full bg-reinado-tangerina text-white font-fredoka font-semibold text-sm shrink-0 flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Visita</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
