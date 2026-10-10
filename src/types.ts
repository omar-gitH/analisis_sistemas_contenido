export type ContentType = 
  | 'text'
  | 'concept'
  | 'comparison'
  | 'diagram'
  | 'list'
  | 'quote'
  | 'table';

export interface DiagramInfo {
  type: 
    | 'sdlc' 
    | 'deming' 
    | 'interview_shapes' 
    | 'activity_elements' 
    | 'use_case' 
    | 'sysml_traceability' 
    | 'requirements_flow'
    | 'class_diagram'
    | 'state_machine'
    | 'user_story_invest'
    | 'use_case_spec'
    | 'AnalysisVsDesign'
    | 'SystemModel'
    | 'MethodologyLayers'
    | 'SystemsVsSoftware'
    | 'AnalystDesigner'
    | 'StakeholderMap'
    | 'RfRnfSmart'
    | 'ElicitationIceberg'
    | 'ErrorCostCurve'
    | 'ElicitationTechniques'
    | 'JadSession'
    | 'AgileValues'
    | 'SrsFunctions'
    | 'ModelVsText'
    | 'SrsAudiences'
    | 'FurpsPlus'
    | 'KanbanBoard';
  caption: string;
  data?: Record<string, unknown>;
}

export interface Section {
  id: string;
  title: string;
  summary: string;
  content: string[];
  keyTerms?: { term: string; definition: string }[];
  bulletPoints?: string[];
  diagram?: DiagramInfo;
  smartTakeaway?: string;
  readingTimeMinutes: number;
}

export interface Unit {
  id: string;
  code: string;
  title: string;
  description: string;
  pages: string;
  semester?: '1C' | '2C';
  sections: Section[];
}

export interface QuizQuestion {
  id: string;
  unitId: string;
  semester?: '1C' | '2C';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  citation: {
    unit: string;
    sectionId: string;
    page: string;
    exactQuote: string;
  };
  difficulty: 'fácil' | 'intermedio' | 'avanzado';
}

export interface Flashcard {
  id: string;
  unitId: string;
  semester?: '1C' | '2C';
  front: string;
  back: string;
  category: string;
  unitTitle: string;
}

export interface SearchResult {
  unitId: string;
  sectionId: string;
  unitTitle: string;
  sectionTitle: string;
  snippet: string;
  type: 'seccion' | 'concepto' | 'diagrama';
  matchScore: number;
}
