import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, Mail, CheckCircle2 } from 'lucide-react';
import WaveTransition from './WaveTransition';

export default function AgendamentoVisita() {
  const [formData, setFormData] = useState({
    nomeResponsavel: '',
    nomeCrianca: '',
    idadeCiclo: 'bercario',
    telefone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="visita" className="relative pt-24 pb-32 bg-gradient-to-b from-[#edf4ff] via-white to-[#edf4ff]/60 overflow-hidden">
      {/* Decorações divertidas */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-8 text-3xl opacity-40 select-none pointer-events-none"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-28 right-8 text-3xl opacity-40 select-none pointer-events-none"
      >
        🌟
      </motion.div>

      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF6EE] px-4 py-1 mb-3 shadow-sm">
            <span className="text-base">📅</span>
            <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#1c6342]">
              Portas Abertas para Você
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Venha nos fazer uma visita encantada!
          </h2>
          <p className="mt-3 font-nunito text-[#5b403f] text-base sm:text-lg">
            Adoramos receber famílias com um café quentinho para apresentar as salas, a equipe pedagógica e tirar dúvidas com calma.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Card com Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.8rem] bg-white p-7 shadow-2xl md:p-12 relative overflow-hidden"
          >
            <div className="mb-8 flex items-center justify-between border-b border-[#2B90D9]/15 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cee5ff] text-2xl">
                  💌
                </span>
                <div>
                  <h3 className="font-quicksand text-xl font-black text-[#2C3E50]">Agende seu tour individual</h3>
                  <p className="text-xs font-bold text-[#6C7A89]">Atendimento exclusivo com a coordenação</p>
                </div>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-[#ffdf9b] px-3.5 py-1 text-xs font-black text-[#755700]">
                Sem Compromisso ✨
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-[#EAF6EE] p-8 text-center text-[#1c6342]"
              >
                <CheckCircle2 className="mx-auto h-16 w-16 mb-4 text-[#2E9A68]" />
                <h3 className="font-quicksand text-2xl font-black">Oba! Solicitação Recebida com Amor!</h3>
                <p className="mt-2.5 font-nunito text-base leading-relaxed">
                  Nossa secretária pedagógica vai chamar você no WhatsApp em instantes para marcar o melhor dia e horário.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      Seu Nome Completo (Pai / Mãe / Responsável)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={formData.nomeResponsavel}
                      onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63946] shadow-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      Nome e Idade da Criança
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Theo (2 anos)"
                      value={formData.nomeCrianca}
                      onChange={(e) => setFormData({ ...formData, nomeCrianca: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63946] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      Turminha de Interesse
                    </label>
                    <select
                      value={formData.idadeCiclo}
                      onChange={(e) => setFormData({ ...formData, idadeCiclo: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-bold text-[#2C3E50] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B90D9] shadow-sm transition-all"
                    >
                      <option value="bercario">🍼 Berçário (4 a 18 meses)</option>
                      <option value="maternal">🧸 Maternal I e II (1 ano e meio a 3 anos)</option>
                      <option value="infantil">🎨 Educação Infantil - Pré I e II (4 e 5 anos)</option>
                      <option value="fundamental">🚀 Ensino Fundamental 1 (1º ao 5º Ano)</option>
                      <option value="integral">☀️ Período Integral Completo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(21) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2E9A68] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 rounded-2xl bg-gradient-to-r from-[#E63946] to-[#db313f] py-4 text-center font-quicksand font-black text-base text-white shadow-xl shadow-[#E63946]/30 transition-all"
                  >
                    Confirmar e Agendar Minha Visita 🦋
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2E9A68] to-[#257d54] px-7 py-4 font-quicksand font-black text-base text-white shadow-lg shadow-[#2E9A68]/20 transition-all"
                  >
                    <MessageCircle className="h-5 w-5" /> Falar Direto
                  </motion.a>
                </div>
              </form>
            )}

            <p className="mt-6 flex items-center gap-2 text-xs font-bold text-[#6C7A89]">
              <Clock className="h-4 w-4 text-[#2B90D9]" />
              Horário de visitas: Segunda a sexta, das 08h00 às 18h00. Estacionamento fácil.
            </p>
          </motion.div>

          {/* Sidebar Lúdica */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="relative isolate flex flex-col justify-between overflow-hidden rounded-[2.8rem] bg-gradient-to-br from-[#203243] to-[#0d1d2b] p-8 text-white shadow-2xl"
          >
            <div>
              <div className="border-b border-white/10 pb-6 text-center">
                <span className="text-5xl block mb-2 animate-bounce">📱</span>
                <p className="font-quicksand text-2xl font-black">Nossa Escolinha nas Redes</p>
                <p className="mt-2 text-xs text-white/80 leading-relaxed font-medium">
                  Acompanhe no Instagram os projetos, as receitas da nutricionista e a rotina alegre dos nossos pequenos!
                </p>
              </div>

              <nav className="mt-6 flex flex-col gap-3.5" aria-label="Redes Sociais">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 text-sm font-black text-white hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram (@borboletinhaencantada)
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 text-sm font-black text-white hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Canal do YouTube
                </a>
                <a
                  href="mailto:contato@borboletinhaencantada.com.br"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 text-sm font-black text-white hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-md"
                >
                  <Mail className="h-5 w-5" /> Falar com a Secretaria
                </a>
              </nav>
            </div>

            <div className="border-t border-white/10 pt-6 text-center">
              <img
                src="/logo.png"
                alt="Logo Borboletinha"
                className="h-16 w-auto mx-auto mb-2 object-contain"
              />
              <p className="font-quicksand font-black text-base text-[#F6C343]">Borboletinha Encantada</p>
              <p className="text-xs text-white/70">Onde a infância tem cor e coração</p>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Onda de Transição para Localização */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
