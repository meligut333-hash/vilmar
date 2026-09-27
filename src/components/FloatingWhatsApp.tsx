import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CONTACTO_INFO } from '../data/masterCourseData';
import { playBlip } from '../utils/audio';
import { safeOpenExternal } from '../utils/navigation';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    playBlip(920, 0.04, 0.03);
    safeOpenExternal(CONTACTO_INFO.whatsappUrl);
  };

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-6 z-40 select-none"
    >
      <button
        onClick={handleClick}
        aria-label="Consultar a Vilmar Olivera por WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-[0_8px_25px_rgba(16,185,129,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.65),inset_0_1px_2px_rgba(255,255,255,0.7)] border border-emerald-300/40 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 active:translate-y-0.5 active:scale-95"
        title="Consultar a Vilmar Olivera por WhatsApp"
      >
        {/* Subtle breathing glow */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/25 blur-sm group-hover:bg-emerald-400/40 transition-colors animate-pulse pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-4 h-4 fill-white" />
        </div>

        <span className="relative hidden sm:inline tracking-wide font-sans">
          WhatsApp Vilmar
        </span>
      </button>
    </aside>
  );
};
