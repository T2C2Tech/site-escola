import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '553298804496';
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre a E.I. Borboletinha Encantada e o Colégio Estrutura.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
      {/* Tooltip flutuante de boas-vindas */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto relative flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-2xl border border-emerald-100 max-w-xs"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-base">
              💬
            </div>
            <div className="text-left pr-4">
              <p className="font-quicksand text-xs font-black text-[#2C3E50]">Atendimento Pedagógico</p>
              <p className="font-nunito text-[11px] text-[#5b403f] font-medium leading-tight">
                Tire suas dúvidas direto pelo WhatsApp!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
              aria-label="Fechar balão"
            >
              <X className="h-3 w-3" />
            </button>
            {/* Triângulo apontando para o botão */}
            <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white border-r border-b border-emerald-100" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante Principal com Pulso */}
      <div className="relative pointer-events-auto">
        {/* Pulso contínuo */}
        <motion.span
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />

        <motion.a
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar pelo WhatsApp no número 55 32 98804-4496"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2ecc71] text-white shadow-2xl shadow-[#25D366]/50 transition-shadow hover:shadow-[#25D366]/70 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        >
          {/* SVG Oficial WhatsApp */}
          <svg
            className="h-9 w-9 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </motion.a>
      </div>
    </aside>
  );
}

