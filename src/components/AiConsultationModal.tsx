import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { speakFrases, playBlip, NarratorControls } from '../utils/audio';
import { NIVELES_CURSO } from '../data/curso';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

interface AiConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenMetodologia?: () => void;
}

export const AiConsultationModal: React.FC<AiConsultationModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  onOpenMetodologia
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: '¡Hola! Soy el asistente de Vilmar Olivera en AI Quantum Studio. Estoy para orientarte sobre el Curso IA Aplicada (14 módulos en 12 semanas), las 10 áreas de soluciones de negocio para empresas, el método de 5 etapas y los entregables prácticos. ¿En qué puedo ayudarte hoy?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const narratorRef = useRef<NarratorControls | null>(null);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleUserSubmit(initialQuery);
    }
  }, [initialQuery, isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const speakAiResponse = (text: string) => {
    if (!isVoiceEnabled) return;
    if (narratorRef.current) {
      narratorRef.current.stop();
    }
    narratorRef.current = speakFrases([text], () => {}, () => {});
  };

  const handleUserSubmit = (queryText: string) => {
    const text = queryText.trim();
    if (!text) return;

    playBlip(780, 0.04, 0.03);
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('vilmar') || lower.includes('quién es') || lower.includes('profesora') || lower.includes('experta')) {
        reply =
          'Vilmar Olivera es experta en Inteligencia Artificial Aplicada. Su enfoque es 100% práctico: enseña a profesionales a incorporar IA a su trabajo y desarrolla soluciones a medida para emprendedores y empresas. Sin humo ni tecnicismos vacíos: IA orientada a resolver problemas reales de negocio y ahorrar horas de trabajo.';
      } else if (lower.includes('14') || lower.includes('programa') || lower.includes('modulo') || lower.includes('módulo') || lower.includes('temario')) {
        reply =
          'El programa abarca 14 módulos progresivos: 1. Fundamentos y Principios Generales, 2. Pensamiento Estructurado y Lógica, 3. Instrucciones Precisas y Estructuración, 4. Gestión de Información y Conocimiento, 5. Productividad y Gestión Operativa, 6. Escritura y Comunicación Profesional, 7. Creación y Estrategia de Contenido, 8. Diseño de Imágenes y Piezas Visuales, 9. Producción de Video y Audio Digital, 10. Integración Multimodal, 11. Automatización e Integración de Flujos, 12. Diseño y Creación de Soluciones, 13. Construcción de tu Propio Sistema Integrado y 14. Proyecto Final Aplicado.';
      } else if (lower.includes('duracion') || lower.includes('duración') || lower.includes('formato') || lower.includes('cuanto dura') || lower.includes('semanas')) {
        reply =
          'El curso tiene una duración de 12 semanas, con 1 clase en vivo por semana. El formato es 80% práctico y 20% teoría bajo la premisa "Aprendé haciendo": en cada sesión ingresás a las herramientas, creás soluciones reales y te llevás un entregable funcionando.';
      } else if (lower.includes('solucion') || lower.includes('empresa') || lower.includes('negocio') || lower.includes('area') || lower.includes('área')) {
        reply =
          'Vilmar Olivera implementa soluciones en 10 áreas estratégicas: Procesos internos, Automatización de tareas repetitivas, Organización de Información corporativa, Clientes y Contactos con redireccionamiento a WhatsApp para atención humana, Aceleración de Ventas, Control de Inventario, Administración y Pagos, Marketing y Contenido, Dashboards Integrados y Soluciones 100% Personalizadas.';
      } else if (lower.includes('metodo') || lower.includes('método') || lower.includes('como trabaja') || lower.includes('etapas')) {
        reply =
          'El método de Vilmar no empieza por la herramienta, sino por el problema, y sigue 5 etapas estructuradas: 01. Diagnosticar cuellos de botella y ROI, 02. Mapear los flujos actuales, 03. Diseñar la arquitectura sin complejidades, 04. Implementar y capacitar al equipo, y 05. Optimizar y escalar.';
      } else if (lower.includes('nivel 1') || lower.includes('nivel 2') || lower.includes('nivel 3') || lower.includes('pdf')) {
        reply =
          'Además del programa de 14 módulos, el cronograma pedagógico avanzado cuenta con 3 niveles formativos: Nivel 1 (IA para Emprendedores con Google Sheets y Canva), Nivel 2 (IA para Equipos colaborativos) y Nivel 3 (IA para Empresas y transformación de procesos).';
      } else if (lower.includes('programar') || lower.includes('código') || lower.includes('difícil') || lower.includes('técnico') || lower.includes('requisito')) {
        reply =
          '¡No se requiere saber programar ni tener conocimientos técnicos previos! Todo el método de Vilmar Olivera está pensado para profesionales de cualquier disciplina, usando herramientas prácticas y no-code (ChatGPT, Gemini, Canva, NotebookLM, Sheets) y flujos por redireccionamiento directo.';
      } else if (lower.includes('precio') || lower.includes('costo') || lower.includes('inscribir') || lower.includes('anotarse') || lower.includes('contacto')) {
        reply =
          'Para consultar valores vigentes, opciones de pago, becas y fechas de inicio de la próxima cohorte, podés hacer clic en el botón de WhatsApp en la página para comunicarte directamente con Vilmar Olivera y su equipo de admisión.';
      } else {
        reply =
          'El objetivo del trabajo de Vilmar Olivera es que transformes problemas concretos de tu actividad en soluciones operativas con IA. Podés consultar el programa de 14 módulos, probar el diagnóstico interactivo o escribirle directamente por WhatsApp para coordinar tu caso.';
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
      speakAiResponse(reply);
    }, 600);
  };

  if (!isOpen) return null;

  const quickQuestions = [
    '¿Qué aprendo en el Nivel 1 para Emprendedores?',
    '¿Cómo funciona el Formato Universal de Clase en 7 pasos?',
    '¿Cuáles son los entregables terminados del curso?',
    '¿Se requiere saber programar o pagar licencias caras?'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl h-[600px] max-h-[90vh] flex flex-col rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-400/40 text-cyan-300">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Rajdhani'] font-bold text-xl text-white tracking-wide flex items-center gap-2">
                CONSULTA PEDAGÓGICA IA
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                  ONLINE
                </span>
              </h3>
              <p className="text-[11px] font-mono text-cyan-300">
                AI Quantum Studio · Vilmar Olivera | Experta en IA Aplicada
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
              className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white"
              title={isVoiceEnabled ? 'Desactivar voz' : 'Activar voz'}
              aria-label={isVoiceEnabled ? 'Desactivar voz' : 'Activar voz'}
            >
              {isVoiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Questions Pills */}
        <div className="px-4 py-2 border-b border-cyan-500/10 bg-slate-950 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleUserSubmit(q)}
              className="px-2.5 py-1 rounded-full bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-[11px] text-cyan-300 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-400/40 flex items-center justify-center shrink-0 text-cyan-300 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs sm:text-sm font-sans leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950 font-medium'
                    : 'bg-slate-900/80 border border-cyan-500/20 text-slate-200'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-300 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Sintetizando respuesta pedagógica...</span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserSubmit(input);
          }}
          className="p-3 border-t border-cyan-500/20 bg-slate-900/80 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunta sobre cualquier módulo, nivel o entregable del curso..."
            className="flex-1 bg-slate-950 border border-cyan-500/30 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            aria-label="Enviar consulta"
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
