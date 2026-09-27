import { LevelData, FormatoUniversalPaso } from '../types';

export const FORMATO_UNIVERSAL_CLASE: FormatoUniversalPaso[] = [
  {
    paso: 1,
    nombre: 'OBJETIVO',
    descripcion: 'Qué aprenden en la sesión con claridad de meta práctica.',
    icono: 'Target'
  },
  {
    paso: 2,
    nombre: 'CONCEPTO',
    descripcion: 'Qué necesitan entender del proceso antes de usar tecnología.',
    icono: 'Lightbulb'
  },
  {
    paso: 3,
    nombre: 'HERRAMIENTAS',
    descripcion: 'IA y herramientas gratuitas (ChatGPT, Gemini, Google Sheets, Canva).',
    icono: 'Wrench'
  },
  {
    paso: 4,
    nombre: 'PASO A PASO',
    descripcion: 'Metodología estructurada de construcción del sistema.',
    icono: 'ListOrdered'
  },
  {
    paso: 5,
    nombre: 'IMPLEMENTACIÓN',
    descripcion: 'Cómo usarlo y ponerlo a operar en el negocio real.',
    icono: 'Play'
  },
  {
    paso: 6,
    nombre: 'RESULTADO',
    descripcion: 'Qué mejora medible genera en tiempo, costos o ventas.',
    icono: 'TrendingUp'
  },
  {
    paso: 7,
    nombre: 'ENTREGABLE',
    descripcion: 'Artefacto funcional terminado que el alumno se lleva operando.',
    icono: 'CheckCircle'
  }
];

export const NIVELES_CURSO: LevelData[] = [
  {
    id: 1,
    nombre: 'NIVEL 1 — IA PARA EMPRENDEDORES',
    tagline: 'Construye tu propio sistema de gestión y ventas con IA',
    objetivo: 'Analizar su propio negocio y construir las primeras soluciones prácticas con IA.',
    duracion: '9 Módulos Prácticos + Proyecto Final',
    perfil: 'Emprendedores, independientes y dueños de negocio',
    modulos: [
      {
        id: 'n1-m1',
        numero: 1,
        titulo: 'MÓDULO 1 — DESCUBRIR EL NEGOCIO',
        subtitulo: 'Diagnóstico profundo antes de la IA',
        nivelId: 1,
        lado: 'L',
        objetivo: 'Analizar el negocio antes de la IA para encontrar puntos críticos de mejora.',
        concepto: 'La IA no soluciona el desorden si primero no se comprende la radiografía del modelo comercial y operativo.',
        herramientas: ['ChatGPT', 'Gemini', 'Plantilla de Diagnóstico'],
        pasos: [
          '1. Radiografía del negocio: qué vende, a quién, cómo cobra y hace seguimiento.',
          '2. Detectar falencias: tareas repetitivas, pérdida de tiempo y procesos manuales.',
          '3. Entrevista guiada con IA para profundizar el diagnóstico.',
          '4. Mapeo: Problema → Impacto → Oportunidad → Solución.'
        ],
        implementacion: 'Realizar la auditoría de procesos manuales actuales y listar los cuellos de botella del negocio.',
        resultado: 'Claridad total de dónde la IA genera retorno financiero y ahorro inmediato de tiempo.',
        entregable: 'MAPA DE OPORTUNIDADES DE IA DEL NEGOCIO',
        puntos: [
          '1.1 Radiografía del negocio: qué vende, a quién, cómo vende, cobra, administra, adquiere y hace seguimiento a clientes.',
          '1.2 Detectar falencias: tareas repetitivas, pérdida de tiempo, información dispersa, errores, falta de seguimiento, procesos manuales.',
          '1.3 Entrevista con IA: ChatGPT/Gemini utilizados para hacer preguntas y profundizar el diagnóstico.',
          '1.4 Mapa de oportunidades: PROBLEMA → IMPACTO → OPORTUNIDAD → POSIBLE SOLUCIÓN.'
        ]
      },
      {
        id: 'n1-m2',
        numero: 2,
        titulo: 'MÓDULO 2 — ORGANIZAR LA INFORMACIÓN',
        subtitulo: 'De información desordenada a base utilizable',
        nivelId: 1,
        lado: 'L',
        objetivo: 'Convertir información desordenada en una estructura utilizable.',
        concepto: 'Google Sheets no como un curso tradicional de hojas de cálculo, sino como la base de datos viva del negocio.',
        herramientas: ['Google Sheets', 'ChatGPT', 'Gemini'],
        pasos: [
          '1. Identificar entidades clave: clientes, productos, inventario, ventas y proveedores.',
          '2. Diseñar esquemas estructurados sin fórmulas complejas.',
          '3. Emplear IA para clasificar, limpiar, unificar y eliminar duplicados.',
          '4. Validar integridad de los datos para alimentaciones futuras.'
        ],
        implementacion: 'Cargar y ordenar los datos reales de ventas, clientes y catálogo del emprendimiento.',
        resultado: 'Negocio organizado con acceso instantáneo a datos limpios y consultables.',
        entregable: 'BASE DE INFORMACIÓN DEL NEGOCIO',
        puntos: [
          '2.1 Identificar información: clientes, productos, ventas, inventario, proveedores, servicios, tareas.',
          '2.2 Estructurar con Google Sheets, explícitamente no como un curso de Sheets, sino como base de información/datos.',
          '2.3 IA para organizar: ChatGPT/Gemini para clasificar, ordenar, limpiar, estructurar y detectar duplicados.'
        ]
      },
      {
        id: 'n1-m3',
        numero: 3,
        titulo: 'MÓDULO 3 — CONSTRUIR EL CRM VISUAL',
        subtitulo: 'Gestión simple y seguimiento de clientes sin API',
        nivelId: 1,
        lado: 'L',
        objetivo: 'Gestión simple de clientes y canalización directa de prospectos.',
        concepto: 'Un CRM visual sin costos de licencias pesadas ni integraciones complejas de API.',
        herramientas: ['Google Sheets', 'ChatGPT / Gemini', 'Enlaces Directos WhatsApp / Teléfono'],
        pasos: [
          '1. Configurar campos: nombre, teléfono, email, estado, última interacción, notas.',
          '2. Crear interfaz visual y dashboard de estados del cliente.',
          '3. Botones de contacto al teléfono/canal mediante enlaces directos sin API.',
          '4. Preparación de respuestas asistidas y priorización con IA.'
        ],
        implementacion: 'Vincular el pipeline de ventas para responder en segundos y no perder ningún cliente potencial.',
        resultado: 'Trazabilidad del 100% de los prospectos y mayor tasa de conversión comercial.',
        entregable: 'CRM VISUAL DEL NEGOCIO',
        puntos: [
          '3.1 Campos: nombre, teléfono, email, estado, última interacción, próxima acción, notas.',
          '3.2 Base en Google Sheets.',
          '3.3 Interfaz/dashboard.',
          '3.4 Botones de contacto al teléfono/canal mediante enlaces, sin API.',
          '3.5 IA para clasificación, preparación de respuestas, análisis de seguimiento y priorización.'
        ]
      },
      {
        id: 'n1-m4',
        numero: 4,
        titulo: 'MÓDULO 4 — INVENTARIO INTELIGENTE',
        subtitulo: 'Control de productos, stock y alertas tempranas',
        nivelId: 1,
        lado: 'L',
        objetivo: 'Control de productos/stock y alertas automáticas de reposición.',
        concepto: 'Evitar quiebres de inventario y capital inmovilizado con análisis predictivo asistido por IA.',
        herramientas: ['Google Sheets', 'ChatGPT', 'Gemini', 'Dashboard de Alertas'],
        pasos: [
          '1. Definir producto, categoría, cantidad, precio, stock mínimo y estado.',
          '2. Semáforo de estados: Normal / Stock bajo / Sin stock.',
          '3. Construcción del dashboard de stock y movimientos.',
          '4. Análisis con IA: productos sin movimiento y prioridades de rotación.'
        ],
        implementacion: 'Monitorear existencias diarias con alertas visuales de stock crítico.',
        resultado: 'Cero ventas perdidas por falta de stock y reducción de capital estancado.',
        entregable: 'INVENTARIO INTELIGENTE',
        puntos: [
          '4.1 Producto, categoría, cantidad, precio, stock mínimo, estado.',
          '4.2 Estado: Normal / Stock bajo / Sin stock.',
          '4.3 Dashboard: stock, productos, alertas, movimientos.',
          '4.4 Análisis con IA: stock bajo, productos sin movimiento, más vendidos, prioridades.'
        ]
      },
      {
        id: 'n1-m5',
        numero: 5,
        titulo: 'MÓDULO 5 — CATÁLOGO DIGITAL',
        subtitulo: 'De lista de datos a catálogo comercial profesional',
        nivelId: 1,
        lado: 'L',
        objetivo: 'Transformar la información de productos/servicios en un catálogo profesional.',
        concepto: 'Sincronizar la información estructurada de la base de datos con diseño visual de alto impacto.',
        herramientas: ['Canva', 'ChatGPT / Gemini', 'Base de Información'],
        pasos: [
          '1. Estructura de ficha de producto o servicio.',
          '2. Generación de títulos comerciales y descripciones persuasivas con IA.',
          '3. Maquetación y diseño en Canva con plantillas profesionales.',
          '4. Integración dinámica de precios y enlaces de contacto directo.'
        ],
        implementacion: 'Compartir el catálogo interactivo por WhatsApp, redes sociales y correo.',
        resultado: 'Presentación de marca profesional que acelera la toma de decisión del comprador.',
        entregable: 'CATÁLOGO DIGITAL DEL NEGOCIO',
        puntos: [
          '5.1 Estructura de producto.',
          '5.2 IA: descripciones, títulos, categorías, texto comercial.',
          '5.3 Diseño en Canva.',
          '5.4 Integrar la misma información del negocio.'
        ]
      },
      {
        id: 'n1-m6',
        numero: 6,
        titulo: 'MÓDULO 6 — DASHBOARD / CENTRO DE CONTROL',
        subtitulo: 'Módulo central: métricas y visión ejecutiva',
        nivelId: 1,
        lado: 'R',
        objetivo: 'Construir el centro neurálgico para visualizar y analizar el negocio en un solo panel.',
        concepto: 'La IA analiza la información respondiendo: "¿Qué debería revisar esta semana según mis datos?".',
        herramientas: ['Google Sheets / Looker Studio', 'ChatGPT / Gemini'],
        pasos: [
          '1. Definir qué visualizar: clientes, ventas, productos, pendientes y pedidos.',
          '2. Estructuración y compatibilidad de datos.',
          '3. Construcción del dashboard con herramientas gratuitas.',
          '4. Configuración de prompts de análisis semanal con IA.'
        ],
        implementacion: 'Revisión semanal del centro de control para toma de decisiones ágiles.',
        resultado: 'Visibilidad ejecutiva integral del estado del negocio en tiempo real.',
        entregable: 'CENTRO DE CONTROL DEL NEGOCIO',
        puntos: [
          '6.1 Qué visualizar: clientes, ventas, productos, inventario, pendientes, pedidos, indicadores.',
          '6.2 Estructura de datos en Google Sheets.',
          '6.3 Construir dashboard con herramienta gratuita.',
          '6.4 Indicadores: ventas, clientes, inventario, pendientes, productos, evolución.',
          '6.5 La IA analiza la información: "¿qué debería revisar esta semana según los datos?".',
          '6.6 Exportar a Google Sheets/Excel cuando sea compatible.'
        ]
      },
      {
        id: 'n1-m7',
        numero: 7,
        titulo: 'MÓDULO 7 — PRODUCTIVIDAD PERSONAL',
        subtitulo: 'Emails, documentos, reuniones y agenda con IA',
        nivelId: 1,
        lado: 'R',
        objetivo: 'Multiplicar la productividad personal del emprendedor liberando horas operativas.',
        concepto: 'Crear un asistente personal de trabajo diario aprovechando plantillas y modelos LLM.',
        herramientas: ['ChatGPT', 'Gemini', 'Google Docs', 'Google Calendar'],
        pasos: [
          '1. Respuestas y redacción de correos con ChatGPT/Gemini.',
          '2. Generación y síntesis de documentos ejecutivos.',
          '3. Minutas automáticas de reuniones: tareas, pendientes y próximos pasos.',
          '4. Organización eficiente de agenda con Google Calendar + IA.'
        ],
        implementacion: 'Integrar rutinas diarias asistidas por IA para correo, agenda y minutas.',
        resultado: 'Ahorro de más de 10 a 15 horas semanales en redacción y gestión administrativa.',
        entregable: 'SISTEMA PERSONAL DE PRODUCTIVIDAD',
        puntos: [
          '7.1 Emails: ChatGPT/Gemini.',
          '7.2 Documentos: ChatGPT/Gemini + Google Docs.',
          '7.3 Reuniones: resumen/tareas/pendientes/próximos pasos.',
          '7.4 Organización: Google Calendar + IA.',
          '7.5 Plantillas reutilizables.'
        ]
      },
      {
        id: 'n1-m8',
        numero: 8,
        titulo: 'MÓDULO 8 — CONTENIDO Y MARKETING',
        subtitulo: 'Estrategia, generación de ideas, copy y diseño',
        nivelId: 1,
        lado: 'R',
        objetivo: 'Construir una máquina continua de contenido y marketing sin bloqueo creativo.',
        concepto: 'Definir cliente y oferta para que la IA genere ideas, guiones, copys y piezas para redes.',
        herramientas: ['ChatGPT / Gemini', 'Canva'],
        pasos: [
          '1. Definición clara de cliente ideal y propuesta de valor.',
          '2. Generación masiva de ideas alineadas al público objetivo.',
          '3. Creación de posts, guiones de video, títulos y copies persuasivos.',
          '4. Diseño de creatividades en Canva.'
        ],
        implementacion: 'Publicar contenido constante de autoridad para atraer clientes orgánicos.',
        resultado: 'Presencia constante en redes sociales con un tercio del esfuerzo manual.',
        entregable: 'SISTEMA DE CONTENIDO DEL NEGOCIO',
        puntos: [
          '8.1 Definir cliente.',
          '8.2 Definir oferta.',
          '8.3 Generar ideas con ChatGPT/Gemini.',
          '8.4 Posts, guiones, copy, títulos, ideas de videos.',
          '8.5 Diseño en Canva.'
        ]
      },
      {
        id: 'n1-m9',
        numero: 9,
        titulo: 'MÓDULO 9 — VENTAS Y SEGUIMIENTO',
        subtitulo: 'Cierre de oportunidades y seguimiento comercial',
        nivelId: 1,
        lado: 'R',
        objetivo: 'Sistematizar el proceso de venta desde la primera consulta hasta el cierre.',
        concepto: 'Clasificar clientes, detectar oportunidades y preparar propuestas personalizadas en minutos con IA.',
        herramientas: ['ChatGPT / Gemini', 'Dashboard Comercial'],
        pasos: [
          '1. Registro sistemático de consultas entrantes.',
          '2. Clasificación de leads por potencial y urgencia.',
          '3. Preparación de propuestas comerciales personalizadas con IA.',
          '4. Cadencias de seguimiento y visualización en dashboard comercial.'
        ],
        implementacion: 'Seguimiento activo de cada oportunidad comercial abierta en el embudo.',
        resultado: 'Aumento significativo en la tasa de cierre y reducción del ciclo de venta.',
        entregable: 'SISTEMA DE SEGUIMIENTO COMERCIAL',
        puntos: [
          '9.1 Registrar consultas.',
          '9.2 Clasificar clientes.',
          '9.3 Detectar oportunidades.',
          '9.4 Preparar propuestas.',
          '9.5 Seguimiento.',
          '9.6 Visualizar en dashboard comercial.',
          'IA: ChatGPT/Gemini.'
        ]
      },
      {
        id: 'n1-pf',
        numero: 10,
        titulo: 'PROYECTO FINAL — NIVEL 1',
        subtitulo: 'Construí mi propio sistema de gestión con IA',
        nivelId: 1,
        lado: 'R',
        esProyectoFinal: true,
        objetivo: 'Integrar los sistemas que el negocio realmente necesita según el diagnóstico inicial.',
        concepto: 'El estudiante no necesita implementar los 9 sistemas si su modelo no lo requiere: adapta a su medida.',
        herramientas: ['Google Sheets', 'ChatGPT / Gemini', 'Canva', 'Dashboard'],
        pasos: [
          '1. Retomar el diagnóstico inicial del Módulo 1.',
          '2. Seleccionar el combo óptimo para el modelo de negocio.',
          '3. Interconectar datos, CRM, catálogo o inventario.',
          '4. Presentación y puesta en marcha del sistema real.'
        ],
        implementacion: 'Puesta en producción del sistema integrado en el día a día del negocio.',
        resultado: '"CONSTRUÍ MI PROPIO SISTEMA DE GESTIÓN CON IA"',
        entregable: 'SISTEMA DE GESTIÓN OPERATIVO DEL NEGOCIO',
        puntos: [
          'El estudiante vuelve al diagnóstico del M1 y elige lo que realmente necesita su negocio.',
          'NO necesita los nueve sistemas obligatorios.',
          'Ejemplo Tienda: inventario + CRM + catálogo + dashboard.',
          'Ejemplo Profesional: clientes + seguimiento + productividad + dashboard.',
          'Ejemplo Comercio: inventario + ventas + clientes + catálogo.'
        ]
      }
    ],
    proyectoFinal: {
      titulo: 'PROYECTO FINAL — NIVEL 1',
      descripcion: 'El estudiante vuelve al diagnóstico del M1 y elige lo que realmente necesita su negocio. NO necesita los nueve sistemas.',
      ejemplos: [
        'Tienda: inventario + CRM + catálogo + dashboard',
        'Profesional: clientes + seguimiento + productividad + dashboard',
        'Comercio: inventario + ventas + clientes + catálogo'
      ],
      resultado: 'CONSTRUÍ MI PROPIO SISTEMA DE GESTIÓN CON IA',
      entregable: 'SISTEMA INTEGRADO DE GESTIÓN DEL NEGOCIO'
    }
  },
  {
    id: 2,
    nombre: 'NIVEL 2 — IA PARA EQUIPOS',
    tagline: 'Soluciones colaborativas y productividad compartida',
    objetivo: 'Analizar cómo trabaja un equipo y construir soluciones prácticas compartidas.',
    duracion: '9 Módulos Colaborativos + Proyecto Integrador',
    perfil: 'Líderes de equipo, mandos medios y áreas operativas',
    modulos: [
      {
        id: 'n2-m1',
        numero: 1,
        titulo: 'MÓDULO 1 — DIAGNÓSTICO DEL EQUIPO',
        subtitulo: 'Mapa de productividad y fallas de coordinación',
        nivelId: 2,
        lado: 'L',
        objetivo: 'Analizar la dinámica del equipo para detectar tiempos muertos y fricciones de comunicación.',
        concepto: 'Los problemas de equipo no se resuelven agregando más reuniones, sino estructurando la información compartida.',
        herramientas: ['ChatGPT', 'Gemini', 'Plantilla de Diagnóstico de Equipo'],
        pasos: [
          '1. Mapear personas, roles y tareas asignadas.',
          '2. Identificar cuellos de botella en comunicación e información dispersa.',
          '3. Evaluar tiempos de respuesta y errores recurrentes.',
          '4. Elaborar el mapa de productividad del equipo.'
        ],
        implementacion: 'Auditoría interna con los integrantes para levantar las tareas con más fricción.',
        resultado: 'Diagnóstico objetivo de la pérdida de horas en el equipo y plan de optimización.',
        entregable: 'MAPA DE PRODUCTIVIDAD DEL EQUIPO',
        puntos: [
          'Personas, roles, tareas, comunicación, información, tiempos, errores.',
          'Entregable: MAPA DE PRODUCTIVIDAD DEL EQUIPO'
        ]
      },
      {
        id: 'n2-m2',
        numero: 2,
        titulo: 'MÓDULO 2 — MAPEO POR ÁREAS',
        subtitulo: 'Identificar oportunidades de IA por departamento',
        nivelId: 2,
        lado: 'L',
        objetivo: 'Mapear integralmente cada área clave del negocio e identificar casos de uso de IA.',
        concepto: 'Cada departamento tiene retos distintos: ventas necesita velocidad, administración requiere precisión.',
        herramientas: ['ChatGPT / Gemini', 'Matriz Departamental'],
        pasos: [
          '1. Mapear área de Administración y Finanzas.',
          '2. Mapear área de Ventas y Comercial.',
          '3. Mapear Marketing, Contenido y Atención al Cliente.',
          '4. Mapear Operaciones y Dirección.'
        ],
        implementacion: 'Priorizar las 3 áreas con mayor impacto inmediato en ahorro de costos y generación de ingresos.',
        resultado: 'Matriz clara de adopción de IA departamental.',
        entregable: 'MAPA DE ÁREAS Y OPORTUNIDADES DE IA',
        puntos: [
          'Administración, ventas, marketing, atención al cliente, operaciones, dirección.',
          'Identificar oportunidades específicas de IA por departamento.'
        ]
      },
      {
        id: 'n2-m3',
        numero: 3,
        titulo: 'MÓDULO 3 — ADMINISTRACIÓN + SECRETARIADO',
        subtitulo: 'Gestión documental y flujos administrativos con IA',
        nivelId: 2,
        lado: 'L',
        objetivo: 'Construir el sistema de apoyo administrativo y secretarial asistido por IA.',
        concepto: 'Estandarizar minutas, correspondencia y seguimiento de acuerdos de equipo.',
        herramientas: ['ChatGPT / Gemini', 'Google Docs', 'Google Sheets', 'Google Drive'],
        pasos: [
          '1. Gestión inteligente de documentos y archivos compartidos.',
          '2. Redacción asistida de correos formales e informes ejecutivos.',
          '3. Procesamiento de reuniones y asignación de responsables.',
          '4. Organización y seguimiento de tareas administrativas.'
        ],
        implementacion: 'Puesta en marcha del protocolo administrativo asistido por IA.',
        resultado: 'Operación administrativa unificada, rápida y sin documentos perdidos.',
        entregable: 'SISTEMA ADMINISTRATIVO ASISTIDO POR IA',
        puntos: [
          'Documentos, emails, reuniones, informes, seguimiento, organización.',
          'IA: ChatGPT/Gemini.',
          'Herramientas: Google Docs/Sheets/Drive.'
        ]
      },
      {
        id: 'n2-m4',
        numero: 4,
        titulo: 'MÓDULO 4 — EQUIPO COMERCIAL',
        subtitulo: 'CRM visual compartido y pipeline de ventas colaborativo',
        nivelId: 2,
        lado: 'L',
        objetivo: 'Dotar al equipo de ventas de un entorno compartido de seguimiento comercial.',
        concepto: 'Visibilidad en tiempo real para vendedores y líderes sin duplicar contactos ni esfuerzos.',
        herramientas: ['Google Sheets', 'ChatGPT / Gemini', 'Dashboard Comercial'],
        pasos: [
          '1. CRM visual multiusuario con asignación por vendedor.',
          '2. Gestión de oportunidades y pipeline conjunto.',
          '3. Registro de estados y seguimiento comercial.',
          '4. Dashboard de metas y ventas logradas.'
        ],
        implementacion: 'Capacitar al equipo en la carga y actualización diaria del pipeline.',
        resultado: 'Mayor coordinación del equipo comercial y aumento en ventas cerradas.',
        entregable: 'CENTRO COMERCIAL DEL EQUIPO',
        puntos: [
          'CRM visual, clientes, oportunidades, seguimiento, ventas, dashboard.',
          'Entregable: CENTRO COMERCIAL'
        ]
      },
      {
        id: 'n2-m5',
        numero: 5,
        titulo: 'MÓDULO 5 — MARKETING Y CONTENIDO',
        subtitulo: 'Biblioteca de activos, campañas y calendario compartido',
        nivelId: 2,
        lado: 'L',
        objetivo: 'Organizar la creación, aprobación y publicación de marketing en equipo.',
        concepto: 'Centralizar biblioteca de recursos, calendario editorial e indicadores de campañas.',
        herramientas: ['ChatGPT / Gemini', 'Canva', 'Dashboard de Marketing'],
        pasos: [
          '1. Calendario de publicaciones compartido.',
          '2. Biblioteca de contenidos, copys y artes aprobados.',
          '3. Creación colaborativa de campañas publicitarias.',
          '4. Medición de indicadores de atracción.'
        ],
        implementacion: 'Flujo de aprobación ágil entre creativos, redactores y directores.',
        resultado: 'Ritmo sostenido de marketing sin depender de una sola persona.',
        entregable: 'SISTEMA DE MARKETING COLABORATIVO',
        puntos: [
          'Calendario, biblioteca, contenido, campañas, indicadores.',
          'IA: ChatGPT/Gemini. Diseño: Canva. Dashboard.'
        ]
      },
      {
        id: 'n2-m6',
        numero: 6,
        titulo: 'MÓDULO 6 — ATENCIÓN AL CLIENTE',
        subtitulo: 'Respuestas preparadas, estados y clasificación rápida',
        nivelId: 2,
        lado: 'R',
        objetivo: 'Estandarizar la atención de soporte y consultas con asistencia de IA.',
        concepto: 'La IA ayuda a preparar, clasificar y responder dudas frecuentes con calidad uniforme.',
        herramientas: ['ChatGPT / Gemini', 'Base de Respuestas Estandarizadas'],
        pasos: [
          '1. Mapeo de consultas frecuentes y tipologías de clientes.',
          '2. Matriz de estados de tickets o solicitudes.',
          '3. Generación de respuestas rápidas asistidas por IA.',
          '4. Seguimiento hasta la resolución completa.'
        ],
        implementacion: 'Protocolo de soporte para que cualquier miembro del equipo responda con excelencia.',
        resultado: 'Tiempo de respuesta reducido a minutos y clientes más satisfechos.',
        entregable: 'SISTEMA DE ATENCIÓN AL CLIENTE',
        puntos: [
          'Consultas, clientes, estados, seguimiento, respuestas.',
          'La IA ayuda a preparar/clasificar información.'
        ]
      },
      {
        id: 'n2-m7',
        numero: 7,
        titulo: 'MÓDULO 7 — DASHBOARDS DE EQUIPO',
        subtitulo: 'Tableros por área y resumen general de control',
        nivelId: 2,
        lado: 'R',
        objetivo: 'Construir tableros visuales para cada departamento más un resumen general directivo.',
        concepto: 'Tener una única fuente de verdad para toda la empresa en tiempo real.',
        herramientas: ['Google Sheets / Looker', 'ChatGPT / Gemini'],
        pasos: [
          '1. Dashboard para área de ventas.',
          '2. Dashboard para administración y finanzas.',
          '3. Dashboard para marketing y atención.',
          '4. Tablero consolidado de dirección general.'
        ],
        implementacion: 'Revisión semanal en reuniones de sincronización de equipo.',
        resultado: 'Alineación de todas las áreas con métricas claras y transparentes.',
        entregable: 'CENTRO DE CONTROL DEL EQUIPO',
        puntos: [
          'Dashboards para ventas, administración, marketing, atención, más resumen general.',
          'Entregable: CENTRO DE CONTROL DEL EQUIPO'
        ]
      },
      {
        id: 'n2-m8',
        numero: 8,
        titulo: 'MÓDULO 8 — METODOLOGÍA COMÚN DE IA',
        subtitulo: 'Guía interna de prompts, documentación y buenas prácticas',
        nivelId: 2,
        lado: 'R',
        objetivo: 'Crear la cultura y los estándares de uso de IA para todo el equipo.',
        concepto: 'Evitar que cada miembro use la IA de forma aislada; documentar prompts y metodologías validadas.',
        herramientas: ['Guía Interna de IA', 'Biblioteca de Prompts Corporativos'],
        pasos: [
          '1. Estructura de creación de prompts de calidad para el negocio.',
          '2. Documentación de instrucciones y casos de éxito.',
          '3. Criterios de revisión y validación de resultados.',
          '4. Compartir y actualizar prácticas periódicamente.'
        ],
        implementacion: 'Adopción de la guía en el onboarding de nuevos empleados y capacitación continua.',
        resultado: 'Equipo 100% competente en el uso productivo y seguro de herramientas de IA.',
        entregable: 'GUÍA INTERNA DE USO DE IA',
        puntos: [
          'Cómo crear prompts, documentar instrucciones, revisar resultados, compartir prácticas.',
          'Entregable: GUÍA INTERNA DE USO DE IA'
        ]
      },
      {
        id: 'n2-m9',
        numero: 9,
        titulo: 'MÓDULO 9 — PROYECTO',
        subtitulo: 'Implementación del sistema en un equipo real',
        nivelId: 2,
        lado: 'R',
        esProyectoFinal: true,
        objetivo: 'Aplicar la metodología completa en un equipo de trabajo real de punta a punta.',
        concepto: 'Diagnosticar → detectar problemas → seleccionar soluciones → construir → implementar → medir.',
        herramientas: ['Ecosistema completo Nivel 2'],
        pasos: [
          '1. Diagnóstico del equipo real.',
          '2. Detección de problemas y selección de soluciones prioritarias.',
          '3. Construcción e integración colaborativa.',
          '4. Implementación y medición de mejoras.'
        ],
        implementacion: 'Puesta en marcha con seguimiento de métricas de productividad.',
        resultado: 'SISTEMA DE PRODUCTIVIDAD DEL EQUIPO OPERANDO',
        entregable: 'SISTEMA DE PRODUCTIVIDAD DEL EQUIPO',
        puntos: [
          'Diagnosticar equipo real → detectar problemas → seleccionar soluciones → construir → implementar → medir.',
          'Resultado: SISTEMA DE PRODUCTIVIDAD DEL EQUIPO'
        ]
      }
    ],
    proyectoFinal: {
      titulo: 'PROYECTO INTEGRADOR — NIVEL 2',
      descripcion: 'Diagnosticar equipo real → detectar problemas → seleccionar soluciones → construir → implementar → medir.',
      resultado: 'SISTEMA DE PRODUCTIVIDAD DEL EQUIPO',
      entregable: 'SISTEMA DE PRODUCTIVIDAD DEL EQUIPO'
    }
  },
  {
    id: 3,
    nombre: 'NIVEL 3 — IA PARA EMPRESAS',
    tagline: 'Diagnóstico y transformación empresarial profunda',
    objetivo: 'Diagnóstico y transformación empresarial mediante sistemas de IA a medida.',
    duracion: '9 Módulos Estratégicos + Proyecto Final',
    perfil: 'Empresarios, directores generales, consultores y líderes de transformación digital',
    modulos: [
      {
        id: 'n3-m1',
        numero: 1,
        titulo: 'MÓDULO 1 — AUDITORÍA OPERATIVA',
        subtitulo: 'Radiografía integral de la empresa',
        nivelId: 3,
        lado: 'L',
        objetivo: 'Auditar a fondo todos los departamentos, procesos y herramientas de la organización.',
        concepto: 'Detectar los puntos de fuga de capital y las ineficiencias estructurales a nivel empresa.',
        herramientas: ['Framework de Auditoría Operativa', 'ChatGPT / Gemini Enterprise'],
        pasos: [
          '1. Análisis de departamentos y estructura jerárquica.',
          '2. Relevamiento de procesos, personas y herramientas utilizadas.',
          '3. Medición de tiempos de ciclo y problemas recurrentes.',
          '4. Elaboración del mapa operativo global.'
        ],
        implementacion: 'Entrevistas estructuradas con directores de área y líderes de procesos.',
        resultado: 'Visión de 360 grados de la operación de la compañía y sus áreas de oportunidad.',
        entregable: 'MAPA OPERATIVO DE LA EMPRESA',
        puntos: [
          'Departamentos, procesos, personas, información, herramientas, tiempos, problemas.',
          'Entregable: MAPA OPERATIVO DE LA EMPRESA'
        ]
      },
      {
        id: 'n3-m2',
        numero: 2,
        titulo: 'MÓDULO 2 — MAPEO DE PROCESOS',
        subtitulo: 'De punta a punta: del lead a la postventa',
        nivelId: 3,
        lado: 'L',
        objetivo: 'Mapear flujos completos de punta a punta e identificar dónde insertar IA.',
        concepto: 'Ejemplo: Cliente → Venta → Pedido → Administración → Entrega → Postventa.',
        herramientas: ['Diagrama de Flujo de Procesos', 'ChatGPT / Gemini'],
        pasos: [
          '1. Identificar quién interviene y qué información fluye.',
          '2. Medir cuánto tarda cada etapa del proceso.',
          '3. Detección de repeticiones y tasas de error humano.',
          '4. Identificación de puntos de inserción de IA.'
        ],
        implementacion: 'Documentar el flujo crítico de valor del cliente en la empresa.',
        resultado: 'Procesos visuales estandarizados listos para ser acelerados con IA.',
        entregable: 'MAPA DE PROCESOS DE LA EMPRESA',
        puntos: [
          'Ejemplo: Cliente → Venta → Pedido → Administración → Entrega → Postventa.',
          'Preguntas: quién, qué información, cuánto tarda, repetición, errores, oportunidades de IA.',
          'Entregable: MAPA DE PROCESOS'
        ]
      },
      {
        id: 'n3-m3',
        numero: 3,
        titulo: 'MÓDULO 3 — MATRIZ DE OPORTUNIDADES',
        subtitulo: 'Priorización estratégica: impacto vs esfuerzo',
        nivelId: 3,
        lado: 'L',
        objetivo: 'Priorizar las iniciativas de IA con mayor impacto financiero y viabilidad técnica.',
        concepto: 'No todo debe automatizarse al mismo tiempo: priorizar por impacto directo en margen o tiempo.',
        herramientas: ['Matriz de Priorización Estratégica'],
        pasos: [
          '1. Identificar proceso y problema específico.',
          '2. Cuantificar el impacto en costos o satisfacción.',
          '3. Diseñar la solución de IA aplicable.',
          '4. Asignar prioridad de ejecución.'
        ],
        implementacion: 'Aprobación del comité directivo de la hoja de ruta de implementación.',
        resultado: 'Roadmap de transformación digital ordenado por retorno de inversión.',
        entregable: 'MAPA DE IMPLEMENTACIÓN DE IA',
        puntos: [
          'Columnas: proceso, problema, impacto, solución de IA, prioridad.',
          'Entregable: MAPA DE IMPLEMENTACIÓN DE IA'
        ]
      },
      {
        id: 'n3-m4',
        numero: 4,
        titulo: 'MÓDULO 4 — SOLUCIONES EMPRESARIALES',
        subtitulo: 'Suite de herramientas y sistemas por área',
        nivelId: 3,
        lado: 'L',
        objetivo: 'Construir o configurar las soluciones empresariales requeridas.',
        concepto: 'Soluciones integradas: CRM empresarial, inventario avanzado, catálogos y herramientas de gestión.',
        herramientas: ['Suite Empresarial de IA', 'Hojas y Bases Conectadas'],
        pasos: [
          '1. Arquitectura de datos centralizada.',
          '2. Gestión y seguimiento de información crítica.',
          '3. Herramientas administrativas personalizadas.',
          '4. Soluciones específicas adaptadas por área funcional.'
        ],
        implementacion: 'Conexión de los módulos operativos a los repositorios de la empresa.',
        resultado: 'Ecosistema de soluciones empresariales coordinadas.',
        entregable: 'SUITE DE SOLUCIONES EMPRESARIALES',
        puntos: [
          'CRM, inventario, catálogos, dashboards, gestión de información, seguimiento, herramientas administrativas.',
          'Soluciones específicas por área.'
        ]
      },
      {
        id: 'n3-m5',
        numero: 5,
        titulo: 'MÓDULO 5 — SOLUCIONES POR INDUSTRIA',
        subtitulo: 'Casos reales: comercio, salud, inmobiliario y servicios',
        nivelId: 3,
        lado: 'L',
        objetivo: 'Aprender cómo adaptar el método a cualquier industria y rubro de negocio.',
        concepto: 'Importante: enseñar cómo adaptar el método, no memorizar sistemas rígidos.',
        herramientas: ['Modelos por Industria', 'Canva', 'Bases Sectoriales'],
        pasos: [
          '1. Comercio: inventario + ventas + clientes + catálogo.',
          '2. Inmobiliarias: propiedades + clientes + seguimiento.',
          '3. Odontología, Clínicas y Oftalmología: profesionales + pacientes + turnos.',
          '4. Servicios profesionales, Gimnasios y Empresas de servicios: clientes + presupuestos.'
        ],
        implementacion: 'Adaptar el modelo matriz a la vertical de negocio específica del alumno.',
        resultado: 'Capacidad de implementar soluciones de IA en cualquier industria del mercado.',
        entregable: 'SISTEMA SECTORIAL PERSONALIZADO',
        puntos: [
          'Comercio: inventario + ventas + clientes + catálogo.',
          'Inmobiliarias: propiedades + clientes + seguimiento.',
          'Odontología: profesionales + pacientes + turnos + gestión.',
          'Clínica y Oftalmología: profesionales + especialidades + turnos.',
          'Servicios profesionales: clientes + servicios + documentación.',
          'Gimnasio: socios + planes + pagos + asistencia.',
          'Empresas de servicios: clientes + trabajos + presupuestos + seguimiento.',
          'Importante: enseñar cómo adaptar el método, no memorizar sistemas.'
        ]
      },
      {
        id: 'n3-m6',
        numero: 6,
        titulo: 'MÓDULO 6 — CENTRO DE CONTROL EMPRESARIAL',
        subtitulo: 'Dashboard de dirección ejecutiva y KPIs clave',
        nivelId: 3,
        lado: 'R',
        objetivo: 'Crear el panel maestro para que la dirección supervise toda la empresa en segundos.',
        concepto: 'Visualización integral de clientes, ventas, inventario, equipo, procesos y pendientes.',
        herramientas: ['Dashboard de Dirección', 'Modelos Analíticos'],
        pasos: [
          '1. Consolidación de indicadores de todos los departamentos.',
          '2. Métricas de eficiencia de procesos y pendientes críticos.',
          '3. Visualización ejecutiva de la evolución del negocio.',
          '4. Alertas de desvíos y anomalías operativas.'
        ],
        implementacion: 'Presentación semanal o mensual al directorio y toma de decisiones estratégicas.',
        resultado: 'Control total de la organización con un vistazo gerencial.',
        entregable: 'DASHBOARD DE DIRECCIÓN EMPRESARIAL',
        puntos: [
          'Clientes, ventas, inventario, equipo, procesos, indicadores, pendientes.',
          'Entregable: DASHBOARD DE DIRECCIÓN'
        ]
      },
      {
        id: 'n3-m7',
        numero: 7,
        titulo: 'MÓDULO 7 — IMPLEMENTACIÓN',
        subtitulo: 'Del diseño al uso real: adopción y mantenimiento',
        nivelId: 3,
        lado: 'R',
        objetivo: 'Garantizar que los sistemas diseñados sean usados efectivamente por la organización.',
        concepto: 'El éxito no es diseñar el sistema, sino asegurar que se use en la operación diaria real.',
        herramientas: ['Protocolo de Adopción y Mantenimiento'],
        pasos: [
          '1. Definir quién lo usa, cuándo y cómo.',
          '2. Protocolo de qué información se carga y frecuencia.',
          '3. Rutinas de revisión y auditoría de calidad.',
          '4. Plan de mantenimiento y actualización continua.'
        ],
        implementacion: 'Acompañamiento en el cambio cultural y capacitación del personal clave.',
        resultado: 'Transición exitosa del papel/diseño a la operación diaria asistida por IA.',
        entregable: 'PLAN DE IMPLEMENTACIÓN Y ADOPCIÓN REAL',
        puntos: [
          'Pasar del diseño → al uso real.',
          'Definir quién lo usa, cuándo, cómo, qué información se carga, revisión, mantenimiento.'
        ]
      },
      {
        id: 'n3-m8',
        numero: 8,
        titulo: 'MÓDULO 8 — MEDICIÓN',
        subtitulo: 'Antes vs. Después: impacto, tiempo y ROI',
        nivelId: 3,
        lado: 'R',
        objetivo: 'Medir cuantitativamente las mejoras y el impacto financiero de la transformación.',
        concepto: 'Comparación antes vs. después: tiempo, pasos, errores, visibilidad y productividad.',
        herramientas: ['Informe de Impacto y Rendimiento'],
        pasos: [
          '1. Medición de tiempos de ciclo antes vs después.',
          '2. Reducción de pasos en procesos y eliminación de errores.',
          '3. Evaluación de visibilidad directiva y productividad general.',
          '4. Cálculo del retorno de inversión (ROI) obtenido.'
        ],
        implementacion: 'Presentación de resultados formales ante directivos y accionistas.',
        resultado: 'Evidencia demostrable de rentabilidad y eficiencia ganada con IA.',
        entregable: 'INFORME DE RESULTADOS DE IMPACTO',
        puntos: [
          'Antes vs. después: tiempo, pasos, errores, visibilidad, productividad.',
          'Entregable: INFORME DE RESULTADOS'
        ]
      },
      {
        id: 'n3-m9',
        numero: 9,
        titulo: 'MÓDULO 9 — PROYECTO FINAL',
        subtitulo: 'Mapa IA integral de la empresa',
        nivelId: 3,
        lado: 'R',
        esProyectoFinal: true,
        objetivo: 'Culminar la transformación completa con el Mapa IA de la Empresa ejecutado.',
        concepto: 'Diagnóstico → mapeo → oportunidades → priorización → diseño → construcción → implementación → medición.',
        herramientas: ['Ecosistema completo Nivel 3'],
        pasos: [
          '1. Diagnóstico integral y mapeo de procesos.',
          '2. Priorización de oportunidades de alto impacto.',
          '3. Diseño y construcción de soluciones a medida.',
          '4. Implementación en uso real y medición de resultados.'
        ],
        implementacion: 'Adopción corporativa plena del ecosistema de IA aplicada.',
        resultado: 'MAPA IA DE LA EMPRESA CONVERTIDO EN REALIDAD',
        entregable: 'MAPA IA DE LA EMPRESA',
        puntos: [
          'Diagnóstico → mapeo → oportunidades → priorización → diseño → construcción → implementación → medición.',
          'Resultado: MAPA IA DE LA EMPRESA'
        ]
      }
    ],
    proyectoFinal: {
      titulo: 'PROYECTO FINAL — NIVEL 3',
      descripcion: 'Diagnóstico → mapeo → oportunidades → priorización → diseño → construcción → implementación → medición.',
      resultado: 'MAPA IA DE LA EMPRESA',
      entregable: 'MAPA IA DE LA EMPRESA'
    }
  }
];
