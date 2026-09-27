import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface BottomCTAProps {
  onOpenAudit: () => void;
  onOpenConsultation: () => void;
  onOpenVibePanel: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({
  onOpenAudit,
  onOpenConsultation,
  onOpenVibePanel
}) => {
  return (
    <footer
      id="cta"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2.5 sm:gap-4 w-[96vw] max-w-4xl px-3 py-2"
    >
      {/* Primary Action Button */}
      <button
        type="button"
        onClick={() => {
          playBlip(880, 0.06, 0.04);
          onOpenVibePanel();
        }}
        className="flex-1 sm:flex-initial py-3 px-5 sm:px-7 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-['Rajdhani'] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
      >
        <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
        <span>FORMATO DE CLASE Y METODOLOGÍA</span>
        <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline text-slate-950" />
      </button>

      {/* WhatsApp / Direct Consult */}
      <a
        href="https://wa.me/?text=Hola%20Vilmar%20Olivera,%20deseo%20consultar%20sobre%20el%20Programa%20de%20IA%20(Niveles%201,%202%20y%203)%20y%20el%20cronograma%20de%20clases"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playBlip(720, 0.04, 0.03)}
        className="py-3 px-4 sm:px-5 rounded-xl bg-slate-950/90 hover:bg-slate-900 border border-emerald-500/50 text-emerald-400 font-['Rajdhani'] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.21 3.05c.15.2 2.08 3.31 5.05 4.52.7.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 22h-.01c-1.78 0-3.53-.48-5.06-1.38l-.36-.21-3.77.99 1.01-3.68-.24-.38a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.9 9.88zM20.46 3.49A11.79 11.79 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.59 5.94L0 24l6.34-1.66c1.74.95 3.7 1.45 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.16-3.47-8.42z" />
        </svg>
        <span className="hidden sm:inline">CONSULTAR CON VILMAR OLIVERA</span>
        <span className="sm:hidden">WHATSAPP</span>
      </a>

      {/* Floating AI Query trigger */}
      <button
        type="button"
        onClick={() => {
          playBlip(960, 0.05, 0.03);
          onOpenConsultation();
        }}
        className="p-3 rounded-xl bg-slate-950/90 hover:bg-cyan-950/60 border border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-colors cursor-pointer"
        title="Abrir asistente de consulta cuántica"
      >
        <MessageSquare className="w-4 h-4" />
      </button>
    </footer>
  );
};
