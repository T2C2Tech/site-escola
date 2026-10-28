import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Play,
  Heart,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Baby,
  BookOpen,
  Sun,
} from 'lucide-react';

export default function Hero({ onOpenVisitModal, onOpenVideoModal }) {
  const quickStages = [
    {
      id: 'Berçário (a partir de 4 meses)',
      title: 'Berçário & Maternal',
      subtitle: '4 meses a 4 anos • Manhã, Tarde e Integral',
      icon: Baby,
      badgeBg: 'bg-reinado-celeste',
      lightBg: 'bg-reinado-celeste-light hover:border-reinado-celeste',
      textColor: 'text-reinado-celeste-dark',
    },
    {
      id: 'Ensino Fundamental I (1º ao 5º Ano)',
      title: 'Ensino Fundamental I',
      subtitle: '1º ao 5º Ano (6 a 10 anos) • Manhã e Tarde',
      icon: BookOpen,
      badgeBg: 'bg-reinado-limao',
      lightBg: 'bg-reinado-limao-light hover:border-reinado-limao',
      textColor: 'text-reinado-limao-dark',
    },
    {
      id: 'Tempo Integral Humanizado',
      title: 'Integral Humanizado',
      subtitle: 'Rotina acolhedora, Mini-Chef, Horta e Inglês',
      icon: Sun,
      badgeBg: 'bg-reinado-tangerina',
      lightBg: 'bg-reinado-sol-light hover:border-reinado-tangerina',
      textColor: 'text-reinado-sol-dark',
    },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#E5F5FF] via-[#F8FCFF] to-white bg-dots-pattern"
    >
      {/* Elementos Decorativos Vibrantes (Paleta Oficial: Azul-Celeste, Amarelo-Sol, Verde-Limão, Laranja-Tangerina) */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-reinado-celeste/15 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-24 w-96 h-96 rounded-full bg-reinado-sol/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-reinado-limao/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Copywriting de Alta Conversão */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border-2 border-reinado-celeste/30"
            >
              <span className="px-2.5 py-0.5 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs">
                👑 Bairro Mariano Procópio
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-reinado-ink">
                Aqui cada criança é chamada pelo nome!
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-fredoka text-3xl sm:text-5xl lg:text-[52px] font-bold text-reinado-ink leading-[1.12] tracking-tight"
            >
              O ensino afetivo e o{' '}
              <span className="text-reinado-celeste underline decoration-reinado-sol decoration-4 underline-offset-4">
                tempo integral humanizado
              </span>{' '}
              que dão paz ao coração dos pais.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-reinado-slate font-semibold leading-relaxed max-w-2xl"
            >
              Do <strong>Berçário (a partir de 4 meses)</strong> ao <strong>5º ano do Ensino Fundamental I</strong>. Unimos o acolhimento familiar de bairro a uma estrutura moderna com{' '}
              <span className="text-reinado-ink font-extrabold">
                Iniciação Bilíngue diária, Oficina de Mini-Chef, Horta Comunitária e Educação Socioemocional
              </span>.
            </motion.p>

            {/* Gatilhos Mentais: Segurança, Acolhimento e Urgência */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="grid sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="flex items-center gap-2.5 bg-white/90 px-3.5 py-2.5 rounded-2xl border border-reinado-celeste/20 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-reinado-celeste shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-reinado-ink">
                  Ambiente 100% Seguro e Monitorado
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 px-3.5 py-2.5 rounded-2xl border border-reinado-limao/30 shadow-sm">
                <Heart className="w-5 h-5 text-reinado-tangerina shrink-0 fill-reinado-tangerina" />
                <span className="text-xs sm:text-sm font-extrabold text-reinado-ink">
                  Desenvolvimento Emocional e Cognitivo
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 px-3.5 py-2.5 rounded-2xl border border-reinado-sol/50 shadow-sm">
                <Clock className="w-5 h-5 text-reinado-limao-dark shrink-0" />
                <span className="text-xs sm:text-sm font-extrabold text-reinado-ink">
                  Visitas Exclusivas (30 em 30 min)
                </span>
              </div>
            </motion.div>

            {/* Botões de Ação Principal (Estilo Red Balloon + Visconde) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="btn-tangerina inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-fredoka font-bold text-lg tracking-wide cursor-pointer"
              >
                <Calendar className="w-6 h-6" />
                <span>Agendar Visita pelo WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenVideoModal()}
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white text-reinado-ink font-fredoka font-bold text-base border-2 border-reinado-celeste hover:bg-reinado-celeste-light transition-all shadow-sm cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-reinado-celeste text-white flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </span>
                <span>Tour em Vídeo pelo Colégio</span>
              </button>
            </motion.div>

            {/* Seletor Rápido de Turma (Pré-Qualificação Interativa) */}
            <div className="pt-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-reinado-slate mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-reinado-tangerina" />
                Clique na fase do seu filho para agendar atendimento exclusivo:
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {quickStages.map((stage) => {
                  const Icon = stage.icon;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => onOpenVisitModal({ serie: stage.id })}
                      className={`text-left p-3.5 rounded-2xl border-2 border-transparent transition-all shadow-sm hover:shadow-md cursor-pointer ${stage.lightBg}`}
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className={`w-7 h-7 rounded-xl ${stage.badgeBg} text-white flex items-center justify-center shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className={`font-fredoka font-bold text-sm ${stage.textColor}`}>
                          {stage.title}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-reinado-slate leading-snug">
                        {stage.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Vitrine Audiovisual Interativa (Vídeo + Fotos Autorizadas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.25rem] bg-white p-3 sm:p-4 shadow-2xl border-4 border-reinado-sol">
              {/* Imagem Principal / Preview do Vídeo Institucional */}
              <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/4.3] bg-reinado-celeste-light group">
                <img
                  src="./design/quem-somos.png"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80';
                  }}
                  alt="Crianças aprendendo com alegria no Colégio Reinado da Criança no Mariano Procópio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/80 via-reinado-ink/20 to-transparent" />

                {/* Botão Central de Vídeo Interativo */}
                <button
                  type="button"
                  onClick={() => onOpenVideoModal()}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white group/btn cursor-pointer"
                  aria-label="Assistir vídeo da rotina do Colégio Reinado da Criança"
                >
                  <span className="w-20 h-20 rounded-full bg-reinado-tangerina text-white flex items-center justify-center shadow-2xl border-4 border-white group-hover/btn:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-reinado-ink/85 backdrop-blur-md text-xs sm:text-sm font-fredoka font-bold border border-white/25">
                    ▶ Conheça nossa rotina em 1 minuto
                  </span>
                </button>

                {/* Rodapé do Card de Vídeo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg flex items-center justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-reinado-limao-dark">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Fotos & Vídeos Reais Autorizados
                    </span>
                    <p className="font-fredoka font-bold text-sm text-reinado-ink">
                      Pátio, Salas Temáticas, Horta e Brinquedoteca
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenVisitModal()}
                    className="px-3.5 py-2 rounded-xl bg-reinado-celeste text-white font-fredoka font-bold text-xs hover:bg-reinado-celeste-dark transition-colors shrink-0 cursor-pointer"
                  >
                    Visitar Agora
                  </button>
                </div>
              </div>

              {/* Selo Flutuante Superior: Inglês Todo Dia + Mini-Chef */}
              <div className="hidden sm:flex absolute -top-5 -left-6 bg-white rounded-2xl px-4 py-2.5 shadow-xl border-2 border-reinado-celeste items-center gap-2.5">
                <span className="text-2xl">🇬🇧</span>
                <div>
                  <p className="font-fredoka font-bold text-xs text-reinado-celeste-dark leading-none">
                    Iniciação Bilíngue
                  </p>
                  <p className="text-[11px] font-bold text-reinado-slate">
                    Imersão lúdica todos os dias
                  </p>
                </div>
              </div>

              {/* Selo Flutuante Inferior Direito: Horários Exclusivos */}
              <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-reinado-limao text-white rounded-2xl px-4 py-2.5 shadow-xl border-2 border-white items-center gap-2.5">
                <span className="text-2xl">👩‍🍳</span>
                <div>
                  <p className="font-fredoka font-bold text-xs leading-none">
                    Oficina de Mini-Chef & Horta
                  </p>
                  <p className="text-[11px] font-semibold text-white/95">
                    Alimentação saudável na prática
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

