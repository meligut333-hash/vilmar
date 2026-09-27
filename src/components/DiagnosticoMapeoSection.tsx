import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import {
  AREAS_DIAGNOSTICO_NEGOCIO,
  PREGUNTAS_DIAGNOSTICO_NEGOCIO,
  MAPEO_PROCESO_ETAPAS,
  CONTACTO_INFO
} from '../data/masterCourseData';
import {
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  HelpCircle,
  Cpu,
  ArrowDownRight,
  Database,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { playBlip } from '../utils/audio';

export const DiagnosticoMapeoSection: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>('Ventas');
  const [activePregunta, setActivePregunta] = useState<number>(0);
  const [activeMapeoEtapa, setActiveMapeoEtapa] = useState<number>(1);

  const transformationSteps = [
    {
      etapa: 'PROBLEMA',
      pregunta: '¿Qué está funcionando mal o qué tarea consume recursos innecesariamente?',
      ejemplo: 'Cotizaciones comerciales y carga de pedidos demoran 48 horas en responderse.',
      color: 'text-rose-400'
    },
    {
      etapa: 'IMPACTO',
      pregunta: '¿Qué consecuencias genera en el negocio?',
      ejemplo: 'Pérdida del 35% de prospectos que compran a la competencia y sobrecarga del equipo.',
      color: 'text-amber-400'
    },
    {
      etapa: 'OPORTUNIDAD',
      pregunta: '¿Qué podría mejorarse?',
      ejemplo: 'Responder en menos de 2 minutos y calificar el interés antes de pasar a un asesor.',
      color: 'text-sky-400'
    },
    {
      etapa: 'IA',
      pregunta: '¿Dónde puede intervenir la tecnología?',
      ejemplo: 'Modelo de lenguaje que interpreta el pedido, extrae datos y redacta el presupuesto.',
      color: 'text-cyan-300'
    },
    {
      etapa: 'SOLUCIÓN',
      pregunta: '¿Cómo transformar esa oportunidad en una solución concreta?',
      ejemplo: 'Dashboard integral conectado a planillas con IA para calcular presupuestos y botón de WhatsApp para atención humana.',
      color: 'text-emerald-400'
    }
  ];

  return (
    <div className="space-y-24">
      {/* SECTION 15: SOLUCIONES DE IA PARA EMPRENDEDORES, NEGOCIOS Y EMPRESAS */}
      <div className="text-center max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-3 font-semibold">
          Estrategia Operativa de Alto Impacto
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
          SOLUCIONES DE IA PARA EMPRENDEDORES, NEGOCIOS Y EMPRESAS
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-cyan-200 mb-6">
          Detectamos dónde la inteligencia artificial puede generar una mejora real en tu negocio.
        </p>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-cyan-500/20 backdrop-blur-md max-w-3xl mx-auto space-y-3 text-sm text-slate-300 font-light leading-relaxed">
          <p>
            No todos los negocios necesitan las mismas herramientas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-cyan-300 pt-1">
            <span>Primero entendemos el problema</span>
            <span>→</span>
            <span>Después analizamos el proceso</span>
            <span>→</span>
            <span>Luego identificamos la oportunidad</span>
            <span>→</span>
            <span>Finalmente diseñamos e implementamos la solución adecuada</span>
          </div>
          <p className="text-xs text-slate-400 pt-2 border-t border-white/5">
            No vender herramientas por vender herramientas. No implementar tecnología sin necesidad. Diseñar soluciones a partir de necesidades reales.
          </p>
        </div>
      </div>

      {/* SECTION 16: DIAGNÓSTICO DEL NEGOCIO — PRIMERO ENTENDEMOS TU NEGOCIO */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Paso Fundamental 01
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            PRIMERO ENTENDEMOS TU NEGOCIO.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Auditamos integralmente tus áreas operativas para descubrir dónde se encuentran las mayores fugas de tiempo y recursos.
          </p>
        </div>

        {/* 12 Áreas Analizadas (Chips interactivos con clic) */}
        <div className="mb-10">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 text-center">
            Áreas de análisis en tu empresa (hacé clic para evaluar):
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {AREAS_DIAGNOSTICO_NEGOCIO.map((area) => {
              const isSelected = activeArea === area;
              return (
                <button
                  key={area}
                  onClick={() => {
                    playBlip(750, 0.03, 0.02);
                    setActiveArea(area);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_18px_rgba(6,182,212,0.5)] scale-105'
                      : 'bg-slate-950/70 text-slate-300 border border-white/5 hover:border-cyan-500/40 hover:text-white'
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>

        {/* 7 Preguntas Clave del Diagnóstico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PREGUNTAS_DIAGNOSTICO_NEGOCIO.map((preg, idx) => {
            const isSelected = activePregunta === idx;
            return (
              <div
                key={idx}
                onClick={() => {
                  playBlip(800, 0.03, 0.02);
                  setActivePregunta(idx);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-950/50 border-white/5 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 text-xs font-mono font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {preg}
                    </h4>
                    <p className="text-xs text-slate-400 leading-snug">
                      Identificamos puntos ciegos en {activeArea} para cuantificar el impacto y plantear la automatización adecuada.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 17: MAPEO DE PROCESOS — MAPEAMOS CÓMO FUNCIONA EL PROCESO */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Paso Fundamental 02
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            MAPEAMOS CÓMO FUNCIONA EL PROCESO.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Descomponemos visualmente el flujo de datos para detectar pasos innecesarios, tareas repetitivas y puntos clave de automatización.
          </p>
        </div>

        {/* Flujo animado: ENTRADA → PROCESO → TAREAS → INFORMACIÓN → RESULTADO */}
        <div className="relative mb-10">
          {/* Animated Connecting Data Stream Bar */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400 to-sky-500/20 -translate-y-1/2 z-0 animate-pulse" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {MAPEO_PROCESO_ETAPAS.map((etapa, idx) => {
              const isSelected = activeMapeoEtapa === idx;
              return (
                <div
                  key={etapa.etapa}
                  onClick={() => {
                    playBlip(750 + idx * 40, 0.03, 0.02);
                    setActiveMapeoEtapa(idx);
                  }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border backdrop-blur-md flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/90 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-102'
                      : 'bg-slate-950/60 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-slate-900/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        Paso 0{idx + 1}
                      </span>
                      <Workflow className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h4 className="font-['Rajdhani'] font-extrabold text-lg text-white mb-1">
                      {etapa.etapa}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {etapa.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                    <span>{isSelected ? 'Etapa Activa' : 'Detalles'}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Criterios Analizados en el Mapeo */}
        <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/5 max-w-4xl mx-auto">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold text-center">
            Variables Clave que Analizamos en cada Mapeo:
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-300">
            <span>• Entradas</span>
            <span>• Tareas</span>
            <span>• Responsables</span>
            <span>• Herramientas</span>
            <span>• Información</span>
            <span>• Salidas</span>
            <span>• Pasos innecesarios</span>
            <span>• Tareas repetitivas</span>
            <span className="text-cyan-300 font-semibold">• Puntos de automatización</span>
          </div>
        </div>
      </div>

      {/* SECTION 18: PROBLEMA → IMPACTO → OPORTUNIDAD → IA → SOLUCIÓN */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Transformación Estratégica
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            PROBLEMA → IMPACTO → OPORTUNIDAD → IA → SOLUCIÓN
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            La metamorfosis de un cuello de botella empresarial en un activo digital automatizado de alto valor.
          </p>
        </div>

        {/* 5 Transformation Cards Connected by Glowing Lines */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {transformationSteps.map((step, idx) => (
            <TiltCard
              key={step.etapa}
              maxTilt={6}
              glowColor="rgba(6, 182, 212, 0.25)"
              className="p-5 rounded-2xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-['Rajdhani'] font-extrabold text-xl ${step.color}`}>
                    {step.etapa}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h5 className="text-xs font-semibold text-slate-200 mb-2 leading-snug">
                  {step.pregunta}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {step.ejemplo}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400">
                {idx < 4 ? 'Avanza hacia la solución →' : '✓ Sistema Implementado'}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};
