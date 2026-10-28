import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WaveTransition from './WaveTransition';

const ciclos = [
  {
    titulo: 'Berçário Encantado',
    idade: '4 aos 18 meses',
    desc: 'Bebês acolhidos com carinho, lactário esterilizado, soninho relaxante, estimulação psicomotora e musicoterapia diária.',
    corBg: 'from-[#ffdad8] to-[#ffb3b1]',
    corTexto: 'text-[#b7102a]',
    emoji: '🍼',
    badge: 'Cuidado & Ternura',
    imagem: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Maternal I & II',
    idade: '1 ano e meio a 3 anos',
    desc: 'Primeiros passinhos firmes, desfralde afetuoso, linguagem, exploração da horta e muitas brincadeiras de roda ao ar livre.',
    corBg: 'from-[#cee5ff] to-[#98cbff]',
    corTexto: 'text-[#00456e]',
    emoji: '🧸',
    badge: 'Descoberta do Mundo',
    imagem: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Educação Infantil (Pré I e II)',
    idade: '4 e 5 anos',
    desc: 'Letramento lúdico, historinhas mágicas, imersão em inglês, matemática com blocos e desenvolvimento socioemocional.',
    corBg: 'from-[#ffdf9b] to-[#f2bf40]',
    corTexto: 'text-[#5b4300]',
    emoji: '🎨',
    badge: 'Imaginação & Letramento',
    imagem: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Fundamental 1 (1º ao 5º Ano)',
    idade: '6 aos 10 anos',
    desc: 'Construção da autonomia, raciocínio lógico, projetos científicos, literatura criativa e fluência com apoio individualizado.',
    corBg: 'from-[#EAF6EE] to-[#c1e7ce]',
    corTexto: 'text-[#1c6342]',
    emoji: '🚀',
    badge: 'Excelência & Protagonismo',
    imagem: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Turno Integral Flexível',
    idade: 'Berçário ao 5º Ano',
    desc: 'Rotina prazerosa com almoço e lanches preparados por nutricionista, banho, lição de casa orientada e muitas oficinas.',
    corBg: 'from-[#EFEBFA] to-[#d6cff1]',
    corTexto: 'text-[#3b3266]',
    emoji: '☀️',
    badge: 'Tranquilidade para os Pais',
    imagem: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
  {
    titulo: 'Oficinas & Atividades Extras',
    idade: 'Para Todas as Idades',
    desc: 'Robótica divertida com blocos, capoeira kids, ballet, teatro de fantoches, judô e horta ecológica sustentável.',
    corBg: 'from-[#ffdad8] to-[#ffdf9b]',
    corTexto: 'text-[#b7102a]',
    emoji: '🎭',
    badge: 'Arte, Corpo e Movimento',
    imagem: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
  }
];

const condicoesEducacionais = [
  '🍓 Alimentação 100% Saudável e Colorida', '🧩 Desenvolvimento Psicomotor Fino', '🎵 Musicalização e Bandinha Rítmica',
  '🍼 Lactário Esterilizado com Protocolo Rígido', '🗣️ Acompanhamento Fonoaudiológico Escolar', '🇬🇧 Inglês Lúdico com Músicas',
  '📚 Cantinho da Leitura e Biblioteca Viva', '🌱 Horta Pedagógica que as Crianças Cuidam', '🤖 Robótica e Pensamento Computacional',
  '🎪 Pátio Amplo com Brinquedão Antichoque', '🔬 Experimentos Científicos Infantis', '🎭 Expressão Teatral e Dança',
  '👩‍⚕️ Professores Certificados em Primeiros Socorros', '🩺 Visita Regular de Pediatra e Nutricionista', '❤️ Turmas Acolhedoras com Poucos Alunos'
];

export default function Segmentos() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section id="segmentos" className="relative bg-[#edf4ff] pt-24 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        {/* Cabeçalho com animação ao rolar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ffdf9b] px-4 py-1 mb-4 shadow-sm">
            <span className="text-base">🎈</span>
            <span className="font-quicksand font-extrabold text-xs uppercase tracking-wider text-[#755700]">
              Turminhas por Faixa Etária
            </span>
          </div>

          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Uma fase para cada descoberta, <br />
            <span className="text-[#E63946]">uma cor</span> para cada alegria!
          </h2>
          <p className="mt-4 font-nunito text-base sm:text-lg text-[#5b403f] leading-relaxed">
            Do primeiro soninho no Berçário aos projetos investigativos do 5º ano, criamos um caminho de aprendizado repleto de afeto, autonomia e sorrisos.
          </p>
        </motion.div>

        {/* Grid de Cards com Stagger Suave */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:px-0">
          {ciclos.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group w-[85%] shrink-0 snap-start overflow-hidden rounded-[2rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 md:w-auto flex flex-col"
            >
              {/* Topo com Foto e Badge Alegre */}
              <div className="overflow-hidden relative h-52">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Emoji Flutuante */}
                <div className="absolute top-4 left-4 h-11 w-11 rounded-2xl bg-white shadow-md flex items-center justify-center text-xl">
                  {item.emoji}
                </div>

                {/* Badge da Turma */}
                <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 font-quicksand text-xs font-black text-[#2C3E50] shadow-md backdrop-blur-sm">
                  {item.idade}
                </span>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className={`inline-block rounded-lg px-2.5 py-0.5 font-quicksand text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r ${item.corBg} ${item.corTexto} mb-2`}>
                    {item.badge}
                  </span>
                  <h3 className="font-quicksand text-2xl font-black text-[#2C3E50] group-hover:text-[#E63946] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="mt-2.5 font-nunito text-sm leading-relaxed text-[#5b403f] font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Botão de Saiba Mais */}
                <div className="mt-6 pt-4 flex items-center justify-between">
                  <a
                    href="#visita"
                    className="font-quicksand font-black text-xs text-[#2B90D9] group-hover:text-[#E63946] transition-colors flex items-center gap-1.5"
                  >
                    Conhecer a rotina deste ciclo ➜
                  </a>
                  <span className="h-2 w-2 rounded-full bg-[#E63946] group-hover:scale-150 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Botão de Expansão */}
        <div className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-black text-[#E63946] shadow-md hover:shadow-xl transition-all hover:bg-[#E63946] hover:text-white"
            aria-expanded={drawerOpen}
          >
            <span>{drawerOpen ? 'Ocultar diferenciais da nossa matriz' : 'Ver tudo que está incluído na mensalidade'}</span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${drawerOpen ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>

        {/* Gaveta Expansível com Animação Fluida */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 rounded-[2.5rem] bg-white p-8 sm:p-10 shadow-xl">
                <p className="mb-6 font-quicksand text-sm font-black tracking-widest text-[#E63946] uppercase text-center">
                  ✨ Vantagens e cuidados sem cobranças surpresas
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {condicoesEducacionais.map((cond, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="rounded-2xl bg-[#edf4ff] px-4 py-2.5 font-nunito text-xs sm:text-sm font-bold text-[#00456e] shadow-sm hover:scale-105 hover:bg-[#ffdf9b] hover:text-[#755700] transition-all cursor-default"
                    >
                      {cond}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Onda de Transição para o Sobre */}
      <WaveTransition fill="#ffffff" position="bottom" variant={2} />
    </section>
  );
}
