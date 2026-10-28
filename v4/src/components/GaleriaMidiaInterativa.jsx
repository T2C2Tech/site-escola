import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Video,
  ShieldCheck,
  Play,
  X,
  Calendar,
  Sparkles,
  ZoomIn,
} from 'lucide-react';

export default function GaleriaMidiaInterativa({ onOpenVisitModal, onOpenVideoModal }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [lightboxItem, setLightboxItem] = useState(null);

  const categories = [
    { id: 'todos', label: '🌟 Todos os Espaços' },
    { id: 'patio', label: '☀️ Pátio & Área Livre' },
    { id: 'salas', label: '🎨 Salas Temáticas & Bilíngue' },
    { id: 'refeitorio', label: '👩‍🍳 Refeitório & Mini-Chef' },
    { id: 'brinquedoteca', label: '🧸 Brinquedoteca & Psicomotricidade' },
    { id: 'horta', label: '🌱 Horta Comunitária' },
  ];

  const mediaItems = [
    {
      id: 1,
      category: 'patio',
      type: 'video',
      title: 'Pátio Ensolarado e Recreação Guiada',
      subtitle: 'Espaço amplo, arejado e monitorado para brincadeiras coletivas e banhos de sol.',
      badge: 'Pátio & Área Livre',
      image: './design/quem-somos.png',
      fallback: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80',
      duration: '01:15',
    },
    {
      id: 2,
      category: 'salas',
      type: 'photo',
      title: 'Salas Temáticas e Imersão Bilíngue',
      subtitle: 'Ambientes coloridos, climatizados e preparados para o aprendizado ativo do Berçário ao 5º Ano.',
      badge: 'Salas Temáticas',
      image: './design/segmentos.png',
      fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      category: 'refeitorio',
      type: 'video',
      title: 'Refeitório Acolhedor & Oficina de Mini-Chef',
      subtitle: 'Cozinha pedagógica onde nossos alunos exploram receitas nutritivas e hábitos saudáveis.',
      badge: 'Refeitório & Mini-Chef',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
      fallback: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
      duration: '00:55',
    },
    {
      id: 4,
      category: 'brinquedoteca',
      type: 'photo',
      title: 'Brinquedoteca & Circuito de Psicomotricidade',
      subtitle: 'Piso emborrachado antitrauma, brinquedos pedagógicos higienizados e estímulo motor diário.',
      badge: 'Brinquedoteca',
      image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=900&q=80',
      fallback: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 5,
      category: 'horta',
      type: 'photo',
      title: 'Horta Comunitária do Reinado',
      subtitle: 'Contato direto com a terra: as crianças plantam, cuidam e colhem hortaliças fresquinhas.',
      badge: 'Horta Comunitária',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
      fallback: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 6,
      category: 'salas',
      type: 'video',
      title: 'Educação Socioemocional "Líder em Mim"',
      subtitle: 'Rodas de conversa, empatia e protagonismo infantil onde cada criança é chamada pelo nome.',
      badge: 'Socioemocional',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      fallback: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
      duration: '01:05',
    },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="galeria"
      className="py-16 lg:py-24 bg-gradient-to-b from-white via-reinado-celeste-light/30 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-reinado-tangerina-light text-reinado-tangerina-dark font-fredoka font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Camera className="w-4 h-4" /> Tour Interativo • Fotos e Vídeos em Alta Resolução
          </span>
          <h2 className="mt-3 font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-reinado-ink">
            Conheça cada cantinho do nosso{' '}
            <span className="text-reinado-celeste">Reinado no Mariano Procópio</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-reinado-slate font-semibold">
            Pátio, salas temáticas, refeitório, horta e brinquedoteca preparados com carinho, higiene e segurança.
          </p>
        </div>

        {/* Filtros de Categoria Interativos */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2.5 rounded-full font-fredoka font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-reinado-celeste text-white shadow-md scale-105'
                  : 'bg-white text-reinado-ink border border-reinado-celeste/25 hover:bg-reinado-celeste-light'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid de Fotos e Vídeos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="card-vibrante overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  onError={(e) => {
                    e.currentTarget.src = item.fallback;
                  }}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/75 via-transparent to-transparent" />

                {/* Tag de Espaço */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 text-reinado-ink font-fredoka font-bold text-xs shadow-sm">
                  {item.badge}
                </span>

                {/* Indicador Vídeo vs Foto */}
                {item.type === 'video' ? (
                  <button
                    type="button"
                    onClick={() => onOpenVideoModal(item)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label={`Assistir vídeo: ${item.title}`}
                  >
                    <span className="w-14 h-14 rounded-full bg-reinado-tangerina text-white flex items-center justify-center shadow-xl border-2 border-white group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-reinado-ink/85 text-white font-bold text-xs flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-reinado-sol" /> {item.duration}
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setLightboxItem(item)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-reinado-ink font-fredoka font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-reinado-celeste" /> Ampliar Foto
                  </button>
                )}
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-fredoka text-xl font-bold text-reinado-ink mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-reinado-slate font-semibold leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selo de Conformidade & Direito de Imagem (LGPD) + CTA de Visita Presencial */}
        <div className="mt-12 rounded-3xl bg-reinado-ink text-white p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border-2 border-reinado-sol">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-reinado-limao text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-reinado-sol">
                <Sparkles className="w-3.5 h-3.5" /> Compromisso com a Segurança e Privacidade (LGPD)
              </span>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                Todas as fotos e vídeos institucionais possuem Termo de Autorização de Uso de Imagem assinado pelos responsáveis.
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-semibold mt-0.5">
                Nada substitui sentir a energia do colégio pessoalmente! Agende sua visita guiada de 30 minutos.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenVisitModal()}
            className="btn-tangerina px-7 py-4 rounded-full font-fredoka font-bold text-base shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Agendar Visita Presencial</span>
          </button>
        </div>
      </div>

      {/* Lightbox para Ampliar Foto */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-reinado-ink/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-4 border-reinado-sol"
            >
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={lightboxItem.image}
                  onError={(e) => {
                    e.currentTarget.src = lightboxItem.fallback;
                  }}
                  alt={lightboxItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-reinado-ink flex items-center justify-center shadow-lg hover:bg-reinado-tangerina hover:text-white transition-colors cursor-pointer"
                  aria-label="Fechar imagem"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-reinado-celeste-light text-reinado-celeste-dark font-fredoka font-bold text-xs">
                    {lightboxItem.badge}
                  </span>
                  <h4 className="font-fredoka text-2xl font-bold text-reinado-ink mt-1">
                    {lightboxItem.title}
                  </h4>
                  <p className="text-sm text-reinado-slate font-semibold mt-1">
                    {lightboxItem.subtitle}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxItem(null);
                    onOpenVisitModal();
                  }}
                  className="btn-tangerina px-5 py-3 rounded-2xl font-fredoka font-bold text-sm shrink-0 cursor-pointer"
                >
                  Conhecer Pessoalmente
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

