import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

const turmasOptions = [
  { value: 'maternal', label: 'Maternal 1 e 2 (1 a 3 anos) — Borboletinha Encantada' },
  { value: 'periodo1', label: '1º Período (4 anos) — Borboletinha Encantada' },
  { value: 'periodo2', label: '2º Período (5 anos) — Borboletinha Encantada' },
  { value: 'fundamental', label: 'Ensino Fundamental (1º ao 5º Ano) — Colégio Estrutura' },
  { value: 'integral', label: 'Período Parcial ou Integral Flexível' },
];

export default function AgendamentoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nomeResponsavel: '',
    nomeCrianca: '',
    whatsapp: '',
    serie: 'maternal',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serieLabel = turmasOptions.find((t) => t.value === formData.serie)?.label || formData.serie;
    const msg = [
      'Olá! Gostaria de agendar uma visita pedagógica para Matrículas 2027.',
      '',
      '📋 *Dados do Agendamento:*',
      `• *Responsável:* ${formData.nomeResponsavel || 'Não informado'}`,
      formData.nomeCrianca ? `• *Criança:* ${formData.nomeCrianca}` : null,
      `• *WhatsApp:* ${formData.whatsapp || 'Não informado'}`,
      `• *Série/Turma de Interesse:* ${serieLabel}`,
      '',
      'Aguardo o retorno para combinarmos o melhor dia e horário!',
    ]
      .filter(Boolean)
      .join('\n');

    setSubmitted(true);
    window.open(
      `https://wa.me/5532988044966?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#203243]/70 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-agendamento-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl border-2 border-[#edf4ff]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar modal de agendamento"
              className="absolute top-5 right-5 rounded-full bg-slate-100 p-2 text-[#2C3E50] hover:bg-[#E63946] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff8ea] px-3.5 py-1 mb-3">
              <Calendar className="h-4 w-4 text-[#755700]" />
              <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#755700]">
                Matrículas Abertas 2027 • Vagas Limitadas
              </span>
            </div>

            <h2 id="modal-agendamento-title" className="font-quicksand text-2xl sm:text-3xl font-black text-[#2C3E50]">
              Agendar Visita 2027
            </h2>
            <p className="mt-1.5 font-nunito text-sm text-[#4A5568]">
              Preencha seus dados abaixo para conversar diretamente com nossa equipe pedagógica pelo WhatsApp.
            </p>

            {submitted ? (
              <div className="mt-6 rounded-2xl bg-[#EAF6EE] p-6 text-center border border-[#2E9A68]/20">
                <CheckCircle2 className="mx-auto h-10 w-10 text-[#2E9A68] mb-2" />
                <p className="font-quicksand font-black text-lg text-[#1c6342]">
                  Redirecionando para o WhatsApp!
                </p>
                <p className="mt-1 text-xs font-nunito text-[#2C3E50]">
                  Se a janela não abriu automaticamente, clique no botão abaixo ou feche este modal.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-4 rounded-full bg-[#2E9A68] px-6 py-2.5 font-quicksand text-sm font-black text-white hover:bg-[#1c6342] transition-colors"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label htmlFor="modal-responsavel" className="block font-quicksand text-xs font-black uppercase tracking-wide text-[#2C3E50] mb-1.5">
                    Nome do Pai / Mãe ou Responsável *
                  </label>
                  <input
                    id="modal-responsavel"
                    type="text"
                    required
                    placeholder="Ex: Maria Clara Silva"
                    value={formData.nomeResponsavel}
                    onChange={(e) => setFormData({ ...formData, nomeResponsavel: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm font-nunito text-[#2C3E50] focus:border-[#2B90D9] focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-whatsapp" className="block font-quicksand text-xs font-black uppercase tracking-wide text-[#2C3E50] mb-1.5">
                      WhatsApp *
                    </label>
                    <input
                      id="modal-whatsapp"
                      type="tel"
                      required
                      placeholder="(32) 99999-9999"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm font-nunito text-[#2C3E50] focus:border-[#2B90D9] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-crianca" className="block font-quicksand text-xs font-black uppercase tracking-wide text-[#2C3E50] mb-1.5">
                      Nome da Criança (opcional)
                    </label>
                    <input
                      id="modal-crianca"
                      type="text"
                      placeholder="Ex: Lucas"
                      value={formData.nomeCrianca}
                      onChange={(e) => setFormData({ ...formData, nomeCrianca: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm font-nunito text-[#2C3E50] focus:border-[#2B90D9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-serie" className="block font-quicksand text-xs font-black uppercase tracking-wide text-[#2C3E50] mb-1.5">
                    Série / Turma de Interesse *
                  </label>
                  <select
                    id="modal-serie"
                    value={formData.serie}
                    onChange={(e) => setFormData({ ...formData, serie: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-[#FAFCFE] px-4 py-3 text-sm font-nunito font-semibold text-[#2C3E50] focus:border-[#2B90D9] focus:outline-none"
                  >
                    {turmasOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2E9A68] hover:bg-[#1c6342] px-6 py-4 font-quicksand text-base font-black text-white shadow-lg shadow-[#2E9A68]/25 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirmar e Agendar no WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
