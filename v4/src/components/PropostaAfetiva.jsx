import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sun, Clock, ShieldCheck, Calendar } from 'lucide-react';
import { PEQUE_PATHS, PequeMaskedImage, PequeRibbonHeader } from './PequeShape';

export default function PropostaAfetiva({ onOpenVisitModal }) {
  return (
    <section id="sobre" className="py-10 lg:py-16 space-y-16 lg:space-y-24 peque-canvas">
      {/* =====================================================================
          SLIDE 2 DA PEQUÊ: Foto Trapézio à Esquerda + Grande Trapézio Amarelo-Sol à Direita
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Esquerda: Foto Recortada em Trapézio Arredondado */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <PequeMaskedImage
              src="./assets/bercario-afetivo.png"
              fallbackSrc="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
              alt="Acolhimento afetivo no Colégio Reinado da Criança"
              variant="tallVertical"
              viewBox="0 0 410 495"
              badgeText="💛 Ensino Afetivo no Mariano Procópio"
              badgeColor="#FF6B00"
            />
          </motion.div>

          {/* Direita: Grande Trapézio Amarelo-Sol (#FFC700) idêntico ao Slide 2 da Pequê */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 relative min-h-[430px] sm:min-h-[490px] flex items-center"
          >
            <svg
              viewBox="0 0 460 495"
              preserveAspectRatio="none"
              className="w-full h-full absolute inset-0 drop-shadow-[0_18px_32px_rgba(255,199,0,0.28)]"
            >
              <path d={PEQUE_PATHS.trapezoidLeft} fill="#FFC700" />
            </svg>

            <div className="relative z-10 p-8 sm:p-12 lg:pl-16 space-y-5 text-reinado-ink">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-reinado-ink text-reinado-sol font-fredoka font-bold text-xs uppercase">
                <Heart className="w-3.5 h-3.5 fill-reinado-tangerina text-reinado-tangerina" />
                Nosso Diferencial Principal
              </span>

              <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.15]">
                No Reinado da Criança, cada criança é chamada pelo nome.
              </h2>

              <p className="text-base sm:text-xl font-bold text-reinado-ink/90 leading-relaxed">
                Oferecemos no bairro <strong>Mariano Procópio</strong> um ambiente acolhedor, familiar e estimulante para o desenvolvimento integral (emocional, social e cognitivo), do <strong>Berçário (4 meses)</strong> até o <strong>5º ano do Ensino Fundamental I</strong>.
              </p>

              {/* Assinatura Gráfica Lúdica inferior (como no Slide 2 da Pequê) */}
              <div className="pt-3 flex items-center justify-between gap-4 flex-wrap">
                <svg className="w-40 h-8 text-reinado-tangerina" viewBox="0 0 200 40" fill="none">
                  <path
                    d="M6 28 C40 6, 70 36, 105 16 C135 2, 165 34, 194 14"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 35 C50 18, 80 38, 115 24 C145 12, 170 36, 190 24"
                    stroke="#0096FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                <button
                  type="button"
                  onClick={() => onOpenVisitModal()}
                  className="px-6 py-3 rounded-full bg-reinado-ink hover:bg-reinado-tangerina text-white font-fredoka font-bold text-sm transition-colors shadow-md cursor-pointer"
                >
                  Fale conosco →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE 3 DA PEQUÊ: Missão em Dupla Coluna com Faixas Angulares Laranja e Amarela
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Coluna Esquerda: Ribbon Laranja-Tangerina no Topo + Foto Trapézio embaixo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <PequeRibbonHeader
              subtitle="Nossa Missão no Mariano Procópio"
              title="Nossa Missão é encantar e fazer a diferença na vida de todos que passam pelo Reinado."
              fill="#FF6B00"
              textColor="#FFFFFF"
            />

            <PequeMaskedImage
              src="./assets/hero-criancas.png"
              fallbackSrc="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
              alt="Crianças aprendendo juntas no Colégio Reinado da Criança"
              variant="trapezoidRight"
              viewBox="0 0 495 485"
              badgeText="✨ Tradição Acolhedora + Estrutura Moderna"
              badgeColor="#0096FF"
            />
          </motion.div>

          {/* Coluna Direita: Foto Trapézio no Topo + Bloco Trapézio Amarelo-Sol embaixo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            <PequeMaskedImage
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
              fallbackSrc="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
              alt="Desenvolvimento emocional, social e cognitivo"
              variant="trapezoidLeft"
              viewBox="0 0 460 495"
              badgeText="🌱 Desenvolvimento Emocional, Social e Cognitivo"
              badgeColor="#65C11F"
            />

            <div className="relative">
              <svg
                viewBox="0 0 495 210"
                preserveAspectRatio="none"
                className="w-full h-full absolute inset-0 drop-shadow-[0_14px_24px_rgba(255,199,0,0.25)]"
              >
                <path
                  d="M21.19,48.65c4.19,11.94,17.72,23.91,30.09,26.6l419.86,41.43c12.36,2.69,22.47-5.46,22.47-18.11V23c0-12.65-10.35-23-23-23h-454C3.96,0-2.96,9.77,1.22,21.7L21.19,48.65z"
                  fill="#FFC700"
                  transform="scale(1, 1.75)"
                />
              </svg>
              <div className="relative z-10 p-7 sm:p-9 bg-[#FFC700] rounded-[2rem] shadow-lg border-2 border-reinado-ink/10">
                <p className="font-fredoka text-xl sm:text-2xl font-bold text-reinado-ink leading-snug">
                  Possibilitar à criança viver a infância plena, preparando-a com segurança emocional e excelência para todos os níveis de ensino.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE 4 DA PEQUÊ: "No Reinado é assim" — Turno Parcial e Tempo Integral Humanizado
      ====================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Esquerda: Faixa Azul-Celeste "No Reinado é assim" + Foto Trapézio */}
          <div className="lg:col-span-6 space-y-6">
            <PequeRibbonHeader
              subtitle="Rotina Flexível para a Família"
              title="No Reinado é assim"
              fill="#0096FF"
              textColor="#FFFFFF"
            />

            <PequeMaskedImage
              src="https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1000&q=80"
              fallbackSrc="https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1000&q=80"
              alt="Tempo Integral Humanizado no Colégio Reinado da Criança"
              variant="trapezoidRight"
              viewBox="0 0 495 485"
              badgeText="☀️ Tempo Integral Humanizado"
              badgeColor="#FF6B00"
            />
          </div>

          {/* Direita: Texto Editorial Grande + Cards dos Turnos (Manhã, Tarde e Integral) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-[2.25rem] p-7 sm:p-10 shadow-xl border-2 border-reinado-ink/10 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-reinado-limao-light text-reinado-limao-dark font-fredoka font-bold text-xs uppercase">
                <Sun className="w-4 h-4" /> Paz no Coração dos Pais
              </span>

              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold text-reinado-ink leading-tight">
                Oferecemos opções de{' '}
                <span className="text-reinado-celeste">turno parcial</span> e{' '}
                <span className="text-reinado-tangerina">tempo integral humanizado</span>, adaptadas às necessidades das famílias.
              </h3>

              <p className="text-base sm:text-lg text-reinado-slate font-bold leading-relaxed">
                Sabemos o quanto é importante trabalhar sabendo que seu filho está bem cuidado, alimentado com carinho, aprendendo inglês, brincando no pátio e descansando no tempo certo.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-reinado-celeste-light border-2 border-reinado-celeste/30">
                  <Clock className="w-5 h-5 text-reinado-celeste-dark mb-1.5" />
                  <p className="font-fredoka font-bold text-base text-reinado-ink">Turno Manhã</p>
                  <p className="text-xs font-bold text-reinado-slate mt-0.5">
                    Educação Infantil & Fundamental I (1º ao 5º ano)
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-reinado-sol-light border-2 border-reinado-sol">
                  <Clock className="w-5 h-5 text-reinado-sol-dark mb-1.5" />
                  <p className="font-fredoka font-bold text-base text-reinado-ink">Turno Tarde</p>
                  <p className="text-xs font-bold text-reinado-slate mt-0.5">
                    Educação Infantil & Fundamental I (1º ao 5º ano)
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-reinado-limao-light border-2 border-reinado-limao">
                  <ShieldCheck className="w-5 h-5 text-reinado-limao-dark mb-1.5" />
                  <p className="font-fredoka font-bold text-base text-reinado-ink">Integral</p>
                  <p className="text-xs font-bold text-reinado-slate mt-0.5">
                    Berçário (4m+) ao Maternal III com oficinas e descanso
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenVisitModal({ turno: 'Integral Humanizado' })}
                className="w-full py-4 rounded-full bg-reinado-tangerina hover:bg-reinado-tangerina-dark text-white font-fredoka font-bold text-base flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Consultar Vagas no Turno do Meu Filho</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
