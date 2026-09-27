import React, { useState } from 'react';
import { CASOS_PROYECTOS, CasoProyecto, CONTACTO_INFO } from '../data/masterCourseData';
import { TiltCard } from './TiltCard';
import { TactileButton } from './TactileButton';
import { Briefcase, ArrowRight, CheckCircle2, MessageSquare, ExternalLink, Cpu } from 'lucide-react';
import { playBlip } from '../utils/audio';
import { safeOpenExternal } from '../utils/navigation';

export const CasosProyectosSection: React.FC = () => {
  const [selectedCaso, setSelectedCaso] = useState<CasoProyecto>(CASOS_PROYECTOS[0]);

  return (
    <section id="casos" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header (Section 28) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-3 font-semibold">
          Evidencia Práctica
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
          IA APLICADA A PROBLEMAS REALES
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          No mostramos logos de herramientas aisladas. Mostramos soluciones construidas de punta a punta: desde el diagnóstico del dolor hasta el resultado medible en producción.
        </p>
      </div>

      {/* Case Studies Tabs / Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {CASOS_PROYECTOS.map((caso) => {
          const isSelected = selectedCaso.id === caso.id;
          return (
            <TiltCard
              key={caso.id}
              maxTilt={6}
              glowColor="rgba(6, 182, 212, 0.25)"
              className={`p-6 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                isSelected
                  ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.35)]'
                  : 'bg-slate-950/60 border-cyan-500/20 hover:border-cyan-400/50'
              }`}
              onClick={() => {
                playBlip(780, 0.03, 0.02);
                setSelectedCaso(caso);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-cyan-400">
                  <span>{caso.rubro}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                </div>

                <h3 className="text-xl font-bold font-['Rajdhani'] text-white mb-3">
                  {caso.titulo}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {caso.problema}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-300">
                <span className="font-semibold">{isSelected ? 'Caso Activo' : 'Ver Caso Completo'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Detailed View of Selected Case: PROBLEMA → PROCESO → SOLUCIÓN → TECNOLOGÍA → RESULTADO */}
      <div className="rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
              Estructura de Caso: {selectedCaso.rubro}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] text-white">
              {selectedCaso.titulo}
            </h3>
          </div>

          <TactileButton
            variant="secondary"
            size="sm"
            onClick={() => {
              const msg = encodeURIComponent(`Hola Vilmar, leí en tu web el caso de "${selectedCaso.titulo}" y quisiera implementar algo similar en mi negocio.`);
              safeOpenExternal(`https://wa.me/5493412852228?text=${msg}`);
            }}
            icon={<MessageSquare className="w-3.5 h-3.5 text-cyan-400" />}
          >
            Quiero una Solución Así
          </TactileButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* PROBLEMA */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-500/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-rose-400 uppercase mb-2">
                01. PROBLEMA
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCaso.problema}
              </p>
            </div>
          </div>

          {/* PROCESO */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-amber-500/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 uppercase mb-2">
                02. PROCESO
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCaso.proceso}
              </p>
            </div>
          </div>

          {/* SOLUCIÓN */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-sky-500/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-sky-400 uppercase mb-2">
                03. SOLUCIÓN
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCaso.solucion}
              </p>
            </div>
          </div>

          {/* TECNOLOGÍA */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase mb-2">
                04. TECNOLOGÍA
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCaso.tecnologia}
              </p>
            </div>
          </div>

          {/* RESULTADO */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">
                05. RESULTADO
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {selectedCaso.resultado}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
