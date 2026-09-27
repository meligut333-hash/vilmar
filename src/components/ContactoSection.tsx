import React, { useState } from 'react';
import { TactileButton } from './TactileButton';
import { CONTACTO_INFO } from '../data/masterCourseData';
import { Mail, MessageSquare, Instagram, Facebook, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { playBlip } from '../utils/audio';
import { safeOpenExternal } from '../utils/navigation';

export const ContactoSection: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [rubro, setRubro] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playBlip(900, 0.04, 0.03);
    const textEncoded = encodeURIComponent(
      `Hola Vilmar, mi nombre es ${nombre || 'un interesado'}.\n` +
      `Rubro/Actividad: ${rubro || 'General'}.\n` +
      `Mensaje: ${mensaje || 'Quisiera analizar mi negocio para ver dónde aplicar IA.'}`
    );
    safeOpenExternal(`${CONTACTO_INFO.whatsappUrl}?text=${textEncoded}`);
    setSentSuccess(true);
  };

  return (
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 border border-cyan-500/30 p-8 sm:p-14 shadow-[0_25px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Information & Socials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.28em] font-mono text-cyan-400 font-semibold">
              Canal de Comunicación Directo
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Rajdhani'] uppercase tracking-tight leading-tight">
              ¿TENÉS UN PROBLEMA QUE PODRÍA RESOLVERSE CON IA?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Contame qué necesitás y analizamos dónde puede tener sentido aplicar inteligencia artificial.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* WhatsApp direct */}
              <a
                href={CONTACTO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 transition-all text-slate-200"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold uppercase">WhatsApp Directo</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-200 transition-colors">
                    {CONTACTO_INFO.whatsappNumber}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACTO_INFO.email}`}
                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/70 hover:bg-slate-800/80 border border-cyan-500/20 transition-all text-slate-200"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold uppercase">Correo Electrónico</div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {CONTACTO_INFO.email}
                  </div>
                </div>
              </a>

              {/* Instagram & Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={CONTACTO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@vilmar.ai</span>
                </a>
                <a
                  href={CONTACTO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>vilmar.olivera.ia</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Analysis Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-cyan-500/25 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Formulario Rápido de Diagnóstico</span>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Tu Nombre o Empresa
                </label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Lucas García · Distribuidora Sur"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Rubro o Actividad Principal
                </label>
                <input
                  type="text"
                  value={rubro}
                  onChange={(e) => setRubro(e.target.value)}
                  placeholder="Ej. Comercio, Salud, Inmobiliaria, Servicios, Emprendimiento..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  ¿Qué problema, proceso o tarea querés resolver?
                </label>
                <textarea
                  rows={4}
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Contanos brevemente qué tarea te consume más tiempo, dónde se producen errores o qué te gustaría automatizar..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <TactileButton
                variant="primary"
                size="lg"
                type="submit"
                className="w-full mt-2"
                icon={<Send className="w-4 h-4 text-slate-950" />}
              >
                QUIERO ANALIZAR MI NEGOCIO
              </TactileButton>

              {sentSuccess && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 justify-center pt-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Abriendo WhatsApp con tu consulta...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
