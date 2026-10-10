import React from 'react';
import { Search, Sun, Moon, Menu, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface HeaderProps {
  currentView: 'reader' | 'quiz';
  onSelectView: (view: 'reader' | 'quiz') => void;
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  onOpenSearch,
  onToggleSidebar,
  darkMode,
  onToggleDarkMode,
}) => {
  const [installPrompt, setInstallPrompt] = React.useState<BeforeInstallPromptEvent | null>(null);

  React.useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    await installPrompt.userChoice;
    setInstallPrompt(null);
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-200 dark:border-zinc-800 bg-white/90 dark:bg-[#18181b]/95 backdrop-blur-md shadow-xs">
      {/* Zone 1: Single text element wordmark + mobile sidebar toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-1.5 -ml-1 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 rounded-lg hover:bg-slate-200/50 dark:hover:bg-zinc-800/60 transition-colors"
          aria-label="Abrir/Cerrar navegación"
        >
          <Menu className="w-5 h-5" />
        </button>
        <button
          onClick={() => onSelectView('reader')}
          className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-zinc-100 whitespace-nowrap hover:opacity-90 transition-opacity"
        >
          Análisis de Sistemas
        </button>
      </div>

      {/* Zone 2: Clean text navigation links */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-zinc-400">
        <button
          onClick={() => onSelectView('reader')}
          className={`transition-colors hover:text-slate-900 dark:hover:text-zinc-100 whitespace-nowrap ${
            currentView === 'reader' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
          }`}
        >
          Documento & Capítulos
        </button>
        <button
          onClick={() => onSelectView('quiz')}
          className={`transition-colors hover:text-slate-900 dark:hover:text-zinc-100 whitespace-nowrap ${
            currentView === 'quiz' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
          }`}
        >
          Evaluación NotebookLM
        </button>
      </nav>

      {/* Zone 3: 1-2 primary actions (Search trigger + Dark Mode toggle) */}
      <div className="flex items-center gap-2">
        {installPrompt && (
          <button
            onClick={handleInstall}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors whitespace-nowrap"
            title="Instalar esta plataforma como aplicación"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Instalar app</span>
          </button>
        )}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-zinc-400 bg-slate-200/60 dark:bg-zinc-800 border border-slate-200/80 dark:border-zinc-700/60 rounded-xl hover:bg-slate-200 dark:hover:bg-zinc-700/80 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors whitespace-nowrap"
          title="Buscar en el documento (Cmd+K)"
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="hidden lg:inline text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-300/60 dark:bg-zinc-700 text-slate-600 dark:text-zinc-300">
            ⌘K
          </kbd>
        </button>

        <button
          onClick={onToggleDarkMode}
          className="p-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 rounded-xl hover:bg-slate-200/50 dark:hover:bg-zinc-800/60 transition-colors"
          aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          title={darkMode ? 'Modo claro' : 'Modo oscuro'}
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
