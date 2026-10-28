import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin, Phone, Mail, Clock, Heart, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function KingdomVisitForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    segmento: '',
    turno: 'Manhã',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFCA28', '#FF6F61', '#1E88E5', '#2ECC71', '#9B59B6'],
    });
    setSubmitted(true);
  };

  return (
    <section id="visita" className="relative py-16 lg:py-24 bg-[#F4FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Coluna 1: Convite & Informações do Castelo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kingdom-sun/40 text-[#755700] font-fredoka font-bold text-sm mb-3">
                <span>🏰 Portas Abertas o Ano Inteiro</span>
              </span>
              <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-bold text-kingdom-navy">
                Venha conhecer o Reinado da Criança de perto!
              </h2>
              <p className="font-nunito text-lg text-[#55697d] mt-3 leading-relaxed">
                Nada substitui a emoção de caminhar pelo nosso castelo, sentir o aroma da comidinha fresca, ouvir a risada das crianças no parque e conversar com nossos educadores.
              </p>
            </div>

            {/* Diferenciais da Visita */}
            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white shadow-sm border border-kingdom-coral/20 flex items-center gap-3.5">
                <span className="text-3xl">🌿</span>
                <div>
                  <h4 className="font-fredoka font-bold text-base text-kingdom-navy">Pátio Natural & Horta Pedagógica</h4>
                  <p className="font-nunito text-xs text-[#55697d]">Conheça os canteiros vivos cuidados pelas crianças.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-kingdom-blue/20 flex items-center gap-3.5">
                <span className="text-3xl">🍼</span>
                <div>
                  <h4 className="font-fredoka font-bold text-base text-kingdom-navy">Berçário Seguro & Climatizado</h4>
                  <p className="font-nunito text-xs text-[#55697d]">Área de descanso, lactário higienizado e piso térmico.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white shadow-sm border border-kingdom-green/20 flex items-center gap-3.5">
                <span className="text-3xl">📚</span>
                <div>
                  <h4 className="font-fredoka font-bold text-base text-kingdom-navy">Salas Multissensoriais</h4>
                  <p className="font-nunito text-xs text-[#55697d]">Ateliê de artes, biblioteca de fábulas e laboratório lúdico.</p>
                </div>
              </div>
            </div>

            {/* Card de Atendimento Direto */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-kingdom-green to-[#27AE60] text-white flex items-center justify-between shadow-lg">
              <div>
                <p className="font-fredoka font-bold text-lg">Quer tirar dúvidas agora?</p>
                <p className="font-nunito text-xs text-white/90">Fale com a nossa coordenação pelo WhatsApp</p>
              </div>
              <a
                href="https://wa.me/5532999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Reinado%20da%20Crian%C3%A7a."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white text-[#1e6b47] font-fredoka font-bold text-sm hover:scale-105 transition-all shadow-md"
              >
                Chamar Agora
              </a>
            </div>
          </motion.div>

          {/* Coluna 2: Formulário Lúdico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="toy-card p-8 sm:p-10 bg-white border-4 border-kingdom-coral/30 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <span className="text-6xl animate-bounce">🎉</span>
                  <h3 className="font-fredoka text-3xl font-bold text-kingdom-navy">
                    Visita Agendada com Sucesso!
                  </h3>
                  <p className="font-nunito text-base text-[#55697d] max-w-sm">
                    Muito obrigado, <strong>{formData.nome || 'Família'}</strong>! Nossa equipe entrará em contato via WhatsApp para confirmar o melhor horário. Esperamos vocês com muito carinho! 👑
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-kingdom-sun text-[#755700] font-fredoka font-bold text-sm"
                  >
                    Agendar Outra Visita
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="font-fredoka text-2xl sm:text-3xl font-bold text-kingdom-navy">
                      Agende seu Passeio Encantado 🎈
                    </h3>
                    <p className="font-nunito text-sm text-[#55697d]">
                      Preencha os campos e reservaremos um momento exclusivo para sua família.
                    </p>
                  </div>

                  <div>
                    <label className="block font-fredoka font-bold text-xs uppercase text-kingdom-navy mb-1">
                      Nome do Responsável *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={e => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Mariana Castro"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F4FAFF] border-2 border-kingdom-sky/20 focus:border-kingdom-coral focus:bg-white focus:outline-none transition-all font-nunito text-base text-kingdom-navy"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-fredoka font-bold text-xs uppercase text-kingdom-navy mb-1">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(32) 99999-9999"
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4FAFF] border-2 border-kingdom-sky/20 focus:border-kingdom-coral focus:bg-white focus:outline-none transition-all font-nunito text-base text-kingdom-navy"
                      />
                    </div>

                    <div>
                      <label className="block font-fredoka font-bold text-xs uppercase text-kingdom-navy mb-1">
                        Turno de Preferência
                      </label>
                      <select
                        value={formData.turno}
                        onChange={e => setFormData({ ...formData, turno: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4FAFF] border-2 border-kingdom-sky/20 focus:border-kingdom-coral focus:bg-white focus:outline-none transition-all font-nunito text-base text-kingdom-navy"
                      >
                        <option value="Manhã">Manhã (08h às 11h)</option>
                        <option value="Tarde">Tarde (14h às 17h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-fredoka font-bold text-xs uppercase text-kingdom-navy mb-1">
                      Segmento de Interesse *
                    </label>
                    <select
                      required
                      value={formData.segmento}
                      onChange={e => setFormData({ ...formData, segmento: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F4FAFF] border-2 border-kingdom-sky/20 focus:border-kingdom-coral focus:bg-white focus:outline-none transition-all font-nunito text-base text-kingdom-navy"
                    >
                      <option value="">Selecione a fase...</option>
                      <option value="Berçário (4 meses a 2 anos)">Berçário (4 meses a 2 anos)</option>
                      <option value="Educação Infantil (2 a 5 anos)">Educação Infantil (2 a 5 anos)</option>
                      <option value="Ensino Fundamental I (1º ao 5º ano)">Ensino Fundamental I (1º ao 5º ano)</option>
                      <option value="Turno Integral Completo">Turno Integral Completo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-fredoka font-bold text-xs uppercase text-kingdom-navy mb-1">
                      Mensagem ou Dúvida (opcional)
                    </label>
                    <textarea
                      rows="2"
                      value={formData.mensagem}
                      onChange={e => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Idade da criança, preferências ou restrições..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#F4FAFF] border-2 border-kingdom-sky/20 focus:border-kingdom-coral focus:bg-white focus:outline-none transition-all font-nunito text-base text-kingdom-navy"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="btn-jelly w-full py-4 rounded-full bg-gradient-to-r from-kingdom-coral to-[#E74C3C] text-white font-fredoka font-bold text-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-kingdom-coral/30"
                  >
                    <Sparkles className="w-5 h-5 animate-spin" />
                    <span>Confirmar Solicitação de Visita</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
