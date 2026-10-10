# Análisis de Sistemas - Plataforma Interactiva de Estudio

Aplicación web educativa para estudiar los contenidos de **Análisis de Sistemas de Información** mediante lectura guiada, búsqueda inteligente, fichas de estudio y evaluaciones interactivas.

El proyecto está orientado a estudiantes de la carrera de Ingeniería en Sistemas y reúne en una sola plataforma el material de estudio, herramientas de consulta y actividades de autoevaluación.

## Funcionalidades

- Lectura organizada del resumen de la asignatura.
- Búsqueda inteligente dentro del contenido.
- Cuestionarios y evaluaciones de práctica.
- Fichas de estudio para repasar conceptos importantes.
- Visualización de diagramas y material complementario.
- Funcionamiento como PWA con soporte para uso sin conexión.
- Interfaz adaptable para distintos tamaños de pantalla.

## Tecnologías

- React y TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion
- Integración opcional con Google Gemini para funciones inteligentes

## Requisitos

- Node.js 18 o superior
- npm
- Una clave `GEMINI_API_KEY` solo si se utilizan las funciones que requieren Gemini

## Instalación y ejecución

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

Para generar y previsualizar una versión de producción:

```bash
npm run build
npm run preview
```

Para comprobar los tipos de TypeScript:

```bash
npm run lint
```

## Variables de entorno

Copia `.env.example` como `.env.local` y agrega la clave correspondiente cuando sea necesario:

```env
GEMINI_API_KEY=tu_clave_aqui
```

Los archivos de entorno locales están excluidos del repositorio mediante `.gitignore`.

## Uso sin conexión

La aplicación funciona como PWA. Después de abrirla una vez con internet, el navegador puede conservar el shell, los archivos JavaScript/CSS y los datos locales. Para probar la versión offline, ejecuta `npm run build`, sirve la carpeta `dist` mediante `localhost` o HTTPS, abre la aplicación una vez y luego desactiva la red.

El service worker no se activa desde `file://` ni durante el modo de desarrollo de Vite.

## Despliegue en Netlify

El proyecto está preparado para desplegarse de manera continua y automática en Netlify:

1. **Configuración de Build:**
   - **Comando de compilación (*Build command*):** `npm run build`
   - **Directorio de publicación (*Publish directory*):** `dist`
2. **Uso del archivo `netlify.toml`:**
   - La raíz del proyecto incluye un archivo `netlify.toml` que define de forma automática el comando de build (`npm run build`), el directorio de salida (`dist`), los encabezados de caché para la PWA (`sw.js` y `manifest.webmanifest`) y las reglas de seguridad.
3. **Redirección SPA:**
   - El archivo `netlify.toml` contiene la regla de redirección `/*` hacia `/index.html` con código HTTP 200 (`status = 200`), asegurando que la navegación interna y las rutas de la aplicación de una sola página (SPA) funcionen correctamente sin arrojar errores 404 al recargar el navegador.
4. **Configuración de variables de entorno:**
   - En el panel de Netlify (**Site configuration** > **Environment variables**), puedes definir:
     - `GEMINI_API_KEY` (o `VITE_GEMINI_API_KEY`): Clave de API de Gemini si utilizas funciones de inteligencia artificial.
     - `APP_URL`: URL asignada a tu sitio en Netlify (por ejemplo, `https://tu-sitio.netlify.app`).

## Estructura principal

- `src/`: componentes, estilos, datos y lógica de la aplicación.
- `public/`: recursos públicos y archivos necesarios para la PWA.
- `scratch/`: material auxiliar utilizado durante el desarrollo.
- `inject_diagrams.cjs`: script auxiliar para preparar diagramas o contenido complementario.
- `netlify.toml`: configuración de despliegue y reglas de redirección SPA en Netlify.
- `vercel.json`: configuración de despliegue en Vercel.

## Contexto académico

Proyecto desarrollado para la asignatura **Análisis de Sistemas de Información**, con material basado en el resumen de la materia de la UTN FRLP.