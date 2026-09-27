import React from 'react';
import { MessageSquare, ArrowDown } from 'lucide-react';
import { CONTACTO_INFO } from '../data/masterCourseData';
import { playBlip } from '../utils/audio';
import { safeOpenExternal } from '../utils/navigation';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    playBlip(920, 0.04, 0.03);
    const msg = encodeURIComponent(
      'Hola Vilmar, estoy en tu web y me gustaría hacerte una consulta directa por WhatsApp.'
    );
    safeOpenExternal(`${CONTACTO_INFO.whatsappUrl}?text=${msg}`);
  };

  return (
    <>
      <style>{`
        @keyframes floatUpDownMotion {
          0% {
            transform: translateY(-12px);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(-12px);
          }
        }
        .animate-whatsapp-float-down {
          animation: floatUpDownMotion 3.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }
        .animate-whatsapp-float-down:hover {
          animation-play-state: paused;
        }
      `}</style>
      <aside
        aria-label="Contacto directo por WhatsApp"
        className="fixed bottom-28 sm:bottom-32 md:bottom-36 right-5 sm:right-8 z-50 select-none pointer-events-auto"
      >
        <div className="animate-whatsapp-float-down flex flex-col items-end">
          {/* Subtle indicator beacon */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 mb-1.5 rounded-full bg-slate-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">Online · Vilmar</span>
          </div>

          <button
            onClick={handleClick}
            aria-label="Consultar a Vilmar Olivera por WhatsApp"
            className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 text-white font-semibold text-xs sm:text-sm shadow-[0_10px_35px_rgba(16,185,129,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.7),inset_0_1px_2px_rgba(255,255,255,0.8)] border border-emerald-300/40 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
            title="Consultar a Vilmar Olivera por WhatsApp"
          >
            {/* Subtle breathing glow */}
            <span className="absolute -inset-1.5 rounded-full bg-emerald-500/30 blur-md group-hover:bg-emerald-400/50 transition-colors animate-pulse pointer-events-none" />

            <div className="relative flex items-center justify-center">
              <MessageSquare className="w-5 h-5 fill-white text-white drop-shadow-sm" />
            </div>

            <div className="relative flex flex-col items-start text-left leading-tight">
              <span className="tracking-wide font-sans font-bold">
                WhatsApp
              </span>
              <span className="text-[10px] text-emerald-100 font-normal hidden sm:inline">
                Atención directa
              </span>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};
