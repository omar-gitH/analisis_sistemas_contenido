import React, { useState } from 'react';
import { 
  RotateCw, 
  Info, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Search, 
  Compass, 
  Code2, 
  ShieldCheck, 
  RefreshCw,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface SdlcCycleDiagramProps {
  caption?: string;
}

interface SdlcStage {
  id: string;
  step: string;
  name: string;
  short: string;
  englishName: string;
  colorName: string;
  colors: {
    from: string;
    to: string;
    accent: string;
    bgLight: string;
    bgDark: string;
    borderLight: string;
    borderDark: string;
    badgeText: string;
  };
  labelPos: {
    x: number;
    y: number;
    line1: string;
    line2?: string;
  };
  summary: string;
  meaning: string;
  objective: string;
  activities: string[];
  deliverables: string[];
  goldenRule: string;
  academicMapping: string;
}

export const SDLC_STAGES: SdlcStage[] = [
  {
    id: 'analisis-requerimientos',
    step: '01',
    name: 'Análisis de Requerimientos',
    short: 'Requerimientos',
    englishName: 'Requirement Analysis',
    colorName: 'Rojo',
    colors: {
      from: '#ef4444',
      to: '#dc2626',
      accent: '#b91c1c',
      bgLight: 'bg-red-50/80',
      bgDark: 'dark:bg-red-950/30',
      borderLight: 'border-red-200',
      borderDark: 'dark:border-red-900/60',
      badgeText: 'text-red-700 dark:text-red-300'
    },
    labelPos: {
      x: 300,
      y: 92,
      line1: 'Análisis de',
      line2: 'Requerimientos'
    },
    summary: 'Investigación exhaustiva de necesidades, estudio de viabilidad y delimitación formal del alcance del sistema.',
    meaning: 'Es la etapa fundacional donde se descubre, comprende y documenta QUÉ debe hacer el software sin entrar todavía en detalles de implementación tecnológica (el "Qué" antes del "Cómo"). Se relevan las necesidades reales de los clientes y usuarios, resolviendo ambigüedades tempranas.',
    objective: 'Definir con absoluta claridad la frontera del sistema, los objetivos de negocio y la totalidad de los Requerimientos Funcionales (RF) y No Funcionales (RNF).',
    activities: [
      'Entrevistas con stakeholders y sesiones JAD',
      'Observación de campo y análisis de documentación existente',
      'Definición de alcance y estudios de factibilidad (técnica, operativa y económica)',
      'Modelado de casos de uso y diagramas de actividad'
    ],
    deliverables: [
      'Especificación de Requerimientos de Software (SRS / ERS)',
      'Matriz de Trazabilidad de Requerimientos',
      'Documento de Visión y Alcance'
    ],
    goldenRule: 'Regla de Oro del SDLC: Un error o requerimiento omitido en esta fase costará hasta 100 veces más repararlo si se detecta en producción.',
    academicMapping: 'Comprende la Fase 01 (Investigación Preliminar) y la Fase 02 (Determinación de Requerimientos) del programa académico.'
  },
  {
    id: 'diseno',
    step: '02',
    name: 'Diseño',
    short: 'Diseño',
    englishName: 'Design',
    colorName: 'Verde',
    colors: {
      from: '#22c55e',
      to: '#16a34a',
      accent: '#15803d',
      bgLight: 'bg-emerald-50/80',
      bgDark: 'dark:bg-emerald-950/30',
      borderLight: 'border-emerald-200',
      borderDark: 'dark:border-emerald-900/60',
      badgeText: 'text-emerald-700 dark:text-emerald-300'
    },
    labelPos: {
      x: 495,
      y: 250,
      line1: 'Diseño'
    },
    summary: 'Traducción de requerimientos a especificaciones técnicas, arquitectura de software, bases de datos e interfaces.',
    meaning: 'Es el proceso de concepción técnica que define CÓMO se resolverán los requerimientos identificados. El diseño es el "arte del compromiso", donde se ponderan costos, rendimiento, seguridad, escalabilidad y usabilidad para concebir la solución óptima.',
    objective: 'Elaborar un plano arquitectónico robusto, modular y desacoplado que guíe sin ambigüedades a los desarrolladores durante la construcción.',
    activities: [
      'Diseño arquitectónico global (monolítico, multicapas, microservicios)',
      'Modelado de datos conceptual, lógico y físico (DER y esquemas relacionales/NoSQL)',
      'Diseño de interfaces de usuario y experiencia (UI/UX, wireframes y flujos)',
      'Especificación de contratos de API y protocolos de comunicación'
    ],
    deliverables: [
      'Documento de Arquitectura de Software (SAD)',
      'Diagramas de Clases, Paquetes y Secuencia UML',
      'Mockups / Prototipos interactivos de interfaz'
    ],
    goldenRule: 'Un diseño modular con alta cohesión y bajo acoplamiento minimiza la propagación de fallos y facilita la mantenibilidad a largo plazo.',
    academicMapping: 'Se corresponde directamente con la Fase 03 (Diseño del Sistema) del programa curricular.'
  },
  {
    id: 'implementacion',
    step: '03',
    name: 'Implementación',
    short: 'Implementación',
    englishName: 'Implementation',
    colorName: 'Azul',
    colors: {
      from: '#3b82f6',
      to: '#2563eb',
      accent: '#1d4ed8',
      bgLight: 'bg-blue-50/80',
      bgDark: 'dark:bg-blue-950/30',
      borderLight: 'border-blue-200',
      borderDark: 'dark:border-blue-900/60',
      badgeText: 'text-blue-700 dark:text-blue-300'
    },
    labelPos: {
      x: 420,
      y: 465,
      line1: 'Implementación'
    },
    summary: 'Codificación disciplinada, construcción de bases de datos, integración de módulos y pruebas unitarias.',
    meaning: 'Es la fase de construcción tangible donde los modelos abstractos y planos de diseño se transforman en código fuente ejecutable, librerías, scripts de bases de datos y servicios operativos.',
    objective: 'Desarrollar componentes de software funcionales, seguros y eficientes que cumplan con los estándares de calidad y la arquitectura fijada.',
    activities: [
      'Escritura de código en los lenguajes y frameworks seleccionados',
      'Control de versiones disciplinado (Git: ramas, pull requests y revisiones de pares)',
      'Desarrollo guiado por pruebas (TDD) y redacción de tests unitarios',
      'Integración continua (CI) para validar compilaciones y builds automatizados'
    ],
    deliverables: [
      'Código fuente versionado en repositorio',
      'Pruebas unitarias automatizadas con alta cobertura',
      'Builds y binarios ejecutables empaquetados'
    ],
    goldenRule: 'El software es mucho más que código ejecutable: comprende documentación, guías de instalación, modelos y scripts que salvaguardan el conocimiento acumulado.',
    academicMapping: 'Se corresponde con la Fase 04 (Desarrollo del Software / Construcción) de la materia.'
  },
  {
    id: 'pruebas',
    step: '04',
    name: 'Pruebas',
    short: 'Pruebas',
    englishName: 'Testing',
    colorName: 'Amarillo',
    colors: {
      from: '#facc15',
      to: '#eab308',
      accent: '#ca8a04',
      bgLight: 'bg-amber-50/80',
      bgDark: 'dark:bg-amber-950/30',
      borderLight: 'border-amber-200',
      borderDark: 'dark:border-amber-900/60',
      badgeText: 'text-amber-800 dark:text-amber-300'
    },
    labelPos: {
      x: 180,
      y: 465,
      line1: 'Pruebas'
    },
    summary: 'Verificación integral, validación funcional y no funcional con usuarios (V&V) y aseguramiento de calidad (QA).',
    meaning: 'Es el proceso sistemático de comprobación para asegurar que el sistema satisface plenamente los requerimientos especificados (Verificación: "¿Estamos construyendo el sistema correctamente?") y que cumple el propósito del usuario (Validación: "¿Estamos construyendo el sistema correcto?").',
    objective: 'Descubrir y corregir defectos antes del paso a producción, garantizando fiabilidad, seguridad, rendimiento y satisfacción de los usuarios.',
    activities: [
      'Pruebas de integración entre módulos y APIs externas',
      'Pruebas de sistema de extremo a extremo (E2E) y pruebas de regresión',
      'Pruebas no funcionales de carga, concurrencia, estrés y seguridad',
      'Pruebas de Aceptación del Usuario (UAT) en entornos de staging/preproducción'
    ],
    deliverables: [
      'Plan y Matriz de Casos de Prueba',
      'Reportes de incidentes / bugs resueltos',
      'Acta de Aceptación Formal de Usuarios (UAT Sign-off)'
    ],
    goldenRule: 'Las pruebas no demuestran la ausencia de errores, sino la presencia de los mismos. Cuanto más rigurosa sea la batería de pruebas, menor será el riesgo de fallas críticas en producción.',
    academicMapping: 'Se corresponde con la Fase 05 (Prueba de Sistemas / V&V) del programa académico.'
  },
  {
    id: 'evolucion',
    step: '05',
    name: 'Evolución',
    short: 'Evolución',
    englishName: 'Evolution',
    colorName: 'Violeta',
    colors: {
      from: '#a855f7',
      to: '#9333ea',
      accent: '#7e22ce',
      bgLight: 'bg-purple-50/80',
      bgDark: 'dark:bg-purple-950/30',
      borderLight: 'border-purple-200',
      borderDark: 'dark:border-purple-900/60',
      badgeText: 'text-purple-700 dark:text-purple-300'
    },
    labelPos: {
      x: 105,
      y: 250,
      line1: 'Evolución'
    },
    summary: 'Puesta en marcha, mantenimiento adaptativo, correctivo y perfectivo, soporte continuo e incorporación de mejoras.',
    meaning: 'El software nunca es un producto estático: es un activo vivo en constante cambio. Una vez desplegado, debe adaptarse a las nuevas necesidades del negocio, cambios en el entorno tecnológico o legal y mejoras solicitadas por los usuarios, cerrando el ciclo hacia nuevos análisis de requerimientos.',
    objective: 'Mantener la relevancia, estabilidad y rendimiento del sistema a lo largo del tiempo, maximizando el retorno de inversión y la satisfacción operativa.',
    activities: [
      'Despliegue operativo y migración de datos productivos',
      'Mantenimiento correctivo (corrección de incidencias imprevistas)',
      'Mantenimiento adaptativo (ajustes por cambios en SO, navegadores o leyes)',
      'Mantenimiento perfectivo y evolutivo (nuevas características funcionales)',
      'Monitoreo continuo de telemetría, logs y métricas de salud'
    ],
    deliverables: [
      'Manuales de usuario y guías de administración operativa',
      'Métricas de observabilidad y Acuerdos de Nivel de Servicio (SLA)',
      'Backlog de nuevas iniciativas para el siguiente ciclo'
    ],
    goldenRule: 'La etapa de evolución suele consumir entre el 60% y el 80% del costo total del ciclo de vida del software (TCO). Un buen diseño inicial reduce drásticamente estos costos continuos.',
    academicMapping: 'Se corresponde con la Fase 06 (Implantación y Evaluación) y el Mantenimiento continuo del software.'
  }
];

// Precomputed static SVG paths for the 5 SDLC chevrons (zero math during render)
const ARROW_PATHS = [
  {
    body: "M 144.24 85.61 A 265 265 0 0 1 455.76 85.61 L 462.82 75.9 L 465.48 170.71 L 384.05 184.31 L 391.11 174.6 A 155 155 0 0 0 208.89 174.6 L 207.94 111.25 Z",
    head: "M 462.82 75.9 L 465.48 170.71 L 384.05 184.31 Z"
  },
  {
    body: "M 455.76 85.61 A 265 265 0 0 1 552.03 381.89 L 563.44 385.6 L 474.1 417.43 L 436 344.19 L 447.41 347.9 A 155 155 0 0 0 391.11 174.6 L 451.06 154.12 Z",
    head: "M 563.44 385.6 L 474.1 417.43 L 436 344.19 Z"
  },
  {
    body: "M 552.03 381.89 A 265 265 0 0 1 300 565 L 300 577 L 242.12 501.86 L 300 443 L 300 455 A 155 155 0 0 0 447.41 347.9 L 485.42 398.59 Z",
    head: "M 300 577 L 242.12 501.86 L 300 443 Z"
  },
  {
    body: "M 300 565 A 265 265 0 0 1 47.97 381.89 L 36.56 385.6 L 90.13 307.33 L 164 344.19 L 152.59 347.9 A 155 155 0 0 0 300 455 L 263.53 506.81 Z",
    head: "M 36.56 385.6 L 90.13 307.33 L 164 344.19 Z"
  },
  {
    body: "M 47.97 381.89 A 265 265 0 0 1 144.24 85.61 L 137.18 75.9 L 228.18 102.66 L 215.95 184.31 L 208.89 174.6 A 155 155 0 0 0 152.59 347.9 L 92.04 329.23 Z",
    head: "M 137.18 75.9 L 228.18 102.66 L 215.95 184.31 Z"
  }
] as const;

const CX = 300;
const CY = 300;

export const SdlcCycleDiagram: React.FC<SdlcCycleDiagramProps> = React.memo(({ 
  caption = 'Ciclo de Vida del Desarrollo de Software (SDLC) - Representación Circular Interactiva' 
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [showAcademicDetails, setShowAcademicDetails] = useState<boolean>(false);

  const activeStage = SDLC_STAGES[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? SDLC_STAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === SDLC_STAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#151518] p-4 sm:p-6 shadow-sm transition-all"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '0 620px',
        contain: 'layout style paint'
      }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 mb-5 border-b border-slate-100 dark:border-zinc-800/80 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            <RotateCw className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
              Ciclo de Vida del Software (SDLC)
              <span className="text-[11px] font-normal text-slate-500 dark:text-zinc-400">
                • Diagrama Circular Interactivo
              </span>
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400">
              Haz clic sobre cualquier flecha o botón para examinar la etapa
            </p>
          </div>
        </div>

        {/* Action badges / step indicators */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
            Etapa {activeStage.step} de 05
          </span>
          <button
            onClick={() => setShowAcademicDetails(!showAcademicDetails)}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-slate-200 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-300 transition-all flex items-center gap-1"
            title="Comparar con las 6 fases del programa"
          >
            <Layers className="w-3 h-3 text-blue-500" />
            <span>{showAcademicDetails ? 'Ocultar 6 Fases' : 'Ver 6 Fases UTN'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Diagram Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left / Center: Circular Chevron Diagram matching reference image */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div 
            className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square mx-auto select-none"
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full overflow-visible"
              role="img"
              aria-label="Diagrama circular del Ciclo de Vida del Software (SDLC)"
            >
              <defs>
                {/* Lightweight tight-bounded seam shadow for chevron overlapping ribbon depth */}
                <filter id="sdlc-seam-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="2" dy="2.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.32" />
                </filter>
                
                {/* Active glow filter (optimized tight bounds, single pass) */}
                <filter id="sdlc-active-glow" x="-15%" y="-15%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="0" stdDeviation="4.5" floodColor="#38bdf8" floodOpacity="0.8" />
                </filter>

                {/* Arrow gradients matching reference colors */}
                {SDLC_STAGES.map((s, idx) => (
                  <linearGradient
                    key={`grad-${s.id}`}
                    id={`sdlc-grad-${idx}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={s.colors.from} />
                    <stop offset="100%" stopColor={s.colors.to} />
                  </linearGradient>
                ))}

                {/* Active highlight gradients */}
                {SDLC_STAGES.map((s, idx) => (
                  <linearGradient
                    key={`grad-active-${s.id}`}
                    id={`sdlc-grad-active-${idx}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={s.colors.from} />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor={s.colors.to} />
                  </linearGradient>
                ))}
              </defs>

              {/* Center Background Disc with crisp vector border (zero raster filter overhead) */}
              <circle
                cx={CX}
                cy={CY}
                r="147"
                className="fill-white dark:fill-[#18181b] stroke-slate-200/90 dark:stroke-zinc-700/80 transition-colors"
                strokeWidth="2"
              />

              {/* 5 Arrow Bodies */}
              <g>
                {SDLC_STAGES.map((s, idx) => {
                  const isSelected = selectedIdx === idx;
                  const isHovered = hoveredIdx === idx;
                  
                  return (
                    <g
                      key={`arrow-group-${s.id}`}
                      onClick={() => setSelectedIdx(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="cursor-pointer transition-opacity duration-150 outline-none"
                      role="button"
                      tabIndex={0}
                      aria-label={`Etapa ${idx + 1}: ${s.name}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedIdx(idx);
                        }
                      }}
                    >
                      <path
                        d={ARROW_PATHS[idx].body}
                        fill={isSelected ? `url(#sdlc-grad-active-${idx})` : `url(#sdlc-grad-${idx})`}
                        filter={isSelected ? 'url(#sdlc-active-glow)' : undefined}
                        className={`transition-all duration-150 ${
                          isSelected 
                            ? 'opacity-100 stroke-white/90' 
                            : isHovered 
                              ? 'opacity-100 stroke-white/50' 
                              : 'opacity-95 stroke-black/15'
                        }`}
                        strokeWidth={isSelected ? '2.5' : '1'}
                      />
                    </g>
                  );
                })}
              </g>

              {/* 5 Arrowheads (Grouped with seam shadow to cast shadow over next chevron notch in a single GPU pass) */}
              <g filter="url(#sdlc-seam-shadow)">
                {SDLC_STAGES.map((s, idx) => {
                  const isSelected = selectedIdx === idx;
                  
                  return (
                    <g
                      key={`arrow-head-${s.id}`}
                      onClick={() => setSelectedIdx(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="cursor-pointer outline-none pointer-events-auto"
                    >
                      <path
                        d={ARROW_PATHS[idx].head}
                        fill={isSelected ? `url(#sdlc-grad-active-${idx})` : `url(#sdlc-grad-${idx})`}
                        filter={isSelected ? 'url(#sdlc-active-glow)' : undefined}
                        className={`transition-all duration-150 ${
                          isSelected ? 'stroke-white/90' : 'stroke-black/15'
                        }`}
                        strokeWidth={isSelected ? '2.5' : '1'}
                      />
                    </g>
                  );
                })}
              </g>

              {/* Text Labels on each arrow in SPANISH (Hardware-accelerated crisp SVG typography) */}
              {SDLC_STAGES.map((s, idx) => {
                const isSelected = selectedIdx === idx;
                const { x, y, line1, line2 } = s.labelPos;

                return (
                  <g
                    key={`label-${s.id}`}
                    onClick={() => setSelectedIdx(idx)}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="cursor-pointer select-none pointer-events-none"
                  >
                    {line2 ? (
                      <>
                        <text
                          x={x}
                          y={y - 8}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="font-sans font-black tracking-tight"
                          fill="#0f172a"
                          stroke="#ffffff"
                          strokeWidth={isSelected ? '1' : '0.7'}
                          paintOrder="stroke fill"
                          style={{ fontSize: '15px', fontWeight: 900 }}
                        >
                          {line1}
                        </text>
                        <text
                          x={x}
                          y={y + 11}
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="font-sans font-black tracking-tight"
                          fill="#0f172a"
                          stroke="#ffffff"
                          strokeWidth={isSelected ? '1' : '0.7'}
                          paintOrder="stroke fill"
                          style={{ fontSize: '15px', fontWeight: 900 }}
                        >
                          {line2}
                        </text>
                      </>
                    ) : (
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="font-sans font-black tracking-tight"
                        fill="#0f172a"
                        stroke="#ffffff"
                        strokeWidth={isSelected ? '1' : '0.7'}
                        paintOrder="stroke fill"
                        style={{ fontSize: '16px', fontWeight: 900 }}
                      >
                        {line1}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Center Text (As in reference image, strictly in SPANISH) */}
              <g className="select-none pointer-events-none text-center">
                {/* SDLC Title */}
                <text
                  x={CX}
                  y={CY - 28}
                  textAnchor="middle"
                  className="font-sans font-black tracking-wider fill-slate-900 dark:fill-zinc-100"
                  style={{ fontSize: '32px', fontWeight: 900 }}
                >
                  SDLC
                </text>

                {/* Line 2: Software/System Development in Spanish */}
                <text
                  x={CX}
                  y={CY + 6}
                  textAnchor="middle"
                  className="font-sans font-bold fill-slate-800 dark:fill-zinc-200"
                  style={{ fontSize: '13px', fontWeight: 700 }}
                >
                  Desarrollo de Software / Sistemas
                </text>

                {/* Line 3: Life Cycle - SDLC in Spanish */}
                <text
                  x={CX}
                  y={CY + 29}
                  textAnchor="middle"
                  className="font-sans font-semibold fill-slate-600 dark:fill-zinc-400"
                  style={{ fontSize: '12px', fontWeight: 600 }}
                >
                  Ciclo de Vida - SDLC
                </text>

                {/* Subtle currently active indicator pill in center */}
                <g transform={`translate(${CX - 65}, ${CY + 48})`}>
                  <rect
                    width="130"
                    height="20"
                    rx="10"
                    className="fill-slate-100 dark:fill-zinc-800 stroke-slate-200/80 dark:stroke-zinc-700/80"
                    strokeWidth="1"
                  />
                  <text
                    x="65"
                    y="11"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-sans font-medium text-[10px] fill-slate-600 dark:fill-zinc-300"
                  >
                    Fase activa: {activeStage.short || activeStage.name.split(' ')[0]}
                  </text>
                </g>
              </g>
            </svg>
          </div>

          {/* Quick arrow navigation pills */}
          <div className="w-full mt-4 flex flex-wrap items-center justify-center gap-1.5 px-2">
            {SDLC_STAGES.map((s, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={`pill-${s.id}`}
                  onClick={() => setSelectedIdx(idx)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? `${s.colors.bgLight} ${s.colors.bgDark} ${s.colors.borderLight} ${s.colors.borderDark} ${s.colors.badgeText} shadow-xs ring-1 ring-offset-1 ring-blue-500/30`
                      : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/40 text-slate-600 dark:text-zinc-400 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: s.colors.from }}
                  />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Description Panel for the Selected Stage */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div
            className={`p-5 rounded-2xl border transition-all ${activeStage.colors.bgLight} ${activeStage.colors.bgDark} ${activeStage.colors.borderLight} ${activeStage.colors.borderDark}`}
          >
            {/* Stage title & badges */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md text-white shadow-xs"
                    style={{ backgroundColor: activeStage.colors.from }}
                  >
                    FASE {activeStage.step}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-zinc-400">
                    {activeStage.englishName}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 leading-tight">
                  {activeStage.name}
                </h4>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg border border-slate-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors"
                  title="Etapa anterior"
                  aria-label="Etapa anterior"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg border border-slate-200/80 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors"
                  title="Etapa siguiente"
                  aria-label="Etapa siguiente"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick summary */}
            <p className="text-xs text-slate-700 dark:text-zinc-300 font-medium leading-relaxed mb-4 pb-3 border-b border-slate-200/70 dark:border-zinc-800/80">
              {activeStage.summary}
            </p>

            {/* Detailed meaning */}
            <div className="space-y-3.5 text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-zinc-100 block mb-1">
                  ¿Qué significa esta etapa?
                </span>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {activeStage.meaning}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 dark:text-zinc-100 block mb-1">
                  Objetivo Fundamental:
                </span>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {activeStage.objective}
                </p>
              </div>

              <div>
                <span className="font-bold text-slate-900 dark:text-zinc-100 block mb-1.5">
                  Actividades Clave:
                </span>
                <ul className="space-y-1 text-slate-600 dark:text-zinc-400">
                  {activeStage.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-1.5">
                      <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-bold text-slate-900 dark:text-zinc-100 block mb-1.5">
                  Entregables Típicos:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeStage.deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2 py-0.5 rounded-md bg-white/80 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 text-[11px] font-medium text-slate-700 dark:text-zinc-300 shadow-2xs"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Golden Rule Callout */}
            <div className="mt-4 p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-2.5 shadow-2xs">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-700 dark:text-zinc-300 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-zinc-100">Clave de Examen: </span>
                {activeStage.goldenRule}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Section: Mapping to the 6 Academic Phases (UTN Curriculum) */}
      {showAcademicDetails && (
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800/80 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                Comparativa: 6 Fases Académicas (UTN FRLP) vs 5 Etapas del Ciclo SDLC
              </h4>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
              Programa de Estudio
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                code: '01',
                title: 'Investigación Preliminar',
                corresp: 'Análisis de Requerimientos',
                desc: 'Factibilidad técnica, operativa y económica. Delimitación de alcance.'
              },
              {
                code: '02',
                title: 'Determinación de Requerimientos',
                corresp: 'Análisis de Requerimientos',
                desc: 'Elicitación exhaustiva, especificación y validación de RF y RNF.'
              },
              {
                code: '03',
                title: 'Diseño del Sistema',
                corresp: 'Diseño',
                desc: 'Modelado arquitectónico, estructura de datos, componentes e interfaces.'
              },
              {
                code: '04',
                title: 'Desarrollo del Software',
                corresp: 'Implementación',
                desc: 'Codificación disciplinada, construcción de módulos y pruebas unitarias.'
              },
              {
                code: '05',
                title: 'Prueba de Sistemas',
                corresp: 'Pruebas',
                desc: 'Verificación integral, validación con usuarios y pruebas de calidad (V&V).'
              },
              {
                code: '06',
                title: 'Implantación y Evaluación',
                corresp: 'Evolución',
                desc: 'Despliegue operativo, migración de datos, capacitación y balance post-entrega.'
              }
            ].map((phase, pIdx) => (
              <div
                key={pIdx}
                className="p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/40 text-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-[10px] text-blue-600 dark:text-blue-400">
                    FASE {phase.code}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100/70 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                    ➔ {phase.corresp}
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-zinc-100 mb-1">
                  {phase.title}
                </h5>
                <p className="text-slate-600 dark:text-zinc-400 text-[11px] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caption footer */}
      <figcaption className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800/60">
        {caption}
      </figcaption>
    </div>
  );
});
