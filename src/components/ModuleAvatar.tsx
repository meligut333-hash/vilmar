import React from 'react';
import {
  Compass,
  Database,
  Users,
  Package,
  Layers,
  LayoutDashboard,
  Clock,
  Megaphone,
  Briefcase,
  Rocket,
  Search,
  Sliders,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Cpu
} from 'lucide-react';

interface ModuleAvatarProps {
  numero: number;
  esProyectoFinal?: boolean;
  className?: string;
  isMirror?: boolean;
}

export const ModuleAvatar: React.FC<ModuleAvatarProps> = ({
  numero,
  esProyectoFinal,
  className = '',
  isMirror = false
}) => {
  const getIcon = () => {
    if (esProyectoFinal) {
      return <Rocket className="w-8 h-8 text-cyan-300 animate-pulse" />;
    }

    switch (numero) {
      case 1:
        return <Search className="w-8 h-8 text-cyan-300" />;
      case 2:
        return <Database className="w-8 h-8 text-blue-300" />;
      case 3:
        return <Users className="w-8 h-8 text-sky-300" />;
      case 4:
        return <Package className="w-8 h-8 text-teal-300" />;
      case 5:
        return <Layers className="w-8 h-8 text-cyan-300" />;
      case 6:
        return <LayoutDashboard className="w-8 h-8 text-emerald-300" />;
      case 7:
        return <Clock className="w-8 h-8 text-indigo-300" />;
      case 8:
        return <Megaphone className="w-8 h-8 text-blue-300" />;
      case 9:
        return <Briefcase className="w-8 h-8 text-cyan-300" />;
      default:
        return <Cpu className="w-8 h-8 text-cyan-300" />;
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-950/80 to-blue-950/90 border border-cyan-400/40 p-3 shadow-[0_0_20px_rgba(0,240,255,0.25),inset_0_0_15px_rgba(56,189,248,0.15)] ${
        isMirror ? '-scale-x-100' : ''
      } ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 animate-pulse pointer-events-none" />
      <div className="relative z-10 flex items-center justify-center">{getIcon()}</div>
      <div className="absolute -bottom-1 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px]" />
    </div>
  );
};
