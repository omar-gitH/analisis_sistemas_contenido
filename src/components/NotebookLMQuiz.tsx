import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  BookOpen, 
  Layers, 
  ChevronRight, 
  ExternalLink,
  Award,
  ChevronLeft,
  FileText,
  Filter
} from 'lucide-react';
import { QUIZ_QUESTIONS, FLASHCARDS_DATA, UNITS_DATA } from '../data/systemsCourseData';
import { QuizQuestion, Flashcard } from '../types';

interface NotebookLMQuizProps {
  onNavigateToCitation: (unitId: string, sectionId: string) => void;
  selectedUnitFilter?: string;
}

export const NotebookLMQuiz: React.FC<NotebookLMQuizProps> = ({
  onNavigateToCitation,
  selectedUnitFilter
}) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcards' | 'guide'>('quiz');
  const [unitFilter, setUnitFilter] = useState<string>(selectedUnitFilter || 'all');
  
  // Quiz state
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  // Flashcards state
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter questions according to unitFilter (all, sem1, sem2, or unitId)
  const filteredQuestions: QuizQuestion[] = useMemo(() => {
    if (unitFilter === 'all') return QUIZ_QUESTIONS;
    if (unitFilter === 'sem1') return QUIZ_QUESTIONS.filter((q) => q.semester !== '2C');
    if (unitFilter === 'sem2') return QUIZ_QUESTIONS.filter((q) => q.semester === '2C');
    return QUIZ_QUESTIONS.filter((q) => q.unitId === unitFilter);
  }, [unitFilter]);

  // Filter flashcards
  const filteredFlashcards: Flashcard[] = useMemo(() => {
    if (unitFilter === 'all') return FLASHCARDS_DATA;
    if (unitFilter === 'sem1') return FLASHCARDS_DATA.filter((fc) => fc.semester !== '2C');
    if (unitFilter === 'sem2') return FLASHCARDS_DATA.filter((fc) => fc.semester === '2C');
    return FLASHCARDS_DATA.filter((fc) => fc.unitId === unitFilter);
  }, [unitFilter]);

  const currentQ = filteredQuestions[currentQuestionIdx] || filteredQuestions[0];
  const currentFC = filteredFlashcards[flashcardIdx] || filteredFlashcards[0];

  const handleSelectOption = (optionIdx: number) => {
    if (selectedAnswers[currentQ.id] !== undefined) return; // already answered
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionIdx }));
    setShowExplanation((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < filteredQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentQuestionIdx(0);
    setIsFinished(false);
  };

  // Score calculation
  const correctCount = useMemo(() => {
    let count = 0;
    filteredQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        count++;
      }
    });
    return count;
  }, [filteredQuestions, selectedAnswers]);

  const answeredCount = Object.keys(selectedAnswers).filter((id) =>
    filteredQuestions.some((q) => q.id === id)
  ).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* NotebookLM Header Banner */}
      <div className="mb-8 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1.5 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>NotebookLM Studio · Evaluación Basada en Fuentes</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Evaluación & Fichas de Aprendizaje
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Pon a prueba tus conocimientos sobre los 20 folios del documento oficial con fundamentación directa y citas textuales.
            </p>
          </div>

          {/* Unit Filter Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={unitFilter}
              onChange={(e) => {
                setUnitFilter(e.target.value);
                setCurrentQuestionIdx(0);
                setFlashcardIdx(0);
                setIsFlipped(false);
                setIsFinished(false);
              }}
              className="text-xs bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 font-medium text-slate-800 dark:text-zinc-200 focus:outline-hidden"
            >
              <option value="all">Todo el Programa (1C + 2C)</option>
              <option value="sem1">1er Cuatrimestre Completo</option>
              <option value="sem2">2do Cuatrimestre Completo</option>
              <optgroup label="1er Cuatrimestre (Fundamentos)">
                {UNITS_DATA.filter((u) => u.semester !== '2C').map((u) => (
                  <option key={u.id} value={u.id}>
                    U{u.code}: {u.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="2do Cuatrimestre (Diseño & Dinámica)">
                {UNITS_DATA.filter((u) => u.semester === '2C').map((u) => (
                  <option key={u.id} value={u.id}>
                    U{u.code}: {u.title}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* NotebookLM Mode Segmented Tabs */}
        <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'quiz'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Cuestionario Interactivo ({filteredQuestions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'flashcards'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Fichas de Memoria ({filteredFlashcards.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-100 dark:hover:bg-zinc-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Guía de Estudio Rápida</span>
          </button>
        </div>
      </div>

      {/* TAB 1: CUESTIONARIO INTERACTIVO */}
      {activeTab === 'quiz' && (
        <div>
          {isFinished ? (
            /* Finished Results Screen */
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                ¡Evaluación completada!
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 max-w-md mx-auto">
                Has respondido las {filteredQuestions.length} preguntas de la selección de estudio.
              </p>

              <div className="my-6 inline-flex items-center gap-6 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
                <div>
                  <div className="text-3xl font-mono font-bold text-blue-600 dark:text-blue-400">
                    {correctCount} / {filteredQuestions.length}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Respuestas correctas</div>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:border-zinc-800"></div>
                <div>
                  <div className="text-3xl font-mono font-bold text-slate-900 dark:text-zinc-100">
                    {Math.round((correctCount / filteredQuestions.length) * 100)}%
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Efectividad global</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleResetQuiz}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Cuestionario</span>
                </button>
              </div>
            </div>
          ) : currentQ ? (
            /* Question Active Card */
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] shadow-xs">
              {/* Progress and Question Meta */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                  <span className="font-mono font-semibold text-slate-900 dark:text-zinc-100">
                    Pregunta {currentQuestionIdx + 1} de {filteredQuestions.length}
                  </span>
                  <span>·</span>
                  <span className="capitalize">{currentQ.difficulty}</span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-blue-700 dark:text-blue-400 font-medium">
                    Aciertos: {correctCount}/{answeredCount}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((currentQuestionIdx + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-zinc-100 mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isAnswered = selectedAnswers[currentQ.id] !== undefined;
                  const isSelected = selectedAnswers[currentQ.id] === idx;
                  const isCorrect = currentQ.correctIndex === idx;

                  let optionStyles = 'border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 bg-slate-50/50 dark:bg-zinc-900/40 text-slate-800 dark:text-zinc-200';

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyles = 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 font-medium ring-1 ring-blue-500/40';
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'border-red-500 bg-red-50/80 dark:bg-red-950/40 text-red-950 dark:text-red-200 ring-1 ring-red-500/40';
                    } else {
                      optionStyles = 'border-slate-200 dark:border-zinc-800 opacity-60 text-slate-500 dark:text-zinc-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start justify-between gap-3 ${optionStyles}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full border border-slate-300 dark:border-zinc-700 flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 font-semibold">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>

                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* NotebookLM Citation & Explanation Accordion */}
              {showExplanation[currentQ.id] && (
                <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 mb-6 transition-all">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-zinc-100 mb-1">
                    <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Fundamentación & Cita de la Fuente:</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-zinc-300 leading-relaxed mb-3">
                    {currentQ.explanation}
                  </p>

                  {/* NotebookLM exact citation pill/card */}
                  <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 mb-1">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">
                        {currentQ.citation.unit} · {currentQ.citation.page}
                      </span>
                      <button
                        onClick={() => onNavigateToCitation(currentQ.unitId, currentQ.citation.sectionId)}
                        className="text-slate-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium inline-flex items-center gap-1"
                      >
                        <span>Ver en el documento</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                    <blockquote className="italic text-slate-600 dark:text-zinc-400 border-l-2 border-blue-500 pl-2 text-[11px] leading-relaxed">
                      &ldquo;{currentQ.citation.exactQuote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-zinc-800">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIdx === 0}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-slate-200 dark:border-zinc-800 disabled:opacity-30 flex items-center gap-1 hover:bg-slate-50 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <div className="text-xs text-slate-500 dark:text-zinc-400">
                  {selectedAnswers[currentQ.id] !== undefined ? 'Pregunta completada' : 'Selecciona una respuesta'}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>{currentQuestionIdx === filteredQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 dark:text-zinc-400">No hay preguntas para esta unidad.</div>
          )}
        </div>
      )}

      {/* TAB 2: FICHAS DE MEMORIA (FLASHCARDS) */}
      {activeTab === 'flashcards' && (
        <div>
          {currentFC ? (
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 mb-3 px-1">
                <span>Ficha {flashcardIdx + 1} de {filteredFlashcards.length}</span>
                <span className="font-mono">{currentFC.category} · {currentFC.unitTitle}</span>
              </div>

              {/* Flashcard container with flip interaction */}
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="perspective-1000 cursor-pointer min-h-[260px] w-full"
              >
                <div
                  className={`relative w-full h-full preserve-3d flip-transition flip-card-grid ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT */}
                  <div className="backface-hidden p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] shadow-xs flex flex-col justify-between hover:border-blue-500/50">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        <span>PREGUNTA CLAVE</span>
                        <span className="text-slate-400 dark:text-zinc-500">Toca para voltear</span>
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
                        {currentFC.front}
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-400 dark:text-zinc-500 mt-6 italic">
                      Piensa la respuesta antes de voltear
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="backface-hidden rotate-y-180 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#18181b] shadow-xs flex flex-col justify-between hover:border-blue-500/50">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-semibold text-blue-600 dark:text-blue-400 mb-4">
                        <span>RESPUESTA / CONCEPTO</span>
                        <span className="text-slate-400 dark:text-zinc-500">Toca para voltear</span>
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-zinc-100 leading-relaxed whitespace-pre-line">
                        {currentFC.back}
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-400 dark:text-zinc-500 mt-6 italic">
                      ¿Lo recordabas? Pasa a la siguiente
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIdx((prev) => (prev > 0 ? prev - 1 : filteredFlashcards.length - 1));
                  }}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-slate-200 dark:border-zinc-800 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <button
                  onClick={() => setIsFlipped((prev) => !prev)}
                  className="px-4 py-1.5 text-xs font-medium rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200"
                >
                  {isFlipped ? 'Ocultar Respuesta' : 'Ver Respuesta'}
                </button>

                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIdx((prev) => (prev < filteredFlashcards.length - 1 ? prev + 1 : 0));
                  }}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl border border-slate-200 dark:border-zinc-800 flex items-center gap-1 hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 dark:text-zinc-400">No hay fichas disponibles.</div>
          )}
        </div>
      )}

      {/* TAB 3: GUÍA DE ESTUDIO RÁPIDA */}
      {activeTab === 'guide' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
            <span className="font-semibold">Resumen de Examen:</span> Síntesis condensada de los conceptos críticos más evaluados en la materia para repasar antes de una prueba.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                1. Dicotomías Esenciales
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Análisis vs Diseño:</strong> Descubrimiento (Comprender) vs Compromiso (Hacer/Crear).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Metodología vs Proceso:</strong> Versión Estática vs Versión Dinámica de ejecución.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Ing. Sistemas vs Ing. Software:</strong> Comprensión de la realidad vs Construcción técnica.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Actividad vs Acción:</strong> Ejecución no atómica en curso vs Paso atómico (Verbo+Objeto).</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                2. Requerimientos & Calidad SMART
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">RF:</strong> Transformaciones de entradas a salidas (qué hace).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">RNF:</strong> Restricciones de rendimiento, interfaces, fiabilidad, seguridad.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">SMART:</strong> Específico, Medible, Alcanzable, Realizable, Rastreable.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Deming (PDCA):</strong> Planear, Hacer, Verificar, Actuar.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                3. Elicitación & Entrevistas
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">JAD (IBM 1977):</strong> Dinámica grupal, ayudas visuales, proceso racional, foco definido.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Piramidal:</strong> Pocas cerradas ➔ Muchas abiertas (motiva al reservado).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Piramidal Inverso:</strong> Pocas abiertas ➔ Muchas cerradas (acota al disperso).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Costo del Error:</strong> Exponencial a medida que avanza el SDLC.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                4. Casos de Uso & SysML
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">&lt;&lt;include&gt;&gt;:</strong> Obligatorio; descompone comportamiento común base.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">&lt;&lt;extend&gt;&gt;:</strong> Opcional y condicional en un punto de extensión.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Actores:</strong> Siempre externos al sistema. Solo relación de Generalización.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">SysML Trazabilidad:</strong> Relaciona requerimientos con diseño para medir impacto de cambio.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                5. Diagrama de Clases (2C)
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Visibilidad:</strong> Privada (-), Protegida (#: subclases), Pública (+).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Agregación vs Composición:</strong> Rombo vacío (débil) vs Rombo relleno (fuerte, ciclos coincidentes).</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Clase de Asociación:</strong> Multiplicidad *..* con atributos propios del vínculo.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Interfaces:</strong> Sin atributos ni código; solo signaturas de servicio.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                6. Máquina de Estados (2C)
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Alcance:</strong> SIEMPRE modela una CLASE EN PARTICULAR.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Transición:</strong> evento [condicionDeGuarda] / accion().</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Auto-Transición:</strong> exit / ➔ / accion ➔ entry /.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Etiqueta do:</strong> Actividad continua mientras dura el estado.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                7. Historias de Usuario & INVEST (2C)
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Plantilla:</strong> Yo como &lt;rol&gt; Necesito &lt;qué&gt; Para &lt;valor al usuario&gt;.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">INVEST:</strong> Independiente, Negociada, Valiosa, Estimable, Small, Testeable.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Criterio de Aceptación:</strong> Dada &lt;contexto&gt; Cuando &lt;evento&gt; Entonces &lt;respuesta&gt;.</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-2">
                8. Especificación Formal de CU (2C)
              </h4>
              <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1.5 leading-relaxed">
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Sintaxis Diálogo:</strong> &lt;paso&gt; Sujeto + Verbo + Objeto.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Alternativos vs Excepción:</strong> Alternativos siguen; Excepción termina el sistema.</li>
                <li>• <strong className="text-slate-800 dark:text-zinc-200">Pre/Post-condiciones:</strong> Si precondición es falsa, no inicia el programa.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
