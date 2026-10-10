import React, { useMemo, useState } from 'react';
import {
  Users,
  Target,
  CheckCircle2,
  XCircle,
  TrendingUp,
  MessageSquare,
  Brain,
  Cpu,
  Mic,
  Monitor,
  Boxes,
  Eye,
  FileText,
  ClipboardList,
  LayoutGrid,
  Scale,
  FileCheck,
  Handshake,
  DollarSign,
  CalendarDays,
  ShieldCheck,
  GitPullRequest,
  User,
  Code,
  FlaskConical,
  Briefcase,
  Server,
  Headphones,
  Gavel,
  Building2,
  Landmark,
  GitMerge,
  RotateCcw,
  Zap,
  Puzzle,
  Waves,
  Search,
  ArrowRight,
} from 'lucide-react';
import {
  Shell,
  InfoBar,
  Arrow,
  SvgText,
  Tabs,
  STROKE,
  STROKE_SOFT,
  FILL_BG,
  FILL_SOFT,
  FILL_INK,
  TEXT,
  TEXT_MUTED,
  ACCENT_STROKE,
  ACCENT_FILL,
  ACCENT_BG,
} from './primitives';

type VisualProps = { caption: string };

/* ================================================================== */
/*  1. Mapa de Stakeholders + Usuario ➔ Sistema                         */
/* ================================================================== */
const RINGS = [
  { r: 128, label: 'Externos', who: ['Reguladores', 'Proveedores', 'Auditoría'], cls: 'fill-slate-100 dark:fill-zinc-800/40' },
  { r: 92, label: 'Negocio', who: ['Clientes', 'Directivos'], cls: 'fill-sky-50 dark:fill-sky-950/40' },
  { r: 56, label: 'Directos', who: ['Usuarios finales', 'Operadores'], cls: 'fill-blue-100 dark:fill-blue-900/40' },
];

export const StakeholderMap: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Users} title="Stakeholders: quién gana o pierde con el sistema" badge="Partes interesadas" caption={caption}>
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-5 items-center">
      <svg viewBox="0 0 300 300" className="w-full max-w-[320px] h-auto mx-auto" role="img" aria-label="Círculos concéntricos de stakeholders">
        {RINGS.map((ring) => (
          <circle key={ring.r} cx="150" cy="150" r={ring.r + 14} className={`${ring.cls} ${STROKE_SOFT}`} strokeWidth="1.2" />
        ))}
        <circle cx="150" cy="150" r="30" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="2" />
        <SvgText x={150} y={150} size={11} weight={700} className={ACCENT_FILL}>Sistema</SvgText>
        <SvgText x={150} y={96} size={9} weight={600}>Usuarios · Operadores</SvgText>
        <SvgText x={150} y={60} size={9} weight={600}>Clientes · Directivos</SvgText>
        <SvgText x={150} y={24} size={9} weight={600}>Reguladores · Proveedores</SvgText>
        <SvgText x={150} y={205} size={8} className={TEXT_MUTED}>impacto directo</SvgText>
        <SvgText x={150} y={241} size={8} className={TEXT_MUTED}>interés de negocio</SvgText>
        <SvgText x={150} y={277} size={8} className={TEXT_MUTED}>influencia externa</SvgText>
      </svg>

      <div className="space-y-3">
        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">Del lenguaje del usuario a la especificación técnica</div>
        <div className="p-3 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20">
          <div className="text-[10px] font-bold tracking-wider text-amber-700 dark:text-amber-400 mb-1">REQUERIMIENTO DEL USUARIO</div>
          <p className="text-xs text-slate-700 dark:text-slate-300 italic">“Necesito saber qué productos se están por acabar.”</p>
        </div>
        <div className="flex justify-center text-blue-500"><ArrowRight className="w-5 h-5 rotate-90" /></div>
        <div className="p-3 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20">
          <div className="text-[10px] font-bold tracking-wider text-blue-700 dark:text-blue-400 mb-1">REQUERIMIENTO DEL SISTEMA (SRS)</div>
          <p className="text-xs text-slate-700 dark:text-slate-300 font-mono">El sistema debe emitir diariamente un listado de productos con stock inferior al mínimo, ordenado por categoría.</p>
        </div>
      </div>
    </div>
  </Shell>
);

/* ================================================================== */
/*  2. RF vs RNF + SMART                                                */
/* ================================================================== */
const SMART = [
  { l: 'S', n: 'Específico', d: 'Sin ambigüedad: dice exactamente qué operación y en qué condiciones.', bad: '“rápido”', good: '“consultas de stock”' },
  { l: 'M', n: 'Medible', d: 'Tiene una métrica objetiva para comprobar si se cumple.', bad: 'sin número', good: '“< 1,5 segundos”' },
  { l: 'A', n: 'Alcanzable', d: 'Técnicamente factible con la tecnología disponible.', bad: '“instantáneo (0 ms)”', good: '1,5 s es factible' },
  { l: 'R', n: 'Realizable', d: 'Se puede lograr con los recursos, presupuesto y plazos del proyecto.', bad: 'sin contexto', good: '“bajo 500 usuarios concurrentes”' },
  { l: 'T', n: 'Rastreable', d: 'Puede seguirse desde su origen hasta el diseño, código y pruebas.', bad: 'sin ID', good: '“RNF-07 ➔ TC-21”' },
];

export const RfRnfSmart: React.FC<VisualProps> = ({ caption }) => {
  const [letter, setLetter] = useState(1);
  const [smartOn, setSmartOn] = useState(true);
  const rnfTags = ['Rendimiento', 'Seguridad', 'Usabilidad', 'Fiabilidad', 'Portabilidad', 'Normativas'];
  return (
    <Shell icon={Target} title="RF = el QUÉ · RNF = el CÓMO (y sus límites)" badge="Criterios SMART" caption={caption}>
      <svg viewBox="0 0 640 210" className="w-full h-auto max-w-3xl mx-auto" role="img" aria-label="Caja de sistema con RF como transformación y RNF como restricciones">
        <rect x="150" y="14" width="340" height="182" rx="26" className={`${STROKE_SOFT} fill-amber-50/50 dark:fill-amber-950/10`} strokeWidth="1.5" strokeDasharray="6 5" />
        <SvgText x={320} y={30} size={10} weight={700} className="fill-amber-700 dark:fill-amber-400">RNF · restricciones y cualidades que condicionan al sistema</SvgText>
        {rnfTags.map((t, i) => {
          const x = i < 3 ? 172 + i * 104 : 172 + (i - 3) * 104;
          const y = i < 3 ? 46 : 164;
          return (
            <g key={t}>
              <rect x={x} y={y} width="88" height="20" rx="10" className="fill-amber-100 dark:fill-amber-900/40 stroke-amber-300 dark:stroke-amber-800" strokeWidth="1" />
              <SvgText x={x + 44} y={y + 10.5} size={9} weight={600} className="fill-amber-800 dark:fill-amber-300">{t}</SvgText>
            </g>
          );
        })}
        <rect x="220" y="80" width="200" height="68" rx="18" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="2" />
        <SvgText x={320} y={104} size={12} weight={700} className={ACCENT_FILL}>SISTEMA</SvgText>
        <SvgText x={320} y={124} size={10}>RF: transforma entradas en salidas</SvgText>
        <Arrow x1={30} y1={114} x2={218} y2={114} width={2.2} />
        <SvgText x={80} y={100} size={11} weight={700}>Entradas</SvgText>
        <Arrow x1={422} y1={114} x2={610} y2={114} width={2.2} />
        <SvgText x={560} y={100} size={11} weight={700}>Salidas</SvgText>
      </svg>

      <div className="mt-5 flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">¿Cómo se redacta un RNF de calidad?</span>
        <Tabs tabs={['RNF ambiguo', 'RNF SMART']} active={smartOn ? 1 : 0} onChange={(i) => setSmartOn(i === 1)} />
      </div>
      <div className={`p-3.5 rounded-xl border text-sm font-mono transition-colors ${smartOn ? 'border-blue-300 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-950/20 text-slate-800 dark:text-slate-200' : 'border-rose-300 dark:border-rose-900 bg-rose-50/60 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300'}`}>
        {smartOn
          ? 'RNF-07: El tiempo de respuesta de las consultas de stock debe ser menor a 1,5 segundos bajo 500 usuarios concurrentes.'
          : '“El sistema debe ser rápido.”'}
      </div>
      <div className="grid grid-cols-5 gap-2 mt-3">
        {SMART.map((s, i) => (
          <button
            key={s.l}
            onClick={() => setLetter(i)}
            className={`flex flex-col items-center p-2 rounded-xl border transition-all ${
              letter === i 
                ? 'border-blue-500/60 bg-blue-50/80 dark:bg-blue-950/40 shadow-xs' 
                : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700'
            }`}
          >
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none">{s.l}</span>
            <span className="text-[10px] font-medium text-slate-600 dark:text-zinc-300 mt-1 text-center leading-tight">{s.n}</span>
            {smartOn ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-1" /> : <XCircle className="w-3.5 h-3.5 text-rose-500 mt-1" />}
          </button>
        ))}
      </div>
      <InfoBar title={`${SMART[letter].l} · ${SMART[letter].n}`}>
        {SMART[letter].d} <span className="text-slate-500 dark:text-zinc-400">Ambiguo: {SMART[letter].bad} ➔ SMART: {SMART[letter].good}.</span>
      </InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  3. Iceberg de problemas de elicitación                              */
/* ================================================================== */
const ICE = {
  tecnicos: { t: 'Problemas técnicos (lo visible)', items: ['Dominios intrínsecamente complejos', 'Requerimientos contradictorios', 'Fuentes de información dispersas'] },
  articulacion: { t: 'Articulación (del usuario)', items: ['No sabe expresar sus necesidades', 'Contradicciones propias', 'Temor a revelar ignorancia', 'Miedo a perder el puesto', 'Visión de túnel'] },
  comunicacion: { t: 'Comunicación', items: ['Jerga y vocabulario distinto', 'Conflictos entre departamentos', 'Gráficos técnicos incomprensibles', 'Conflictos personales o ideológicos'] },
  cognitivas: { t: 'Limitaciones cognitivas (del analista)', items: ['Desconoce el dominio', 'Supuestos no verificados', 'Simplificación excesiva', 'Sesgos y superposición de roles', 'Desmotivación del equipo'] },
};
type IceKey = keyof typeof ICE;

export const ElicitationIceberg: React.FC<VisualProps> = ({ caption }) => {
  const [sel, setSel] = useState<IceKey>('articulacion');
  const zone = (k: IceKey) => ({ onClick: () => setSel(k), style: { cursor: 'pointer' } });
  const lbl = (k: IceKey) => (sel === k ? ACCENT_FILL : TEXT);
  return (
    <Shell icon={Waves} title="El iceberg de la elicitación" badge="Lo social pesa más" caption={caption}>
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 items-center">
        <svg viewBox="0 0 360 300" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Iceberg: problemas técnicos visibles y problemas humanos sumergidos">
          <rect x="0" y="78" width="360" height="222" rx="18" className="fill-sky-100/70 dark:fill-sky-950/40" />
          <path d="M0 78 Q 30 70 60 78 T 120 78 T 180 78 T 240 78 T 300 78 T 360 78" fill="none" className="stroke-sky-400 dark:stroke-sky-600" strokeWidth="2" />
          <g {...zone('tecnicos')}>
            <polygon points="150,20 196,40 214,78 132,78" className={`${sel === 'tecnicos' ? ACCENT_BG : FILL_BG} ${STROKE}`} strokeWidth="1.5" strokeLinejoin="round" />
            <SvgText x={174} y={60} size={9} weight={700} className={lbl('tecnicos')}>Técnicos</SvgText>
          </g>
          <g {...zone('articulacion')}>
            <polygon points="132,78 214,78 270,140 92,140" className={`${sel === 'articulacion' ? ACCENT_BG : 'fill-white/80 dark:fill-zinc-800/80'} ${STROKE}`} strokeWidth="1.5" strokeLinejoin="round" />
            <SvgText x={180} y={110} size={10} weight={700} className={lbl('articulacion')}>Articulación</SvgText>
          </g>
          <g {...zone('comunicacion')}>
            <polygon points="92,140 270,140 300,206 60,206" className={`${sel === 'comunicacion' ? ACCENT_BG : 'fill-white/70 dark:fill-zinc-800/70'} ${STROKE}`} strokeWidth="1.5" strokeLinejoin="round" />
            <SvgText x={180} y={173} size={10} weight={700} className={lbl('comunicacion')}>Comunicación</SvgText>
          </g>
          <g {...zone('cognitivas')}>
            <polygon points="60,206 300,206 250,284 110,284" className={`${sel === 'cognitivas' ? ACCENT_BG : 'fill-white/60 dark:fill-zinc-800/60'} ${STROKE}`} strokeWidth="1.5" strokeLinejoin="round" />
            <SvgText x={180} y={245} size={10} weight={700} className={lbl('cognitivas')}>Limitaciones cognitivas</SvgText>
          </g>
          <SvgText x={20} y={68} anchor="start" size={9} className={TEXT_MUTED}>visible</SvgText>
          <SvgText x={20} y={96} anchor="start" size={9} className="fill-sky-700 dark:fill-sky-400">sumergido (humano / social)</SvgText>
        </svg>
        <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2 mb-2">
            {sel === 'tecnicos' ? <Cpu className="w-4 h-4 text-blue-600" /> : sel === 'comunicacion' ? <MessageSquare className="w-4 h-4 text-blue-600" /> : sel === 'cognitivas' ? <Brain className="w-4 h-4 text-blue-600" /> : <Mic className="w-4 h-4 text-blue-600" />}
            <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{ICE[sel].t}</span>
          </div>
          <ul className="space-y-1.5">
            {ICE[sel].items.map((i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                {i}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3">Haz clic en cada capa del iceberg.</p>
        </div>
      </div>
    </Shell>
  );
};

/* ================================================================== */
/*  4. Curva de costo de los errores                                    */
/* ================================================================== */
const COST = [
  { phase: 'Requerimientos', v: 1 },
  { phase: 'Diseño', v: 5 },
  { phase: 'Codificación', v: 10 },
  { phase: 'Pruebas', v: 40 },
  { phase: 'Mantenimiento', v: 100 },
];

export const ErrorCostCurve: React.FC<VisualProps> = ({ caption }) => {
  const [hover, setHover] = useState(0);
  const W = 600, H = 260, left = 50, bottom = 220, top = 20;
  const bw = 64;
  const gap = (W - left - 20 - bw * COST.length) / (COST.length - 1);
  const y = (v: number) => bottom - (v / 100) * (bottom - top);
  const cx = (i: number) => left + i * (bw + gap) + bw / 2;
  const curve = COST.map((c, i) => `${i === 0 ? 'M' : 'L'} ${cx(i)} ${y(c.v)}`).join(' ');
  return (
    <Shell icon={TrendingUp} title="Costo relativo de corregir un error de requerimientos" badge="Crecimiento exponencial" caption={caption}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto max-w-3xl mx-auto" role="img" aria-label="Gráfico de barras del costo de errores por fase">
        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line x1={left} x2={W - 10} y1={y(g)} y2={y(g)} className={STROKE_SOFT} strokeWidth="1" strokeDasharray={g ? '3 4' : undefined} />
            <SvgText x={left - 8} y={y(g)} anchor="end" size={9} className={TEXT_MUTED}>{`${g}x`}</SvgText>
          </g>
        ))}
        {COST.map((c, i) => {
          const x = left + i * (bw + gap);
          const active = hover === i;
          const h = Math.max(bottom - y(c.v), 3);
          return (
            <g key={c.phase} onMouseEnter={() => setHover(i)} onClick={() => setHover(i)} style={{ cursor: 'pointer' }}>
              <rect x={x} y={top} width={bw} height={bottom - top} fill="transparent" />
              <rect x={x} y={bottom - h} width={bw} height={h} rx="8" className={active ? 'fill-blue-600 dark:fill-blue-500' : 'fill-blue-200 dark:fill-blue-900/70'} />
              <SvgText x={x + bw / 2} y={bottom - h - 10} size={11} weight={700} className={active ? ACCENT_FILL : TEXT}>{`${c.v}x`}</SvgText>
              <SvgText x={x + bw / 2} y={bottom + 16} size={9.5} weight={active ? 700 : 500} className={active ? ACCENT_FILL : TEXT_MUTED}>{c.phase}</SvgText>
            </g>
          );
        })}
        <path d={curve} fill="none" className="stroke-rose-500" strokeWidth="2" strokeDasharray="5 4" />
      </svg>
      <InfoBar title={`Detectado en ${COST[hover].phase}`}>
        Corregirlo cuesta aproximadamente <b>{COST[hover].v} vez{COST[hover].v > 1 ? 'es' : ''}</b> lo que costaría en la fase de requerimientos.
        {hover >= 2 && ' Hay que rehacer documentación, diseño, código y pruebas ya construidos.'}
        <span className="block text-[10px] text-slate-500 mt-1">Valores relativos ilustrativos (estudios de Boehm). La idea clave: cuanto más tarde se detecta, más caro es.</span>
      </InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  5. Clasificación de técnicas de elicitación                        */
/* ================================================================== */
const TECHNIQUES = [
  { icon: ClipboardList, name: 'Tradicionales', ex: 'Encuestas · Cuestionarios · Entrevistas · Análisis de documentos · Muestreo', best: 'Hechos cuantitativos y documentación formal' },
  { icon: Users, name: 'Grupales', ex: 'Brainstorming · Focus groups', best: 'Generar ideas y consensos' },
  { icon: Monitor, name: 'Prototipos', ex: 'Mock-ups · Modelos ejecutables (a veces desechables)', best: 'Eliminar la ambigüedad verbal' },
  { icon: Boxes, name: 'Basadas en modelos', ex: 'Objetivos · Casos de uso · Escenarios', best: 'Estructurar la interacción' },
  { icon: Brain, name: 'Cognitivas', ex: 'Análisis de protocolo · Elicitación de expertos', best: 'Conocimiento tácito de especialistas' },
  { icon: Eye, name: 'Contextuales', ex: 'Observación etnográfica in situ · Análisis de conversación', best: 'Ver el trabajo REAL vs el prescrito' },
];

export const ElicitationTechniques: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Search} title="Mapa de técnicas de elicitación" badge="6 familias" caption={caption}>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {TECHNIQUES.map((t) => (
        <div key={t.name} className="group p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#151518] hover:border-blue-400/60 hover:-translate-y-0.5 transition-all shadow-2xs">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
              <t.icon className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">{t.name}</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400 leading-relaxed">{t.ex}</p>
          <p className="text-[11px] mt-2 text-blue-700 dark:text-blue-400 font-medium">Ideal para: {t.best}</p>
        </div>
      ))}
    </div>
  </Shell>
);

/* ================================================================== */
/*  6. Sesión JAD + Brainstorming                                       */
/* ================================================================== */
const SEATS = [
  { a: -90, l: 'Pizarra', s: 'ayuda visual', board: true },
  { a: -30, l: 'Usuario', s: '' },
  { a: 20, l: 'Usuario', s: '' },
  { a: 70, l: 'Directivo', s: '' },
  { a: 125, l: 'Analista', s: '' },
  { a: 165, l: 'Analista', s: '' },
  { a: 215, l: 'Facilitador', s: 'moderador neutral', lead: true },
];

export const JadSession: React.FC<VisualProps> = ({ caption }) => {
  const [tab, setTab] = useState(0);
  return (
    <Shell icon={Users} title="Técnicas colaborativas" badge="JAD (IBM, 1977) · Brainstorming" caption={caption}>
      <Tabs tabs={['Sesión JAD', 'Brainstorming']} active={tab} onChange={setTab} />
      {tab === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-4 items-center">
          <svg viewBox="0 0 320 280" className="w-full max-w-[340px] h-auto mx-auto" role="img" aria-label="Mesa de sesión JAD con participantes">
            <ellipse cx="160" cy="145" rx="88" ry="62" className={`${STROKE} ${FILL_SOFT}`} strokeWidth="1.8" />
            <SvgText x={160} y={138} size={12} weight={700}>Sesión JAD</SvgText>
            <SvgText x={160} y={155} size={9} className={TEXT_MUTED}>agenda · foco definido</SvgText>
            {SEATS.map((s, i) => {
              const rad = (s.a * Math.PI) / 180;
              const x = 160 + Math.cos(rad) * 124;
              const y = 145 + Math.sin(rad) * 98;
              if (s.board) {
                return (
                  <g key={i}>
                    <rect x={x - 46} y={y - 14} width="92" height="26" rx="5" className={`${ACCENT_STROKE} ${ACCENT_BG}`} strokeWidth="1.8" />
                    <SvgText x={x} y={y - 1} size={9} weight={700} className={ACCENT_FILL}>Pizarra · proyector</SvgText>
                  </g>
                );
              }
              return (
                <g key={i}>
                  <circle cx={x} cy={y - 6} r="9" className={`${s.lead ? `${ACCENT_STROKE} ${ACCENT_BG}` : `${STROKE} ${FILL_BG}`}`} strokeWidth="1.6" />
                  <path d={`M ${x - 13} ${y + 14} Q ${x} ${y - 2} ${x + 13} ${y + 14}`} className={`${s.lead ? `${ACCENT_STROKE} ${ACCENT_BG}` : `${STROKE} ${FILL_BG}`}`} strokeWidth="1.6" />
                  <SvgText x={x} y={y + 24} size={9} weight={600} className={s.lead ? ACCENT_FILL : TEXT}>{s.l}</SvgText>
                </g>
              );
            })}
          </svg>
          <div className="grid grid-cols-2 gap-2">
            {[
              { n: '1', t: 'Dinámica grupal', d: 'Colaboración guiada y compromiso compartido.' },
              { n: '2', t: 'Ayuda visual', d: 'Pizarras, diagramas y proyectores nivelan la comprensión.' },
              { n: '3', t: 'Proceso organizado', d: 'Agenda, moderador neutral y cronograma estricto.' },
              { n: '4', t: 'Foco definido', d: 'Sólo se trabaja sobre lo que se generará en la sesión.' },
            ].map((p) => (
              <div key={p.n} className="p-3 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">{p.n}</span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-zinc-100">{p.t}</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-zinc-400">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <svg viewBox="0 0 640 200" className="w-full h-auto max-w-3xl mx-auto" role="img" aria-label="Embudo de divergencia y convergencia de ideas">
            <path d="M 20 20 L 380 20 L 560 85 L 560 115 L 380 180 L 20 180 Z" className={`${STROKE_SOFT} fill-amber-50/70 dark:fill-amber-950/20`} strokeWidth="1.5" strokeLinejoin="round" />
            {Array.from({ length: 34 }).map((_, i) => {
              const x = 40 + ((i * 47) % 320);
              const yy = 34 + ((i * 29) % 132);
              return <circle key={i} cx={x} cy={yy} r="5" className="fill-amber-400/80 dark:fill-amber-500/70" />;
            })}
            {[[420, 70], [440, 130], [470, 100], [500, 92]].map(([x, yy], i) => (
              <circle key={i} cx={x} cy={yy} r="5" className="fill-amber-500" />
            ))}
            <circle cx="600" cy="100" r="16" className="fill-blue-600 dark:fill-blue-500" />
            <SvgText x={600} y={101} size={13} weight={700} className="fill-white">★</SvgText>
            <SvgText x={200} y={12} size={10} weight={700} className="fill-amber-700 dark:fill-amber-400">DIVERGENCIA · cantidad sin juzgar</SvgText>
            <SvgText x={470} y={40} size={10} weight={700} className={ACCENT_FILL}>CONVERGENCIA · evaluar</SvgText>
            <SvgText x={600} y={130} size={9} weight={600}>solución</SvgText>
          </svg>
          <InfoBar title="Principio cuantitativo">Primero se generan todas las ideas posibles sin criticarlas; cuantas más ideas, mayor la probabilidad de encontrar una brillante. Recién después se evalúan y filtran.</InfoBar>
        </div>
      )}
    </Shell>
  );
};

/* ================================================================== */
/*  7. Tablero Kanban: de HU a tareas                                   */
/* ================================================================== */
const COLS = ['Propuesta', 'En proceso', 'Hecha'];

export const KanbanBoard: React.FC<VisualProps> = ({ caption }) => {
  const initial = [
    { t: 'Diseñar formulario de alta', s: 2 },
    { t: 'Validar DNI duplicado', s: 1 },
    { t: 'Guardar socio en la BD', s: 1 },
    { t: 'Enviar mail de bienvenida', s: 0 },
    { t: 'Prueba de aceptación', s: 0 },
  ];
  const [tasks, setTasks] = useState(initial);
  const move = (i: number) => setTasks((ts) => ts.map((t, j) => (j === i ? { ...t, s: (t.s + 1) % 3 } : t)));
  const done = tasks.filter((t) => t.s === 2).length;
  return (
    <Shell icon={LayoutGrid} title="De la Historia de Usuario al tablero Kanban" badge="Clic en una tarea para avanzarla" caption={caption}>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-56 shrink-0 p-4 rounded-2xl border-2 border-blue-500/50 bg-blue-50/60 dark:bg-blue-950/20 rotate-[-1deg] shadow-xs">
          <div className="text-[10px] font-mono text-blue-700 dark:text-blue-300 mb-1">HU-012 · Prioridad alta</div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Alta de socio</div>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 italic">Yo como bibliotecario quiero registrar socios para poder prestarles libros.</p>
          <div className="mt-3 h-1.5 rounded-full bg-slate-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full bg-blue-600 transition-all" style={{ width: `${(done / tasks.length) * 100}%` }} />
          </div>
          <div className="text-[10px] text-slate-500 dark:text-zinc-400 mt-1">{done}/{tasks.length} tareas hechas</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-2">
          {COLS.map((c, ci) => (
            <div key={c} className="rounded-2xl bg-slate-100/80 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/80 p-2 min-h-[180px]">
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-[11px] font-bold text-slate-700 dark:text-zinc-300">{c}</span>
                <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-500">{tasks.filter((t) => t.s === ci).length}</span>
              </div>
              <div className="space-y-1.5">
                {tasks.map((t, i) =>
                  t.s === ci ? (
                    <button
                      key={t.t}
                      onClick={() => move(i)}
                      className={`w-full text-left p-2 rounded-xl text-[11px] border bg-white dark:bg-[#151518] shadow-2xs hover:-translate-y-0.5 transition-all ${ci === 2 ? 'border-emerald-300 dark:border-emerald-800 text-slate-500 line-through' : 'border-slate-200/80 dark:border-zinc-800 text-slate-800 dark:text-zinc-200'}`}
                    >
                      {t.t}
                    </button>
                  ) : null,
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
};

/* ================================================================== */
/*  8. Valores del Manifiesto Ágil + entregas incrementales            */
/* ================================================================== */
const VALUES = [
  ['Individuos e interacciones', 'procesos y herramientas'],
  ['Software funcionando', 'documentación extensiva'],
  ['Colaboración con el cliente', 'negociación contractual'],
  ['Respuesta ante el cambio', 'seguir un plan'],
];

export const AgileValues: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Scale} title="Manifiesto Ágil: lo de la izquierda pesa más" badge="4 valores" caption={caption}>
    <div className="space-y-2">
      {VALUES.map(([a, b]) => (
        <div key={a} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="text-right text-sm font-semibold text-slate-900 dark:text-zinc-100">{a}</div>
          <svg viewBox="0 0 90 36" className="w-20 h-8" aria-hidden="true">
            <polygon points="45,18 39,32 51,32" className={FILL_INK} />
            <line x1="8" y1="24" x2="82" y2="12" className={STROKE} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="10" cy="24" r="6" className="fill-blue-600 dark:fill-blue-500" />
            <circle cx="80" cy="12" r="4" className="fill-slate-300 dark:fill-zinc-600" />
          </svg>
          <div className="text-xs text-slate-500 dark:text-zinc-400">sobre {b}</div>
        </div>
      ))}
    </div>
    <div className="mt-5 text-xs font-semibold text-slate-800 dark:text-zinc-200 mb-2">Entrega de valor en el tiempo</div>
    <svg viewBox="0 0 640 110" className="w-full h-auto" role="img" aria-label="Comparación entre una entrega única y entregas frecuentes">
      <SvgText x={10} y={28} anchor="start" size={10} weight={700} className={TEXT_MUTED}>Cascada</SvgText>
      <line x1="90" y1="28" x2="620" y2="28" className={STROKE_SOFT} strokeWidth="6" strokeLinecap="round" />
      <circle cx="610" cy="28" r="9" className="fill-slate-500" />
      <SvgText x={560} y={10} size={9} className={TEXT_MUTED}>una entrega al final</SvgText>
      <SvgText x={10} y={80} anchor="start" size={10} weight={700} className={ACCENT_FILL}>Ágil</SvgText>
      <line x1="90" y1="80" x2="620" y2="80" className="stroke-blue-200 dark:stroke-blue-900" strokeWidth="6" strokeLinecap="round" />
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <circle cx={130 + i * 66} cy="80" r="8" className="fill-blue-600 dark:fill-blue-500" />
          <SvgText x={130 + i * 66} y={100} size={8} className={TEXT_MUTED}>{`v${i + 1}`}</SvgText>
        </g>
      ))}
      <SvgText x={360} y={62} size={9} className={ACCENT_FILL}>software funcionando cada 1–3 semanas</SvgText>
    </svg>
  </Shell>
);

/* ================================================================== */
/*  9. Las 6 funciones del SRS                                          */
/* ================================================================== */
const SRS_FN = [
  { icon: MessageSquare, t: 'Comunicación', d: 'Puente formal y unívoco entre el equipo técnico y las partes interesadas.' },
  { icon: Handshake, t: 'Contrato', d: 'Base contractual de mutuo acuerdo sobre lo que se desarrollará y entregará.' },
  { icon: DollarSign, t: 'Costos', d: 'Permite presupuestar, cotizar y estimar los recursos financieros.' },
  { icon: CalendarDays, t: 'Planificación', d: 'Determina cronogramas, hitos de entrega y asignación de personal.' },
  { icon: ShieldCheck, t: 'V&V', d: '¿Construimos el sistema correcto (validación) y de la forma correcta (verificación)?' },
  { icon: GitPullRequest, t: 'Gestión de cambios', d: 'Permite medir el impacto de cualquier modificación posterior.' },
];

export const SrsFunctions: React.FC<VisualProps> = ({ caption }) => {
  const [sel, setSel] = useState(0);
  const R = 118;
  return (
    <Shell icon={FileCheck} title="El SRS como núcleo del proyecto" badge="6 funciones" caption={caption}>
      <div className="relative mx-auto w-full max-w-[380px] aspect-square">
        <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {SRS_FN.map((_, i) => {
            const a = (i / SRS_FN.length) * Math.PI * 2 - Math.PI / 2;
            return <line key={i} x1="160" y1="160" x2={160 + Math.cos(a) * R} y2={160 + Math.sin(a) * R} className={sel === i ? ACCENT_STROKE : STROKE_SOFT} strokeWidth={sel === i ? 2.5 : 1.5} strokeDasharray={sel === i ? undefined : '4 4'} />;
          })}
          <path d="M 135 120 L 175 120 L 188 133 L 188 200 L 135 200 Z" className={`${STROKE} ${FILL_BG}`} strokeWidth="2" strokeLinejoin="round" />
          <polyline points="175,120 175,133 188,133" fill="none" className={STROKE} strokeWidth="1.6" />
          {[148, 160, 172, 184].map((yy) => <line key={yy} x1="144" x2="178" y1={yy} y2={yy} className={STROKE_SOFT} strokeWidth="2" strokeLinecap="round" />)}
          <SvgText x={161} y={214} size={11} weight={800} className={ACCENT_FILL}>SRS / ERS</SvgText>
        </svg>
        {SRS_FN.map((f, i) => {
          const a = (i / SRS_FN.length) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + (Math.cos(a) * R * 100) / 320;
          const top = 50 + (Math.sin(a) * R * 100) / 320;
          return (
            <button
              key={f.t}
              onClick={() => setSel(i)}
              style={{ left: `${left}%`, top: `${top}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 w-20 p-2 rounded-2xl border transition-all ${sel === i ? 'border-blue-500 bg-blue-600 text-white shadow-md scale-105' : 'border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 hover:border-blue-400'}`}
            >
              <f.icon className="w-4 h-4" />
              <span className="text-[10px] font-semibold leading-tight text-center">{f.t}</span>
            </button>
          );
        })}
      </div>
      <InfoBar title={SRS_FN[sel].t}>{SRS_FN[sel].d}</InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  10. Modelo vs Texto + redacción imperativa                          */
/* ================================================================== */
export const ModelVsText: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Puzzle} title="Modelo gráfico + Especificación textual = se complementan" badge="Lenguaje natural controlado" caption={caption}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-zinc-800">
      <div className="p-4 bg-sky-50/70 dark:bg-sky-950/20 md:border-r border-b md:border-b-0 border-slate-200/80 dark:border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <Boxes className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">MODELO</span>
        </div>
        <svg viewBox="0 0 220 70" className="w-full h-16" aria-hidden="true">
          <rect x="8" y="20" width="56" height="30" rx="12" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
          <Arrow x1={64} y1={35} x2={92} y2={35} />
          <polygon points="110,20 126,35 110,50 94,35" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
          <Arrow x1={126} y1={35} x2={154} y2={35} />
          <rect x="154" y="20" width="56" height="30" rx="12" className={`${STROKE} ${FILL_BG}`} strokeWidth="1.5" />
        </svg>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">✓ Potencia visual y síntesis · ✗ Puede omitir detalles sutiles</p>
      </div>
      <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/20">
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">SRS TEXTUAL</span>
        </div>
        <div className="space-y-1 font-mono text-[10px] text-slate-600 dark:text-slate-400 mb-2">
          <div>3.1 El sistema debe registrar…</div>
          <div className="pl-3">3.1.1 El sistema debe validar…</div>
          <div className="pl-3">3.1.2 El sistema debe notificar…</div>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-400">✓ Detalle exhaustivo y precisión legal · formato indentado</p>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div className="flex items-start gap-2 p-3 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/20">
        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
        <span className="text-xs text-rose-800 dark:text-rose-300 font-mono">“Sería bueno si el sistema tal vez pudiera mostrar los pedidos.”</span>
      </div>
      <div className="flex items-start gap-2 p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
        <span className="text-xs text-emerald-800 dark:text-emerald-300 font-mono">“El sistema <b>debe</b> mostrar los pedidos pendientes del día.”</span>
      </div>
    </div>
  </Shell>
);

/* ================================================================== */
/*  11. Audiencias del SRS + ISO 9126                                   */
/* ================================================================== */
const AUDIENCES = [
  { icon: User, t: 'Clientes y usuarios', u: 'Saber qué hará y cómo lo operarán' },
  { icon: Search, t: 'Analistas', u: 'Documento rector a mantener vigente' },
  { icon: Code, t: 'Desarrolladores', u: 'Plano para arquitectura y código' },
  { icon: FlaskConical, t: 'Testers', u: 'Base de los casos de prueba' },
  { icon: Briefcase, t: 'Gerentes', u: 'Medir y controlar el avance' },
  { icon: Server, t: 'Operaciones', u: 'Dimensionar infraestructura' },
  { icon: Headphones, t: 'Soporte', u: 'Manuales y capacitación' },
  { icon: Gavel, t: 'Área legal', u: 'Respaldo contractual' },
  { icon: Building2, t: 'Subcontratistas', u: 'Especificar componentes delegados' },
  { icon: Landmark, t: 'Reguladores', u: 'Certificar cumplimiento normativo' },
];

export const SrsAudiences: React.FC<VisualProps> = ({ caption }) => (
  <Shell icon={Users} title="Un documento, diez lectores" badge="IEEE 830 · ISO/IEC 9126" caption={caption}>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
      {AUDIENCES.map((a) => (
        <div key={a.t} className="flex flex-col items-center text-center p-3 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-[#151518] hover:border-blue-400/60 transition-colors shadow-2xs">
          <span className="p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 mb-1.5">
            <a.icon className="w-4 h-4" />
          </span>
          <span className="text-[11px] font-semibold text-slate-900 dark:text-zinc-100 leading-tight">{a.t}</span>
          <span className="text-[10px] text-slate-500 dark:text-zinc-400 leading-tight mt-0.5">{a.u}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 p-3 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/50">
      <div className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200 mb-2">ISO/IEC 9126 · atributos de calidad</div>
      <div className="flex flex-wrap gap-1.5">
        {['Funcionalidad', 'Confiabilidad', 'Usabilidad', 'Eficiencia', 'Portabilidad', 'Mantenibilidad'].map((q) => (
          <span key={q} className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-300">{q}</span>
        ))}
      </div>
    </div>
  </Shell>
);

/* ================================================================== */
/*  12. Cadena de trazabilidad (análisis de impacto)                    */
/* ================================================================== */
const TR_COLS = ['Requerimiento', 'Diseño', 'Código', 'Prueba'];
const TR_NODES: Record<string, { col: number; row: number; label: string }> = {
  r1: { col: 0, row: 0, label: 'RF-01 Facturar' },
  r2: { col: 0, row: 2, label: 'RNF-03 < 2 s' },
  d1: { col: 1, row: 0, label: 'Clase Factura' },
  d2: { col: 1, row: 1, label: 'Interfaz Pago' },
  d3: { col: 1, row: 2, label: 'Caché consultas' },
  c1: { col: 2, row: 0, label: 'Factura.ts' },
  c2: { col: 2, row: 1, label: 'Pago.ts' },
  c3: { col: 2, row: 2, label: 'Cache.ts' },
  t1: { col: 3, row: 0, label: 'TC-01' },
  t2: { col: 3, row: 1, label: 'TC-02' },
  t3: { col: 3, row: 2, label: 'TC-07 carga' },
};
const TR_EDGES: [string, string, string][] = [
  ['r1', 'd1', 'satisfy'], ['r1', 'd2', 'satisfy'], ['r2', 'd3', 'satisfy'],
  ['d1', 'c1', ''], ['d2', 'c2', ''], ['d3', 'c3', ''], ['d1', 'c3', ''],
  ['c1', 't1', 'verify'], ['c2', 't2', 'verify'], ['c3', 't3', 'verify'],
];

export const TraceabilityChain: React.FC<VisualProps> = ({ caption }) => {
  const [changed, setChanged] = useState<string | null>('r1');
  const impacted = useMemo(() => {
    const set = new Set<string>();
    if (!changed) return set;
    const stack = [changed];
    while (stack.length) {
      const n = stack.pop()!;
      if (set.has(n)) continue;
      set.add(n);
      TR_EDGES.filter(([a]) => a === n).forEach(([, b]) => stack.push(b));
    }
    return set;
  }, [changed]);
  const nx = (c: number) => 20 + c * 160;
  const ny = (r: number) => 50 + r * 62;
  const nw = 128, nh = 34;
  return (
    <Shell icon={GitMerge} title="Trazabilidad: ¿qué se rompe si cambio un requerimiento?" badge="Análisis de impacto" caption={caption}>
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[11px] text-slate-500 dark:text-zinc-400">Simular cambio en:</span>
        {['r1', 'r2'].map((id) => (
          <button key={id} onClick={() => setChanged(id)} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-colors ${changed === id ? 'bg-rose-500 text-white shadow-xs' : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'}`}>
            {TR_NODES[id].label}
          </button>
        ))}
        <button onClick={() => setChanged(null)} className="ml-auto flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
          <RotateCcw className="w-3 h-3" /> Limpiar
        </button>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 640 230" className="w-full min-w-[540px] h-auto" role="img" aria-label="Red de trazabilidad entre requerimientos, diseño, código y pruebas">
          {TR_COLS.map((c, i) => (
            <SvgText key={c} x={nx(i) + nw / 2} y={20} size={10} weight={700} className={TEXT_MUTED}>{c.toUpperCase()}</SvgText>
          ))}
          {TR_EDGES.map(([a, b, lbl]) => {
            const A = TR_NODES[a], B = TR_NODES[b];
            const hot = impacted.has(a) && impacted.has(b);
            return (
              <g key={a + b}>
                <Arrow x1={nx(A.col) + nw} y1={ny(A.row) + nh / 2} x2={nx(B.col)} y2={ny(B.row) + nh / 2} head="open" dashed={!hot} strokeClass={hot ? 'stroke-rose-500' : STROKE_SOFT} width={hot ? 2 : 1.3} />
                {lbl && <SvgText x={(nx(A.col) + nw + nx(B.col)) / 2} y={(ny(A.row) + ny(B.row)) / 2 + nh / 2 - 7} size={8} className={hot ? 'fill-rose-500' : TEXT_MUTED} mono>{`«${lbl}»`}</SvgText>}
              </g>
            );
          })}
          {Object.entries(TR_NODES).map(([id, n]) => {
            const hot = impacted.has(id);
            const root = id === changed;
            return (
              <g key={id} onClick={() => n.col === 0 && setChanged(id)} style={{ cursor: n.col === 0 ? 'pointer' : 'default' }}>
                <rect x={nx(n.col)} y={ny(n.row)} width={nw} height={nh} rx="12" className={root ? 'fill-rose-500 stroke-rose-600' : hot ? 'fill-rose-50 dark:fill-rose-950/40 stroke-rose-400' : `${FILL_BG} ${STROKE_SOFT}`} strokeWidth={hot ? 2 : 1.3} />
                <SvgText x={nx(n.col) + nw / 2} y={ny(n.row) + nh / 2} size={10} weight={600} className={root ? 'fill-white' : hot ? 'fill-rose-700 dark:fill-rose-300' : TEXT}>{n.label}</SvgText>
              </g>
            );
          })}
        </svg>
      </div>
      <InfoBar title={changed ? `Impacto de cambiar ${TR_NODES[changed].label}` : 'Sin cambios'}>
        {changed ? `Se ven afectados ${impacted.size - 1} elementos de diseño, código y pruebas (en rojo). Sin trazabilidad, encontrarlos sería adivinar.` : 'Elegí un requerimiento para ver qué elementos dependen de él.'}
      </InfoBar>
    </Shell>
  );
};

/* ================================================================== */
/*  13. FURPS+                                                          */
/* ================================================================== */
const FURPS = [
  { l: 'F', n: 'Funcionalidad', d: 'Capacidades, características y funciones del sistema.', ex: 'El sistema debe emitir facturas tipo A y B.', kind: 'RF' },
  { l: 'U', n: 'Usabilidad', d: 'Ergonomía, estética, consistencia de interfaz y facilidad de aprendizaje.', ex: 'Un cajero nuevo debe poder facturar tras 30 min de capacitación.', kind: 'RNF' },
  { l: 'R', n: 'Confiabilidad', d: 'Frecuencia y severidad de fallas, MTBF y capacidad de recuperación.', ex: 'Disponibilidad del 99,5 % mensual; recuperación < 5 min.', kind: 'RNF' },
  { l: 'P', n: 'Rendimiento', d: 'Tiempos de respuesta, throughput, memoria, concurrencia y ancho de banda.', ex: 'Responder consultas en < 2 s con 300 usuarios.', kind: 'RNF' },
  { l: 'S', n: 'Soportabilidad', d: 'Mantenibilidad, extensibilidad, configurabilidad, compatibilidad y portabilidad.', ex: 'Debe ejecutarse en Windows y Linux sin cambios de código.', kind: 'RNF' },
  { l: '+', n: 'Restricciones', d: 'Diseño, implementación, interfaces físicas y normativas legales.', ex: 'Debe cumplir la normativa fiscal vigente y usar PostgreSQL.', kind: '+' },
];

export const FurpsPlus: React.FC<VisualProps> = ({ caption }) => {
  const [sel, setSel] = useState(0);
  return (
    <Shell icon={Zap} title="Modelo FURPS+" badge="Checklist de exhaustividad" caption={caption}>
      <div className="grid grid-cols-6 gap-2">
        {FURPS.map((f, i) => (
          <button
            key={f.l}
            onClick={() => setSel(i)}
            className={`aspect-square flex flex-col items-center justify-center rounded-2xl border-2 transition-all ${
              sel === i
                ? 'border-blue-600 bg-blue-600 text-white shadow-md -translate-y-1'
                : f.kind === 'RF'
                  ? 'border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300'
                  : f.kind === '+'
                    ? 'border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300'
                    : 'border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200'
            }`}
          >
            <span className="text-2xl sm:text-3xl font-black leading-none">{f.l}</span>
            <span className="text-[9px] sm:text-[10px] font-medium mt-1 hidden sm:block">{f.n}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-2 mt-1.5 text-[10px] font-semibold text-center">
        <div className="text-sky-600 dark:text-sky-400 border-t-2 border-sky-400 pt-1">Funcional</div>
        <div className="col-span-4 text-slate-500 dark:text-zinc-400 border-t-2 border-slate-300 dark:border-zinc-700 pt-1">No funcionales (URPS)</div>
        <div className="text-amber-600 dark:text-amber-400 border-t-2 border-amber-400 pt-1">Plus</div>
      </div>
      <InfoBar title={`${FURPS[sel].l} · ${FURPS[sel].n}`}>
        {FURPS[sel].d}
        <span className="block mt-1 font-mono text-[11px] text-blue-700 dark:text-blue-300">Ej.: {FURPS[sel].ex}</span>
      </InfoBar>
    </Shell>
  );
};
