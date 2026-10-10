import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ReadingView } from './components/ReadingView';
import { NotebookLMQuiz } from './components/NotebookLMQuiz';
import { SmartSearch } from './components/SmartSearch';
import { UNITS_DATA } from './data/systemsCourseData';

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  // Navigation & View State
  const [currentView, setCurrentView] = useState<'reader' | 'quiz'>('reader');
  const [activeUnitId, setActiveUnitId] = useState<string>(UNITS_DATA[0].id);
  const [activeSectionId, setActiveSectionId] = useState<string>(UNITS_DATA[0].sections[0].id);
  const [quizUnitFilter, setQuizUnitFilter] = useState<string>('all');
  
  // UI State
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Dark mode with system / localStorage support
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('as_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Track completed/read sections
  const [readSections, setReadSections] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('as_read_sections');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  // Update dark mode class on document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('as_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('as_theme', 'light');
    }
  }, [darkMode]);

  // Save read sections in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('as_read_sections', JSON.stringify(Array.from(readSections)));
    } catch {
      // ignore
    }
  }, [readSections]);

  // Global keyboard shortcut for Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleRead = (sectionId: string) => {
    setReadSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const handleSelectSection = (unitId: string, sectionId: string) => {
    setActiveUnitId(unitId);
    setActiveSectionId(sectionId);
    setCurrentView('reader');
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenQuizForUnit = (unitId?: string) => {
    if (unitId) {
      setQuizUnitFilter(unitId);
    } else {
      setQuizUnitFilter('all');
    }
    setCurrentView('quiz');
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Current Unit & Section
  const currentUnit = UNITS_DATA.find((u) => u.id === activeUnitId) || UNITS_DATA[0];
  const currentSection = currentUnit.sections.find((s) => s.id === activeSectionId) || currentUnit.sections[0];

  return (
    <div className="h-screen flex flex-col bg-slate-100/70 dark:bg-[#121214] text-slate-900 dark:text-zinc-200 selection:bg-blue-200 dark:selection:bg-blue-900/50 transition-colors overflow-hidden font-sans">
      {/* Top Header conforming to 3-zone contract */}
      <Header
        currentView={currentView}
        onSelectView={(view) => {
          setCurrentView(view);
          if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      {/* Main Layout Container: Left Sidebar + Reading/Quiz Canvas */}
      <div className="flex-1 flex w-full overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onCloseMobile={() => setIsSidebarOpen(false)}
          activeUnitId={activeUnitId}
          activeSectionId={activeSectionId}
          onSelectSection={handleSelectSection}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenQuiz={handleOpenQuizForUnit}
          currentView={currentView}
          readSections={readSections}
        />

        {/* Dynamic Content Surface */}
        <main ref={mainRef} className="flex-1 min-w-0 p-3 lg:p-6 overflow-y-auto custom-scrollbar">
          <div className="w-full max-w-5xl mx-auto pb-12">
            {currentView === 'reader' ? (
              <ReadingView
                currentUnit={currentUnit}
                currentSection={currentSection}
                onSelectSection={handleSelectSection}
                onOpenQuizForUnit={handleOpenQuizForUnit}
                isRead={readSections.has(currentSection.id)}
                onToggleRead={handleToggleRead}
              />
            ) : (
              <NotebookLMQuiz
                onNavigateToCitation={handleSelectSection}
                selectedUnitFilter={quizUnitFilter}
              />
            )}
          </div>
        </main>
      </div>

      {/* Intelligent Search Modal */}
      <SmartSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={handleSelectSection}
      />
    </div>
  );
}
