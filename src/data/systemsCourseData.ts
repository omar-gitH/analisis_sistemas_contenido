import { Unit, QuizQuestion, Flashcard } from '../types';
import { SEMESTER_2_UNITS, SEMESTER_2_QUIZ_QUESTIONS, SEMESTER_2_FLASHCARDS } from './semester2Data';

const SEMESTER_1_UNITS: Unit[] = [
  {
    id: 'unidad-1-1',
    code: '1.1',
    title: 'Análisis de Sistemas y Fundamentos',
    description: 'Teoría General de Sistemas, pensamiento sistémico, terminología básica, roles y ciclo de vida (SDLC).',
    pages: 'Págs. 1-4',
    sections: [
      {
        id: 'que-es-analisis',
        diagram: { type: 'AnalysisVsDesign', caption: 'Contraste entre el Qué (Análisis) y el Cómo (Diseño).' },
        title: '¿Qué es el Análisis de Sistemas?',
        summary: 'Proceso de comprender el propósito, naturaleza, esencia, interrelaciones entre las partes y funcionamiento de un sistema.',
        content: [
          'El análisis de sistemas es el proceso sistemático de comprender el propósito, la naturaleza, la esencia, las interrelaciones entre las partes y el funcionamiento integral de un sistema.',
          'Dicotomía fundamental del desarrollo:',
          '• Análisis: Proceso del descubrimiento — Comprender lo que existe y lo que se necesita.',
          '• Diseño: Arte del compromiso — Hacer, crear y construir la solución adecuada.'
        ],
        keyTerms: [
          { term: 'Análisis', definition: 'Proceso del descubrimiento enfocado en comprender la realidad y el problema.' },
          { term: 'Diseño', definition: 'Arte del compromiso enfocado en hacer, crear y estructurar la solución.' }
        ],
        smartTakeaway: 'Sin un análisis riguroso (comprender), cualquier diseño (crear) corre el riesgo de resolver el problema equivocado.',
        readingTimeMinutes: 2
      },
      {
        id: 'teoria-general-sistemas',
        diagram: { type: 'SystemModel', caption: 'Modelo General de Sistema: Entradas, Proceso y Salidas.' },
        title: 'Teoría General de Sistemas y Pensamiento Sistémico',
        summary: 'Concebida por Ludwig von Bertalanffy en 1940 como alternativa a la reducción mecanicista.',
        content: [
          'La Teoría General de Sistemas fue concebida por Ludwig von Bertalanffy en la década de 1940 como un modelo práctico para conceptualizar los fenómenos que la reducción mecanicista de la ciencia clásica no podía explicar.',
          'Pilares de la Teoría General de Sistemas:',
          '• Marco teórico unificador tanto para las ciencias naturales como para las sociales.',
          '• Emplea conceptos como "organización", "totalidad", globalidad e "interacción dinámica".',
          '• Lo lineal es sustituido por lo circular (retroalimentación y bucles de causa-efecto).',
          '• Lo individual pierde importancia ante el enfoque interdisciplinario y holístico.',
          'Pensamiento sistémico: Reconoce que estamos rodeados de sistemas (microsistemas, macrosistemas y subsistemas contenidos en otros), en los cuales se observan patrones de conexiones entre partes y los mismos principios en sistemas diferentes. Permite evaluar si un sistema es simple o complejo, y si su complejidad es estática o dinámica.',
          'Proceso de obtención del conocimiento:',
          '• Análisis = Conocemos (descomponemos en partes).',
          '• Síntesis = Comprendemos (integramos las partes en el todo).'
        ],
        bulletPoints: [
          'Sustitución del modelo mecanicista lineal por relaciones circulares e interdependientes.',
          'El todo es más que la simple suma de sus partes aisladas.',
          'Análisis permite conocer los componentes; la Síntesis permite comprender el funcionamiento global.'
        ],
        smartTakeaway: 'Un sistema no es una colección aleatoria de componentes, sino una organización interdependiente en la que la conducta de cada elemento influye y es influida por los demás.',
        readingTimeMinutes: 3
      },
      {
        id: 'terminologia-esencial',
        diagram: { type: 'MethodologyLayers', caption: 'Capas de la Ingeniería de Software: Paradigma, Metodología, Técnicas y Herramientas.' },
        title: 'Glosario y Terminología Esencial',
        summary: 'Definiciones operativas de paradigma, método, técnica, herramienta, producto, metodología y proceso.',
        content: [
          'Para el desarrollo disciplinado de sistemas de información, se establecen distinciones terminológicas rigurosas:',
          '• Paradigma: Conjunto de reglas, utilización de métodos, sistema estructurado de ideas.',
          '• Método: Forma de hacer algo, hábito o costumbre de proceder. Procedimiento secuencial que se sigue.',
          '• Técnica: Cómo se hace una cosa; conjunto de procedimientos y recursos de que se sirve una ciencia o arte. Cuál es la mejor, dados ciertos límites del contexto probado y aplicado.',
          '• Herramienta: ¿Qué uso para construir mi objetivo? Soportes, utilitarios y facilitadores instrumentales.',
          '• Producto: Lo que se crea, aquello que se tiene que construir.',
          '• Roles: Funciones que realizan las personas (sin ellas no existe producto posible).',
          '• Metodología vs Proceso: La metodología reúne todo lo anterior (métodos, técnicas, herramientas y roles) para lograr la construcción del producto. La METODOLOGÍA es la versión estática, mientras que el PROCESO es la versión dinámica del desarrollo del software.',
          '• Proceso: Ejecución de una instancia concreta de la metodología. Se divide en subprocesos de transformación unitaria.',
          '• Etapa: Tramo de tiempo en el cual se evalúan acontecimientos, eventos y logros alcanzados.'
        ],
        keyTerms: [
          { term: 'Metodología', definition: 'Versión estática: reúne métodos, técnicas, herramientas y roles prescritos.' },
          { term: 'Proceso', definition: 'Versión dinámica: la ejecución en tiempo real de una instancia de la metodología.' },
          { term: 'Técnica', definition: 'Procedimientos y recursos específicos aplicados dentro de un contexto comprobado.' },
          { term: 'Herramienta', definition: 'Soporte o facilitador instrumental utilizado para construir el objetivo.' }
        ],
        smartTakeaway: 'La metodología define la receta (estática); el proceso es cocinar el plato en una instancia temporal concreta (dinámica).',
        readingTimeMinutes: 3
      },
      {
        id: 'ingenieria-sistemas-vs-software',
        diagram: { type: 'SystemsVsSoftware', caption: 'Ingeniería de Sistemas vs Ingeniería de Software.' },
        title: 'Ingeniería de Sistemas vs Ingeniería de Software',
        summary: 'Comprensión holística de la realidad versus construcción disciplinada de productos de software.',
        content: [
          'Ingeniería de Sistemas (Centrada en la comprensión de la realidad):',
          'Enfoque interdisciplinario cuyo objetivo es el estudio de los sistemas de información y, a través de ellos, comprender la realidad. Aborda la complejidad, modela y representa los sistemas con herramientas propias. Integra teorías, conceptos, principios, normativas y procedimientos de múltiples ciencias para resolver problemas reales.',
          'Ingeniería de Software (Centrada en la construcción del software):',
          'Disciplina tecnológica y de administración que se ocupa de la producción y evolución sistémica de productos de software de alta calidad bajo tiempo y costos estimados.',
          'Principio de generación de conocimiento: En ambas disciplinas, el conocimiento final es mayor que el inicial; esto significa que no sólo se aplicaron métodos preexistentes, sino que durante el proceso se generó nuevo conocimiento sobre el dominio.'
        ],
        smartTakeaway: 'Ingeniería de Sistemas comprende la realidad y el negocio; Ingeniería de Software construye la solución técnica de calidad dentro de plazos y presupuesto.',
        readingTimeMinutes: 2
      },
      {
        id: 'roles-analista-disenador',
        diagram: { type: 'AnalystDesigner', caption: 'Roles y Responsabilidades: Analista vs Diseñador.' },
        title: 'Roles en el Desarrollo: Analista vs Diseñador',
        summary: 'Competencias y responsabilidades distintivas entre la indagación y la construcción arquitectónica.',
        content: [
          'Analista de Sistemas (El Investigador):',
          'Dado que el análisis es un proceso de descubrimiento, el analista opera como un investigador riguroso.',
          'Competencias requeridas:',
          '• Capacidad de análisis, síntesis e indagación continua.',
          '• Trabajo en equipo interdisciplinario.',
          '• Excelente comunicación oral y escrita.',
          '• Predisposición empática hacia el usuario y cliente.',
          'Diseñador de Sistemas (El Creador y Constructor):',
          'Es el arquitecto que formula la solución técnica para resolver la necesidad identificada.',
          'Competencias requeridas:',
          '• Posee sólida base de conocimiento tecnológico.',
          '• Conoce las tecnologías y plataformas disponibles.',
          '• Traza los planos y modelos de la arquitectura.',
          '• Crea soluciones viables y evalúa alternativas.',
          '• Identifica fortalezas y debilidades de cada alternativa.',
          '• Establece la solución técnica más adecuada a la problemática actual.'
        ],
        readingTimeMinutes: 2
      },
      {
        id: 'ciclo-vida-sdlc-workflow',
        title: 'Ciclo de Vida del Sistema (SDLC) y Workflow',
        summary: 'Fases secuenciales e iterativas del ciclo de vida y optimización de flujos de trabajo.',
        content: [
          'El Ciclo de Vida del Software (SDLC) estructura la evolución del sistema a través de fases integradas:',
          '1. Investigación Preliminar: Estudio de factibilidad y alcance.',
          '2. Determinación de Requerimientos: Identificación y análisis de necesidades.',
          '3. Diseño del Sistema: Estructura arquitectónica, modelos de datos e interfaces.',
          '4. Desarrollo del Software: Codificación, construcción y pruebas unitarias.',
          '5. Prueba de Sistemas: Verificación y validación funcional e integral.',
          '6. Implantación y Evaluación: Puesta en marcha, entrega y revisión post-implementación.',
          'Productos del Software: La suma de programas de computadora + procedimientos operativos + documentación asociada + diagramas/modelos + datos de operación del sistema = CONOCIMIENTO ACUMULADO.',
          'Workflow (Flujo de Trabajo): Organiza y controla tareas, recursos y reglas necesarias para completar el proceso de negocio. Busca la máxima automatización de los procesos de trabajo y el control total de las distintas etapas.',
          'Beneficios del Workflow:',
          '• Ahorro de tiempo, aumento de la productividad y eficiencia operativa.',
          '• Mejora el control y trazabilidad de los procesos.',
          '• Mejor atención y calidad de servicio al cliente.',
          '• Optimización de la circulación de información entre clientes y proveedores.',
          '• Integración transversal de los procesos empresariales.'
        ],
        diagram: {
          type: 'sdlc',
          caption: 'Ciclo de Vida del Sistema (SDLC) - Fases fundamentales'
        },
        smartTakeaway: 'El software no es sólo código ejecutable; comprende documentación, modelos, datos y procedimientos que forman el conocimiento acumulado de la organización.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-1-2-1-4',
    code: '1.2 - 1.4',
    title: 'Modelado con Diagramas de Actividades (UML y BPMN)',
    description: 'Modelado del comportamiento mediante flujo de datos y control. Simbología UML y BPMN.',
    pages: 'Págs. 4-5',
    sections: [
      {
        id: 'concepto-actividad-diagrama',
        title: 'Concepto de Actividad y Diagrama de Actividades',
        summary: 'Diferenciación entre actividad (no atómica) y acción (atómica). Modelado de procesos de negocio.',
        content: [
          'Actividad: Es una ejecución no atómica en curso dentro del sistema. Producen un cambio en el estado del sistema o la devolución de un valor.',
          'Acción: Es una ejecución atómica (indivisible) expresada como [Verbo + Objeto] (ej. "Validar Documento").',
          'Diagrama de Actividades: Es un modelo formal que representa el comportamiento del sistema mediante un flujo ordenado de datos y de control. Se utiliza prioritariamente para modelar procesos de negocio.',
          'Características centrales:',
          '• Muestra de manera clara el flujo de control entre distintas actividades.',
          '• Destaca la secuencia de actividades a lo largo del tiempo.'
        ],
        keyTerms: [
          { term: 'Actividad', definition: 'Ejecución no atómica en curso que altera el estado del sistema o retorna un valor.' },
          { term: 'Acción', definition: 'Paso elemental atómico que no puede ser subdividido, expresado como Verbo + Objeto.' }
        ],
        readingTimeMinutes: 2
      },
      {
        id: 'elementos-uml-actividades',
        title: 'Elementos en Notación UML',
        summary: 'Nodos de control, bifurcaciones, concurrencia (fork/join) y carriles organizacionales (swimlanes).',
        content: [
          'Elementos estructurales en Diagrama de Actividades UML:',
          '• Actividad: Rectángulo con esquinas redondeadas.',
          '• Acción: Paso elemental atómico (verbo + objeto).',
          '• Nodo de Inicio: Círculo relleno sólido (inicia el flujo).',
          '• Nodo de Fin: Círculo con borde concéntrico exterior (finaliza toda la actividad).',
          '• Fin de Hilo de Ejecución: Círculo con una "X" en su interior (termina sólo ese camino concurrente sin detener el resto).',
          '• Bifurcación o Nodo de Decisión: Rombo con una entrada y múltiples salidas con condiciones de guarda.',
          '• Merge (Fusión): Rombo con múltiples entradas que se unen en una única salida.',
          '• Barra de Bifurcación (Fork): Barra horizontal o vertical gruesa que divide un flujo en múltiples flujos concurrentes (paralelos).',
          '• Barra de Unión o Sincronización (Join): Barra gruesa que espera la llegada de todos los flujos entrantes para continuar.',
          '• Nodo Conector: Círculo pequeño con letra o identificador para enlazar partes del diagrama.',
          '• Carriles o Swimlanes: Columnas o filas que asignan la responsabilidad de cada actividad a un actor, área o subsistema.',
          '• Objeto (Artefacto): Rectángulo con nombre de sustantivo que representa datos o insumos transmitidos en el flujo.'
        ],
        diagram: {
          type: 'activity_elements',
          caption: 'Simbología y Nodos Clave en Diagramas de Actividades (UML vs BPMN)'
        },
        smartTakeaway: 'Fork inicia la ejecución concurrente; Join actúa como barrera de sincronización que espera a todas las ramas paralelas antes de proseguir.',
        readingTimeMinutes: 3
      },
      {
        id: 'elementos-bpmn',
        title: 'Elementos en Notación BPMN (Business Process Model and Notation)',
        summary: 'Objetos de flujo, tareas, compuertas (gateways), eventos y artefactos en BPMN.',
        content: [
          'BPMN provee un estándar gráfico internacional para modelar flujos de trabajo organizacionales:',
          '1. Objetos de Flujo:',
          '• Subproceso y Tareas: Tarea atómica, compuesta, repetitiva, servicio, manual o automatizada.',
          '2. Eventos (Círculos):',
          '• Evento de Inicio (borde simple).',
          '• Evento Intermedio (borde doble).',
          '• Evento Final (borde grueso).',
          '• Tipos de eventos: Temporal (reloj), de Mensaje (sobre), de Cancelación (cruz).',
          '3. Gateways / Compuertas (Rombos con marcador interno):',
          '• Exclusiva (X): Sólo una ruta alternativa se elige según la condición.',
          '• Paralela (+): Todos los caminos se activan de forma sincronizada.',
          '• Inclusiva (O): Uno o varios caminos válidos pueden dispararse.',
          '• Compleja (*): Lógica combinada de enrutamiento.',
          '4. Conexiones: Flujo de secuencia (línea continua), Flujo de mensaje (línea de trazos), Asociación (puntos), Asociación de datos.',
          '5. Artefactos: Objetos de datos, notas explicativas.',
          '6. Canales / Swimlanes: Pools (organización/entidad) y Lanes (departamentos o roles dentro del pool).'
        ],
        smartTakeaway: 'En BPMN, los Pools representan organizaciones o participantes independientes, mientras que los Lanes delimitan responsabilidades internas.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-2-1',
    code: '2.1',
    title: 'Gestión y Clasificación de Requerimientos',
    description: 'Ciclo de Deming, definición de requerimientos, stakeholders, RF vs RNF y criterios SMART.',
    pages: 'Págs. 5-6',
    sections: [
      {
        id: 'concepto-problema-deming',
        title: 'El Concepto de Problema y el Ciclo de Deming',
        summary: 'El problema como oportunidad superadora y el ciclo continuo PDCA (Planear, Hacer, Verificar, Actuar).',
        content: [
          'Problema: Es el estado de la realidad diferente al esperado, deseado o planificado. No siempre representa una falla o déficit, sino más bien una visión superadora de optimización o evolución del negocio.',
          'Para la resolución de problemas y la mejora continua de la calidad se emplea el Ciclo de Deming (PDCA):',
          '1. Planear (Plan): Identificar oportunidades, definir metas y planificar los cambios necesarios.',
          '2. Hacer (Do): Implementar los cambios y ejecutar las acciones planificadas.',
          '3. Verificar (Check): Medir y evaluar los resultados contra los objetivos previstos.',
          '4. Actuar (Act): Estandarizar la solución exitosa o corregir desviaciones para reiniciar el ciclo virtuoso.'
        ],
        diagram: {
          type: 'deming',
          caption: 'Ciclo de Deming (PDCA) - Marco de Mejora Continua'
        },
        smartTakeaway: 'Un problema no es solo arreglar lo roto; es la brecha entre la situación actual y una visión superadora.',
        readingTimeMinutes: 2
      },
      {
        id: 'definicion-requerimiento-stakeholders',
        diagram: { type: 'StakeholderMap', caption: 'Mapa de Stakeholders y su relación con el sistema.' },
        title: 'Requerimientos y Stakeholders',
        summary: 'Condiciones y necesidades del usuario. Actores involucrados y especificaciones del sistema.',
        content: [
          'Requerimiento: Es una condición o necesidad de un usuario para resolver un problema o alcanzar un objetivo.',
          'Definición formal: Un requerimiento es una característica del sistema o una descripción de algo que el sistema es capaz de hacer con el objeto de satisfacer el propósito del sistema.',
          'Stakeholder (Parte Interesada): Conjunto de personas u organizaciones que tienen un potencial interés o impacto en el sistema a ser desarrollado (pueden ganar o perder con el proyecto). Incluye a usuarios finales, directivos, clientes, operadores, etc.',
          'Requerimientos del Usuario: Enunciado expresado en lenguaje comprensible sobre las necesidades del usuario.',
          'Requerimientos del Sistema (SRS / Software Requirement Specification): Descripción detallada y técnica de la funcionalidad que el sistema va a cubrir.'
        ],
        keyTerms: [
          { term: 'Stakeholder', definition: 'Cualquier persona o entidad que gana o pierde con el éxito del proyecto.' },
          { term: 'Requerimiento', definition: 'Característica o capacidad necesaria para satisfacer el propósito del sistema.' }
        ],
        readingTimeMinutes: 2
      },
      {
        id: 'rf-vs-rnf-smart',
        diagram: { type: 'RfRnfSmart', caption: 'Diferencia entre Requerimientos Funcionales y No Funcionales (SMART).' },
        title: 'Requerimientos Funcionales (RF), No Funcionales (RNF) y Criterios SMART',
        summary: 'Distinción entre qué hace el sistema y cómo se comporta. Criterios de calidad SMART para RNF.',
        content: [
          'Requerimientos Funcionales (RF):',
          'Definen las funciones concretas que el sistema será capaz de realizar. Describen las transformaciones que el sistema realiza sobre las entradas para producir salidas específicas (el qué del sistema).',
          'Requerimientos No Funcionales (RNF):',
          'Tienen que ver con características, restricciones y cualidades que de una u otra forma condicionan o limitan el sistema. Abarcan: rendimiento (tiempo de respuesta y uso de espacio), interfaces de usuario, fiabilidad y robustez, mantenibilidad, seguridad de datos, portabilidad, normativas y estándares.',
          'Documentación de calidad de RNF bajo criterios SMART:',
          '• S - Específico (Specific): Sin ambigüedad, conciso, claro, simple y detallado.',
          '• M - Medible (Measurable): Permite evaluar cuantitativamente el grado de satisfacción alcanzado (métricas objetivas).',
          '• A - Alcanzable (Attainable): Técnicamente factible con la tecnología disponible.',
          '• R - Realizable (Realizable): Se puede llevar a cabo con los recursos, presupuesto y plazos disponibles.',
          '• T - Rastreable (Traceable): Admite seguimiento desde su origen hasta la especificación, diseño, implementación y pruebas.',
          'La Ingeniería de Requerimientos administra estas actividades de forma sistemática con alta calidad y eficiente empleo de recursos, generando nuevo conocimiento organizativo.'
        ],
        keyTerms: [
          { term: 'Requerimientos Funcionales (RF)', definition: 'Transformaciones de entradas en salidas; lo que el sistema debe hacer.' },
          { term: 'Requerimientos No Funcionales (RNF)', definition: 'Propiedades emergentes, restricciones de rendimiento, seguridad y calidad.' },
          { term: 'SMART', definition: 'Específico, Medible, Alcanzable, Realizable y Rastreable.' }
        ],
        smartTakeaway: 'Un RNF ambiguo como "el sistema debe ser rápido" es inaceptable; debe formularse SMART: "el tiempo de respuesta para consultas debe ser menor a 1.5 segundos bajo 500 usuarios concurrentes".',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-3-1',
    code: '3.1',
    title: 'Elicitación de Requerimientos',
    description: 'Proceso sociotécnico de descubrimiento, problemas típicos, costo del error, técnicas de elicitación y JAD.',
    pages: 'Págs. 6-10',
    sections: [
      {
        id: 'que-es-elicitacion-problemas',
        diagram: { type: 'ElicitationIceberg', caption: 'El Iceberg de la Elicitación: lo explícito vs lo tácito.' },
        title: '¿Qué es la Elicitación y Cuáles son sus Problemas?',
        summary: 'Proceso sociotécnico de descubrir conocimientos. Problemas de articulación, comunicación, cognitivos y técnicos.',
        content: [
          'Elicitación de requerimientos: Es el proceso de descubrir, adquirir y destilar todo el conocimiento relevante necesario para producir un modelo de requerimientos sobre un problema organizacional.',
          'Naturaleza crítica: Es una actividad humana intensiva de carácter predominantemente SOCIAL y psicológico más que puramente tecnológico. En ella emergen conflictos humanos, resistencias y temores.',
          'Categorías de problemas en la elicitación:',
          '1. Problemas de Articulación (del usuario):',
          '• Los usuarios no pueden expresar sus necesidades con claridad.',
          '• Existen contradicciones o incongruencias en sus propias solicitudes.',
          '• Temor a revelar ignorancia tecnológica.',
          '• Resistencia al cambio o miedo a que el sistema automatice y "elimine su puesto de trabajo".',
          '• Falta de visión global (visión de túnel: solo conocen su tarea puntual).',
          '2. Problemas de Comunicación:',
          '• Vocabulario y hábitos culturales o jerga técnica disonante.',
          '• Conflictos de intereses entre departamentos.',
          '• Uso de formatos o gráficos técnicos incomprensibles para el usuario.',
          '• Conflictos personales o ideológicos dentro de la organización.',
          '3. Limitaciones Cognitivas (del analista/desarrollador):',
          '• Desconocimiento del dominio del negocio.',
          '• Formulación de supuestos no verificados.',
          '• Tendencia a simplificar en exceso problemas complejos.',
          '• Sesgos de conducta humana y superposición de roles.',
          '• Desmotivación en el equipo de trabajo.',
          '4. Problemas Técnicos:',
          '• Dominios intrínsecamente complejos, requerimientos contradictorios o fuentes dispersas.'
        ],
        smartTakeaway: 'La elicitación fracasa con mayor frecuencia por problemas sociales, psicológicos y de comunicación que por limitaciones técnicas de programación.',
        readingTimeMinutes: 3
      },
      {
        id: 'impacto-costo-errores',
        diagram: { type: 'ErrorCostCurve', caption: 'Curva del costo de los errores a lo largo del ciclo de vida.' },
        title: 'Impacto y Costo de los Errores en Requerimientos',
        summary: 'La curva de costo exponencial: por qué detectar tempranamente los errores salva el proyecto.',
        content: [
          '¿Cómo impactan los errores en la fase de requerimientos?',
          '• El producto construido finalmente no satisface las verdaderas necesidades del usuario.',
          '• Desperdicio masivo de recursos humanos y económicos en un sistema no deseado.',
          '• Conflictos legales y desacuerdos contractuales por ambigüedades interpretativas.',
          '• REGLA DE ORO DEL SDLC: Cuanto más tarde se detecte un error en el ciclo de vida, exponencialmente más costoso será repararlo.',
          'Causas de los errores de requerimientos:',
          '• Omisiones de requisitos clave.',
          '• Suposiciones asumidas como ciertas sin validación.',
          '• Inconsistencias lógicas internas.',
          '• Ambigüedades de redacción no depuradas tempranamente.',
          'Conclusión contundente: La mayoría de los fracasos de software se originan en requerimientos mal elicitados; remediarlos a tiempo es el factor más determinante del retorno de inversión.'
        ],
        smartTakeaway: 'Corregir un error de requerimientos durante la codificación o pruebas cuesta de 10 a 100 veces más que aclararlo durante la fase de elicitación.',
        readingTimeMinutes: 2
      },
      {
        id: 'clasificacion-tecnicas-elicitacion',
        diagram: { type: 'ElicitationTechniques', caption: 'Clasificación de las Técnicas de Elicitación de Requerimientos.' },
        title: 'Clasificación de Técnicas de Elicitación',
        summary: 'Técnicas tradicionales, grupales, prototipos, basadas en modelos, cognitivas y contextuales.',
        content: [
          'Clasificación canónica de técnicas para capturar requerimientos:',
          '• Tradicionales: Encuestas estructuradas, cuestionarios, entrevistas personales, análisis de documentación existente, censos y muestreo estadístico.',
          '• Grupales: Brainstorming (tormenta de ideas) y Focus Groups interdisciplinarios.',
          '• Prototipos: Creación de un modelo ejecutable o mock-up rápido (muchas veces desechable) como catalizador de feedback tangible.',
          '• Basadas en Modelos (Model-Driven): Elicitación orientada por objetivos, casos de uso y escenarios de interacción.',
          '• Cognitivas: Análisis de protocolo y técnicas de elicitación de expertos.',
          '• Contextuales: Observación etnográfica in situ, estudios etno-metodológicos y análisis de conversación en el puesto de trabajo.'
        ],
        bulletPoints: [
          'Las técnicas tradicionales son ideales para hechos cuantitativos y documentación formal.',
          'Los prototipos eliminan la ambigüedad verbal permitiendo al usuario interactuar.',
          'Las técnicas contextuales revelan el trabajo real frente al trabajo prescrito en manuales.'
        ],
        readingTimeMinutes: 2
      },
      {
        id: 'entrevistas-abiertas-cerradas-estrategias',
        title: 'Entrevistas: Tipos y Estrategias Estructurales',
        summary: 'Entrevistas abiertas vs cerradas. Estructuras piramidal, piramidal inversa y romboidal.',
        content: [
          'Entrevistas Abiertas:',
          '• Ejemplos: "¿Cómo describiría el circuito de reposición de mercadería?", "¿Qué opinión le merece el sistema actual?".',
          '• Ventajas: Abre nuevas líneas no previstas, hilo conversacional fluido y llevadero, facilita la apertura, espontaneidad y empatía.',
          '• Desventajas: Acumula detalles irrelevantes, riesgo de perder el control de la sesión, requiere gran pericia para no dispersarse.',
          'Entrevistas Cerradas:',
          '• Ejemplos: "¿Quién recibe este informe?", "¿Cuántas órdenes se emiten al día?".',
          '• Ventajas: Ahorran tiempo valioso, mantienen el control absoluto, capturan datos concretos y cuantificables.',
          '• Desventajas: Pueden aburrir o incomodar al entrevistado, no capturan matices ni revelan causas profundas.',
          'Estrategias para el Desarrollo de Entrevistas:',
          '1. Esquema Piramidal (De lo específico a lo general): Comienza con pocas preguntas cerradas para generar confianza o calentar motores, avanzando hacia muchas preguntas abiertas. Ideal cuando el entrevistado necesita motivación para hablar.',
          '2. Esquema Piramidal Inverso (De lo general a lo específico): Comienza con preguntas abiertas amplias y luego acota con preguntas cerradas precisas. Ideal si el entrevistado tiende a dispersarse o divagar.',
          '3. Esquema Romboidal (Mixto equilibrado): Comienza con preguntas cerradas de contexto, se expande a preguntas abiertas reflexivas, y concluye con preguntas cerradas para sintetizar y acordar conclusiones.',
          'Consejos y aspectos psicológicos en la entrevista:',
          '• Evitar los monólogos del analista; escuchar activamente (80% escucha, 20% pregunta).',
          '• Evitar preguntas tendenciosas que induzcan la respuesta.',
          '• Autoestima Amenazada: Cuidar que el entrevistador no aparente superioridad intelectual o jerárquica.',
          '• Reacciones emotivas ante conflictos: Considerar estados de estrés, reestructuraciones o despidos recientes.'
        ],
        diagram: {
          type: 'interview_shapes',
          caption: 'Estrategias de Entrevista: Piramidal, Piramidal Inverso y Romboidal'
        },
        smartTakeaway: 'Usa esquema piramidal si el usuario es tímido o reservado; usa piramidal inverso si tiende a divagar y necesitas encauzarlo rápidamente.',
        readingTimeMinutes: 3
      },
      {
        id: 'tecnicas-jad-brainstorming',
        diagram: { type: 'JadSession', caption: 'Estructura de una Sesión JAD (Joint Application Development).' },
        title: 'Técnicas Colaborativas: JAD y Brainstorming',
        summary: 'Joint Application Development (IBM 1977) y tormenta de ideas para resolver problemas en equipo.',
        content: [
          'Técnica JAD (Joint Application Development):',
          'Desarrollada por IBM en 1977. Se realiza a través de sesiones intensivas de trabajo en grupo que reúnen a usuarios, directivos y analistas en un entorno estructurado.',
          'Los 4 Principios Fundamentales del JAD:',
          '1. Dinámica Grupal: Colaboración guiada y compromiso compartido.',
          '2. Ayuda Visual: Uso activo de pizarras, diagramas y proyectores para nivelar la comprensión.',
          '3. Proceso Organizado y Racional: Agenda predefinida, moderador neutral y cronograma estricto.',
          '4. Foco Definido: Se trabaja exclusivamente sobre lo que se va a generar durante la sesión.',
          '¿Cuándo se recomienda JAD?: Cuando los usuarios están intranquilos, buscan cambios profundos y se anticipa que el consenso grupal superará los bloqueos departamentales.',
          'Ventajas del JAD: Ahorro masivo de tiempo en rondas sucesivas de reuniones, alto involucramiento de usuarios y soluciones creativas consensuadas.',
          'Desventajas: Dificultad para coordinar agendas de directivos y necesidad de un facilitador altamente capacitado.',
          'Brainstorming (Tormenta de Ideas):',
          'Promueve la generación de ideas creativas sin juzgarlas en primera instancia. Sigue el principio cuantitativo: cuantas más ideas se sugieran, mayor será la probabilidad de encontrar soluciones brillantes.'
        ],
        keyTerms: [
          { term: 'JAD', definition: 'Metodología colaborativa de IBM basada en 4 principios: dinámica grupal, ayudas visuales, proceso racional y foco definido.' },
          { term: 'Brainstorming', definition: 'Técnica de divergencia creativa donde prima la cantidad de ideas previas a la evaluación crítica.' }
        ],
        smartTakeaway: 'El JAD transforma la resistencia de los usuarios al hacerlos copropietarios del diseño del nuevo sistema.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-3-2',
    code: '3.2',
    title: 'Historias de Usuario y Manifiesto Ágil',
    description: 'Piezas textuales sintéticas de requerimientos, tablero de seguimiento y principios de agilidad.',
    pages: 'Págs. 11-12',
    sections: [
      {
        id: 'anatomia-historia-usuario',
        title: 'Anatomía de una Historia de Usuario (HU)',
        summary: 'Requerimientos sintéticos, flexibles y orientados al valor del negocio según el cliente.',
        content: [
          'Historia de Usuario: Describe lo que el software necesita hacer desde el punto de vista del cliente o usuario final. Es una pieza textual sintética que puede plasmar tanto un RF como un RNF.',
          'Tratamiento: Dinámico, flexible y negociable durante las iteraciones de desarrollo.',
          'Estructura y metadatos de una Historia de Usuario:',
          '• Número / ID correlativo.',
          '• Nombre conciso y descriptivo.',
          '• Fecha de formulación.',
          '• Tipo de actividad a realizar.',
          '• Prueba Funcional (Criterios de Aceptación observables).',
          '• Prioridad de negocio.',
          '• Estimación de tiempo (habitualmente entre 1 a 3 semanas por iteración).',
          '• Dependencias técnicas o funcionales con otras historias.',
          'Redacción directa: Puede y debe ser redactada con asistencia o directamente por el cliente.'
        ],
        diagram: {
          type: 'user_story_invest',
          caption: 'Criterios INVEST para una buena Historia de Usuario'
        },
        keyTerms: [
          { term: 'Historia de Usuario (HU)', definition: 'Descripción breve y negociable de una necesidad desde la óptica del usuario final.' },
          { term: 'Criterio de Aceptación', definition: 'Prueba funcional que verifica cuándo una historia está efectivamente terminada.' }
        ],
        smartTakeaway: 'Una historia de usuario no es una especificación inmutable en piedra; es una invitación a la conversación entre el negocio y los desarrolladores.',
        readingTimeMinutes: 2
      },
      {
        id: 'gestion-kanban',
        diagram: { type: 'KanbanBoard', caption: 'Tablero Kanban para la gestión ágil de Historias de Usuario.' },
        title: 'Descomposición y Seguimiento',
        summary: 'Uso de tableros visuales para el control del trabajo.',
        content: [
          'Descomposición operativa: Cada historia de usuario se descompone en tareas unitarias técnicas, con las que se alimenta el tablero de seguimiento Kanban (Propuesta -> En proceso -> Hecha).'
        ],
        readingTimeMinutes: 1
      },
      {
        id: 'principios-manifiesto-agil',
        diagram: { type: 'AgileValues', caption: 'Los 4 Valores del Manifiesto Ágil.' },
        title: 'Principios del Manifiesto Ágil Aplicados a Requerimientos',
        summary: 'Valores esenciales: entrega continua, aceptación del cambio y colaboración estrecha.',
        content: [
          'Principios esenciales que transformaron la gestión de requisitos en agilidad:',
          '• Entrega temprana y continua de valor para el cliente.',
          '• Aceptar que los requisitos cambian, incluso en etapas avanzadas del desarrollo; el cambio es una ventaja competitiva.',
          '• Entregar software funcional frecuentemente (semanas en lugar de meses).',
          '• Responsables de negocio y desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.',
          '• Construir proyectos en torno a individuos motivados y darles el entorno y confianza necesarios.',
          '• El método más eficiente de comunicación es la conversación directa y franca (cara a cara).',
          '• El software funcionando es la principal medida de progreso real.',
          '• Los procesos ágiles promueven el desarrollo sostenible (ritmo constante indefinido).',
          '• La atención continua a la excelencia técnica y al buen diseño mejora la agilidad.'
        ],
        smartTakeaway: 'El progreso no se mide por la cantidad de páginas de documentación redactadas, sino por software funcionando validado por el usuario.',
        readingTimeMinutes: 2
      }
    ]
  },
  {
    id: 'unidad-4',
    code: '4',
    title: 'Especificación de Requerimientos (SRS / ERS)',
    description: 'El artefacto formal del SRS, audiencias, diferencias con modelos, principios de circularidad e IEEE 830.',
    pages: 'Págs. 12-14',
    sections: [
      {
        id: 'documentacion-srs-funciones',
        diagram: { type: 'SrsFunctions', caption: 'Las 6 Funciones Clave del Documento SRS.' },
        title: 'El Documento SRS / ERS y sus 6 Funciones Clave',
        summary: 'Encapsulación para validación y cimiento integral de la solución técnica.',
        content: [
          'El SRS (Software Requirements Specification) o ERS (Especificación de Requerimientos de Software) es el artefacto formal que encapsula el entendimiento validado del problema.',
          'Es el producto del entrecruzamiento de entrevistas, análisis de documentos, observación y consensos, validado formalmente por el cliente.',
          'Las 6 Funciones Fundamentales del SRS:',
          '1. Comunicación: Puente formal y unívoco entre el equipo técnico y las partes interesadas.',
          '2. Contrato: Base contractual de mutuo acuerdo de lo que será desarrollado y entregado.',
          '3. Costos: Permite presupuestar, cotizar y estimar recursos financieros.',
          '4. Planificación del Proyecto: Determina cronogramas, hitos de entrega y asignación de personal.',
          '5. Validación y Verificación (V&V): Criterio para comprobar si se está construyendo el sistema correcto y de la forma correcta.',
          '6. Gestión de Cambios: Permite medir el impacto de cualquier modificación solicitada con posterioridad.'
        ],
        keyTerms: [
          { term: 'SRS / ERS', definition: 'Documento rector que encapsula de forma consistente los requerimientos validados por el usuario.' },
          { term: 'V&V', definition: 'Validación (¿construimos el sistema correcto?) y Verificación (¿lo construimos correctamente?).' }
        ],
        smartTakeaway: 'El SRS es el cimiento de la solución: sin un cimiento consistente, la planificación, el presupuesto y las pruebas colapsan.',
        readingTimeMinutes: 2
      },
      {
        id: 'documentacion-vs-modelos-principios',
        diagram: { type: 'ModelVsText', caption: 'Sinergia entre Documentación Textual y Modelos Gráficos.' },
        title: 'Documentación Textual vs Modelos y Principios de Redacción',
        summary: 'Complementariedad, circularidad, lenguaje mínimo y oraciones imperativas ("El sistema debe...").',
        content: [
          'Un modelo es una representación o abstracción gráfica/matemática de algún aspecto de la realidad.',
          'Diferencias y complementariedad:',
          '• El modelo gráfico posee potencia visual y síntesis, pero puede omitir detalles sutiles.',
          '• La SRS textual provee detalle exhaustivo y precisión legal.',
          '• Modelos y especificación no compiten: SE COMPLEMENTAN.',
          'Principios lingüísticos de la especificación textual (Lenguaje Natural Controlado):',
          '• Principio de Circularidad: La coherencia semántica interna donde cada término se apoya en conceptos definidos.',
          '• Principio de Lenguaje Mínimo: Uso de un vocabulario preciso y sin redundancias innecesarias.',
          '• Redacción Imperativa y Clara: Las oraciones deben formularse siempre en tono imperativo unívoco: "El sistema debe permitir...", "El sistema debe registrar...".',
          '• Formato Indentado: Para reflejar claramente la jerarquía lógica de los requisitos.'
        ],
        smartTakeaway: 'En un SRS nunca se escribe "sería bueno si el sistema tal vez...". Siempre se utiliza el imperativo: "El sistema debe...".',
        readingTimeMinutes: 2
      },
      {
        id: 'audiencias-srs-estandares',
        diagram: { type: 'SrsAudiences', caption: 'Matriz de Audiencias que consumen el SRS.' },
        title: 'Matriz de Audiencias del SRS y Estándares Internacionales',
        summary: 'Cómo 10 perfiles distintos consumen el SRS. Estándar IEEE 830 e ISO/IEC 9126.',
        content: [
          'Audiencias que utilizan el SRS como herramienta de trabajo:',
          '• Clientes y Usuarios: Interesados en el objetivo del sistema, cómo lo operarán y cómo optimizará sus tareas.',
          '• Analistas: Es el documento rector que fija el compromiso de actualización y vigencia.',
          '• Desarrolladores (Arquitectos, Programadores): Base técnica para la arquitectura, diseño e implementación.',
          '• Testers: Base para diseñar casos de prueba, validar si se construyó el software correcto y certificar los RNF.',
          '• Gerentes: Instrumento para medir y controlar el avance real del proyecto.',
          '• Operaciones: Determinan infraestructura de servidores, red, almacenamiento según carga y concurrencia.',
          '• Soporte al Usuario: Diseñan manuales, mesas de ayuda y planes de capacitación.',
          '• Área Legal: Respaldo para contratos, responsabilidades y contingencias por incumplimiento.',
          '• Subcontratistas: Especificaciones para desarrollo de componentes externos delegados.',
          '• Entes Reguladores y Auditoría: Certificación del cumplimiento normativo y fiscal.',
          'Estándares clave de referencia:',
          '• IEEE 830: Estándar para la redacción de especificaciones de requerimientos de software.',
          '• ISO/IEC 9126: Estándar de calidad que clasifica los atributos no funcionales: Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Portabilidad y Mantenibilidad.'
        ],
        smartTakeaway: 'El SRS es un documento polifacético: para el programador es un plano, para el abogado es un contrato y para el tester es el examen final.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-5',
    code: '5',
    title: 'Modelado con SysML y Matriz FURPS+',
    description: 'Modelado gráfico de requerimientos, principio de trazabilidad, relaciones SysML y FURPS+.',
    pages: 'Págs. 14-16',
    sections: [
      {
        id: 'sysml-trazabilidad',
        title: 'SysML y el Principio de Trazabilidad',
        summary: 'Modelado gráfico de RF y RNF. Trazabilidad de impacto ante cambios en el ciclo de vida.',
        content: [
          'SysML (Systems Modeling Language): Es una extensión de UML concebida por OMG para modelar sistemas complejos que integran tanto software como hardware y procesos de negocio.',
          'Permite modelar gráficamente tanto Requerimientos Funcionales como Requerimientos No Funcionales.',
          'TRAZABILIDAD (Concepto Fundamental):',
          'El diagrama de requerimientos permite relacionar un requerimiento con otros requerimientos o con elementos más evolucionados de diseño, arquitectura y código que los implementan.',
          'Beneficio crucial: Permite conocer con total precisión qué elementos de DISEÑO e IMPLEMENTACIÓN se ven afectados ante el CAMBIO DE UN REQUERIMIENTO en cualquier etapa del proyecto.'
        ],
        keyTerms: [
          { term: 'SysML', definition: 'Lenguaje gráfico de modelado de sistemas que amplía UML a hardware y requerimientos visuales.' },
          { term: 'Trazabilidad', definition: 'Capacidad de vincular un requerimiento con sus pruebas, diseño y código para analizar impactos de cambio.' }
        ],
        smartTakeaway: 'La trazabilidad responde a la pregunta de oro del gerente de proyecto: "¿Si cambiamos este requerimiento hoy, exactamente qué componentes se van a romper?".',
        readingTimeMinutes: 2
      },
      {
        id: 'relaciones-dependencia-sysml',
        title: 'Relaciones de Dependencia en SysML',
        summary: 'Agregación, derivación, copia, verificación, satisfacción, refinamiento y realización.',
        content: [
          'En SysML, los requerimientos se relacionan mediante dependencias estereotipadas precisas:',
          '• Agregación (<<composite>>): Descompone un requerimiento complejo en sub-requerimientos más simples. El requerimiento padre queda satisfecho cuando todos sus sub-requerimientos consolidados se satisfacen.',
          '• Copia (<<copy>>): Permite reutilizar un requerimiento ya definido en otro diagrama, manteniendo dos roles: maestro y esclavo.',
          '• Derivación (<<derive>>): Modela cómo de un requerimiento fuente de alto nivel surgen nuevos requerimientos derivados.',
          '• Uso (<<trace>>): Relación genérica de rastreo para dejar constancia de vínculos entre requerimientos.',
          '• Verificación (<<verify>>): Vincula un requerimiento con los casos de prueba específicos que comprueban su cumplimiento.',
          '• Satisfacción (<<satisfy>>): Especifica que un elemento físico o componente de diseño satisface un requerimiento (ej. un sensor específico satisface una cota de temperatura).',
          '• Refinamiento (<<refine>>): Permite detallar un requerimiento mediante un caso de uso o diagrama de actividades más ilustrativo.',
          '• Realización (<<realize>>): Expresa que un requerimiento implementa o concreta a otro de un nivel de abstracción superior (representado con flecha de trazos y punta triangular vacía).'
        ],
        diagram: {
          type: 'sysml_traceability',
          caption: 'Red de Relaciones de Dependencia y Trazabilidad en SysML'
        },
        smartTakeaway: '<<verify>> vincula con pruebas; <<satisfy>> vincula con componentes de diseño; <<refine>> aporta detalles operacionales.',
        readingTimeMinutes: 3
      },
      {
        id: 'clasificacion-furps-plus',
        diagram: { type: 'FurpsPlus', caption: 'Modelo FURPS+ para clasificación de Requerimientos No Funcionales.' },
        title: 'Modelo de Clasificación FURPS+',
        summary: 'Taxonomía de requerimientos: Funcionalidad, Usabilidad, Confiabilidad, Rendimiento, Soportabilidad y restricciones.',
        content: [
          'El modelo FURPS+ clasifica y asegura la exhaustividad de los requerimientos:',
          '• F - Funcional (Functional): Capacidades, características y funciones del sistema.',
          '• U - Usabilidad (Usability): Ergonomía, estética, consistencia de interfaz y facilidad de aprendizaje.',
          '• R - Confiabilidad (Reliability): Frecuencia y severidad de fallas, tiempo medio entre fallos (MTBF), capacidad de recuperación.',
          '• P - Rendimiento (Performance): Tiempos de respuesta, rendimiento (throughput), uso de memoria, concurrencia y ancho de banda.',
          '• S - Soportabilidad (Supportability): Facilidad de mantenimiento, extensibilidad, configurabilidad, compatibilidad y portabilidad.',
          '• + (Plus): Engloba restricciones adicionales de diseño, implementación, interfaz física y normativas legales.'
        ],
        smartTakeaway: 'FURPS+ previene el error clásico de olvidar los atributos no funcionales críticos para la arquitectura del sistema.',
        readingTimeMinutes: 2
      }
    ]
  },
  {
    id: 'unidad-6',
    code: '6',
    title: 'Modelo Funcional a través de Casos de Uso (UML)',
    description: 'Casos de uso, actores externos, relaciones de asociación, generalización e inclusiones/extensiones.',
    pages: 'Págs. 16-20',
    sections: [
      {
        id: 'concepto-caso-de-uso',
        title: '¿Qué es y qué representa un Caso de Uso?',
        summary: 'Diálogo interactivo sistema-usuario, unidad funcional completa observable que genera valor para un actor.',
        content: [
          'Caso de Uso: Descripción de las acciones que el sistema debe cumplir para satisfacer las necesidades de los distintos usuarios.',
          'Un caso de uso representa:',
          '• Una interacción o diálogo fluido entre el sistema y un usuario o actor externo.',
          '• Una unidad funcional completa del sistema (no una acción suelta).',
          'Objetivos del modelo de casos de uso:',
          '• Explicitar de forma directa los requerimientos funcionales del sistema.',
          '• Describir lo que deberá hacer el sistema desde la perspectiva externa.',
          '• Constituir la base inamovible para planificar y ejecutar las pruebas de aceptación del sistema.',
          'Características esenciales:',
          '• Generalmente es estimulado o iniciado por un actor primario.',
          '• Provee un valor cuantificable y perceptible para ese actor.',
          '• Es completo en sí mismo (cubre el ciclo completo de la meta).'
        ],
        keyTerms: [
          { term: 'Caso de Uso', definition: 'Secuencia completa de interacciones que arroja un resultado de valor observable para un actor.' },
          { term: 'Actor', definition: 'Rol o entidad externa al sistema que interactúa con él (su nombre debe ser explícito).' }
        ],
        smartTakeaway: 'Un caso de uso debe entregar valor tangible: "Presionar botón" NO es un caso de uso; "Emitir Factura de Compra" SÍ lo es.',
        readingTimeMinutes: 2
      },
      {
        id: 'concepto-actor-tipos',
        title: 'Concepto de Actor y sus Diversas Formas',
        summary: 'Abstracción de entidades externas al límite del sistema: personas, roles, sistemas y sensores.',
        content: [
          'Un Actor es una abstracción que modela un rol o entidad externa al sistema que interactúa directamente con él.',
          'Regla fundamental: El actor es SIEMPRE externo al sistema. Explicitar su nombre es obligatorio.',
          '¿Quién o qué puede ser un actor?',
          '• Una persona física en un determinado rol (ej. "Socio de Biblioteca", "Cajero").',
          '• Un rol funcional dentro de una estructura organizativa.',
          '• Otro sistema informático externo que envía o recibe datos.',
          '• Un subsistema externo interoperable.',
          '• Una entidad corporativa u organización externa.',
          '• Un dispositivo automático de captura de datos o medición física (ej. un sensor de temperatura, lector biométrico o balanza digital).'
        ],
        smartTakeaway: 'Un actor no representa a una persona individual en particular (Juan Pérez), sino al ROL abstracto que asume al interactuar (Cliente).',
        readingTimeMinutes: 2
      },
      {
        id: 'relaciones-casos-de-uso',
        title: 'Relaciones en Casos de Uso: Generalización, <<include>> y <<extend>>',
        summary: 'Asociaciones, jerarquía entre actores y casos de uso, dependencias estereotipadas obligatorias y opcionales.',
        content: [
          '1. Asociación (Línea continua): Conecta al Actor con el Caso de Uso con el cual interactúa.',
          '2. Generalización (Flecha de triángulo vacía):',
          '• Entre Actores: La única relación admisible entre actores es la de generalización/herencia. El actor hijo hereda todos los casos de uso del actor padre.',
          '• Entre Casos de Uso: Un caso de uso abstracto se especializa en casos de uso concretos (ej. "Consultar Ventas" especializado en "Ventas por Zona", "Ventas por Período" o "Ventas por Volumen").',
          '3. Dependencia Estereotipada <<include>> (Inclusión):',
          '• Permite descomponer y factorizar un comportamiento común repetido en varios casos de uso base para su reuso.',
          '• EJECUCIÓN OBLIGATORIA: La ejecución del caso de uso base no puede completarse si previamente no se ejecuta lo que el <<include>> prescribe (ej. "Registrar Turno" incluye obligatoriamente "Validar Usuario Autorizado").',
          '4. Dependencia Estereotipada <<extend>> (Extensión):',
          '• Permite aislar un comportamiento opcional o complementario que provee un servicio adicional que no forma parte del núcleo fundamental.',
          '• EJECUCIÓN CONDICIONAL Y OPCIONAL: Solo se dispara si se cumple una condición explícita en un punto de extensión específico (ej. "Gestionar Venta" puede ser extendido por "Aplicar Promociones y Descuentos" solo si el cliente posee cupón activo).',
          'Granularidad de los Casos de Uso:',
          '• Vista del Nivel Negocio: Procesos globales orientados a directivos y clientes.',
          '• Vista del Nivel Sistema: Requisitos de software detallados para diseñadores y desarrolladores.'
        ],
        diagram: {
          type: 'use_case',
          caption: 'Diagrama de Casos de Uso: Actores, <<include>> obligatorio y <<extend>> condicional'
        },
        smartTakeaway: 'Regla mnemotécnica: <<include>> = OBLIGATORIO (siempre ocurre); <<extend>> = OPCIONAL (solo si se cumple la condición en el punto de extensión).',
        readingTimeMinutes: 3
      },
      {
        id: 'especificacion-caso-de-uso',
        title: 'Especificación Detallada de Casos de Uso',
        summary: 'Plantilla de documentación textual complementaria al modelo gráfico de Casos de Uso.',
        content: [
          'La especificación textual de un caso de uso es tan importante como el diagrama en sí. Describe paso a paso el comportamiento del sistema y todas las excepciones.',
          'Elementos fundamentales que debe contener la plantilla:',
          '• Sección de Identificación: ID, Nombre, Objetivo, Prioridad, Actor Principal.',
          '• Sección de Diálogo (Escenarios): Escenario Principal (camino feliz) y escenarios alternativos.',
          '• Sección de Recursos y Restricciones: Pre-condiciones, Post-condiciones, y Requerimientos No Funcionales (RNF).',
          '• Sección de Gestión: Control de versiones, autores y fechas de modificación.'
        ],
        diagram: {
          type: 'use_case_spec',
          caption: 'Estructura recomendada para la Especificación de un Caso de Uso'
        },
        smartTakeaway: 'No contradigas las pre-condiciones en los escenarios alternativos. La pre-condición debe cumplirse SIEMPRE antes de iniciar el caso de uso.',
        readingTimeMinutes: 2
      }
    ]
  }
];

const SEMESTER_1_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    unitId: 'unidad-1-1',
    question: 'Según la Teoría General de Sistemas de Bertalanffy, ¿cuál de los siguientes postulados es correcto?',
    options: [
      'Sustituyó el enfoque lineal mecanicista por la causalidad circular y la interacción dinámica.',
      'Postuló que el comportamiento del sistema equivale a la suma aritmética de sus partes aisladas.',
      'Determinó que los sistemas cerrados poseen mayor nivel de organización que los sistemas abiertos.',
      'Estableció que la estructura estática del sistema predomina sobre sus relaciones dinámicas.'
    ],
    correctIndex: 0,
    explanation: 'Bertalanffy concibió la TGS para superar la reducción mecanicista, sustituyendo lo lineal por lo circular y enfatizando conceptos como "organización", "totalidad" e "interacción dinámica".',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'teoria-general-sistemas',
      page: 'Pág. 1',
      exactQuote: 'Teoría general de sistemas: fue concebida por BERTALANFFY en la década de 1940... Lo lineal es sustituido por lo circular. Lo individual perdía importancia ante el enfoque interdisciplinario.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q2',
    unitId: 'unidad-1-1',
    question: '¿Cuál es la diferencia conceptual precisa entre Metodología y Proceso en el desarrollo de sistemas?',
    options: [
      'La metodología define las herramientas de software; el proceso establece las normas de gestión.',
      'Metodología es la versión estática (marco y métodos); Proceso es la versión dinámica (ejecución).',
      'La metodología se aplica únicamente en cascada; el proceso se utiliza solo en enfoques ágiles.',
      'Metodología es la instancia temporal de ejecución; Proceso es el repositorio estático de reglas.'
    ],
    correctIndex: 1,
    explanation: 'El documento define explícitamente: "La metodología es la versión estática, el proceso es la versión dinámica del desarrollo del software". El proceso es la ejecución de una instancia de la metodología.',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'terminologia-esencial',
      page: 'Pág. 2',
      exactQuote: 'La metodología es la versión estática, el proceso es la versión dinámica del desarrollo del software. El proceso es la ejecución de una instancia de la metodología.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q3',
    unitId: 'unidad-1-1',
    question: '¿Qué distingue el rol del Analista del rol del Diseñador?',
    options: [
      'El analista diseña la base de datos; el diseñador realiza las entrevistas con los usuarios.',
      'El analista programa el código fuente; el diseñador se encarga de las pruebas funcionales.',
      'Analista descubre el problema (el qué); Diseñador concibe la solución técnica (el cómo).',
      'Analista define la viabilidad financiera; Diseñador instala el hardware y redes de servidores.'
    ],
    correctIndex: 2,
    explanation: 'El analista actúa como un investigador (indagación y descubrimiento del problema), mientras que el diseñador es el constructor y creador que traza planos y selecciona la solución tecnológica adecuada.',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'roles-analista-disenador',
      page: 'Pág. 3',
      exactQuote: 'Analista: El analista es un investigador, ya que el análisis es un proceso de descubrimiento... Diseñador: Es el creador y constructor de la solución... Traza los planos (modelos).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q4',
    unitId: 'unidad-1-2-1-4',
    question: 'En un diagrama de actividades UML, ¿cuál es la diferencia entre una Actividad y una Acción?',
    options: [
      'La actividad es atómica y no modificable; la acción representa flujos complejos coordinados.',
      'La actividad modifica el estado del sistema; la acción evalúa únicamente condiciones de guarda.',
      'Actividad modela procesos de negocio en BPMN; Acción modela exclusivamente métodos en UML.',
      'Actividad: ejecución no atómica en curso; Acción: paso atómico e indivisible (verbo + objeto).'
    ],
    correctIndex: 3,
    explanation: 'Una actividad es una ejecución no atómica en curso que produce un cambio de estado. Una acción es una ejecución atómica (indivisible), típicamente redactada como verbo + objeto.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'concepto-actividad-diagrama',
      page: 'Pág. 4',
      exactQuote: 'Actividad: Ejecución no atómica en curso, producen un cambio en el estado del sistema o devolución de un valor... Acción: (atómica) Verbo+objeto.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q5',
    unitId: 'unidad-1-2-1-4',
    question: 'En un diagrama de actividades UML, ¿qué elemento se utiliza para sincronizar flujos concurrentes paralelos?',
    options: [
      'Barra de unión o sincronización (Join).',
      'Rombo de bifurcación condicional (Decision).',
      'Nodo de fin de flujo concurrente (Flow Final).',
      'Barra de división paralela (Fork).'
    ],
    correctIndex: 0,
    explanation: 'La barra de bifurcación (Fork) divide un flujo en paralelo, mientras que la barra de unión (Join) sincroniza y espera a que terminen los flujos concurrentes para continuar.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-uml-actividades',
      page: 'Pág. 4',
      exactQuote: 'Barra de unión o sincronización (join).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q6',
    unitId: 'unidad-2-1',
    question: '¿Cuáles son las 4 etapas del Ciclo de Deming y cuál es su objetivo central?',
    options: [
      'Definir, Medir, Analizar y Controlar (DMAIC), enfocado en auditorías contables.',
      'Planear, Hacer, Verificar y Actuar (PDCA), enfocado en la mejora continua.',
      'Elicitar, Analizar, Diseñar y Construir, enfocado en entregas tempranas de software.',
      'Investigar, Documentar, Probar y Facturar, enfocado en hitos contractuales.'
    ],
    correctIndex: 1,
    explanation: 'El Ciclo de Deming consta de Planear, Hacer, Verificar y Actuar para lograr una visión superadora de mejora continua de los procesos.',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'concepto-problema-deming',
      page: 'Pág. 5',
      exactQuote: 'Para su resolución se utiliza el Ciclo de Deming: Planear, Hacer, Verificar, Actuar (Mejora continua).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q7',
    unitId: 'unidad-2-1',
    question: '¿Qué significan las siglas SMART aplicadas a la definición de Requerimientos No Funcionales (RNF)?',
    options: [
      'Sistémico, Modular, Automatizado, Repetible y Temporal.',
      'Simple, Mantenible, Abierto, Reutilizable y Testeable.',
      'Específico, Medible, Alcanzable, Realizable y Rastreable.',
      'Seguro, Mitigable, Auditable, Rendidor y Tecnológico.'
    ],
    correctIndex: 2,
    explanation: 'SMART corresponde a Específico (sin ambigüedad), Medible (cuantitativo), Alcanzable (factible técnicamente), Realizable (con los recursos existentes) y Rastreable (admite seguimiento en el ciclo de vida).',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'rf-vs-rnf-smart',
      page: 'Pág. 6',
      exactQuote: 'Específico (Specific), Medible (Measurable), Alcanzable (Attainable), Realizable (Realizable), Rastreable (Traceable).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q8',
    unitId: 'unidad-3-1',
    question: '¿Por qué la elicitación se define fundamentalmente como una actividad humana y social más que técnica?',
    options: [
      'Porque prescinde por completo del uso de herramientas informáticas y modelos formales.',
      'Porque el analista de sistemas solo debe interactuar con los directivos de la organización.',
      'Porque los usuarios siempre conocen con precisión el diseño técnico del sistema deseado.',
      'Involucra conflictos de intereses, temores laborales y barreras de comunicación humana.'
    ],
    correctIndex: 3,
    explanation: 'La elicitación es humana intensiva: se presentan problemas como el temor de los usuarios a perder el trabajo, no saber expresar necesidades, desconfianza o conflictos de intereses.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'que-es-elicitacion-problemas',
      page: 'Pág. 7',
      exactQuote: 'Es una actividad humana intensiva y principalmente de carácter social más que tecnológico. Se plantean conflictos de origen psicológico y social.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q9',
    unitId: 'unidad-3-1',
    question: 'Si un entrevistado es reservado y necesita motivación para expresarse, ¿qué estrategia de entrevista se recomienda?',
    options: [
      'Esquema piramidal: inicia con pocas preguntas cerradas y avanza hacia muchas abiertas.',
      'Esquema piramidal inverso: parte de preguntas abiertas amplias hacia preguntas cerradas.',
      'Esquema romboidal: utiliza preguntas abiertas únicamente en la apertura y en el cierre.',
      'Cuestionario estructurado: aplica solo preguntas cerradas de opción múltiple excluyentes.'
    ],
    correctIndex: 0,
    explanation: 'El esquema piramidal inicia con pocas preguntas cerradas para romper el hielo y dar confianza, avanzando luego hacia preguntas abiertas para que el usuario se explaye.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'entrevistas-abiertas-cerradas-estrategias',
      page: 'Pág. 9',
      exactQuote: 'Esquema piramidal: Si el entrevistado necesita motivación iremos desde pocas preguntas cerradas hacia muchas abiertas.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q10',
    unitId: 'unidad-3-1',
    question: '¿Cuáles son los 4 principios de la técnica JAD (Joint Application Development) creada por IBM en 1977?',
    options: [
      'Planificación por sprints, standup diario, retrospectivas y trabajo en parejas.',
      'Dinámica grupal, apoyo visual, proceso organizado/racional y foco en lo que se generará.',
      'Muestreo aleatorio, encuestas masivas, análisis de protocolos y observación pasiva.',
      'Prototipado rápido, refactorización continua, pruebas automatizadas y entrega continua.'
    ],
    correctIndex: 1,
    explanation: 'JAD se sustenta en: dinámica grupal, apoyos visuales para nivelar entendimiento, proceso racional y estructurado, y trabajo con foco delimitado en lo que se construirá.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'tecnicas-jad-brainstorming',
      page: 'Pág. 10',
      exactQuote: 'Se basa en cuatro principios: Dinámica grupal. Uso de ayuda visual para mejorar la comunicación. Mantener un proceso organizado y racional. Durante la entrevista se trabajará sobre lo que se generará (foco definido).'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q11',
    unitId: 'unidad-3-2',
    question: '¿Cuál es la estimación de tiempo habitual que debe abarcar una Historia de Usuario (HU)?',
    options: [
      'Menos de 2 horas en una sola jornada diaria.',
      'Entre 3 y 6 meses de trabajo continuo.',
      'De 1 a 3 semanas.',
      'No debe tener ninguna delimitación temporal.'
    ],
    correctIndex: 2,
    explanation: 'El documento especifica que la estimación de tiempo de una historia de usuario se ubica típicamente entre 1 a 3 semanas.',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'anatomia-historia-usuario',
      page: 'Pág. 11',
      exactQuote: 'Consta de número, nombre, fecha, tipo de actividad, prueba funcional, prioridad, estimación de tiempo (1 a 3 semanas), dependencias con otras.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q12',
    unitId: 'unidad-4',
    question: 'Al redactar un documento SRS con Lenguaje Natural Controlado, ¿qué principio de estilo es OBLIGATORIO?',
    options: [
      'Uso de metáforas literarias descriptivas y tono consultivo condicional ("podría registrar").',
      'Redacción en primera persona del plural ("nosotros crearemos") con jerga técnica informática.',
      'Estructuración en párrafos libres sin numeración jerárquica ni términos estandarizados.',
      'Oraciones imperativas directas del tipo "El Sistema debe...", con circularidad y lenguaje mínimo.'
    ],
    correctIndex: 3,
    explanation: 'El documento señala que las oraciones deben ser imperativas ("El Sistema debe..."), aplicando los principios de circularidad y lenguaje mínimo con formato indentado para reflejar jerarquías.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'documentacion-vs-modelos-principios',
      page: 'Pág. 13',
      exactQuote: 'Las oraciones deben ser imperativas y claras. Ej. El Sistema debe... Utilizar principios de CIRCULARIDAD y LENGUAJE MININO. Debe utilizarse formato INDENTADO para resaltar jerarquías.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q13',
    unitId: 'unidad-4',
    question: '¿Para qué utilizan principalmente el documento SRS el equipo de Testers?',
    options: [
      'Para verificar si el software construido cumple con lo especificado (V&V y RNF).',
      'Para fijar el presupuesto salarial y los viáticos del equipo de desarrollo.',
      'Para diseñar la arquitectura física y el cableado de red de los servidores.',
      'Para redactar los contratos de confidencialidad legal con los proveedores.'
    ],
    correctIndex: 0,
    explanation: 'Los testers utilizan el SRS como criterio fundamental de verificación para corroborar si se construyó el software correcto y evaluar la calidad validando los RNF.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'audiencias-srs-estandares',
      page: 'Pág. 13',
      exactQuote: 'Testers: Con este documento verificarán si la solución software se construyó de acuerdo al documento SRS. Es decir si reconstruyó el software correcto. También se puede usar para sacar defectos, evaluar la calidad, verificando los RNF.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q14',
    unitId: 'unidad-5',
    question: 'En SysML, ¿a qué se denomina TRAZABILIDAD y por qué es fundamental?',
    options: [
      'A la compilación exitosa de los diagramas de clases a código binario ejecutable.',
      'Al vínculo entre requerimientos y elementos de diseño para evaluar impacto del cambio.',
      'Al cómputo automático de horas hombre consumidas por los analistas en cada entrevista.',
      'A la exportación sincronizada de modelos SysML a notación de procesos de negocio BPMN.'
    ],
    correctIndex: 1,
    explanation: 'La trazabilidad relaciona requerimientos con elementos de diseño e implementación, permitiendo identificar de inmediato qué partes se ven impactadas cuando un requerimiento cambia.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'sysml-trazabilidad',
      page: 'Pág. 15',
      exactQuote: 'El Diagrama de Requerimientos permite relacionar requerimientos con otros requerimientos o con otros elementos más evolucionados... ESTO SE DENOMINA => TRAZABILIDAD. Esto permite conocer los elementos de DISEÑO e IMPLEMENTACIÓN que son afectados por el CAMBIO DE UN REQUERIMIENTO.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q15',
    unitId: 'unidad-5',
    question: 'En SysML, ¿cuál es la relación que vincula un requerimiento con los casos de prueba que demuestran su cumplimiento?',
    options: [
      'Satisfacción (<<satisfy>>)',
      'Refinamiento (<<refine>>)',
      'Verificación (<<verify>>)',
      'Derivación (<<derive>>)'
    ],
    correctIndex: 2,
    explanation: 'La relación <<verify>> (verificación) especifica los casos de prueba concretos que verifican y certifican el cumplimiento de un requerimiento.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'relaciones-dependencia-sysml',
      page: 'Pág. 16',
      exactQuote: 'Verificación (verify): Se puede especificar los casos de prueba que verifican un requerimiento.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q16',
    unitId: 'unidad-6',
    question: '¿Qué es un Actor en un modelo de Casos de Uso y qué restricción fundamental posee?',
    options: [
      'Es un método de acceso a base de datos programado internamente dentro del sistema.',
      'Es un caso de uso abstracto que no interactúa con ningún usuario del negocio.',
      'Es el subsistema central que procesa las reglas operativas de la organización.',
      'Es una abstracción de un rol o entidad externa al sistema; explicitar su nombre es mandatorio.'
    ],
    correctIndex: 3,
    explanation: 'El actor abstrae a un usuario externo, sistema o dispositivo automático (sensor) que interactúa con el sistema, pero siempre es estrictamente externo a su frontera.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'concepto-actor-tipos',
      page: 'Pág. 18',
      exactQuote: 'Un actor es una abstracción que modela un tipo de rol/entidad que interactúa con el sistema, pero que es externo a él. Explicitar su nombre es obligatorio.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q17',
    unitId: 'unidad-6',
    question: 'En un diagrama de casos de uso UML, ¿cuál es la diferencia clave entre la dependencia <<include>> y la dependencia <<extend>>?',
    options: [
      '<<include>> es mandatorio para el caso base; <<extend>> es opcional en un punto de extensión.',
      '<<include>> es opcional y depende de una guarda; <<extend>> es de ejecución obligatoria.',
      '<<include>> vincula únicamente actores; <<extend>> vincula únicamente casos de uso con datos.',
      '<<include>> describe excepciones de red; <<extend>> descompone funcionalidad común compartida.'
    ],
    correctIndex: 0,
    explanation: '<<include>> es obligatorio: el caso de uso base no se concreta sin él. <<extend>> es opcional y condicional: añade funcionalidad complementaria solo si se satisface la condición en el punto de extensión.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'relaciones-casos-de-uso',
      page: 'Pág. 19',
      exactQuote: '<<include>>... Su ejecución es obligatoria... <<extend>>... Se activa sólo si la condición es verdadera. No es obligatorio.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q18',
    unitId: 'unidad-6',
    question: '¿Cuál es la ÚNICA relación admitida entre Actores en un diagrama de casos de uso UML?',
    options: [
      'Asociación bidireccional directa.',
      'Generalización (herencia).',
      'Inclusión funcional (<<include>>).',
      'Extensión condicional (<<extend>>).'
    ],
    correctIndex: 1,
    explanation: 'Entre actores, la única relación semánticamente válida es la de Generalización. Los actores especializados heredan el comportamiento y los casos de uso asociados al actor general.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'relaciones-casos-de-uso',
      page: 'Pág. 20',
      exactQuote: 'Generalización: La única relación que se puede establecer entre actores es la de generalización. (base discriminante en la generalización)'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q30',
    unitId: 'unidad-1-1',
    question: 'En el proceso de obtención del conocimiento según el pensamiento sistémico, ¿cuál es la diferencia entre Análisis y Síntesis?',
    options: [
      'El análisis busca comprender el todo; la síntesis descompone el problema en elementos aislados.',
      'El análisis evalúa únicamente los costos; la síntesis modela las clases y componentes técnicos.',
      'El análisis permite conocer (descomponer); la síntesis permite comprender (integrar en el todo).',
      'El análisis es exclusivo de los desarrolladores; la síntesis es tarea exclusiva del cliente.'
    ],
    correctIndex: 2,
    explanation: 'El apunte de cátedra establece taxativamente: Análisis = Conocemos (descomponemos en partes); Síntesis = Comprendemos (integramos las partes en el todo).',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'teoria-general-sistemas',
      page: 'Pág. 1',
      exactQuote: 'Análisis = Conocemos (descomponemos en partes). Síntesis = Comprendemos (integramos las partes en el todo).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q31',
    unitId: 'unidad-1-1',
    question: 'Según el glosario terminológico de la cátedra, ¿cómo se define formalmente una "Técnica"?',
    options: [
      'Conjunto de convicciones filosóficas y paradigmas que sustentan una ciencia.',
      'Herramienta utilitaria de software empleada para construir un producto final.',
      'Versión dinámica e interactiva de un proceso de desarrollo en tiempo real.',
      'Cómo se hace una cosa: procedimientos y recursos en un contexto probado y aplicado.'
    ],
    correctIndex: 3,
    explanation: 'Técnica se define como "Cómo se hace una cosa; conjunto de procedimientos y recursos de que se sirve una ciencia o arte. Cuál es la mejor, dados ciertos límites del contexto probado y aplicado".',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'terminologia-esencial',
      page: 'Pág. 2',
      exactQuote: 'Técnica: Cómo se hace una cosa; conjunto de procedimientos y recursos de que se sirve una ciencia o arte. Cuál es la mejor, dados ciertos límites del contexto probado y aplicado.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q32',
    unitId: 'unidad-1-1',
    question: '¿Cuál es el foco principal que distingue a la Ingeniería de Sistemas de la Ingeniería de Software?',
    options: [
      'Sistemas: comprende la realidad y el negocio; Software: producción disciplinada de software.',
      'Sistemas: administra la infraestructura de servidores; Software: releva requerimientos de usuarios.',
      'Sistemas: construye exclusivamente hardware físico; Software: escribe código de aplicaciones web.',
      'Sistemas: diseña bases de datos relacionales; Software: gestiona contratos legales y presupuestos.'
    ],
    correctIndex: 0,
    explanation: 'Ingeniería de Sistemas estudia los sistemas de información para comprender la realidad; Ingeniería de Software es la disciplina tecnológica y de administración enfocada en producir software de calidad en plazo y costo.',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'ingenieria-sistemas-vs-software',
      page: 'Pág. 2',
      exactQuote: 'Ingeniería de Sistemas: estudio de los sistemas de información y, a través de ellos, comprender la realidad... Ingeniería de Software: producción y evolución sistémica de productos de software de alta calidad bajo tiempo y costos estimados.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q33',
    unitId: 'unidad-1-1',
    question: 'Entre las competencias esperadas de un Diseñador de Sistemas, ¿cuál de las siguientes es prioritaria frente al rol de Analista?',
    options: [
      'Indagar los temores laborales y barreras comunicacionales de los usuarios finales.',
      'Poseer sólida base tecnológica para trazar planos, crear soluciones y evaluar alternativas.',
      'Descomponer el problema en sus partes elementales sin sugerir soluciones técnicas.',
      'Gestionar las relaciones públicas y los contratos societarios con la gerencia.'
    ],
    correctIndex: 1,
    explanation: 'El diseñador es el arquitecto: formula la solución técnica, conoce las tecnologías y plataformas disponibles, traza la arquitectura y evalúa alternativas técnicas.',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'roles-analista-disenador',
      page: 'Pág. 3',
      exactQuote: 'Diseñador: Posee sólida base de conocimiento tecnológico, conoce las tecnologías y plataformas disponibles, traza los planos y modelos de la arquitectura, crea soluciones viables y evalúa alternativas.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q34',
    unitId: 'unidad-1-1',
    question: 'Según el marco del ciclo de vida (SDLC), ¿qué conforma en su totalidad el "Producto del Software"?',
    options: [
      'El archivo binario o paquete ejecutable desplegado en el servidor de producción.',
      'El código fuente versionado en repositorio junto con las pruebas unitarias pasadas.',
      'Programas + procedimientos + documentación + modelos + datos (Conocimiento Acumulado).',
      'El contrato formal firmado de prestación de servicios y el acta de entrega final.'
    ],
    correctIndex: 2,
    explanation: 'El Producto de Software abarca la suma integral de programas + procedimientos + documentación + modelos + datos = Conocimiento Acumulado de la organización.',
    citation: {
      unit: 'Unidad 1.1',
      sectionId: 'ciclo-vida-sdlc-workflow',
      page: 'Pág. 4',
      exactQuote: 'Productos del Software: La suma de programas de computadora + procedimientos operativos + documentación asociada + diagramas/modelos + datos de operación del sistema = CONOCIMIENTO ACUMULADO.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q35',
    unitId: 'unidad-1-2-1-4',
    question: 'En un diagrama de actividades UML, ¿qué indica el símbolo de un círculo con una "X" en su interior (Flow Final Node)?',
    options: [
      'Indica la ocurrencia de una excepción no controlada que aborta el sistema completo.',
      'Inicia una bifurcación condicional de dos caminos mutuamente excluyentes.',
      'Representa la sincronización obligatoria de todos los carriles del diagrama.',
      'Finaliza ese flujo o camino concurrente puntual sin detener las demás ramas activas.'
    ],
    correctIndex: 3,
    explanation: 'El nodo fin de flujo (círculo con X) termina exclusivamente esa rama concurrente individual sin detener los demás hilos paralelos activos.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-uml-actividades',
      page: 'Pág. 4',
      exactQuote: 'Fin de Hilo de Ejecución: Círculo con una "X" en su interior (termina sólo ese camino concurrente sin detener el resto).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q36',
    unitId: 'unidad-1-2-1-4',
    question: 'En un diagrama de actividades UML, ¿cuál es la función de una Barra de Sincronización (Join)?',
    options: [
      'Sincroniza y espera la finalización de múltiples flujos concurrentes para continuar.',
      'Divide un flujo único de entrada en múltiples ramas concurrentes simultáneas.',
      'Evalúa condiciones booleanas para seleccionar una única rama de ejecución.',
      'Modela el almacenamiento persistente de objetos en una base de datos externa.'
    ],
    correctIndex: 0,
    explanation: 'La barra de unión (Join) sincroniza flujos paralelos: espera la llegada de todos los flujos entrantes concurrentes antes de dar paso al siguiente elemento.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-uml-actividades',
      page: 'Pág. 5',
      exactQuote: 'Barra de Unión o Sincronización (Join): Barra gruesa que espera la llegada de todos los flujos entrantes para continuar.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q37',
    unitId: 'unidad-1-2-1-4',
    question: '¿Qué representan los Carriles (Swimlanes) en un diagrama de actividades UML?',
    options: [
      'Representan la escala cronológica de tiempo y duración estimada de cada paso del flujo.',
      'Asignan la responsabilidad de las actividades a roles, departamentos o subsistemas.',
      'Modelan la jerarquía de paquetes de diseño según el patrón arquitectónico en capas.',
      'Indican el flujo de datos persistentes hacia las tablas de la base de datos relacional.'
    ],
    correctIndex: 1,
    explanation: 'Los carriles (swimlanes) dividen el diagrama en columnas o filas para explicitar qué actor, área u objeto es el responsable de ejecutar cada acción.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-uml-actividades',
      page: 'Pág. 5',
      exactQuote: 'Carriles o Swimlanes: Columnas o filas que asignan la responsabilidad de cada actividad a un actor, área o subsistema.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q38',
    unitId: 'unidad-1-2-1-4',
    question: 'En notación BPMN, ¿qué significado tiene una compuerta (gateway) marcada internamente con una cruz ("X")?',
    options: [
      'Compuerta paralela: activa todos los caminos concurrentes sin evaluar condiciones.',
      'Compuerta inclusiva: permite activar una o múltiples ramas concurrentes a la vez.',
      'Compuerta exclusiva: desvía el flujo exactamente por una única ruta válida.',
      'Compuerta compleja: sincroniza flujos basada en expresiones de conteo de eventos.'
    ],
    correctIndex: 2,
    explanation: 'La compuerta exclusiva en BPMN (marcada con una X) representa un desvío excluyente: se selecciona solo una de las rutas posibles según la condición evaluada.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-bpmn',
      page: 'Pág. 5',
      exactQuote: 'Gateways / Compuertas: Exclusiva (X): Sólo una ruta alternativa se elige según la condición.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q39',
    unitId: 'unidad-1-2-1-4',
    question: 'En BPMN, ¿cuál es la diferencia semántica fundamental entre un "Pool" y un "Lane"?',
    options: [
      'Pool: departamento interno de la empresa; Lane: entidad corporativa externa.',
      'Pool: flujo de control automatizado; Lane: actividades exclusivamente manuales.',
      'Pool: repositorio de base de datos; Lane: canal de transmisión transaccional.',
      'Pool: participante o proceso independiente; Lane: subdivisión de roles interna.'
    ],
    correctIndex: 3,
    explanation: 'En BPMN, los Pools representan organizaciones o participantes autónomos e independientes, mientras que los Lanes delimitan responsabilidades internas dentro del Pool.',
    citation: {
      unit: 'Unidad 1.2 - 1.4',
      sectionId: 'elementos-bpmn',
      page: 'Pág. 5',
      exactQuote: 'Canales / Swimlanes: Pools (organización/entidad) y Lanes (departamentos o roles dentro del pool).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q40',
    unitId: 'unidad-2-1',
    question: 'Según los contenidos teóricos de la cátedra, ¿cómo se define adecuadamente el concepto de "Problema"?',
    options: [
      'Estado de la realidad diferente al esperado o deseado, que abre una oportunidad de mejora.',
      'Una falla grave de programación en producción que interrumpe los servicios del servidor.',
      'La falta de presupuesto financiero asignado para la adquisición de nuevo equipamiento.',
      'La omisión de diagramas UML en la documentación de entrega del sistema al cliente.'
    ],
    correctIndex: 0,
    explanation: 'Un problema no es solo un déficit o error, sino la discrepancia entre la realidad actual y un estado deseado que ofrece una oportunidad superadora para el negocio.',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'concepto-problema-deming',
      page: 'Pág. 5',
      exactQuote: 'Problema: Es el estado de la realidad diferente al esperado, deseado o planificado. No siempre representa una falla o déficit, sino más bien una visión superadora de optimización o evolución del negocio.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q41',
    unitId: 'unidad-2-1',
    question: 'En el Ciclo de Deming (PDCA), ¿qué tarea concreta corresponde a la fase "Actuar" (Act)?',
    options: [
      'Definir los requerimientos iniciales y planificar el cronograma del proyecto.',
      'Estandarizar soluciones exitosas o corregir desvíos para reiniciar la mejora.',
      'Ejecutar las tareas planificadas construyendo los módulos de software.',
      'Evaluar mediante métricas objetivas los resultados obtenidos contra el plan.'
    ],
    correctIndex: 1,
    explanation: 'En la fase Act (Actuar) se consolidan y estandarizan los cambios que dieron buen resultado o se corrigen las desviaciones detectadas para reiniciar la mejora continua.',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'concepto-problema-deming',
      page: 'Pág. 6',
      exactQuote: '4. Actuar (Act): Estandarizar la solución exitosa o corregir desviaciones para reiniciar el ciclo virtuoso.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q42',
    unitId: 'unidad-2-1',
    question: '¿Quiénes forman parte del conjunto de "Stakeholders" (partes interesadas) de un sistema?',
    options: [
      'Exclusivamente los desarrolladores y analistas que construyen el software.',
      'Únicamente los usuarios finales que cargan datos en las pantallas de la aplicación.',
      'Toda persona u organización con interés o impacto en el sistema (quien gana o pierde).',
      'Solo los directivos que firman el contrato y autorizan el desembolso económico.'
    ],
    correctIndex: 2,
    explanation: 'Stakeholder es cualquier persona, grupo u organización que se ve afectada por el sistema o puede influir en su resultado (pueden ganar o perder con el proyecto).',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'definicion-requerimiento-stakeholders',
      page: 'Pág. 6',
      exactQuote: 'Stakeholder (Parte Interesada): Conjunto de personas u organizaciones que tienen un potencial interés o impacto en el sistema a ser desarrollado (pueden ganar o perder con el proyecto).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q43',
    unitId: 'unidad-2-1',
    question: '¿Cuál de los siguientes es un ejemplo clásico de Requerimiento Funcional (RF)?',
    options: [
      'El sistema debe cifrar todas las claves almacenadas utilizando el estándar AES-256.',
      'El tiempo de respuesta en consultas de saldo no debe superar 1.5 segundos bajo 400 usuarios.',
      'La aplicación debe garantizar una disponibilidad continua del 99.9% de operatividad anual.',
      'El sistema debe permitir registrar nuevos clientes y emitir su factura de venta.'
    ],
    correctIndex: 3,
    explanation: 'Registrar altas y calcular descuentos define una función concreta y transformación de entradas en salidas (RF). El cifrado, tiempo de respuesta y disponibilidad son RNF.',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'rf-vs-rnf-smart',
      page: 'Pág. 6',
      exactQuote: 'Requerimientos Funcionales (RF): Definen las funciones concretas que el sistema será capaz de realizar. Describen las transformaciones que el sistema realiza sobre las entradas para producir salidas específicas (el qué del sistema).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q44',
    unitId: 'unidad-2-1',
    question: 'En los criterios SMART para Requerimientos No Funcionales, ¿qué exige la propiedad "Medible" (Measurable)?',
    options: [
      'Que permita evaluar objetivamente su cumplimiento mediante métricas cuantitativas.',
      'Que el enunciado del requerimiento no supere una extensión de 25 palabras.',
      'Que el costo económico de desarrollo esté presupuestado en moneda de curso legal.',
      'Que el requerimiento cuente con el visto bueno explícito de todos los directivos.'
    ],
    correctIndex: 0,
    explanation: 'El criterio "Medible" exige definir métricas cuantitativas objetivas (ej. tiempos en segundos, concurrencia, porcentajes) para verificar su cumplimiento sin ambigüedad.',
    citation: {
      unit: 'Unidad 2.1',
      sectionId: 'rf-vs-rnf-smart',
      page: 'Pág. 6',
      exactQuote: 'M - Medible (Measurable): Permite evaluar cuantitativamente el grado de satisfacción alcanzado (métricas objetivas).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q45',
    unitId: 'unidad-3-1',
    question: '¿Por qué se afirma que la Elicitación de Requerimientos es una actividad con una fuerte dimensión sociotécnica y psicológica?',
    options: [
      'Porque depende del lenguaje de programación y de la arquitectura de base de datos elegida.',
      'Porque emergen resistencias al cambio, temores de rol y barreras de comunicación humana.',
      'Porque los analistas de sistemas deben aplicar diagnósticos clínicos a cada entrevistado.',
      'Porque solo puede llevarse a cabo mediante encuestas anónimas distribuidas por correo.'
    ],
    correctIndex: 1,
    explanation: 'La elicitación es intensamente social y psicológica: trata con personas, hábitos, temores al cambio organizacional y discrepancias entre sectores del negocio.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'que-es-elicitacion-problemas',
      page: 'Pág. 7',
      exactQuote: 'Naturaleza crítica: Es una actividad humana intensiva de carácter predominantemente SOCIAL y psicológico más que puramente tecnológico. En ella emergen conflictos humanos, resistencias y temores.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q46',
    unitId: 'unidad-3-1',
    question: '¿Qué representa el problema de "visión de túnel" en los usuarios durante la elicitación?',
    options: [
      'La dificultad física de los analistas al leer documentación técnica en pantallas chicas.',
      'Un fallo en el cableado de telecomunicaciones que aísla a una sucursal corporativa.',
      'Que el usuario conoce su tarea cotidiana pero desconoce el flujo global del negocio.',
      'La resistencia del equipo de desarrollo a incorporar nuevas tecnologías de frontend.'
    ],
    correctIndex: 2,
    explanation: 'La visión de túnel describe al usuario enfocado únicamente en su micro-tarea individual, sin comprender el impacto o relación con las demás áreas del proceso.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'que-es-elicitacion-problemas',
      page: 'Pág. 7',
      exactQuote: 'Falta de visión global (visión de túnel: solo conocen su tarea puntual).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q47',
    unitId: 'unidad-3-1',
    question: 'Según la curva del costo de los errores en el SDLC, ¿cuál de las siguientes afirmaciones es correcta?',
    options: [
      'Reparar un error de requerimientos en producción cuesta lo mismo que en la fase de análisis.',
      'Los errores cometidos durante la elicitación se resuelven sin costo adicional durante el testing.',
      'Resulta más rentable saltear la etapa de diseño para corregir los defectos directamente en código.',
      'Cuanto más tarde se detecte un error en el ciclo de vida, exponencialmente más caro será repararlo.'
    ],
    correctIndex: 3,
    explanation: 'La regla de oro del SDLC indica que el costo de reparar un error crece exponencialmente a medida que avanza el proyecto hacia el diseño, construcción y producción.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'impacto-costo-errores',
      page: 'Pág. 8',
      exactQuote: 'REGLA DE ORO DEL SDLC: Cuanto más tarde se detecte un error en el ciclo de vida, exponencialmente más costoso será repararlo.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q48',
    unitId: 'unidad-3-1',
    question: 'En una entrevista de elicitación, ¿cuándo se recomienda aplicar la estrategia de "Esquema Romboidal"?',
    options: [
      'Inicia con cerradas de contexto, abre a reflexivas y cierra con cerradas para acordar.',
      'Cuando el entrevistado solo tiene disponibilidad de 5 minutos y responde monosílabos.',
      'Parte de preguntas abiertas profundas y concluye con preguntas abiertas de prospección.',
      'Aplica únicamente preguntas cerradas predefinidas para tabular resultados estadísticos.'
    ],
    correctIndex: 0,
    explanation: 'El esquema romboidal equilibra la entrevista: inicia cerrado (contexto), se expande a lo reflexivo (abierto) y cierra acotando acuerdos (cerrado).',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'entrevistas-abiertas-cerradas-estrategias',
      page: 'Pág. 9',
      exactQuote: '3. Esquema Romboidal (Mixto equilibrado): Comienza con preguntas cerradas de contexto, se expande a preguntas abiertas reflexivas, y concluye con preguntas cerradas para sintetizar y acordar conclusiones.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q49',
    unitId: 'unidad-3-1',
    question: '¿En qué contexto empresarial resulta especialmente recomendada la técnica JAD (Joint Application Development)?',
    options: [
      'Cuando el proyecto involucra un único analista y un solo usuario administrativo.',
      'Usuarios intranquilos, necesidad de cambios profundos y búsqueda de consenso grupal.',
      'Cuando se desea evitar el uso de ayudas visuales, pizarras y moderadores de debate.',
      'Proyectos donde los requerimientos están 100% estabilizados y no requieren debate.'
    ],
    correctIndex: 1,
    explanation: 'El JAD es ideal cuando se requiere desbloquear trabas departamentales y alinear a directivos y usuarios en un proceso organizado y participativo.',
    citation: {
      unit: 'Unidad 3.1',
      sectionId: 'tecnicas-jad-brainstorming',
      page: 'Pág. 10',
      exactQuote: '¿Cuándo se recomienda JAD?: Cuando los usuarios están intranquilos, buscan cambios profundos y se anticipa que el consenso grupal superará los bloqueos departamentales.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q50',
    unitId: 'unidad-3-2',
    question: 'En una Historia de Usuario (HU), ¿qué representa la "Prueba Funcional"?',
    options: [
      'El diagrama de Gantt que detalla el presupuesto y horas asignadas a la historia.',
      'El código fuente ejecutable compilado en el entorno de desarrollo del programador.',
      'El conjunto de criterios de aceptación que verifican si la historia está cumplida.',
      'El acta formal de entrega firmada por los directivos de la empresa contratante.'
    ],
    correctIndex: 2,
    explanation: 'La prueba funcional en una HU establece los criterios de aceptación medibles y observables que confirman que la funcionalidad responde a la necesidad del usuario.',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'anatomia-historia-usuario',
      page: 'Pág. 11',
      exactQuote: '• Prueba Funcional (Criterios de Aceptación observables).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q51',
    unitId: 'unidad-3-2',
    question: '¿Cuál es la estimación típica de tiempo para el desarrollo de una Historia de Usuario individual en una iteración ágil?',
    options: [
      'Menos de 24 horas de desarrollo continuo.',
      'Entre 6 meses y un año calendario.',
      'Las historias de usuario nunca se estiman en tiempo.',
      'Entre 1 a 3 semanas de trabajo.'
    ],
    correctIndex: 3,
    explanation: 'En las metodologías ágiles, las historias de usuario deben tener un tamaño granular que permita completarlas típicamente en 1 a 3 semanas (un sprint o iteración).',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'anatomia-historia-usuario',
      page: 'Pág. 11',
      exactQuote: '• Estimación de tiempo (habitualmente entre 1 a 3 semanas por iteración).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q52',
    unitId: 'unidad-3-2',
    question: '¿Cómo se gestionan operativamente las Historias de Usuario para el seguimiento diario del equipo ágil?',
    options: [
      'Se descomponen en tareas técnicas en un tablero Kanban (Por hacer ➔ En curso ➔ Hecho).',
      'Se redactan en informes impresos mensuales archivados en la dirección del proyecto.',
      'Se envían por correo electrónico a cada programador sin registrar su estado visual.',
      'Se gestionan exclusivamente mediante llamadas telefónicas diarias con el cliente.'
    ],
    correctIndex: 0,
    explanation: 'Las HU se descomponen en tareas unitarias que van transitando por las columnas del tablero Kanban para visibilizar el avance continuo.',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'anatomia-historia-usuario',
      page: 'Pág. 11',
      exactQuote: 'Descomposición operativa: Cada historia de usuario se descompone en tareas unitarias técnicas, con las que se alimenta el tablero de seguimiento Kanban (Propuesta -> En proceso -> Hecha).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q53',
    unitId: 'unidad-3-2',
    question: 'Según el Manifiesto Ágil, ¿cuál es la medida primordial y directa de progreso en un proyecto?',
    options: [
      'La cantidad de páginas de especificación y modelos UML aprobados.',
      'El software funcionando.',
      'El número de horas trabajadas registradas por los desarrolladores.',
      'El porcentaje del presupuesto financiero que ha sido ejecutado.'
    ],
    correctIndex: 1,
    explanation: 'Uno de los postulados cardinales del Manifiesto Ágil dicta que el software funcionando es la principal y más confiable medida de progreso.',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'principios-manifiesto-agil',
      page: 'Pág. 12',
      exactQuote: '• El software funcionando es la principal medida de progreso real.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q54',
    unitId: 'unidad-3-2',
    question: '¿Cuál es la postura del Manifiesto Ágil respecto a los requerimientos cambiantes en fases avanzadas del proyecto?',
    options: [
      'Rechazar todo cambio posterior a la etapa de diseño aplicando penalidades contractuales.',
      'Aceptar únicamente cambios que no alteren la arquitectura de software ni el código base.',
      'Aprovechar los cambios, aun en etapas tardías, como ventaja competitiva para el cliente.',
      'Cancelar el proyecto y renegociar un nuevo contrato desde cero con el departamento legal.'
    ],
    correctIndex: 2,
    explanation: 'La agilidad acepta el cambio como una oportunidad de valor y ventaja competitiva, reconociendo que la realidad del negocio evoluciona.',
    citation: {
      unit: 'Unidad 3.2',
      sectionId: 'principios-manifiesto-agil',
      page: 'Pág. 12',
      exactQuote: '• Aceptar que los requisitos cambien, incluso en etapas avanzadas del desarrollo; el cambio es una ventaja competitiva.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q55',
    unitId: 'unidad-4',
    question: '¿Cuáles son las 6 funciones fundamentales que cumple el documento SRS en un proyecto de software?',
    options: [
      'Compilación, Ensamblado, Depuración, Despliegue, Enlace y Optimización de código.',
      'Facturación, Auditoría contable, Liquidación de haberes, Impuestos, Cobranzas y Créditos.',
      'Publicidad, Posicionamiento web, Ventas, Relaciones públicas, Redes sociales y Prensa.',
      'Comunicación, Contrato, Costos, Planificación, Validación/Verificación y Gestión de cambios.'
    ],
    correctIndex: 3,
    explanation: 'El documento SRS sirve como puente de comunicación, contrato formal, base para costos, instrumento de planificación, criterio de V&V y herramienta de gestión del cambio.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'documentacion-srs-funciones',
      page: 'Pág. 12',
      exactQuote: 'Las 6 Funciones Fundamentales del SRS: 1. Comunicación... 2. Contrato... 3. Costos... 4. Planificación del Proyecto... 5. Validación y Verificación (V&V)... 6. Gestión de Cambios.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q56',
    unitId: 'unidad-4',
    question: 'En la redacción formal de un SRS, ¿cómo debe formularse el estilo gramatical de los enunciados de requerimientos?',
    options: [
      'Tono imperativo y directo: "El sistema debe <verbo>..." reflejando una obligación formal.',
      'Modo condicional o consultivo: "Sería conveniente si el sistema pudiera procesar...".',
      'Primera persona del singular: "Yo necesito que la aplicación muestre la pantalla de...".',
      'Preguntas retóricas abiertas: "¿De qué manera gestionará el software las consultas de...?".'
    ],
    correctIndex: 0,
    explanation: 'Las especificaciones deben usar oraciones imperativas unívocas: "El sistema debe...", evitando términos vagos o condicionales.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'documentacion-vs-modelos-principios',
      page: 'Pág. 13',
      exactQuote: '• Redacción Imperativa y Clara: Las oraciones deben formularse siempre en tono imperativo unívoco: "El sistema debe permitir...", "El sistema debe registrar...".'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q57',
    unitId: 'unidad-4',
    question: '¿Qué establece el "Principio de Circularidad" en la elaboración de especificaciones de requerimientos?',
    options: [
      'Que el ciclo de vida del software debe iterar indefinidamente sin desplegar a producción.',
      'Coherencia semántica: cada término utilizado se apoya en conceptos formalmente definidos.',
      'Que los diagramas de casos de uso y estados deben representarse siempre con geometrías curvas.',
      'Que las reuniones de seguimiento deben realizarse en mesas circulares para nivelar jerarquías.'
    ],
    correctIndex: 1,
    explanation: 'El Principio de Circularidad asegura que todo término especializado o concepto usado en el SRS tenga un soporte unívoco y coherente en las definiciones del documento.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'documentacion-vs-modelos-principios',
      page: 'Pág. 13',
      exactQuote: '• Principio de Circularidad: La coherencia semántica interna donde cada término se apoya en conceptos definidos.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q58',
    unitId: 'unidad-4',
    question: '¿Para qué necesita el documento SRS el equipo de Operaciones e Infraestructura?',
    options: [
      'Para capacitar a los usuarios finales en el uso de las interfaces de pantalla.',
      'Diseñar los casos de prueba unitarios para verificar la lógica de los algoritmos.',
      'Dimensionar servidores, almacenamiento y ancho de banda según carga y concurrencia.',
      'Redactar las actas notariales de rescisión contractual en caso de incumplimientos.'
    ],
    correctIndex: 2,
    explanation: 'Operaciones analiza los RNF de concurrencia, carga transaccional y disponibilidad del SRS para aprovisionar hardware, redes y servidores adecuados.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'audiencias-srs-estandares',
      page: 'Pág. 13',
      exactQuote: '• Operaciones: Determinan infraestructura de servidores, red, almacenamiento según carga y concurrencia.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q59',
    unitId: 'unidad-4',
    question: '¿Qué aspectos clasifica formalmente el estándar internacional ISO/IEC 9126 mencionado en la unidad?',
    options: [
      'Las tablas salariales mínimas sugeridas para profesionales de ingeniería de sistemas.',
      'Protocolos de comunicación serial y cableado estructurado para redes de área local.',
      'Métricas de productividad basadas exclusivamente en líneas de código fuente por día.',
      'Atributos de calidad: Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad.'
    ],
    correctIndex: 3,
    explanation: 'La norma ISO/IEC 9126 establece el marco taxonómico internacional para clasificar la calidad del software en sus 6 características fundamentales.',
    citation: {
      unit: 'Unidad 4',
      sectionId: 'audiencias-srs-estandares',
      page: 'Pág. 14',
      exactQuote: '• ISO/IEC 9126: Estándar de calidad que clasifica los atributos no funcionales: Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Portabilidad y Mantenibilidad.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q60',
    unitId: 'unidad-5',
    question: 'En SysML, ¿cuál es el propósito de la relación de dependencia estereotipada <<derive>> (derivación)?',
    options: [
      'Modela cómo de un requisito fuente de alto nivel se deducen requisitos más detallados.',
      'Indica que un requerimiento es copia textual idéntica de otro documento externo.',
      'Vincula un requerimiento con el caso de prueba unitario que certifica su cumplimiento.',
      'Declara que un componente de software satisface plenamente una cota de rendimiento.'
    ],
    correctIndex: 0,
    explanation: 'La relación <<derive>> especifica que un requerimiento más específico o detallado se deduce analíticamente de un requerimiento de nivel superior.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'relaciones-dependencia-sysml',
      page: 'Pág. 15',
      exactQuote: '• Derivación (<<derive>>): Modela cómo de un requerimiento fuente de alto nivel surgen nuevos requerimientos derivados.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q61',
    unitId: 'unidad-5',
    question: 'En SysML, ¿cómo opera la relación de Agregación (<<composite>>) entre requerimientos?',
    options: [
      'Los sub-requerimientos se eliminan si el requerimiento padre se asigna a otro módulo.',
      'El requerimiento padre se satisface solo si todos sus sub-requerimientos lo están.',
      'Permite que dos requerimientos hijos mantengan declaraciones deliberadamente opuestas.',
      'Establece que el requerimiento padre hereda las interfaces físicas de sus componentes.'
    ],
    correctIndex: 1,
    explanation: 'En la composición de SysML, el requerimiento compuesto de nivel superior se considera formalmente cumplido cuando todos y cada uno de sus sub-requerimientos son satisfechos.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'relaciones-dependencia-sysml',
      page: 'Pág. 15',
      exactQuote: '• Agregación (<<composite>>): Descompone un requerimiento complejo en sub-requerimientos más simples. El requerimiento padre queda satisfecho cuando todos sus sub-requerimientos consolidados se satisfacen.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q62',
    unitId: 'unidad-5',
    question: 'En SysML, ¿qué relación estereotipada se emplea para indicar que un requerimiento es detallado mediante un Caso de Uso o un Diagrama de Actividades?',
    options: [
      '<<verify>>',
      '<<derive>>',
      '<<refine>>',
      '<<satisfy>>'
    ],
    correctIndex: 2,
    explanation: '<<refine>> (refinamiento) se utiliza cuando un requerimiento textual se ilustra o detalla con mayor precisión mediante un modelo gráfico de comportamiento.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'relaciones-dependencia-sysml',
      page: 'Pág. 16',
      exactQuote: '• Refinamiento (<<refine>>): Permite detallar un requerimiento mediante un caso de uso o diagrama de actividades más ilustrativo.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q63',
    unitId: 'unidad-5',
    question: 'En SysML, ¿qué rol cumple la relación estereotipada <<satisfy>> (satisfacción)?',
    options: [
      'Vincula un requerimiento con el presupuesto económico aprobado por el cliente.',
      'Permite duplicar el texto del requerimiento en múltiples especificaciones técnicas.',
      'Mide el índice porcentual de satisfacción de los usuarios con la interfaz gráfica.',
      'Expresa que un elemento de diseño o arquitectura da cumplimiento al requerimiento.'
    ],
    correctIndex: 3,
    explanation: '<<satisfy>> enlaza un requerimiento con el elemento concreto de hardware o software que lo cumple (ej. un sensor que satisface un rango de temperatura).',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'relaciones-dependencia-sysml',
      page: 'Pág. 16',
      exactQuote: '• Satisfacción (<<satisfy>>): Especifica que un elemento físico o componente de diseño satisface un requerimiento (ej. un sensor específico satisface una cota de temperatura).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q64',
    unitId: 'unidad-5',
    question: 'En la taxonomía FURPS+, ¿qué contempla específicamente la categoría "S" (Supportability / Soportabilidad)?',
    options: [
      'Facilidad de mantenimiento, extensibilidad, configurabilidad y portabilidad.',
      'La tasa de transferencia de datos en megabits por segundo del servidor web.',
      'El horario de atención telefónica brindado por el servicio de soporte técnico.',
      'La tolerancia ante fallos físicos y la capacidad de recuperación ante desastres.'
    ],
    correctIndex: 0,
    explanation: 'Supportability (soportabilidad) agrupa la mantenibilidad, extensibilidad, facilidad de configuración, compatibilidad y portabilidad de la solución.',
    citation: {
      unit: 'Unidad 5',
      sectionId: 'clasificacion-furps-plus',
      page: 'Pág. 16',
      exactQuote: '• S - Soportabilidad (Supportability): Facilidad de mantenimiento, extensibilidad, configurabilidad, compatibilidad y portabilidad.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q65',
    unitId: 'unidad-6',
    question: '¿Cuál de las siguientes premisas define la naturaleza de un Caso de Uso en UML?',
    options: [
      'Una acción elemental indivisible del tipo presionar un botón o tipear un texto.',
      'Secuencia de interacciones entre actor y sistema que produce un resultado de valor observable.',
      'Una tabla relacional de base de datos con sus correspondientes claves foráneas.',
      'Un componente arquitectónico desplegado en un contenedor del servidor de aplicaciones.'
    ],
    correctIndex: 1,
    explanation: 'Un caso de uso nunca es un paso atómico suelto, sino un diálogo completo que entrega un valor tangible y observable al actor (ej. "Emitir Factura").',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'concepto-caso-de-uso',
      page: 'Pág. 16',
      exactQuote: 'Características esenciales: Provee un valor cuantificable y perceptible para ese actor. Es completo en sí mismo (cubre el ciclo completo de la meta).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q66',
    unitId: 'unidad-6',
    question: 'En un modelo de casos de uso, ¿cuál de los siguientes elementos puede actuar formalmente como un "Actor"?',
    options: [
      'Exclusivamente un ser humano que opera como usuario directo de la aplicación.',
      'Cualquier método u operación definida dentro de una clase de diseño del sistema.',
      'Un rol de usuario, un sistema informático externo o un dispositivo físico sensor.',
      'La base de datos relacional interna donde se guardan las tablas del sistema.'
    ],
    correctIndex: 2,
    explanation: 'Cualquier entidad externa al límite del sistema que interactúe activamente puede ser actor: personas en un rol, sistemas externos o sensores/hardware.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'concepto-actor-tipos',
      page: 'Pág. 17',
      exactQuote: '¿Quién o qué puede ser un actor?: Una persona física en un determinado rol, otro sistema informático externo, un dispositivo automático de captura de datos o medición física (ej. un sensor de temperatura, lector biométrico).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q67',
    unitId: 'unidad-6',
    question: '¿Qué relación gráfica conecta directamente a un Actor con un Caso de Uso con el que interactúa?',
    options: [
      'Una flecha discontinua de dependencia estereotipada <<include>>.',
      'Una relación de agregación con rombo blanco en el extremo del actor.',
      'Una línea de trazo discontinuo con el estereotipo <<extend>>.',
      'Una línea continua de Asociación que indica comunicación directa.'
    ],
    correctIndex: 3,
    explanation: 'Entre un actor y un caso de uso la relación que se dibuja es una línea sólida de Asociación (comunicación bidireccional).',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'relaciones-casos-de-uso',
      page: 'Pág. 18',
      exactQuote: '1. Asociación (Línea continua): Conecta al Actor con el Caso de Uso con el cual interactúa.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q68',
    unitId: 'unidad-6',
    question: '¿Cómo se aplica la relación de "Generalización" entre Casos de Uso en UML?',
    options: [
      'Modela un caso de uso general que se especializa en casos de uso más específicos.',
      'Indica que un caso de uso se ejecuta necesariamente después del otro en el tiempo.',
      'Convierte un caso de uso funcional en una restricción de calidad no funcional.',
      'Vincula un caso de uso con su pantalla correspondiente en la interfaz de usuario.'
    ],
    correctIndex: 0,
    explanation: 'La generalización entre CU modela especialización: el caso de uso hijo hereda el objetivo y pasos del padre, añadiendo su comportamiento particular (ej. "Pago con Tarjeta" especializa "Realizar Pago").',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'relaciones-casos-de-uso',
      page: 'Pág. 19',
      exactQuote: 'Entre Casos de Uso: Un caso de uso abstracto se especializa en casos de uso concretos (ej. "Consultar Ventas" especializado en "Ventas por Zona", "Ventas por Período" o "Ventas por Volumen").'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q69',
    unitId: 'unidad-6',
    question: '¿Qué distingue a los Casos de Uso del Nivel de Negocio de los Casos de Uso del Nivel de Sistema?',
    options: [
      'Negocio: programados en Python; Sistema: construidos en microservicios sobre la nube.',
      'Negocio: procesos globales y valor hacia clientes; Sistema: requisitos de software.',
      'Negocio: sin actores externos; Sistema: exclusivamente con actores de hardware físico.',
      'Negocio: flujos de excepción; Sistema: flujos principales del camino básico del éxito.'
    ],
    correctIndex: 1,
    explanation: 'Los CU de negocio abarcan el flujo organizacional global; los CU de sistema delimitan la frontera del software y la interacción con la aplicación informática.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'relaciones-casos-de-uso',
      page: 'Pág. 20',
      exactQuote: 'Granularidad de los Casos de Uso: Vista del Nivel Negocio: Procesos globales orientados a directivos y clientes. Vista del Nivel Sistema: Requisitos de software detallados para diseñadores y desarrolladores.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q70',
    unitId: 'unidad-6',
    question: 'En la especificación formal de un Caso de Uso, ¿qué restricción fundamental rige sobre las Precondiciones?',
    options: [
      'Pueden no cumplirse y el caso de uso se desviará automáticamente hacia una excepción.',
      'Son opcionales y solo se aplican en los casos de uso conectados mediante <<extend>>.',
      'Deben ser verdaderas antes de iniciar; si fallan, el caso de uso no puede ejecutarse.',
      'Se evalúan únicamente al finalizar el caso de uso para verificar que se guardó el registro.'
    ],
    correctIndex: 2,
    explanation: 'Las precondiciones son condiciones lógicas que deben satisfacerse antes del disparo. Si no se cumplen, el caso de uso no puede dar inicio.',
    citation: {
      unit: 'Unidad 6',
      sectionId: 'especificacion-caso-de-uso',
      page: 'Pág. 20',
      exactQuote: 'No contradigas las pre-condiciones en los escenarios alternativos. La pre-condición debe cumplirse SIEMPRE antes de iniciar el caso de uso.'
    },
    difficulty: 'avanzado'
  }
];

const SEMESTER_1_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc1',
    unitId: 'unidad-1-1',
    front: '¿Cuál es la diferencia entre Análisis y Diseño de Sistemas?',
    back: 'Análisis = Proceso del descubrimiento para COMPRENDER la realidad y el problema.\nDiseño = Arte del compromiso para HACER y CREAR la solución arquitectónica.',
    category: 'Fundamentos',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc2',
    unitId: 'unidad-1-1',
    front: '¿Cuál es la diferencia entre Metodología y Proceso?',
    back: 'Metodología = Versión ESTÁTICA que reúne métodos, técnicas, herramientas y roles.\nProceso = Versión DINÁMICA: la ejecución en tiempo real de una instancia de la metodología.',
    category: 'Terminología',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc3',
    unitId: 'unidad-1-2-1-4',
    front: '¿Qué diferencia una Actividad de una Acción en UML?',
    back: 'Actividad = Ejecución no atómica en curso que produce cambios de estado o valores.\nAcción = Ejecución atómica, indivisible, expresada como [Verbo + Objeto].',
    category: 'Modelado UML',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc4',
    unitId: 'unidad-2-1',
    front: '¿Qué es el Ciclo de Deming y cuáles son sus fases?',
    back: 'Marco de mejora continua para la resolución de problemas:\n1. Planear (Plan)\n2. Hacer (Do)\n3. Verificar (Check)\n4. Actuar (Act)',
    category: 'Requerimientos',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc5',
    unitId: 'unidad-2-1',
    front: '¿Qué criterios SMART deben cumplir los RNF?',
    back: '• S: Específico (Specific)\n• M: Medible (Measurable)\n• A: Alcanzable (Attainable)\n• R: Realizable (Realizable)\n• T: Rastreable (Traceable)',
    category: 'Calidad RNF',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc6',
    unitId: 'unidad-3-1',
    front: '¿Cuáles son los 4 principios fundamentales de la técnica JAD (IBM 1977)?',
    back: '1. Dinámica grupal.\n2. Ayuda visual para la comunicación.\n3. Proceso organizado y racional.\n4. Foco definido sobre lo que se generará.',
    category: 'Elicitación',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc7',
    unitId: 'unidad-3-1',
    front: '¿Cuándo usar Esquema Piramidal vs Piramidal Inverso en entrevistas?',
    back: '• Piramidal (pocas cerradas -> muchas abiertas): Cuando el entrevistado necesita motivación o romper el hielo.\n• Piramidal Inverso (pocas abiertas -> muchas cerradas): Cuando el usuario tiende a dispersarse y necesitas acotar.',
    category: 'Entrevistas',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc8',
    unitId: 'unidad-3-2',
    front: '¿Qué elementos componen una Historia de Usuario (HU)?',
    back: 'Número/ID, nombre, fecha, tipo de actividad, prueba funcional (criterio de aceptación), prioridad, estimación de tiempo (1-3 semanas) y dependencias.',
    category: 'Agilidad',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc9',
    unitId: 'unidad-4',
    front: '¿Qué principios lingüísticos rigen la redacción del documento SRS?',
    back: '• Principio de Circularidad.\n• Principio de Lenguaje Mínimo.\n• Oraciones imperativas y directas: "El Sistema debe...".\n• Formato indentado jerárquico.',
    category: 'Especificación SRS',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc10',
    unitId: 'unidad-5',
    front: '¿Qué es la Trazabilidad en SysML?',
    back: 'Relación de requerimientos con otros requerimientos o elementos de diseño/implementación para conocer el impacto que ocasiona el cambio de un requisito.',
    category: 'SysML',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc11',
    unitId: 'unidad-6',
    front: '¿Cuál es la diferencia entre <<include>> y <<extend>> en Casos de Uso?',
    back: '• <<include>>: OBLIGATORIO. El caso base no se completa sin él; descompone comportamiento común.\n• <<extend>>: OPCIONAL Y CONDICIONAL. Solo se ejecuta si se cumple la condición en el punto de extensión.',
    category: 'Casos de Uso',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc12',
    unitId: 'unidad-6',
    front: '¿Qué relación pueden tener dos Actores en UML?',
    back: 'ÚNICAMENTE Generalización (herencia jerárquica). Los actores nunca se relacionan mediante asociación, include o extend entre sí.',
    category: 'Casos de Uso',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc25',
    unitId: 'unidad-1-1',
    front: '¿Cuál es la diferencia entre Análisis y Síntesis en el pensamiento sistémico?',
    back: '• Análisis = Conocemos (descomponemos el todo en sus partes constitutivas para analizarlas).\n• Síntesis = Comprendemos (integramos las partes para entender el funcionamiento dinámico del todo).',
    category: 'Pensamiento Sistémico',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc26',
    unitId: 'unidad-1-1',
    front: '¿Cómo se define formalmente una "Técnica" en la cátedra?',
    back: 'Es el "cómo se hace una cosa": conjunto de procedimientos y recursos de los que se sirve una ciencia o arte, optimizado dentro de los límites de un contexto probado y aplicado.',
    category: 'Terminología',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc27',
    unitId: 'unidad-1-1',
    front: '¿Qué distingue el objetivo de la Ingeniería de Sistemas del de la Ingeniería de Software?',
    back: '• Ing. de Sistemas: Enfocada en el estudio de sistemas de información para comprender la realidad y abordar la complejidad del negocio.\n• Ing. de Software: Enfocada en la producción y evolución disciplinada de productos de software de alta calidad bajo tiempo y costo.',
    category: 'Fundamentos',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc28',
    unitId: 'unidad-1-1',
    front: '¿Qué roles fundamentales desempeñan el Analista y el Diseñador de Sistemas?',
    back: '• Analista = El Investigador (descubre, indaga necesidades, empático, analiza y sintetiza la realidad).\n• Diseñador = El Arquitecto (creador y constructor que formula la solución técnica viable y conoce las plataformas).',
    category: 'Roles y Perfiles',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc29',
    unitId: 'unidad-1-1',
    front: '¿Qué compone el Producto del Software y a qué equivale según el SDLC?',
    back: 'Programas de computadora + Procedimientos operativos + Documentación asociada + Diagramas/modelos + Datos de operación = CONOCIMIENTO ACUMULADO de la organización.',
    category: 'Ciclo de Vida (SDLC)',
    unitTitle: 'Unidad 1.1'
  },
  {
    id: 'fc30',
    unitId: 'unidad-1-2-1-4',
    front: '¿Cuál es la diferencia entre el Nodo Final de Actividad y el Fin de Hilo de Ejecución (X) en UML?',
    back: '• Fin de Actividad (círculo con aro concéntrico): Detiene TODA la actividad global por completo.\n• Fin de Hilo (círculo con X): Finaliza solo esa rama concurrente individual sin detener los demás hilos paralelos activos.',
    category: 'Diagramas de Actividad',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc31',
    unitId: 'unidad-1-2-1-4',
    front: '¿Qué diferencia una barra de Fork de una barra de Join en UML?',
    back: '• Fork (Bifurcación): Divide un único flujo entrante en múltiples flujos paralelos concurrentes.\n• Join (Unión/Sincronización): Espera que finalicen todos los flujos entrantes concurrentes para habilitar el siguiente paso.',
    category: 'Diagramas de Actividad',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc32',
    unitId: 'unidad-1-2-1-4',
    front: '¿Qué propósito cumplen los Swimlanes (Carriles) en el modelado de actividades?',
    back: 'Asignar visualmente la responsabilidad de ejecución de cada acción o actividad a un actor, área organizativa, departamento o subsistema tecnológico.',
    category: 'Diagramas de Actividad',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc33',
    unitId: 'unidad-1-2-1-4',
    front: '¿Qué indican los marcadores X, + y O en las compuertas de BPMN?',
    back: '• Exclusiva (X): Se elige exactamente UNA ruta según la condición evaluada.\n• Paralela (+): Se bifurcan o sincronizan TODOS los caminos a la vez.\n• Inclusiva (O): Uno o varios caminos válidos pueden activarse simultáneamente.',
    category: 'Notación BPMN',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc34',
    unitId: 'unidad-1-2-1-4',
    front: '¿Cómo se diferencian un Pool y un Lane en BPMN?',
    back: '• Pool: Representa una organización o entidad externa e independiente en el proceso.\n• Lane: Subdivisión dentro del pool que delimita roles, áreas o departamentos específicos.',
    category: 'Notación BPMN',
    unitTitle: 'Unidad 1.2 - 1.4'
  },
  {
    id: 'fc35',
    unitId: 'unidad-2-1',
    front: '¿Cómo define la cátedra el concepto de "Problema"?',
    back: 'Es el estado de la realidad diferente al esperado, deseado o planificado. No es solo un fallo, sino una oportunidad u optimización superadora para la evolución del negocio.',
    category: 'Requerimientos',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc36',
    unitId: 'unidad-2-1',
    front: '¿Cuáles son las 4 fases del Ciclo de Deming (PDCA) y qué hace cada una?',
    back: '1. Plan (Planear): Identificar oportunidades y planificar metas.\n2. Do (Hacer): Ejecutar las acciones planificadas.\n3. Check (Verificar): Medir resultados contra los objetivos.\n4. Act (Actuar): Estandarizar la solución o corregir desvíos.',
    category: 'Ciclo Deming',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc37',
    unitId: 'unidad-2-1',
    front: '¿Qué es un Stakeholder según la cátedra?',
    back: 'Es cualquier individuo, grupo u organización con potencial impacto o interés en el sistema: aquellos que pueden "ganar o perder" con el resultado del proyecto.',
    category: 'Stakeholders',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc38',
    unitId: 'unidad-2-1',
    front: '¿Qué distingue fundamentalmente a un Requerimiento Funcional (RF) de un RNF?',
    back: '• RF (El Qué): Funciones concretas y transformaciones de entradas en salidas que el sistema realiza.\n• RNF (El Cómo): Restricciones de rendimiento, seguridad, fiabilidad, normativas y diseño que condicionan al sistema.',
    category: 'RF vs RNF',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc39',
    unitId: 'unidad-2-1',
    front: '¿Por qué un RNF debe ser "Medible" según los criterios SMART?',
    back: 'Porque debe permitir evaluar cuantitativamente el grado de cumplimiento mediante métricas objetivas (evitando ambigüedades como "el sistema debe ser rápido").',
    category: 'Criterios SMART',
    unitTitle: 'Unidad 2.1'
  },
  {
    id: 'fc40',
    unitId: 'unidad-3-1',
    front: '¿Por qué la elicitación es un proceso humano y social antes que meramente tecnológico?',
    back: 'Porque involucra relaciones interpersonales, temores al reemplazo tecnológico, resistencias al cambio, jergas disonantes y conflictos de interés entre departamentos.',
    category: 'Elicitación',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc41',
    unitId: 'unidad-3-1',
    front: '¿Qué establece la curva exponencial del costo de los errores de requerimientos?',
    back: 'Cuanto más tarde se detecte un error en el ciclo de vida (diseño, codificación o pruebas), exponencialmente más costoso y traumático será repararlo.',
    category: 'Costo del Error',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc42',
    unitId: 'unidad-3-1',
    front: '¿Cuándo conviene utilizar una estructura de entrevista Piramidal Inversa?',
    back: 'Cuando el entrevistado tiende a dispersarse o divagar: se arranca con preguntas abiertas amplias y rápidamente se acota con preguntas cerradas precisas.',
    category: 'Entrevistas',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc43',
    unitId: 'unidad-3-1',
    front: '¿En qué consiste el Esquema Romboidal en una entrevista?',
    back: 'Estructura mixta: Inicia con preguntas cerradas de ambientación, se expande con preguntas abiertas profundas y cierra con preguntas cerradas para resumir y fijar acuerdos.',
    category: 'Entrevistas',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc44',
    unitId: 'unidad-3-1',
    front: '¿Cuáles son los 4 principios fundamentales de la metodología JAD (IBM 1977)?',
    back: '1. Dinámica grupal.\n2. Ayudas visuales activas.\n3. Proceso organizado y racional.\n4. Foco definido en lo que se debe generar.',
    category: 'Técnica JAD',
    unitTitle: 'Unidad 3.1'
  },
  {
    id: 'fc45',
    unitId: 'unidad-3-2',
    front: '¿Cuáles son los metadatos clave que definen una Historia de Usuario?',
    back: 'ID/Número, Nombre, Fecha, Tipo de actividad, Prueba funcional (criterio de aceptación), Prioridad, Estimación (1-3 semanas) y Dependencias.',
    category: 'Historias de Usuario',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc46',
    unitId: 'unidad-3-2',
    front: '¿Cómo se articulan las Historias de Usuario con el tablero Kanban?',
    back: 'Cada Historia de Usuario se descompone en tareas técnicas unitarias que transitan por las columnas del tablero: Propuesta ➔ En Proceso ➔ Hecha.',
    category: 'Tablero Kanban',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc47',
    unitId: 'unidad-3-2',
    front: 'Según el Manifiesto Ágil, ¿cuál es la principal medida de progreso real?',
    back: 'El software funcionando (working software) entregado con frecuencia y validado por el usuario, por encima de la cantidad de documentación acumulada.',
    category: 'Manifiesto Ágil',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc48',
    unitId: 'unidad-3-2',
    front: '¿Cómo concibe la agilidad los cambios tardíos en los requerimientos?',
    back: 'Da la bienvenida al cambio, incluso en etapas avanzadas, transformándolo en una ventaja competitiva para el cliente.',
    category: 'Manifiesto Ágil',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc49',
    unitId: 'unidad-3-2',
    front: 'Según los principios ágiles, ¿cuál es el método más eficiente de comunicación?',
    back: 'La conversación directa y presencial cara a cara entre los miembros del equipo y los responsables del negocio.',
    category: 'Manifiesto Ágil',
    unitTitle: 'Unidad 3.2'
  },
  {
    id: 'fc50',
    unitId: 'unidad-4',
    front: '¿Cuáles son las 6 funciones clave del documento SRS/ERS?',
    back: '1. Comunicación (puente unívoco).\n2. Contrato (compromiso formal).\n3. Costos (presupuestación).\n4. Planificación (hitos y cronograma).\n5. Validación y Verificación (V&V).\n6. Gestión de Cambios (medición de impacto).',
    category: 'Documentación SRS',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc51',
    unitId: 'unidad-4',
    front: '¿Cuál es la regla lingüística para oraciones en un SRS?',
    back: 'Emplear lenguaje natural controlado imperativo y directo: "El sistema debe <verbo>...", con formato indentado para reflejar la jerarquía lógica.',
    category: 'Redacción SRS',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc52',
    unitId: 'unidad-4',
    front: '¿En qué consiste el Principio de Circularidad en la redacción de requerimientos?',
    back: 'En asegurar la coherencia semántica interna de la especificación, garantizando que cada término empleado se fundamente en conceptos ya definidos.',
    category: 'Redacción SRS',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc53',
    unitId: 'unidad-4',
    front: '¿Para qué utiliza el SRS el área de Operaciones e Infraestructura?',
    back: 'Para dimensionar servidores, memoria, ancho de banda y almacenamiento en función de la concurrencia, carga transaccional y disponibilidad exigidas.',
    category: 'Audiencias SRS',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc54',
    unitId: 'unidad-4',
    front: '¿Qué atributos de calidad clasifica la norma ISO/IEC 9126?',
    back: 'Clasifica los 6 factores de calidad del software: Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Mantenibilidad y Portabilidad.',
    category: 'Estándares de Calidad',
    unitTitle: 'Unidad 4'
  },
  {
    id: 'fc55',
    unitId: 'unidad-5',
    front: '¿Qué modela la dependencia <<derive>> en diagramas de requerimientos SysML?',
    back: 'Modela cómo a partir de un requerimiento fuente de alto nivel surgen requerimientos derivados con mayor nivel de concreción técnica.',
    category: 'SysML',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc56',
    unitId: 'unidad-5',
    front: '¿Cuál es la regla de satisfacción en una relación <<composite>> de SysML?',
    back: 'Descompone un requerimiento padre en sub-requerimientos: el padre solo se considera satisfecho cuando TODOS sus sub-requerimientos se satisfacen.',
    category: 'SysML',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc57',
    unitId: 'unidad-5',
    front: '¿Qué función cumple la relación <<refine>> en SysML?',
    back: 'Permite refinar y detallar un requerimiento textual asociándolo a un modelo de comportamiento (como un Caso de Uso o Diagrama de Actividades).',
    category: 'SysML',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc58',
    unitId: 'unidad-5',
    front: '¿Qué vincula la dependencia <<satisfy>> en SysML?',
    back: 'Vincula un componente concreto de diseño (lógico o físico/hardware) con el requerimiento que dicho elemento se encarga de satisfacer.',
    category: 'SysML',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc59',
    unitId: 'unidad-5',
    front: '¿Qué representa el "+" en la clasificación de requerimientos FURPS+?',
    back: 'Engloba restricciones adicionales: restricciones de diseño, de implementación, requisitos de interfaz física y normativas legales o estándares obligatorios.',
    category: 'Taxonomía FURPS+',
    unitTitle: 'Unidad 5'
  },
  {
    id: 'fc60',
    unitId: 'unidad-6',
    front: '¿Por qué un Caso de Uso debe ser una "unidad funcional completa"?',
    back: 'Porque debe abarcar el diálogo completo que produce un resultado observable de valor medible para el actor (ej. "Emitir Factura", no solo "Hacer clic en Confirmar").',
    category: 'Casos de Uso',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc61',
    unitId: 'unidad-6',
    front: '¿Qué tipos de entidades pueden asumir el rol de Actor en Casos de Uso?',
    back: '• Personas físicas en un rol determinado (Cliente, Cajero).\n• Sistemas o subsistemas externos de software.\n• Dispositivos automáticos o sensores de hardware (ej. lector biométrico).',
    category: 'Actores',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc62',
    unitId: 'unidad-6',
    front: '¿Qué relación gráfica une a un Actor con un Caso de Uso?',
    back: 'Una línea continua simple de Asociación, que representa la comunicación e interacción bidireccional entre la entidad externa y el sistema.',
    category: 'Casos de Uso',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc63',
    unitId: 'unidad-6',
    front: '¿En qué consiste la Generalización entre Casos de Uso?',
    back: 'Un caso de uso general (habitualmente abstracto) define la estructura base y es especializado por casos de uso concretos (ej. "Realizar Pago" ➔ "Pago con Tarjeta" / "Pago en Efectivo").',
    category: 'Relaciones UML',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc64',
    unitId: 'unidad-6',
    front: '¿Cómo difieren los Casos de Uso del Negocio de los del Sistema?',
    back: '• Nivel Negocio: Abstrae los macroprocesos y la propuesta de valor organizacional hacia clientes y directivos.\n• Nivel Sistema: Especifica los requisitos e interacciones concretas con el software para desarrolladores.',
    category: 'Granularidad CU',
    unitTitle: 'Unidad 6'
  },
  {
    id: 'fc65',
    unitId: 'unidad-6',
    front: '¿Cuál es la regla de oro de las Precondiciones en la especificación de un Caso de Uso?',
    back: 'Deben ser verdaderas antes del inicio (si no, el CU no arranca). Ningún escenario alternativo o flujo secundario puede contradecir o violar las precondiciones establecidas.',
    category: 'Especificación CU',
    unitTitle: 'Unidad 6'
  }
];

export const UNITS_DATA: Unit[] = [
  ...SEMESTER_1_UNITS,
  ...SEMESTER_2_UNITS
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...SEMESTER_1_QUIZ_QUESTIONS,
  ...SEMESTER_2_QUIZ_QUESTIONS
];

export const FLASHCARDS_DATA: Flashcard[] = [
  ...SEMESTER_1_FLASHCARDS,
  ...SEMESTER_2_FLASHCARDS
];
