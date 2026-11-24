import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

export default function LgpdModal({ isOpen, onClose }) {
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
          aria-labelledby="lgpd-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl text-[#2C3E50]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar política de privacidade"
              className="absolute top-5 right-5 rounded-full bg-slate-100 p-2 text-[#2C3E50] hover:bg-[#E63946] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF6EE] px-3.5 py-1 mb-3">
              <ShieldCheck className="h-4 w-4 text-[#1c6342]" />
              <span className="font-quicksand text-xs font-black uppercase tracking-wider text-[#1c6342]">
                Conformidade LGPD
              </span>
            </div>

            <h2 id="lgpd-title" className="font-quicksand text-2xl font-black">
              Política de Privacidade
            </h2>

            <div className="mt-4 space-y-3 font-nunito text-sm leading-relaxed text-[#4A5568]">
              <p>
                A <strong>Escola Borboletinha Encantada &amp; Colégio Estrutura</strong> respeita a privacidade das famílias e trata os dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
              </p>
              <p>
                <strong>1. Coleta e Finalidade:</strong> Os dados informados nos formulários de agendamento (nome do responsável, nome da criança, WhatsApp e turma de interesse) são utilizados exclusivamente para atendimento pedagógico, agendamento de visitas e informações sobre matrículas.
              </p>
              <p>
                <strong>2. Compartilhamento:</strong> Não comercializamos nem compartilhamos seus dados com terceiros para fins publicitários. O envio via WhatsApp ocorre diretamente entre você e o canal oficial da escola.
              </p>
              <p>
                <strong>3. Direitos do Titular:</strong> Você pode solicitar a confirmação, atualização ou exclusão dos seus dados a qualquer momento pelo e-mail{' '}
                <a href="mailto:contato@borboletinhaencantada.com.br" className="font-bold text-[#2B90D9] underline">
                  contato@borboletinhaencantada.com.br
                </a>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
