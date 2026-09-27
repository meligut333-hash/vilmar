import React, { useState } from 'react';
import { METODO_PASOS, INDICADORES_MEDICION } from '../data/masterCourseData';
import { Search, GitFork, Layout, Hammer, TrendingUp, CheckCircle, ArrowRight, ArrowDown } from 'lucide-react';
import { playBlip } from '../utils/audio';

export const MetodoSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'GitFork':
        return <GitFork className="w-5 h-5" />;
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  const pasosConstruccionReal = [
    { fase: 'PROBLEMA', desc: 'Identificación precisa del dolor operativo.' },
    { fase: 'ANÁLISIS', desc: 'Desglose del proceso actual y herramientas.' },
    { fase: 'DISEÑO', desc: 'Arquitectura lógica y selección del stack.' },
    { fase: 'PROTOTIPO', desc: 'Primer artefacto funcional en 48 horas.' },
    { fase: 'PRUEBA', desc: 'Validación en casos reales con usuarios.' },
    { fase: 'IMPLEMENTACIÓN', desc: 'Puesta en producción y adopción del equipo.' },
    { fase: 'OPTIMIZACIÓN', desc: 'Monitoreo de métricas y escalado continuo.' }
  ];

  const currentStep = METODO_PASOS[activeStepIndex];

  return (
    <section id="metodo" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* SECTION 25: EL MÉTODO — NO EMPEZAMOS POR LA HERRAMIENTA. EMPEZAMOS POR EL PROBLEMA. */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-3 font-semibold">
            Rigor Metodológico
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
            NO EMPEZAMOS POR LA HERRAMIENTA.{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              EMPEZAMOS POR EL PROBLEMA.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            La tecnología es el medio, nunca el fin. Nuestro método garantiza que cada implementación resuelva un cuello de botella real, sea adoptada por tu equipo y genere un retorno directo.
          </p>
        </div>

        {/* 5 Nodos Conectados con Línea Luminosa y Partícula Animada */}
        <div className="relative mb-12">
          {/* Animated Glowing Track for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-blue-500/20 -translate-y-1/2 z-0 overflow-hidden">
            <div className="w-24 h-full bg-cyan-300 shadow-[0_0_15px_#00f0ff] animate-[pulse_2s_infinite]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {METODO_PASOS.map((paso, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <div
                  key={paso.numero}
                  onClick={() => {
                    playBlip(750 + idx * 40, 0.03, 0.02);
                    setActiveStepIndex(idx);
                  }}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 backdrop-blur-md flex flex-col justify-between border ${
                    isSelected
                      ? 'bg-cyan-950/90 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.45)] scale-103'
                      : 'bg-slate-900/60 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-slate-900/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-['Rajdhani'] font-extrabold text-2xl text-cyan-400">
                        {paso.numero}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                            : 'bg-slate-800 text-cyan-300'
                        }`}
                      >
                        {getStepIcon(paso.icono)}
                      </div>
                    </div>

                    <h3 className="font-['Rajdhani'] font-bold text-lg text-white mb-1 tracking-wide">
                      {paso.nombre}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {paso.descripcion}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-300/80 flex items-center justify-between">
                    <span>{isSelected ? 'Etapa Activa' : 'Ver Detalle'}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-cyan-500/30 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Etapa {currentStep.numero} del Método Vilmar Olivera
              </div>
              <h4 className="text-3xl font-extrabold font-['Rajdhani'] text-white">
                {currentStep.numero} — {currentStep.nombre}
              </h4>
            </div>
            <div className="text-left md:text-right">
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Entregable Concreto:</span>
              <span className="text-sm font-semibold text-emerald-400">
                ✓ {currentStep.entregable}
              </span>
            </div>
          </div>

          <p className="text-base text-slate-200 leading-relaxed mb-6 font-light">
            {currentStep.descripcion}
          </p>

          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Actividades y Criterios Clave:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentStep.puntos.map((pt, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 26: IMPLEMENTACIÓN REAL — DE LA IDEA A UNA SOLUCIÓN FUNCIONAL */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Construcción Tangible
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            DE LA IDEA A UNA SOLUCIÓN FUNCIONAL.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            El trabajo no termina en una consultoría teórica. Se entrega software, automatizaciones y tableros operando en tu empresa.
          </p>
        </div>

        {/* 7 Pasos: PROBLEMA → ANÁLISIS → DISEÑO → PROTOTIPO → PRUEBA → IMPLEMENTACIÓN → OPTIMIZACIÓN */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
          {pasosConstruccionReal.map((paso, idx) => (
            <React.Fragment key={paso.fase}>
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-center min-w-[130px]">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">Paso 0{idx + 1}</div>
                <div className="text-xs font-bold text-white mt-0.5">{paso.fase}</div>
                <div className="text-[10px] text-slate-400 mt-1 leading-tight">{paso.desc}</div>
              </div>
              {idx < pasosConstruccionReal.length - 1 && (
                <span className="text-cyan-400 font-bold hidden sm:inline">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SECTION 27: MEDICIÓN — MEDIR EL CAMBIO (ANTES → DESPUÉS) */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Impacto Comprobado
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            MEDIR EL CAMBIO.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Las soluciones se evalúan por su impacto real en el proceso: menos horas perdidas, menos errores y mayor capacidad de respuesta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDICADORES_MEDICION.map((ind) => (
            <div
              key={ind.nombre}
              className="p-5 rounded-2xl bg-slate-950/70 border border-cyan-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                  Indicador: {ind.nombre}
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/20 text-slate-300">
                    <span className="text-rose-400 font-mono text-[10px] block uppercase font-bold">Antes:</span>
                    {ind.antes}
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-slate-200">
                    <span className="text-emerald-400 font-mono text-[10px] block uppercase font-bold">Después con IA:</span>
                    {ind.despues}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
