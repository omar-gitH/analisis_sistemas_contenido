const fs = require('fs');

const dataFile = './src/data/systemsCourseData.ts';
let content = fs.readFileSync(dataFile, 'utf8');

const injections = {
  "id: 'que-es-analisis',": "diagram: { type: 'AnalysisVsDesign', caption: 'Contraste entre el Qué (Análisis) y el Cómo (Diseño).' },",
  "id: 'teoria-general-sistemas',": "diagram: { type: 'SystemModel', caption: 'Modelo General de Sistema: Entradas, Proceso y Salidas.' },",
  "id: 'terminologia-esencial',": "diagram: { type: 'MethodologyLayers', caption: 'Capas de la Ingeniería de Software: Paradigma, Metodología, Técnicas y Herramientas.' },",
  "id: 'ingenieria-sistemas-vs-software',": "diagram: { type: 'SystemsVsSoftware', caption: 'Ingeniería de Sistemas vs Ingeniería de Software.' },",
  "id: 'roles-analista-disenador',": "diagram: { type: 'AnalystDesigner', caption: 'Roles y Responsabilidades: Analista vs Diseñador.' },",
  // 'concepto-actividad-diagrama' already has 'activity_elements' ? No wait, only 'elementos-uml-actividades' might have it. Let's see:
  // "id: 'concepto-actividad-diagrama',": "diagram: { type: 'ActivitySymbols', caption: 'Simbología básica de un Diagrama de Actividades.' },",
  // "id: 'elementos-uml-actividades',": "diagram: { type: 'ActivityExample', caption: 'Ejemplo de flujo de actividades con particiones.' },",
  // "id: 'elementos-bpmn',": "diagram: { type: 'BpmnSymbols', caption: 'Símbolos principales de la notación BPMN.' },",
  
  "id: 'definicion-requerimiento-stakeholders',": "diagram: { type: 'StakeholderMap', caption: 'Mapa de Stakeholders y su relación con el sistema.' },",
  "id: 'rf-vs-rnf-smart',": "diagram: { type: 'RfRnfSmart', caption: 'Diferencia entre Requerimientos Funcionales y No Funcionales (SMART).' },",
  "id: 'que-es-elicitacion-problemas',": "diagram: { type: 'ElicitationIceberg', caption: 'El Iceberg de la Elicitación: lo explícito vs lo tácito.' },",
  "id: 'impacto-costo-errores',": "diagram: { type: 'ErrorCostCurve', caption: 'Curva del costo de los errores a lo largo del ciclo de vida.' },",
  "id: 'clasificacion-tecnicas-elicitacion',": "diagram: { type: 'ElicitationTechniques', caption: 'Clasificación de las Técnicas de Elicitación de Requerimientos.' },",
  "id: 'tecnicas-jad-brainstorming',": "diagram: { type: 'JadSession', caption: 'Estructura de una Sesión JAD (Joint Application Development).' },",
  "id: 'anatomia-historia-usuario',": "diagram: { type: 'KanbanBoard', caption: 'Tablero Kanban para la gestión ágil de Historias de Usuario.' },",
  "id: 'principios-manifiesto-agil',": "diagram: { type: 'AgileValues', caption: 'Los 4 Valores del Manifiesto Ágil.' },",
  "id: 'documentacion-srs-funciones',": "diagram: { type: 'SrsFunctions', caption: 'Las 6 Funciones Clave del Documento SRS.' },",
  "id: 'documentacion-vs-modelos-principios',": "diagram: { type: 'ModelVsText', caption: 'Sinergia entre Documentación Textual y Modelos Gráficos.' },",
  "id: 'audiencias-srs-estandares',": "diagram: { type: 'SrsAudiences', caption: 'Matriz de Audiencias que consumen el SRS.' },",
  // 'sysml-trazabilidad' already has diagram.
  "id: 'clasificacion-furps-plus',": "diagram: { type: 'FurpsPlus', caption: 'Modelo FURPS+ para clasificación de Requerimientos No Funcionales.' },"
};

let modified = content;

for (const [key, value] of Object.entries(injections)) {
  // We want to insert the diagram property just before the summary or title.
  // Actually we can insert it right after the id: line.
  const regex = new RegExp(`(${key}\\s*\\n)`);
  if (!modified.match(regex)) {
    console.log(`Could not find ${key}`);
    continue;
  }
  
  // check if it already has a diagram
  const index = modified.indexOf(key);
  const nextText = modified.substring(index, index + 200);
  if (nextText.includes('diagram: {')) {
    console.log(`Skipping ${key}, already has diagram`);
    continue;
  }
  
  modified = modified.replace(regex, `$1        ${value}\n`);
}

fs.writeFileSync(dataFile, modified);
console.log('Injected diagrams into systemsCourseData.ts');
