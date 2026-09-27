import React, { useState } from 'react';
import { TactileButton } from './TactileButton';
import { ArrowDown, GraduationCap, Building2, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface HeroSectionProps {
  onLearnClick: () => void;
  onImplementClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLearnClick, onImplementClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
    >
      {/* Subtle digital mist ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-transparent rounded-full blur-[110px] z-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * -1.5}px), calc(-50% + ${mousePos.y * -1.5}px))`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Brand Kicker / Eyebrow */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-6 font-semibold">
          <span>Vilmar Olivera</span>
          <span className="text-slate-500">·</span>
          <span>IA Aplicada</span>
          <span className="text-slate-500">·</span>
          <span className="text-emerald-400">Enfoque Práctico de Negocio</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-['Rajdhani'] leading-[1.08] mb-6 drop-shadow-[0_4px_30px_rgba(6,182,212,0.25)]">
          INTELIGENCIA ARTIFICIAL <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            APLICADA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-semibold text-slate-100 max-w-3xl mb-6 leading-relaxed">
          Aprendé a usar IA, aplicala a tu trabajo y convertí problemas de negocio en soluciones concretas.
        </p>

        {/* Explanatory Paragraph */}
        <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          La inteligencia artificial no consiste solamente en aprender herramientas. Consiste en entender qué problema querés resolver, detectar dónde existe una oportunidad y elegir la tecnología adecuada para convertirla en una solución.
        </p>

        {/* 3D Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <TactileButton
            variant="primary"
            size="lg"
            onClick={onLearnClick}
            icon={<GraduationCap className="w-5 h-5 text-slate-950" />}
            className="w-full sm:w-auto"
          >
            QUIERO APRENDER IA
          </TactileButton>

          <TactileButton
            variant="secondary"
            size="lg"
            onClick={onImplementClick}
            icon={<Building2 className="w-5 h-5 text-cyan-400" />}
            className="w-full sm:w-auto"
          >
            QUIERO IMPLEMENTAR IA
          </TactileButton>
        </div>

        {/* Clean Typographic High-Level Pillars (Zero Pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-cyan-500/15 w-full max-w-3xl text-left">
          <div className="group cursor-pointer" onClick={onLearnClick}>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-semibold mb-1 flex items-center justify-between">
              <span>01. APRENDER IA</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-500/50 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Desde cero, sin tecnicismos. Pensamiento estratégico, prompting y herramientas líderes.
            </p>
          </div>

          <div className="group cursor-pointer" onClick={onLearnClick}>
            <div className="text-xs uppercase tracking-wider text-sky-400 font-mono font-semibold mb-1 flex items-center justify-between">
              <span>02. APLICAR IA</span>
              <ChevronRight className="w-3.5 h-3.5 text-sky-500/50 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Ahorro de horas semanales en tareas operativas, creación de contenidos y automatización.
            </p>
          </div>

          <div className="group cursor-pointer" onClick={onImplementClick}>
            <div className="text-xs uppercase tracking-wider text-indigo-400 font-mono font-semibold mb-1 flex items-center justify-between">
              <span>03. IMPLEMENTAR IA</span>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-500/50 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-slate-300 leading-snug">
              Soluciones integrales de IA y automatización para negocios, ventas y gestión de datos.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div
        onClick={onLearnClick}
        className="mt-12 cursor-pointer inline-flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors select-none"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Descubrir</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};
