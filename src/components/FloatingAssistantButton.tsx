import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface FloatingAssistantButtonProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({
  onOpenConsultation,
  onOpenWhatsApp
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* WhatsApp Button */}
      <button
        onClick={() => {
          playBlip(880, 0.03, 0.02);
          onOpenWhatsApp();
        }}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-[0_6px_25px_rgba(16,185,129,0.4)] border border-emerald-400/40 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        title="Hablar con Vilmar por WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp Vilmar</span>
      </button>

      {/* AI Assistant Button */}
      <button
        onClick={() => {
          playBlip(920, 0.04, 0.03);
          onOpenConsultation();
        }}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-cyan-300 font-semibold text-xs border border-cyan-500/40 shadow-[0_8px_30px_rgba(6,182,212,0.35)] backdrop-blur-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        title="Consultar Asistente IA"
      >
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span className="hidden sm:inline">Consultar con IA</span>
      </button>
    </div>
  );
};
