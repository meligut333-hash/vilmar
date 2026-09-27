export interface ModuloPrograma {
  id: number;
  numero: number;
  titulo: string;
  tagline: string;
  descripcion: string;
  herramientas: string[];
  entregable: string;
  aprendizajesClave: string[];
  icono: string;
}

export interface AreaImplementacion {
  id: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  beneficios: string[];
  solucionesEjemplo: string[];
  icono: string;
  metricaImpacto: string;
}

export interface MetodoPaso {
  numero: string;
  nombre: string;
  descripcion: string;
  entregable: string;
  icono: string;
  puntos: string[];
}

export interface RecorridoEtapa {
  fase: string;
  subtitulo: string;
  descripcion: string;
}

export interface CasoProyecto {
  id: string;
  titulo: string;
  rubro: string;
  problema: string;
  proceso: string;
  solucion: string;
  tecnologia: string;
  resultado: string;
}

export interface FaqItem {
  pregunta: string;
  respuesta: string;
}

export const CONTACTO_INFO = {
  nombre: 'VILMAR OLIVERA',
  descriptor: 'IA APLICADA',
  concepto: 'Inteligencia artificial aplicada a personas, procesos y negocios.',
  email: 'aiquantumstudio@gmail.com',
  instagram: 'https://www.instagram.com/vilmar.ai',
  facebook: 'https://www.facebook.com/vilmar.olivera.ia',
  whatsappUrl: 'https://wa.me/5493412852228',
  whatsappNumber: '+54 9 341 285-2228',
  logoUrl: 'https://i.postimg.cc/zG7t1zMr/Whats-App-Image-2026-05-12-at-19-57-46.jpg'
};

export const RECORRIDO_CURSO: RecorridoEtapa[] = [
  { fase: 'FUNDAMENTOS', subtitulo: 'Comprender qué es y cómo piensa la IA', descripcion: 'Desmitificar la IA, entender qué esperar, lógica generativa y visión práctica sin código.' },
  { fase: 'PROMPTING', subtitulo: 'El arte de dar instrucciones exactas', descripcion: 'Formular órdenes y contextos estructurados para obtener resultados precisos al primer intento.' },
  { fase: 'PRODUCTIVIDAD', subtitulo: 'Ahorro de horas en tareas diarias', descripcion: 'Automatizar resúmenes, síntesis de documentos extensos, correos y minutas de reuniones.' },
  { fase: 'CREACIÓN DE CONTENIDO', subtitulo: 'Estrategia y copies en escala', descripcion: 'Generación consistente de ideas, guiones, newsletters y publicaciones conservando tu voz.' },
  { fase: 'IMÁGENES', subtitulo: 'Piezas visuales y mockups con IA', descripcion: 'Generación y edición de fotos profesionales, banners y artes visuales con Midjourney y Flux.' },
  { fase: 'VIDEO', subtitulo: 'Avatares digitales y clonación de voz', descripcion: 'Producción ágil de videos con avatares de HeyGen y clonación de voz en ElevenLabs.' },
  { fase: 'PROYECTO APLICADO', subtitulo: 'Tu sistema funcionando en vivo', descripcion: 'Construcción y puesta en marcha de una solución de IA propia aplicada a tu negocio o empleo.' }
];

export const MODULOS_CURSO_INICIAL: ModuloPrograma[] = [
  {
    id: 1,
    numero: 1,
    titulo: 'FUNDAMENTOS Y PRINCIPIOS GENERALES',
    tagline: 'Comprender los conceptos esenciales, cómo funcionan y qué pueden hacer por tu trabajo',
    descripcion: 'Desmitificamos las tecnologías actuales. Entendemos las diferencias entre modelos de lenguaje, procesamiento, estructuración y automatización. Aprendés qué esperar y qué no, eliminando tecnicismos y mitos.',
    herramientas: [],
    entregable: 'Mapa conceptual del ecosistema tecnológico adaptado a tu sector profesional o negocio.',
    aprendizajesClave: [
      'Cómo se procesa y estructura la información en sistemas modernos',
      'Diferencias críticas entre los principales entornos de trabajo',
      'Criterios para elegir el enfoque adecuado para cada tarea',
      'Aspectos éticos, privacidad de datos y seguridad en el trabajo'
    ],
    icono: 'Cpu'
  },
  {
    id: 2,
    numero: 2,
    titulo: 'PENSAMIENTO ESTRUCTURADO Y LÓGICA DE TRABAJO',
    tagline: 'Dejar de ver las herramientas como buscadores y empezar a utilizarlas como co-pensadores estratégicos',
    descripcion: 'Cambio de mentalidad fundamental: enfocar el trabajo como un procesador de lógica, razonamiento y síntesis. Aprendés a descomponer y formular problemas antes de buscar respuestas.',
    herramientas: [],
    entregable: 'Plantilla de descomposición de problemas complejos en pasos ejecutables y estructurados.',
    aprendizajesClave: [
      'Modelos mentales para estructurar el pensamiento y análisis de información',
      'Técnicas de pensamiento lateral y resolución metódica de problemas',
      'Supervisión crítica: cómo validar respuestas y detectar inconsistencias',
      'Cómo iterar y refinar razonamientos paso a paso'
    ],
    icono: 'Brain'
  },
  {
    id: 3,
    numero: 3,
    titulo: 'INSTRUCCIONES PRECISAS Y ESTRUCTURACIÓN',
    tagline: 'El arte de formular directivas exactas que generen resultados precisos al primer intento',
    descripcion: 'Estructuras maestras de comunicación y direccionamiento sin tecnicismos complejos: rol, contexto, tarea, restricciones y formato de salida. Pasás de recibir respuestas genéricas a soluciones listas para usar.',
    herramientas: [],
    entregable: 'Librería personalizada de 15 estructuras de instrucciones probadas para tu flujo diario.',
    aprendizajesClave: [
      'La estructura RCIF (Rol, Contexto, Instrucción, Formato)',
      'Técnicas de contextualización progresiva y cadenas de razonamiento',
      'Configuración de instrucciones fijas y perfiles personalizados de trabajo',
      'Cómo evitar el sesgo de respuestas vacías o imprecisas'
    ],
    icono: 'Terminal'
  },
  {
    id: 4,
    numero: 4,
    titulo: 'GESTIÓN DE INFORMACIÓN Y CONOCIMIENTO',
    tagline: 'Sintetizar, analizar y consultar documentos, reportes y fuentes extensas en segundos',
    descripcion: 'Procesamiento de PDFs extensos, hojas de cálculo, libros técnicos e informes de mercado. Aprendés a extraer datos clave, comparar fuentes y consultar tu propia base de conocimiento.',
    herramientas: [],
    entregable: 'Base de conocimiento interactiva cargada con tus propios manuales, informes o documentación.',
    aprendizajesClave: [
      'Conectar múltiples documentos para análisis cruzado y comparativo',
      'Generación de resúmenes ejecutivos y tablas comparativas',
      'Estructuración de síntesis explicativas a partir de fuentes documentales',
      'Búsqueda profunda y validación de fuentes primarias'
    ],
    icono: 'Database'
  },
  {
    id: 5,
    numero: 5,
    titulo: 'PRODUCTIVIDAD Y GESTIÓN OPERATIVA',
    tagline: 'Optimizar tareas diarias, gestión de correo, reuniones y organización de tiempos',
    descripcion: 'Ahorro directo de entre 5 y 10 horas semanales. Configuración de flujos para resumir reuniones, redactar respuestas ejecutivas y organizar calendarios de forma eficiente.',
    herramientas: [],
    entregable: 'Sistema de productividad diario con flujos de captura, síntesis y priorización organizada.',
    aprendizajesClave: [
      'Transcripción y confección ágil de actas de reunión',
      'Gestión veloz de bandeja de entrada y respuestas contextuales',
      'Elaboración ordenada de minutas con asignación de responsables',
      'Planificación semanal estructurada y optimizada'
    ],
    icono: 'Zap'
  },
  {
    id: 6,
    numero: 6,
    titulo: 'ESCRITURA Y COMUNICACIÓN PROFESIONAL',
    tagline: 'Redacción persuasiva, propuestas comerciales, correos clave e informes profesionales',
    descripcion: 'Domina la comunicación profesional preservando tu propia voz y estilo. Redacción de presupuestos de alto impacto, propuestas comerciales y comunicaciones estratégicas de negociación.',
    herramientas: [],
    entregable: 'Manual de estilo y tono con 5 plantillas de propuesta comercial personalizada.',
    aprendizajesClave: [
      'Definición de tono y estilo de escritura personal y de marca',
      'Estructuras de persuasión aplicadas (AIDA, PAS, StoryBrand)',
      'Ajuste de registro: de formal técnico a cercano y empático',
      'Edición crítica para asegurar claridad, precisión y autenticidad'
    ],
    icono: 'Feather'
  },
  {
    id: 7,
    numero: 7,
    titulo: 'CREACIÓN Y ESTRATEGIA DE CONTENIDO',
    tagline: 'Estrategia, guiones, carruseles, publicaciones y calendarios editoriales en escala',
    descripcion: 'Crea contenido para redes profesionales, plataformas sociales o newsletters con consistencia y valor real. De una sola idea central a un ecosistema multiformato listo para publicar.',
    herramientas: [],
    entregable: 'Calendario editorial de 30 días con copies, ganchos (hooks) y esquemas de publicaciones listos.',
    aprendizajesClave: [
      'Matriz de pilares de contenido adaptada a tu audiencia',
      'Diseño de ganchos con alta tasa de atención e interés',
      'Transformación de contenido extenso a formatos ágiles (repurposing)',
      'Flujo sistemático de curación y revisión rápida'
    ],
    icono: 'Layers'
  },
  {
    id: 8,
    numero: 8,
    titulo: 'DISEÑO DE IMÁGENES Y PIEZAS VISUALES',
    tagline: 'Creación y edición de piezas visuales de nivel profesional para tu marca o proyectos',
    descripcion: 'Aprende a diseñar imágenes fotográficas, renders conceptuales, mockups de producto y banners publicitarios con control de estilo, composición, encuadre e iluminación.',
    herramientas: [],
    entregable: 'Pack de 10 piezas visuales con identidad unificada de marca para tu proyecto.',
    aprendizajesClave: [
      'Criterios de estilo, relación de aspecto y composición gráfica',
      'Consistencia visual de elementos y presentaciones de producto',
      'Técnicas de retoque y ajuste de detalles visuales',
      'Optimización de resolución para formatos digitales e impresos'
    ],
    icono: 'Image'
  },
  {
    id: 9,
    numero: 9,
    titulo: 'PRODUCCIÓN DE VIDEO Y AUDIO DIGITAL',
    tagline: 'Presentaciones dinámicas, locución, subtitulado y producción audiovisual ágil',
    descripcion: 'Produce videos explicativos, comerciales y contenidos dinámicos sin necesidad de equipamiento costoso. Aprende a estructurar locuciones, presentaciones dinámicas y edición moderna.',
    herramientas: [],
    entregable: 'Video de 60 segundos con estructura profesional, locución clara y subtítulos sincronizados.',
    aprendizajesClave: [
      'Locución y modulación de audio para mensajes corporativos',
      'Estructura de videos explicativos para ventas o capacitaciones',
      'Composición y ritmo narrativo audiovisual',
      'Subtitulado sincronizado y optimización para canales digitales'
    ],
    icono: 'Video'
  },
  {
    id: 10,
    numero: 10,
    titulo: 'INTEGRACIÓN MULTIMODAL: TEXTO, VOZ Y VISIÓN',
    tagline: 'Combinar lectura visual, análisis de voz, texto y datos para interactuar de forma completa',
    descripcion: 'Aprovecha las capacidades de procesamiento combinado que integran texto, voz e imágenes. Análisis de capturas de pantalla, diagramas operativos y audios estructurados.',
    herramientas: [],
    entregable: 'Flujo de diagnóstico y extracción donde se analizan capturas de diagramas, documentos o bocetos.',
    aprendizajesClave: [
      'Análisis de diagramas, flujogramas y fotos operativas',
      'Extracción de tablas y datos desde capturas hacia hojas de cálculo',
      'Dinámicas de voz para intercambio rápido de ideas y ensayos de presentación',
      'Interpretación de documentos y gráficos técnicos'
    ],
    icono: 'Eye'
  },
  {
    id: 11,
    numero: 11,
    titulo: 'AUTOMATIZACIÓN E INTEGRACIÓN DE FLUJOS',
    tagline: 'Conectar tus aplicaciones y datos sin programar para eliminar tareas repetitivas',
    descripcion: 'Pasa del trabajo manual a flujos organizados. Conecta formularios web, planillas de cálculo y correos para centralizar la información y coordinar acciones al instante.',
    herramientas: [],
    entregable: 'Flujo automatizado que recibe registros, organiza los datos y notifica al responsable del equipo.',
    aprendizajesClave: [
      'Lógica de disparadores (triggers), filtros y rutas condicionales',
      'Extracción y ordenamiento de datos provenientes de correos o formularios',
      'Clasificación y priorización de registros según criterios del negocio',
      'Gestión de alertas y validación de datos'
    ],
    icono: 'Workflow'
  },
  {
    id: 12,
    numero: 12,
    titulo: 'DISEÑO Y CREACIÓN DE SOLUCIONES COMPLETAS',
    tagline: 'De tareas aisladas a soluciones estructuradas que resuelven cuellos de botella reales',
    descripcion: 'Aprende a diagnosticar qué problemas operativos de una empresa o emprendimiento conviene resolver de forma prioritaria. Diseño de soluciones integradas para procesos, finanzas o control interno.',
    herramientas: [],
    entregable: 'Prototipo funcional de solución operativa estructurada lista para presentar e implementar.',
    aprendizajesClave: [
      'Cálculo de ahorro de horas y retorno sobre la inversión (ROI)',
      'Diseño de arquitectura simple y sostenible sin código',
      'Definición de validaciones y límites para evitar inconsistencias',
      'Estrategia de adopción y capacitación para el equipo de trabajo'
    ],
    icono: 'Sparkles'
  },
  {
    id: 13,
    numero: 13,
    titulo: 'CONSTRUCCIÓN DE TU PROPIO SISTEMA INTEGRADO',
    tagline: 'Arquitectura de un sistema personalizado con las reglas, conocimientos y manuales de tu negocio',
    descripcion: 'Construye un sistema centralizado con la documentación, procesos, directivas y guías de tu propia empresa o actividad profesional, listo para operar como centro de consulta y gestión.',
    herramientas: [],
    entregable: 'Sistema de consulta y gestión configurado con las reglas, catálogos y documentación de tu negocio.',
    aprendizajesClave: [
      'Estructuración de datos ordenados y bases documentales',
      'Definición de directivas precisas de funcionamiento',
      'Pruebas operativas y refinamiento de flujos de trabajo',
      'Integración del sistema en el entorno diario del equipo'
    ],
    icono: 'Workflow'
  },
  {
    id: 14,
    numero: 14,
    titulo: 'PROYECTO FINAL APLICADO',
    tagline: 'Puesta en marcha, validación y presentación de tu solución terminada y en vivo',
    descripcion: 'Integración de todo lo aprendido en un caso real. Presentás tu sistema funcionando: desde el diagnóstico del problema inicial hasta la solución estructurada operando en tu negocio o portafolio.',
    herramientas: [],
    entregable: 'Sistema integral operando en producción con documentación completa y métricas de impacto.',
    aprendizajesClave: [
      'Validación de resultados tangibles y medibles',
      'Documentación operativa y guías de uso del sistema',
      'Presentación ejecutiva y demostración práctica del caso',
      'Plan de continuidad, actualización y escalabilidad'
    ],
    icono: 'Award'
  }
];

export const AREAS_DIAGNOSTICO_NEGOCIO = [
  'Administración',
  'Ventas',
  'Clientes',
  'Atención',
  'Marketing',
  'Contenido',
  'Inventario',
  'Información',
  'Comunicación',
  'Gestión',
  'Procesos internos',
  'Tareas repetitivas'
];

export const PREGUNTAS_DIAGNOSTICO_NEGOCIO = [
  '¿Qué tareas consumen más tiempo?',
  '¿Qué se repite constantemente?',
  '¿Dónde se producen errores?',
  '¿Dónde se pierde información?',
  '¿Qué se hace manualmente?',
  '¿Qué proceso podría simplificarse?',
  '¿Qué depende demasiado de una persona?'
];

export const MAPEO_PROCESO_ETAPAS = [
  { etapa: 'ENTRADA', desc: 'Datos recibidos, formularios, emails, mensajes de clientes o pedidos.', icono: 'ArrowDownRight' },
  { etapa: 'PROCESO', desc: 'Reglas de negocio, validación, criterios de aprobación y decisiones.', icono: 'Cpu' },
  { etapa: 'TAREAS', desc: 'Acciones operativas: redactar, clasificar, notificar, registrar o despachar.', icono: 'CheckSquare' },
  { etapa: 'INFORMACIÓN', desc: 'Bases de datos centralizadas, Google Sheets, CRM y archivo histórico.', icono: 'Database' },
  { etapa: 'RESULTADO', desc: 'Entregable terminado, cliente atendido, orden despachada o reporte generado.', icono: 'TrendingUp' }
];

export const CATEGORIAS_SOLUCIONES = [
  {
    tipo: 'ASISTIR',
    lema: 'La IA ayuda a una persona a realizar una tarea',
    desc: 'Co-pensador para redactar propuestas comerciales, sintetizar informes de 100 páginas y preparar respuestas a clientes difíciles.',
    impacto: 'Ahorro del 60% del tiempo de redacción y análisis.',
    icono: 'Users'
  },
  {
    tipo: 'OPTIMIZAR',
    lema: 'La IA mejora un proceso existente',
    desc: 'Eliminación de pasos intermedios, reducción de tiempos de ciclo y validación de datos sin duplicar tareas.',
    impacto: 'Mayor precisión y tiempos de entrega reducidos a la mitad.',
    icono: 'Zap'
  },
  {
    tipo: 'AUTOMATIZAR',
    lema: 'La IA permite reducir tareas manuales repetitivas',
    desc: 'Conexión de sistemas entre formularios, planillas y bases de datos para que la información esté centralizada y organizada en tiempo real.',
    impacto: 'Eliminación del trabajo manual rutinario y datos siempre al día.',
    icono: 'Workflow'
  },
  {
    tipo: 'CREAR',
    lema: 'La IA permite generar nuevos contenidos y recursos',
    desc: 'Fábrica propia de carruseles, infografías, manuales de proceso, videos explicativos y soluciones a medida que antes eran inviables por costo.',
    impacto: 'Nuevas líneas de servicio y presencia constante en el mercado.',
    icono: 'Sparkles'
  }
];

export const AREAS_IMPLEMENTACION: AreaImplementacion[] = [
  {
    id: 'procesos',
    nombre: 'PROCESOS',
    subtitulo: 'Análisis y optimización de procesos internos',
    descripcion: 'Mapeamos cada paso de tus operaciones para detectar cuellos de botella, tareas manuales lentas y fugas de tiempo, rediseñándolos con apoyo de IA.',
    beneficios: [
      'Reducción de hasta un 65% en tiempos de ciclo',
      'Estandarización de procedimientos operativos',
      'Menor dependencia de tareas manuales críticas'
    ],
    solucionesEjemplo: [
      'Mapeo de flujos operativos de trabajo',
      'Manuales de procesos generados y actualizados con IA',
      'Detección de puntos de fricción operativa'
    ],
    icono: 'Cpu',
    metricaImpacto: '-60% tiempo de ciclo'
  },
  {
    id: 'automatizacion',
    nombre: 'AUTOMATIZACIÓN',
    subtitulo: 'Automatización de tareas repetitivas y flujos de trabajo',
    descripcion: 'Conectamos tus sistemas existentes para que los datos viajen solos, eliminando el copiar y pegar entre correos, planillas y software de gestión.',
    beneficios: [
      'Cero errores humanos por transcripción manual',
      'Información sincronizada y organizada al instante',
      'Liberación de horas del equipo para tareas estratégicas'
    ],
    solucionesEjemplo: [
      'Sincronización de formularios con Sheets y CRM',
      'Alertas internas para el equipo y generación de comprobantes',
      'Flujos de validación de datos asistidos por IA'
    ],
    icono: 'Workflow',
    metricaImpacto: '8+ hrs semanales por persona'
  },
  {
    id: 'informacion',
    nombre: 'INFORMACIÓN',
    subtitulo: 'Organización, procesamiento y análisis de información',
    descripcion: 'Transformamos documentos desorganizados, carpetas llenas de PDFs y bases de datos dispersas en fuentes de consulta rápida e inteligente.',
    beneficios: [
      'Respuestas en segundos sobre manuales técnicos y contratos',
      'Extracción inteligente de datos clave en documentos extensos',
      'Centralización del conocimiento de la empresa'
    ],
    solucionesEjemplo: [
      'Buscador semántico corporativo privado',
      'Extracción de datos de facturas y contratos',
      'Síntesis ejecutiva de reportes de mercado'
    ],
    icono: 'Database',
    metricaImpacto: '10x velocidad de consulta'
  },
  {
    id: 'clientes',
    nombre: 'CLIENTES Y CONTACTOS',
    subtitulo: 'Centralización de contactos y seguimiento con redireccionamiento a WhatsApp',
    descripcion: 'Centralizamos tu base de clientes en dashboards interactivos con segmentación inteligente, historial de contactos y botón de redireccionamiento a WhatsApp para atención humana directa.',
    beneficios: [
      'Visión unificada de clientes, contactos y estados',
      'Redireccionamiento en un clic a WhatsApp para respuesta humana',
      'Segmentación inteligente de intereses y compras'
    ],
    solucionesEjemplo: [
      'Dashboard unificado de clientes con botón de contacto WhatsApp',
      'Historial ordenado de contactos y requerimientos',
      'Categorización de prospectos asistida por IA para el equipo'
    ],
    icono: 'Users',
    metricaImpacto: 'Gestión 100% centralizada'
  },
  {
    id: 'ventas',
    nombre: 'VENTAS',
    subtitulo: 'Optimización de procesos comerciales y seguimiento',
    descripcion: 'Organización de prospectos, cotizaciones y propuestas con IA para analizar métricas comerciales, facilitando el contacto humano en el momento oportuno.',
    beneficios: [
      'Propuestas comerciales estructuradas en minutos con apoyo de IA',
      'Seguimiento visual de cotizaciones y pendientes',
      'Mayor tasa de conversión con comunicación humana directa'
    ],
    solucionesEjemplo: [
      'Dashboard de cotizaciones y pipeline comercial',
      'Generador de presupuestos asistido por IA',
      'Fichas de prospectos con enlace directo para contacto humano por WhatsApp'
    ],
    icono: 'TrendingUp',
    metricaImpacto: '+35% conversión de cierre'
  },
  {
    id: 'inventario',
    nombre: 'INVENTARIO',
    subtitulo: 'Control, organización y seguimiento de inventario',
    descripcion: 'Monitoreo de stock con alertas tempranas, pronósticos de demanda basados en estacionalidad y carga simplificada de productos con IA visual.',
    beneficios: [
      'Evita quiebres de stock y sobreabastecimiento',
      'Carga de catálogos mediante fotos y reconocimiento óptico',
      'Trazabilidad clara de entradas, salidas y rotación'
    ],
    solucionesEjemplo: [
      'Lectura de remitos y albaranes por foto con IA',
      'Alertas predictivas de reposición de mercadería',
      'Generación de descripciones de producto estructuradas'
    ],
    icono: 'Box',
    metricaImpacto: '-40% mermas y quiebres'
  },
  {
    id: 'administracion',
    nombre: 'ADMINISTRACIÓN Y PAGOS',
    subtitulo: 'Optimización de tareas administrativas, cobranzas y pagos',
    descripcion: 'Reducción drástica del papeleo diario: control de cobranzas, clasificación de comprobantes, rendiciones de gastos y seguimiento de pendientes.',
    beneficios: [
      'Cierre administrativo mensual mucho más rápido y sin estrés',
      'Control de cobros y pagos digitalizado y clasificado al instante',
      'Gestión documental ordenada y accesible'
    ],
    solucionesEjemplo: [
      'Clasificación inteligente de comprobantes y tickets',
      'Dashboard de cobranzas con enlace a WhatsApp para avisos personalizados',
      'Sistemas y tableros de gestión con redireccionamiento directo'
    ],
    icono: 'FileText',
    metricaImpacto: '70% menos papeleo manual'
  },
  {
    id: 'contenido',
    nombre: 'CONTENIDO Y MARKETING',
    subtitulo: 'Sistemas para acelerar la creación, organización y gestión de contenidos',
    descripcion: 'Montamos un motor de contenidos propio: ideas, guiones, copies persuasivos, imágenes y piezas visuales adaptadas fielmente a tu tono de marca.',
    beneficios: [
      'Publicación constante sin bloquear la agenda del equipo',
      'Coherencia visual y de mensaje en todos los canales',
      'Adaptación ágil de una misma pieza a múltiples formatos'
    ],
    solucionesEjemplo: [
      'Fábrica de carruseles e infografías con IA',
      'Generación de copies optimizados para SEO y redes',
      'Guiones para video y podcasts con ganchos probados'
    ],
    icono: 'Megaphone',
    metricaImpacto: '5x volumen de contenido'
  },
  {
    id: 'dashboards',
    nombre: 'DASHBOARDS INTEGRADOS',
    subtitulo: 'Paneles centralizados para clientes, ventas, inventario, pagos y procesos',
    descripcion: 'Dejamos de buscar números en 5 planillas distintas. Creamos tableros visuales que reúnen ventas, clientes, stock, cobranzas y procesos con redireccionamiento directo a WhatsApp para atención humana.',
    beneficios: [
      'Visibilidad clara de todo el negocio en una sola pantalla',
      'Acciones operativas directas desde el mismo panel',
      'Toma de decisiones basada en datos reales, no en intuición'
    ],
    solucionesEjemplo: [
      'Panel ejecutivo integral de ventas, clientes y stock',
      'Monitor de procesos operativos e indicadores en tiempo real',
      'Redireccionamiento en un clic a WhatsApp para contactar a cualquier persona'
    ],
    icono: 'BarChart3',
    metricaImpacto: 'Gestión y control 100% integrados'
  },
  {
    id: 'personalizadas',
    nombre: 'SOLUCIONES PERSONALIZADAS',
    subtitulo: 'Diseño de soluciones adaptadas a necesidades específicas',
    descripcion: 'Cada modelo de negocio tiene particularidades únicas. Diseñamos e implementamos dashboards integrados, sistemas con IA aplicada y flujos a medida.',
    beneficios: [
      'Alineación total con la operatoria y herramientas actuales de tu empresa',
      'Ventaja competitiva imposible de copiar con soluciones genéricas',
      'Acompañamiento, capacitación y soporte continuo'
    ],
    solucionesEjemplo: [
      'Dashboards integrados a medida con permisos por rol',
      'Sistemas de gestión de cobranzas con redireccionamiento a WhatsApp',
      'Integraciones de datos entre planillas, software existente y modelos de IA'
    ],
    icono: 'Sparkles',
    metricaImpacto: 'Solución 100% a medida'
  }
];

export const METODO_PASOS: MetodoPaso[] = [
  {
    numero: '01',
    nombre: 'DIAGNOSTICAR',
    descripcion: 'Identificamos problemas, tareas manuales, procesos repetitivos, pérdidas de tiempo y oportunidades de mejora.',
    entregable: 'Matriz de cuellos de botella y priorización de ROI',
    icono: 'Search',
    puntos: [
      'Entrevista profunda con los responsables del área',
      'Detección de tareas que consumen horas sin generar valor',
      'Estimación de ahorro potencial en costos y tiempo'
    ]
  },
  {
    numero: '02',
    nombre: 'MAPEAR',
    descripcion: 'Analizamos cómo funciona actualmente el proceso y qué información, herramientas y personas intervienen.',
    entregable: 'Diagrama de flujo operativo actual y puntos de fricción',
    icono: 'GitFork',
    puntos: [
      'Auditoría de las herramientas actuales (planillas, software, canales)',
      'Identificación de datos clave y formatos de entrada/salida',
      'Definición de responsables y permisos de seguridad'
    ]
  },
  {
    numero: '03',
    nombre: 'DISEÑAR',
    descripcion: 'Definimos qué solución tiene sentido implementar y qué herramientas pueden formar parte de ella.',
    entregable: 'Arquitectura técnica de la solución y prototipo conceptual',
    icono: 'Layout',
    puntos: [
      'Selección de los mejores modelos (OpenAI, Gemini, Claude) y arquitectura de redireccionamiento',
      'Estructuración de prompts maestros y reglas de negocio',
      'Diseño sin complejidades innecesarias'
    ]
  },
  {
    numero: '04',
    nombre: 'IMPLEMENTAR',
    descripcion: 'Construimos e incorporamos la solución al proceso de trabajo real.',
    entregable: 'Sistema operando en producción con pruebas de estrés superadas',
    icono: 'Hammer',
    puntos: [
      'Configuración de flujos de datos, dashboards y tableros integrados',
      'Pruebas con datos reales y validación de consistencia',
      'Capacitación práctica y paso a paso a tu equipo'
    ]
  },
  {
    numero: '05',
    nombre: 'OPTIMIZAR',
    descripcion: 'Evaluamos el funcionamiento, detectamos mejoras y optimizamos el sistema.',
    entregable: 'Panel de monitoreo y soporte de evolución continua',
    icono: 'TrendingUp',
    puntos: [
      'Medición de resultados frente a los objetivos iniciales',
      'Ajustes finos basados en el uso cotidiano',
      'Evolución para sumar nuevas capacidades a medida que la IA avanza'
    ]
  }
];

export const INDICADORES_MEDICION = [
  { nombre: 'Tiempo', antes: 'Horas dedicadas a copiar y pegar datos entre aplicaciones', despues: 'Flujos automáticos en segundos sin fricción manual' },
  { nombre: 'Tareas', antes: 'Múltiples micro-acciones dispersas y dependientes de memoria', despues: 'Secuencias consolidadas y estandarizadas con IA' },
  { nombre: 'Pasos', antes: '6 a 9 pasos manuales para completar una solicitud de cliente', despues: '2 pasos: ingreso del requerimiento y aprobación final' },
  { nombre: 'Errores', antes: 'Errores recurrentes de tipeo, transcripción y olvidos', despues: 'Validación algorítmica y consistencia en cada registro' },
  { nombre: 'Costos', antes: 'Horas extras del equipo en tareas que no agregan valor', despues: 'Recuperación de hasta un 30% del costo operativo' },
  { nombre: 'Productividad', antes: 'Foco diluido en apagar incendios administrativos', despues: 'Atención 100% volcada a clientes y decisiones clave' },
  { nombre: 'Información', antes: 'Datos fragmentados en chats, planillas y carpetas', despues: 'Bases de consulta centralizadas con buscador semántico' },
  { nombre: 'Seguimiento', antes: 'Prospectos sin responder y presupuestos olvidados', despues: 'Trazabilidad y alertas tempranas en tiempo real' }
];

export const CASOS_PROYECTOS: CasoProyecto[] = [
  {
    id: 'caso-crm-ventas',
    titulo: 'Dashboard Centralizado de Clientes y Seguimiento Comercial',
    rubro: 'Servicios Profesionales & Consultoría',
    problema: 'Pérdida de prospectos por dispersión de contactos en planillas y demoras del equipo comercial en dar seguimiento oportuno.',
    proceso: 'Se organizó la información comercial en un tablero unificado con fichas de contacto, estado de cotizaciones y botón directo a WhatsApp.',
    solucion: 'Dashboard integral con redireccionamiento a WhatsApp para que los asesores continúen la comunicación humana de forma inmediata.',
    tecnologia: 'Dashboard interactivo y redireccionamiento directo a WhatsApp.',
    resultado: 'Seguimiento 100% ordenado, cero prospectos perdidos y aumento del 38% en cierres comerciales con atención humana.'
  },
  {
    id: 'caso-documentos',
    titulo: 'Base de Conocimiento Corporativa y Búsqueda Semántica',
    rubro: 'Estudio Jurídico & Contable',
    problema: 'Más de 400 manuales, contratos y resoluciones en carpetas Drive sin índice, requiriendo hasta 2 horas por consulta técnica.',
    proceso: 'Clasificación de fuentes, limpieza documental y diseño de prompts maestros de extracción semántica.',
    solucion: 'Repositorio privado con NotebookLM y Claude Projects con preguntas en lenguaje natural y citas a la página exacta.',
    tecnologia: 'Google NotebookLM, Claude 3.5 Sonnet y Google Drive.',
    resultado: 'Búsquedas resueltas en menos de 10 segundos con exactitud del 100% y citas a los artículos correspondientes.'
  },
  {
    id: 'caso-dashboard-operativo',
    titulo: 'Centro de Control y Monitoreo de Stock Inteligente',
    rubro: 'Distribuidora & Comercio Mayorista',
    problema: 'Quiebres imprevistos de stock en artículos de alta rotación y planillas de inventario desactualizadas.',
    proceso: 'Conexión de notas de remito con lector OCR de IA visual y consolidación en tablero con semáforos de stock crítico.',
    solucion: 'Dashboard visual con alertas predictivas de recompra según historial de ventas de los últimos 6 meses.',
    tecnologia: 'Google Sheets, IA Multimodal (Visión), Apps Script y alertas por Telegram/WhatsApp.',
    resultado: 'Cero quiebres de mercadería crítica en el trimestre y 70% menos tiempo invertido en auditorías de depósito.'
  }
];

export const FAQS_OFICIALES: FaqItem[] = [
  {
    pregunta: '¿Necesito conocimientos previos para hacer el curso?',
    respuesta: 'No. La formación está diseñada para comenzar desde los fundamentos y avanzar progresivamente hacia aplicaciones prácticas, sin requerir experiencia en programación ni matemáticas complejas.'
  },
  {
    pregunta: '¿El curso enseña solamente herramientas?',
    respuesta: 'No. Las herramientas son parte de la formación, pero el objetivo principal es aprender a utilizarlas para resolver problemas y mejorar procesos reales de trabajo.'
  },
  {
    pregunta: '¿Puedo aplicar lo aprendido a mi propio trabajo?',
    respuesta: 'Sí. La formación está 100% orientada a aplicaciones prácticas cotidianas y finaliza con un proyecto aplicado en el que construís tu propio sistema funcionando.'
  },
  {
    pregunta: '¿Trabajás con emprendedores y empresas?',
    respuesta: 'Sí. Se desarrollan soluciones adaptadas a las necesidades, escala y procesos de cada tipo de negocio, desde profesionales independientes hasta pymes y compañías en crecimiento.'
  },
  {
    pregunta: '¿Las soluciones son iguales para todos los negocios?',
    respuesta: 'No. Cada implementación comienza obligatoriamente con un diagnóstico y análisis del proceso particular. No vendemos herramientas por vender; diseñamos lo que tu negocio necesita.'
  },
  {
    pregunta: '¿Qué tipo de soluciones se pueden desarrollar?',
    respuesta: 'Dashboards integrados para clientes, ventas, inventario, pagos y procesos, sistemas con IA aplicada para análisis y extracción de datos, flujos automatizados de información y soluciones a medida con redireccionamiento a WhatsApp para atención humana.'
  }
];
