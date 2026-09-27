import React, { useState } from 'react';
import { AREAS_IMPLEMENTACION, AreaImplementacion, CONTACTO_INFO } from '../data/masterCourseData';
import { TiltCard } from './TiltCard';
import { TactileButton } from './TactileButton';
import { DiagnosticoMapeoSection } from './DiagnosticoMapeoSection';
import { DashboardsSistemasSection } from './DashboardsSistemasSection';
import {
  Cpu,
  Workflow,
  Database,
  Users,
  TrendingUp,
  Box,
  FileText,
  Megaphone,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building,
  MessageSquare
} from 'lucide-react';
import { playBlip } from '../utils/audio';

interface SolucionesSectionProps {
  onConsultarArea: (area: AreaImplementacion) => void;
  onAgendarDiagnostico: () => void;
}

export const SolucionesSection: React.FC<SolucionesSectionProps> = ({
  onConsultarArea,
  onAgendarDiagnostico
}) => {
  const [selectedArea, setSelectedArea] = useState<AreaImplementacion | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Box':
        return <Box className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="soluciones" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-28">
      {/* SECTIONS 15, 16, 17, 18: Diagnóstico, Mapeo de Procesos y Transformación */}
      <DiagnosticoMapeoSection />

      {/* SECTION 19: ÁREAS DE IMPLEMENTACIÓN (10 Tarjetas 3D) */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 mb-3 font-semibold">
            Cobertura Integral
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight mb-4">
            ÁREAS DE IMPLEMENTACIÓN
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Soluciones diseñadas y adaptadas para cada sector operativo de tu empresa.
          </p>
        </div>

        {/* 10 Áreas de Implementación (Tarjetas 3D Tilt Interactivas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_IMPLEMENTACION.map((area, idx) => (
            <TiltCard
              key={area.id}
              maxTilt={7}
              glowColor="rgba(6, 182, 212, 0.22)"
              className="rounded-2xl bg-slate-900/60 backdrop-blur-md border border-cyan-500/20 p-6 flex flex-col justify-between hover:border-cyan-400/50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
              onClick={() => {
                playBlip(750, 0.03, 0.02);
                setSelectedArea(area);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                    {getIcon(area.icono)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">
                    {area.metricaImpacto}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                  Área {String(idx + 1).padStart(2, '0')}
                </div>

                <h3 className="text-xl font-bold text-white font-['Rajdhani'] mb-1 group-hover:text-cyan-300 transition-colors">
                  {area.nombre}
                </h3>

                <p className="text-xs font-semibold text-cyan-200/80 mb-3">
                  {area.subtitulo}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {area.descripcion}
                </p>

                <div className="space-y-1.5 border-t border-white/5 pt-3">
                  {area.beneficios.slice(0, 2).map((b, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-cyan-500/15 flex items-center justify-between text-xs font-semibold text-cyan-300 group-hover:text-cyan-200">
                <span>Ver Casos de Solución</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* SECTIONS 20, 21, 22, 23, 24: Categorías, Dashboards y Automatización */}
      <DashboardsSistemasSection />

      {/* Modal / Quick View of Selected Area */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  {getIcon(selectedArea.icono)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-['Rajdhani'] text-white">
                    {selectedArea.nombre}
                  </h4>
                  <div className="text-xs text-cyan-300 font-mono">
                    {selectedArea.subtitulo}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed mb-6 font-light">
              {selectedArea.descripcion}
            </p>

            <div className="mb-6">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
                Soluciones Típicas que Implementamos:
              </div>
              <div className="space-y-2">
                {selectedArea.solucionesEjemplo.map((sol, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-950/60 border border-cyan-500/20 text-xs text-slate-200 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 font-semibold">
                Impacto Real en Negocio:
              </div>
              <div className="space-y-2">
                {selectedArea.beneficios.map((ben, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">●</span>
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedArea(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-400 hover:text-white cursor-pointer"
              >
                Cerrar
              </button>
              <TactileButton
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => {
                  onConsultarArea(selectedArea);
                  setSelectedArea(null);
                }}
                icon={<MessageSquare className="w-4 h-4 text-slate-950" />}
              >
                Consultar por esta Solución en WhatsApp
              </TactileButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
