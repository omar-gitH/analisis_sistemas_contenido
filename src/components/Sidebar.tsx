import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Search, 
  X,
  FileCheck,
  CheckCircle,
  Hash
} from 'lucide-react';
import { UNITS_DATA } from '../data/systemsCourseData';

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
  activeUnitId: string;
  activeSectionId: string;
  onSelectSection: (unitId: string, sectionId: string) => void;
  onOpenSearch: () => void;
  onOpenQuiz: (unitId?: string) => void;
  currentView: 'reader' | 'quiz';
  readSections: Set<string>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onCloseMobile,
  activeUnitId,
  activeSectionId,
  onSelectSection,
  onOpenSearch,
  onOpenQuiz,
  currentView,
  readSections
}) => {
  // Track open/collapsed units in accordion
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    UNITS_DATA.forEach((u) => {
      init[u.id] = u.id === activeUnitId; // only open the active unit by default
    });
    return init;
  });

  // Automatically expand active unit
  React.useEffect(() => {
    setExpandedUnits((prev) => ({
      ...prev,
      [activeUnitId]: true
    }));
  }, [activeUnitId]);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  const totalSections = UNITS_DATA.reduce((acc, u) => acc + u.sections.length, 0);
  const readCount = readSections.size;
  const progressPercent = Math.round((readCount / totalSections) * 100);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 bg-white dark:bg-[#18181b] border-r border-slate-200 dark:border-zinc-800 flex flex-col transition-all duration-300 ease-in-out lg:relative lg:h-full overflow-hidden ${
          isOpen ? 'translate-x-0 w-72 sm:w-80 lg:w-80 lg:opacity-100' : '-translate-x-full w-72 sm:w-80 lg:w-0 lg:opacity-0 lg:border-none lg:translate-x-0'
        }`}
      >
        {/* Sidebar Header / Brand info */}
        <div className="p-4 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Contenido del Documento</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              UTN FRLP · 20 Páginas
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 lg:hidden"
            aria-label="Cerrar barra lateral"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Search Launcher Button */}
        <div className="p-3 border-b border-slate-200 dark:border-zinc-800">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3 py-2 text-xs text-slate-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-700/60 rounded-xl hover:border-slate-300 dark:hover:border-zinc-600 hover:text-slate-700 dark:hover:text-zinc-300 transition-colors shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500" />
              <span>Buscar concepto...</span>
            </div>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* NotebookLM Mode Button */}
        <div className="p-3 bg-slate-50/60 dark:bg-zinc-900/40 border-b border-slate-200 dark:border-zinc-800">
          <button
            onClick={() => {
              onOpenQuiz();
              if (window.innerWidth < 1024) onCloseMobile();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'quiz'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:border-blue-500/50 hover:text-blue-700 dark:hover:text-blue-400'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Evaluación NotebookLM</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40 font-semibold">
              Quiz & Fichas
            </span>
          </button>
        </div>

        {/* Reading Progress Indicator */}
        <div className="px-4 py-2.5 border-b border-slate-200 dark:border-zinc-800 bg-slate-50/30 dark:bg-zinc-900/20 text-[11px] text-slate-500 dark:text-zinc-400 flex items-center justify-between">
          <span className="font-medium">Progreso de lectura</span>
          <span className="font-mono text-slate-700 dark:text-zinc-300">{progressPercent}% ({readCount}/{totalSections})</span>
        </div>

        {/* Chapter & Sections Navigation Tree */}
        <nav className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {UNITS_DATA.map((unit, idx) => {
            const isUnitActive = activeUnitId === unit.id;
            const isExpanded = expandedUnits[unit.id] ?? true;
            const isFirstOfSem2 = unit.semester === '2C' && (idx === 0 || UNITS_DATA[idx - 1]?.semester !== '2C');
            const isFirstOfSem1 = idx === 0;

            return (
              <React.Fragment key={unit.id}>
                {isFirstOfSem1 && (
                  <div className="px-3 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                    <span>1er Cuatrimestre</span>
                    <span>Fundamentos</span>
                  </div>
                )}
                {isFirstOfSem2 && (
                  <div className="px-3 pt-4 pb-1 text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-between border-t border-slate-200 dark:border-zinc-800 mt-2">
                    <span>2do Cuatrimestre</span>
                    <span>Diseño & Dinámica</span>
                  </div>
                )}
                <div className="rounded-xl overflow-hidden mb-1">
                {/* Unit Header Accordion Trigger */}
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-semibold rounded-xl transition-colors ${
                    isUnitActive && currentView === 'reader'
                      ? 'bg-slate-200/80 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100'
                      : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/50'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400 font-bold shrink-0">
                      U{unit.code}
                    </span>
                    <span className="truncate">{unit.title}</span>
                  </div>
                  <div className="shrink-0 text-slate-400 dark:text-zinc-500">
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                {/* Subsections List */}
                {isExpanded && (
                  <div className="ml-3 pl-2.5 my-1 border-l border-slate-200 dark:border-zinc-800 space-y-0.5">
                    {unit.sections.map((sec) => {
                      const isSecActive = activeSectionId === sec.id && currentView === 'reader';
                      const isRead = readSections.has(sec.id);

                      return (
                        <button
                          key={sec.id}
                          onClick={() => {
                            onSelectSection(unit.id, sec.id);
                            if (window.innerWidth < 768) onCloseMobile();
                          }}
                          className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-all flex items-center justify-between group ${
                            isSecActive
                              ? 'bg-blue-600 text-white font-medium shadow-xs shadow-blue-500/20 dark:bg-blue-600 dark:text-white'
                              : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/60 hover:text-slate-900 dark:hover:text-zinc-200'
                          }`}
                        >
                          <span className="truncate pr-2">{sec.title}</span>
                          <span className="shrink-0">
                            {isRead ? (
                              <CheckCircle className={`w-3 h-3 ${isSecActive ? 'text-white' : 'text-blue-500'}`} />
                            ) : (
                              <span className={`text-[10px] font-mono ${isSecActive ? 'text-blue-100' : 'opacity-50'}`}>{sec.readingTimeMinutes}m</span>
                            )}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-500 text-center">
          Resumen Análisis de Sistemas · UTN FRLP
        </div>
      </aside>
    </>
  );
};
