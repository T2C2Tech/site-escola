import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import WaveTransition from './WaveTransition';

export default function AgendamentoVisita() {
  const [formData, setFormData] = useState({
    nomeResponsavel: '',
    nomeCrianca: '',
    idadeCiclo: 'maternal',
    telefone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const turmasMap = {
    maternal: 'Maternal 1 e 2 (1 a 3 anos) - Escola Borboletinha',
    periodo1: '1º Período (4 anos com Robótica) - Escola Borboletinha',
    periodo2: '2º Período (5 anos com Robótica & Inglês) - Escola Borboletinha',
    fundamental: 'Ensino Fundamental 1º ao 5º Ano - Colégio Estrutura',
    integral: 'Horário Parcial ou Integral Flexível com Oficinas',
  };

  const gerarUrlWhatsApp = () => {
    const turma = turmasMap[formData.idadeCiclo] || formData.idadeCiclo;
    const msg = [
      'Olá! Gostaria de agendar uma visita pedagógica para Matrículas 2027.',
      '',
      '📋 *Dados do Agendamento:*',
      `• *Responsável:* ${formData.nomeResponsavel || 'Não informado'}`,
      `• *Criança:* ${formData.nomeCrianca || 'Não informado'}`,
      `• *Turma de Interesse:* ${turma}`,
      `• *WhatsApp para Contato:* ${formData.telefone || 'Não informado'}`,
      '',
      'Aguardo o retorno para combinarmos o melhor dia e horário. Obrigado(a)!'
    ].join('\n');

    return `https://wa.me/553298804496?text=${encodeURIComponent(msg)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const url = gerarUrlWhatsApp();
    window.open(url, '_blank');
  };

  return (
    <section id="visita" className="relative pt-24 pb-32 bg-gradient-to-b from-[#edf4ff] via-white to-[#edf4ff]/60 overflow-hidden scroll-mt-20">
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
        🦋
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
              Portas Abertas para a Sua Família
            </span>
          </div>
          <h2 className="font-quicksand text-3xl sm:text-4xl lg:text-5xl font-black text-[#2C3E50]">
            Venha conhecer nossa escola encantada!
          </h2>
          <p className="mt-3 font-nunito text-[#5b403f] text-base sm:text-lg">
            Recebemos você e sua família com carinho para apresentar o pátio, as salas de aula, a metodologia socioemocional e tirar todas as dúvidas.
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
                  <h3 className="font-quicksand text-xl font-black text-[#2C3E50]">Agende uma visita guiada</h3>
                  <p className="text-xs font-bold text-[#6C7A89]">Atendimento acolhedor com nossa coordenação pedagógica</p>
                </div>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-[#ffdf9b] px-3.5 py-1 text-xs font-black text-[#755700]">
                Sem Compromisso 🦋
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-[#EAF6EE] p-8 text-center text-[#1c6342]"
              >
                <CheckCircle2 className="mx-auto h-16 w-16 mb-4 text-[#2E9A68]" />
                <h3 className="font-quicksand text-2xl font-black">Oba! Informações Preparadas com Sucesso!</h3>
                <p className="mt-2.5 font-nunito text-base leading-relaxed text-[#2C3E50]">
                  Os dados de <strong>{formData.nomeCrianca || 'seu pequeno'}</strong> foram organizados para iniciar seu atendimento no WhatsApp.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={gerarUrlWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2E9A68] to-[#257d54] px-8 py-3.5 font-quicksand font-black text-base text-white shadow-lg shadow-[#2E9A68]/25 transition-all"
                  >
                    <MessageCircle className="h-5 w-5" /> Abrir Conversa no WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ nomeResponsavel: '', nomeCrianca: '', idadeCiclo: 'maternal', telefone: '' });
                    }}
                    className="text-xs font-bold text-[#1c6342] hover:underline px-4 py-2 cursor-pointer"
                  >
                    Novo agendamento
                  </button>
                </div>
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
                      placeholder="Ex: Lucas (3 anos)"
                      value={formData.nomeCrianca}
                      onChange={(e) => setFormData({ ...formData, nomeCrianca: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E63946] shadow-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      Turminha de Interesse (Matrículas 2027)
                    </label>
                    <select
                      value={formData.idadeCiclo}
                      onChange={(e) => setFormData({ ...formData, idadeCiclo: e.target.value })}
                      className="w-full rounded-2xl bg-[#FAFCFE] px-4 py-3.5 text-sm font-bold text-[#2C3E50] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2B90D9] shadow-sm transition-all"
                    >
                      <option value="maternal">🍼 Maternal 1 e 2 (1 a 3 anos) - Escola Borboletinha</option>
                      <option value="periodo1">🤖 1º Período (4 anos com Robótica) - Escola Borboletinha</option>
                      <option value="periodo2">🎨 2º Período (5 anos com Robótica & Inglês) - Escola Borboletinha</option>
                      <option value="fundamental">🚀 Ensino Fundamental 1º ao 5º Ano - Colégio Estrutura</option>
                      <option value="integral">⏰ Horário Parcial ou Integral Flexível com Oficinas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#2C3E50] mb-2">
                      WhatsApp para Contato
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(32) 98804-4966"
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
                    className="flex-1 rounded-2xl bg-gradient-to-r from-[#2E9A68] to-[#257d54] py-4 text-center font-quicksand font-black text-base text-white shadow-xl shadow-[#2E9A68]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <MessageCircle className="h-5 w-5" /> Confirmar e Enviar para o WhatsApp 🦋
                  </motion.button>
                </div>
              </form>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#6C7A89] border-t border-slate-100 pt-4">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#2B90D9]" />
                Visitas pedagógicas: Segunda a sexta, das 08h às 17h30.
              </span>
              <span className="text-[#1E5A87] font-extrabold">
                📞 Fixo: (32) 3213-7821 • WhatsApp: (32) 98804-4966
              </span>
            </div>
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
                <span className="text-5xl block mb-2 animate-bounce">🦋</span>
                <p className="font-quicksand text-2xl font-black">Nossa Comunidade Escolar</p>
                <p className="mt-2 text-xs text-white/80 leading-relaxed font-medium">
                  Acompanhe fotos das aulas de robótica, balé, capoeira, vivências na Nossa Hortinha e rotina dos nossos alunos!
                </p>
              </div>

              <nav className="mt-6 flex flex-col gap-3.5" aria-label="Canais de Contato">
                <a
                  href="https://www.instagram.com/borboletinhaencantada/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 text-sm font-black text-white hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  Instagram
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/553298804496?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20matr%C3%ADculas%20da%20E.I.%20Borboletinha%20Encantada%20e%20Col%C3%A9gio%20Estrutura."
                  className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/10 px-5 text-sm font-black text-white hover:bg-[#F6C343] hover:text-[#203243] transition-all shadow-md"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </nav>
            </div>

            <div className="border-t border-white/10 pt-6 text-center">
              <img
                src="./logo.png"
                alt="Escola Borboletinha Encantada & Colégio Estrutura"
                className="h-20 w-auto mx-auto mb-2 object-contain"
              />
              <p className="font-quicksand font-black text-base text-[#F6C343]">Escola Borboletinha Encantada</p>
              <p className="text-xs text-white/80 font-bold">& Colégio Estrutura</p>
              <p className="text-[11px] text-white/60 mt-1">Estrutura para crescer. Valores para a vida.</p>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Onda de Transição para Localização */}
      <WaveTransition fill="#edf4ff" position="bottom" variant={1} />
    </section>
  );
}
