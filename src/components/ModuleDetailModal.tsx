import React, { useState, useEffect, useRef } from 'react';
import { ModuleItem } from '../types';
import { ModuleAvatar } from './ModuleAvatar';
import { speakText, stopSpeaking, playBlip } from '../utils/audio';
import {
  X,
  Volume2,
  VolumeX,
  Target,
  Lightbulb,
  Wrench,
  ListOrdered,
  Play,
  TrendingUp,
  CheckCircle2,
  Share2,
  MessageCircle,
  HelpCircle,
  Award
} from 'lucide-react';

interface ModuleDetailModalProps {
  module: ModuleItem | null;
  onClose: () => void;
  onOpenConsultation: (query: string) => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onOpenConsultation
}) => {
  const [isNarrating, setIsNarrating] = useState(false);
  const [activeTab, setActiveTab] = useState<'formato' | 'temario' | 'entregable'>('formato');
  const [waveSeed, setWaveSeed] = useState(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset narration when modal changes
    stopSpeaking();
    setIsNarrating(false);

    if (module) {
      playBlip(750, 0.04, 0.03);
    }

    return () => {
      stopSpeaking();
    };
  }, [module]);

  useEffect(() => {
    if (!isNarrating) return;
    const interval = setInterval(() => {
      setWaveSeed(prev => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, [isNarrating]);

  if (!module) return null;

  const handleToggleNarration = () => {
    if (isNarrating) {
      stopSpeaking();
      setIsNarrating(false);
    } else {
      setIsNarrating(true);
      const textToRead = `${module.titulo}. ${module.subtitulo}. Objetivo de la clase: ${module.objetivo}. Herramientas a utilizar: ${module.herramientas.join(', ')}. Entregable que te llevarás terminado: ${module.entregable}.`;
      speakText(textToRead, () => {
        setIsNarrating(false);
      });
    }
  };

  const stepsInfo = [
    {
      num: 1,
      name: 'OBJETIVO',
      desc: module.objetivo,
      icon: <Target className="w-4 h-4 text-cyan-400" />
    },
    {
      num: 2,
      name: 'CONCEPTO',
      desc: module.concepto,
      icon: <Lightbulb className="w-4 h-4 text-amber-400" />
    },
    {
      num: 3,
      name: 'HERRAMIENTAS',
      desc: module.herramientas.join(' · '),
      icon: <Wrench className="w-4 h-4 text-sky-400" />
    },
    {
      num: 4,
      name: 'PASO A PASO',
      desc: module.pasos.join(' → '),
      icon: <ListOrdered className="w-4 h-4 text-indigo-400" />
    },
    {
      num: 5,
      name: 'IMPLEMENTACIÓN',
      desc: module.implementacion,
      icon: <Play className="w-4 h-4 text-emerald-400" />
    },
    {
      num: 6,
      name: 'RESULTADO',
      desc: module.resultado,
      icon: <TrendingUp className="w-4 h-4 text-blue-400" />
    },
    {
      num: 7,
      name: 'ENTREGABLE',
      desc: module.entregable,
      icon: <CheckCircle2 className="w-4 h-4 text-teal-300" />,
      highlight: true
    }
  ];

  return (
    <div
      id="module-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="module-modal-panel"
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-950/95 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25),inset_0_0_30px_rgba(6,182,212,0.08)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Futuristic corner brackets */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-3.5">
            <ModuleAvatar numero={module.numero} esProyectoFinal={module.esProyectoFinal} className="w-12 h-12" />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                  {module.esProyectoFinal ? 'PROYECTO FINAL' : `MÓDULO ${String(module.numero).padStart(2, '0')}`}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase">
                  NIVEL {module.nivelId}
                </span>
              </div>
              <h2 className="font-['Rajdhani'] font-bold text-xl sm:text-2xl text-white tracking-wide">
                {module.titulo}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio narration button */}
            <button
              type="button"
              onClick={handleToggleNarration}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                isNarrating
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                  : 'bg-slate-900 hover:bg-slate-800 text-cyan-300 border-cyan-500/30'
              }`}
              title="Escuchar audio resumen del módulo"
            >
              {isNarrating ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isNarrating ? 'DETENER VOZ' : 'NARRAR'}</span>
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Cerrar ficha"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Voice visualizer wave */}
        {isNarrating && (
          <div className="px-5 py-2 bg-cyan-950/40 border-b border-cyan-500/20 flex items-center justify-between gap-3 text-xs font-mono text-cyan-300">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SINTETIZADOR DE VOZ ACTIVO · VILMAR OLIVERA</span>
            </div>
            <div className="flex items-center gap-1 h-3">
              {[...Array(16)].map((_, idx) => (
                <span
                  key={idx}
                  className="w-1 bg-cyan-400 rounded-full transition-all duration-75"
                  style={{
                    height: `${Math.max(3, Math.sin((idx + waveSeed) * 0.8) * 12 + 6)}px`
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-cyan-500/20 bg-slate-950/50 px-4 pt-2">
          <button
            type="button"
            onClick={() => setActiveTab('formato')}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'formato'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Formato Universal (7 Pasos)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('temario')}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'temario'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Temario Detallado
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('entregable')}
            className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border-b-2 transition-colors ${
              activeTab === 'entregable'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Entregable Final
          </button>
        </div>

        {/* Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 custom-scrollbar">
          {activeTab === 'formato' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 font-sans leading-relaxed">
                Cada clase sigue la metodología pedagógica universal de 7 pasos de Vilmar Olivera para garantizar que ningún estudiante se quede solo con teoría y termine la sesión con el sistema construido y funcionando.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {stepsInfo.map((s) => (
                  <div
                    key={s.num}
                    className={`p-3.5 rounded-xl border transition-all ${
                      s.highlight
                        ? 'bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)] md:col-span-2'
                        : 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-slate-950 border border-cyan-500/30">
                        {s.icon}
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 tracking-wider">
                        PASO {s.num} · {s.name}
                      </span>
                    </div>
                    <div className={`text-xs ${s.highlight ? 'text-emerald-200 font-semibold' : 'text-slate-300'}`}>
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'temario' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20">
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2">
                  Estructura curricular oficial del módulo
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {module.puntos.map((punto, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 shrink-0 font-mono">▸</span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Resources */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                  Herramientas y plataformas utilizadas en este módulo
                </h4>
                <div className="flex flex-wrap gap-2">
                  {module.herramientas.map((h, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'entregable' && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-slate-900/80 to-cyan-950/50 border border-emerald-500/40 text-center">
                <Award className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                  ARTEFACTO OFICIAL TERMINADO
                </div>
                <h3 className="font-['Rajdhani'] font-bold text-2xl sm:text-3xl text-white tracking-wider mt-1">
                  {module.entregable}
                </h3>
                <p className="mt-2 text-xs text-slate-300 max-w-lg mx-auto">
                  Al finalizar este módulo, el estudiante no se lleva una tarea pendiente: se lleva este artefacto digital completamente configurado, conectado y operando en su negocio real.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-cyan-500/20 space-y-2">
                <div className="text-xs font-mono text-cyan-400 uppercase">
                  Impacto en la operación
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {module.resultado}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-cyan-500/20 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-400">
            Programa de IA · Vilmar Olivera | Experta en IA Aplicada
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation(`Tengo dudas sobre el ${module.titulo} (${module.entregable}) del Nivel ${module.nivelId}. ¿Cómo se implementa?`);
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center gap-2 transition-colors"
            >
              <HelpCircle className="w-4 h-4" />
              <span>PREGUNTAR AL ASISTENTE</span>
            </button>

            <a
              href={`https://wa.me/?text=Hola%20Vilmar%20Olivera,%20quisiera%20consultar%20sobre%20el%20${encodeURIComponent(module.titulo)}%20(Entregable:%20${encodeURIComponent(module.entregable)})%20del%20Programa%20de%20IA`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-['Rajdhani'] font-bold text-sm tracking-wider uppercase flex items-center gap-2 hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CONSULTAR CON VILMAR</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
