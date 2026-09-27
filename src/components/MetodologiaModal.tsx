import React from 'react';
import { X, Target, Lightbulb, Wrench, ListOrdered, Play, TrendingUp, CheckCircle2, BookOpen, Layers, Award, Sparkles } from 'lucide-react';
import { FORMATO_UNIVERSAL_CLASE, NIVELES_CURSO } from '../data/curso';

interface MetodologiaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (levelId: 1 | 2 | 3) => void;
}

export const MetodologiaModal: React.FC<MetodologiaModalProps> = ({
  isOpen,
  onClose,
  onSelectLevel
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="metodologia-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="metodologia-modal-panel"
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-950/95 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-['Rajdhani'] font-bold text-2xl text-white tracking-wide">
                METODOLOGÍA DEL PROGRAMA DE IA & FORMATO UNIVERSAL DE CLASE
              </h2>
              <p className="text-xs font-mono text-cyan-300">
                AI Quantum Studio · Vilmar Olivera | Experta en IA Aplicada
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* Section 1: Filosofía pedagógica */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Filosofía Central de Enseñanza</span>
            </div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-white mb-2">
              De la Teoría Inútil a Soluciones Prácticas que Operan en el Negocio Real
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Este programa fue diseñado por <strong>Vilmar Olivera</strong> bajo una premisa fundamental: <em>ningún alumno necesita memorizar herramientas abstractas ni pagar suscripciones costosas</em>. La IA se enseña como un catalizador de procesos reales (clientes, inventario, catálogos, finanzas, marketing y ventas) combinada con herramientas accesibles y gratuitas como Google Sheets, Canva, ChatGPT y Gemini.
            </p>
          </div>

          {/* Section 2: Formato Universal de Clase (7 Pasos) */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Rajdhani'] font-bold text-xl text-white tracking-wide flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                FORMATO UNIVERSAL DE CLASE (7 PASOS)
              </h3>
              <span className="text-xs font-mono text-cyan-400">Página 8 del Programa Oficial</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {FORMATO_UNIVERSAL_CLASE.map((p) => (
                <div
                  key={p.paso}
                  className={`p-4 rounded-xl border ${
                    p.paso === 7
                      ? 'bg-emerald-950/40 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] md:col-span-2 lg:col-span-3'
                      : 'bg-slate-900/50 border-cyan-500/20'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-xs flex items-center justify-center font-bold">
                      {p.paso}
                    </span>
                    <span className="font-mono text-xs text-cyan-300 font-bold tracking-wider">
                      {p.nombre}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {p.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Los 3 Niveles */}
          <div>
            <h3 className="font-['Rajdhani'] font-bold text-xl text-white tracking-wide mb-4">
              LOS 3 NIVELES DE MADUREZ EN IA
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NIVELES_CURSO.map((n) => (
                <div
                  key={n.id}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-cyan-500/30 flex flex-col justify-between hover:border-cyan-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40">
                        NIVEL {n.id}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        9 Módulos + Final
                      </span>
                    </div>

                    <h4 className="font-['Rajdhani'] font-bold text-lg text-white mb-1">
                      {n.nombre.replace(/^NIVEL \d+ — /, '')}
                    </h4>

                    <div className="text-xs text-cyan-200 font-semibold mb-2">
                      {n.tagline}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {n.objetivo}
                    </p>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                      <div className="text-cyan-400 font-semibold">Proyecto Final:</div>
                      <div>{n.proyectoFinal.titulo}</div>
                      <div className="text-emerald-400">"{n.proyectoFinal.resultado}"</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onSelectLevel(n.id);
                      onClose();
                    }}
                    className="mt-4 w-full py-2 px-3 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-mono text-xs uppercase tracking-wider text-center transition-colors"
                  >
                    Ver Módulos de este Nivel →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-cyan-500/20 bg-slate-900/80 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            AI Quantum Studio · Vilmar Olivera | Experta en IA Aplicada
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-['Rajdhani'] font-bold text-sm tracking-wider uppercase hover:bg-cyan-400 transition-colors"
          >
            ENTENDIDO, VOLVER AL CRONOGRAMA
          </button>
        </div>
      </div>
    </div>
  );
};
