import React, { useState } from 'react';
import { MODULOS_CURSO_INICIAL, RECORRIDO_CURSO, ModuloPrograma } from '../data/masterCourseData';
import { NIVELES_CURSO } from '../data/curso';
import { TiltCard } from './TiltCard';
import { TactileButton } from './TactileButton';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Wrench,
  BookOpen,
  ArrowDown
} from 'lucide-react';
import { playBlip } from '../utils/audio';

interface CursoSectionProps {
  onSelectModulo: (modulo: ModuloPrograma) => void;
  onOpenPdfNiveles: () => void;
  onConsultarInscripcion: () => void;
}

export const CursoSection: React.FC<CursoSectionProps> = ({
  onSelectModulo,
  onOpenPdfNiveles,
  onConsultarInscripcion
}) => {
  const [activeFaseIndex, setActiveFaseIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'recorrido' | 'programa-14' | 'niveles-pdf'>('recorrido');

  const accionesAprenderHaciendo = [
    { verbo: 'Entrar a las herramientas', desc: 'Acceso directo a las interfaces sin intermediarios ni demoras.' },
    { verbo: 'Probar', desc: 'Experimentar con prompts, parámetros, formatos e inputs reales.' },
    { verbo: 'Crear', desc: 'Generar copys, piezas visuales, audios, tablas y soluciones integradas.' },
    { verbo: 'Corregir', desc: 'Ajustar alucinaciones, afinar el tono de voz y validar la lógica.' },
    { verbo: 'Aplicar', desc: 'Integrar lo creado a tus tareas operativas o profesionales diarias.' },
    { verbo: 'Construir', desc: 'Consolidar tu propio sistema de IA terminado y funcionando.' }
  ];

  return (
    <section id="curso" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header (Section 12) */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-[0.25em] font-mono text-cyan-400 mb-3 font-semibold">
          Formación Práctica de Alto Rendimiento
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
          CURSO IA APLICADA
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-cyan-200 mb-6">
          Aprendé a utilizar herramientas prácticas para trabajar, crear y optimizar.
        </p>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
          Una formación práctica para personas que quieren incorporar inteligencia artificial a su actividad profesional, emprendimiento o trabajo, aunque no tengan conocimientos previos.
          El objetivo no es aprender herramientas de memoria. El objetivo es aprender a utilizarlas para resolver problemas y mejorar la manera de trabajar.
        </p>
      </div>

      {/* Enfoque del Curso (Section 13: 20% TEORÍA / 80% PRÁCTICA & APRENDER HACIENDO) */}
      <div className="mb-20 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-10 mb-10">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              Distribución Pedagógica
            </div>
            <div className="flex items-baseline gap-6">
              <div>
                <span className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl text-slate-400">
                  20%
                </span>
                <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
                  Teoría
                </span>
              </div>
              <span className="text-2xl text-cyan-500/40 font-bold">/</span>
              <div>
                <span className="font-['Rajdhani'] font-extrabold text-4xl sm:text-5xl text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  80%
                </span>
                <span className="block text-xs font-mono text-cyan-400 uppercase tracking-wider mt-1">
                  Práctica Real
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-light">
              No es un curso para sentarte solamente a escuchar teoría sobre inteligencia artificial. La formación está orientada a resolver casos reales desde la primera sesión.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
              Filosofía Central: APRENDER HACIENDO
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {accionesAprenderHaciendo.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                >
                  <div className="text-xs font-bold text-cyan-300 mb-1">
                    {item.verbo}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 12 SEMANAS & DATOS CLAVE */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-950/40 border border-white/5">
            <div className="font-['Rajdhani'] font-extrabold text-2xl text-cyan-300">12 SEMANAS</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Duración Total</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-white/5">
            <div className="font-['Rajdhani'] font-extrabold text-2xl text-sky-300">1 CLASE / SEM</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Clases en Vivo</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-white/5">
            <div className="font-['Rajdhani'] font-extrabold text-2xl text-emerald-400">SIN CÓDIGO</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">100% No-Code</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/40 border border-white/5">
            <div className="font-['Rajdhani'] font-extrabold text-2xl text-indigo-300">PROYECTO FINAL</div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Sistema Operando</div>
          </div>
        </div>
      </div>

      {/* Tabs Selector: Recorrido Visual vs 14 Módulos Detallados vs PDF */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <button
          onClick={() => {
            playBlip(750, 0.03, 0.02);
            setActiveTab('recorrido');
          }}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'recorrido'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Recorrido de Evolución ({RECORRIDO_CURSO.length} Etapas)</span>
        </button>
        <button
          onClick={() => {
            playBlip(750, 0.03, 0.02);
            setActiveTab('programa-14');
          }}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'programa-14'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Programa Completo (14 Módulos)</span>
        </button>
        <button
          onClick={() => {
            playBlip(750, 0.03, 0.02);
            setActiveTab('niveles-pdf');
          }}
          className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'niveles-pdf'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Estructura por 3 Niveles</span>
        </button>
      </div>

      {/* TAB 1: RECORRIDO VISUAL DEL CURSO (Section 14) */}
      {activeTab === 'recorrido' && (
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
              Evolución Progresiva
            </div>
            <h3 className="text-2xl font-bold font-['Rajdhani'] text-white">
              DE CERO A CONSTRUIR TUS PROPIAS SOLUCIONES
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Un camino estructurado paso a paso que te lleva desde los conceptos esenciales hasta sistemas y soluciones integradas.
            </p>
          </div>

          {/* Interactive Visual Progression */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RECORRIDO_CURSO.map((etapa, idx) => {
                const isSelected = activeFaseIndex === idx;
                return (
                  <div
                    key={etapa.fase}
                    onClick={() => {
                      playBlip(700 + idx * 40, 0.03, 0.02);
                      setActiveFaseIndex(idx);
                    }}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 backdrop-blur-md flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-102'
                        : 'bg-slate-900/60 border-cyan-500/20 hover:border-cyan-400/40 hover:bg-slate-900/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                        <span>Paso 0{idx + 1}</span>
                        {idx < RECORRIDO_CURSO.length - 1 && (
                          <span className="text-slate-500">↓</span>
                        )}
                      </div>
                      <h4 className="font-['Rajdhani'] font-extrabold text-lg text-white mb-1">
                        {etapa.fase}
                      </h4>
                      <p className="text-xs font-semibold text-cyan-200/90 mb-2">
                        {etapa.subtitulo}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {etapa.descripcion}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-300 flex items-center justify-between">
                      <span>{isSelected ? 'Etapa Seleccionada' : 'Seleccionar'}</span>
                      <span>→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 14 MÓDULOS DETALLADOS */}
      {activeTab === 'programa-14' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULOS_CURSO_INICIAL.map((mod) => (
            <TiltCard
              key={mod.id}
              maxTilt={7}
              glowColor="rgba(6, 182, 212, 0.2)"
              className="rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 p-6 flex flex-col justify-between hover:border-cyan-400/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
              onClick={() => onSelectModulo(mod)}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3 font-semibold">
                  <span>MÓDULO {mod.numero}</span>
                  <span className="text-slate-500 text-[11px]">Semana {mod.numero <= 12 ? mod.numero : 'Final'}</span>
                </div>

                <h4 className="text-xl font-bold text-white font-['Rajdhani'] mb-2 group-hover:text-cyan-300 transition-colors leading-snug">
                  {mod.titulo}
                </h4>

                <p className="text-xs text-cyan-200/80 mb-3 font-medium">
                  {mod.tagline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {mod.descripcion}
                </p>
              </div>

              <div className="pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs">
                <span className="text-emerald-400/90 font-medium truncate max-w-[80%]">
                  ✓ {mod.entregable}
                </span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      )}

      {/* TAB 3: ESTRUCTURA POR 3 NIVELES */}
      {activeTab === 'niveles-pdf' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {NIVELES_CURSO.map((nivel) => (
            <div
              key={nivel.id}
              className="rounded-2xl bg-slate-900/70 border border-cyan-500/25 p-7 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                  Nivel 0{nivel.id}
                </div>
                <h4 className="text-2xl font-bold font-['Rajdhani'] text-white mb-2">
                  {nivel.nombre}
                </h4>
                <p className="text-xs font-semibold text-cyan-200/90 mb-4">
                  {nivel.tagline}
                </p>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {nivel.objetivo}
                </p>

                <div className="space-y-3 border-t border-white/10 pt-4 mb-6">
                  <div className="text-xs text-slate-400">
                    <span className="text-slate-500">Duración:</span>{' '}
                    <span className="text-slate-200 font-medium">{nivel.duracion}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="text-slate-500">Dirigido a:</span>{' '}
                    <span className="text-slate-200 font-medium">{nivel.perfil}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    Módulos Incluidos ({nivel.modulos.length}):
                  </div>
                  <div className="max-h-48 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin">
                    {nivel.modulos.map((m) => (
                      <div
                        key={m.id}
                        className="text-xs text-slate-300 p-2 rounded-lg bg-slate-950/50 border border-white/5 flex items-center justify-between"
                      >
                        <span className="truncate">{m.titulo}</span>
                        <span className="text-[10px] font-mono text-cyan-400 ml-2 shrink-0">
                          Módulo 0{m.numero}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <TactileButton
                variant="secondary"
                size="sm"
                className="w-full"
                onClick={onOpenPdfNiveles}
              >
                Ver Metodología de 7 Pasos
              </TactileButton>
            </div>
          ))}
        </div>
      )}

      {/* CTA Bottom of Course */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-4">
          <TactileButton
            variant="primary"
            size="lg"
            onClick={onConsultarInscripcion}
            icon={<Sparkles className="w-5 h-5 text-slate-950" />}
          >
            QUIERO APRENDER IA — CONSULTAR INSCRIPCIÓN
          </TactileButton>
          <TactileButton
            variant="ghost"
            size="lg"
            onClick={onOpenPdfNiveles}
            icon={<ExternalLink className="w-4 h-4 text-cyan-400" />}
          >
            Ver Metodología y Entregables
          </TactileButton>
        </div>
      </div>
    </section>
  );
};
