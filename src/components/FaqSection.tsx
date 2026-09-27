import React, { useState } from 'react';
import { FAQS_OFICIALES } from '../data/masterCourseData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { playBlip } from '../utils/audio';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    playBlip(750, 0.03, 0.02);
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-3 font-semibold">
          Claridad y Confianza
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
          PREGUNTAS FRECUENTES
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-light">
          Respuestas transparentes a las dudas más comunes sobre la formación y la consultoría.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS_OFICIALES.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all border overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-950/60 border-cyan-500/20 hover:border-cyan-500/40'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="font-['Rajdhani'] font-bold text-lg sm:text-xl text-white">
                    {faq.pregunta}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 animate-in fade-in duration-150">
                  <p className="pt-3">{faq.respuesta}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
