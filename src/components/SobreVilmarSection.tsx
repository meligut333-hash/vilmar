import React from 'react';
import { TactileButton } from './TactileButton';
import { TiltCard } from './TiltCard';
import { CheckCircle2, GraduationCap, Building, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface SobreVilmarSectionProps {
  onLearnClick: () => void;
  onImplementClick: () => void;
}

export const SobreVilmarSection: React.FC<SobreVilmarSectionProps> = ({
  onLearnClick,
  onImplementClick
}) => {
  return (
    <section id="sobre-vilmar" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* SECTION 47: MENSAJE CENTRAL ESTRATÉGICO */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-950/70 via-slate-900/90 to-blue-950/70 border border-cyan-400/40 p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-xl">
        <div className="text-xs uppercase tracking-[0.3em] font-mono text-cyan-400 mb-4 font-semibold">
          Premisa Fundamental
        </div>
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-tight leading-tight max-w-4xl mx-auto mb-4">
          NO NECESITÁS CONOCER TODAS LAS HERRAMIENTAS. <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-white bg-clip-text text-transparent">
            NECESITÁS SABER DÓNDE APLICAR LA IA.
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Las herramientas cambian semana a semana. El criterio para detectar problemas y diseñar soluciones rentables permanece para siempre.
        </p>
      </div>

      {/* SECTION 29: SOBRE VILMAR — INTELIGENCIA ARTIFICIAL CON ENFOQUE PRÁCTICO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Card with Photo */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl absolute top-8 left-8 -z-10 pointer-events-none" />

            {/* Portrait Image of Vilmar Olivera */}
            <div className="relative mb-6 rounded-2xl overflow-hidden border border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.3)] group">
              <img
                src="https://i.postimg.cc/LXJqy5tJ/Chat-GPT-Image-29-may-2026-12-37-57.png"
                alt="Vilmar Olivera | Experta en IA Aplicada"
                width={500}
                height={350}
                className="w-full h-72 sm:h-84 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              {/* Cinematic bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent opacity-85 pointer-events-none" />

              {/* Holographic Watermark / Status Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none">
                <span className="text-cyan-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Vilmar Olivera</span>
                </span>
                <span className="text-slate-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-md">
                  Experta en IA Aplicada
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="text-2xl font-bold font-['Rajdhani'] text-white">
                VILMAR OLIVERA
              </h3>
              <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                IA Aplicada · AI Quantum Studio
              </div>
            </div>

            <div className="text-xs text-slate-300 leading-relaxed space-y-3 mb-6">
              <p>
                Soy Vilmar Olivera. Trabajo en la intersección entre inteligencia artificial, creatividad, comunicación, automatización y soluciones digitales.
              </p>
              <p>
                Mi enfoque es simple: entender primero el problema, detectar la oportunidad y utilizar la tecnología adecuada para convertirla en una solución concreta.
              </p>
              <p>
                Además de desarrollar soluciones para negocios y empresas, creo y dicto formación en inteligencia artificial aplicada para que más personas puedan incorporar estas herramientas a su trabajo.
              </p>
            </div>

            <div className="space-y-2 border-t border-cyan-500/20 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Formación práctica y real (Aprender IA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Automatización de flujos y tareas (Aplicar IA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Soluciones para negocios y empresas (Implementar IA)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Principles */}
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 mb-3 font-semibold">
            Posicionamiento & Valores
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-6">
            INTELIGENCIA ARTIFICIAL CON ENFOQUE PRÁCTICO.
          </h2>

          <div className="space-y-4 text-base text-slate-300 font-light leading-relaxed mb-8">
            <p>
              La inteligencia artificial no consiste solamente en conocer herramientas. Consiste en entender qué problema querés resolver, detectar dónde existe una oportunidad y utilizar la tecnología adecuada para convertirla en una solución.
            </p>
            <p>
              El objetivo de cada desarrollo o curso no es memorizar modelos que mañana se actualizan, sino <strong className="text-white font-semibold">aprender a pensar con la tecnología</strong> y ponerla al servicio de los resultados de negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20">
              <div className="font-mono text-cyan-400 font-bold uppercase mb-1">Para Personas & Profesionales</div>
              <p className="text-slate-300">
                Incorporar IA en tareas cotidianas para ahorrar entre 5 y 10 horas semanales y potenciar la creatividad.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-sky-500/20">
              <div className="font-mono text-sky-400 font-bold uppercase mb-1">Para Negocios & Empresas</div>
              <p className="text-slate-300">
                Diagnosticar cuellos de botella e implementar dashboards integrados, sistemas con IA aplicada y flujos con retorno medible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 30: DOS CAMINOS (GRANDES TARJETAS 3D) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Elige tu Propósito
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            DOS CAMINOS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Seleccioná cómo querés comenzar a trabajar hoy con inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CAMINO 1: QUIERO APRENDER IA */}
          <TiltCard
            maxTilt={7}
            glowColor="rgba(6, 182, 212, 0.25)"
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border-2 border-cyan-500/30 hover:border-cyan-400/70 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
                Ruta 01 · Formación Práctica
              </div>

              <h4 className="text-3xl font-extrabold font-['Rajdhani'] text-white mb-3">
                QUIERO APRENDER IA
              </h4>

              <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
                Formación práctica para incorporar inteligencia artificial a tu trabajo, emprendimiento o actividad profesional, comenzando desde cero y con foco 100% en proyectos reales.
              </p>

              <div className="space-y-2 border-t border-white/10 pt-4 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>12 semanas · 1 clase semanal en vivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>80% práctica real y 20% teoría aplicada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Proyecto final y certificación oficial</span>
                </div>
              </div>
            </div>

            <TactileButton
              variant="primary"
              size="lg"
              onClick={onLearnClick}
              className="w-full"
              icon={<ArrowRight className="w-4 h-4 text-slate-950" />}
            >
              CONOCER EL CURSO
            </TactileButton>
          </TiltCard>

          {/* CAMINO 2: QUIERO IMPLEMENTAR IA */}
          <TiltCard
            maxTilt={7}
            glowColor="rgba(56, 189, 248, 0.25)"
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border-2 border-sky-500/30 hover:border-sky-400/70 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-sky-300 mb-6">
                <Building className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-1 font-semibold">
                Ruta 02 · Consultoría & Soluciones
              </div>

              <h4 className="text-3xl font-extrabold font-['Rajdhani'] text-white mb-3">
                QUIERO IMPLEMENTAR IA
              </h4>

              <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
                Analizamos tu negocio y desarrollamos soluciones de inteligencia artificial, automatización y optimización de procesos a medida para resolver cuellos de botella reales.
              </p>

              <div className="space-y-2 border-t border-white/10 pt-4 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Diagnóstico operativo previo sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Mapeo y prototipo funcional en menos de 10 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Capacitación del equipo y soporte de evolución</span>
                </div>
              </div>
            </div>

            <TactileButton
              variant="secondary"
              size="lg"
              onClick={onImplementClick}
              className="w-full"
              icon={<ArrowRight className="w-4 h-4 text-cyan-400" />}
            >
              SOLICITAR DIAGNÓSTICO
            </TactileButton>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
