import React from 'react';
import { ModuloPrograma } from '../data/masterCourseData';
import { TactileButton } from './TactileButton';
import { CheckCircle2, Package, Sparkles, X, MessageSquare } from 'lucide-react';
import { playBlip } from '../utils/audio';

interface ModuloDetalleModalProps {
  modulo: ModuloPrograma | null;
  onClose: () => void;
  onConsultarWhatsApp: (modulo: ModuloPrograma) => void;
}

export const ModuloDetalleModal: React.FC<ModuloDetalleModalProps> = ({
  modulo,
  onClose,
  onConsultarWhatsApp
}) => {
  if (!modulo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-semibold">
              Módulo {modulo.numero} · Programa de Formación Práctica
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Rajdhani'] text-white">
              {modulo.titulo}
            </h3>
            <div className="text-xs sm:text-sm text-cyan-200 mt-1 font-medium">
              {modulo.tagline}
            </div>
          </div>
          <button
            onClick={() => {
              playBlip(600, 0.03, 0.02);
              onClose();
            }}
            className="text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
            Descripción y Enfoque Práctico:
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-light">
            {modulo.descripcion}
          </p>
        </div>

        {/* Deliverable */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-950/60 border border-emerald-500/30">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold flex items-center gap-1.5">
            <Package className="w-4 h-4 text-emerald-400" />
            <span>Entregable Concreto de este Módulo:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            {modulo.entregable}
          </p>
        </div>

        {/* Key learnings */}
        <div className="mb-8">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-semibold">
            Competencias que Desarrollás:
          </div>
          <div className="space-y-2">
            {modulo.aprendizajesClave.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-950/50 border border-white/5 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white cursor-pointer"
          >
            Cerrar
          </button>
          <TactileButton
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            onClick={() => {
              onConsultarWhatsApp(modulo);
              onClose();
            }}
            icon={<MessageSquare className="w-4 h-4 text-slate-950" />}
          >
            Consultar Inscripción a este Módulo
          </TactileButton>
        </div>
      </div>
    </div>
  );
};
