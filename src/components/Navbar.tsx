import React, { useState, useEffect } from 'react';
import { TactileButton } from './TactileButton';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { playBlip } from '../utils/audio';
import { CONTACTO_INFO } from '../data/masterCourseData';
import { safeOpenExternal } from '../utils/navigation';

interface NavbarProps {
  onLearnClick: () => void;
  onImplementClick: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onLearnClick,
  onImplementClick,
  onOpenConsultation
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    playBlip(750, 0.03, 0.02);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group flex items-center gap-3 select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center p-0.5 shadow-[0_0_18px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_26px_rgba(6,182,212,0.7)] transition-all overflow-hidden shrink-0">
              <img
                src={CONTACTO_INFO.logoUrl}
                alt="Logo Vilmar Olivera | IA Aplicada"
                width={44}
                height={44}
                className="w-full h-full object-cover rounded-[9px] bg-slate-950"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="logo-fallback hidden w-full h-full bg-slate-950 rounded-[9px] items-center justify-center">
                <span className="font-['Rajdhani'] font-extrabold text-cyan-400 text-xl leading-none">VO</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-wider text-slate-100 text-base sm:text-lg group-hover:text-white transition-colors">
                  VILMAR OLIVERA
                </span>
                <span className="text-cyan-400 font-semibold text-sm sm:text-base">| IA APLICADA</span>
              </div>
              <div className="text-[10px] tracking-widest text-cyan-300/60 uppercase font-mono hidden sm:block">
                Inteligencia artificial aplicada a personas, procesos y negocios
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links (Section 3: Inicio, IA Aplicada, Curso, Soluciones, Método, Casos / Proyectos, Sobre Vilmar, Contacto) */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('que-hago')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              IA Aplicada
            </button>
            <button
              onClick={() => scrollToSection('curso')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Curso
            </button>
            <button
              onClick={() => scrollToSection('soluciones')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollToSection('metodo')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection('casos')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Casos / Proyectos
            </button>
            <button
              onClick={() => scrollToSection('sobre-vilmar')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            >
              Sobre Vilmar
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="hover:text-cyan-400 transition-colors py-1 cursor-pointer pr-1"
            >
              Contacto
            </button>
          </nav>

          {/* Desktop Action CTAs (Aprendería / Implementaría - separados de Contacto hacia el costado) */}
          <div className="hidden lg:flex items-center gap-3 ml-8 xl:ml-12 pl-6 border-l border-cyan-500/30 shrink-0">
            <TactileButton
              variant="primary"
              size="sm"
              onClick={onLearnClick}
              icon={<MessageSquare className="w-3.5 h-3.5 text-slate-950 fill-current" />}
            >
              APRENDERÍA
            </TactileButton>

            <TactileButton
              variant="secondary"
              size="sm"
              onClick={onImplementClick}
              icon={<MessageSquare className="w-3.5 h-3.5 text-cyan-400" />}
            >
              IMPLEMENTARÍA
            </TactileButton>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => safeOpenExternal(CONTACTO_INFO.whatsappUrl)}
              className="p-2 text-emerald-400 hover:text-white bg-slate-900/80 rounded-lg border border-emerald-500/30"
              aria-label="Contactar por WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-lg border border-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-cyan-500/20 backdrop-blur-2xl px-6 py-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('que-hago')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              IA Aplicada (Aprender · Aplicar · Implementar)
            </button>
            <button
              onClick={() => scrollToSection('curso')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Curso IA Aplicada (12 Semanas · 80% Práctica)
            </button>
            <button
              onClick={() => scrollToSection('soluciones')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Soluciones para Negocios (10 Áreas)
            </button>
            <button
              onClick={() => scrollToSection('metodo')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              El Método (5 Etapas)
            </button>
            <button
              onClick={() => scrollToSection('casos')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Casos / Proyectos Reales
            </button>
            <button
              onClick={() => scrollToSection('sobre-vilmar')}
              className="text-left py-2 hover:text-cyan-400 border-b border-white/5"
            >
              Sobre Vilmar Olivera
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-left py-2 hover:text-cyan-400"
            >
              Contacto
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <TactileButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onLearnClick();
              }}
              icon={<MessageSquare className="w-4 h-4 text-slate-950 fill-current" />}
            >
              APRENDERÍA (WhatsApp)
            </TactileButton>
            <TactileButton
              variant="secondary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onImplementClick();
              }}
              icon={<MessageSquare className="w-4 h-4 text-cyan-400" />}
            >
              IMPLEMENTARÍA (WhatsApp)
            </TactileButton>
          </div>
        </div>
      )}
    </header>
  );
};
