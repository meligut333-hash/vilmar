export interface ModuleItem {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  nivelId: 1 | 2 | 3;
  lado: 'L' | 'R';
  objetivo: string;
  concepto: string;
  herramientas: string[];
  pasos: string[];
  implementacion: string;
  resultado: string;
  entregable: string;
  puntos: string[];
  esProyectoFinal?: boolean;
}

export interface LevelData {
  id: 1 | 2 | 3;
  nombre: string;
  tagline: string;
  objetivo: string;
  duracion: string;
  perfil: string;
  modulos: ModuleItem[];
  proyectoFinal: {
    titulo: string;
    descripcion: string;
    ejemplos?: string[];
    resultado: string;
    entregable: string;
  };
}

export interface FormatoUniversalPaso {
  paso: number;
  nombre: string;
  descripcion: string;
  icono: string;
}
