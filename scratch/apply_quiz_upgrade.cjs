const fs = require('fs');

// Master dictionary of questions:
// id -> { correct, distractors: [d1, d2, d3] }

const S1_UPDATES = {
  q1: {
    correct: 'Sustituyó el enfoque lineal mecanicista por la causalidad circular y la interacción dinámica.',
    distractors: [
      'Postuló que el comportamiento del sistema equivale a la suma aritmética de sus partes aisladas.',
      'Determinó que los sistemas cerrados poseen mayor nivel de organización que los sistemas abiertos.',
      'Estableció que la estructura estática del sistema predomina sobre sus relaciones dinámicas.'
    ]
  },
  q2: {
    correct: 'Metodología es la versión estática (marco y métodos); Proceso es la versión dinámica (ejecución).',
    distractors: [
      'La metodología define las herramientas de software; el proceso establece las normas de gestión.',
      'La metodología se aplica únicamente en cascada; el proceso se utiliza solo en enfoques ágiles.',
      'Metodología es la instancia temporal de ejecución; Proceso es el repositorio estático de reglas.'
    ]
  },
  q3: {
    correct: 'Analista descubre el problema (el qué); Diseñador concibe la solución técnica (el cómo).',
    distractors: [
      'El analista diseña la base de datos; el diseñador realiza las entrevistas con los usuarios.',
      'El analista programa el código fuente; el diseñador se encarga de las pruebas funcionales.',
      'Analista define la viabilidad financiera; Diseñador instala el hardware y redes de servidores.'
    ]
  },
  q4: {
    correct: 'Actividad: ejecución no atómica en curso; Acción: paso atómico e indivisible (verbo + objeto).',
    distractors: [
      'La actividad es atómica y no modificable; la acción representa flujos complejos coordinados.',
      'La actividad modifica el estado del sistema; la acción evalúa únicamente condiciones de guarda.',
      'Actividad modela procesos de negocio en BPMN; Acción modela exclusivamente métodos en UML.'
    ]
  },
  q5: {
    correct: 'Barra de unión o sincronización (Join).',
    distractors: [
      'Rombo de bifurcación condicional (Decision).',
      'Nodo de fin de flujo concurrente (Flow Final).',
      'Barra de división paralela (Fork).'
    ]
  },
  q6: {
    correct: 'Planear, Hacer, Verificar y Actuar (PDCA), enfocado en la mejora continua.',
    distractors: [
      'Definir, Medir, Analizar y Controlar (DMAIC), enfocado en auditorías contables.',
      'Elicitar, Analizar, Diseñar y Construir, enfocado en entregas tempranas de software.',
      'Investigar, Documentar, Probar y Facturar, enfocado en hitos contractuales.'
    ]
  },
  q7: {
    correct: 'Específico, Medible, Alcanzable, Realizable y Rastreable.',
    distractors: [
      'Sistémico, Modular, Automatizado, Repetible y Temporal.',
      'Simple, Mantenible, Abierto, Reutilizable y Testeable.',
      'Seguro, Mitigable, Auditable, Rendidor y Tecnológico.'
    ]
  },
  q8: {
    correct: 'Involucra conflictos de intereses, temores laborales y barreras de comunicación humana.',
    distractors: [
      'Porque prescinde por completo del uso de herramientas informáticas y modelos formales.',
      'Porque el analista de sistemas solo debe interactuar con los directivos de la organización.',
      'Porque los usuarios siempre conocen con precisión el diseño técnico del sistema deseado.'
    ]
  },
  q9: {
    correct: 'Esquema piramidal: inicia con pocas preguntas cerradas y avanza hacia muchas abiertas.',
    distractors: [
      'Esquema piramidal inverso: parte de preguntas abiertas amplias hacia preguntas cerradas.',
      'Esquema romboidal: utiliza preguntas abiertas únicamente en la apertura y en el cierre.',
      'Cuestionario estructurado: aplica solo preguntas cerradas de opción múltiple excluyentes.'
    ]
  },
  q10: {
    correct: 'Dinámica grupal, apoyo visual, proceso organizado/racional y foco en lo que se generará.',
    distractors: [
      'Planificación por sprints, standup diario, retrospectivas y trabajo en parejas.',
      'Muestreo aleatorio, encuestas masivas, análisis de protocolos y observación pasiva.',
      'Prototipado rápido, refactorización continua, pruebas automatizadas y entrega continua.'
    ]
  },
  q11: {
    correct: 'De 1 a 3 semanas.',
    distractors: [
      'Menos de 2 horas en una sola jornada diaria.',
      'Entre 3 y 6 meses de trabajo continuo.',
      'No debe tener ninguna delimitación temporal.'
    ]
  },
  q12: {
    correct: 'Oraciones imperativas directas del tipo "El Sistema debe...", con circularidad y lenguaje mínimo.',
    distractors: [
      'Uso de metáforas literarias descriptivas y tono consultivo condicional ("podría registrar").',
      'Redacción en primera persona del plural ("nosotros crearemos") con jerga técnica informática.',
      'Estructuración en párrafos libres sin numeración jerárquica ni términos estandarizados.'
    ]
  },
  q13: {
    correct: 'Para verificar si el software construido cumple con lo especificado (V&V y RNF).',
    distractors: [
      'Para fijar el presupuesto salarial y los viáticos del equipo de desarrollo.',
      'Para diseñar la arquitectura física y el cableado de red de los servidores.',
      'Para redactar los contratos de confidencialidad legal con los proveedores.'
    ]
  },
  q14: {
    correct: 'Al vínculo entre requerimientos y elementos de diseño para evaluar impacto del cambio.',
    distractors: [
      'A la compilación exitosa de los diagramas de clases a código binario ejecutable.',
      'Al cómputo automático de horas hombre consumidas por los analistas en cada entrevista.',
      'A la exportación sincronizada de modelos SysML a notación de procesos de negocio BPMN.'
    ]
  },
  q15: {
    correct: 'Verificación (<<verify>>)',
    distractors: [
      'Satisfacción (<<satisfy>>)',
      'Refinamiento (<<refine>>)',
      'Derivación (<<derive>>)'
    ]
  },
  q16: {
    correct: 'Es una abstracción de un rol o entidad externa al sistema; explicitar su nombre es mandatorio.',
    distractors: [
      'Es un método de acceso a base de datos programado internamente dentro del sistema.',
      'Es un caso de uso abstracto que no interactúa con ningún usuario del negocio.',
      'Es el subsistema central que procesa las reglas operativas de la organización.'
    ]
  },
  q17: {
    correct: '<<include>> es mandatorio para el caso base; <<extend>> es opcional en un punto de extensión.',
    distractors: [
      '<<include>> es opcional y depende de una guarda; <<extend>> es de ejecución obligatoria.',
      '<<include>> vincula únicamente actores; <<extend>> vincula únicamente casos de uso con datos.',
      '<<include>> describe excepciones de red; <<extend>> descompone funcionalidad común compartida.'
    ]
  },
  q18: {
    correct: 'Generalización (herencia).',
    distractors: [
      'Asociación bidireccional directa.',
      'Inclusión funcional (<<include>>).',
      'Extensión condicional (<<extend>>).'
    ]
  },
  q30: {
    correct: 'El análisis permite conocer (descomponer); la síntesis permite comprender (integrar en el todo).',
    distractors: [
      'El análisis busca comprender el todo; la síntesis descompone el problema en elementos aislados.',
      'El análisis evalúa únicamente los costos; la síntesis modela las clases y componentes técnicos.',
      'El análisis es exclusivo de los desarrolladores; la síntesis es tarea exclusiva del cliente.'
    ]
  },
  q31: {
    correct: 'Cómo se hace una cosa: procedimientos y recursos en un contexto probado y aplicado.',
    distractors: [
      'Conjunto de convicciones filosóficas y paradigmas que sustentan una ciencia.',
      'Herramienta utilitaria de software empleada para construir un producto final.',
      'Versión dinámica e interactiva de un proceso de desarrollo en tiempo real.'
    ]
  },
  q32: {
    correct: 'Sistemas: comprende la realidad y el negocio; Software: producción disciplinada de software.',
    distractors: [
      'Sistemas: administra la infraestructura de servidores; Software: releva requerimientos de usuarios.',
      'Sistemas: construye exclusivamente hardware físico; Software: escribe código de aplicaciones web.',
      'Sistemas: diseña bases de datos relacionales; Software: gestiona contratos legales y presupuestos.'
    ]
  },
  q33: {
    correct: 'Poseer sólida base tecnológica para trazar planos, crear soluciones y evaluar alternativas.',
    distractors: [
      'Indagar los temores laborales y barreras comunicacionales de los usuarios finales.',
      'Descomponer el problema en sus partes elementales sin sugerir soluciones técnicas.',
      'Gestionar las relaciones públicas y los contratos societarios con la gerencia.'
    ]
  },
  q34: {
    correct: 'Programas + procedimientos + documentación + modelos + datos (Conocimiento Acumulado).',
    distractors: [
      'El archivo binario o paquete ejecutable desplegado en el servidor de producción.',
      'El código fuente versionado en repositorio junto con las pruebas unitarias pasadas.',
      'El contrato formal firmado de prestación de servicios y el acta de entrega final.'
    ]
  },
  q35: {
    correct: 'Finaliza ese flujo o camino concurrente puntual sin detener las demás ramas activas.',
    distractors: [
      'Indica la ocurrencia de una excepción no controlada que aborta el sistema completo.',
      'Inicia una bifurcación condicional de dos caminos mutuamente excluyentes.',
      'Representa la sincronización obligatoria de todos los carriles del diagrama.'
    ]
  },
  q36: {
    correct: 'Sincroniza y espera la finalización de múltiples flujos concurrentes para continuar.',
    distractors: [
      'Divide un flujo único de entrada en múltiples ramas concurrentes simultáneas.',
      'Evalúa condiciones booleanas para seleccionar una única rama de ejecución.',
      'Modela el almacenamiento persistente de objetos en una base de datos externa.'
    ]
  },
  q37: {
    correct: 'Asignan la responsabilidad de las actividades a roles, departamentos o subsistemas.',
    distractors: [
      'Representan la escala cronológica de tiempo y duración estimada de cada paso del flujo.',
      'Modelan la jerarquía de paquetes de diseño según el patrón arquitectónico en capas.',
      'Indican el flujo de datos persistentes hacia las tablas de la base de datos relacional.'
    ]
  },
  q38: {
    correct: 'Compuerta exclusiva: desvía el flujo exactamente por una única ruta válida.',
    distractors: [
      'Compuerta paralela: activa todos los caminos concurrentes sin evaluar condiciones.',
      'Compuerta inclusiva: permite activar una o múltiples ramas concurrentes a la vez.',
      'Compuerta compleja: sincroniza flujos basada en expresiones de conteo de eventos.'
    ]
  },
  q39: {
    correct: 'Pool: participante o proceso independiente; Lane: subdivisión de roles interna.',
    distractors: [
      'Pool: departamento interno de la empresa; Lane: entidad corporativa externa.',
      'Pool: flujo de control automatizado; Lane: actividades exclusivamente manuales.',
      'Pool: repositorio de base de datos; Lane: canal de transmisión transaccional.'
    ]
  },
  q40: {
    correct: 'Estado de la realidad diferente al esperado o deseado, que abre una oportunidad de mejora.',
    distractors: [
      'Una falla grave de programación en producción que interrumpe los servicios del servidor.',
      'La falta de presupuesto financiero asignado para la adquisición de nuevo equipamiento.',
      'La omisión de diagramas UML en la documentación de entrega del sistema al cliente.'
    ]
  },
  q41: {
    correct: 'Estandarizar soluciones exitosas o corregir desvíos para reiniciar la mejora.',
    distractors: [
      'Definir los requerimientos iniciales y planificar el cronograma del proyecto.',
      'Ejecutar las tareas planificadas construyendo los módulos de software.',
      'Evaluar mediante métricas objetivas los resultados obtenidos contra el plan.'
    ]
  },
  q42: {
    correct: 'Toda persona u organización con interés o impacto en el sistema (quien gana o pierde).',
    distractors: [
      'Exclusivamente los desarrolladores y analistas que construyen el software.',
      'Únicamente los usuarios finales que cargan datos en las pantallas de la aplicación.',
      'Solo los directivos que firman el contrato y autorizan el desembolso económico.'
    ]
  },
  q43: {
    correct: 'El sistema debe permitir registrar nuevos clientes y emitir su factura de venta.',
    distractors: [
      'El sistema debe cifrar todas las claves almacenadas utilizando el estándar AES-256.',
      'El tiempo de respuesta en consultas de saldo no debe superar 1.5 segundos bajo 400 usuarios.',
      'La aplicación debe garantizar una disponibilidad continua del 99.9% de operatividad anual.'
    ]
  },
  q44: {
    correct: 'Que permita evaluar objetivamente su cumplimiento mediante métricas cuantitativas.',
    distractors: [
      'Que el enunciado del requerimiento no supere una extensión de 25 palabras.',
      'Que el costo económico de desarrollo esté presupuestado en moneda de curso legal.',
      'Que el requerimiento cuente con el visto bueno explícito de todos los directivos.'
    ]
  },
  q45: {
    correct: 'Porque emergen resistencias al cambio, temores de rol y barreras de comunicación humana.',
    distractors: [
      'Porque depende del lenguaje de programación y de la arquitectura de base de datos elegida.',
      'Porque los analistas de sistemas deben aplicar diagnósticos clínicos a cada entrevistado.',
      'Porque solo puede llevarse a cabo mediante encuestas anónimas distribuidas por correo.'
    ]
  },
  q46: {
    correct: 'Que el usuario conoce su tarea cotidiana pero desconoce el flujo global del negocio.',
    distractors: [
      'La dificultad física de los analistas al leer documentación técnica en pantallas chicas.',
      'Un fallo en el cableado de telecomunicaciones que aísla a una sucursal corporativa.',
      'La resistencia del equipo de desarrollo a incorporar nuevas tecnologías de frontend.'
    ]
  },
  q47: {
    correct: 'Cuanto más tarde se detecte un error en el ciclo de vida, exponencialmente más caro será repararlo.',
    distractors: [
      'Reparar un error de requerimientos en producción cuesta lo mismo que en la fase de análisis.',
      'Los errores cometidos durante la elicitación se resuelven sin costo adicional durante el testing.',
      'Resulta más rentable saltear la etapa de diseño para corregir los defectos directamente en código.'
    ]
  },
  q48: {
    correct: 'Inicia con cerradas de contexto, abre a reflexivas y cierra con cerradas para acordar.',
    distractors: [
      'Cuando el entrevistado solo tiene disponibilidad de 5 minutos y responde monosílabos.',
      'Parte de preguntas abiertas profundas y concluye con preguntas abiertas de prospección.',
      'Aplica únicamente preguntas cerradas predefinidas para tabular resultados estadísticos.'
    ]
  },
  q49: {
    correct: 'Usuarios intranquilos, necesidad de cambios profundos y búsqueda de consenso grupal.',
    distractors: [
      'Cuando el proyecto involucra un único analista y un solo usuario administrativo.',
      'Cuando se desea evitar el uso de ayudas visuales, pizarras y moderadores de debate.',
      'Proyectos donde los requerimientos están 100% estabilizados y no requieren debate.'
    ]
  },
  q50: {
    correct: 'El conjunto de criterios de aceptación que verifican si la historia está cumplida.',
    distractors: [
      'El diagrama de Gantt que detalla el presupuesto y horas asignadas a la historia.',
      'El código fuente ejecutable compilado en el entorno de desarrollo del programador.',
      'El acta formal de entrega firmada por los directivos de la empresa contratante.'
    ]
  },
  q51: {
    correct: 'Entre 1 a 3 semanas de trabajo.',
    distractors: [
      'Menos de 24 horas de desarrollo continuo.',
      'Entre 6 meses y un año calendario.',
      'Las historias de usuario nunca se estiman en tiempo.'
    ]
  },
  q52: {
    correct: 'Se descomponen en tareas técnicas en un tablero Kanban (Por hacer ➔ En curso ➔ Hecho).',
    distractors: [
      'Se redactan en informes impresos mensuales archivados en la dirección del proyecto.',
      'Se envían por correo electrónico a cada programador sin registrar su estado visual.',
      'Se gestionan exclusivamente mediante llamadas telefónicas diarias con el cliente.'
    ]
  },
  q53: {
    correct: 'El software funcionando.',
    distractors: [
      'La cantidad de páginas de especificación y modelos UML aprobados.',
      'El número de horas trabajadas registradas por los desarrolladores.',
      'El porcentaje del presupuesto financiero que ha sido ejecutado.'
    ]
  },
  q54: {
    correct: 'Aprovechar los cambios, aun en etapas tardías, como ventaja competitiva para el cliente.',
    distractors: [
      'Rechazar todo cambio posterior a la etapa de diseño aplicando penalidades contractuales.',
      'Aceptar únicamente cambios que no alteren la arquitectura de software ni el código base.',
      'Cancelar el proyecto y renegociar un nuevo contrato desde cero con el departamento legal.'
    ]
  },
  q55: {
    correct: 'Comunicación, Contrato, Costos, Planificación, Validación/Verificación y Gestión de cambios.',
    distractors: [
      'Compilación, Ensamblado, Depuración, Despliegue, Enlace y Optimización de código.',
      'Facturación, Auditoría contable, Liquidación de haberes, Impuestos, Cobranzas y Créditos.',
      'Publicidad, Posicionamiento web, Ventas, Relaciones públicas, Redes sociales y Prensa.'
    ]
  },
  q56: {
    correct: 'Tono imperativo y directo: "El sistema debe <verbo>..." reflejando una obligación formal.',
    distractors: [
      'Modo condicional o consultivo: "Sería conveniente si el sistema pudiera procesar...".',
      'Primera persona del singular: "Yo necesito que la aplicación muestre la pantalla de...".',
      'Preguntas retóricas abiertas: "¿De qué manera gestionará el software las consultas de...?".'
    ]
  },
  q57: {
    correct: 'Coherencia semántica: cada término utilizado se apoya en conceptos formalmente definidos.',
    distractors: [
      'Que el ciclo de vida del software debe iterar indefinidamente sin desplegar a producción.',
      'Que los diagramas de casos de uso y estados deben representarse siempre con geometrías curvas.',
      'Que las reuniones de seguimiento deben realizarse en mesas circulares para nivelar jerarquías.'
    ]
  },
  q58: {
    correct: 'Dimensionar servidores, almacenamiento y ancho de banda según carga y concurrencia.',
    distractors: [
      'Para capacitar a los usuarios finales en el uso de las interfaces de pantalla.',
      'Diseñar los casos de prueba unitarios para verificar la lógica de los algoritmos.',
      'Redactar las actas notariales de rescisión contractual en caso de incumplimientos.'
    ]
  },
  q59: {
    correct: 'Atributos de calidad: Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad.',
    distractors: [
      'Las tablas salariales mínimas sugeridas para profesionales de ingeniería de sistemas.',
      'Protocolos de comunicación serial y cableado estructurado para redes de área local.',
      'Métricas de productividad basadas exclusivamente en líneas de código fuente por día.'
    ]
  },
  q60: {
    correct: 'Modela cómo de un requisito fuente de alto nivel se deducen requisitos más detallados.',
    distractors: [
      'Indica que un requerimiento es copia textual idéntica de otro documento externo.',
      'Vincula un requerimiento con el caso de prueba unitario que certifica su cumplimiento.',
      'Declara que un componente de software satisface plenamente una cota de rendimiento.'
    ]
  },
  q61: {
    correct: 'El requerimiento padre se satisface solo si todos sus sub-requerimientos lo están.',
    distractors: [
      'Los sub-requerimientos se eliminan si el requerimiento padre se asigna a otro módulo.',
      'Permite que dos requerimientos hijos mantengan declaraciones deliberadamente opuestas.',
      'Establece que el requerimiento padre hereda las interfaces físicas de sus componentes.'
    ]
  },
  q62: {
    correct: '<<refine>>',
    distractors: [
      '<<verify>>',
      '<<derive>>',
      '<<satisfy>>'
    ]
  },
  q63: {
    correct: 'Expresa que un elemento de diseño o arquitectura da cumplimiento al requerimiento.',
    distractors: [
      'Vincula un requerimiento con el presupuesto económico aprobado por el cliente.',
      'Permite duplicar el texto del requerimiento en múltiples especificaciones técnicas.',
      'Mide el índice porcentual de satisfacción de los usuarios con la interfaz gráfica.'
    ]
  },
  q64: {
    correct: 'Facilidad de mantenimiento, extensibilidad, configurabilidad y portabilidad.',
    distractors: [
      'La tasa de transferencia de datos en megabits por segundo del servidor web.',
      'El horario de atención telefónica brindado por el servicio de soporte técnico.',
      'La tolerancia ante fallos físicos y la capacidad de recuperación ante desastres.'
    ]
  },
  q65: {
    correct: 'Secuencia de interacciones entre actor y sistema que produce un resultado de valor observable.',
    distractors: [
      'Una acción elemental indivisible del tipo presionar un botón o tipear un texto.',
      'Una tabla relacional de base de datos con sus correspondientes claves foráneas.',
      'Un componente arquitectónico desplegado en un contenedor del servidor de aplicaciones.'
    ]
  },
  q66: {
    correct: 'Un rol de usuario, un sistema informático externo o un dispositivo físico sensor.',
    distractors: [
      'Exclusivamente un ser humano que opera como usuario directo de la aplicación.',
      'Cualquier método u operación definida dentro de una clase de diseño del sistema.',
      'La base de datos relacional interna donde se guardan las tablas del sistema.'
    ]
  },
  q67: {
    correct: 'Una línea continua de Asociación que indica comunicación directa.',
    distractors: [
      'Una flecha discontinua de dependencia estereotipada <<include>>.',
      'Una relación de agregación con rombo blanco en el extremo del actor.',
      'Una línea de trazo discontinuo con el estereotipo <<extend>>.'
    ]
  },
  q68: {
    correct: 'Modela un caso de uso general que se especializa en casos de uso más específicos.',
    distractors: [
      'Indica que un caso de uso se ejecuta necesariamente después del otro en el tiempo.',
      'Convierte un caso de uso funcional en una restricción de calidad no funcional.',
      'Vincula un caso de uso con su pantalla correspondiente en la interfaz de usuario.'
    ]
  },
  q69: {
    correct: 'Negocio: procesos globales y valor hacia clientes; Sistema: requisitos de software.',
    distractors: [
      'Negocio: programados en Python; Sistema: construidos en microservicios sobre la nube.',
      'Negocio: sin actores externos; Sistema: exclusivamente con actores de hardware físico.',
      'Negocio: flujos de excepción; Sistema: flujos principales del camino básico del éxito.'
    ]
  },
  q70: {
    correct: 'Deben ser verdaderas antes de iniciar; si fallan, el caso de uso no puede ejecutarse.',
    distractors: [
      'Pueden no cumplirse y el caso de uso se desviará automáticamente hacia una excepción.',
      'Son opcionales y solo se aplican en los casos de uso conectados mediante <<extend>>.',
      'Se evalúan únicamente al finalizar el caso de uso para verificar que se guardó el registro.'
    ]
  }
};

const S2_UPDATES = {
  q19: {
    correct: 'Símbolo (#), accesible por la propia clase y por todas sus subclases.',
    distractors: [
      'Símbolo (-), accesible únicamente por la clase donde está definida.',
      'Símbolo (+), accesible públicamente por cualquier objeto del sistema.',
      'Símbolo (~), accesible exclusivamente por clases del mismo paquete.'
    ]
  },
  q20: {
    correct: 'La operación no altera ningún atributo (función pura sin efectos laterales).',
    distractors: [
      'Que la operación atiende múltiples peticiones concurrentes de red.',
      'Que solo puede llegar una llamada por vez mediante exclusión mutua.',
      'Que la operación es polimórfica y debe redefinirse en las subclases.'
    ]
  },
  q21: {
    correct: 'Asociación con multiplicidad muchos a muchos (*..*) y atributos propios del vínculo.',
    distractors: [
      'Cuando dos clases se relacionan mediante agregación débil con rombo vacío.',
      'Cuando una clase hereda simultáneamente de dos superclases abstractas.',
      'Cuando la relación entre dos clases es estrictamente reflexiva y temporal.'
    ]
  },
  q22: {
    correct: 'Composición: coincidencia de ciclo de vida; Agregación: las partes subsisten al todo.',
    distractors: [
      'En agregación las partes mueren con el todo; en composición subsisten.',
      'La agregación usa rombo negro relleno y la composición usa rombo blanco vacío.',
      'La composición requiere multiplicidad reflexiva; la agregación solo binaria.'
    ]
  },
  q23: {
    correct: 'Interfaces: manifiestan operaciones sin implementación; no tienen atributos ni estado.',
    distractors: [
      'Interfaces definen atributos protegidos; Clases abstractas solo públicos.',
      'Clases abstractas se instancian directamente; Interfaces nunca admiten polimorfismo.',
      'Interfaces son para lenguajes compilados; Clases abstractas para interpretados.'
    ]
  },
  q24: {
    correct: 'Modela el comportamiento dinámico de UNA CLASE PUNTUAL del dominio.',
    distractors: [
      'Modela el flujo de trabajo global de toda la organización entre departamentos.',
      'Modela la interacción temporal y mensajes entre múltiples actores del sistema.',
      'Modela la estructura estática de paquetes y componentes de despliegue.'
    ]
  },
  q25: {
    correct: '1. Acción de salida (exit) ➔ 2. Acción de la transición ➔ 3. Entrada (entry).',
    distractors: [
      '1. Acción de entrada (entry) ➔ 2. Transición ➔ 3. Acción de salida (exit).',
      '1. Acción de la transición ➔ 2. Salida (exit) ➔ 3. Acción de entrada (entry).',
      '1. Actividad do ➔ 2. Acción de la transición ➔ 3. Actividad do del siguiente.'
    ]
  },
  q26: {
    correct: 'Al valor real que la funcionalidad le aporta al rol o usuario de negocio.',
    distractors: [
      'Al ahorro de líneas de código o recursos de memoria en el servidor.',
      'Al costo económico en moneda de curso legal de la hora de desarrollo.',
      'Al nombre del componente de software o librería externa a utilizar.'
    ]
  },
  q27: {
    correct: 'Independiente, Negociable, Valiosa, Estimable, Small (pequeña) y Testeable.',
    distractors: [
      'Iterativa, Numérica, Válida, Estructurada, Secuencial y Terminada.',
      'Inmutable, Nominal, Visual, Estandarizada, Sistémica y Trazable.',
      'Integrada, Normalizada, Variable, Evolutiva, Sólida y Testeable.'
    ]
  },
  q28: {
    correct: '<paso> Sujeto + Verbo + Objeto.',
    distractors: [
      '<paso> Verbo en infinitivo + Complemento directo sin sujeto explícito.',
      '<paso> Sentencia condicional Si Condición Entonces Acción.',
      '<paso> Evento disparador + Método invocado en el controlador.'
    ]
  },
  q29: {
    correct: 'Excepciones terminan o abortan la operación; Alternativos son otras vías para lograr el objetivo.',
    distractors: [
      'Alternativos abortan el sistema; Excepciones continúan por caminos normales.',
      'Alternativos se modelan con rombo; Excepciones con barras de sincronización.',
      'Alternativos corresponden a errores de hardware; Excepciones a errores del usuario.'
    ]
  },
  q71: {
    correct: 'Inmutable: su valor no puede volver a modificarse tras su inicialización.',
    distractors: [
      'El atributo solo puede almacenar valores de tipo numérico entero positivo.',
      'El atributo es volátil y debe sincronizarse entre múltiples hilos concurrentes.',
      'El atributo solo puede ser accedido en modo de solo lectura por clases hijas.'
    ]
  },
  q72: {
    correct: 'La operación recibe el valor y puede modificarlo para devolverlo al llamador.',
    distractors: [
      'El parámetro es de solo lectura y no puede modificarse por la operación.',
      'El parámetro se pasa por valor creando una copia estricta en memoria local.',
      'El parámetro es opcional y toma un valor por defecto si no es provisto.'
    ]
  },
  q73: {
    correct: 'Atiende una sola llamada a la vez mediante exclusión mutua para consistencia.',
    distractors: [
      'La operación acepta llamadas concurrentes simultáneas sin ninguna restricción.',
      'La operación solo puede ejecutarse si el objeto se encuentra en estado Activo.',
      'La operación verifica una precondición booleana antes de iniciar el método.'
    ]
  },
  q74: {
    correct: 'Nombre con el que una clase expone a la otra, convirtiéndose en variable de instancia.',
    distractors: [
      'Indica el nombre del programador o autor de la clase en el repositorio de código.',
      'Define el nombre de la tabla de unión intermedia en una base de datos relacional.',
      'Especifica el alias público de la interfaz para servicios web tipo REST o SOAP.'
    ]
  },
  q75: {
    correct: 'Buscar sustantivos significativos y analizar listas de categorías conceptuales.',
    distractors: [
      'Aislar los verbos conjugados y traducirlos a nombres de clases abstractas.',
      'Elegir las pantallas de interfaz gráfica y crear una clase por cada botón o input.',
      'Mapear cada sentencia SQL del modelo de datos a una clase de entidad separada.'
    ]
  },
  q76: {
    correct: 'Participio (ej. "Facturado"), adjetivo ("Activo") o gerundio ("Procesando").',
    distractors: [
      'Verbo en infinitivo seguido de objeto (ej. "Validar Factura").',
      'Sustantivo en plural en minúsculas (ej. "facturas_pendientes").',
      'Expresión booleana entre corchetes (ej. "[total > 1000]").'
    ]
  },
  q77: {
    correct: 'When: evalúa condición booleana; After: mide transcurso de tiempo.',
    distractors: [
      'When: evento de tiempo periódico; After: condición booleana continua.',
      'When: captura señales de red; After: captura pulsaciones de teclado.',
      'When: llamada sincrónica; After: mensaje asincrónico entre hilos.'
    ]
  },
  q78: {
    correct: 'Comunicación asíncrona explícita entre objetos mediante envío de una señal.',
    distractors: [
      'Una llamada síncrona a una operación donde el emisor se bloquea hasta la respuesta.',
      'Una condición lógica interna del objeto que cambia de valor verdadero a falso.',
      'El transcurso de un intervalo de tiempo especificado en milisegundos o segundos.'
    ]
  },
  q79: {
    correct: 'do: actividad continua que puede interrumpirse; entry/exit: acciones atómicas e instantáneas.',
    distractors: [
      'do: ejecución instantánea indivisible; entry/exit: actividades continuas en el tiempo.',
      'do: evalúa condiciones de guarda; entry/exit: transfieren datos hacia la base de datos.',
      'do: ejecuta transiciones externas; entry/exit: sincronizan subestados concurrentes.'
    ]
  },
  q80: {
    correct: 'Regiones concurrentes separadas por líneas de puntos que se ejecutan en simultáneo.',
    distractors: [
      'Subestados mutuamente excluyentes donde solo uno puede estar activo a la vez.',
      'Estados que carecen de transiciones de entrada y solo poseen eventos de salida.',
      'Estados terminales que finalizan el ciclo de vida de la clase en memoria.'
    ]
  },
  q81: {
    correct: 'Subestados disyuntivos (XOR): el objeto está en exactamente uno de ellos a la vez.',
    distractors: [
      'Regiones concurrentes que operan en paralelo compartiendo variables de estado.',
      'Estados sin acción de entrada pero con múltiples actividades continuas do.',
      'Transiciones que no requieren evento disparador y operan por finalización.'
    ]
  },
  q82: {
    correct: 'Interna: maneja eventos sin salir del estado (no ejecuta exit/entry); Auto-transición: sale y reingresa.',
    distractors: [
      'La interna ejecuta entry y exit; la auto-transición no ejecuta ninguna de las dos.',
      'La interna requiere una guarda de tiempo; la auto-transición solo responde a señales.',
      'La interna modifica el nombre del estado; la auto-transición restablece los atributos.'
    ]
  },
  q83: {
    correct: 'Relación "usa un": una clase depende de otra porque la usa como parámetro o variable local.',
    distractors: [
      'Una relación de herencia entre una clase abstracta y su implementación concreta.',
      'Una asociación bidireccional donde ambas clases mantienen punteros permanentes.',
      'Una relación de composición donde el ciclo de vida de ambas clases coincide.'
    ]
  },
  q84: {
    correct: 'Pertenecen a la clase en sí y son compartidos por todas sus instancias (subrayados).',
    distractors: [
      'Pertenecen a una instancia específica y se replican en cada objeto creado.',
      'Son de acceso exclusivo para clases declaradas en paquetes de infraestructura.',
      'Son inmutables y no admiten operaciones polimórficas en tiempo de ejecución.'
    ]
  },
  q85: {
    correct: '0..* indica relación opcional (cero o más); 1..* indica presencia obligatoria (uno o más).',
    distractors: [
      '0..* exige al menos un objeto asociado; 1..* admite relaciones opcionales vacías.',
      '0..* solo se aplica en asociaciones reflexivas; 1..* solo en clases de asociación.',
      '0..* indica composición fuerte; 1..* indica agregación compartida con rombo blanco.'
    ]
  },
  q86: {
    correct: 'Permite tratar objetos de subclases uniformemente a través de la interfaz de la superclase.',
    distractors: [
      'Que las subclases no pueden añadir nuevos atributos ni redefinir métodos heredados.',
      'Que todas las clases del modelo deben derivar obligatoriamente de una clase Raíz común.',
      'Que los métodos estáticos se sobrecargan automáticamente según los parámetros pasados.'
    ]
  },
  q87: {
    correct: 'Clase sin instancias que agrupa colecciones de atributos y operaciones globales/estáticas.',
    distractors: [
      'Una clase que solo contiene operaciones de persistencia hacia bases de datos relacionales.',
      'Una clase auxiliar que únicamente se utiliza para gestionar pruebas unitarias de software.',
      'Una interfaz gráfica que implementa controladores de eventos para formularios de usuario.'
    ]
  },
  q88: {
    correct: 'Diseñar casos para el camino básico (éxito) y casos para cada escenario alternativo y excepción.',
    distractors: [
      'Testear únicamente el código fuente compilado mediante herramientas de análisis estático.',
      'Verificar exclusivamente los requerimientos no funcionales de tiempo de respuesta y carga.',
      'Generar pruebas aleatorias de estrés masivo sobre los puertos del servidor web.'
    ]
  },
  q89: {
    correct: 'Garantizan el estado del sistema tras la finalización exitosa del caso de uso.',
    distractors: [
      'Deben ser evaluadas antes del disparo del caso de uso junto con las precondiciones.',
      'Son recomendaciones no vinculantes que los desarrolladores pueden obviar en el código.',
      'Se aplican únicamente cuando el caso de uso es interrumpido por un fallo de hardware.'
    ]
  },
  q90: {
    correct: 'Mapeo formal que vincula cada requerimiento con las clases y componentes que lo implementan.',
    distractors: [
      'El cálculo del costo financiero por cada hora de programación consumida por el equipo.',
      'El registro cronológico de commits y pull requests efectuados en el repositorio Git.',
      'La asignación de permisos de seguridad de base de datos para cada rol de usuario.'
    ]
  }
};

// Now function to place correct option at an unpredictable index across questions!
function updateFile(filePath, updates) {
  let content = fs.readFileSync(filePath, 'utf8');
  let qIndex = 0;
  
  for (const [id, data] of Object.entries(updates)) {
    // Target correct index rotates through 0, 1, 2, 3 so it is completely balanced!
    const targetIdx = qIndex % 4;
    qIndex++;

    const options = [];
    let dIdx = 0;
    for (let i = 0; i < 4; i++) {
      if (i === targetIdx) {
        options.push(data.correct);
      } else {
        options.push(data.distractors[dIdx++]);
      }
    }

    const formattedOptions = 'options: [\n' + options.map(o => `      '${o.replace(/'/g, "\\'")}'`).join(',\n') + '\n    ]';
    const formattedCorrect = `correctIndex: ${targetIdx}`;

    // Replace in file
    // Match question block for id
    const blockRegex = new RegExp(`(\\{\\s*id:\\s*'${id}'[\\s\\S]*?options:\\s*\\[)[\\s\\S]*?(\\][\\s\\S]*?correctIndex:\\s*)\\d+`, 'g');
    if (!content.match(blockRegex)) {
      console.error(`Could not find question block for ${id} in ${filePath}`);
      continue;
    }

    content = content.replace(blockRegex, `$1\n${options.map(o => `      '${o.replace(/'/g, "\\'")}'`).join(',\n')}\n    $2${targetIdx}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated ${Object.keys(updates).length} questions in ${filePath}`);
}

updateFile('src/data/systemsCourseData.ts', S1_UPDATES);
updateFile('src/data/semester2Data.ts', S2_UPDATES);
