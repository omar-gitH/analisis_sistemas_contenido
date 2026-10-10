import React, { useState } from 'react';
import { Info, type LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Clases de color reutilizables para SVG (respetan el modo oscuro)   */
/* ------------------------------------------------------------------ */
export const STROKE = 'stroke-slate-700 dark:stroke-slate-300';
export const STROKE_SOFT = 'stroke-slate-300 dark:stroke-slate-600';
export const FILL_INK = 'fill-slate-700 dark:fill-slate-300';
export const FILL_BG = 'fill-white dark:fill-zinc-800';
export const FILL_SOFT = 'fill-slate-100 dark:fill-zinc-800/80';
export const TEXT = 'fill-slate-700 dark:fill-slate-200';
export const TEXT_MUTED = 'fill-slate-500 dark:fill-slate-400';
export const ACCENT_STROKE = 'stroke-blue-600 dark:stroke-blue-400';
export const ACCENT_FILL = 'fill-blue-600 dark:fill-blue-400';
export const ACCENT_BG = 'fill-blue-50 dark:fill-blue-950/40';

/* ------------------------------------------------------------------ */
/*  Contenedor visual común                                            */
/* ------------------------------------------------------------------ */
interface ShellProps {
  icon: LucideIcon;
  title: string;
  badge?: string;
  caption: string;
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ icon: Icon, title, badge, caption, children }) => (
  <figure className="my-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/70 dark:bg-[#151518]/90 p-5 shadow-xs">
    <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-slate-100 dark:border-zinc-800">
      <div className="flex items-center gap-2 min-w-0">
        <span className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50">
          <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        </span>
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{title}</span>
      </div>
      {badge && (
        <span className="shrink-0 text-[11px] text-slate-500 dark:text-slate-400 font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800">
          {badge}
        </span>
      )}
    </div>
    {children}
    <figcaption className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-4">{caption}</figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/*  Panel de detalle                                                   */
/* ------------------------------------------------------------------ */
export const InfoBar: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mt-4 p-3.5 rounded-xl bg-slate-100/70 dark:bg-zinc-900/60 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-3">
    <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
    <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
      {title && <span className="font-semibold text-slate-900 dark:text-slate-100">{title}. </span>}
      {children}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Flechas SVG sin <marker> (evita colisiones de ids y respeta tema)  */
/* ------------------------------------------------------------------ */
export type ArrowHead = 'none' | 'open' | 'filled' | 'triangle' | 'diamond' | 'diamondFilled';

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  head?: ArrowHead;
  tail?: ArrowHead;
  dashed?: boolean;
  dotted?: boolean;
  strokeClass?: string;
  fillClass?: string;
  width?: number;
}

const headShape = (tx: number, ty: number, ux: number, uy: number, kind: ArrowHead) => {
  const px = -uy;
  const py = ux;
  const P = (along: number, side: number) => `${tx - along * ux + side * px},${ty - along * uy + side * py}`;
  switch (kind) {
    case 'open':
      return { points: `${P(9, 5)} ${tx},${ty} ${P(9, -5)}`, closed: false, filled: false, inset: 0 };
    case 'filled':
      return { points: `${P(9, 4.5)} ${tx},${ty} ${P(9, -4.5)}`, closed: true, filled: true, inset: 7 };
    case 'triangle':
      return { points: `${P(12, 7)} ${tx},${ty} ${P(12, -7)}`, closed: true, filled: false, inset: 12 };
    case 'diamond':
    case 'diamondFilled':
      return {
        points: `${tx},${ty} ${P(8, 6)} ${P(16, 0)} ${P(8, -6)}`,
        closed: true,
        filled: kind === 'diamondFilled',
        inset: 16,
      };
    default:
      return null;
  }
};

export const Arrow: React.FC<ArrowProps> = ({
  x1, y1, x2, y2,
  head = 'filled',
  tail = 'none',
  dashed,
  dotted,
  strokeClass = STROKE,
  fillClass = FILL_INK,
  width = 1.5,
}) => {
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const h = headShape(x2, y2, ux, uy, head);
  const t = headShape(x1, y1, -ux, -uy, tail);
  const sx = x1 + (t ? t.inset : 0) * ux;
  const sy = y1 + (t ? t.inset : 0) * uy;
  const ex = x2 - (h ? h.inset : 0) * ux;
  const ey = y2 - (h ? h.inset : 0) * uy;

  const renderShape = (s: ReturnType<typeof headShape>) => {
    if (!s) return null;
    if (!s.closed) {
      return <polyline points={s.points} fill="none" className={strokeClass} strokeWidth={width} strokeLinejoin="round" />;
    }
    return (
      <polygon
        points={s.points}
        className={`${strokeClass} ${s.filled ? fillClass : FILL_BG}`}
        strokeWidth={width}
        strokeLinejoin="round"
      />
    );
  };

  return (
    <g>
      <line
        x1={sx}
        y1={sy}
        x2={ex}
        y2={ey}
        className={strokeClass}
        strokeWidth={width}
        strokeDasharray={dashed ? '5 4' : dotted ? '1.5 3.5' : undefined}
        strokeLinecap="round"
      />
      {renderShape(t)}
      {renderShape(h)}
    </g>
  );
};

/* ------------------------------------------------------------------ */
/*  Texto SVG                                                          */
/* ------------------------------------------------------------------ */
export const SvgText: React.FC<{
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  weight?: number;
  className?: string;
  mono?: boolean;
}> = ({ x, y, children, size = 11, anchor = 'middle', weight = 500, className = TEXT, mono }) => (
  <text
    x={x}
    y={y}
    fontSize={size}
    textAnchor={anchor}
    fontWeight={weight}
    dominantBaseline="middle"
    className={className}
    style={mono ? { fontFamily: 'var(--font-mono)' } : undefined}
  >
    {children}
  </text>
);

/* ------------------------------------------------------------------ */
/*  Galería de símbolos interactiva                                    */
/* ------------------------------------------------------------------ */
export interface SymbolItem {
  name: string;
  tag?: string;
  symbol: React.ReactNode; // contenido SVG en viewBox 0 0 120 64
  desc: string;
}

export const SymbolGallery: React.FC<{ items: SymbolItem[]; columns?: string }> = ({
  items,
  columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
}) => {
  const [active, setActive] = useState(0);
  const current = items[active];
  return (
    <>
      <div className={`grid ${columns} gap-2.5`}>
        {items.map((it, idx) => (
          <button
            key={it.name}
            onClick={() => setActive(idx)}
            className={`group flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${
              active === idx
                ? 'border-blue-500/60 bg-blue-50/60 dark:bg-blue-950/30 shadow-xs'
                : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 hover:border-slate-300 dark:hover:border-zinc-700 hover:-translate-y-0.5'
            }`}
          >
            <svg viewBox="0 0 120 64" className="w-full max-w-[120px] h-14" aria-hidden="true">
              {it.symbol}
            </svg>
            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200 leading-tight">{it.name}</span>
            {it.tag && <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400">{it.tag}</span>}
          </button>
        ))}
      </div>
      <InfoBar title={current.name}>{current.desc}</InfoBar>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Pestañas simples                                                   */
/* ------------------------------------------------------------------ */
export const Tabs: React.FC<{ tabs: string[]; active: number; onChange: (i: number) => void }> = ({
  tabs,
  active,
  onChange,
}) => (
  <div className="flex flex-wrap gap-1.5 mb-4">
    {tabs.map((t, i) => (
      <button
        key={t}
        onClick={() => onChange(i)}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
          active === i
            ? 'bg-blue-600 text-white shadow-xs'
            : 'bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
        }`}
      >
        {t}
      </button>
    ))}
  </div>
);
