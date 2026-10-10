import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, BookOpen, Key, Layers, ChevronRight, Hash, ArrowRight } from 'lucide-react';
import { UNITS_DATA } from '../data/systemsCourseData';

interface SearchResultItem {
  id: string;
  unitId: string;
  unitCode: string;
  unitTitle: string;
  sectionId: string;
  sectionTitle: string;
  type: 'section' | 'term' | 'takeaway';
  title: string;
  snippet: string;
  termDef?: string;
}

interface SmartSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (unitId: string, sectionId: string) => void;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'sections' | 'terms'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Index all content once
  const searchCorpus: SearchResultItem[] = useMemo(() => {
    const items: SearchResultItem[] = [];

    UNITS_DATA.forEach((unit) => {
      unit.sections.forEach((sec) => {
        // Section entry
        items.push({
          id: `${unit.id}-${sec.id}-sec`,
          unitId: unit.id,
          unitCode: unit.code,
          unitTitle: unit.title,
          sectionId: sec.id,
          sectionTitle: sec.title,
          type: 'section',
          title: sec.title,
          snippet: sec.summary + ' ' + sec.content.slice(0, 2).join(' ')
        });

        // Key terms
        if (sec.keyTerms) {
          sec.keyTerms.forEach((kt, kIdx) => {
            items.push({
              id: `${unit.id}-${sec.id}-term-${kIdx}`,
              unitId: unit.id,
              unitCode: unit.code,
              unitTitle: unit.title,
              sectionId: sec.id,
              sectionTitle: sec.title,
              type: 'term',
              title: kt.term,
              snippet: kt.definition,
              termDef: kt.definition
            });
          });
        }

        // Smart Takeaway
        if (sec.smartTakeaway) {
          items.push({
            id: `${unit.id}-${sec.id}-takeaway`,
            unitId: unit.id,
            unitCode: unit.code,
            unitTitle: unit.title,
            sectionId: sec.id,
            sectionTitle: sec.title,
            type: 'takeaway',
            title: `Idea clave: ${sec.title}`,
            snippet: sec.smartTakeaway
          });
        }
      });
    });

    return items;
  }, []);

  // Filter and score results
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return searchCorpus.slice(0, 6);
    }

    const filtered = searchCorpus.filter((item) => {
      if (activeFilter === 'sections' && item.type !== 'section') return false;
      if (activeFilter === 'terms' && item.type !== 'term') return false;

      const titleMatch = item.title.toLowerCase().includes(q);
      const snippetMatch = item.snippet.toLowerCase().includes(q);
      const unitMatch = item.unitTitle.toLowerCase().includes(q) || item.unitCode.toLowerCase().includes(q);

      return titleMatch || snippetMatch || unitMatch;
    });

    // Score sort: title match first
    return filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(q);
      const bTitle = b.title.toLowerCase().includes(q);
      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;
      return 0;
    }).slice(0, 12);
  }, [query, activeFilter, searchCorpus]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleSelect = (item: SearchResultItem) => {
    onSelectSection(item.unitId, item.sectionId);
    onClose();
  };

  const highlightMatches = (text: string, q: string) => {
    if (!q.trim()) return text;
    const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === q.toLowerCase() ? (
            <mark key={i} className="bg-amber-200 dark:bg-amber-900/60 text-slate-900 dark:text-slate-100 rounded px-0.5 font-medium">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#18181b] border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] transition-all"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-zinc-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Buscar conceptos, términos, diagramas, JAD, SMART, SDLC..."
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-zinc-800 pl-3">
            <kbd className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 border border-slate-200 dark:border-zinc-700">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="bg-slate-200 dark:bg-zinc-800 text-slate-700 hover:text-slate-900 dark:text-zinc-200 dark:hover:text-white p-2 rounded-xl hover:bg-slate-300 dark:hover:bg-zinc-700 transition-colors flex items-center justify-center shadow-xs"
              title="Cerrar buscador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-900/40 text-xs text-slate-600 dark:text-zinc-400">
          <span className="text-[11px] font-medium mr-1 text-slate-400">Filtrar:</span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                : 'hover:bg-slate-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Todo
          </button>
          <button
            onClick={() => setActiveFilter('sections')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              activeFilter === 'sections'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                : 'hover:bg-slate-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Secciones
          </button>
          <button
            onClick={() => setActiveFilter('terms')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              activeFilter === 'terms'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white'
                : 'hover:bg-slate-200/60 dark:hover:bg-zinc-800'
            }`}
          >
            Glosario & Términos
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-zinc-800/60">
          {results.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              No se encontraron resultados para &ldquo;<span className="font-semibold text-slate-700 dark:text-zinc-300">{query}</span>&rdquo;.
              <p className="text-xs text-slate-400 mt-1">Prueba con palabras como &ldquo;Bertalanffy&rdquo;, &ldquo;SMART&rdquo;, &ldquo;include&rdquo;, &ldquo;JAD&rdquo; o &ldquo;SDLC&rdquo;.</p>
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`p-3 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                  selectedIndex === idx
                    ? 'bg-slate-100 dark:bg-zinc-800/90 text-slate-900 dark:text-zinc-100'
                    : 'hover:bg-slate-50 dark:hover:bg-zinc-800/40 text-slate-700 dark:text-zinc-300'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-1.5 rounded-lg bg-slate-200/60 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 mt-0.5 shrink-0">
                    {item.type === 'term' ? (
                      <Key className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    ) : item.type === 'takeaway' ? (
                      <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-zinc-400 mb-0.5">
                      <span>Unidad {item.unitCode}</span>
                      <span>·</span>
                      <span className="truncate">{item.sectionTitle}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                      {highlightMatches(item.title, query)}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2 mt-0.5 leading-relaxed">
                      {highlightMatches(item.snippet, query)}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-center hidden sm:flex items-center text-slate-400 dark:text-zinc-500 text-xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 border-t border-slate-100 dark:border-zinc-800 bg-slate-50 dark:bg-[#151518] flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-500">
          <div className="flex items-center gap-3">
            <span>↑↓ para navegar</span>
            <span>↵ para seleccionar</span>
            <span>ESC para cerrar</span>
          </div>
          <div>{results.length} coincidencias</div>
        </div>
      </div>
    </div>
  );
};
