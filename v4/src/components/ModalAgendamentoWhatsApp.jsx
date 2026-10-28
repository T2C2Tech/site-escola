import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  X,
  MessageCircle,
  User,
  Phone,
  Baby,
  Clock,
  Calendar,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export default function ModalAgendamentoWhatsApp({
  isOpen,
  onClose,
  initialValues = {},
  videoModalItem,
  onCloseVideoModal,
  onOpenVisitFromVideo,
}) {
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [whatsappResponsavel, setWhatsappResponsavel] = useState('');
  const [idadeSerie, setIdadeSerie] = useState('Berçário (a partir de 4 meses)');
  const [turnoInteresse, setTurnoInteresse] = useState('Integral Humanizado');
  const [horarioVisita, setHorarioVisita] = useState('Manhã (08h30 às 11h00)');

  useEffect(() => {
    if (initialValues?.serie) {
      setIdadeSerie(initialValues.serie);
    }
    if (initialValues?.turno) {
      setTurnoInteresse(initialValues.turno);
    }
    if (initialValues?.horarioVisita) {
      setHorarioVisita(initialValues.horarioVisita);
    }
  }, [initialValues]);

  // Máscara amigável de WhatsApp (DDD + número)
  const handlePhoneChange = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) {
      setWhatsappResponsavel(digits);
    } else if (digits.length <= 7) {
      setWhatsappResponsavel(`(${digits.slice(0, 2)}) ${digits.slice(2)}`);
    } else {
      setWhatsappResponsavel(
        `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0096FF', '#FFC700', '#65C11F', '#FF6B00'],
    });

    const mensagem = [
      '👑 *SOLICITAÇÃO DE VISITA EXCLUSIVA — COLÉGIO REINADO DA CRIANÇA*',
      '',
      `👤 *Nome do Responsável:* ${nomeResponsavel.trim() || 'Não informado'}`,
      `📱 *WhatsApp de Contato:* ${whatsappResponsavel.trim() || 'Não informado'}`,
      `🎒 *Idade / Série da Criança:* ${idadeSerie}`,
      `☀️ *Turno de Interesse:* ${turnoInteresse}`,
      `⏰ *Preferência de Horário (Seg a Sex):* ${horarioVisita}`,
      '',
      'Gostaria de confirmar minha visita guiada no bairro Mariano Procópio!',
    ].join('\n');

    const url = `https://wa.me/5532999991234?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <>
      {/* Pop-up Mini-Formulário Pré-WhatsApp */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-reinado-ink/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.25rem] max-w-lg w-full overflow-hidden shadow-2xl border-4 border-reinado-sol my-8"
            >
              {/* Cabeçalho Vibrante do Modal */}
              <div className="bg-gradient-to-r from-reinado-celeste via-reinado-celeste-dark to-reinado-ink text-white p-6 relative">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white hover:text-reinado-ink text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-reinado-sol text-reinado-ink font-fredoka font-bold text-xs uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Triagem Rápida • Atendimento Exclusivo
                </span>

                <h3 className="font-fredoka text-2xl sm:text-3xl font-bold mt-2.5 leading-tight">
                  Agendar Visita ao Colégio Reinado da Criança
                </h3>
                <p className="text-xs sm:text-sm text-white/90 font-semibold mt-1">
                  Preencha abaixo em 15 segundos para nossa secretária já receber seus dados prontos no WhatsApp <strong>(32) 99999-1234</strong>:
                </p>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-1.5">
                    1. Nome do Responsável *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-reinado-celeste absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={nomeResponsavel}
                      onChange={(e) => setNomeResponsavel(e.target.value)}
                      placeholder="Ex: Mariana Almeida"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-reinado-celeste focus:outline-none font-bold text-sm text-reinado-ink"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-1.5">
                    2. Seu WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-reinado-limao-dark absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={whatsappResponsavel}
                      onChange={handlePhoneChange}
                      placeholder="(32) 99999-9999"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-reinado-celeste focus:outline-none font-bold text-sm text-reinado-ink"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-1.5">
                      3. Idade / Série da Criança *
                    </label>
                    <div className="relative">
                      <Baby className="w-4 h-4 text-reinado-tangerina absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={idadeSerie}
                        onChange={(e) => setIdadeSerie(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border-2 border-slate-200 focus:border-reinado-celeste focus:outline-none font-bold text-xs sm:text-sm text-reinado-ink bg-white"
                      >
                        <optgroup label="Educação Infantil (4 meses a 4 anos)">
                          <option value="Berçário (a partir de 4 meses)">Berçário (a partir de 4 meses)</option>
                          <option value="Maternal I (2 anos)">Maternal I (2 anos)</option>
                          <option value="Maternal II (3 anos)">Maternal II (3 anos)</option>
                          <option value="Maternal III (4 anos)">Maternal III (4 anos)</option>
                        </optgroup>
                        <optgroup label="Ensino Fundamental I (6 a 10 anos)">
                          <option value="1º Ano Fundamental I (6 anos)">1º Ano Fundamental I (6 anos)</option>
                          <option value="2º Ano Fundamental I (7 anos)">2º Ano Fundamental I (7 anos)</option>
                          <option value="3º Ano Fundamental I (8 anos)">3º Ano Fundamental I (8 anos)</option>
                          <option value="4º Ano Fundamental I (9 anos)">4º Ano Fundamental I (9 anos)</option>
                          <option value="5º Ano Fundamental I (10 anos)">5º Ano Fundamental I (10 anos)</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-1.5">
                      4. Turno de Interesse *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-reinado-celeste absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={turnoInteresse}
                        onChange={(e) => setTurnoInteresse(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 rounded-xl border-2 border-slate-200 focus:border-reinado-celeste focus:outline-none font-bold text-xs sm:text-sm text-reinado-ink bg-white"
                      >
                        <option value="Integral Humanizado">Integral Humanizado (Infantil)</option>
                        <option value="Manhã">Turno da Manhã</option>
                        <option value="Tarde">Turno da Tarde</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-reinado-ink mb-1.5">
                    5. Melhor Horário para Visita (Seg a Sex • 30 em 30 min)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-reinado-limao-dark absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={horarioVisita}
                      onChange={(e) => setHorarioVisita(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 rounded-xl border-2 border-slate-200 focus:border-reinado-celeste focus:outline-none font-bold text-xs sm:text-sm text-reinado-ink bg-white"
                    >
                      <optgroup label="Manhã (08h30 às 11h00)">
                        <option value="Manhã (08h30 às 11h00)">Qualquer horário da Manhã (08h30 às 11h)</option>
                        <option value="Manhã às 08h30">Manhã às 08h30</option>
                        <option value="Manhã às 09h00">Manhã às 09h00</option>
                        <option value="Manhã às 09h30">Manhã às 09h30</option>
                        <option value="Manhã às 10h00">Manhã às 10h00</option>
                        <option value="Manhã às 10h30">Manhã às 10h30</option>
                        <option value="Manhã às 11h00">Manhã às 11h00</option>
                      </optgroup>
                      <optgroup label="Tarde (14h00 às 16h30)">
                        <option value="Tarde (14h00 às 16h30)">Qualquer horário da Tarde (14h às 16h30)</option>
                        <option value="Tarde às 14h00">Tarde às 14h00</option>
                        <option value="Tarde às 14h30">Tarde às 14h30</option>
                        <option value="Tarde às 15h00">Tarde às 15h00</option>
                        <option value="Tarde às 15h30">Tarde às 15h30</option>
                        <option value="Tarde às 16h00">Tarde às 16h00</option>
                        <option value="Tarde às 16h30">Tarde às 16h30</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-tangerina w-full py-4 rounded-2xl font-fredoka font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Iniciar Conversa no WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-reinado-slate text-center">
                  <ShieldCheck className="w-4 h-4 text-reinado-limao-dark shrink-0" />
                  <span>Seus dados são enviados diretamente para a Secretaria de Matrículas.</span>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Tour em Vídeo Institucional */}
      <AnimatePresence>
        {videoModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseVideoModal}
            className="fixed inset-0 z-50 bg-reinado-ink/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2.25rem] max-w-3xl w-full overflow-hidden shadow-2xl border-4 border-reinado-celeste"
            >
              <div className="bg-reinado-ink text-white px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase text-reinado-sol">
                    🎬 Tour em Vídeo • Colégio Reinado da Criança
                  </span>
                  <h4 className="font-fredoka text-lg sm:text-xl font-bold">
                    {videoModalItem.title || 'Vivência Afetiva no Bairro Mariano Procópio'}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={onCloseVideoModal}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-reinado-tangerina text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fechar vídeo"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                <video
                  controls
                  autoPlay
                  playsInline
                  poster="./design/quem-somos.png"
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-teacher-and-kids-in-a-classroom-4706-large.mp4"
                    type="video/mp4"
                  />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>

              <div className="p-5 sm:p-6 bg-reinado-celeste-light/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-reinado-limao-dark">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ensino Afetivo • Tempo Integral Humanizado • Mariano Procópio</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-reinado-ink">
                    Gostou do nosso ambiente? Agende uma visita exclusiva de 30 minutos!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onCloseVideoModal();
                    onOpenVisitFromVideo();
                  }}
                  className="btn-tangerina px-6 py-3 rounded-full font-fredoka font-bold text-sm shrink-0 cursor-pointer"
                >
                  Agendar Visita pelo WhatsApp
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

