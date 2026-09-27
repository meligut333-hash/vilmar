import React from 'react';
import { Sparkles, Cpu, ShieldCheck, Activity } from 'lucide-react';
import { playQuantumSweep, initAudio } from '../utils/audio';

interface BootScreenProps {
  onBoot: () => void;
  isBooted: boolean;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onBoot, isBooted }) => {
  if (isBooted) return null;

  const handleStart = () => {
    initAudio();
    playQuantumSweep();
    onBoot();
  };

  return (
    <div
      onClick={handleStart}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] text-center p-6 cursor-pointer select-none overflow-hidden transition-all duration-700"
    >
      {/* Background radial blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.12)_0%,rgba(2,6,23,0.95)_75%)] pointer-events-none" />

      {/* Cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Central Holographic Orb */}
      <div className="relative mb-6">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-600/30 via-blue-600/40 to-cyan-400/30 p-1 flex items-center justify-center border border-cyan-400/60 shadow-[0_0_60px_rgba(0,240,255,0.4),inset_0_0_30px_rgba(0,240,255,0.3)] animate-[spin_20s_linear_infinite]">
          <div className="w-full h-full rounded-full border border-dashed border-cyan-300/40 flex items-center justify-center">
            <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-300 animate-pulse" />
          </div>
        </div>

        {/* Orbiting particles */}
        <div className="absolute -inset-3 rounded-full border border-cyan-400/20 animate-ping opacity-30" />
      </div>

      {/* Titles */}
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 uppercase tracking-widest mb-3">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>PROGRAMA COMPLETO DE IA — NIVELES 1, 2 Y 3</span>
        </div>

        <h1 className="font-['Rajdhani'] font-bold text-3xl sm:text-5xl text-white tracking-wider uppercase drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          AI QUANTUM STUDIO · VILMAR OLIVERA
        </h1>

        <div className="font-['IBM_Plex_Mono'] text-sm sm:text-base text-cyan-300 tracking-widest mt-2 uppercase font-semibold">
          EXPERTA EN IA APLICADA
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-md mx-auto">
          Estructura pedagógica interactiva para mostrar a tus alumnos. 3 niveles formativos (Emprendedores, Equipos y Empresas), 27 módulos prácticos y soluciones reales con Google Sheets, Canva, ChatGPT y Gemini.
        </p>

        {/* Pulse action button */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-['Rajdhani'] font-bold text-base sm:text-lg tracking-widest uppercase shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-slate-950 animate-bounce" />
            <span>EXPLORAR CRONOGRAMA DEL CURSO</span>
          </div>

          <div className="mt-3 text-[10px] font-mono text-slate-500 tracking-wider">
            [ CLIC EN CUALQUIER LUGAR PARA ACTIVAR ENTORNO INTERACTIVO Y AUDIO ]
          </div>
        </div>
      </div>
    </div>
  );
};
