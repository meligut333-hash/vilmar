import React, { useEffect, useState } from 'react';

export const ScanlineEffect: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; visible: boolean }>({
    x: -100,
    y: -100,
    visible: false
  });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY, visible: true });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsHoveringInteractive(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setCursorPos(prev => ({ ...prev, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Occasional Subtle Scanline Sweep (Section 39) */}
      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        <div
          className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent opacity-60 blur-xs"
          style={{
            animation: 'scanlineSweep 14s ease-in-out infinite'
          }}
        />
      </div>

      {/* Discreet Tech Cursor Halo (Section 41) */}
      {cursorPos.visible && (
        <div
          className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`
          }}
        >
          {/* Subtle Outer Halo */}
          <div
            className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
              isHoveringInteractive
                ? 'w-10 h-10 bg-cyan-400/20 border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-125'
                : 'w-6 h-6 bg-cyan-500/10 border border-cyan-500/30'
            }`}
          />
          {/* Center Micro Dot */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-cyan-300 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#00f0ff]" />
        </div>
      )}

      <style>{`
        @keyframes scanlineSweep {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          5% {
            opacity: 0.4;
          }
          15% {
            transform: translateY(105vh);
            opacity: 0;
          }
          100% {
            transform: translateY(105vh);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
