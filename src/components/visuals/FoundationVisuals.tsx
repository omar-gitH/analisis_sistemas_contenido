import React, { useState } from 'react';
import {
  Search,
  Compass,
  ArrowRight,
  ArrowDown,
  Globe,
  Code,
  Users,
  Wrench,
  BookOpen,
  Layers,
  Package,
  Network,
  Workflow,
  GitBranch,
  Lightbulb,
  HelpCircle,
  Shapes,
} from 'lucide-react';
import {
  Shell,
  InfoBar,
  Arrow,
  SvgText,
  SymbolGallery,
  Tabs,
  type SymbolItem,
  STROKE,
  STROKE_SOFT,
  FILL_INK,
  FILL_BG,
  FILL_SOFT,
  TEXT,
  TEXT_MUTED,
  ACCENT_STROKE,
  ACCENT_FILL,
  ACCENT_BG,
} from './primitives';

type VisualProps = { caption: string };

/* ================================================================== */
/*  1. Análisis vs Diseño                                              */
/* ================================================================== */
export const AnalysisVsDesign: React.FC<VisualProps> = ({ caption }) => {
  const [side, setSide] = useState<'analisis' | 'diseno'>('analisis');
  const steps = [
    { id: 'problema', icon: HelpCircle, label: 'Realidad / Problema', sub: '¿Qué existe hoy?' },
    { id: 'modelo', icon: Lightbulb, label: 'Comprensión', sub: 'Qué se necesita' },
    { id: 'solucion', icon: Package, label: 'Solución', sub: 'Lo que se construye' },
  ];
  return (
    <Shell icon={Compass} title="Dicotomía del desarrollo: Análisis ➔ Diseño" badge="Descubrir vs Crear" caption={caption}>
      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex-1 flex flex-col items-center justify-center text-center p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/80">
              <s.icon className="w-6 h-6 text-slate-500 dark:text-zinc-400 mb-2" />
              <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{s.label}</span>
              <span className="text-[11px] text-slate-500 dark:text-zinc-400">{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <button
                onClick={() => setSide(i === 0 ? 'analisis' : 'diseno')}
                className={`md:w-40 flex md:flex-col items-center justify-center gap-2 p-3 rounded-2xl border-2 border-dashed transition-all ${
                  (i === 0 && side === 'analisis') || (i === 1 && side === 'diseno')
                    ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                    : 'border-slate-300 dark:border-zinc-700 bg-white/40 dark:bg-zinc-900/30 text-slate-500 dark:text-zinc-400 hover:border-blue-400'
                }`}
              >
                {i === 0 ? <Search className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                <span className="text-xs font-bold">{i === 0 ? 'ANÁLISIS' : 'DISEÑO'}</span>
                <ArrowRight className="w-4 h-4 hidden md:block" />
                <ArrowDown className="w-4 h-4 md:hidden" />
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
      <InfoBar title={side === 'analisis' ? 'Análisis = proceso del descubrimiento' : 'Diseño = arte del compromiso'}>
        {side === 'analisis'
          ? 'Parte de la realidad para comprender lo que existe y lo que se necesita. El analista investiga, no construye todavía.'
          : 'Parte de la comprensión lograda para hacer, crear y construir la solución adecuada, eligiendo entre alternativas y aceptando compromisos técnicos.'}
      </InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  2. Modelo de Sistema (TGS)                                          */
/* ================================================================== */
const SYSTEM_PARTS: Record<string, { title: string; desc: string }> = {
  entorno: { title: 'Entorno (ambiente)', desc: 'Todo lo que rodea al sistema y lo influye sin formar parte de él. Los sistemas abiertos intercambian materia, energía e información con su entorno.' },
  frontera: { title: 'Frontera / Límite', desc: 'Delimita qué pertenece al sistema y qué no. Definirla bien es el primer paso del análisis (alcance).' },
  entradas: { title: 'Entradas', desc: 'Insumos que ingresan desde el entorno: datos, recursos, energía, pedidos de usuarios.' },
  proceso: { title: 'Subsistemas en interacción', desc: 'Partes interdependientes que interactúan dinámicamente. El todo es más que la suma de sus partes: el comportamiento surge de las relaciones.' },
  salidas: { title: 'Salidas', desc: 'Resultados que el sistema entrega al entorno: información, productos, servicios.' },
  feedback: { title: 'Retroalimentación', desc: 'Parte de la salida vuelve como entrada para regular el sistema. Es la clave de la TGS: lo lineal es sustituido por lo circular (bucles causa-efecto).' },
};

export const SystemModel: React.FC<VisualProps> = ({ caption }) => {
  const [sel, setSel] = useState<string>('feedback');
  const on = (id: string) => sel === id;
  const st = (id: string) => (on(id) ? ACCENT_STROKE : STROKE);
  const tx = (id: string) => (on(id) ? ACCENT_FILL : TEXT);
  const click = (id: string) => ({ onClick: () => setSel(id), style: { cursor: 'pointer' } });

  return (
    <Shell icon={Network} title="Anatomía de un Sistema (Bertalanffy)" badge="Haz clic en cada parte" caption={caption}>
      <svg viewBox="0 0 640 300" className="w-full h-auto max-w-3xl mx-auto" role="img" aria-label="Modelo de sistema con entradas, proceso, salidas y retroalimentación">
        {/* Entorno */}
        <g {...click('entorno')}>
          <rect x="8" y="8" width="624" height="284" rx="24" className={`${st('entorno')} ${on('entorno') ? ACCENT_BG : 'fill-transparent'}`} strokeWidth="1.5" strokeDasharray="6 5" />
          <SvgText x={24} y={28} anchor="start" size={11} weight={700} className={tx('entorno')}>ENTORNO</SvgText>
        </g>
        {/* Frontera */}
        <g {...click('frontera')}>
          <rect x="180" y="52" width="280" height="170" rx="22" className={`${st('frontera')} ${FILL_BG}`} strokeWidth={on('frontera') ? 3 : 2} />
          <SvgText x={320} y={68} size={10} weight={600} className={tx('frontera')}>Frontera del sistema</SvgText>
        </g>
        {/* Subsistemas */}
        <g {...click('proceso')}>
          <line x1="260" y1="115" x2="380" y2="115" className={st('proceso')} strokeWidth="1.5" />
          <line x1="260" y1="115" x2="320" y2="180" className={st('proceso')} strokeWidth="1.5" />
          <line x1="380" y1="115" x2="320" y2="180" className={st('proceso')} strokeWidth="1.5" />
          {[[260, 115, 'A'], [380, 115, 'B'], [320, 180, 'C']].map(([cx, cy, l]) => (
            <g key={l as string}>
              <circle cx={cx as number} cy={cy as number} r="22" className={`${st('proceso')} ${on('proceso') ? ACCENT_BG : FILL_SOFT}`} strokeWidth="1.5" />
              <SvgText x={cx as number} y={cy as number} size={10} weight={700} className={tx('proceso')}>{`Sub ${l}`}</SvgText>
            </g>
          ))}
        </g>
        {/* Entradas */}
        <g {...click('entradas')}>
          <rect x="30" y="110" width="120" height="50" fill="transparent" />
          <Arrow x1={40} y1={135} x2={178} y2={135} strokeClass={st('entradas')} fillClass={on('entradas') ? ACCENT_FILL : FILL_INK} width={2.5} />
          <SvgText x={100} y={120} size={11} weight={700} className={tx('entradas')}>Entradas</SvgText>
        </g>
        {/* Salidas */}
        <g {...click('salidas')}>
          <rect x="480" y="110" width="130" height="50" fill="transparent" />
          <Arrow x1={462} y1={135} x2={600} y2={135} strokeClass={st('salidas')} fillClass={on('salidas') ? ACCENT_FILL : FILL_INK} width={2.5} />
          <SvgText x={535} y={120} size={11} weight={700} className={tx('salidas')}>Salidas</SvgText>
        </g>
        {/* Retroalimentación */}
        <g {...click('feedback')}>
          <path d="M 560 145 C 560 290, 80 290, 80 160" fill="none" className={st('feedback')} strokeWidth={on('feedback') ? 3 : 2} strokeDasharray="7 5" />
          <Arrow x1={80} y1={170} x2={80} y2={146} strokeClass={st('feedback')} fillClass={on('feedback') ? ACCENT_FILL : FILL_INK} width={on('feedback') ? 3 : 2} />
          <SvgText x={320} y={262} size={11} weight={700} className={tx('feedback')}>Retroalimentación (bucle circular)</SvgText>
        </g>
      </svg>

      <div className="flex flex-wrap justify-center gap-1.5 mt-3">
        {Object.entries(SYSTEM_PARTS).map(([id, p]) => (
          <button
            key={id}
            onClick={() => setSel(id)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
              sel === id ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
      <InfoBar title={SYSTEM_PARTS[sel].title}>{SYSTEM_PARTS[sel].desc}</InfoBar>

      {/* Análisis vs Síntesis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {[
          { t: 'Análisis ➔ Conocemos', d: 'Descomponemos el todo en sus partes.', split: true },
          { t: 'Síntesis ➔ Comprendemos', d: 'Integramos las partes en el todo.', split: false },
        ].map((b) => (
          <div key={b.t} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/60">
            <svg viewBox="0 0 110 50" className="w-24 h-11 shrink-0" aria-hidden="true">
              {b.split ? (
                <>
                  <circle cx="18" cy="25" r="14" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.5" />
                  <Arrow x1={36} y1={25} x2={62} y2={25} />
                  <circle cx="78" cy="12" r="6" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="1.5" />
                  <circle cx="96" cy="25" r="6" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="1.5" />
                  <circle cx="78" cy="38" r="6" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <circle cx="12" cy="12" r="6" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.5" />
                  <circle cx="28" cy="25" r="6" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.5" />
                  <circle cx="12" cy="38" r="6" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.5" />
                  <Arrow x1={40} y1={25} x2={66} y2={25} />
                  <circle cx="88" cy="25" r="14" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="1.5" />
                </>
              )}
            </svg>
            <div>
              <div className="text-xs font-semibold text-slate-900 dark:text-zinc-100">{b.t}</div>
              <div className="text-[11px] text-slate-600 dark:text-zinc-400">{b.d}</div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
};

/* ================================================================== */
/*  3. Metodología (estática) vs Proceso (dinámico)                    */
/* ================================================================== */
const METHOD_PARTS = [
  { id: 'metodo', icon: Workflow, name: 'Método', q: '¿Qué pasos sigo?', d: 'Forma de hacer algo; procedimiento secuencial que se sigue.' },
  { id: 'tecnica', icon: Lightbulb, name: 'Técnica', q: '¿Cómo lo hago?', d: 'Conjunto de procedimientos y recursos; la mejor opción dentro de un contexto probado.' },
  { id: 'herramienta', icon: Wrench, name: 'Herramienta', q: '¿Con qué lo construyo?', d: 'Soportes, utilitarios y facilitadores instrumentales.' },
  { id: 'roles', icon: Users, name: 'Roles', q: '¿Quién lo hace?', d: 'Funciones que realizan las personas; sin ellas no existe producto posible.' },
];

export const MethodologyLayers: React.FC<VisualProps> = ({ caption }) => {
  const [sel, setSel] = useState(0);
  return (
    <Shell icon={Layers} title="Paradigma ➔ Metodología ➔ Proceso ➔ Producto" badge="Estático vs Dinámico" caption={caption}>
      <div className="rounded-2xl border-2 border-dashed border-slate-300 dark:border-zinc-700 p-3 sm:p-4 bg-slate-50/40 dark:bg-zinc-900/30">
        <div className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-zinc-500 mb-2">PARADIGMA · sistema estructurado de ideas</div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_auto] items-center gap-3">
          {/* Metodología */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#151518] p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">METODOLOGÍA</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">estática · la receta</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {METHOD_PARTS.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => setSel(i)}
                  className={`flex items-center gap-2 p-2 rounded-xl border text-left transition-all ${
                    sel === i 
                      ? 'border-blue-500/60 bg-blue-50/80 dark:bg-blue-950/40 shadow-xs' 
                      : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/60 dark:bg-zinc-900/50 hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <m.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>
                    <span className="block text-[11px] font-semibold text-slate-800 dark:text-zinc-200">{m.name}</span>
                    <span className="block text-[10px] text-slate-500 dark:text-zinc-400">{m.q}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex lg:flex-col items-center justify-center text-[10px] text-slate-500 dark:text-zinc-400 gap-1">
            <span className="font-medium">se ejecuta como</span>
            <ArrowRight className="w-5 h-5 hidden lg:block text-blue-500" />
            <ArrowDown className="w-5 h-5 lg:hidden text-blue-500" />
          </div>

          {/* Proceso */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#151518] p-3 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">PROCESO</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300">dinámico · cocinar</span>
            </div>
            <div className="relative">
              <div className="flex gap-1">
                {['Etapa 1', 'Etapa 2', 'Etapa 3'].map((e, i) => (
                  <div key={e} className="flex-1">
                    <div className={`h-2.5 rounded-full ${['bg-blue-300', 'bg-blue-500', 'bg-blue-700'][i]} dark:opacity-80`} />
                    <div className="text-[10px] text-center text-slate-500 dark:text-zinc-400 mt-1">{e}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-400 dark:text-zinc-500">
                <span>t₀</span>
                <div className="flex-1 border-t border-dashed border-slate-300 dark:border-zinc-700" />
                <span>tiempo ➔</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-zinc-400 mt-1">Instancia concreta dividida en subprocesos; cada etapa evalúa logros alcanzados.</p>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-blue-500 hidden lg:block" />

          {/* Producto */}
          <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-100 border border-transparent dark:border-zinc-700 shadow-xs">
            <Package className="w-6 h-6 mb-1 text-blue-400" />
            <span className="text-xs font-bold">PRODUCTO</span>
            <span className="text-[10px] opacity-70">lo que se crea</span>
          </div>
        </div>
      </div>
      <InfoBar title={METHOD_PARTS[sel].name}>{METHOD_PARTS[sel].d}</InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  4. Ingeniería de Sistemas vs Software                              */
/* ================================================================== */
export const SystemsVsSoftware: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={GitBranch} title="Dos disciplinas, dos focos" badge="Comprender vs Construir" caption={caption}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="p-4 rounded-2xl border border-sky-200/80 dark:border-sky-950 bg-sky-50/60 dark:bg-sky-950/20">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">Ingeniería de Sistemas</span>
        </div>
        <p className="text-xs text-slate-600 dark:text-zinc-400 mb-3">Foco: <b>comprender la realidad</b> a través de los sistemas de información.</p>
        <div className="flex flex-wrap gap-1.5">
          {['Interdisciplinaria', 'Aborda la complejidad', 'Modela la realidad', 'Integra ciencias'].map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 border border-sky-200 dark:border-sky-900/60 text-sky-700 dark:text-sky-300">{t}</span>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-2xl border border-indigo-200/80 dark:border-indigo-950 bg-indigo-50/60 dark:bg-indigo-950/20">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">Ingeniería de Software</span>
        </div>
        <p className="text-xs text-slate-600 dark:text-zinc-400 mb-2">Foco: <b>construir software de calidad</b> bajo restricciones.</p>
        <svg viewBox="0 0 200 80" className="w-full max-w-[220px] h-auto mx-auto" aria-hidden="true">
          <polygon points="100,10 30,70 170,70" className={`${STROKE} fill-indigo-100/70 dark:fill-indigo-950/50`} strokeWidth="1.5" strokeLinejoin="round" />
          <SvgText x={100} y={48} size={10} weight={700}>Producto</SvgText>
          <SvgText x={100} y={4} size={9} className={TEXT_MUTED}>Calidad</SvgText>
          <SvgText x={22} y={76} size={9} anchor="end" className={TEXT_MUTED}>Tiempo</SvgText>
          <SvgText x={178} y={76} size={9} anchor="start" className={TEXT_MUTED}>Costo</SvgText>
        </svg>
      </div>
    </div>
    <div className="mt-4 p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50">
      <div className="text-xs font-semibold text-slate-800 dark:text-zinc-200 mb-2">Principio común: el conocimiento final es mayor que el inicial</div>
      {[
        { l: 'Conocimiento inicial', w: '45%', c: 'bg-slate-400 dark:bg-zinc-600' },
        { l: 'Conocimiento final', w: '100%', c: 'bg-gradient-to-r from-slate-400 via-blue-500 to-blue-600' },
      ].map((b) => (
        <div key={b.l} className="flex items-center gap-3 mb-1.5">
          <span className="w-32 text-[11px] text-slate-500 dark:text-zinc-400 shrink-0">{b.l}</span>
          <div className="flex-1 h-3 rounded-full bg-slate-200 dark:bg-zinc-800 overflow-hidden">
            <div className={`h-full rounded-full ${b.c}`} style={{ width: b.w }} />
          </div>
        </div>
      ))}
      <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-1 text-right font-medium">+ conocimiento nuevo generado sobre el dominio</p>
    </div>
  </Shell>
);

/* ================================================================== */
/*  5. Analista vs Diseñador                                            */
/* ================================================================== */
export const AnalystDesigner: React.FC<VisualProps> = ({ caption }) => {
  const roles = [
    {
      icon: Search,
      name: 'Analista',
      motto: 'El investigador',
      color: 'sky',
      skills: ['Análisis y síntesis', 'Indagación continua', 'Comunicación oral y escrita', 'Empatía con el usuario', 'Trabajo en equipo'],
    },
    {
      icon: Compass,
      name: 'Diseñador',
      motto: 'El creador y constructor',
      color: 'indigo',
      skills: ['Base tecnológica sólida', 'Conoce plataformas', 'Traza planos y modelos', 'Evalúa alternativas', 'Elige la solución adecuada'],
    },
  ];
  return (
    <Shell icon={Users} title="Perfiles: quién descubre y quién construye" badge="Roles" caption={caption}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 items-center">
        {roles.map((r, i) => (
          <React.Fragment key={r.name}>
            <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#151518] shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${r.color === 'sky' ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400' : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'}`}>
                  <r.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{r.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-400">{r.motto}</div>
                </div>
              </div>
              <ul className="space-y-1">
                {r.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-zinc-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${r.color === 'sky' ? 'bg-sky-500' : 'bg-indigo-500'}`} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {i === 0 && (
              <div className="flex md:flex-col items-center justify-center gap-1 text-center px-2">
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 max-w-[90px]">Necesidad identificada</span>
                <ArrowRight className="w-5 h-5 text-blue-500 hidden md:block" />
                <ArrowDown className="w-5 h-5 text-blue-500 md:hidden" />
                <span className="text-[10px] text-slate-500 dark:text-zinc-400 max-w-[90px]">Solución técnica</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Shell>
  );
};

/* ================================================================== */
/*  6. Simbología UML de Actividades (símbolos dibujados)              */
/* ================================================================== */
const ACTIVITY_SYMBOLS: SymbolItem[] = [
  {
    name: 'Nodo inicial',
    tag: '●',
    desc: 'Círculo relleno sólido. Marca dónde comienza el flujo de la actividad. Tiene una sola salida.',
    symbol: (
      <>
        <circle cx="45" cy="32" r="11" className={FILL_INK} />
        <Arrow x1={58} y1={32} x2={100} y2={32} />
      </>
    ),
  },
  {
    name: 'Nodo final',
    tag: '◉',
    desc: 'Círculo con borde concéntrico exterior. Finaliza TODA la actividad, incluidos los flujos concurrentes.',
    symbol: (
      <>
        <Arrow x1={16} y1={32} x2={56} y2={32} />
        <circle cx="72" cy="32" r="13" className={`${STROKE} ${FILL_BG}`} strokeWidth="2" />
        <circle cx="72" cy="32" r="8" className={FILL_INK} />
      </>
    ),
  },
  {
    name: 'Fin de flujo',
    tag: '⊗',
    desc: 'Círculo con una "X". Termina sólo ese hilo de ejecución concurrente, sin detener el resto de la actividad.',
    symbol: (
      <>
        <Arrow x1={16} y1={32} x2={57} y2={32} />
        <circle cx="72" cy="32" r="12" className={`${STROKE} ${FILL_BG}`} strokeWidth="2" />
        <line x1="64" y1="24" x2="80" y2="40" className={STROKE} strokeWidth="2" />
        <line x1="80" y1="24" x2="64" y2="40" className={STROKE} strokeWidth="2" />
      </>
    ),
  },
  {
    name: 'Actividad / Acción',
    tag: 'Verbo + Objeto',
    desc: 'Rectángulo con esquinas redondeadas. La acción es atómica (indivisible) y se nombra con verbo + objeto, ej. "Validar pago".',
    symbol: (
      <>
        <rect x="14" y="14" width="92" height="36" rx="16" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
        <SvgText x={60} y={33} size={11}>Validar pago</SvgText>
      </>
    ),
  },
  {
    name: 'Decisión',
    tag: '◇ 1 ➔ N',
    desc: 'Rombo con UNA entrada y varias salidas, cada una con una condición de guarda entre corchetes, ej. [sí] / [no].',
    symbol: (
      <>
        <Arrow x1={8} y1={26} x2={44} y2={26} />
        <polygon points="60,12 74,26 60,40 46,26" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
        <Arrow x1={74} y1={26} x2={112} y2={26} />
        <Arrow x1={60} y1={40} x2={60} y2={62} />
        <SvgText x={93} y={17} size={9} className={TEXT_MUTED}>[sí]</SvgText>
        <SvgText x={78} y={54} size={9} className={TEXT_MUTED}>[no]</SvgText>
      </>
    ),
  },
  {
    name: 'Merge (fusión)',
    tag: '◇ N ➔ 1',
    desc: 'Mismo rombo, pero con VARIAS entradas alternativas que se unen en una única salida. No espera: deja pasar el primer flujo que llega.',
    symbol: (
      <>
        <Arrow x1={14} y1={8} x2={50} y2={24} />
        <Arrow x1={14} y1={56} x2={50} y2={40} />
        <polygon points="60,18 74,32 60,46 46,32" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
        <Arrow x1={74} y1={32} x2={110} y2={32} />
      </>
    ),
  },
  {
    name: 'Fork (bifurcación)',
    tag: '▬ 1 ➔ N',
    desc: 'Barra gruesa que divide un flujo en varios flujos CONCURRENTES (paralelos) que se ejecutan al mismo tiempo.',
    symbol: (
      <>
        <Arrow x1={60} y1={2} x2={60} y2={22} />
        <rect x="22" y="23" width="76" height="6" rx="2" className={FILL_INK} />
        <Arrow x1={32} y1={30} x2={32} y2={60} />
        <Arrow x1={60} y1={30} x2={60} y2={60} />
        <Arrow x1={88} y1={30} x2={88} y2={60} />
      </>
    ),
  },
  {
    name: 'Join (sincronización)',
    tag: '▬ N ➔ 1',
    desc: 'Barra gruesa que ESPERA a que lleguen todos los flujos paralelos antes de continuar. Actúa como barrera de sincronización.',
    symbol: (
      <>
        <Arrow x1={32} y1={4} x2={32} y2={33} />
        <Arrow x1={60} y1={4} x2={60} y2={33} />
        <Arrow x1={88} y1={4} x2={88} y2={33} />
        <rect x="22" y="34" width="76" height="6" rx="2" className={FILL_INK} />
        <Arrow x1={60} y1={41} x2={60} y2={62} />
      </>
    ),
  },
  {
    name: 'Conector',
    tag: 'Ⓐ ➔ Ⓐ',
    desc: 'Círculo pequeño con una letra. Enlaza dos partes de un diagrama extenso sin cruzar líneas: el flujo sale por "A" y continúa en el otro "A".',
    symbol: (
      <>
        <Arrow x1={6} y1={32} x2={30} y2={32} />
        <circle cx="40" cy="32" r="10" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
        <SvgText x={40} y={33} size={11} weight={700}>A</SvgText>
        <line x1="58" y1="20" x2="62" y2="44" className={STROKE_SOFT} strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="80" cy="32" r="10" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
        <SvgText x={80} y={33} size={11} weight={700}>A</SvgText>
        <Arrow x1={90} y1={32} x2={114} y2={32} />
      </>
    ),
  },
  {
    name: 'Objeto (artefacto)',
    tag: '▭ sustantivo',
    desc: 'Rectángulo de esquinas rectas con un sustantivo. Representa datos o insumos que viajan por el flujo (ej. una Factura).',
    symbol: (
      <>
        <rect x="26" y="16" width="68" height="32" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.8" />
        <SvgText x={60} y={33} size={11} weight={600}>Factura</SvgText>
      </>
    ),
  },
  {
    name: 'Swimlanes (carriles)',
    tag: '║ responsables',
    desc: 'Columnas o filas que asignan cada actividad a un actor, área o subsistema responsable.',
    symbol: (
      <>
        <rect x="8" y="4" width="104" height="56" rx="4" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
        <line x1="60" y1="4" x2="60" y2="60" className={STROKE} strokeWidth="1.5" />
        <line x1="8" y1="16" x2="112" y2="16" className={STROKE} strokeWidth="1" />
        <SvgText x={34} y={10.5} size={8} weight={700}>Cliente</SvgText>
        <SvgText x={86} y={10.5} size={8} weight={700}>Ventas</SvgText>
        <rect x="16" y="26" width="36" height="14" rx="6" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.2" />
        <rect x="68" y="40" width="36" height="14" rx="6" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.2" />
        <Arrow x1={52} y1={36} x2={68} y2={45} width={1.2} />
      </>
    ),
  },
  {
    name: 'Flujo de control',
    tag: '──➤',
    desc: 'Flecha continua que indica el orden en que se ejecutan las acciones (transición de una a la siguiente).',
    symbol: (
      <>
        <rect x="6" y="20" width="34" height="24" rx="10" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
        <Arrow x1={40} y1={32} x2={80} y2={32} width={2} />
        <rect x="80" y="20" width="34" height="24" rx="10" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
      </>
    ),
  },
];

export const ActivitySymbols: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Shapes} title="Simbología UML: Diagrama de Actividades" badge={`${ACTIVITY_SYMBOLS.length} símbolos`} caption={caption}>
    <SymbolGallery items={ACTIVITY_SYMBOLS} />
  </Shell>
);

/* ================================================================== */
/*  7. Ejemplo completo: Actividad vs Acción                            */
/* ================================================================== */
export const ActivityExample: React.FC<VisualProps> = ({ caption }) => {
  const [mode, setMode] = useState<'accion' | 'actividad'>('actividad');
  const act = mode === 'actividad';
  const actionCls = !act ? `${ACCENT_STROKE} ${ACCENT_BG}` : `${STROKE} ${FILL_BG}`;
  const Action = ({ x, y, w, label }: { x: number; y: number; w: number; label: string }) => (
    <g>
      <rect x={x} y={y - 18} width={w} height={36} rx={16} className={actionCls} strokeWidth={1.8} />
      <SvgText x={x + w / 2} y={y} size={11}>{label}</SvgText>
    </g>
  );
  return (
    <Shell icon={Workflow} title="Ejemplo: Actividad «Procesar Pedido»" badge="UML" caption={caption}>
      <Tabs tabs={['Ver la Actividad (no atómica)', 'Ver las Acciones (atómicas)']} active={act ? 0 : 1} onChange={(i) => setMode(i === 0 ? 'actividad' : 'accion')} />
      <div className="overflow-x-auto">
        <svg viewBox="0 0 700 240" className="w-full min-w-[560px] h-auto" role="img" aria-label="Diagrama de actividades de ejemplo">
          <rect x="6" y="6" width="688" height="228" rx="28" className={act ? `${ACCENT_STROKE} fill-blue-50/40 dark:fill-blue-950/20` : `${STROKE_SOFT} fill-transparent`} strokeWidth={act ? 2.5 : 1} strokeDasharray="8 5" />
          <SvgText x={28} y={24} anchor="start" size={11} weight={700} className={act ? ACCENT_FILL : TEXT_MUTED}>Actividad: Procesar Pedido</SvgText>

          <circle cx="36" cy="120" r="10" className={FILL_INK} />
          <Arrow x1={47} y1={120} x2={68} y2={120} />
          <Action x={68} y={120} w={112} label="Recibir pedido" />
          <Arrow x1={180} y1={120} x2={206} y2={120} />
          <polygon points="222,104 238,120 222,136 206,120" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
          {/* rama superior */}
          <path d="M 222 104 L 222 62 L 268 62" fill="none" className={STROKE} strokeWidth="1.5" />
          <Arrow x1={262} y1={62} x2={272} y2={62} />
          <SvgText x={238} y={52} size={9} className={TEXT_MUTED} anchor="start">[hay stock]</SvgText>
          <Action x={272} y={62} w={110} label="Emitir factura" />
          {/* rama inferior */}
          <path d="M 222 136 L 222 178 L 268 178" fill="none" className={STROKE} strokeWidth="1.5" />
          <Arrow x1={262} y1={178} x2={272} y2={178} />
          <SvgText x={238} y={196} size={9} className={TEXT_MUTED} anchor="start">[sin stock]</SvgText>
          <Action x={272} y={178} w={110} label="Notificar faltante" />
          {/* merge */}
          <path d="M 382 62 L 438 62 L 438 100" fill="none" className={STROKE} strokeWidth="1.5" />
          <Arrow x1={438} y1={94} x2={438} y2={104} />
          <path d="M 382 178 L 438 178 L 438 140" fill="none" className={STROKE} strokeWidth="1.5" />
          <Arrow x1={438} y1={146} x2={438} y2={136} />
          <polygon points="438,104 454,120 438,136 422,120" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" />
          <Arrow x1={454} y1={120} x2={480} y2={120} />
          <Action x={480} y={120} w={120} label="Enviar respuesta" />
          <Arrow x1={600} y1={120} x2={630} y2={120} />
          <circle cx="646" cy="120" r="13" className={`${STROKE} ${FILL_BG}`} strokeWidth="2" />
          <circle cx="646" cy="120" r="8" className={FILL_INK} />
        </svg>
      </div>
      <InfoBar title={act ? 'Actividad' : 'Acción'}>
        {act
          ? 'Ejecución NO atómica en curso: agrupa todo el flujo, produce un cambio de estado en el sistema o devuelve un valor. Puede descomponerse en acciones.'
          : 'Cada rectángulo redondeado es una acción: paso ATÓMICO e indivisible, nombrado con Verbo + Objeto ("Emitir factura"). No se descompone más.'}
      </InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  8. Simbología BPMN                                                  */
/* ================================================================== */
const Gateway = ({ mark }: { mark: React.ReactNode }) => (
  <>
    <polygon points="60,8 84,32 60,56 36,32" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" strokeLinejoin="round" />
    {mark}
  </>
);

const BPMN_GROUPS: { tab: string; items: SymbolItem[] }[] = [
  {
    tab: 'Eventos',
    items: [
      { name: 'Evento de inicio', tag: 'borde simple', desc: 'Círculo de borde fino. Indica dónde comienza el proceso.', symbol: <circle cx="60" cy="32" r="18" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" /> },
      {
        name: 'Evento intermedio', tag: 'borde doble', desc: 'Círculo de doble borde. Algo que ocurre durante el proceso (espera, mensaje, temporizador).',
        symbol: (<><circle cx="60" cy="32" r="18" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" /><circle cx="60" cy="32" r="14" fill="none" className={STROKE} strokeWidth="1.5" /></>),
      },
      { name: 'Evento final', tag: 'borde grueso', desc: 'Círculo de borde grueso. Indica dónde termina el proceso.', symbol: <circle cx="60" cy="32" r="17" className={`${STROKE} ${FILL_BG}`} strokeWidth="4.5" /> },
      {
        name: 'Temporal', tag: 'reloj', desc: 'Evento disparado por el paso del tiempo o una fecha (ej. "cada fin de mes").',
        symbol: (<><circle cx="60" cy="32" r="18" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" /><circle cx="60" cy="32" r="14" fill="none" className={STROKE} strokeWidth="1.5" /><circle cx="60" cy="32" r="9" fill="none" className={STROKE} strokeWidth="1.3" /><line x1="60" y1="32" x2="60" y2="25" className={STROKE} strokeWidth="1.5" /><line x1="60" y1="32" x2="65" y2="34" className={STROKE} strokeWidth="1.5" /></>),
      },
      {
        name: 'Mensaje', tag: 'sobre', desc: 'Evento disparado por la recepción (o envío) de un mensaje desde otro participante.',
        symbol: (<><circle cx="60" cy="32" r="18" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" /><rect x="50" y="25" width="20" height="14" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.3" /><polyline points="50,25 60,33 70,25" fill="none" className={STROKE} strokeWidth="1.3" /></>),
      },
      {
        name: 'Cancelación', tag: 'cruz', desc: 'Evento que cancela una transacción o subproceso en curso.',
        symbol: (<><circle cx="60" cy="32" r="17" className={`${STROKE} ${FILL_BG}`} strokeWidth="4" /><line x1="53" y1="25" x2="67" y2="39" className={STROKE} strokeWidth="3" /><line x1="67" y1="25" x2="53" y2="39" className={STROKE} strokeWidth="3" /></>),
      },
    ],
  },
  {
    tab: 'Tareas',
    items: [
      { name: 'Tarea', tag: 'atómica', desc: 'Rectángulo redondeado. Unidad de trabajo que no se descompone en el modelo.', symbol: (<><rect x="20" y="12" width="80" height="40" rx="9" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" /><SvgText x={60} y={32} size={11}>Tarea</SvgText></>) },
      {
        name: 'Subproceso', tag: '[+] compuesta', desc: 'Tarea compuesta: contiene su propio flujo interno. Se marca con un pequeño [+] en la base.',
        symbol: (<><rect x="20" y="10" width="80" height="44" rx="9" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" /><SvgText x={60} y={27} size={10}>Subproceso</SvgText><rect x="54" y="40" width="12" height="12" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.3" /><line x1="60" y1="42.5" x2="60" y2="49.5" className={STROKE} strokeWidth="1.3" /><line x1="56.5" y1="46" x2="63.5" y2="46" className={STROKE} strokeWidth="1.3" /></>),
      },
      {
        name: 'Tarea repetitiva', tag: '↻ bucle', desc: 'Se ejecuta repetidamente mientras se cumpla una condición. Marcador de flecha circular.',
        symbol: (<><rect x="20" y="10" width="80" height="44" rx="9" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" /><SvgText x={60} y={27} size={10}>Revisar ítem</SvgText><path d="M 55 46 A 5 5 0 1 0 60 41" fill="none" className={STROKE} strokeWidth="1.4" /><polyline points="57,38 60,41 57,44" fill="none" className={STROKE} strokeWidth="1.4" /></>),
      },
      {
        name: 'Tarea manual', tag: 'persona', desc: 'Realizada por una persona sin asistencia de un sistema informático.',
        symbol: (<><rect x="20" y="10" width="80" height="44" rx="9" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" /><circle cx="32" cy="20" r="3.5" fill="none" className={STROKE} strokeWidth="1.3" /><path d="M 26 31 Q 32 23 38 31" fill="none" className={STROKE} strokeWidth="1.3" /><SvgText x={64} y={34} size={10}>Firmar</SvgText></>),
      },
      {
        name: 'Tarea de servicio', tag: 'automatizada', desc: 'Ejecutada automáticamente por un sistema o servicio web, sin intervención humana.',
        symbol: (<><rect x="20" y="10" width="80" height="44" rx="9" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.8" /><circle cx="32" cy="22" r="5" fill="none" className={STROKE} strokeWidth="3" strokeDasharray="2.2 1.8" /><circle cx="32" cy="22" r="2" className={FILL_INK} /><SvgText x={64} y={34} size={10}>Enviar mail</SvgText></>),
      },
    ],
  },
  {
    tab: 'Compuertas',
    items: [
      { name: 'Exclusiva', tag: 'X · XOR', desc: 'Sólo UNA ruta se elige según la condición evaluada.', symbol: <Gateway mark={<><line x1="52" y1="24" x2="68" y2="40" className={STROKE} strokeWidth="3" /><line x1="68" y1="24" x2="52" y2="40" className={STROKE} strokeWidth="3" /></>} /> },
      { name: 'Paralela', tag: '+ · AND', desc: 'TODOS los caminos se activan a la vez (y, al unir, se espera a todos).', symbol: <Gateway mark={<><line x1="60" y1="21" x2="60" y2="43" className={STROKE} strokeWidth="3" /><line x1="49" y1="32" x2="71" y2="32" className={STROKE} strokeWidth="3" /></>} /> },
      { name: 'Inclusiva', tag: 'O · OR', desc: 'UNO o VARIOS caminos válidos pueden dispararse según las condiciones.', symbol: <Gateway mark={<circle cx="60" cy="32" r="9" fill="none" className={STROKE} strokeWidth="3" />} /> },
      { name: 'Compleja', tag: '* · lógica combinada', desc: 'Enrutamiento con lógica combinada que no puede expresarse con las anteriores.', symbol: <Gateway mark={<><line x1="60" y1="21" x2="60" y2="43" className={STROKE} strokeWidth="2.6" /><line x1="49" y1="32" x2="71" y2="32" className={STROKE} strokeWidth="2.6" /><line x1="52" y1="24" x2="68" y2="40" className={STROKE} strokeWidth="2.6" /><line x1="68" y1="24" x2="52" y2="40" className={STROKE} strokeWidth="2.6" /></>} /> },
    ],
  },
  {
    tab: 'Conexiones',
    items: [
      { name: 'Flujo de secuencia', tag: 'línea continua', desc: 'Orden de ejecución entre elementos DENTRO de un mismo pool.', symbol: <Arrow x1={12} y1={32} x2={108} y2={32} width={2} /> },
      {
        name: 'Flujo de mensaje', tag: 'línea de trazos', desc: 'Comunicación ENTRE participantes (pools) distintos. Inicia con un círculo y termina con punta hueca.',
        symbol: (<><circle cx="16" cy="32" r="4" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" /><Arrow x1={20} y1={32} x2={108} y2={32} head="triangle" dashed /></>),
      },
      { name: 'Asociación', tag: 'puntos', desc: 'Vincula artefactos (notas, datos) con elementos del flujo. No indica orden.', symbol: <Arrow x1={12} y1={32} x2={108} y2={32} head="none" dotted width={2} /> },
      { name: 'Asociación de datos', tag: 'puntos + flecha', desc: 'Indica que un objeto de datos es entrada o salida de una tarea.', symbol: <Arrow x1={12} y1={32} x2={108} y2={32} head="open" dotted width={2} /> },
    ],
  },
  {
    tab: 'Swimlanes y artefactos',
    items: [
      {
        name: 'Pool', tag: 'organización', desc: 'Representa un participante u organización independiente (ej. Empresa, Cliente, Banco).',
        symbol: (<><rect x="8" y="10" width="104" height="44" rx="3" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.6" /><line x1="22" y1="10" x2="22" y2="54" className={STROKE} strokeWidth="1.6" /><text x="15" y="32" fontSize="8" fontWeight="700" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90 15 32)" className={TEXT}>Empresa</text></>),
      },
      {
        name: 'Lanes', tag: 'roles internos', desc: 'Subdivisiones de un pool: departamentos o roles responsables dentro de la organización.',
        symbol: (<><rect x="8" y="6" width="104" height="52" rx="3" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.6" /><line x1="20" y1="6" x2="20" y2="58" className={STROKE} strokeWidth="1.6" /><line x1="20" y1="32" x2="112" y2="32" className={STROKE} strokeWidth="1.2" /><SvgText x={66} y={19} size={8} className={TEXT_MUTED}>Ventas</SvgText><SvgText x={66} y={45} size={8} className={TEXT_MUTED}>Depósito</SvgText></>),
      },
      {
        name: 'Objeto de datos', tag: 'documento', desc: 'Información que una tarea necesita o produce (ej. Orden de compra).',
        symbol: (<><path d="M 46 8 L 68 8 L 78 18 L 78 56 L 46 56 Z" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.6" strokeLinejoin="round" /><polyline points="68,8 68,18 78,18" fill="none" className={STROKE} strokeWidth="1.4" /></>),
      },
      {
        name: 'Anotación', tag: '[ texto', desc: 'Nota explicativa unida por una asociación punteada. Aclara sin alterar el flujo.',
        symbol: (<><polyline points="66,12 58,12 58,52 66,52" fill="none" className={STROKE} strokeWidth="1.6" /><SvgText x={64} y={32} size={9} anchor="start" className={TEXT_MUTED}>Nota…</SvgText><Arrow x1={20} y1={44} x2={57} y2={32} head="none" dotted /></>),
      },
    ],
  },
];

export const BpmnSymbols: React.FC<VisualProps> = ({ caption }) => {
  const [tab, setTab] = useState(0);
  return (
    <Shell icon={BookOpen} title="Simbología BPMN 2.0" badge="Business Process Model and Notation" caption={caption}>
      <Tabs tabs={BPMN_GROUPS.map((g) => g.tab)} active={tab} onChange={setTab} />
      <SymbolGallery key={tab} items={BPMN_GROUPS[tab].items} />
    </Shell>
  );
};
