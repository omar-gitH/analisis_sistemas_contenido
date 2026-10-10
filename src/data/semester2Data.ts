import { Unit, QuizQuestion, Flashcard } from '../types';

export const SEMESTER_2_UNITS: Unit[] = [
  {
    id: 'unidad-clases',
    code: '7',
    title: 'Diagrama de Clases (Modelado Estático)',
    description: 'Estructura de clases, visibilidad, operaciones, atributos, relaciones, agregación, composición, clases de asociación e interfaces.',
    pages: 'Págs. 21-25',
    semester: '2C',
    sections: [
      {
        id: 'definicion-clase-encapsulamiento',
        title: 'Definición de Clase y Principio de Encapsulamiento',
        summary: 'Una clase describe un conjunto de objetos que comparten atributos, operaciones, relaciones y semántica. El encapsulamiento protege los datos (data hiding).',
        content: [
          'Un diagrama de clases describe la vista estática del sistema: muestra las clases y sus relaciones.',
          '¿Qué es una clase?: Descripción de un conjunto de objetos que comparten los mismos atributos, operaciones, relaciones y semántica.',
          'Estructura básica: Se representa en un rectángulo dividido en compartimentos: NombreClase, Atributos, Operaciones y Responsabilidades.',
          'Visibilidad de atributos y operaciones (Encapsulamiento / Ocultamiento de información):',
          '• Privada (-): Accesible únicamente por objetos de la clase donde está definido el elemento.',
          '• Protegida (#): Accesible por la propia clase y los objetos de sus subclases.',
          '• Pública (+): Accesible por objetos de cualquier clase del sistema.'
        ],
        keyTerms: [
          { term: 'Encapsulamiento', definition: 'Principio fundamental de ocultamiento de datos (data hiding) para proteger el estado interno.' },
          { term: 'Visibilidad Privada (-)', definition: 'Solo visible en el ámbito interno donde está definido el atributo u operación.' },
          { term: 'Visibilidad Protegida (#)', definition: 'Accesible únicamente para la clase y sus subclases heredadas.' },
          { term: 'Visibilidad Pública (+)', definition: 'Accesible desde cualquier objeto u operación externa.' }
        ],
        diagram: {
          type: 'class_diagram',
          caption: 'Diagrama de Clases: Estructura, Visibilidad (- / # / +) y Propiedades'
        },
        smartTakeaway: 'El encapsulamiento preserva la integridad del sistema: los atributos suelen ser privados (-) y se accede a ellos mediante operaciones públicas (+).',
        readingTimeMinutes: 3
      },
      {
        id: 'sintaxis-atributos-operaciones',
        title: 'Sintaxis y Propiedades de Atributos y Operaciones',
        summary: 'Especificación formal de atributos ({frozen, changeable, addOnly}) y operaciones ({isQuery, sequential, guarded, concurrent}).',
        content: [
          'Sintaxis de un Atributo: [visibilidad] nombre [multiplicidad] [:tipo] [=valor inicial] [{lista propiedades}]',
          '• El nombre del atributo debe comenzar con minúscula.',
          '• Propiedades del atributo: changeable (modificable por defecto), addOnly (solo permite agregar elementos), frozen (inmutable una vez asignado).',
          'Sintaxis de una Operación: [visibilidad] nombre ([lista de parámetros]) [:tipo de retorno] [{propiedades}]',
          'Declaración de parámetros: [dirección] nombre: tipo [multiplicidad] [=valor]',
          'Dirección del parámetro:',
          '• in: La operación puede modificar el parámetro y el llamador no necesita volver a verlo.',
          '• out: La operación coloca o altera el parámetro y lo devuelve explícitamente al llamador.',
          '• inout: La operación utiliza el parámetro y puede modificarlo para devolverlo.',
          'Propiedades de una Operación:',
          '• isQuery: Función pura sin efectos laterales; no modifica el valor de ningún atributo.',
          '• sequential: Solo admite una llamada a la vez (no thread-safe).',
          '• guarded: Atiende una llamada a la vez mediante exclusión mutua / bloqueo.',
          '• concurrent: Admite múltiples llamadas concurrentes de manera segura.'
        ],
        smartTakeaway: 'Una operación marcada con {isQuery} garantiza que su ejecución es de solo lectura y nunca producirá efectos colaterales en los atributos.',
        readingTimeMinutes: 3
      },
      {
        id: 'relaciones-asociacion-clase-asociacion',
        title: 'Asociaciones, Multiplicidad y Clase de Asociación',
        summary: 'Conexión semántica estructural. Navegabilidad, multiplicidades, clases enumerativas y clases de asociación (* a *).',
        content: [
          'Asociación: Es una relación estructural que especifica que los objetos de un elemento están conectados con los objetos de otro. Indica conocimiento.',
          '• Navegabilidad (->): Limita el flujo de conocimiento a una sola dirección. Por defecto es bidireccional.',
          '• Rol: Nombre con el cual una clase se expone a otra en la relación (se convierte en variable de instancia en el código).',
          '• Multiplicidad: Indica cuántos objetos pueden conectarse a través de una instancia (ej. 1, 0..1, 0..*, 1..*, rango 3..6).',
          'Clase de Asociación: Se modela cuando entre dos clases existe multiplicidad máxima de muchos en ambos extremos (0..* a 0..*) y existen atributos propios que pertenecen a la relación (ej. Inquilino e Inmueble se asocian mediante la clase Contrato, con fechaInicio, fechaFin y montoMensual).',
          'Clase Enumerativa (<<enumeration>>): Permite definir estados discretos tipificados para un atributo (ej. EstadoCivil, EstadoContrato, Prioridad).'
        ],
        smartTakeaway: 'Cuando dos clases tienen relación muchos a muchos y hay datos propios del vínculo, esos datos NO van en ninguna de las dos clases: se crea una Clase de Asociación.',
        readingTimeMinutes: 3
      },
      {
        id: 'agregacion-composicion-generalizacion-interfaces',
        title: 'Agregación, Composición, Herencia e Interfaces',
        summary: 'Todo/parte débil vs fuerte, herencia con discriminadores, clases abstractas e interfaces sin atributos.',
        content: [
          'Agregación (Rombo vacío ◇ del lado del todo): Asociación especial "todo/parte" donde las partes pueden existir independientemente del conjunto (ej. Equipo ◇── Miembro).',
          'Composición (Rombo relleno ◆ del lado del todo): Agregación con fuerte sentido de posesión y ciclos de vida coincidentes. Una parte pertenece solo a una composición. Cuando el todo desaparece, sus partes son destruidas (ej. Automóvil ◆── Motor).',
          'Identificación de clases de dominio (Método Craig Larman): Se identifican sustantivos significativos en las especificaciones de requerimientos o categorías de clases conceptuales.',
          'Generalización (Herencia): Relación "es-un" entre superclase y subclase. Puede enriquecerse con discriminadores (criterio de especialización) y restricciones.',
          'Clases Abstractas vs Interfaces:',
          '• Clase Abstracta: No puede instanciar objetos. Provee signaturas y puede tener métodos con implementación y atributos.',
          '• Interfaz (<<interfaz>>): Colección de operaciones que especifican un servicio. Las interfaces NO TIENEN ATRIBUTOS y todas sus operaciones son puramente abstractas sin implementación.'
        ],
        smartTakeaway: 'Diferencia de oro: La interfaz define un contrato de servicio sin atributos; la clase abstracta define una plantilla estructural que puede contener atributos y código base.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-estados',
    code: '8',
    title: 'Máquinas de Estados (Modelado Dinámico)',
    description: 'Comportamiento dinámico de una clase individual: estados, eventos, condiciones de guarda, acciones, entry/do/exit y auto-transiciones.',
    pages: 'Págs. 26-29',
    semester: '2C',
    sections: [
      {
        id: 'concepto-maquina-estados',
        title: 'Concepto de Modelado Dinámico y Máquina de Estados',
        summary: 'Caracteriza el cambio en un sistema. Especifica el comportamiento de UNA CLASE EN PARTICULAR a lo largo del tiempo.',
        content: [
          'Modelado Dinámico: Caracteriza el cambio en un sistema; los objetos que lo componen modifican su estado interno como respuesta a sucesos (eventos) y al paso del tiempo.',
          'REGLA FUNDAMENTAL DE CÁTEDRA: Un diagrama de máquina de estados SIEMPRE modela el comportamiento de UNA CLASE EN PARTICULAR dentro del dominio de análisis.',
          'Bloques de construcción:',
          '• Estado: Describe un período de tiempo durante la vida de un objeto. Mientras permanece en él, puede realizar una actividad, esperar un evento o satisfacer condiciones.',
          '• Nomenclatura del Estado: Nombre corto y significativo que inicia con mayúscula, redactado en pasado participio (Comprado, Enviado), adjetivo (Inactivo) o gerundio (Validando).',
          '• Tipos de Estado: Estado Simple y Estado Compuesto (con subestados secuenciales o concurrentes/ortogonales).',
          '• Pseudo-Estados: Estado Inicial (círculo relleno), Estado Final (círculo con aro concéntrico) y Estado de Historia (H). Delimitan el ciclo de vida sin poseer disparador.'
        ],
        diagram: {
          type: 'state_machine',
          caption: 'Diagrama de Estados: Ciclo de Vida, Pseudo-Estados y Ejecución entry / do / exit'
        },
        smartTakeaway: 'Una máquina de estados nunca modela un proceso global del negocio entero; describe exhaustivamente la vida y transformaciones de UNA clase individual.',
        readingTimeMinutes: 3
      },
      {
        id: 'transiciones-eventos-guardas-acciones',
        title: 'Transiciones, Eventos, Condiciones de Guarda y Acciones',
        summary: 'Fórmula canónica evento[guarda]/acción. Ocurrencia en el ambiente y semántica de las transiciones.',
        content: [
          'Una transición es una relación dirigida entre dos estados que indica un cambio de estado del objeto (desde estado origen a estado destino).',
          'Fórmula canónica de una Transición: evento [condicionDeGuarda] / accion()',
          '1. Evento: Es la especificación de un acontecimiento significativo en un momento específico. Sucede en el ambiente y el sistema tiene una respuesta programada ante él. Puede ser la invocación de un método (modelado como caso de uso: verbo + objeto), el paso del tiempo o una señal.',
          '2. Condición de Guarda: Expresión lógica entre corchetes [ ] que se evalúa al dispararse el evento. Debe ser estrictamente verdadera para que la transición ocurra.',
          '3. Acción: Computación atómica que produce un cambio en el modelo o retorno de un valor como consecuencia directa de la transición.'
        ],
        smartTakeaway: 'El evento dispara la transición; la guarda decide si se permite pasar; la acción es lo que se ejecuta durante el cruce.',
        readingTimeMinutes: 2
      },
      {
        id: 'etiquetas-avanzadas-autotransiciones',
        title: 'Etiquetas Avanzadas (entry, do, exit) y Auto-Transiciones',
        summary: 'Ciclo de vida de acciones internas y orden riguroso de ejecución en auto-transiciones.',
        content: [
          'Dentro de un estado pueden definirse acciones internas con etiquetas específicas:',
          '• entry / accion(): Se ejecuta inmediatamente cada vez que el objeto ingresa al estado. No admite parámetros ni condiciones de guarda.',
          '• do / actividad(): Actividad continua que se ejecuta mientras el objeto permanece en el estado.',
          '• exit / accion(): Se ejecuta inmediatamente antes de transitar hacia otro estado.',
          'ORDEN ESTRICTO EN AUTO-TRANSICIÓN (Pregunta típica de parcial):',
          'Cuando una transición tiene el mismo estado como origen y destino (auto-transición):',
          '1. Se ejecuta primero la acción de salida del estado: exit / ...',
          '2. Luego se ejecuta la acción propia asociada a la transición: / accion()',
          '3. Por último se ejecuta la acción de entrada al estado: entry / ...'
        ],
        smartTakeaway: 'En una auto-transición el objeto SALE y VUELVE A ENTRAR formalmente al estado: siempre se dispara exit -> acción -> entry.',
        readingTimeMinutes: 2
      }
    ]
  },
  {
    id: 'unidad-hu-invest',
    code: '9',
    title: 'Historias de Usuario Prácticas & Criterios INVEST',
    description: 'Estructura ágil, plantilla Yo como / Quiero / Para, escenarios Given-When-Then y atributos INVEST.',
    pages: 'Págs. 30-33',
    semester: '2C',
    sections: [
      {
        id: 'plantilla-escritura-historias',
        title: 'Estructura y Redacción de Historias de Usuario',
        summary: 'Piezas textuales sintéticas y orientadas al valor. Plantilla de las 3 oraciones y foco en el beneficio del usuario.',
        content: [
          'La Historia de Usuario describe lo que el software necesita hacer desde la perspectiva del cliente/usuario.',
          'Plantilla estándar obligatoria:',
          'Yo como <usuario/rol>',
          'Necesito / deseo / quiero <funcionalidad>',
          'Para <beneficio de negocio>',
          'REGLA CLAVE: El beneficio del negocio NO debe formularse como un beneficio para el sistema o la base de datos, sino como el VALOR real que le aporta al usuario final.',
          'Ejemplo: "Yo como Jefe de Recursos Humanos necesito visualizar diariamente el listado de empleados ausentes para conocer el estado de situación y tomar decisiones de reubicación del personal".'
        ],
        keyTerms: [
          { term: 'Historia de Usuario', definition: 'Pieza textual sintética que formula una necesidad y el valor concreto que aporta al cliente.' },
          { term: 'Beneficio de Negocio', definition: 'El valor o impacto tangible recibido por el rol del usuario, no por la aplicación.' }
        ],
        diagram: {
          type: 'user_story_invest',
          caption: 'Historias de Usuario: Atributos INVEST y Criterios Given-When-Then'
        },
        smartTakeaway: 'Nunca redactes "Para que el sistema guarde los datos en la tabla"; redacta "Para reducir los tiempos de cobranza a menos de 24 horas".',
        readingTimeMinutes: 2
      },
      {
        id: 'criterios-aceptacion-invest',
        title: 'Criterios de Aceptación (Given-When-Then) y Atributos INVEST',
        summary: 'Validación por escenarios de contexto-evento-consecuencia y verificación de calidad con el acrónimo INVEST.',
        content: [
          'Criterios de Aceptación / Aplicación: Validaciones de datos y condiciones escritas mediante escenarios que definen cuándo la historia se considera terminada.',
          'Formato Canónico de Escenario:',
          'Dada <circunstancia contextual previa>',
          'Cuando <evento o acción del usuario>',
          'Entonces <respuesta, validación o consecuencia del sistema>',
          'Atributos de Calidad INVEST:',
          '• I - Independiente: Puede desarrollarse y planificarse en cualquier orden.',
          '• N - Negociada: Abierta al diálogo y ajustes colaborativos con el cliente.',
          '• V - Valiosa: Entrega valor observable directo para el cliente.',
          '• E - Estimable: Suficientemente clara para que el equipo estime esfuerzo y plazos.',
          '• S - Small (Pequeña): Tamaño adecuado para una iteración (1 a 3 semanas).',
          '• T - Testeable: Permite diseñar una prueba funcional objetiva de aceptación.'
        ],
        smartTakeaway: 'El formato Dada/Cuando/Entonces convierte los deseos subjetivos en pruebas objetivas que determinan cuándo una historia está finalizada.',
        readingTimeMinutes: 3
      }
    ]
  },
  {
    id: 'unidad-especificacion-cu',
    code: '10',
    title: 'Especificación Formal de Casos de Uso & Diálogos',
    description: 'Evolución textual del caso de uso, plantilla de 4 secciones, sintaxis Sujeto-Verbo-Objeto y anotaciones de clase.',
    pages: 'Págs. 34-38',
    semester: '2C',
    sections: [
      {
        id: 'anatomia-especificacion-caso-uso',
        title: 'Estructura y Secciones de la Especificación de un Caso de Uso',
        summary: 'El documento textual formal que describe la interacción detallada entre actores y el sistema al instanciarse el CU.',
        content: [
          'La especificación representa la evolución textual indispensable del modelado gráfico del Caso de Uso.',
          'Las 4 Secciones Fundamentales de la Plantilla:',
          '1. Sección de Identificación: Número identificatorio, Nombre del Caso de Uso, Objetivo, Paquete al que pertenece, Prioridad (Alta, Media, Baja), Categoría (Esencial, Soporte), Tipo (Concreto, Abstracto), Actor Principal (quien dispara el CU) y Actores Secundarios.',
          '2. Sección Diálogo: Flujo secuencial de eventos. Escenario Principal (camino feliz de éxito), Escenarios Alternativos y Escenarios de Excepción. Especifica qué casos de uso incluye (<<include>>) y cuáles lo extienden (<<extend>>).',
          '3. Sección Recursos y Restricciones (RNF): Precondiciones (deben ser verdaderas para iniciar la ejecución), Post-condiciones (garantías de estado final al terminar con éxito), Reglas de negocio y RNF aplicables.',
          '4. Sección Gestión: Control de versiones, autor, fecha de aprobación y bitácora de cambios.'
        ],
        diagram: {
          type: 'use_case_spec',
          caption: 'Plantilla Formal de Especificación de Casos de Uso: 4 Secciones de Control'
        },
        smartTakeaway: 'El diagrama de casos de uso muestra el mapa de navegación; la especificación escrita detalla cada paso de la conversación paso a paso.',
        readingTimeMinutes: 3
      },
      {
        id: 'sintaxis-dialogo-reglas-catedra',
        title: 'Sintaxis del Diálogo, Pre/Post-Condiciones y Reglas de Cátedra',
        summary: 'Regla de oro: <paso> Sujeto + Verbo + Objeto. Diferencia entre escenarios alternativos y de excepción.',
        content: [
          'Sintaxis Obligatoria en el Diálogo: <paso> Sujeto + Verbo + Objeto (ej. "1. El Cliente ingresa el código PIN").',
          'Notas y tips de cátedra:',
          '• Cuando el sujeto es el Caso de Uso o Sistema, significa que el software ejecuta la tarea de manera autónoma.',
          '• El diálogo no es obligatoriamente un "uno y uno" rígido entre actor y sistema; pueden darse pasos sucesivos del mismo actor o del sistema.',
          '• Escenarios Alternativos vs Escenarios de Excepción:',
          '  - Escenarios Alternativos: Representan otros caminos posibles dentro del flujo para lograr el objetivo.',
          '  - Escenarios de Excepción: Situaciones anómalas que abortan la operación o terminan la ejecución del caso de uso (ej. tarjeta vencida o sin fondos).',
          '• Nomenclatura de ramificaciones: Letra minúscula vinculada al paso (ej. 4a: escenario alternativo del paso 4).',
          '• Precondiciones y Postcondiciones: Son expresiones booleanas lógicas. Si la precondición no se cumple (Falsa), el programa NO se inicia. Nunca deben contradecirse mutuamente.'
        ],
        smartTakeaway: 'Un escenario alternativo permite cumplir el objetivo por otra vía; un escenario de excepción cancela y termina la operación.',
        readingTimeMinutes: 3
      }
    ]
  }
];

export const SEMESTER_2_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q19',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'En un diagrama de clases UML, ¿cuál es el símbolo y alcance de la visibilidad protegida?',
    options: [
      'Símbolo (#), accesible por la propia clase y por todas sus subclases.',
      'Símbolo (-), accesible únicamente por la clase donde está definida.',
      'Símbolo (+), accesible públicamente por cualquier objeto del sistema.',
      'Símbolo (~), accesible exclusivamente por clases del mismo paquete.'
    ],
    correctIndex: 0,
    explanation: 'La visibilidad protegida se denota con "#" y permite que el atributo u operación sea accedido por los objetos de la propia clase y por todas sus subclases heredadas.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'definicion-clase-encapsulamiento',
      page: '2C · Diag. Clases Pág. 1',
      exactQuote: 'Protegida (#): objetos de las subclases.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q20',
    unitId: 'unidad-clases',
    semester: '2C',
    question: '¿Qué garantiza la propiedad {isQuery} en la declaración de una operación de una clase?',
    options: [
      'Que la operación atiende múltiples peticiones concurrentes de red.',
      'La operación no altera ningún atributo (función pura sin efectos laterales).',
      'Que solo puede llegar una llamada por vez mediante exclusión mutua.',
      'Que la operación es polimórfica y debe redefinirse en las subclases.'
    ],
    correctIndex: 1,
    explanation: 'El documento indica: "isQuery: indica que la operación no cambia el valor de ningún atributo. La operación es una función pura sin efectos laterales".',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'sintaxis-atributos-operaciones',
      page: '2C · Diag. Clases Pág. 1',
      exactQuote: 'isQuery: indica que la operación no cambia el valor de ningún atributo. La operación es una función pura sin efectos laterales.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q21',
    unitId: 'unidad-clases',
    semester: '2C',
    question: '¿Cuándo es necesario modelar una Clase de Asociación en UML?',
    options: [
      'Cuando dos clases se relacionan mediante agregación débil con rombo vacío.',
      'Cuando una clase hereda simultáneamente de dos superclases abstractas.',
      'Asociación con multiplicidad muchos a muchos (*..*) y atributos propios del vínculo.',
      'Cuando la relación entre dos clases es estrictamente reflexiva y temporal.'
    ],
    correctIndex: 2,
    explanation: 'Se modela una clase de asociación cuando la asociación tiene multiplicidad muchos a muchos (*..*) y surgen atributos propios del vínculo (ej. Inquilino e Inmueble con la clase Contrato).',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'relaciones-asociacion-clase-asociacion',
      page: '2C · Diag. Clases Pág. 3',
      exactQuote: 'Se modela cuando: dada una asociación entre dos clases y en ambos extremos la multiplicidad máxima es muchos (*) y existen atributos propios de la relación.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q22',
    unitId: 'unidad-clases',
    semester: '2C',
    question: '¿Cuál es la diferencia sustancial entre Agregación y Composición en el diagrama de clases?',
    options: [
      'En agregación las partes mueren con el todo; en composición subsisten.',
      'La agregación usa rombo negro relleno y la composición usa rombo blanco vacío.',
      'La composición requiere multiplicidad reflexiva; la agregación solo binaria.',
      'Composición: coincidencia de ciclo de vida; Agregación: las partes subsisten al todo.'
    ],
    correctIndex: 3,
    explanation: 'En la composición (rombo relleno), las partes pertenecen exclusivamente a ese todo y mueren con él. En la agregación (rombo vacío), las partes pueden pertenecer a otros conjuntos y subsistir.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'agregacion-composicion-generalizacion-interfaces',
      page: '2C · Diag. Clases Pág. 4',
      exactQuote: 'Composición: es una forma de agregación, con fuerte sentido de posesión y tiempo de vida coincidentes de las partes con el conjunto... Cuando el todo desaparece, también lo hacen sus partes.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q23',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'En UML, ¿cómo se diferencian semánticamente las Interfaces de las Clases Abstractas?',
    options: [
      'Interfaces: manifiestan operaciones sin implementación; no tienen atributos ni estado.',
      'Interfaces definen atributos protegidos; Clases abstractas solo públicos.',
      'Clases abstractas se instancian directamente; Interfaces nunca admiten polimorfismo.',
      'Interfaces son para lenguajes compilados; Clases abstractas para interpretados.'
    ],
    correctIndex: 0,
    explanation: 'Las interfaces carecen por completo de atributos y no representan un concepto abstracto de la jerarquía; solo especifican una colección de operaciones de servicio que las clases concretas deben realizar.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'agregacion-composicion-generalizacion-interfaces',
      page: '2C · Diag. Clases Pág. 7',
      exactQuote: 'Las interfaces se diferencian de las clases abstractas porque ellas no representan un concepto abstracto, solamente manifiestan un conjunto de operaciones... Las clases tienen atributos, las interfaces no!'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q24',
    unitId: 'unidad-estados',
    semester: '2C',
    question: '¿Qué alcance tiene SIEMPRE un diagrama de Máquina de Estados en UML según los contenidos de la cátedra?',
    options: [
      'Modela el flujo de trabajo global de toda la organización entre departamentos.',
      'Modela el comportamiento dinámico de UNA CLASE PUNTUAL del dominio.',
      'Modela la interacción temporal y mensajes entre múltiples actores del sistema.',
      'Modela la estructura estática de paquetes y componentes de despliegue.'
    ],
    correctIndex: 1,
    explanation: 'El apunte remarca con énfasis: "SIEMPRE modelan el comportamiento de una CLASE EN PARTICULAR dentro de un dominio de análisis, es decir, siempre modelamos una clase que va modificando su estado con el tiempo".',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'concepto-maquina-estados',
      page: '2C · Máq. Estados Pág. 1',
      exactQuote: 'SIEMPRE modelan el comportamiento de una CLASE EN PARTICULAR dentro de un dominio de análisis, es decir, siempre modelamos una clase que va modificando su estado con el tiempo.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q25',
    unitId: 'unidad-estados',
    semester: '2C',
    question: 'En una Máquina de Estados, ¿cuál es el orden exacto de ejecución durante una AUTO-TRANSICIÓN?',
    options: [
      '1. Acción de entrada (entry) ➔ 2. Transición ➔ 3. Acción de salida (exit).',
      '1. Acción de la transición ➔ 2. Salida (exit) ➔ 3. Acción de entrada (entry).',
      '1. Acción de salida (exit) ➔ 2. Acción de la transición ➔ 3. Entrada (entry).',
      '1. Actividad do ➔ 2. Acción de la transición ➔ 3. Actividad do del siguiente.'
    ],
    correctIndex: 2,
    explanation: 'Al transitar hacia sí mismo, el objeto sale del estado (ejecutando exit), efectúa la acción asociada al arco de transición y vuelve a ingresar (ejecutando entry).',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'etiquetas-avanzadas-autotransiciones',
      page: '2C · Máq. Estados Pág. 4',
      exactQuote: 'En una auto-transición el evento que dispara la transición ejecuta primero la acción de salida, luego la acción propia de la auto-transición y por último la acción de entrada.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q26',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: 'En la redacción de Historias de Usuario, ¿a qué debe responder la cláusula "Para <beneficio de negocio>"?',
    options: [
      'Al ahorro de líneas de código o recursos de memoria en el servidor.',
      'Al costo económico en moneda de curso legal de la hora de desarrollo.',
      'Al nombre del componente de software o librería externa a utilizar.',
      'Al valor real que la funcionalidad le aporta al rol o usuario de negocio.'
    ],
    correctIndex: 3,
    explanation: 'El documento resalta: "tener en cuenta que el beneficio del negocio no tiene que ser el beneficio que le da al sistema sino el valor que le aporta al usuario".',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'plantilla-escritura-historias',
      page: '2C · HU Pág. 1',
      exactQuote: 'el beneficio del negocio no tiene que ser el beneficio que le da al sistema sino el valor que le aporta al usuario'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q27',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: '¿Qué significan las siglas del acrónimo INVEST para Historias de Usuario?',
    options: [
      'Independiente, Negociable, Valiosa, Estimable, Small (pequeña) y Testeable.',
      'Iterativa, Numérica, Válida, Estructurada, Secuencial y Terminada.',
      'Inmutable, Nominal, Visual, Estandarizada, Sistémica y Trazable.',
      'Integrada, Normalizada, Variable, Evolutiva, Sólida y Testeable.'
    ],
    correctIndex: 0,
    explanation: 'INVEST representa las 6 características de excelencia de una HU: Independiente, Negociada, Valiosa, Estimable, Small (Pequeña: 1 a 3 semanas) y Testeable.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'criterios-aceptacion-invest',
      page: '2C · HU Pág. 2',
      exactQuote: 'INVEST: Independiente (puede desarrollarse en cualquier orden), Negociada, Valiosa (para el cliente), Estimable, Small/Pequeña, Testeable.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q28',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: 'En la sección Diálogo de una especificación de Caso de Uso, ¿qué sintaxis obligatoria debe respetarse en cada paso?',
    options: [
      '<paso> Verbo en infinitivo + Complemento directo sin sujeto explícito.',
      '<paso> Sujeto + Verbo + Objeto.',
      '<paso> Sentencia condicional Si Condición Entonces Acción.',
      '<paso> Evento disparador + Método invocado en el controlador.'
    ],
    correctIndex: 1,
    explanation: 'La cátedra prescribe de forma estricta: "Siempre respetar PASO - SUJETO - VERBO - OBJETO". Si el sujeto que ejecuta es el caso de uso, denota que es el propio sistema realizando la acción.',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'sintaxis-dialogo-reglas-catedra',
      page: '2C · Espec. CU Pág. 6 y 7',
      exactQuote: 'Sintaxis: <paso>sujeto / verbo / objeto... Siempre respetar PASO -SUJETO - VERBO - OBJETO'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q29',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: '¿Cuál es la diferencia entre un Escenario Alternativo y un Escenario de Excepción en la especificación de un Caso de Uso?',
    options: [
      'Alternativos abortan el sistema; Excepciones continúan por caminos normales.',
      'Alternativos se modelan con rombo; Excepciones con barras de sincronización.',
      'Excepciones terminan o abortan la operación; Alternativos son otras vías para lograr el objetivo.',
      'Alternativos corresponden a errores de hardware; Excepciones a errores del usuario.'
    ],
    correctIndex: 2,
    explanation: 'De las anotaciones de clase: "Los de excepción terminan el sistema, los alternativos no, sino que son otra posibilidad del escenario original".',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'sintaxis-dialogo-reglas-catedra',
      page: '2C · Espec. CU Pág. 7',
      exactQuote: 'Los de excepción terminar el sistema, los alternativos no, sino que son otra posibilidad del escenario original.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q71',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'En la sintaxis de atributos en un diagrama de clases UML, ¿qué garantiza la propiedad estereotipada {frozen}?',
    options: [
      'El atributo solo puede almacenar valores de tipo numérico entero positivo.',
      'El atributo es volátil y debe sincronizarse entre múltiples hilos concurrentes.',
      'El atributo solo puede ser accedido en modo de solo lectura por clases hijas.',
      'Inmutable: su valor no puede volver a modificarse tras su inicialización.'
    ],
    correctIndex: 3,
    explanation: 'La propiedad {frozen} define que el valor del atributo permanece inmutable y fijo una vez inicializado el objeto.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'sintaxis-atributos-operaciones',
      page: '2C · Diag. Clases Pág. 1',
      exactQuote: 'Propiedades del atributo: changeable (modificable por defecto), addOnly (solo permite agregar elementos), frozen (inmutable una vez asignado).'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q72',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'En la declaración de parámetros de una operación UML, ¿qué significa la dirección "inout"?',
    options: [
      'La operación recibe el valor y puede modificarlo para devolverlo al llamador.',
      'El parámetro es de solo lectura y no puede modificarse por la operación.',
      'El parámetro se pasa por valor creando una copia estricta en memoria local.',
      'El parámetro es opcional y toma un valor por defecto si no es provisto.'
    ],
    correctIndex: 0,
    explanation: 'La dirección inout combina entrada y salida: la operación recibe el parámetro, puede alterar su valor y lo retorna modificado al llamador.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'sintaxis-atributos-operaciones',
      page: '2C · Diag. Clases Pág. 2',
      exactQuote: 'inout: La operación utiliza el parámetro y puede modificarlo para devolverlo.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q73',
    unitId: 'unidad-clases',
    semester: '2C',
    question: '¿Qué asegura la propiedad {guarded} en la especificación de una operación de una clase?',
    options: [
      'La operación acepta llamadas concurrentes simultáneas sin ninguna restricción.',
      'Atiende una sola llamada a la vez mediante exclusión mutua para consistencia.',
      'La operación solo puede ejecutarse si el objeto se encuentra en estado Activo.',
      'La operación verifica una precondición booleana antes de iniciar el método.'
    ],
    correctIndex: 1,
    explanation: 'Una operación {guarded} utiliza mecanismos de sincronización (bloqueo/lock) para atender secuencialmente una llamada por vez de forma thread-safe.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'sintaxis-atributos-operaciones',
      page: '2C · Diag. Clases Pág. 2',
      exactQuote: 'guarded: Atiende una llamada a la vez mediante exclusión mutua / bloqueo.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q74',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'En un diagrama de clases UML, ¿qué rol técnico cumple el "Nombre de Rol" en el extremo de una asociación?',
    options: [
      'Indica el nombre del programador o autor de la clase en el repositorio de código.',
      'Define el nombre de la tabla de unión intermedia en una base de datos relacional.',
      'Nombre con el que una clase expone a la otra, convirtiéndose en variable de instancia.',
      'Especifica el alias público de la interfaz para servicios web tipo REST o SOAP.'
    ],
    correctIndex: 2,
    explanation: 'El rol indica la función que cumple el objeto en la asociación y se convierte directamente en el atributo o variable de instancia en el lenguaje de programación.',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'relaciones-asociacion-clase-asociacion',
      page: '2C · Diag. Clases Pág. 3',
      exactQuote: 'Rol: Nombre con el cual una clase se expone a otra en la relación (se convierte en variable de instancia en el código).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q75',
    unitId: 'unidad-clases',
    semester: '2C',
    question: 'Según el método propuesto por Craig Larman para el modelado de clases de dominio, ¿cuál es una estrategia recomendada para identificar clases conceptuales?',
    options: [
      'Aislar los verbos conjugados y traducirlos a nombres de clases abstractas.',
      'Elegir las pantallas de interfaz gráfica y crear una clase por cada botón o input.',
      'Mapear cada sentencia SQL del modelo de datos a una clase de entidad separada.',
      'Buscar sustantivos significativos y analizar listas de categorías conceptuales.'
    ],
    correctIndex: 3,
    explanation: 'Craig Larman propone identificar sustantivos en las descripciones textuales y contrastarlos con categorías de clases conceptuales (roles, transacciones, lugares, etc.).',
    citation: {
      unit: 'Unidad 7 (2C)',
      sectionId: 'agregacion-composicion-generalizacion-interfaces',
      page: '2C · Diag. Clases Pág. 5',
      exactQuote: 'Identificación de clases de dominio (Método Craig Larman): Se identifican sustantivos significativos en las especificaciones de requerimientos o categorías de clases conceptuales.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q76',
    unitId: 'unidad-estados',
    semester: '2C',
    question: 'Según las pautas de nomenclatura de la cátedra, ¿cómo debe redactarse el nombre de un Estado en una Máquina de Estados UML?',
    options: [
      'Participio (ej. "Facturado"), adjetivo ("Activo") o gerundio ("Procesando").',
      'Verbo en infinitivo seguido de objeto (ej. "Validar Factura").',
      'Sustantivo en plural en minúsculas (ej. "facturas_pendientes").',
      'Expresión booleana entre corchetes (ej. "[total > 1000]").'
    ],
    correctIndex: 0,
    explanation: 'Los estados se nombran con mayúscula inicial como participio pasado, adjetivo o gerundio (ej. Enviado, Activo, Validando). Nunca con verbo en infinitivo.',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'concepto-maquina-estados',
      page: '2C · Máq. Estados Pág. 1',
      exactQuote: 'Nomenclatura del Estado: Nombre corto y significativo que inicia con mayúscula, redactado en pasado participio (Comprado, Enviado), adjetivo (Inactivo) o gerundio (Validando).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q77',
    unitId: 'unidad-estados',
    semester: '2C',
    question: 'En una Máquina de Estados, ¿cuál es la característica distintiva de un "Pseudo-Estado Inicial" (círculo negro relleno)?',
    options: [
      'When: evento de tiempo periódico; After: condición booleana continua.',
      'When: evalúa condición booleana; After: mide transcurso de tiempo.',
      'When: captura señales de red; After: captura pulsaciones de teclado.',
      'When: llamada sincrónica; After: mensaje asincrónico entre hilos.'
    ],
    correctIndex: 1,
    explanation: 'El pseudo-estado inicial no es un estado real: no tiene duración temporal, carece de evento disparador y no puede recibir transiciones entrantes.',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'concepto-maquina-estados',
      page: '2C · Máq. Estados Pág. 2',
      exactQuote: 'Pseudo-Estados: Estado Inicial (círculo relleno)... Delimitan el ciclo de vida sin poseer disparador.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q78',
    unitId: 'unidad-estados',
    semester: '2C',
    question: 'En la fórmula canónica de una transición evento [condicionDeGuarda] / accion(), ¿cuándo se evalúa la Condición de Guarda?',
    options: [
      'Una llamada síncrona a una operación donde el emisor se bloquea hasta la respuesta.',
      'Una condición lógica interna del objeto que cambia de valor verdadero a falso.',
      'Comunicación asíncrona explícita entre objetos mediante envío de una señal.',
      'El transcurso de un intervalo de tiempo especificado en milisegundos o segundos.'
    ],
    correctIndex: 2,
    explanation: 'La guarda es una expresión booleana que se evalúa exactamente al producirse el evento. Si resulta verdadera, se ejecuta la transición; si es falsa, el evento se descarta o retiene.',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'transiciones-eventos-guardas-acciones',
      page: '2C · Máq. Estados Pág. 3',
      exactQuote: 'Condición de Guarda: Expresión lógica entre corchetes [ ] que se evalúa al dispararse el evento. Debe ser estrictamente verdadera para que la transición ocurra.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q79',
    unitId: 'unidad-estados',
    semester: '2C',
    question: 'En el comportamiento interno de un estado, ¿qué restricción posee la acción asociada a la etiqueta "entry /"?',
    options: [
      'do: ejecución instantánea indivisible; entry/exit: actividades continuas en el tiempo.',
      'do: evalúa condiciones de guarda; entry/exit: transfieren datos hacia la base de datos.',
      'do: ejecuta transiciones externas; entry/exit: sincronizan subestados concurrentes.',
      'do: actividad continua que puede interrumpirse; entry/exit: acciones atómicas e instantáneas.'
    ],
    correctIndex: 3,
    explanation: 'La acción entry / se ejecuta de forma síncrona e instantánea al entrar al estado, y la especificación UML prohíbe asociarle parámetros o guardas.',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'etiquetas-avanzadas-autotransiciones',
      page: '2C · Máq. Estados Pág. 4',
      exactQuote: 'entry / accion(): Se ejecuta inmediatamente cada vez que el objeto ingresa al estado. No admite parámetros ni condiciones de guarda.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q80',
    unitId: 'unidad-estados',
    semester: '2C',
    question: '¿Qué representa el Pseudo-Estado de Historia (marcado con una letra "H") en un estado compuesto?',
    options: [
      'Regiones concurrentes separadas por líneas de puntos que se ejecutan en simultáneo.',
      'Subestados mutuamente excluyentes donde solo uno puede estar activo a la vez.',
      'Estados que carecen de transiciones de entrada y solo poseen eventos de salida.',
      'Estados terminales que finalizan el ciclo de vida de la clase en memoria.'
    ],
    correctIndex: 0,
    explanation: 'El pseudo-estado de historia memoriza el subestado en el que se encontraba el objeto al producirse una interrupción externa, permitiendo reanudar allí sin recomenzar desde el subestado inicial.',
    citation: {
      unit: 'Unidad 8 (2C)',
      sectionId: 'concepto-maquina-estados',
      page: '2C · Máq. Estados Pág. 2',
      exactQuote: 'Pseudo-Estados: Estado Inicial (círculo relleno), Estado Final (círculo con aro concéntrico) y Estado de Historia (H). Delimitan el ciclo de vida sin poseer disparador.'
    },
    difficulty: 'avanzado'
  },
  {
    id: 'q81',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: 'En la plantilla formal de Historias de Usuario, ¿cuál de los siguientes enunciados cumple correctamente la regla de formulación del "Beneficio de Negocio"?',
    options: [
      'Regiones concurrentes que operan en paralelo compartiendo variables de estado.',
      'Subestados disyuntivos (XOR): el objeto está en exactamente uno de ellos a la vez.',
      'Estados sin acción de entrada pero con múltiples actividades continuas do.',
      'Transiciones que no requieren evento disparador y operan por finalización.'
    ],
    correctIndex: 1,
    explanation: 'El beneficio de negocio debe formularse como valor tangible para el usuario o la organización (reducir esperas), nunca como una conveniencia técnica del software o base de datos.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'plantilla-escritura-historias',
      page: '2C · HU Pág. 1',
      exactQuote: 'REGLA CLAVE: El beneficio del negocio NO debe formularse como un beneficio para el sistema o la base de datos, sino como el VALOR real que le aporta al usuario final.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q82',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: 'En la estructura de Criterios de Aceptación por escenarios, ¿qué elemento corresponde a la cláusula "Dada" (Given)?',
    options: [
      'La interna ejecuta entry y exit; la auto-transición no ejecuta ninguna de las dos.',
      'La interna requiere una guarda de tiempo; la auto-transición solo responde a señales.',
      'Interna: maneja eventos sin salir del estado (no ejecuta exit/entry); Auto-transición: sale y reingresa.',
      'La interna modifica el nombre del estado; la auto-transición restablece los atributos.'
    ],
    correctIndex: 2,
    explanation: 'La cláusula "Dada" (Given) describe el contexto o precondición situacional previa necesaria para que el escenario pueda ocurrir.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'criterios-aceptacion-invest',
      page: '2C · HU Pág. 2',
      exactQuote: 'Dada <circunstancia contextual previa>, Cuando <evento o acción del usuario>, Entonces <respuesta, validación o consecuencia del sistema>.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q83',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: 'Dentro del acrónimo INVEST, ¿qué significa que una Historia de Usuario sea "Independiente" (I)?',
    options: [
      'Una relación de herencia entre una clase abstracta y su implementación concreta.',
      'Una asociación bidireccional donde ambas clases mantienen punteros permanentes.',
      'Una relación de composición donde el ciclo de vida de ambas clases coincide.',
      'Relación "usa un": una clase depende de otra porque la usa como parámetro o variable local.'
    ],
    correctIndex: 3,
    explanation: 'Independiente implica que las historias no tengan dependencias rígidas entre sí, permitiendo al equipo reorganizar y desplegar prioridades con agilidad.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'criterios-aceptacion-invest',
      page: '2C · HU Pág. 2',
      exactQuote: '• I - Independiente: Puede desarrollarse y planificarse en cualquier orden.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q84',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: 'En los atributos INVEST, ¿a qué alude la cualidad "Small" (Pequeña)?',
    options: [
      'Pertenecen a la clase en sí y son compartidos por todas sus instancias (subrayados).',
      'Pertenecen a una instancia específica y se replican en cada objeto creado.',
      'Son de acceso exclusivo para clases declaradas en paquetes de infraestructura.',
      'Son inmutables y no admiten operaciones polimórficas en tiempo de ejecución.'
    ],
    correctIndex: 0,
    explanation: 'Small (pequeña) asegura que la HU tenga el tamaño granular óptimo para planificarse y completarse dentro de una iteración (1 a 3 semanas), facilitando estimaciones confiables.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'criterios-aceptacion-invest',
      page: '2C · HU Pág. 2',
      exactQuote: '• S - Small (Pequeña): Tamaño adecuado para una iteración (1 a 3 semanas).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q85',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    question: '¿Por qué es fundamental que una Historia de Usuario sea "Testeable" (T) según INVEST?',
    options: [
      '0..* exige al menos un objeto asociado; 1..* admite relaciones opcionales vacías.',
      '0..* indica relación opcional (cero o más); 1..* indica presencia obligatoria (uno o más).',
      '0..* solo se aplica en asociaciones reflexivas; 1..* solo en clases de asociación.',
      '0..* indica composición fuerte; 1..* indica agregación compartida con rombo blanco.'
    ],
    correctIndex: 1,
    explanation: 'Testeable (T) garantiza que la HU cuente con criterios de aceptación claros para corroborar de forma objetiva y reproducible si fue completada satisfactoriamente.',
    citation: {
      unit: 'Unidad 9 (2C)',
      sectionId: 'criterios-aceptacion-invest',
      page: '2C · HU Pág. 2',
      exactQuote: '• T - Testeable: Permite diseñar una prueba funcional objetiva de aceptación.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q86',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: '¿Cuáles son las 4 secciones estructurales de la plantilla formal de Especificación de un Caso de Uso?',
    options: [
      'Que las subclases no pueden añadir nuevos atributos ni redefinir métodos heredados.',
      'Que todas las clases del modelo deben derivar obligatoriamente de una clase Raíz común.',
      'Permite tratar objetos de subclases uniformemente a través de la interfaz de la superclase.',
      'Que los métodos estáticos se sobrecargan automáticamente según los parámetros pasados.'
    ],
    correctIndex: 2,
    explanation: 'La plantilla formal de especificación se organiza en: 1. Identificación, 2. Diálogo (flujo de pasos), 3. Recursos y Restricciones (pre/post y RNF), 4. Gestión (versiones).',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'anatomia-especificacion-caso-uso',
      page: '2C · Espec. CU Pág. 1',
      exactQuote: 'Las 4 Secciones Fundamentales de la Plantilla: 1. Sección de Identificación... 2. Sección Diálogo... 3. Sección Recursos y Restricciones (RNF)... 4. Sección Gestión.'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q87',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: 'En la sección Diálogo de una especificación de Caso de Uso, ¿qué denota que el sujeto de un paso sea "El Sistema" o "El Caso de Uso"?',
    options: [
      'Una clase que solo contiene operaciones de persistencia hacia bases de datos relacionales.',
      'Una clase auxiliar que únicamente se utiliza para gestionar pruebas unitarias de software.',
      'Una interfaz gráfica que implementa controladores de eventos para formularios de usuario.',
      'Clase sin instancias que agrupa colecciones de atributos y operaciones globales/estáticas.'
    ],
    correctIndex: 3,
    explanation: 'Cuando el sujeto es "El Caso de Uso" o "El Sistema", se explicita que es el propio software realizando un cálculo, validación o tarea autónoma sin interacción manual.',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'sintaxis-dialogo-reglas-catedra',
      page: '2C · Espec. CU Pág. 6',
      exactQuote: 'Cuando el sujeto es el Caso de Uso o Sistema, significa que el software ejecuta la tarea de manera autónoma.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q88',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: 'Respecto a la alternancia entre Actor y Sistema en la sección Diálogo, ¿cuál de las siguientes afirmaciones es correcta según la cátedra?',
    options: [
      'Diseñar casos para el camino básico (éxito) y casos para cada escenario alternativo y excepción.',
      'Testear únicamente el código fuente compilado mediante herramientas de análisis estático.',
      'Verificar exclusivamente los requerimientos no funcionales de tiempo de respuesta y carga.',
      'Generar pruebas aleatorias de estrés masivo sobre los puertos del servidor web.'
    ],
    correctIndex: 0,
    explanation: 'La cátedra enseña que no existe la regla rígida del "uno y uno": el actor o el sistema pueden realizar múltiples pasos sucesivos si el flujo lo amerita.',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'sintaxis-dialogo-reglas-catedra',
      page: '2C · Espec. CU Pág. 6',
      exactQuote: 'El diálogo no es obligatoriamente un "uno y uno" rígido entre actor y sistema; pueden darse pasos sucesivos del mismo actor o del sistema.'
    },
    difficulty: 'intermedio'
  },
  {
    id: 'q89',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: '¿Cómo se identifican y nombran formalmente los pasos de un Escenario Alternativo en la plantilla de cátedra?',
    options: [
      'Deben ser evaluadas antes del disparo del caso de uso junto con las precondiciones.',
      'Garantizan el estado del sistema tras la finalización exitosa del caso de uso.',
      'Son recomendaciones no vinculantes que los desarrolladores pueden obviar en el código.',
      'Se aplican únicamente cuando el caso de uso es interrumpido por un fallo de hardware.'
    ],
    correctIndex: 1,
    explanation: 'Las bifurcaciones alternativas se rotulan asociando el número del paso principal con una letra minúscula consecutiva (ej. 4a para la primera alternativa del paso 4).',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'sintaxis-dialogo-reglas-catedra',
      page: '2C · Espec. CU Pág. 7',
      exactQuote: 'Nomenclatura de ramificaciones: Letra minúscula vinculada al paso (ej. 4a: escenario alternativo del paso 4).'
    },
    difficulty: 'fácil'
  },
  {
    id: 'q90',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    question: 'En la especificación formal de un Caso de Uso, ¿qué define rigurosamente a una "Post-condición"?',
    options: [
      'El cálculo del costo financiero por cada hora de programación consumida por el equipo.',
      'El registro cronológico de commits y pull requests efectuados en el repositorio Git.',
      'Mapeo formal que vincula cada requerimiento con las clases y componentes que lo implementan.',
      'La asignación de permisos de seguridad de base de datos para cada rol de usuario.'
    ],
    correctIndex: 2,
    explanation: 'La postcondición establece los compromisos y garantías booleanas que el sistema asegura haber alcanzado si el caso de uso finaliza con éxito.',
    citation: {
      unit: 'Unidad 10 (2C)',
      sectionId: 'anatomia-especificacion-caso-uso',
      page: '2C · Espec. CU Pág. 2',
      exactQuote: 'Post-condiciones (garantías de estado final al terminar con éxito).'
    },
    difficulty: 'fácil'
  }
];

export const SEMESTER_2_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc13',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Cuáles son los 3 modificadores de visibilidad en el Diagrama de Clases UML?',
    back: '• Privada (-): Solo visible dentro de la clase.\n• Protegida (#): Visible en la clase y sus subclases.\n• Pública (+): Visible desde cualquier objeto del sistema.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc14',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Qué diferencia Agregación de Composición?',
    back: '• Agregación (Rombo vacío ◇): Todo/parte débil. Las partes subsisten si el todo desaparece.\n• Composición (Rombo relleno ◆): Todo/parte fuerte. Las partes pertenecen a un solo todo y desaparecen con él.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc15',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Cuándo se crea una Clase de Asociación?',
    back: 'Cuando una asociación es muchos a muchos (* a *) y existen atributos propios que pertenecen a la relación en sí y no a ninguna de las dos clases aisladas.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc16',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿En qué se diferencia una Interfaz de una Clase Abstracta?',
    back: 'La Interfaz NO TIENE ATRIBUTOS y todas sus operaciones son signaturas sin código. La Clase Abstracta SÍ puede tener atributos y métodos con implementación.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc17',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Qué modela SIEMPRE un Diagrama de Máquina de Estados?',
    back: 'SIEMPRE modela el comportamiento dinámico de UNA CLASE EN PARTICULAR a lo largo de su ciclo de vida como respuesta a eventos.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc18',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Cuál es el orden de acciones en una Auto-Transición?',
    back: '1. exit / (acción de salida del estado)\n2. / accion (acción propia de la transición)\n3. entry / (acción de entrada al estado)',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc19',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Qué significa la etiqueta do en un estado?',
    back: 'Indica una actividad continua que se ejecuta mientras el objeto permanece en ese estado (ej. do / esperarRespuestaRed()).',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc20',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Qué significa el acrónimo INVEST en Historias de Usuario?',
    back: '• I: Independiente\n• N: Negociada\n• V: Valiosa\n• E: Estimable\n• S: Small (Pequeña, 1-3 semanas)\n• T: Testeable',
    category: 'Historias de Usuario',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc21',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Cuál es la estructura de un Criterio de Aceptación por escenario?',
    back: 'Dada <circunstancia contextual>\nCuando <evento del usuario>\nEntonces <respuesta observable del sistema>',
    category: 'Historias de Usuario',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc22',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Cuál es la regla sintáctica de redacción para diálogos de Casos de Uso?',
    back: '<PASO> SUJETO + VERBO + OBJETO\nEjemplo: "1. El Cliente inserta la tarjeta magnética". Si el sujeto es el CU, el sistema lo hace de forma automática.',
    category: 'Especificación de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc23',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Qué diferencia un escenario alternativo de uno de excepción?',
    back: '• Alternativo: Es otro camino factible que no termina el sistema.\n• De Excepción: Situación que aborta o termina la operación del sistema.',
    category: 'Especificación de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc24',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Qué sucede si una Precondición en una especificación es falsa?',
    back: 'Si la precondición no se cumple, el caso de uso NO se inicia. Son condiciones lógicas estrictas evaluadas antes de comenzar.',
    category: 'Especificación de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc66',
    unitId: 'unidad-clases',
    semester: '2C',
    front: 'En un Diagrama de Clases UML, ¿qué indica la propiedad {frozen} en un atributo?',
    back: 'Indica inmutabilidad estricta: el valor del atributo se fija durante la inicialización del objeto y no puede volver a modificarse.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc67',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Cuáles son las 3 direcciones de parámetros en operaciones UML (in, out, inout)?',
    back: '• in: Parámetro de entrada que la operación lee.\n• out: Parámetro de salida que la operación computa y devuelve al llamador.\n• inout: Parámetro de entrada que la operación puede modificar y devolver alterado.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc68',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Qué garantiza la propiedad {guarded} en una operación de clase?',
    back: 'Garantiza que la operación solo admite una llamada a la vez, aplicando exclusión mutua / bloqueo para una concurrencia segura (thread-safe).',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc69',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Cuál es la equivalencia en código del "Nombre de Rol" en una asociación?',
    back: 'El rol en el extremo de la asociación se traduce en la variable de instancia (atributo de referencia) mediante la cual un objeto conoce y navega al otro.',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc70',
    unitId: 'unidad-clases',
    semester: '2C',
    front: '¿Cuál es la técnica propuesta por Craig Larman para descubrir clases conceptuales del dominio?',
    back: 'Realizar análisis lingüístico identificando sustantivos significativos en la especificación y contrastarlos con listas de categorías de clases conceptuales (roles, transacciones, lugares, etc.).',
    category: 'Diagrama de Clases',
    unitTitle: 'Unidad 7 (2C)'
  },
  {
    id: 'fc71',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Cuál es la regla de nomenclatura para los Estados en UML?',
    back: 'Nombre corto y significativo con mayúscula inicial, redactado en:\n• Pasado participio (Aprobado, Enviado)\n• Adjetivo (Inactivo, Activo)\n• Gerundio (Procesando).\nNunca con verbo en infinitivo.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc72',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Cuál es la estructura canónica formal de una Transición en UML?',
    back: 'evento [condicionDeGuarda] / accion()\n• Evento: Acontecimiento en el ambiente que dispara el cambio.\n• Guarda [ ]: Expresión booleana que habilita el paso.\n• Acción /: Computación atómica ejecutada al cruzar.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc73',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Qué propiedades distinguen al Pseudo-Estado Inicial (círculo relleno)?',
    back: 'Marca el punto de entrada al ciclo de vida del objeto. No es un estado real, carece de evento disparador y no puede recibir transiciones entrantes.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc74',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿En qué se diferencian las etiquetas entry y do dentro de un estado?',
    back: '• entry / accion(): Acción atómica inmediata al ingresar (sin guardas ni parámetros).\n• do / actividad(): Actividad continua que se ejecuta mientras el objeto permanezca dentro del estado.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc75',
    unitId: 'unidad-estados',
    semester: '2C',
    front: '¿Qué función cumple el Pseudo-Estado de Historia (H) en estados compuestos?',
    back: 'Permite que un estado compuesto memorice y restaure el último subestado activo cuando el objeto fue interrumpido externamente, evitando recomenzar desde el subestado inicial.',
    category: 'Máquina de Estados',
    unitTitle: 'Unidad 8 (2C)'
  },
  {
    id: 'fc76',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Cuál es la plantilla estándar de 3 oraciones para una Historia de Usuario?',
    back: '• Yo como <rol/usuario>\n• Necesito / deseo / quiero <funcionalidad>\n• Para <beneficio o valor tangible para el negocio o usuario>.',
    category: 'Historias de Usuario',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc77',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Qué error conceptual debe evitarse al formular el beneficio ("Para...") de una HU?',
    back: 'Confundir el beneficio del usuario con una tarea técnica del sistema (ej. redactar "para que se guarde en la BD" en vez de "para reducir el tiempo de espera del cliente a menos de 5 minutos").',
    category: 'Historias de Usuario',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc78',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Cuál es la estructura canónica Given-When-Then de los Criterios de Aceptación?',
    back: '• Dada <circunstancia contextual previa>\n• Cuando <evento o acción del usuario>\n• Entonces <respuesta o consecuencia observable del sistema>.',
    category: 'Criterios de Aceptación',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc79',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Qué implica que una Historia de Usuario sea "Negociada" (N) en INVEST?',
    back: 'Que no es un contrato cerrado inmutable; es una tarjeta sintética abierta a la conversación y al ajuste colaborativo continuo entre el cliente y el equipo de desarrollo.',
    category: 'Criterios INVEST',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc80',
    unitId: 'unidad-hu-invest',
    semester: '2C',
    front: '¿Qué dimensión temporal caracteriza a una Historia "Small" (S) en INVEST?',
    back: 'Su tamaño y esfuerzo deben permitir que el equipo la complete de inicio a fin dentro de una única iteración de trabajo (típicamente entre 1 y 3 semanas).',
    category: 'Criterios INVEST',
    unitTitle: 'Unidad 9 (2C)'
  },
  {
    id: 'fc81',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Cuáles son las 4 secciones fundamentales en la plantilla de especificación de un Caso de Uso?',
    back: '1. Sección Identificación (ID, nombre, objetivo, actores).\n2. Sección Diálogo (escenario principal, alternativos y excepción).\n3. Sección Recursos y Restricciones (pre/post y RNF).\n4. Sección Gestión (versiones y cambios).',
    category: 'Especificación de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc82',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Qué sintaxis obligatoria debe respetarse en cada paso de la sección Diálogo?',
    back: '<PASO> SUJETO + VERBO + OBJETO\nEjemplo: "2. El Cliente ingresa el código PIN". Garantiza claridad y precisión unívoca.',
    category: 'Diálogo de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc83',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: 'En el diálogo de un Caso de Uso, ¿qué denota que el sujeto sea "El Sistema"?',
    back: 'Significa que la acción es ejecutada de manera autónoma y automatizada por el software, sin intervención directa del usuario.',
    category: 'Diálogo de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc84',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Cómo se identifican formalmente las ramificaciones alternativas en el Diálogo?',
    back: 'Con el número del paso del camino principal acompañado de una letra minúscula consecutiva (ej. paso 4a, 4b) indicando el punto exacto de bifurcación.',
    category: 'Diálogo de CU',
    unitTitle: 'Unidad 10 (2C)'
  },
  {
    id: 'fc85',
    unitId: 'unidad-especificacion-cu',
    semester: '2C',
    front: '¿Cómo se define formalmente una Post-condición en un Caso de Uso?',
    back: 'Es una expresión booleana que garantiza el estado final observable en el que debe quedar el sistema y sus datos (registros creados, estados alterados) al concluir con éxito.',
    category: 'Especificación de CU',
    unitTitle: 'Unidad 10 (2C)'
  }
];
