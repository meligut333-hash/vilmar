import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, Zap, ChevronDown, Activity, Sparkles, BookOpen, Layers } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface TopBarHUDProps {
  activeLevelId: 1 | 2 | 3;
  onSelectLevel: (levelId: 1 | 2 | 3) => void;
  onOpenMetodologia: () => void;
  isMetodologiaOpen: boolean;
}

export const TopBarHUD: React.FC<TopBarHUDProps> = ({
  activeLevelId,
  onSelectLevel,
  onOpenMetodologia,
  isMetodologiaOpen
}) => {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [cityIndex, setCityIndex] = useState(0);

  const cities = [
    { name: 'MIAMI', temp: '28°C', condition: 'sol' },
    { name: 'SÃO PAULO', temp: '25°C', condition: 'sol' },
    { name: 'MADRID', temp: '22°C', condition: 'nube' },
    { name: 'BOGOTÁ', temp: '19°C', condition: 'lluvia' },
    { name: 'CDMX', temp: '24°C', condition: 'sol' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('es-ES', { hour12: false }));
      setDateStr(
        now.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).toUpperCase()
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const cycleCity = () => {
    playBlip(720, 0.04, 0.03);
    setCityIndex((prev) => (prev + 1) % cities.length);
  };

  const currentCity = cities[cityIndex];

  return (
    <header
      id="topbar"
      className="fixed top-2.5 left-1/2 -translate-x-1/2 z-30 w-[96vw] max-w-[1440px] px-3.5 py-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_25px_rgba(0,240,255,0.15),inset_0_0_15px_rgba(6,182,212,0.06)] flex flex-col gap-1.5 transition-all"
    >
      {/* Corner brackets */}
      <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
      <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

      {/* Row 1: Brand & Level Selector */}
      <div className="flex items-center justify-between gap-3 text-xs flex-wrap sm:flex-nowrap">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-400/50 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
            <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse" />
          </div>
          <div>
            <div className="font-['Rajdhani'] font-bold text-base sm:text-lg tracking-wider text-cyan-300 flex items-center gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
              <span>AI QUANTUM STUDIO · VILMAR OLIVERA</span>
              <span className="text-cyan-500 font-light hidden sm:inline">|</span>
              <span className="text-cyan-200 text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline">
                EXPERTA EN IA APLICADA
              </span>
            </div>
            <div className="font-['IBM_Plex_Mono'] text-[9.5px] tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
              <span>PROGRAMA DE IA — NIVELES 1, 2 Y 3</span>
              <span className="text-cyan-400">·</span>
              <span className="text-emerald-400 font-semibold">CRONOGRAMA PEDAGÓGICO</span>
            </div>
          </div>
        </div>

        {/* Level Switcher Tabs */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-cyan-500/25">
          <button
            type="button"
            onClick={() => {
              playBlip(750, 0.04, 0.03);
              onSelectLevel(1);
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all ${
              activeLevelId === 1
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
            }`}
          >
            NIVEL 1: EMPRENDEDORES
          </button>

          <button
            type="button"
            onClick={() => {
              playBlip(820, 0.04, 0.03);
              onSelectLevel(2);
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all ${
              activeLevelId === 2
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
            }`}
          >
            NIVEL 2: EQUIPOS
          </button>

          <button
            type="button"
            onClick={() => {
              playBlip(900, 0.04, 0.03);
              onSelectLevel(3);
            }}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all ${
              activeLevelId === 3
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,240,255,0.5)]'
                : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800'
            }`}
          >
            NIVEL 3: EMPRESAS
          </button>
        </div>

        {/* Telemetry KPIs */}
        <div className="hidden xl:flex items-center gap-3 text-[10px] font-['IBM_Plex_Mono']">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/60 border border-cyan-500/20">
            <span className="text-slate-400">ESTADO:</span>
            <span className="flex items-center gap-1 text-cyan-300 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              ACTIVO
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400">MÓDULOS:</span>
            <b className="text-cyan-300">9 + FINAL</b>
          </div>

          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400">ENTREGABLES:</span>
            <b className="text-emerald-400">100% PRÁCTICOS</b>
          </div>
        </div>

        {/* Weather & Clock */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Weather trigger */}
          <button
            type="button"
            onClick={cycleCity}
            title="Alternar nodo horario y clima"
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono transition-colors cursor-pointer"
          >
            {currentCity.condition === 'sol' ? (
              <Sun className="w-3.5 h-3.5 text-amber-300 animate-[spin_18s_linear_infinite]" />
            ) : currentCity.condition === 'nube' ? (
              <Cloud className="w-3.5 h-3.5 text-cyan-200" />
            ) : (
              <CloudRain className="w-3.5 h-3.5 text-blue-400" />
            )}
            <span>{currentCity.name}</span>
            <b className="text-white">{currentCity.temp}</b>
          </button>

          {/* Real-time Clock */}
          <div className="hidden sm:flex flex-col items-end font-mono text-[10px] text-slate-300 border-l border-slate-800 pl-3">
            <span className="text-cyan-300 font-semibold tracking-wider">{timeStr}</span>
            <span className="text-[9px] text-slate-500">{dateStr}</span>
          </div>
        </div>
      </div>

      {/* Row 2: Ticker & Explainer trigger */}
      <div className="flex items-center justify-between pt-1 border-t border-cyan-500/15 text-[11px]">
        <button
          type="button"
          onClick={() => {
            playBlip(680, 0.05, 0.04);
            onOpenMetodologia();
          }}
          aria-expanded={isMetodologiaOpen}
          className="group flex items-center gap-2 text-cyan-300 hover:text-cyan-100 font-['Rajdhani'] font-semibold tracking-wide cursor-pointer transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>¿Qué es la Metodología & Formato Universal de Clase (7 Pasos)?</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-cyan-400 transition-transform ${isMetodologiaOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
          <span>PLANTILLA CURRICULAR VILMAR OLIVERA</span>
          <span className="text-cyan-500">|</span>
          <span className="text-slate-300">CLASES 100% ORIENTADAS A ENTREGABLES</span>
        </div>
      </div>
    </header>
  );
};
