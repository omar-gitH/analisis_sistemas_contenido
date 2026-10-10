import React, { useState } from 'react';
import { 
  GitFork, 
  RotateCw, 
  Play, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Split, 
  Info,
  Maximize2,
  Box,
  Activity,
  CheckSquare,
  FileSpreadsheet
} from 'lucide-react';
import * as FoundationVisuals from './visuals/FoundationVisuals';
import * as RequirementsVisuals from './visuals/RequirementsVisuals';
import { SdlcCycleDiagram } from './visuals/SdlcCycleDiagram';

interface DiagramProps {
  type: string;
  caption: string;
}

export const DiagramVisualizer: React.FC<DiagramProps> = React.memo(({ type, caption }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  if (type === 'sdlc') {
    return <SdlcCycleDiagram caption={caption} />;
  }

  if (type === 'deming') {
    const quadrants = [
      { id: 'plan', label: 'Planear (Plan)', sub: 'Identificar el problema y planificar la solución', color: 'from-blue-500/10 to-blue-500/5 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300' },
      { id: 'do', label: 'Hacer (Do)', sub: 'Ejecutar las acciones planificadas', color: 'from-blue-500/10 to-blue-500/5 border-blue-200 dark:border-blue-900 text-blue-700 dark:text-blue-300' },
      { id: 'check', label: 'Verificar (Check)', sub: 'Evaluar resultados con métricas objetivas', color: 'from-amber-500/10 to-amber-500/5 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-300' },
      { id: 'act', label: 'Actuar (Act)', sub: 'Estandarizar mejoras y corregir desvíos', color: 'from-purple-500/10 to-purple-500/5 border-purple-200 dark:border-purple-900 text-purple-700 dark:text-purple-300' },
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <RotateCw className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Ciclo de Deming (Rueda PDCA)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400">Mejora Continua</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto">
          {quadrants.map((q) => (
            <div 
              key={q.id}
              className={`p-4 rounded-xl border bg-gradient-to-br ${q.color} transition-all hover:scale-[1.01]`}
            >
              <div className="flex items-center gap-2 font-semibold text-sm mb-1">
                <span>{q.label}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {q.sub}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-4">{caption}</p>
      </div>
    );
  }

  if (type === 'interview_shapes') {
    const strategies = [
      {
        id: 'piramidal',
        title: 'Esquema Piramidal',
        flow: 'Pocas Cerradas ➔ Muchas Abiertas',
        target: 'Para entrevistados tímidos o con baja motivación inicial',
        shape: '△ Triángulo',
        desc: 'Comienza con preguntas cerradas fáciles y específicas para romper el hielo y dar seguridad psicológica. A medida que toma confianza, se despliegan preguntas abiertas profundas.'
      },
      {
        id: 'inverso',
        title: 'Esquema Piramidal Inverso',
        flow: 'Pocas Abiertas ➔ Muchas Cerradas',
        target: 'Para usuarios que tienden a divagar o dispersarse',
        shape: '▽ Triángulo Invertido',
        desc: 'Comienza con una pregunta abierta general para explorar el panorama y de inmediato acota la conversación con múltiples preguntas cerradas puntuales.'
      },
      {
        id: 'romboidal',
        title: 'Esquema Romboidal',
        flow: 'Cerradas ➔ Abiertas ➔ Cerradas',
        target: 'Para entrevistas completas estructuradas de alto impacto',
        shape: '◇ Rombo',
        desc: 'Apertura con preguntas cerradas breves, cuerpo central con preguntas abiertas exploratorias y cierre formal con preguntas cerradas de confirmación y acuerdos.'
      }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Split className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Estrategias de Estructura de Entrevistas</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">3 Arquetipos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {strategies.map((s, idx) => (
            <div 
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                activeTab === idx 
                  ? 'border-blue-500/70 bg-blue-50/60 dark:bg-blue-950/30 shadow-xs' 
                  : 'border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200/60 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                  {s.shape}
                </span>
                <span className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Click para ver</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-zinc-100 mb-1">{s.title}</h4>
              <div className="text-[11px] font-mono text-blue-700 dark:text-blue-400 mb-2 font-medium">
                {s.flow}
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed mb-2">
                {s.desc}
              </p>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 italic">
                Uso: {s.target}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  if (type === 'activity_elements') {
    const elements = [
      { name: 'Actividad', type: 'UML', symbol: 'Rectángulo redondeado', desc: 'Ejecución no atómica en curso que produce cambios de estado o devuelve un valor.' },
      { name: 'Acción', type: 'UML', symbol: 'Verbo + Objeto', desc: 'Paso atómico e indivisible (ej: "Verificar Saldo").' },
      { name: 'Bifurcación / Decisión', type: 'UML / BPMN', symbol: 'Rombo con ramas de guarda', desc: 'Evalúa condición booleana para seleccionar un camino.' },
      { name: 'Fork (Bifurcación)', type: 'UML', symbol: 'Barra gruesa divisoria', desc: 'Inicia dos o más flujos concurrentes paralelos.' },
      { name: 'Join (Sincronización)', type: 'UML', symbol: 'Barra gruesa colectora', desc: 'Punto de espera que sincroniza todos los hilos paralelos antes de continuar.' },
      { name: 'Gateways BPMN', type: 'BPMN', symbol: 'Rombo con (+, X, O)', desc: 'Compuertas exclusivas (X), paralelas (+) o inclusivas (O).' },
      { name: 'Swimlanes (Carriles)', type: 'UML / BPMN', symbol: 'Columnas de área / rol', desc: 'Delimitan responsabilidades organizacionales entre actores.' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Simbología: Diagrama de Actividades</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">UML & BPMN</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {elements.map((el) => (
            <div 
              key={el.name}
              className="p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-semibold text-slate-900 dark:text-zinc-100">{el.name}</span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-zinc-400">{el.type}</span>
              </div>
              <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 mb-1.5">
                {el.symbol}
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {el.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  if (type === 'use_case') {
    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Split className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Modelo Interactivo de Casos de Uso (UML)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">include vs extend</span>
        </div>

        {/* Interactive Visual Canvas */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Actor Card */}
            <div 
              onClick={() => setSelectedElement('actor')}
              className={`cursor-pointer p-4 rounded-xl border text-center transition-all min-w-[140px] ${
                selectedElement === 'actor' 
                  ? 'border-violet-500 bg-violet-50/50 dark:bg-violet-950/30' 
                  : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
              }`}
            >
              <div className="w-10 h-10 mx-auto mb-2 rounded-full border-2 border-slate-400 dark:border-zinc-600 flex items-center justify-center font-mono text-xs font-bold text-slate-600 dark:text-zinc-300">
                옷
              </div>
              <div className="text-xs font-semibold text-slate-900 dark:text-zinc-100">Cliente / Usuario</div>
              <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-0.5">Actor Externo</div>
            </div>

            {/* Association arrow */}
            <div className="hidden md:flex flex-col items-center">
              <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">asociación</span>
              <div className="w-16 h-0.5 bg-slate-300 dark:bg-zinc-700"></div>
            </div>

            {/* Base Use Case */}
            <div 
              onClick={() => setSelectedElement('base')}
              className={`cursor-pointer p-4 rounded-full border-2 text-center transition-all min-w-[170px] ${
                selectedElement === 'base' 
                  ? 'border-violet-600 bg-violet-50 dark:bg-violet-950/40' 
                  : 'border-slate-400 dark:border-zinc-600 bg-white dark:bg-zinc-900'
              }`}
            >
              <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">Gestionar Venta</span>
              <div className="text-[10px] text-slate-500 dark:text-zinc-400">Caso de Uso Base</div>
            </div>

            {/* Stereotypes side */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              {/* Include box */}
              <div 
                onClick={() => setSelectedElement('include')}
                className={`cursor-pointer p-3 rounded-full border border-dashed transition-all text-center ${
                  selectedElement === 'include' 
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200' 
                    : 'border-blue-400/80 bg-white dark:bg-zinc-900'
                }`}
              >
                <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400">&lt;&lt;include&gt;&gt;</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-zinc-100">Validar Usuario</div>
                <div className="text-[10px] text-blue-700 dark:text-blue-400 font-medium">Obligatorio</div>
              </div>

              {/* Extend box */}
              <div 
                onClick={() => setSelectedElement('extend')}
                className={`cursor-pointer p-3 rounded-full border border-dashed transition-all text-center ${
                  selectedElement === 'extend' 
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200' 
                    : 'border-amber-400/80 bg-white dark:bg-zinc-900'
                }`}
              >
                <div className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400">&lt;&lt;extend&gt;&gt;</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-zinc-100">Aplicar Descuentos</div>
                <div className="text-[10px] text-amber-700 dark:text-amber-400 font-medium">Condicional / Opcional</div>
              </div>
            </div>
          </div>

          {/* Explanation panel */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800 text-xs">
            {selectedElement === 'actor' && (
              <p className="text-slate-700 dark:text-zinc-300">
                <span className="font-semibold text-slate-900 dark:text-zinc-100">Actor:</span> Es siempre externo al sistema. Explicitar su nombre es obligatorio. Puede ser una persona, otro sistema o un dispositivo/sensor. Entre actores la única relación admisible es la generalización.
              </p>
            )}
            {selectedElement === 'base' && (
              <p className="text-slate-700 dark:text-zinc-300">
                <span className="font-semibold text-slate-900 dark:text-zinc-100">Caso de Uso Base:</span> Representa una unidad funcional completa observable que genera valor para el actor.
              </p>
            )}
            {selectedElement === 'include' && (
              <p className="text-blue-800 dark:text-blue-300">
                <span className="font-semibold">Dependencia &lt;&lt;include&gt;&gt;:</span> Ejecución obligatoria. Se descompone para reutilizar comportamiento común. El caso base no finaliza con éxito sin la ejecución previa del caso incluido.
              </p>
            )}
            {selectedElement === 'extend' && (
              <p className="text-amber-800 dark:text-amber-300">
                <span className="font-semibold">Dependencia &lt;&lt;extend&gt;&gt;:</span> Ejecución condicional y opcional. Aísla comportamiento adicional en un punto de extensión específico. No forma parte del núcleo funcional obligatorio.
              </p>
            )}
            {!selectedElement && (
              <p className="text-slate-500 dark:text-zinc-400 italic text-center">
                Haz clic en el Actor, el Caso Base, &lt;&lt;include&gt;&gt; o &lt;&lt;extend&gt;&gt; para explorar su definición formal del documento.
              </p>
            )}
          </div>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  if (type === 'sysml_traceability') {
    const relations = [
      { name: 'verify (Verificación)', target: 'Casos de Prueba', desc: 'Especifica qué casos de prueba verifican que el requerimiento se cumple.' },
      { name: 'satisfy (Satisfacción)', target: 'Componentes de Diseño/Hardware', desc: 'Indica qué componente físico o módulo lógico cumple con el requerimiento.' },
      { name: 'refine (Refinamiento)', target: 'Casos de Uso / Actividades', desc: 'Añade detalle operacional utilizando un modelo de comportamiento.' },
      { name: 'realize (Realización)', target: 'Nivel Superior de Abstracción', desc: 'Concreta un requerimiento abstracto en una especificación ejecutable.' },
      { name: 'derive (Derivación)', target: 'Nuevos Requerimientos', desc: 'Origina sub-requerimientos técnicos derivados del análisis.' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">SysML: Red de Trazabilidad de Requerimientos</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Impacto del Cambio</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relations.map((rel) => (
            <div key={rel.name} className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40">
              <div className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 mb-1">
                &lt;&lt;{rel.name}&gt;&gt;
              </div>
              <div className="text-xs font-medium text-slate-800 dark:text-zinc-200 mb-1">
                Destino: <span className="font-semibold">{rel.target}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                {rel.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW 2ND SEMESTER DIAGRAM 1: CLASS DIAGRAM
  if (type === 'class_diagram') {
    const classTabs = [
      { id: 'structure', title: 'Estructura & Encapsulamiento' },
      { id: 'aggregation', title: 'Agregación vs Composición' },
      { id: 'association_class', title: 'Clase de Asociación' },
      { id: 'interfaces', title: 'Interfaces vs Abstractas' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Diagrama de Clases (Vista Estática)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">UML Estructural</span>
        </div>

        {/* Tab navigation */}
        <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 text-xs">
          {classTabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-2xs dark:bg-blue-600 dark:text-white'
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visual UML Class Card */}
            <div className="border border-slate-300 dark:border-zinc-700 rounded-xl overflow-hidden bg-white dark:bg-zinc-900 font-mono text-xs shadow-2xs">
              <div className="p-2.5 bg-slate-100 dark:bg-zinc-800 text-center font-bold text-slate-900 dark:text-zinc-100 border-b border-slate-300 dark:border-zinc-700">
                Libro
              </div>
              <div className="p-3 border-b border-slate-200 dark:border-zinc-800 space-y-1 text-[11px]">
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-red-500 font-bold">-</span> id: Integer &#123;frozen&#125;
                </div>
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-blue-500 font-bold">+</span> nombre: String
                </div>
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-blue-500 font-bold">+</span> autor [1..2]: String
                </div>
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-amber-500 font-bold">#</span> genero: String = novela
                </div>
              </div>
              <div className="p-3 space-y-1 text-[11px]">
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-blue-500 font-bold">+</span> nuevoLibro(in nombre: String)
                </div>
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-amber-500 font-bold">#</span> nombreLibro(): String
                </div>
                <div className="text-slate-800 dark:text-zinc-200">
                  <span className="text-blue-500 font-bold">+</span> hayStock(): Boolean &#123;isQuery&#125;
                </div>
              </div>
            </div>

            {/* Explanation of symbols */}
            <div className="space-y-3 text-xs text-slate-700 dark:text-zinc-300">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
                <span className="font-semibold text-slate-900 dark:text-zinc-100 block mb-1">Encapsulamiento & Visibilidad:</span>
                <p className="text-[11px] leading-relaxed">
                  <span className="text-red-500 font-bold font-mono">Privada (-)</span>: Solo accesible dentro de la clase.<br/>
                  <span className="text-amber-500 font-bold font-mono">Protegida (#)</span>: Accesible por la clase y sus subclases.<br/>
                  <span className="text-blue-500 font-bold font-mono">Pública (+)</span>: Accesible desde cualquier objeto.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
                <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">Propiedades de Operaciones:</span>
                <p className="text-[11px] leading-relaxed">
                  • <strong className="font-mono">isQuery</strong>: Función pura sin efectos laterales (no altera atributos).<br/>
                  • <strong className="font-mono">sequential</strong>: Solo una llamada por vez.<br/>
                  • <strong className="font-mono">guarded</strong>: Atiende una llamada con bloqueo/concurrencia controlada.<br/>
                  • <strong className="font-mono">concurrent</strong>: Múltiples llamadas simultáneas seguras.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-mono">◇</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">Agregación (Rombo Vacío)</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mb-2 leading-relaxed">
                Relación &quot;todo/parte&quot; débil. Las partes pueden existir independientemente del todo.
              </p>
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 font-mono text-[11px] text-slate-700 dark:text-zinc-300">
                Equipo ◇─────── Miembro
              </div>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-2">
                Si el Equipo se disuelve, los Miembros siguen existiendo en el sistema.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-mono">◆</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">Composición (Rombo Relleno)</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mb-2 leading-relaxed">
                Fuerte posesión y tiempos de vida coincidentes. Una parte pertenece solo a una composición.
              </p>
              <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 font-mono text-[11px] text-slate-700 dark:text-zinc-300">
                Automovil ◆─────── Motor
              </div>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-2">
                Cuando el todo desaparece, sus partes constitutivas también son destruidas.
              </p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="p-4 rounded-xl bg-slate-50/50 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 text-xs">
            <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
              Clase de Asociación (Multiplicidad *..* con Atributos Propios)
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
              Se modela cuando existe una asociación muchos a muchos (0..* a 0..*) y la relación en sí posee atributos que no pertenecen ni a una clase ni a la otra de forma aislada.
            </p>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex flex-col items-center">
              <div className="flex items-center justify-between w-full max-w-md font-mono text-xs">
                <div className="border border-slate-400 dark:border-zinc-600 p-2 rounded-lg text-slate-800 dark:text-zinc-200">Inquilino</div>
                <div className="flex-1 border-t-2 border-dashed border-slate-400 dark:border-zinc-600 mx-2 text-center text-[10px] text-slate-500 dark:text-zinc-400">
                  0..* ──────── 0..*
                </div>
                <div className="border border-slate-400 dark:border-zinc-600 p-2 rounded-lg text-slate-800 dark:text-zinc-200">Inmueble</div>
              </div>
              <div className="w-0.5 h-6 border-l-2 border-dashed border-slate-400 dark:border-zinc-600 my-1"></div>
              <div className="border-2 border-blue-500 p-3 rounded-lg bg-blue-50/40 dark:bg-blue-950/20 font-mono text-xs text-center">
                <div className="font-bold text-blue-800 dark:text-blue-300">Contrato</div>
                <div className="text-[11px] text-slate-600 dark:text-zinc-400 text-left mt-1">
                  - fechaInicio: DateTime<br/>
                  - fechaFin: DateTime<br/>
                  - montoMensual: int
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <div className="font-bold text-slate-900 dark:text-zinc-100 mb-1 flex items-center gap-1.5">
                <span className="font-mono text-sky-600 dark:text-sky-400">&lt;&lt;interfaz&gt;&gt;</span>
                <span>Interfaz UML</span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-2">
                Colección de operaciones que especifican un servicio.
              </p>
              <ul className="space-y-1 text-slate-700 dark:text-zinc-300">
                <li>• <strong>NO tiene atributos</strong> (las clases sí tienen).</li>
                <li>• No tiene implementación (solo signaturas).</li>
                <li>• Se representa con estereotipo o ícono de piruleta (lollipop).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <div className="font-bold text-slate-900 dark:text-zinc-100 mb-1 flex items-center gap-1.5">
                <span className="italic font-mono text-purple-600 dark:text-purple-400">Clase Abstracta</span>
              </div>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed mb-2">
                Representa un concepto abstracto en la jerarquía.
              </p>
              <ul className="space-y-1 text-slate-700 dark:text-zinc-300">
                <li>• <strong>SÍ puede contener atributos</strong> y métodos con código.</li>
                <li>• No puede instanciar objetos directamente.</li>
                <li>• Se representa con nombre en letra <em>cursiva</em>.</li>
              </ul>
            </div>
          </div>
        )}

        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW 2ND SEMESTER DIAGRAM 2: STATE MACHINE
  if (type === 'state_machine') {
    const states = [
      { id: 'inactivo', name: 'Inactivo', entry: 'desactivarSensores()', doAct: 'esperarSolicitud()', exit: 'registrarEncendido()' },
      { id: 'validando', name: 'Validando', entry: 'leerTarjeta()', doAct: 'verificarPinConcurrente()', exit: 'expulsarTarjeta()' },
      { id: 'procesando', name: 'Procesando', entry: 'bloquearSaldo()', doAct: 'transferirFondos()', exit: 'emitirComprobante()' },
      { id: 'imprimiendo', name: 'Imprimiendo', entry: 'alimentarPapel()', doAct: 'imprimirTicket()', exit: 'cortarTicket()' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Máquina de Estados (Modelado Dinámico)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Clase Individual</span>
        </div>

        {/* State Machine Canvas */}
        <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 mb-4">
          <div className="flex flex-wrap items-center justify-center gap-4 py-2">
            {/* Initial State */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400" title="Estado Inicial"></div>
              <span className="text-slate-400 dark:text-zinc-500 font-mono text-xs">──➔</span>
            </div>

            {/* States */}
            {states.map((st, idx) => (
              <div key={st.id} className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`p-3 rounded-xl border-2 text-left transition-all min-w-[120px] ${
                    activeTab === idx
                      ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs'
                      : 'border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/80 hover:border-slate-400 dark:hover:border-zinc-600'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900 dark:text-zinc-100">{st.name}</div>
                  <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-1 font-mono">
                    entry / exit / do
                  </div>
                </button>
                {idx < states.length - 1 && (
                  <span className="text-slate-400 dark:text-zinc-500 font-mono text-xs hidden sm:inline">──➔</span>
                )}
              </div>
            ))}

            {/* Final State */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 dark:text-zinc-500 font-mono text-xs">──➔</span>
              <div className="w-5 h-5 rounded-full border-2 border-blue-600 dark:border-blue-400 flex items-center justify-center p-0.5" title="Estado Final">
                <div className="w-full h-full rounded-full bg-blue-600 dark:bg-blue-400"></div>
              </div>
            </div>
          </div>

          {/* Active State Detail Panel */}
          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800 text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-900 dark:text-slate-100">
                Inspección del Estado: <span className="text-blue-700 dark:text-blue-400">{states[activeTab].name}</span>
              </span>
              <span className="font-mono text-[11px] text-slate-500">Ciclo de Ejecución</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px]">
              <div className="p-2.5 rounded bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
                <span className="font-bold text-blue-800 dark:text-blue-300 block mb-0.5">entry / acción</span>
                {states[activeTab].entry}
              </div>
              <div className="p-2.5 rounded bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-900">
                <span className="font-bold text-sky-800 dark:text-sky-300 block mb-0.5">do / actividad</span>
                {states[activeTab].doAct}
              </div>
              <div className="p-2.5 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
                <span className="font-bold text-amber-800 dark:text-amber-300 block mb-0.5">exit / acción</span>
                {states[activeTab].exit}
              </div>
            </div>
          </div>
        </div>

        {/* Transition Formula Note */}
        <div className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 text-xs">
          <div className="font-semibold text-slate-900 dark:text-zinc-100 mb-1.5">
            Fórmula de Transición Canónica:
          </div>
          <div className="font-mono text-blue-700 dark:text-blue-400 bg-white dark:bg-[#121214] p-2.5 rounded-lg border border-slate-200/80 dark:border-zinc-800 text-xs">
            evento [condicionDeGuarda] / accion()
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
            <strong>Regla de Auto-transición:</strong> Cuando origen y destino coinciden, se ejecuta primero la acción de salida (<code className="font-mono">exit</code>), luego la acción propia de la transición, y por último la acción de entrada (<code className="font-mono">entry</code>).
          </p>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW 2ND SEMESTER DIAGRAM 3: INVEST & GIVEN-WHEN-THEN
  if (type === 'user_story_invest') {
    const investItems = [
      { letter: 'I', name: 'Independiente', desc: 'Puede desarrollarse y priorizarse en cualquier orden sin acoplamiento estrecho.' },
      { letter: 'N', name: 'Negociable', desc: 'No es un contrato inmutable; invita a la conversación constante entre cliente y equipo.' },
      { letter: 'V', name: 'Valiosa', desc: 'Aporta valor directo y tangible para el usuario o cliente del negocio.' },
      { letter: 'E', name: 'Estimable', desc: 'El equipo técnico tiene suficiente claridad para dimensionar su esfuerzo y duración.' },
      { letter: 'S', name: 'Small (Pequeña)', desc: 'Tamaño acotado para completarse dentro de una iteración (habitualmente 1 a 3 semanas).' },
      { letter: 'T', name: 'Testeable', desc: 'Cuenta con criterios de aceptación claros que permiten redactar una prueba objetiva.' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Historias de Usuario: Modelo INVEST & Criterios</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Agilidad Práctica</span>
        </div>

        {/* INVEST Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
          {investItems.map((item, idx) => (
            <button
              key={item.letter}
              onClick={() => setActiveTab(idx)}
              className={`p-3 rounded-xl border text-center transition-all ${
                activeTab === idx
                  ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 shadow-xs'
                  : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="text-lg font-bold font-mono text-amber-600 dark:text-amber-400">{item.letter}</div>
              <div className="text-[11px] font-semibold text-slate-900 dark:text-zinc-100 truncate">{item.name}</div>
            </button>
          ))}
        </div>

        <div className="p-3.5 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 mb-4 text-xs">
          <span className="font-bold text-amber-900 dark:text-amber-300">{investItems[activeTab].letter} - {investItems[activeTab].name}: </span>
          <span className="text-slate-700 dark:text-zinc-300">{investItems[activeTab].desc}</span>
        </div>

        {/* Format Given-When-Then Breakdown */}
        <div className="p-4 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/50 text-xs">
          <div className="font-bold text-slate-900 dark:text-slate-100 mb-2">
            Estructura de Criterio de Aceptación (Escenario):
          </div>
          <div className="space-y-1.5 font-mono text-[11px]">
            <div className="text-slate-700 dark:text-slate-300">
              <strong className="text-blue-600 dark:text-blue-400">Dada</strong> &lt;circunstancia contextual previa&gt;
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              <strong className="text-sky-600 dark:text-sky-400">Cuando</strong> &lt;evento o acción del usuario&gt;
            </div>
            <div className="text-slate-700 dark:text-slate-300">
              <strong className="text-purple-600 dark:text-purple-400">Entonces</strong> &lt;respuesta observable o consecuencia del sistema&gt;
            </div>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW 2ND SEMESTER DIAGRAM 4: USE CASE SPECIFICATION
  if (type === 'use_case_spec') {
    const specSections = [
      { id: 'id', title: '1. Identificación', desc: 'ID, Nombre, Paquete, Prioridad, Tipo (Concreto/Abstracto), Actor Principal y Secundarios.' },
      { id: 'dialog', title: '2. Sección Diálogo', desc: 'Escenario Principal (Camino Feliz) vs Escenarios Alternativos (4a) y de Excepción. Sintaxis: Paso - Sujeto - Verbo - Objeto.' },
      { id: 'resources', title: '3. Recursos & RNF', desc: 'Precondiciones (deben ser V para iniciar) y Post-condiciones (garantías finales). Reglas de negocio y cotas de tiempo.' },
      { id: 'mgmt', title: '4. Sección Gestión', desc: 'Control de versiones, autor, fecha y descripción de modificaciones.' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Plantilla de Especificación de Caso de Uso</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Evolución Textual</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {specSections.map((sec, idx) => (
            <button
              key={sec.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                activeTab === idx
                  ? 'border-violet-500 bg-violet-50/60 dark:bg-violet-950/30 shadow-xs'
                  : 'border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700'
              }`}
            >
              <div className="font-bold text-xs text-slate-900 dark:text-zinc-100 mb-1">{sec.title}</div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2">{sec.desc}</p>
            </button>
          ))}
        </div>

        {/* Golden Rule Callout */}
        <div className="p-3.5 rounded-xl bg-slate-100/70 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800 text-xs">
          <div className="font-semibold text-slate-900 dark:text-zinc-100 mb-1">
            Regla de Oro de Cátedra para Diálogos:
          </div>
          <div className="font-mono text-violet-700 dark:text-violet-400 bg-white dark:bg-zinc-900 p-2 rounded-lg border border-slate-200 dark:border-zinc-800 text-xs">
            &lt;PASO&gt; SUJETO + VERBO + OBJETO
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
            Ejemplo: <em>&quot;1. El Cliente inserta la tarjeta magnética en la ranura del cajero.&quot;</em> Si el sujeto que ejecuta es el caso de uso, denota que es el propio sistema quien realiza la acción automáticamente.
          </p>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW DIAGRAM: SEQUENCE DIAGRAM
  if (type === 'sequence_diagram') {
    const sequenceTabs = [
      { id: 'lifeline', title: '1. Línea de Vida y Foco' },
      { id: 'messages', title: '2. Tipos de Mensajes' },
      { id: 'fragments', title: '3. Fragmentos (alt, opt, loop)' }
    ];

    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Diagrama de Secuencia (UML)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Interacción Dinámica</span>
        </div>

        <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 text-xs">
          {sequenceTabs.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-2xs dark:bg-blue-600 dark:text-white'
                  : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 text-xs">
          {activeTab === 0 && (
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="border-2 border-slate-800 dark:border-zinc-400 p-2 rounded-lg text-center w-28 bg-white dark:bg-zinc-900">
                  <span className="underline font-mono font-bold text-slate-900 dark:text-zinc-100">:Objeto</span>
                </div>
                <div className="h-6 border-l-2 border-dashed border-slate-400 dark:border-zinc-600"></div>
                <div className="w-4 h-16 bg-blue-200 dark:bg-blue-900/50 border border-blue-500 rounded-sm" title="Foco de Control (Activación)"></div>
                <div className="h-6 border-l-2 border-dashed border-slate-400 dark:border-zinc-600"></div>
                <div className="text-xl font-bold text-slate-800 dark:text-zinc-200">X</div>
              </div>
              <div className="flex-1 space-y-2 mt-2 text-slate-700 dark:text-zinc-300">
                <p><strong>Línea de Vida (Lifeline):</strong> Representa la existencia de un participante a lo largo del tiempo. Se dibuja como una línea punteada vertical.</p>
                <p><strong>Foco de Control:</strong> Rectángulo superpuesto que indica el período durante el cual el participante está ejecutando una acción.</p>
                <p><strong>Destrucción (X):</strong> Indica que el objeto deja de existir en memoria tras cumplir su ciclo.</p>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="space-y-4 font-mono text-[11px]">
              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-200 dark:border-zinc-800">
                <div className="w-24 text-center text-slate-800 dark:text-zinc-200 font-bold border-b-2 border-slate-800 dark:border-zinc-400">
                  Sincrónico
                  <div className="float-right -mb-1.5 -mr-1">▶</div>
                </div>
                <div className="text-slate-600 dark:text-zinc-400 font-sans">El emisor espera respuesta. Punta de flecha rellena.</div>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-200 dark:border-zinc-800">
                <div className="w-24 text-center text-slate-800 dark:text-zinc-200 border-b-2 border-slate-800 dark:border-zinc-400">
                  Asincrónico
                  <div className="float-right -mb-1.5 -mr-1">▷</div>
                </div>
                <div className="text-slate-600 dark:text-zinc-400 font-sans">El emisor no bloquea ejecución. Punta abierta.</div>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-200 dark:border-zinc-800">
                <div className="w-24 text-center text-slate-800 dark:text-zinc-200 border-b-2 border-dashed border-slate-800 dark:border-zinc-400">
                  Respuesta
                  <div className="float-left -mb-1.5 -ml-1">◀</div>
                </div>
                <div className="text-slate-600 dark:text-zinc-400 font-sans">Retorno de un mensaje. Línea discontinua.</div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="space-y-3">
              <div className="border border-blue-400 dark:border-blue-700 p-3 rounded-xl bg-blue-50/30 dark:bg-blue-950/20 relative">
                <div className="absolute top-0 left-0 bg-blue-100 dark:bg-blue-900 px-2 rounded-br font-mono text-[10px] font-bold text-blue-900 dark:text-blue-200">alt</div>
                <div className="mt-4 font-mono text-[11px] space-y-1">
                  <div className="text-blue-800 dark:text-blue-300">[condición verdadera] ──➔</div>
                  <div className="border-t border-dashed border-blue-300 dark:border-blue-700 my-1"></div>
                  <div className="text-blue-800 dark:text-blue-300">[else] ──➔</div>
                </div>
                <p className="mt-2 text-[11px] text-slate-600 dark:text-zinc-400">Alternativa mutuamente excluyente (if/else).</p>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 border border-emerald-400 dark:border-emerald-700 p-3 rounded-xl bg-emerald-50/30 dark:bg-emerald-950/20 relative">
                  <div className="absolute top-0 left-0 bg-emerald-100 dark:bg-emerald-900 px-2 rounded-br font-mono text-[10px] font-bold text-emerald-900 dark:text-emerald-200">opt</div>
                  <p className="mt-5 text-[11px] text-slate-600 dark:text-zinc-400">Ejecución opcional (if simple).</p>
                </div>
                <div className="flex-1 border border-purple-400 dark:border-purple-700 p-3 rounded-xl bg-purple-50/30 dark:bg-purple-950/20 relative">
                  <div className="absolute top-0 left-0 bg-purple-100 dark:bg-purple-900 px-2 rounded-br font-mono text-[10px] font-bold text-purple-900 dark:text-purple-200">loop</div>
                  <p className="mt-5 text-[11px] text-slate-600 dark:text-zinc-400">Bucle mientras se cumpla guarda.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // NEW DIAGRAM: MER (Modelo Entidad Relación)
  if (type === 'entity_relationship') {
    return (
      <div className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-[#151518] p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-semibold text-slate-800 dark:text-zinc-200">Modelo Entidad Relación (MER)</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">Modelo Conceptual de Datos</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-2 text-xs font-mono w-full justify-center">
            {/* Entity A */}
            <div className="flex flex-col items-center gap-1">
              <div className="border-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-6 py-3 font-bold text-slate-900 dark:text-zinc-100 rounded-lg">
                CLIENTE
              </div>
              <div className="flex gap-1 text-[10px] text-slate-600 dark:text-zinc-400">
                <span className="underline font-bold">id_cliente</span>, nombre
              </div>
            </div>

            {/* Relationship */}
            <div className="flex items-center">
              <div className="w-8 border-b-2 border-slate-400 dark:border-zinc-500 text-center text-[10px] font-bold pb-1 text-slate-700 dark:text-zinc-300">1</div>
              <div className="rotate-45 border-2 border-slate-600 dark:border-zinc-500 w-8 h-8 flex items-center justify-center bg-white dark:bg-zinc-900 m-2 rounded-xs">
                <span className="-rotate-45 text-[10px] font-bold text-slate-900 dark:text-zinc-100">Realiza</span>
              </div>
              <div className="w-8 border-b-2 border-slate-400 dark:border-zinc-500 text-center text-[10px] font-bold pb-1 text-slate-700 dark:text-zinc-300">N</div>
            </div>

            {/* Entity B */}
            <div className="flex flex-col items-center gap-1">
              <div className="border-2 border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-6 py-3 font-bold text-slate-900 dark:text-zinc-100 rounded-lg">
                PEDIDO
              </div>
              <div className="flex gap-1 text-[10px] text-slate-600 dark:text-zinc-400">
                <span className="underline font-bold">id_pedido</span>, fecha
              </div>
            </div>
          </div>
          
          <div className="mt-5 w-full border-t border-slate-200 dark:border-zinc-800 pt-3">
            <ul className="text-[11px] text-slate-700 dark:text-zinc-300 space-y-1.5">
              <li><span className="font-bold text-slate-900 dark:text-zinc-100">Entidad Fuerte:</span> Rectángulo simple. Existe por sí misma.</li>
              <li><span className="font-bold text-slate-900 dark:text-zinc-100">Relación:</span> Rombo. Conecta entidades. Indica cardinalidad (1:1, 1:N, N:M).</li>
              <li><span className="font-bold text-slate-900 dark:text-zinc-100">Atributo Clave (PK):</span> Texto subrayado indicando identificador único.</li>
            </ul>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-zinc-400 text-center mt-3">{caption}</p>
      </div>
    );
  }

  // --- Render dynamically if it matches our new visual components ---
  // Foundation Visuals
  if (type === 'AnalysisVsDesign') return <FoundationVisuals.AnalysisVsDesign caption={caption} />;
  if (type === 'SystemModel') return <FoundationVisuals.SystemModel caption={caption} />;
  if (type === 'MethodologyLayers') return <FoundationVisuals.MethodologyLayers caption={caption} />;
  if (type === 'SystemsVsSoftware') return <FoundationVisuals.SystemsVsSoftware caption={caption} />;
  if (type === 'AnalystDesigner') return <FoundationVisuals.AnalystDesigner caption={caption} />;
  if (type === 'ActivitySymbols') return <FoundationVisuals.ActivitySymbols caption={caption} />;
  if (type === 'ActivityExample') return <FoundationVisuals.ActivityExample caption={caption} />;
  if (type === 'BpmnSymbols') return <FoundationVisuals.BpmnSymbols caption={caption} />;

  // Requirements Visuals
  if (type === 'StakeholderMap') return <RequirementsVisuals.StakeholderMap caption={caption} />;
  if (type === 'RfRnfSmart') return <RequirementsVisuals.RfRnfSmart caption={caption} />;
  if (type === 'ElicitationIceberg') return <RequirementsVisuals.ElicitationIceberg caption={caption} />;
  if (type === 'ErrorCostCurve') return <RequirementsVisuals.ErrorCostCurve caption={caption} />;
  if (type === 'ElicitationTechniques') return <RequirementsVisuals.ElicitationTechniques caption={caption} />;
  if (type === 'JadSession') return <RequirementsVisuals.JadSession caption={caption} />;
  if (type === 'KanbanBoard') return <RequirementsVisuals.KanbanBoard caption={caption} />;
  if (type === 'AgileValues') return <RequirementsVisuals.AgileValues caption={caption} />;
  if (type === 'SrsFunctions') return <RequirementsVisuals.SrsFunctions caption={caption} />;
  if (type === 'ModelVsText') return <RequirementsVisuals.ModelVsText caption={caption} />;
  if (type === 'SrsAudiences') return <RequirementsVisuals.SrsAudiences caption={caption} />;
  if (type === 'TraceabilityChain') return <RequirementsVisuals.TraceabilityChain caption={caption} />;
  if (type === 'FurpsPlus') return <RequirementsVisuals.FurpsPlus caption={caption} />;

  return (
    <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm my-6 border border-red-200 dark:border-red-900/50">
      Error: Visualizador para el tipo de diagrama <code>{type}</code> no encontrado.
    </div>
  );
});
