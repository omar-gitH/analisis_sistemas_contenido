import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  FileText,
  Key,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { Unit, Section } from '../types';
import { DiagramVisualizer } from './DiagramVisualizers';
import { UNITS_DATA } from '../data/systemsCourseData';

interface ReadingViewProps {
  currentUnit: Unit;
  currentSection: Section;
  onSelectSection: (unitId: string, sectionId: string) => void;
  onOpenQuizForUnit: (unitId: string) => void;
  isRead: boolean;
  onToggleRead: (sectionId: string) => void;
}

export const ReadingView: React.FC<ReadingViewProps> = ({
  currentUnit,
  currentSection,
  onSelectSection,
  onOpenQuizForUnit,
  isRead,
  onToggleRead,
}) => {
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  // Compute previous and next sections across units
  const allSectionsWithUnit: { unit: Unit; section: Section }[] = [];
  UNITS_DATA.forEach((u) => {
    u.sections.forEach((s) => {
      allSectionsWithUnit.push({ unit: u, section: s });
    });
  });

  const currentIndex = allSectionsWithUnit.findIndex(
    (item) => item.section.id === currentSection.id
  );
  const prevItem = currentIndex > 0 ? allSectionsWithUnit[currentIndex - 1] : null;
  const nextItem = currentIndex < allSectionsWithUnit.length - 1 ? allSectionsWithUnit[currentIndex + 1] : null;

  const handleCopySummary = () => {
    const text = `${currentSection.title}\n\n${currentSection.summary}\n\n${currentSection.content.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  return (
    <article className="w-full min-h-full px-5 py-7 sm:px-8 sm:py-8 lg:px-10 bg-white dark:bg-[#18181b] rounded-2xl shadow-xs border border-slate-200/80 dark:border-zinc-800 flex flex-col">
      {/* Top Breadcrumb & Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-zinc-800 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            Unidad {currentUnit.code}
          </span>
          <span>/</span>
          <span className="truncate max-w-[200px] sm:max-w-xs text-slate-700 dark:text-zinc-300">{currentUnit.title}</span>
          <span>·</span>
          <span className="font-mono text-[11px] text-slate-400 dark:text-zinc-500">{currentUnit.pages}</span>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Font Size Toggle */}
          <div className="flex items-center border border-slate-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-slate-50 dark:bg-zinc-900/60">
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 text-xs font-semibold ${
                fontSize === 'normal' ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-2xs' : 'text-slate-500 dark:text-zinc-400'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 text-sm font-semibold ${
                fontSize === 'large' ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-2xs' : 'text-slate-500 dark:text-zinc-400'
              }`}
            >
              A+
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
            title="Copiar texto de la sección"
          >
            {copiedQuote ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedQuote ? 'Copiado' : 'Copiar'}</span>
          </button>

          {/* Mark as read toggle */}
          <button
            onClick={() => onToggleRead(currentSection.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
              isRead 
                ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 font-medium border border-blue-300 dark:border-blue-800' 
                : 'hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isRead ? 'Leído' : 'Marcar leído'}</span>
          </button>
        </div>
      </div>

      {/* Main Section Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 mb-3 leading-tight" style={{ textWrap: 'balance' }}>
          {currentSection.title}
        </h1>
        <p className="text-base text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
          {currentSection.summary}
        </p>

        <div className="flex items-center gap-3 mt-4 text-xs text-slate-500 dark:text-zinc-400 font-mono">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{currentSection.readingTimeMinutes} min de lectura</span>
          </span>
          <span>·</span>
          <span>Sección {currentSection.id}</span>
        </div>
      </header>

      {/* Content Body */}
      <div className={`space-y-4 leading-relaxed text-slate-800 dark:text-zinc-200 ${
        fontSize === 'large' ? 'text-lg sm:text-xl' : 'text-base'
      }`}>
        {currentSection.content.map((paragraph, pIdx) => {
          // Render bullet points cleanly without vertical border cuts
          if (paragraph.startsWith('•')) {
            return (
              <div key={pIdx} className="flex items-start gap-3 my-2 text-slate-700 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2.5 shrink-0" />
                <span className="leading-relaxed flex-1">{paragraph.replace(/^•\s*/, '')}</span>
              </div>
            );
          }
          return (
            <p key={pIdx} className="leading-relaxed text-slate-800 dark:text-zinc-200">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Interactive Diagram if present */}
      {currentSection.diagram && (
        <DiagramVisualizer
          type={currentSection.diagram.type}
          caption={currentSection.diagram.caption}
        />
      )}

      {/* Key Terms Box */}
      {currentSection.keyTerms && currentSection.keyTerms.length > 0 && (
        <section className="my-8 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-zinc-100 mb-3">
            <Key className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Términos y Definiciones Clave</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentSection.keyTerms.map((kt, kIdx) => (
              <div key={kIdx} className="p-4 rounded-xl bg-white dark:bg-[#151518] border border-slate-200/80 dark:border-zinc-800/80 text-xs shadow-2xs">
                <div className="font-semibold text-slate-900 dark:text-zinc-100 mb-1">
                  {kt.term}
                </div>
                <div className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {kt.definition}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Smart Takeaway Callout */}
      {currentSection.smartTakeaway && (
        <div className="my-8 p-5 rounded-2xl border border-blue-200/80 dark:border-blue-800/40 bg-blue-50/40 dark:bg-blue-900/20 flex items-start gap-4 shadow-sm">
          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider mb-1">
              Conclusión Clave para Examen
            </div>
            <p className="text-sm text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
              {currentSection.smartTakeaway}
            </p>
          </div>
        </div>
      )}

      {/* NotebookLM Call-to-action for this section */}
      <div className="my-8 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Evaluación Interactiva</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
            ¿Comprendiste este tema?
          </h4>
          <p className="text-xs text-slate-500 dark:text-zinc-400">
            Responde preguntas tipo NotebookLM formuladas sobre los contenidos de esta unidad.
          </p>
        </div>

        <button
          onClick={() => onOpenQuizForUnit(currentUnit.id)}
          className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 transition-colors whitespace-nowrap self-start sm:self-auto flex items-center gap-2 shadow-xs"
        >
          <span>Practicar Unidad {currentUnit.code}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Next and Previous Navigation Controls */}
      <nav className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-zinc-800 gap-4 mt-auto">
        {prevItem ? (
          <button
            onClick={() => onSelectSection(prevItem.unit.id, prevItem.section.id)}
            className="flex-1 text-left p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 bg-slate-50/80 dark:bg-zinc-900/40 transition-all max-w-[48%]"
          >
            <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-zinc-400 mb-1">
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 truncate">
              {prevItem.section.title}
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextItem && (
          <button
            onClick={() => onSelectSection(nextItem.unit.id, nextItem.section.id)}
            className="flex-1 text-right p-4 rounded-2xl border border-slate-200/80 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 bg-slate-50/80 dark:bg-zinc-900/40 transition-all max-w-[48%]"
          >
            <div className="flex items-center justify-end gap-1 text-[11px] text-slate-500 dark:text-zinc-400 mb-1">
              <span>Siguiente</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 truncate">
              {nextItem.section.title}
            </div>
          </button>
        )}
      </nav>
    </article>
  );
};
