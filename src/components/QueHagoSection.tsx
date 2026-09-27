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
    <section id="que-hago" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 mb-3 font-semibold">
          Propuesta de Valor Integral
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-6">
          DE APRENDER IA A{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            APLICARLA DE VERDAD.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
          Trabajo con inteligencia artificial desde una perspectiva práctica. Enseño a personas y profesionales a incorporar IA a su trabajo y desarrollo soluciones para emprendedores, negocios y empresas que buscan mejorar procesos, automatizar tareas y utilizar mejor su información.
        </p>
      </div>

      {/* 3 Bloques Visuales con Efectos 3D y Glassmorphism Selectivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* BLOQUE 1: APRENDER */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(6, 182, 212, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/25 p-8 flex flex-col justify-between hover:border-cyan-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onLearnClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <BookOpen className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
              Fase 01 · Formación Práctica
            </div>
            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              APRENDER
            </h3>

            <p className="text-cyan-200/90 font-medium text-sm mb-4 leading-relaxed">
              Comprender y utilizar herramientas de inteligencia artificial.
            </p>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Para profesionales y principiantes que quieren dominar modelos generativos, prompting estructurado y razonamiento con IA sin fórmulas mágicas ni códigos inaccesibles.
            </p>

            <ul className="space-y-2 text-xs text-slate-300 border-t border-cyan-500/15 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Pensar con IA y formular prompts que funcionan</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Análisis veloz de documentos con NotebookLM</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Stack líder: ChatGPT, Gemini, Claude y Midjourney</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
            <span>Ver Programa del Curso</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </TiltCard>

        {/* BLOQUE 2: APLICAR */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(56, 189, 248, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-md border border-sky-500/25 p-8 flex flex-col justify-between hover:border-sky-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onLearnClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-500/40 flex items-center justify-center text-sky-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <Cpu className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono text-sky-400 tracking-widest uppercase mb-1">
              Fase 02 · Productividad Real
            </div>
            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              APLICAR
            </h3>

            <p className="text-sky-200/90 font-medium text-sm mb-4 leading-relaxed">
              Incorporar IA a tareas, procesos y actividades reales.
            </p>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Llevar la tecnología a tu día a día laboral. Crear contenido consistente, acelerar la redacción comercial, resumir reuniones y automatizar tareas repetitivas sin intermediarios.
            </p>

            <ul className="space-y-2 text-xs text-slate-300 border-t border-sky-500/15 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Ahorro de 5 a 10 horas semanales en tareas rutinarias</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Fábrica de contenidos: copys, guiones, imágenes y video</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Formularios y captación ágil por medio de redireccionamiento directo</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 flex items-center justify-between text-xs font-semibold text-sky-300 group-hover:text-sky-200">
            <span>Explorar Casos Prácticos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </TiltCard>

        {/* BLOQUE 3: IMPLEMENTAR */}
        <TiltCard
          maxTilt={8}
          glowColor="rgba(99, 102, 241, 0.22)"
          className="rounded-2xl bg-slate-900/60 backdrop-blur-md border border-indigo-500/25 p-8 flex flex-col justify-between hover:border-indigo-400/60 shadow-[0_10px_35px_rgba(0,0,0,0.5)] group"
          onClick={() => {
            playBlip(800, 0.03, 0.02);
            onImplementClick();
          }}
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-950/70 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <Briefcase className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-1">
              Fase 03 · Soluciones de Negocio
            </div>
            <h3 className="text-2xl font-bold text-white font-['Rajdhani'] tracking-wide mb-3">
              IMPLEMENTAR
            </h3>

            <p className="text-indigo-200/90 font-medium text-sm mb-4 leading-relaxed">
              Diseñar y construir soluciones de IA y automatización para negocios y empresas.
            </p>

            <p className="text-xs text-slate-300/90 leading-relaxed mb-6">
              Desarrollo de soluciones a medida: dashboards integrados de ventas, clientes, inventario, pagos y procesos, con IA aplicada para análisis y redireccionamiento a WhatsApp para atención humana.
            </p>

            <ul className="space-y-2 text-xs text-slate-300 border-t border-indigo-500/15 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Diagnóstico estratégico de procesos y flujos de información</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Dashboards centralizados con redireccionamiento a WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Capacitación del equipo para adopción garantizada</span>
              </li>
            </ul>
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
