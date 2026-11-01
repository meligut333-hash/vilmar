import React from 'react';
import { TiltCard } from './TiltCard';
import { BookOpen, Cpu, Briefcase, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface QueHagoSectionProps {
  onLearnClick: () => void;
  onImplementClick: () => void;
}

export const QueHagoSection: React.FC<QueHagoSectionProps> = ({ onLearnClick, onImplementClick }) => {
  return (
    <section id="que-hago" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 mb-3 font-semibold">
          Soluciones de IA
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-6">
          NUESTRAS ÁREAS DE{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            TRABAJO
          </span>
        </h2>
      </div>

      {/* 3 Bloques Visuales con Efectos 3D y Glassmorphism Selectivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BLOQUE 1: FORMACIÓN PROFESIONAL */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(6, 182, 212, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-8 flex flex-col justify-between hover:border-cyan-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onLearnClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <BookOpen className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              FORMACIÓN PROFESIONAL
            </h3>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Programas prácticos para dominar IA generativa, prompting estratégico y herramientas líderes sin necesidad de conocimientos técnicos previos.
            </p>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
            <span>Ver Programa del Curso</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </TiltCard>

        {/* BLOQUE 2: MICRO-APPS & WEB */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(56, 189, 248, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-8 flex flex-col justify-between hover:border-sky-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onLearnClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-500/40 flex items-center justify-center text-sky-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <Cpu className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              MICRO-APPS & WEB
            </h3>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Desarrollo de herramientas personalizadas, automatización de flujos operativos y creación de soluciones digitales integradas con inteligencia artificial.
            </p>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-sky-300 group-hover:text-sky-200">
            <span>Explorar Casos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </TiltCard>

        {/* BLOQUE 3: CONSULTORÍA ESTRATÉGICA */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(99, 102, 241, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-8 flex flex-col justify-between hover:border-indigo-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onImplementClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Briefcase className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              CONSULTORÍA ESTRATÉGICA
            </h3>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Diagnóstico de procesos, optimización de flujos de trabajo y acompañamiento en la adopción de IA para mejorar la competitividad y rentabilidad de tu empresa.
            </p>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-indigo-300 group-hover:text-indigo-200">
            <span>Ver Soluciones para Negocios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
