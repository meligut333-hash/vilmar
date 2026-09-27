import React, { useState, useEffect, useRef } from 'react';
import { ModuleItem } from '../types';
import { ModuleAvatar } from './ModuleAvatar';
import { playBlip } from '../utils/audio';

interface ModuleCarouselProps {
  modules: ModuleItem[];
  side: 'L' | 'R';
  onSelectModule: (mod: ModuleItem) => void;
  activeModuleId?: string;
}

export const ModuleCarousel: React.FC<ModuleCarouselProps> = ({
  modules,
  side,
  onSelectModule,
  activeModuleId
}) => {
  const [rotation, setRotation] = useState({ ang: 0, dest: 0 });
  const [isPaused, setIsPaused] = useState(false);
  const animFrameRef = useRef<number | null>(null);
  const rotRef = useRef({ ang: 0, dest: 0 });

  useEffect(() => {
    rotRef.current.dest = rotation.dest;
  }, [rotation.dest]);

  // Reset rotation when modules change (level switch)
  useEffect(() => {
    rotRef.current = { ang: 0, dest: 0 };
    setRotation({ ang: 0, dest: 0 });
  }, [modules]);

  // Step rotation timer every 3.6 seconds
  useEffect(() => {
    if (modules.length === 0) return;
    const interval = setInterval(() => {
      if (!isPaused) {
        setRotation(prev => {
          const step = (Math.PI * 2) / modules.length;
          return { ...prev, dest: prev.dest + step };
        });
      }
    }, 3600);

    return () => clearInterval(interval);
  }, [isPaused, modules.length]);

  // Smooth 60fps interpolation loop
  useEffect(() => {
    let lastTime = performance.now();

    const tick = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const diff = rotRef.current.dest - rotRef.current.ang;
      rotRef.current.ang += diff * Math.min(1, dt * 4.2);
      setRotation({ ang: rotRef.current.ang, dest: rotRef.current.dest });

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const radiusY = 270;
  const n = modules.length;

  if (n === 0) return null;

  return (
    <div
      id={`col-${side}`}
      className={`fixed top-28 bottom-20 w-[380px] lg:w-[440px] z-20 pointer-events-none ${
        side === 'L' ? 'left-3 lg:left-8' : 'right-3 lg:right-8'
      }`}
      style={{
        perspective: '900px',
        perspectiveOrigin: side === 'L' ? '85% 50%' : '15% 50%'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {modules.map((mod, i) => {
          const theta = rotation.ang + (i * Math.PI * 2) / n;
          const y = Math.sin(theta) * radiusY;
          const z = (Math.cos(theta) - 1) * 220;
          const frente = (Math.cos(theta) + 1) / 2;

          const isFront = frente > 0.45;
          const isSelected = activeModuleId === mod.id;

          const ryBase = side === 'L' ? 20 : -20;
          const rotationY = ryBase + (side === 'L' ? 1 : -1) * (1 - frente) * 12;

          return (
            <div
              key={mod.id}
              onClick={(e) => {
                e.stopPropagation();
                playBlip(920, 0.05, 0.04);
                onSelectModule(mod);
              }}
              onMouseEnter={() => {
                if (isFront) playBlip(640, 0.03, 0.02);
              }}
              className={`absolute w-[360px] lg:w-[420px] p-4 lg:p-5 rounded-2xl cursor-pointer select-none transition-colors duration-200 backdrop-blur-md border ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-950/85 shadow-[0_0_30px_rgba(0,240,255,0.4)]'
                  : mod.esProyectoFinal
                  ? 'border-amber-400/60 bg-slate-950/85 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                  : 'border-cyan-500/35 bg-slate-950/80 hover:border-cyan-400/80 shadow-[0_0_22px_rgba(6,182,212,0.15),inset_0_0_18px_rgba(6,182,212,0.06)]'
              }`}
              style={{
                transform: `translate3d(0, ${y}px, ${z}px) rotateY(${rotationY}deg)`,
                opacity: Math.max(0.15, frente * 0.95 + 0.05),
                zIndex: Math.round(frente * 10) + 2,
                pointerEvents: isFront ? 'auto' : 'none',
                willChange: 'transform, opacity'
              }}
            >
              {/* Corner accents */}
              <span className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-cyan-400/50" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-cyan-400/50" />
              <span className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-cyan-400/50" />
              <span className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-cyan-400/50" />

              {/* Card layout */}
              <div
                className={`flex items-center gap-3.5 ${
                  side === 'R' ? 'flex-row-reverse text-right' : 'flex-row text-left'
                }`}
              >
                {/* Holographic Icon */}
                <div className="shrink-0">
                  <ModuleAvatar
                    numero={mod.numero}
                    esProyectoFinal={mod.esProyectoFinal}
                    isMirror={side === 'R'}
                  />
                </div>

                {/* Info block */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`flex items-center gap-2 mb-1 ${
                      side === 'R' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                        mod.esProyectoFinal
                          ? 'bg-amber-950/80 border-amber-500/50 text-amber-300 font-bold'
                          : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
                      }`}
                    >
                      {mod.esProyectoFinal ? 'PROYECTO INTEGRADOR' : `MÓDULO ${String(mod.numero).padStart(2, '0')}`}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase truncate">
                      NIVEL {mod.nivelId}
                    </span>
                  </div>

                  <h3 className="font-['Rajdhani'] font-bold text-lg lg:text-xl text-white tracking-wider leading-tight line-clamp-1">
                    {mod.titulo.replace(/^MÓDULO \d+ — /, '')}
                  </h3>

                  <div className="text-[11px] text-cyan-200/90 font-sans truncate mt-0.5">
                    {mod.subtitulo}
                  </div>

                  {/* Deliverable highlight */}
                  <div className="mt-2 text-[10px] font-mono text-emerald-400 truncate bg-slate-900/60 px-2 py-1 rounded border border-emerald-500/20">
                    <span className="text-slate-400">Entregable: </span>
                    <b>{mod.entregable}</b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
