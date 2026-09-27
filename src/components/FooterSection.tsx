import React from 'react';
import { TactileButton } from './TactileButton';
import { MessageSquare, ArrowUp, GraduationCap, Building } from 'lucide-react';
import { playBlip } from '../utils/audio';
import { CONTACTO_INFO } from '../data/masterCourseData';

interface FooterSectionProps {
  onLearnClick: () => void;
  onImplementClick: () => void;
  onContactWhatsApp: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onLearnClick,
  onImplementClick,
  onContactWhatsApp
}) => {
  const scrollToTop = () => {
    playBlip(900, 0.03, 0.02);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    playBlip(750, 0.03, 0.02);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950/95 border-t border-cyan-500/20 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION 33: CTA FINAL — APRENDÉ. APLICÁ. IMPLEMENTÁ. */}
        <div className="text-center max-w-4xl mx-auto mb-20 pb-16 border-b border-white/10">
          <div className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-4 font-semibold">
            El Momento de Dar el Salto es Ahora
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-tight mb-4">
            APRENDÉ.{' '}
            <span className="text-cyan-300">APLICÁ.{' '}</span>
            <span className="text-sky-400">IMPLEMENTÁ.</span>
          </h2>

          <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] tracking-widest text-slate-200 uppercase mb-6">
            VILMAR OLIVERA <span className="text-cyan-400">| IA APLICADA</span>
          </div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            La inteligencia artificial tiene valor cuando deja de ser solamente una herramienta y empieza a resolver problemas reales.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TactileButton
              variant="primary"
              size="lg"
              onClick={onLearnClick}
              icon={<GraduationCap className="w-5 h-5 text-slate-950" />}
              className="w-full sm:w-auto"
            >
              QUIERO APRENDER IA
            </TactileButton>

            <TactileButton
              variant="secondary"
              size="lg"
              onClick={onImplementClick}
              icon={<Building className="w-5 h-5 text-cyan-400" />}
              className="w-full sm:w-auto"
            >
              QUIERO IMPLEMENTAR IA
            </TactileButton>

            <TactileButton
              variant="accent"
              size="lg"
              onClick={onContactWhatsApp}
              icon={<MessageSquare className="w-5 h-5 text-white" />}
              className="w-full sm:w-auto"
            >
              HABLAR POR WHATSAPP
            </TactileButton>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5 text-xs text-slate-400">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0 overflow-hidden">
                <img
                  src={CONTACTO_INFO.logoUrl}
                  alt="Logo Vilmar Olivera"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[9px] bg-slate-950"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-white tracking-wide">VILMAR OLIVERA</span>
                  <span className="text-cyan-400 font-semibold">| IA APLICADA</span>
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-light">
              Inteligencia artificial aplicada a personas, procesos y negocios. Soluciones tecnológicas y formación práctica.
            </p>
            <div className="text-[11px] font-mono text-cyan-400/80">
              {CONTACTO_INFO.email}
            </div>
          </div>

          {/* Col 2: Formación */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Formación & Cursos
            </div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => scrollToSection('curso')} className="hover:text-cyan-300">
                  Curso IA Aplicada (12 Semanas)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curso')} className="hover:text-cyan-300">
                  Enfoque 80% Práctica / 20% Teoría
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curso')} className="hover:text-cyan-300">
                  Aprender Haciendo (6 Fases)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('curso')} className="hover:text-cyan-300">
                  Recorrido: Fundamentos a Proyecto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluciones */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Soluciones Negocios
            </div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => scrollToSection('soluciones')} className="hover:text-cyan-300">
                  Diagnóstico del Negocio (12 Áreas)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('soluciones')} className="hover:text-cyan-300">
                  Mapeo de Procesos y Flujos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('soluciones')} className="hover:text-cyan-300">
                  10 Áreas de Implementación
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('metodo')} className="hover:text-cyan-300">
                  El Método en 5 Etapas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('casos')} className="hover:text-cyan-300">
                  Casos Reales y Proyectos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] font-mono">
              Contacto Directo
            </div>
            <p className="leading-relaxed font-light">
              Atención personalizada para consultas de empresas y postulaciones de alumnos.
            </p>
            <div className="pt-1">
              <a
                href={CONTACTO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {CONTACTO_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 AI Quantum Studio · Vilmar Olivera | Experta en IA Aplicada. Todos los derechos reservados.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer select-none"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
