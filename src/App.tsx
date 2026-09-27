/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QuantumScene } from './components/QuantumScene';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QueHagoSection } from './components/QueHagoSection';
import { CursoSection } from './components/CursoSection';
import { SolucionesSection } from './components/SolucionesSection';
import { MetodoSection } from './components/MetodoSection';
import { CasosProyectosSection } from './components/CasosProyectosSection';
import { SobreVilmarSection } from './components/SobreVilmarSection';
import { FaqSection } from './components/FaqSection';
import { ContactoSection } from './components/ContactoSection';
import { FooterSection } from './components/FooterSection';
import { ModuloDetalleModal } from './components/ModuloDetalleModal';
import { MetodologiaModal } from './components/MetodologiaModal';
import { AiConsultationModal } from './components/AiConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScanlineEffect } from './components/ScanlineEffect';
import { ModuloPrograma, AreaImplementacion, CONTACTO_INFO } from './data/masterCourseData';
import { playBlip, playModalChirp } from './utils/audio';
import { safeOpenExternal } from './utils/navigation';

export default function App() {
  const [selectedModulo, setSelectedModulo] = useState<ModuloPrograma | null>(null);
  const [isMetodologiaOpen, setIsMetodologiaOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationQuery, setConsultationQuery] = useState('');

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedModulo) setSelectedModulo(null);
        if (isMetodologiaOpen) setIsMetodologiaOpen(false);
        if (isConsultationOpen) setIsConsultationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedModulo, isMetodologiaOpen, isConsultationOpen]);

  const scrollToSection = (id: string) => {
    playBlip(800, 0.03, 0.02);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = (customMessage?: string) => {
    playBlip(920, 0.04, 0.03);
    const defaultMsg =
      'Hola Vilmar, estoy viendo tu página web de IA Aplicada y me gustaría coordinar una consulta para conocer más sobre tus programas y soluciones.';
    const encoded = encodeURIComponent(customMessage || defaultMsg);
    safeOpenExternal(`${CONTACTO_INFO.whatsappUrl}?text=${encoded}`);
  };

  const handleConsultarModuloWhatsApp = (modulo: ModuloPrograma) => {
    const msg = `Hola Vilmar, me interesa inscribirme o consultar por el Módulo ${modulo.numero}: "${modulo.titulo}" de tu programa de IA Aplicada. ¿Podrías darme detalles sobre fechas y cupos?`;
    handleOpenWhatsApp(msg);
  };

  const handleConsultarAreaNegocio = (area: AreaImplementacion) => {
    const msg = `Hola Vilmar, me comunico desde tu sitio web. Me interesa implementar soluciones de IA en el área de "${area.nombre}" (${area.subtitulo}) para mi negocio. ¿Podemos coordinar un diagnóstico?`;
    handleOpenWhatsApp(msg);
  };

  const handleAprenderWhatsApp = () => {
    handleOpenWhatsApp(
      'Hola Vilmar, me comunico desde tu sitio web. Me interesa aprender Inteligencia Artificial (Aprender IA) y conocer más sobre los programas y modalidades disponibles.'
    );
  };

  const handleImplementarWhatsApp = () => {
    handleOpenWhatsApp(
      'Hola Vilmar, me comunico desde tu sitio web. Me interesa implementar Inteligencia Artificial en mi negocio o empresa (Implementar IA) y coordinar un diagnóstico.'
    );
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Discreet Tech Cursor & Scanline Sweep (Sections 39 & 41) */}
      <ScanlineEffect />

      {/* Three.js 3D Quantum Holographic Canvas in background (Section 5 & 6) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-80">
        <QuantumScene isBooted={true} isNarrating={false} />
      </div>

      {/* Cyber Circuit & Dynamic Radial Lighting Layer (Section 7) */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,rgba(6,182,212,0.12),transparent_75%),radial-gradient(ellipse_60%_45%_at_85%_10%,rgba(37,99,235,0.12),transparent_65%),radial-gradient(ellipse_55%_40%_at_15%_90%,rgba(14,165,233,0.10),transparent_65%)]" />
      <div className="fixed inset-0 pointer-events-none z-[2] opacity-25 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Main Web Page Content (Section 48 Complete Architecture) */}
      <div className="relative z-10">
        {/* Sticky Modern Navbar (Section 3) */}
        <Navbar
          onLearnClick={handleAprenderWhatsApp}
          onImplementClick={handleImplementarWhatsApp}
          onOpenConsultation={() => {
            playModalChirp();
            setConsultationQuery('');
            setIsConsultationOpen(true);
          }}
        />

        {/* Hero Section with 3D Holographic AI Experience (Sections 4 & 5) */}
        <HeroSection
          onLearnClick={handleAprenderWhatsApp}
          onImplementClick={handleImplementarWhatsApp}
        />

        {/* Qué Hago: Aprender · Aplicar · Implementar (Section 11) */}
        <QueHagoSection
          onLearnClick={() => scrollToSection('curso')}
          onImplementClick={() => scrollToSection('soluciones')}
        />

        {/* Curso IA Aplicada: 12 Semanas, 80% Práctica, Aprender Haciendo, Recorrido 8 Fases y 14 Módulos (Sections 12, 13, 14) */}
        <CursoSection
          onSelectModulo={(mod) => {
            playModalChirp();
            setSelectedModulo(mod);
          }}
          onOpenPdfNiveles={() => {
            playModalChirp();
            setIsMetodologiaOpen(true);
          }}
          onConsultarInscripcion={() => {
            handleOpenWhatsApp(
              'Hola Vilmar, quiero consultar sobre los requisitos, fechas de inicio y modalidades del Curso IA Aplicada (12 semanas).'
            );
          }}
        />

        {/* Soluciones para Negocios: Diagnóstico, Mapeo, Problema->Impacto->Oportunidad, 10 Áreas, Dashboards y Automatización (Sections 15 to 24) */}
        <SolucionesSection
          onConsultarArea={handleConsultarAreaNegocio}
          onAgendarDiagnostico={() => scrollToSection('contacto')}
        />

        {/* El Método (5 Etapas conectadas), Construcción Real y Medición (Antes vs Después) (Sections 25, 26, 27) */}
        <MetodoSection />

        {/* Casos y Proyectos Reales: Problema -> Proceso -> Solución -> Tecnología -> Resultado (Section 28) */}
        <CasosProyectosSection />

        {/* Sobre Vilmar Olivera, Mensaje Central y Dos Caminos (Sections 29, 30, 47) */}
        <SobreVilmarSection
          onLearnClick={() => scrollToSection('curso')}
          onImplementClick={() => scrollToSection('contacto')}
        />

        {/* Preguntas Frecuentes Oficiales (Section 31) */}
        <FaqSection />

        {/* Contacto Oficial con WhatsApp, Email, Instagram y Facebook (Section 32) */}
        <ContactoSection />

        {/* CTA Final y Footer (Section 33) */}
        <FooterSection
          onLearnClick={() => scrollToSection('curso')}
          onImplementClick={() => scrollToSection('contacto')}
          onContactWhatsApp={() => handleOpenWhatsApp()}
        />
      </div>

      {/* Floating 3D WhatsApp Button (Section 32) */}
      <FloatingWhatsApp />

      {/* Modal: Detalle de Módulo del Curso */}
      <ModuloDetalleModal
        modulo={selectedModulo}
        onClose={() => setSelectedModulo(null)}
        onConsultarWhatsApp={handleConsultarModuloWhatsApp}
      />

      {/* Modal: Metodología Universal de Clase y Niveles */}
      <MetodologiaModal
        isOpen={isMetodologiaOpen}
        onClose={() => setIsMetodologiaOpen(false)}
        onSelectLevel={() => {
          setIsMetodologiaOpen(false);
          scrollToSection('curso');
        }}
      />

      {/* Modal: Asistente Interactivo IA de Vilmar */}
      <AiConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialQuery={consultationQuery}
        onOpenMetodologia={() => {
          setIsConsultationOpen(false);
          setIsMetodologiaOpen(true);
        }}
      />
    </div>
  );
}
