import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Calendar,
} from 'lucide-react';
import { PequeMaskedImage } from './PequeShape';

export default function DepoimentosFamilias({ onOpenVisitModal }) {
  const instaTestimonials = [
    {
      name: 'Camila & Rodrigo Mendes',
      role: 'Pais da Helena (Berçário • Integral Humanizado)',
      avatar: 'CM',
      avatarBg: 'bg-reinado-celeste',
      text: 'Falar do Colégio Reinado da Criança é falar de amor, acolhimento, cuidado e acima de tudo respeito. Voltar ao trabalho depois da licença-maternidade só foi tranquilo porque encontramos o Tempo Integral Humanizado aqui no Mariano Procópio. Cada profissional chama nossa filha pelo nome com um carinho único!',
      tag: '#doreinadoparavida #marianoprocopio',
    },
    {
      name: 'Vanessa & Lucas Barcellos',
      role: 'Pais do Theo (Maternal III • Manhã)',
      avatar: 'VB',
      avatarBg: 'bg-reinado-tangerina',
      text: 'Nosso filho entrou no Reinado da Criança e fez uma adaptação acolhedora e segura. Com a Oficina de Mini-Chef na cozinha pedagógica e a Horta Comunitária, ele passou a comer frutas e legumes com alegria! E todos os dias chega em casa cantando músicas novas da Iniciação Bilíngue.',
      tag: '#ensinoafetivo #minichef #bilingue',
    },
    {
      name: 'Patrícia & Marcelo Zanetti',
      role: 'Pais do Davi (4º Ano • Ensino Fundamental I)',
      avatar: 'PZ',
      avatarBg: 'bg-reinado-limao',
      text: 'O Reinado da Criança tem um lugar muito especial no nosso coração no bairro Mariano Procópio. Além da base acadêmica fortíssima do 1º ao 5º ano, o programa socioemocional "Líder em Mim" desenvolveu a autonomia, a empatia e a segurança do Davi para encarar qualquer desafio!',
      tag: '#lideremmim #fundamental1 #reinadodacrianca',
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-16 lg:py-24 bg-[#D4DC36] relative overflow-hidden border-y-4 border-reinado-ink"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Topo estilo Slide 10 da Pequê: Título + 5 Estrelas + Foto Trapézio à Esquerda e Card Instagram à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          {/* Esquerda: Título "O que as famílias falam sobre nós." + 5 Estrelas + Foto Trapézio */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-fredoka text-4xl sm:text-5xl font-bold text-reinado-ink leading-[1.1]">
              O que as famílias
              <br />
              falam sobre nós.
            </h2>

            {/* 5 Estrelas Douradas (idêntico ao Slide 10 da Pequê) */}
            <div className="inline-flex items-center gap-1.5 bg-reinado-ink px-4 py-2 rounded-full shadow-md">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FFC700] text-[#FFC700]"
                />
              ))}
              <span className="ml-2 text-xs font-fredoka font-bold text-white">
                5.0 • Famílias do Mariano Procópio
              </span>
            </div>

            <div className="bg-white p-3 rounded-[2.25rem] shadow-xl border-2 border-reinado-ink">
              <PequeMaskedImage
                src="./assets/hero-criancas.png"
                fallbackSrc="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80"
                alt="Crianças felizes no Colégio Reinado da Criança"
                variant="trapezoidRight"
                viewBox="0 0 495 485"
                badgeText="❤️ Amor e Confiança das Famílias"
                badgeColor="#FF6B00"
              />
            </div>
          </div>

          {/* Direita: Cards de Depoimento estilo Post de Instagram (Slides 10 e 11 da Pequê) */}
          <div className="lg:col-span-7 grid gap-6">
            {instaTestimonials.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="peque-insta-card p-6 sm:p-7"
              >
                {/* Cabeçalho do Post: Avatar Circular + Nome + Subtítulo */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                  <div
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${item.avatarBg} text-white font-fredoka font-bold text-lg flex items-center justify-center border-2 border-reinado-ink shrink-0`}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="font-fredoka text-lg sm:text-xl font-bold text-reinado-ink leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-reinado-slate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Corpo do Depoimento */}
                <div className="py-4 space-y-2">
                  <p className="text-sm sm:text-base text-reinado-ink font-semibold leading-relaxed">
                    "{item.text}"
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-reinado-celeste-dark">
                    {item.tag}
                  </p>
                </div>

                {/* Barra Inferior Estilo Instagram (Coração Vermelho, Comentário, Enviar, Salvar) */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-reinado-ink">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF3131]">
                      <Heart className="w-5 h-5 fill-[#FF3131] text-[#FF3131]" />
                      Aprovado pela Família
                    </span>
                    <MessageCircle className="w-5 h-5 text-reinado-ink/70" />
                    <Send className="w-5 h-5 text-reinado-ink/70" />
                  </div>
                  <Bookmark className="w-5 h-5 text-reinado-ink" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Faixa de Chamada para Visita dentro do Bloco Verde-Limão */}
        <div className="mt-8 bg-reinado-ink text-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div>
            <p className="font-fredoka text-xl sm:text-2xl font-bold text-reinado-sol">
              Viva essa mesma tranquilidade para o seu filho no Mariano Procópio!
            </p>
            <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
              Visitas guiadas individuais de segunda a sexta, das 08h30 às 11h e das 14h às 16h30 (a cada 30 min).
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenVisitModal()}
            className="peque-cta-pill px-7 py-3.5 rounded-full font-fredoka font-bold text-base flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Fale conosco.</span>
          </button>
        </div>
      </div>
    </section>
  );
}
