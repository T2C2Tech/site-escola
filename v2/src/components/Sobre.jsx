import React from 'react';
import { motion } from 'framer-motion';
import WaveTransition from './WaveTransition';

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-28 bg-white overflow-hidden">
      {/* Detalhes lúdicos no fundo */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 text-4xl select-none pointer-events-none opacity-40"
      >
        ☀️
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 left-10 text-4xl select-none pointer-events-none opacity-40"
      >
        🌱
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center">
        {/* Composição de Fotos com Efeito Hover Dinâmico */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-xl"
        >
          {/* Foto Principal */}
          <div className="relative rounded-[2.8rem] overflow-hidden shadow-2xl shadow-[#E63946]/15">
            <img
              src="https://images.unsplash.com/photo-1544717305-996b815c338c?auto=format&fit=crop&w=900&q=80"
              alt="Educadora contando histórias com afeto na Borboletinha"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-103"
            />
          </div>

          {/* Foto Secundária 1 com Flutuação */}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [4, 6, 4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-4 hidden aspect-[3/4] w-[40%] rounded-3xl overflow-hidden shadow-2xl shadow-[#2B90D9]/30 transition-transform duration-300 sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Crianças em atividade lúdica no fundamental"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Foto Secundária 2 com Flutuação Inversa */}
          <motion.div
            animate={{ y: [0, 8, 0], rotate: [-5, -3, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-8 -left-4 hidden aspect-square w-[38%] rounded-3xl overflow-hidden shadow-2xl shadow-[#2E9A68]/30 transition-transform duration-300 sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=800&q=80"
              alt="Bebês brincando com segurança no berçário"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Selinho de tradição */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6C343] p-4 text-center shadow-2xl rotate-[-8deg] pointer-events-none"
          >
            <p className="font-quicksand font-black text-2xl text-[#2C3E50]">15+</p>
            <p className="font-quicksand text-[10px] font-black uppercase text-[#755700]">Anos de Amor</p>
          </motion.div>
        </motion.div>

        {/* Textos Institucionais */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#cee5ff] px-4 py-1">
            <span className="text-base">💛</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#00456e]">
              Nossa Proposta Pedagógica
            </span>
          </div>

          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50] leading-tight">
            Uma extensão do abraço de casa, com o estímulo que a infância precisa!
          </h2>

          <p className="mt-4 font-quicksand text-xl font-bold text-[#E63946]">
            Escola de Bairro com Alma Familiar & Segurança Rigorosa
          </p>
          <p className="text-xs font-extrabold tracking-wider text-[#6C7A89] uppercase">
            Autorizada pelo CEE-RJ • Registro Oficial em Educação Infantil e Ensino Fundamental
          </p>

          {/* Lista com Cores e Microinterações */}
          <ul className="mt-8 space-y-4">
            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 rounded-2xl bg-[#fff2f2] p-4 shadow-sm transition-transform"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E63946] text-white font-bold text-lg shadow-sm">
                1
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-base">Sociointeracionismo com Afeto</p>
                <p className="font-nunito text-sm text-[#5b403f]">A criança aprende quando sente confiança, brinca com amigos e investiga a natureza ao redor.</p>
              </div>
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 rounded-2xl bg-[#edf4ff] p-4 shadow-sm transition-transform"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2B90D9] text-white font-bold text-lg shadow-sm">
                2
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-base">Professoras Apaixonadas e Especializadas</p>
                <p className="font-nunito text-sm text-[#5b403f]">Equipe com formação em Pedagogia, Psicopedagogia e Neuroeducação infantil contínua.</p>
              </div>
            </motion.li>

            <motion.li
              whileHover={{ x: 6 }}
              className="flex items-start gap-4 rounded-2xl bg-[#fff8ea] p-4 shadow-sm transition-transform"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6C343] text-[#2C3E50] font-bold text-lg shadow-sm">
                3
              </span>
              <div>
                <p className="font-quicksand font-black text-[#2C3E50] text-base">Transição Leve para o 1º ao 5º Ano</p>
                <p className="font-nunito text-sm text-[#5b403f]">Alfabetização natural sem estresse, incentivando o gosto pela leitura, escrita e matemática prática.</p>
              </div>
            </motion.li>
          </ul>

          <div className="mt-6 flex items-center gap-3.5 rounded-2xl bg-gradient-to-r from-[#edf4ff] to-[#cee5ff] p-4 text-sm text-[#00456e] font-bold shadow-sm">
            <span className="text-2xl">🏡</span>
            <span>Espaço estritamente acolhedor com luz solar, árvores frutíferas e pássaros cantando no pátio.</span>
          </div>
        </motion.div>
      </div>

      {/* 4 Cards de Valor com Stagger */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: '🎓', title: 'Ensino Forte & Criativo', desc: 'Raciocínio lógico, biblioteca com historinhas e projetos temáticos.', bg: 'from-white to-[#ffdad8]/40' },
          { icon: '❤️', title: 'Olhar Singular', desc: 'Conhecemos cada criança pelo nome, gostos, ritmo e necessidades.', bg: 'from-white to-[#cee5ff]/40' },
          { icon: '🔒', title: 'Ambiente 100% Protegido', desc: 'Portaria controlada, câmeras nos pátios e protocolos rigorosos.', bg: 'from-white to-[#EAF6EE]/60' },
          { icon: '🍎', title: 'Comidinha de Verdade', desc: 'Cardápio colorido, frutas da época, verduras frescas e zero fritura.', bg: 'from-white to-[#ffdf9b]/40' }
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`rounded-3xl bg-gradient-to-b ${c.bg} p-6 shadow-md hover:shadow-xl transition-all`}
          >
            <span className="text-3xl block mb-2">{c.icon}</span>
            <p className="font-quicksand text-base font-black text-[#2C3E50]">{c.title}</p>
            <p className="mt-2 text-xs font-semibold text-[#6C7A89] leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Onda de Transição para a seção escura de Certificados */}
      <WaveTransition fill="#203243" position="bottom" variant={3} />
    </section>
  );
}
