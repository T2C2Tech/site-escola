import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { PEQUE_PATHS, PequeMaskedImage, PequeRibbonHeader } from './PequeShape';

export default function ProjetosExtracurriculares({ onOpenVisitModal, onOpenVideoModal }) {
  return (
    <section id="projetos" className="py-12 lg:py-20 space-y-16 lg:space-y-24 peque-canvas">
      {/* =====================================================================
          SLIDE 5 DA PEQUÊ: Oficina de Mini-Chef & Educação Alimentar
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Esquerda: Faixa Angular Laranja + Foto Trapézio Mini-Chef */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-6"
          >
            <PequeRibbonHeader
              subtitle="Cozinha Pedagógica Experimental"
              title="Oficina de Mini-Chef & Educação Alimentar Saudável."
              fill="#FF6B00"
              textColor="#FFFFFF"
            />

            <PequeMaskedImage
              src="./assets/minichef-cozinha.png"
              fallbackSrc="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
              alt="Oficina de Mini-Chef no Colégio Reinado da Criança"
              variant="trapezoidRight"
              viewBox="0 0 495 485"
              badgeText="👩‍🍳 Oficina de Mini-Chef na Prática"
              badgeColor="#65C11F"
            />
          </motion.div>

          {/* Direita: Card Trapézio + Benefícios da Alimentação Saudável */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-11 shadow-xl border-4 border-reinado-sol space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-reinado-tangerina-light text-reinado-tangerina-dark font-fredoka font-bold text-xs uppercase">
                Nutrição & Autonomia
              </span>
              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                Aprender o valor dos alimentos colocando a mão na massa!
              </h3>
              <p className="text-base sm:text-lg text-reinado-slate font-bold leading-relaxed">
                Em nossa <strong>Cozinha Pedagógica</strong>, as crianças exploram aromas, cores e sabores de frutas, legumes e receitas saudáveis colhidas na própria <strong>Horta Comunitária</strong> da escola.
              </p>
              <ul className="space-y-2.5">
                {[
                  'Vence a seletividade alimentar com alegria e estímulo coletivo',
                  'Trabalha medidas, matemática, ciências e higiene na prática',
                  'Cardápio nutritivo pensado para os alunos do Tempo Integral',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-reinado-ink">
                    <CheckCircle2 className="w-5 h-5 text-reinado-limao shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE 6 DA PEQUÊ: "Formando cidadãos bilíngues" (Vídeo 1:1 + Trapézio Azul-Celeste)
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Esquerda: Faixa Angular + Card Quadrado 1:1 com Vídeo Interativo (idêntico ao Slide 6 da Pequê) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <PequeRibbonHeader
              subtitle="Iniciação Bilíngue Todos os Dias"
              title="Formando cidadãos bilíngues"
              fill="#FFC700"
              textColor="#0F2537"
            />

            {/* Card Branco Quadrado com Player de Vídeo 1:1 (como VAGIBzQwxYg em peque.com.br) */}
            <div className="bg-white rounded-[2.25rem] p-5 sm:p-7 shadow-xl border-2 border-reinado-celeste/30">
              <div className="relative aspect-square max-w-[380px] mx-auto rounded-[1.75rem] overflow-hidden bg-reinado-ink group">
                <video
                  muted
                  loop
                  autoPlay
                  playsInline
                  poster="./assets/hero-criancas.png"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                >
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-teacher-and-kids-in-a-classroom-4706-large.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-reinado-ink/80 via-transparent to-transparent" />

                <button
                  type="button"
                  onClick={() =>
                    onOpenVideoModal?.({
                      title: 'Iniciação Bilíngue Diária — Colégio Reinado da Criança',
                    })
                  }
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white cursor-pointer"
                >
                  <span className="w-16 h-16 rounded-full bg-reinado-tangerina text-white flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-white ml-0.5" />
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-reinado-ink/85 text-xs font-fredoka font-bold">
                    🇬🇧 Assistir Aula Bilíngue com Áudio
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Direita: Grande Trapézio Azul-Celeste (#0096FF) com Texto Branco (idêntico ao Slide 6 da Pequê) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 relative min-h-[450px] flex items-center"
          >
            <svg
              viewBox="0 0 410 495"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_18px_32px_rgba(0,150,255,0.25)]"
            >
              <path d={PEQUE_PATHS.tallVertical} fill="#0096FF" />
            </svg>

            <div className="relative z-10 p-8 sm:p-12 space-y-5 text-white">
              <span className="inline-block px-3.5 py-1 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs uppercase">
                🇬🇧 Imersão Lúdica Diária
              </span>

              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold leading-tight">
                O inglês vivido todos os dias com naturalidade, música e encantamento!
              </h3>

              <p className="text-base sm:text-xl font-bold text-white/95 leading-relaxed">
                Acreditamos que o inglês é para a vida toda! Por isso, aqui no <strong>Colégio Reinado da Criança</strong>, nossos alunos vivenciam a língua inglesa <strong>diariamente</strong> de maneira lúdica, envolvente e imersiva — aproveitando a janela ideal da infância.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="px-7 py-3.5 rounded-full bg-reinado-sol hover:bg-white text-reinado-ink font-fredoka font-bold text-base shadow-lg transition-colors cursor-pointer"
                >
                  Conhecer o Projeto Bilíngue →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          SLIDES 7, 8 E 9 DA PEQUÊ: Psicomotricidade, Horta Comunitária e Líder em Mim
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Slide 7: Movimento, Psicomotricidade & Horta Comunitária */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 relative min-h-[420px] flex items-center">
            <svg
              viewBox="0 0 495 485"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_18px_28px_rgba(101,193,31,0.22)]"
            >
              <path d={PEQUE_PATHS.trapezoidRight} fill="#65C11F" />
            </svg>

            <div className="relative z-10 p-8 sm:p-12 space-y-4 text-white">
              <span className="inline-block px-3.5 py-1 rounded-full bg-reinado-ink text-reinado-sol font-fredoka font-bold text-xs uppercase">
                🌱 Natureza & Movimento
              </span>
              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold leading-tight">
                Horta Comunitária & Psicomotricidade
              </h3>
              <p className="text-base sm:text-xl font-bold text-white/95 leading-relaxed">
                Estimulamos a integração das funções motoras, sensoriais e socioambientais a partir de movimentos, circuitos psicomotores, brincadeiras intencionais e o cuidado diário com a nossa <strong>Horta Comunitária</strong>.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PequeMaskedImage
              src="./assets/horta-comunitaria.png"
              fallbackSrc="https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1000&q=80"
              alt="Horta Comunitária e Psicomotricidade no Colégio Reinado da Criança"
              variant="trapezoidLeft"
              viewBox="0 0 460 495"
              badgeText="🌱 Horta Comunitária & Psicomotricidade"
              badgeColor="#0096FF"
            />
          </div>
        </div>

        {/* Slide 8: Educação Socioemocional (Líder em Mim) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <PequeMaskedImage
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
              fallbackSrc="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
              alt="Educação Socioemocional Líder em Mim"
              variant="trapezoidRight"
              viewBox="0 0 495 485"
              badgeText="💛 Programa Socioemocional Líder em Mim"
              badgeColor="#FF6B00"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative min-h-[420px] flex items-center">
            <svg
              viewBox="0 0 460 495"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_18px_28px_rgba(255,199,0,0.28)]"
            >
              <path d={PEQUE_PATHS.trapezoidLeft} fill="#FFC700" />
            </svg>

            <div className="relative z-10 p-8 sm:p-12 lg:pl-16 space-y-4 text-reinado-ink">
              <span className="inline-block px-3.5 py-1 rounded-full bg-reinado-ink text-white font-fredoka font-bold text-xs uppercase">
                👑 Protagonismo Infantil
              </span>
              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold leading-tight">
                Educação Socioemocional ("Líder em Mim")
              </h3>
              <p className="text-base sm:text-xl font-bold text-reinado-ink/90 leading-relaxed">
                Desenvolvemos a autoconfiança, empatia, escuta ativa, memória, concentração, autodisciplina e o respeito pelo próximo — formando crianças emocionalmente seguras para a vida.
              </p>
              <button
                type="button"
                onClick={() => onOpenVisitModal()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-reinado-tangerina text-white font-fredoka font-bold text-sm shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Fale conosco no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
