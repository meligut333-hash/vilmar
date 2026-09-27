import React, { useState } from 'react';
import { CATEGORIAS_SOLUCIONES, CONTACTO_INFO } from '../data/masterCourseData';
import { TiltCard } from './TiltCard';
import { TactileButton } from './TactileButton';
import { safeOpenExternal } from '../utils/navigation';
import {
  Users,
  Zap,
  Workflow,
  Sparkles,
  BarChart3,
  TrendingUp,
  Box,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Activity,
  CreditCard,
  PhoneCall,
  UserCheck,
  AlertTriangle,
  Send,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';
import { playBlip } from '../utils/audio';

type DashboardTab = 'clientes' | 'ventas' | 'inventario' | 'pagos' | 'procesos';

export const DashboardsSistemasSection: React.FC = () => {
  const [activeDashboardTab, setActiveDashboardTab] = useState<DashboardTab>('clientes');
  const [selectedContactFeedback, setSelectedContactFeedback] = useState<string | null>(null);

  const getCatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  const pasosAutomatizacion = [
    { paso: 'DETECTAR', desc: 'Identificar tareas repetitivas y fricciones donde se pierde tiempo valioso.' },
    { paso: 'DISEÑAR', desc: 'Definir el mapa lógico de datos, filtros y disparadores sin complejidades.' },
    { paso: 'CONSTRUIR', desc: 'Implementar la integración ágil por medio de redireccionamiento directo y fluido.' },
    { paso: 'PROBAR', desc: 'Pruebas con datos reales y validación de consistencia operativa.' },
    { paso: 'OPTIMIZAR', desc: 'Ajuste fino del sistema con métricas reales de velocidad y ahorro.' }
  ];

  const handleWhatsAppRedirect = (nombre: string, motivo: string, mensajeSugerido: string) => {
    playBlip(900, 0.04, 0.03);
    setSelectedContactFeedback(`Redireccionando a WhatsApp para contactar a ${nombre}...`);
    setTimeout(() => setSelectedContactFeedback(null), 3500);

    const encodedMsg = encodeURIComponent(mensajeSugerido);
    const targetUrl = `${CONTACTO_INFO.whatsappUrl}?text=${encodedMsg}`;
    safeOpenExternal(targetUrl);
  };

  return (
    <div className="space-y-24">
      {/* SECTION 20: CATEGORÍAS DE SOLUCIONES (ASISTIR, OPTIMIZAR, AUTOMATIZAR, CREAR) */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Arquitectura de Aplicación
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            CATEGORÍAS DE SOLUCIONES
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            La inteligencia artificial interviene en la organización, el análisis y la optimización de procesos, manteniendo siempre la comunicación en manos de tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIAS_SOLUCIONES.map((cat, idx) => (
            <TiltCard
              key={cat.tipo}
              maxTilt={7}
              glowColor="rgba(6, 182, 212, 0.22)"
              className="p-6 rounded-2xl bg-slate-950/70 border border-cyan-500/20 hover:border-cyan-400/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center">
                    {getCatIcon(cat.icono)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h4 className="text-2xl font-bold font-['Rajdhani'] text-white mb-1">
                  {cat.tipo}
                </h4>

                <p className="text-xs font-semibold text-cyan-200/90 mb-3">
                  {cat.lema}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-cyan-500/15">
                <span className="text-[11px] font-mono text-emerald-400">
                  Impacto: {cat.impacto}
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* SECTION 21: EL FUNCIONAMIENTO CONCEPTUAL (DASHBOARD → ACCIÓN → WHATSAPP → RESPUESTA HUMANA) */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-900/90 border border-cyan-500/30 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Arquitectura Conceptual de Solución</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-tight">
            CÓMO FUNCIONA EL SISTEMA
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            La inteligencia artificial organiza los datos y potencia el dashboard. La comunicación con clientes y prospectos es siempre <span className="text-cyan-300 font-semibold">100% humana</span> mediante redireccionamiento directo a WhatsApp.
          </p>
        </div>

        {/* 5-Step Visual Progression Flow */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative z-10">
            {[
              {
                paso: '01',
                etiqueta: 'DASHBOARD',
                desc: 'Centraliza clientes, ventas, inventario, pagos y pendientes en una sola interfaz organizada.',
                badge: 'Datos Unificados',
                color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40'
              },
              {
                paso: '02',
                etiqueta: 'SELECCIONAR ACCIÓN',
                desc: 'Elegís el contacto, cotización o tarea a gestionar con un clic.',
                badge: 'Filtro por IA',
                color: 'text-sky-400 border-sky-500/30 bg-sky-950/40'
              },
              {
                paso: '03',
                etiqueta: 'REDIRECCIONAMIENTO',
                desc: 'Un botón dispara la apertura directa hacia la conversación de WhatsApp.',
                badge: 'Enlace Directo',
                color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/40'
              },
              {
                paso: '04',
                etiqueta: 'WHATSAPP',
                desc: 'Canal de comunicación transparente. No actúa como bot ni agente autónomo.',
                badge: 'Canal Humano',
                color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40'
              },
              {
                paso: '05',
                etiqueta: 'RESPUESTA HUMANA',
                desc: 'Una persona de tu equipo conversa, responde consultas y concreta acuerdos.',
                badge: 'Atención Real',
                color: 'text-teal-300 border-teal-500/30 bg-teal-950/40'
              }
            ].map((node, i) => (
              <div
                key={node.paso}
                className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-slate-500">Paso {node.paso}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${node.color}`}>
                      {node.badge}
                    </span>
                  </div>
                  <h4 className="font-['Rajdhani'] font-extrabold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {node.etiqueta}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {node.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cyan-300/80">
                  <span>{i < 4 ? 'Siguiente paso' : 'Cierre de ciclo'}</span>
                  <span>{i < 4 ? '→' : '✓'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Callout: Rol de la IA vs Rol de WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto p-5 rounded-2xl bg-slate-950/60 border border-cyan-500/20">
          <div className="space-y-2 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>El Rol de la IA en la Solución</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Analizar información, clasificar y ordenar bases de datos, calcular métricas comerciales, generar contenidos y estructurar los flujos del sistema para ahorrar tiempo al equipo.
            </p>
          </div>
          <div className="space-y-2 md:pl-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>El Rol de WhatsApp: Comunicación Humana</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Opera exclusivamente como <strong className="text-white">canal de comunicación directa</strong>. Sin bots, sin agentes autónomos y sin respuestas impersonales: la respuesta siempre la da una persona.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 22: DASHBOARD INTEGRADO INTERACTIVO (SIMULADOR EN VIVO) */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Centralización Total
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            DASHBOARDS INTEGRADOS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Centralizamos clientes, ventas, inventario, pagos y procesos en paneles interactivos donde cada acción de contacto se redirecciona directamente a WhatsApp.
          </p>
        </div>

        {/* Dynamic Selector of Live Dashboards */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {[
            { id: 'clientes', label: 'Clientes & Contactos', icon: Users },
            { id: 'ventas', label: 'Ventas & Indicadores', icon: TrendingUp },
            { id: 'inventario', label: 'Inventario & Stock', icon: Box },
            { id: 'pagos', label: 'Pagos & Pendientes', icon: CreditCard },
            { id: 'procesos', label: 'Seguimiento de Procesos', icon: Activity }
          ].map((tab) => {
            const isSelected = activeDashboardTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playBlip(750, 0.03, 0.02);
                  setActiveDashboardTab(tab.id as DashboardTab);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-950/70 text-slate-300 border-white/5 hover:border-cyan-500/30 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notification Feedback when User clicks WhatsApp button */}
        {selectedContactFeedback && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-400 animate-bounce" />
              <span>{selectedContactFeedback}</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Abriendo WhatsApp...</span>
          </div>
        )}

        {/* Interactive Dashboard Frame */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-cyan-950/30 border border-cyan-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          {/* Header Bar of the Simulated System */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="font-['Rajdhani'] font-bold text-lg text-white tracking-wide">
                  PANEL OPERATIVO CENTRALIZADO · VILMAR IA
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Datos consolidados en tiempo real · Acción directa a WhatsApp
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-cyan-300 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                Respuesta Humana Activa
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
          </div>

          {/* TAB 1: CLIENTES & CONTACTOS */}
          {activeDashboardTab === 'clientes' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Contactos Registrados</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-white mt-1">1,240</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">Base limpia y clasificada</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Seguimientos para Hoy</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-amber-300 mt-1">7 Contactos</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Prioridad comercial alta</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Canal de Contacto</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-emerald-400 mt-1">WhatsApp</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Redirección en 1 clic</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tipo de Atención</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-cyan-300 mt-1">100% Humana</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Cero respuestas automáticas</div>
                </div>
              </div>

              {/* Table of Contacts with direct WhatsApp action */}
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-950/60">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/90 text-slate-400 font-mono text-[11px] border-b border-white/10 uppercase">
                    <tr>
                      <th className="p-3.5">Contacto / Negocio</th>
                      <th className="p-3.5">Interés Principal</th>
                      <th className="p-3.5">Última Interacción</th>
                      <th className="p-3.5">Estado</th>
                      <th className="p-3.5 text-right">Acción Directa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {[
                      {
                        nombre: 'María González',
                        empresa: 'Gourmet Express',
                        interes: 'Dashboard de Ventas & Stock',
                        fecha: 'Hace 2 días',
                        estado: 'Cotización Enviada',
                        estadoColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
                        msg: 'Hola María, ¿cómo estás? Te escribo desde el equipo para saber cómo viste la propuesta del dashboard.'
                      },
                      {
                        nombre: 'Carlos Benítez',
                        empresa: 'Logística Sur',
                        interes: 'Mapeo de Procesos Internos',
                        fecha: 'Hoy 10:15 hs',
                        estado: 'Consulta Pendiente',
                        estadoColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
                        msg: 'Hola Carlos, un gusto saludarte. Vi tu consulta sobre el mapeo de procesos, ¿te queda cómodo coordinar 10 min por acá?'
                      },
                      {
                        nombre: 'Lucía Ramos',
                        empresa: 'Estudio Contable Ramos',
                        interes: 'Organización de Información & PDFs',
                        fecha: 'Ayer 17:30 hs',
                        estado: 'Cliente Activo',
                        estadoColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
                        msg: 'Hola Lucía, ¿cómo estás? Te paso las novedades del panel de documentos que dejamos sincronizado.'
                      }
                    ].map((c) => (
                      <tr key={c.nombre} className="hover:bg-slate-900/40 transition-colors">
                        <td className="p-3.5">
                          <div className="font-semibold text-white">{c.nombre}</div>
                          <div className="text-[11px] text-slate-400">{c.empresa}</div>
                        </td>
                        <td className="p-3.5 text-cyan-200">{c.interes}</td>
                        <td className="p-3.5 text-slate-400 font-mono text-[11px]">{c.fecha}</td>
                        <td className="p-3.5">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${c.estadoColor}`}>
                            {c.estado}
                          </span>
                        </td>
                        <td className="p-3.5 text-right">
                          <button
                            onClick={() => handleWhatsAppRedirect(c.nombre, c.interes, c.msg)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 font-semibold text-xs transition-all cursor-pointer shadow-sm"
                          >
                            <Send className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Contactar por WhatsApp</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/25 text-xs text-slate-200 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-cyan-300">Organización asistida por IA:</strong> La información se extrae y ordena automáticamente en el dashboard para que el asesor conozca todo el contexto antes de presionar el botón y conversar por WhatsApp de persona a persona.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: VENTAS & INDICADORES */}
          {activeDashboardTab === 'ventas' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Facturación Mensual</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-emerald-400 mt-1">$4.850.000</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">+22% vs mes anterior</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Cotizaciones en Curso</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-cyan-300 mt-1">14 Presupuestos</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">Listas para seguimiento humano</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Ticket Promedio</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-indigo-300 mt-1">$346.000</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cálculo de margen en vivo</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tasa de Conversión</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-teal-300 mt-1">38.5%</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Seguimiento personalizado</div>
                </div>
              </div>

              {/* Quotes ready to close with human WhatsApp follow-up */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Cotizaciones con Seguimiento Sugerido:
                </div>
                {[
                  {
                    cliente: 'Distribuidora del Norte SRL',
                    monto: '$780.000',
                    detalle: 'Implementación de Dashboard Integral de Stock y Ventas',
                    diasEspera: '3 días',
                    msg: 'Hola Esteban, ¿cómo estás? Te escribo para comentarte que revisamos los requerimientos y te tenemos la propuesta lista para charlarla.'
                  },
                  {
                    cliente: 'Clínica Odontológica DentalPlus',
                    monto: '$420.000',
                    detalle: 'Organización de Historias Clínicas y Dashboard de Turnos',
                    diasEspera: '1 día',
                    msg: 'Hola Dra. Silvia, te escribo desde el equipo para consultar si te quedó alguna duda del presupuesto que te enviamos.'
                  }
                ].map((item) => (
                  <div
                    key={item.cliente}
                    className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">{item.cliente}</span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">{item.monto}</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">{item.detalle}</div>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">
                        Esperando respuesta: {item.diasEspera}
                      </div>
                    </div>
                    <button
                      onClick={() => handleWhatsAppRedirect(item.cliente, item.detalle, item.msg)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>Continuar por WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INVENTARIO & STOCK */}
          {activeDashboardTab === 'inventario' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Artículos Monitoreados</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-white mt-1">380 SKUs</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">Sincronizados con planillas</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Alertas de Stock Bajo</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-amber-400 mt-1">2 Artículos</div>
                  <div className="text-[10px] text-amber-300 mt-0.5">Contacto a proveedor listo</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Rotación de Mercadería</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-emerald-400 mt-1">98.4%</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cero quiebres este mes</div>
                </div>
              </div>

              {/* Inventory items with direct supplier contact */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Estado de Stock Crítico y Proveedores:
                </div>
                {[
                  {
                    producto: 'Insumo Industrial Tipo A (Bolsa 25kg)',
                    stockActual: '8 bolsas',
                    stockMinimo: '20 bolsas',
                    proveedor: 'Química Industrial Santa Fe',
                    contacto: 'Ing. Marcelo Rossi',
                    msg: 'Hola Marcelo, te contacto desde la empresa para solicitar presupuesto y fecha de despacho de 30 bolsas de Insumo Tipo A.'
                  },
                  {
                    producto: 'Cajas Corrugadas de Embalaje 40x40',
                    stockActual: '45 unidades',
                    stockMinimo: '100 unidades',
                    proveedor: 'Envases del Litoral',
                    contacto: 'Laura Méndez',
                    msg: 'Hola Laura, buen día. Necesitamos hacer pedido de reposición de 200 cajas corrugadas 40x40. ¿Tienen stock inmediato?'
                  }
                ].map((item) => (
                  <div
                    key={item.producto}
                    className="p-4 rounded-xl bg-slate-950/60 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="font-bold text-white text-sm">{item.producto}</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-1">
                        Stock actual: <span className="text-amber-400 font-bold">{item.stockActual}</span> (Mínimo requerido: {item.stockMinimo})
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Proveedor: {item.proveedor} ({item.contacto})
                      </div>
                    </div>
                    <button
                      onClick={() => handleWhatsAppRedirect(item.contacto, item.producto, item.msg)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Pedir Reposición por WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PAGOS & PENDIENTES */}
          {activeDashboardTab === 'pagos' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Cobranzas del Mes</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-emerald-400 mt-1">$3.920.000</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">85% del objetivo mensual</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Pagos Pendientes</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-amber-300 mt-1">3 Facturas</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Avisos personalizados</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tiempo Medio de Cobro</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-cyan-300 mt-1">12 Días</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Seguimiento ordenado</div>
                </div>
              </div>

              {/* Pending collections with polite human WhatsApp notice */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Gestión de Pendientes de Pago:
                </div>
                {[
                  {
                    cliente: 'Metalúrgica San Jorge',
                    factura: 'Factura B-0004-000128',
                    monto: '$195.000',
                    vencimiento: 'Vence mañana',
                    contacto: 'Gabriel Romero',
                    msg: 'Hola Gabriel, te escribo cordialmente desde administración para acercarte los datos de la factura #128 que vence mañana.'
                  },
                  {
                    cliente: 'Transporte y Cargas Moreno',
                    factura: 'Factura A-0002-000455',
                    monto: '$340.000',
                    vencimiento: 'Vence en 4 días',
                    contacto: 'Claudia Moreno',
                    msg: 'Hola Claudia, ¿cómo estás? Te comparto por acá el comprobante y detalle de cuenta para cuando lo tengan programado.'
                  }
                ].map((item) => (
                  <div
                    key={item.factura}
                    className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-bold text-white text-sm">{item.cliente}</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold">{item.monto}</span>
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5">
                        {item.factura} · <span className="text-amber-300 font-mono text-[11px]">{item.vencimiento}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleWhatsAppRedirect(item.contacto, item.factura, item.msg)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Avisar por WhatsApp</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SEGUIMIENTO DE PROCESOS */}
          {activeDashboardTab === 'procesos' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Procesos Mapeados</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-white mt-1">100% Claros</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">Flujo sin duplicaciones</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Tiempo Medio de Ciclo</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-emerald-400 mt-1">-65%</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Eliminación de pasos manuales</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Trazabilidad Operativa</div>
                  <div className="text-xl sm:text-2xl font-bold font-['Rajdhani'] text-cyan-300 mt-1">Total</div>
                  <div className="text-[10px] text-emerald-400 mt-0.5">Responsables y estados al día</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Flujos Operativos Activos:
                </div>
                {[
                  {
                    nombre: 'Ingreso y Validación de Pedidos',
                    desc: 'Centraliza solicitudes desde formularios y planillas, verifica existencias y asigna responsable.',
                    estado: 'Operativo',
                    encargado: 'Área Comercial'
                  },
                  {
                    nombre: 'Conciliación Administrativa y Facturación',
                    desc: 'Cotejo de comprobantes y actualización de saldos en Google Sheets.',
                    estado: 'Operativo',
                    encargado: 'Área de Administración'
                  },
                  {
                    nombre: 'Generación de Contenido y Comunicación',
                    desc: 'Plantillas y copys generados con IA para redes y correos corporativos.',
                    estado: 'En ejecución',
                    encargado: 'Equipo de Marketing'
                  }
                ].map((proc) => (
                  <div
                    key={proc.nombre}
                    className="p-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="font-bold text-white text-sm">{proc.nombre}</span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">{proc.desc}</p>
                      <div className="text-[11px] font-mono text-cyan-300/80 mt-1">
                        Responsable: {proc.encargado}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 shrink-0 self-start sm:self-center">
                      {proc.estado}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 23: AUTOMATIZAR LO QUE NO NECESITA HACERSE MANUALMENTE */}
      <div className="rounded-3xl bg-slate-900/70 border border-cyan-500/25 p-8 sm:p-12 backdrop-blur-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            Eficiencia Operativa
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] text-white uppercase tracking-wide">
            AUTOMATIZAR LO QUE NO NECESITA HACERSE MANUALMENTE.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            El método estructurado para transformar tareas repetitivas en procesos ordenados que fluyen sin errores manuales.
          </p>
        </div>

        {/* 5 Pasos: DETECTAR → DISEÑAR → CONSTRUIR → PROBAR → OPTIMIZAR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {pasosAutomatizacion.map((p, idx) => (
            <div
              key={p.paso}
              className="p-5 rounded-2xl bg-slate-950/60 border border-cyan-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1">Paso 0{idx + 1}</div>
                <h4 className="font-['Rajdhani'] font-extrabold text-lg text-white mb-2">
                  {p.paso}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 text-[10px] font-mono text-slate-500">
                {idx < 4 ? 'Flujo continuo →' : '✓ Producción'}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 24: DASHBOARDS + SISTEMAS + IA APLICADA + INFORMACIÓN + PROCESOS */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-950/60 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-semibold">
              Propuesta Centrada en Resultados Reales
            </div>
            <h4 className="text-xl font-bold font-['Rajdhani'] text-white mb-1">
              DASHBOARDS + SISTEMAS + IA APLICADA + PROCESOS
            </h4>
            <div className="text-xs font-mono text-cyan-300 flex flex-wrap gap-2 pt-1">
              <span>INFORMACIÓN CENTRALIZADA</span>
              <span>→</span>
              <span>ANÁLISIS CON IA</span>
              <span>→</span>
              <span>REDIRECCIONAMIENTO A WHATSAPP</span>
              <span>→</span>
              <span>ATENCIÓN HUMANA</span>
            </div>
            <p className="text-xs text-slate-300 mt-2 max-w-xl font-light">
              Construimos la solución personalizada que tu negocio necesita para organizar datos y coordinar acciones rápidamente, asegurando una experiencia cercana y humana para tus clientes.
            </p>
          </div>

          <TactileButton
            variant="primary"
            size="md"
            onClick={() => safeOpenExternal(`${CONTACTO_INFO.whatsappUrl}?text=${encodeURIComponent('Hola Vilmar, quiero consultar sobre el desarrollo de un Dashboard y Sistema a medida para mi negocio.')}`)}
            icon={<MessageSquare className="w-4 h-4 text-slate-950" />}
            className="shrink-0"
          >
            CONSULTAR SOLUCIÓN PARA MI NEGOCIO
          </TactileButton>
        </div>
      </div>
    </div>
  );
};
